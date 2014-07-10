from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext import webapp
from google.appengine.api import users
from google.appengine.ext.webapp import template
from google.appengine.ext import db
from google.appengine.api import mail
import logging
import os
import simplejson as json
from hindi import hindi
from kannada import kannada
from tamil import tamil
from bengali import bengali

class KKAUser(db.Model):
    fbuid = db.StringProperty(indexed=True)
    lang = db.IntegerProperty()

class KKAScore(db.Model):
    user = db.ReferenceProperty(KKAUser)
    score = db.IntegerProperty(indexed=True)
    games = db.IntegerProperty()
    words = db.IntegerProperty()
    type = db.IntegerProperty(indexed=True)

class AksharitIncUserData(webapp.RequestHandler):
    def post(self):
        #print("INC user data: "+json.dumps(self.request))
        data = json.loads(self.request.get('d'))
        i = -1
        for lang in data:
            i += 1
            for uid in lang:
                udata = lang[uid]
                try:
                    print(json.dumps(udata))
                    kkauser = KKAUser.all().filter("fbuid", uid).get()
                    if kkauser:
                        kkascore = kkauser.kkascore_set.filter("type",i).get()
                        if kkascore:
                            kkascore.score += udata['s']
                            kkascore.games += 1
                            kkascore.words += udata['w']
                            kkascore.put()
                        else:
                            kkascore = KKAScore(score=udata['s'],games=1,words=udata['w'],type=i,user=kkauser)
                            kkascore.put()
                    else:
                        kkauser = KKAUser(fbuid=uid,lang=i)
                        kkauser.put()
                        kkascore = KKAScore(score=udata['s'],games=1,words=udata['w'],type=i,user=kkauser)
                        kkascore.put()
                except ValueError:
                    continue
        self.response.out.write("OK")

class AksharitGetUserData(webapp.RequestHandler):
    def get(self,uid):
        callback = self.request.get("callback",None)
        kkauser = KKAUser.all().filter("fbuid",uid).get()
        if kkauser:
            kkascore = kkauser.kkascore_set.filter("type",kkauser.lang).get()
            if not kkascore:
                if (kkauser.lang == -1):
                    kkascore = KKAScore(score=0,games=0,words=0,type=-1,user=kkauser)
                else:
                    kkascore = KKAScore(score=0,games=0,words=0,type=kkauser.lang,user=kkauser)
                    kkascore.put()
            print("GET user data:"+uid)
            if callback:
                self.response.out.write(callback+"("+json.dumps({'u':uid,'s':kkascore.score,'g':kkascore.games,'w':kkascore.words,'l':kkauser.lang})+")")
            else:
                self.response.out.write(json.dumps({'u':uid,'s':kkascore.score,'g':kkascore.games,'w':kkascore.words,'l':kkauser.lang}))
        else:
            print("GET user data none:"+uid)
            if callback:
                self.response.out.write(callback+"("+json.dumps({'u':uid,'s':0,'g':0,'w':0,'l':-1})+")")
            else:
                self.response.out.write(json.dumps({'u':uid,'s':0,'g':0,'w':0,'l':-1}))

class AksharitUpdateUserLang(webapp.RequestHandler):
    def get(self,uid):
        callback = self.request.get("callback",None)
        lang = int(self.request.get("lang",0))
        kkauser = KKAUser.all().filter("fbuid",uid).get()
        if kkauser:
            kkauser.lang = lang
            kkauser.put()
        else:
            kkauser = KKAUser(fbuid=uid,lang=lang)
            kkauser.put()
        if callback:
            self.response.out.write(callback+'({"s":1})')
        else:
            self.response.out.write('{"s":1}')


class FeedbackHandler(webapp.RequestHandler):
    def post(self):
        msg = self.request.get("fbmsg")
        mail.send_mail(sender=users.get_current_user().email(),
                        to="chrome@madratgames.com",
                        subject="Word Makti Feedback",
                        body=msg)
        
class LogoutHandler(webapp.RequestHandler):
    def get(self):
        self.response.out.write("You are now logged out of Word Makti")

class MainHandler(webapp.RequestHandler):
    def get(self):
        s = self.request.get('s',None)
        ua = self.request.headers['User-Agent']
        if s or ua.find('Googlebot') != -1 or ua.find('facebookexternalhit') != -1 or ua.find('Twitterbot') != -1:
            t = self.request.get('t',"MadRat Games - Word Makti")
            d = self.request.get('d',"I am playing Word Matki, the world's first Indian Language Word Game")
            i = self.request.get('i',"http://wordmatki.aksharit.com/images/word-matki-logo.png")
            path = os.path.join(os.path.dirname(__file__), 'templates','sharer.html')
            self.response.out.write(template.render(path,{'t':t,'d':d,'i':i}))
        else:
            user = users.get_current_user()
            if not user:
                self.redirect(users.create_login_url(self.request.uri))
            else:
                path = os.path.join(os.path.dirname(__file__),'templates','index.html')
                self.response.out.write(template.render(path,{'uid':user.user_id(),'uname':user.nickname(),'logout_url':users.create_logout_url("/logout")}))

langes = ['hi','ta','bn','kn'];
locallanges = [hindi, tamil, bengali, kannada]
class ValidateHandler(webapp.RequestHandler):
    def get(self):
        import base64,urllib2
        try:
            enc_word = self.request.get('w')
            ln = int(self.request.get('l',0))
            lang = langes[ln]
            dec_word = base64.b64decode(enc_word)
            found = False
            if locallanges[ln].has_key(dec_word):
                found = True
            else:
                url = "http://www.google.com/dictionary/json?callback=f&q="+"%"+("%").join([hex(ord(x))[2:] for x in dec_word])+"&sl="+lang+"&tl=en"
                ret = urllib2.urlopen(url).read()
                if (ret.find('primaries') != -1):
                    found = True
            logging.info("Lang: "+lang+", Word: "+dec_word+", found: "+str(found))
            if found:
                nw = 0
                for i in range(0,len(dec_word),3):
                    if (ord(dec_word[i]) == 0xe0 and (ord(dec_word[i+1]) == 0xa4 or ord(dec_word[i+1]) == 0xae or ord(dec_word[i+1]) == 0xa6 or ord(dec_word[i+1]) == 0xb2) and ord(dec_word[i+2]) >= 0x95 and ord(dec_word[i+2]) <= 0xb9):
                        nw += 1
                if nw == 2:
                    self.response.out.write(json.dumps({'s':2}))
                else:
                    self.response.out.write(json.dumps({'s':(nw-2)*5}))
            else:
                self.response.out.write(json.dumps({'s':0}))
        except KeyError:
            self.response.out.write(json.dumps({'s':-1}))

application = webapp.WSGIApplication([("/", MainHandler),
                                      ("/logout", LogoutHandler),
                                      ("/feedback", FeedbackHandler),
                                      ("/validate", ValidateHandler),
                                      (r'/aksharit_get_user_data/(\d+)/', AksharitGetUserData),
                                      (r'/aksharit_update_user_lang/(\d+)/', AksharitUpdateUserLang),
                                      (r'/aksharit_inc_user_data/', AksharitIncUserData),
                                     ],
                                      debug=True)
run_wsgi_app(application)

require"json"
require"math"

game_sess_list ={}
game_sess_reverse_list = {}

curr_games = {}
prev_games = {}
online_users = {}
users = {}
done_words = {}
session_scores = {}
sess_lang_list = {}
curr_rand_letters = {}
curr_sess_end_time = 0
curr_sess_start_time = 0

BEFORE_START = 1
IN_SESSION = 2
BETWEEN_SESSIONS = 3
curr_state = BEFORE_START

--SERVER = "localhost:9000"
--SERVER = "www.gamooga.com"
SERVER = "wordmatki.appspot.com"
WORDS_SERVER = "wordmatki.appspot.com"

SESSION_TIME = 165
INTERVAL_TIME = 10
BUFFER_TIME = 3

MAX_LANG = 4

for i=1,MAX_LANG do
    game_sess_list[i] = {}
    users[i] = {}
    game_sess_reverse_list[i] = {}
end

function room_on_join(sess, data)
    print(data)
    dmsg = json.decode(data)
    nick = dmsg['fn']
    uid = dmsg['uid']
    lang = dmsg['lang']
    print("lang: "..tostring(lang))
    if (lang+1 > MAX_LANG) then
        lang = MAX_LANG - 1
    end
    resp = {}
    resp_data = {t=1, n=nick, u=uid, l=lang}
    resp_data_j = json.encode(resp_data)
    online_users = {{{nick,uid,lang},0}}
    for k,v in pairs(game_sess_list[lang+1]) do
        table.insert(resp, {k,resp_data_j,false})
        table.insert(online_users, {v,session_scores[v[2]] or 0})
    end
    rmsg = {t=2,l=online_users}
    if curr_state == BEFORE_START then
        start_new_session()
    end
    if curr_state == IN_SESSION then
        rmsg['cl'] = curr_rand_letters[lang+1]
        rmsg['cs'] = curr_state
        rmsg['ct'] = (curr_sess_end_time - gamooga.time_ms()) / 1000
    else
        rmsg['cs'] = curr_state
        rmsg['ct'] = (curr_sess_start_time - gamooga.time_ms()) / 1000
    end
    table.insert(resp, {sess, json.encode(rmsg), false})
    sess_lang_list[sess] = lang+1
    game_sess_list[lang+1][sess]={nick,uid,lang}
    users[lang+1][uid] = {s=0,w=0}
    game_sess_reverse_list[lang+1][nick] = sess
    done_words[uid]={}
    session_scores[uid] = 0
    print(json.encode(resp))
    return resp
end

hindi_dices = {
    {1,7,25,27,32,16},  -- 1
    {9,20,25,28,32,33}, -- 2
    {4,14,16,18,25,27}, -- 3
    {16,20,21,24,32,33},-- 4
    {16,20,23,27,32,33},-- 5
    {11,13,23,25,27,28},-- 6
    {3,20,23,26,30,33}, -- 7
    {1,4,18,22,25,30},  -- 8
    {13,21,26,27,28,7},-- 9
    {1,3,16,17,26,32},  --10
    {1,3,19,26,27,30},  --11
    {1,8,11,21,28,33},  --12
    {8,20,21,24,27,29}, --13
    {1,2,6,19,23,29},   --14
    {6,8,16,22,28,29},  --15
    {2,11,12,18,20,25}  --16
}

tamil_dices = {
    {8,11,19,21,8,13},
    {15,11,14,8,14,18},
    {12,10,11,8,1,9},
    {6,11,6,12,3,14},
    {6,3,19,1,11,1},
    {10,1,10,1,13,6},
    {6,1,1,12,8,8},
    {9,14,11,18,11,19},
    {1,12,11,8,1,21},
    {8,1,15,1,13,8},
    {3,7,8,16,11,14},
    {21,12,11,10,14,8},
    {11,13,10,16,6,12},
    {8,12,10,11,15,11},
    {6,12,6,1,9,8},
    {11,9,23,3,16,22}
}

bengali_dices = {
    {4,26,29,9,16,3},
    {4,30,11,16,25,18},
    {4,27,8,1,2,23},
    {4,29,27,3,2,8},
    {4,25,18,1,30,31},
    {28,13,21,27,28,26},
    {3,26,1,17,16,31},
    {28,22,23,6,1,8},
    {8,16,28,21,32,1},
    {28,1,8,21,18,23},
    {27,18,25,31,24,16},
    {11,17,32,6,27,23},
    {31,28,32,22,20,8},
    {20,21,31,16,27,32},
    {20,27,21,8,24,23},
    {31,1,25,24,27,18}
}

kannada_dices = {
    {34,11,25,24,27,18},
    {34,20,29,6,22,35},
    {16,3,34,1,17,26},
    {8,1,29,21,27,35},
    {25,11,23,13,27,6},
    {12,25,11,2,20,18},
    {7,2,1,23,31,19},
    {24,27,31,8,21,20},
    {29,21,26,27,13,30},
    {32,16,23,31,19,26},
    {17,3,35,20,32,23},
    {16,35,20,24,34,21},
    {27,6,22,16,8,29},
    {22,25,4,18,32,1},
    {25,18,2,16,11,4},
    {27,26,32,19,1,3}
}

dices = {hindi_dices,tamil_dices,bengali_dices,kannada_dices}

function get_random_letters()
    letters = {}
    for i,v in ipairs(dices) do
        langletters = {}
        for j,w in ipairs(v) do
            table.insert(langletters, w[math.random(6)])
        end
        print("LANGLETTERS:"..json.encode(langletters))
        table.insert(letters, langletters)
    end
    print("LETTERS:"..json.encode(letters))
    return letters
end

function game_restart(data)
    resp = {}
    start_new_session()
    for i=1,MAX_LANG do
        for k,v in pairs(game_sess_list[i]) do
            table.insert(resp, {k,json.encode({t=3,w=curr_rand_letters[i],tm=SESSION_TIME}),false})
        end
    end
    return resp
end

function game_timeout(data)
    resp = {}
    for i=1,MAX_LANG do    
        for k,v in pairs(game_sess_list[i]) do
            table.insert(resp, {k,json.encode({t=4,tm=INTERVAL_TIME}),false})
        end
    end
    curr_state = BETWEEN_SESSIONS
    curr_sess_start_time = gamooga.time_ms() + INTERVAL_TIME * 1000
    gamooga.call_later((INTERVAL_TIME+BUFFER_TIME)*1000, "game_restart", "")
    --[[http_users = {}
    for i=1,MAX_LANG do
        http_users[i] = {}
        for k,v in pairs(users) do
            http_users[i][k] = json.encode(v)
        end
    end]]
    done_words = {}
    session_scores = {}
    gamooga.http_post("http://"..SERVER.."/aksharit_inc_user_data/", json.encode({d=json.encode(users)}))
    for i,v in ipairs(users) do
        for k,v in pairs(v) do
            v['s'] = 0
            v['w'] = 0
        end
    end
    return resp
end

function room_on_message(sess, msg)
    dmsg = json.decode(msg)
    resp = {}
    if (dmsg['t'] == 1) then
        start_new_session()
        rmsg = {t=3,w=curr_rand_letters[sess_lang_list[sess]],tm=SESSION_TIME}
    elseif (dmsg['t'] == 2) then
        if done_words[game_sess_list[sess_lang_list[sess]][sess][2]] == nil then
            done_words[game_sess_list[sess_lang_list[sess]][sess][2]] = {}
        end
        if done_words[game_sess_list[sess_lang_list[sess]][sess][2]][dmsg['w']] == true then
            rmsg = {t=5,w=dmsg['w'],f=game_sess_list[sess_lang_list[sess]][sess],s=-10}
        else
            code, value = gamooga.http_get("http://"..WORDS_SERVER.."/validate?w="..dmsg['w'].."&l="..game_sess_list[sess_lang_list[sess]][sess][3])
            dvalue = json.decode(value)
            rmsg = {t=5,w=dmsg['w'],f=game_sess_list[sess_lang_list[sess]][sess],s=dvalue['s']}
            rmsg_oth = {t=5,f=game_sess_list[sess_lang_list[sess]][sess],s=dvalue['s'],o=true}
            if (dvalue['s'] > 0) then
                if (session_scores[game_sess_list[sess_lang_list[sess]][sess][2]] == nil) then
                    session_scores[game_sess_list[sess_lang_list[sess]][sess][2]] = 0
                end
                session_scores[game_sess_list[sess_lang_list[sess]][sess][2]] = session_scores[game_sess_list[sess_lang_list[sess]][sess][2]] + dvalue['s']
                done_words[game_sess_list[sess_lang_list[sess]][sess][2]][dmsg['w']] = true
                users[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][2]]['s'] = users[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][2]]['s'] + dvalue['s']
                users[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][2]]['w'] = users[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][2]]['w'] + 1
                rmsg_oth_j = json.encode(rmsg_oth)
                for k,v in pairs(game_sess_list[sess_lang_list[sess]]) do
                    if (k ~= sess) then
                        table.insert(resp,{k,rmsg_oth_j,false})
                    end
                end
            end
        end
    elseif (dmsg['t'] == 3) then
        rmsg = {t=6,c=dmsg['c'],f=game_sess_list[sess_lang_list[sess]][sess][2]}
        rmsg_j = json.encode(rmsg)
        for k,v in pairs(game_sess_list[sess_lang_list[sess]]) do
            table.insert(resp, {sess,rmsg_j,false})
        end
        return resp
    end
    rmsg_j = json.encode(rmsg)
    --for k,v in pairs(game_sess_list[sess_lang_list[sess]]) do
    table.insert(resp, {sess,rmsg_j,false})
    --end
    return resp
end

function start_new_session()
    done_words = {}
    curr_rand_letters = get_random_letters()
    curr_state = IN_SESSION
    curr_sess_end_time = gamooga.time_ms() + SESSION_TIME*1000;        
    gamooga.call_later((SESSION_TIME+BUFFER_TIME)*1000, "game_timeout", "")
end

function room_on_disconnect(sess)
    resp = {}
    if game_sess_reverse_list[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][1]] ~= sess then
        return nil
    end
    users[sess_lang_list[sess]][game_sess_list[sess_lang_list[sess]][sess][2]] = nil
    rmsg = {t=7,i=game_sess_list[sess_lang_list[sess]][sess]}
    game_sess_list[sess_lang_list[sess]][sess] = nil
    rmsg_j = json.encode(rmsg)
    for k,v in pairs(game_sess_list[sess_lang_list[sess]]) do
        table.insert(resp, {k,rmsg_j, false})
    end
    sess_lang_list[sess] = nil
    return resp
end

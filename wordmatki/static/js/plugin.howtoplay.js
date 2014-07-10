(function( $ ){
                         
      //master functio /initialization
      $.fn.howToPlayMakti=function(options){
           
           //default options
            var defaults={
            	images:null,
            	bgImage:null,
            	path:null,
            	width:510,
            	height:600,
            	callback:null         
             };
           
                     
             // apply default options
             var options = $.extend(defaults, options);
             
             
             wHeight=$(window).height();
             wWidth=$(window).width();
             
             //overlay
             $("<div></div>").css({
             	position:"fixed",
              	left:0, 
              	top:0,
              	width:wWidth,
              	height:wHeight,
              	background:"#000",
             	 opacity:.9,
             	 zIndex:1000
              }).attr({id:"howToPlayMakti_ol"}).prependTo(this).hide();
              
              
              //lb
              $('<div><ul></ul></div>').css({
             	position:"absolute",
              	left:0, 
              	top:0,
              	width:options.width,
              	height:options.height,
              	background:"url("+options.path+options.bgImage+")",
              	overflow:"hidden",
              	left: wWidth/2- options.width/2,
              	top:wHeight/2 - options.height/2,
             	zIndex:1001
              }).attr({id:"howToPlayMakti_lb"}).prependTo(this).hide();
              
             var overlay=$("#howToPlayMakti_ol");
             var lb= $("#howToPlayMakti_lb");
              
            $("ul",lb).width(options.width*options.images.length).css({position:"absolute"});
            
            //close button
            $('<a href="javascript:;" ><img src="'+options.path+'how-to-play-close.png" /></a>').
            css({position:"absolute",right:20,top:20,zIndex:1002})
            .attr({id:"htp_close"})
            .prependTo(lb).click(function(){
            	$(overlay).fadeOut();
            	$(lb).fadeOut();
            });
            
            var current_idx=0;
            
            //next btn and it actions
            $('<a href="javascript:;" ><img src="'+options.path+'btn-slide-show-next.png" /></a>').
            css({position:"absolute",right:20,bottom:30})
            .attr({id:"htp_next"})
            .appendTo(lb);
            $("#htp_next, #howToPlayMakti_lb ul").click(function(){
            	
            	if($("#htp_next").css("display")=="none"){
            		return false;
            	}
            	
            	$("#htp_start_message").hide();
            	
            	$("#htp_prev").show();
            	
            	pos=$("ul",lb).position();
            	
            	current_idx++;
            	
            	$("#htp_count").html((current_idx+1)+'/'+options.images.length);
            	
            	$("ul",lb).animate({left:-options.width*current_idx},500);
            	            	          	         	            	
            	if(current_idx>=options.images.length-1){
            		$("#htp_next").fadeOut("fast");
            		
            		$("#htp_start").show();
            	}           	         	
            });
            
            
            //lets start
            $('<a href="javascript:;" ><img src="'+options.path+'let-start-btn.png" /></a>').
            css({position:"absolute",right:20,bottom:20})
            .attr({id:"htp_start"})
            .appendTo(lb).click(function(){
            	                     	
            	if(options.callback){
            		options.callback();
            		$("#htp_close").click();
            	}
            	
            }).hide();
            
            
            //prev btn
            $('<a href="javascript:;" ><img src="'+options.path+'btn-slide-show-back.png" /></a>').
            css({position:"absolute",left:20,bottom:30})
             .attr({id:"htp_prev"})
            .appendTo(lb).click(function(e){
            	
            	e.preventDefault();
            	
            	if($(this).css("display")=="none"){
            		return false;
            	}
            	
            	$("#htp_start").hide();
            	            	
            	$("#htp_next").show();
            	current_idx--; 
           	    
           	   $("#htp_count").html((current_idx+1)+'/'+options.images.length);
           	            	          	           	           	
            	pos=$("ul",lb).position();
            	            	          	
            	$("ul",lb).animate({left:-options.width*current_idx},500);
            	          	            	
            	if(current_idx==0){
            		current_idx=0;
            		$(this).fadeOut("fast");
            	}
            	
            }).hide();
            
            //enabling key actions for page change
			$(document).keydown(function (evt) {
			    if(evt.keyCode==37){ //prev
			    	$("#htp_prev").click();
			    }
			    else if(evt.keyCode==39){ //next
			    	$("#htp_next").click();    	
			    }
			});
            
            
            //$('<span>PRESS NEXT TO FIND OUT HOW!</span>').
            //attr({id:"htp_start_message"})
            //.css({display:"block",color:"#fff",fontSize:14,fontWeight:700,textTransform:"Uppercase",
            //position:"absolute",left:120,bottom:5})
            //.appendTo(lb).hide();
            
            //$('<span>1/'+options.images.length+'</span>').
            //attr({id:"htp_count"})
            //.css({display:"block",color:"#fff",fontSize:14,fontWeight:700,textTransform:"Uppercase",
            //position:"absolute",left:485,bottom:5})
            //.appendTo(lb).hide();
           
             
              $(options.images).each(function(i){             	
              	$('<li><img src="'+options.path+this+'" /></li>').css({
              		width:options.width,
              		height:options.height,
              		float:"left"
              	}).appendTo("#howToPlayMakti_lb ul");
              });
            
            
            //linking click
            $("a[rel=howtoplay]").click(function(){
            	$("ul",lb).css({left:0})
            	current_idx=0
            	
            	//$("#htp_count").html((current_idx+1)+'/'+options.images.length);
            	//$("#htp_start_message").show();
            	           	
            	$("#htp_next").fadeIn();
            	$("#htp_prev, #htp_start").hide();
            	
            	$(overlay).fadeIn();
            	$(lb).fadeIn();
            	
            }).attr({href:"javascript:;"});
          
            //function run animation
            $.fn.open=function(options){           	
            	//options = $.extend(defaults, options);            	         	           	
            }
               
            
            
     //return master obj
     
     return this;        
                                        

     }//MASTER FUNCTION END
     
})( jQuery ); 
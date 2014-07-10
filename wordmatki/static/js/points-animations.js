				function runPointsAnimation(type,point,x,y,movie_height, snd_play){
										
					if($("#points-animation-object").length<=0){
						$('<div id="points-animation-object"  ><span><label></label></span></div>')
						.appendTo("#pillar-animation-ctr");					
					}
													
					animation_movie_port=$("#points-animation-object");
					animation_object=$("span",animation_movie_port);
					animation_point_label=$("label",animation_object).html("");
										
					if(point>0)
					$(animation_point_label).html("+"+point);
					
					$(animation_movie_port).removeClass().addClass(type).css({right:x,top:y,height:movie_height});
					$(animation_movie_port).show();
					
					animating=true;
										
  					$(animation_object).stop();
					$(animation_object).css({opacity:1,bottom:0});
					
					$anim=$(animation_object).animate({bottom:movie_height-$(animation_object).height(),opacity:0},800,function(){ //frame 1
						
						//frame 2
						/*$(animation_object).animate({bottom:movie_height-$(animation_object).height(),opacity:0},800,function(){
							animating=false;
						});*/
						
					});
					if (snd_play) {
                        if(type=="repeat" || type=="wrong"){
                            snd = new Audio("sounds/wrong-word.ogg");
                        }
                        else{
                            snd = new Audio("sounds/pass.ogg");
                        }
					
                        snd.play();
                        $(snd).bind("ended",function(){
                            $(animation_movie_port).hide();
                        });
                    } else {
                        setTimeout(function() {
                            $(animation_movie_port).hide();
                        }, 1500);
                    }
				}

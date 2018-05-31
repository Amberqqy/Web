$(function(){
        	var nowIndex = $(".bg-pager").index();
            function goLeft(index){
	           	if( nowIndex == 6){ nowIndex =-1 ;}
	           	$(".site-pager a").eq(nowIndex+=1).addClass("bg-pager").siblings().removeClass("bg-pager");
	           	$(".site-que a").eq(nowIndex).fadeIn().siblings().fadeOut();
            }
            function goRight(index){
	           	if( nowIndex == 0){ nownowIndex =7 ;}
	           	$(".site-pager a").eq(nowIndex-=1).addClass("bg-pager").siblings().removeClass("bg-pager");
	           	$(".site-que a").eq(nowIndex).fadeIn().siblings().fadeOut();
            }
            exportTimer();
	        function exportTimer(){
	            timer = setInterval(function(){
	                goLeft(nowIndex);
	            },6000);
	        }
	        $(".site-pager a").click(function(){
	        	 var nowIndex =$(this).index();
	        	$(this).addClass("bg-pager").siblings().removeClass("bg-pager");
	        	$(".site-que a").eq(nowIndex).fadeIn().siblings().fadeOut();
	        })
            $(".next-left").click(function(){
             	goLeft(nowIndex);
            })
            $(".next-right").click(function(){
             	goRight(nowIndex);
            })
            $(".next-left").hover(function(){
            	clearInterval(timer);
            },function(){
            	exportTimer();
            })
             $(".next-right").hover(function(){
            	clearInterval(timer);
            },function(){
            	exportTimer();
            })
             $(".site-pager a").hover(function(){
            	clearInterval(timer);
            },function(){
            	exportTimer();
            })
        })
        $(function(){
        	var nowIndex =$(".kolo").index();
        	function goLeft(index){
                if( nowIndex =1){ nowIndex =-1;}
                var nowIndex = $("kolo").index();
                $(".bg-color").eq(nowIndex+=1).addClass("kolo").siblings().removeClass("kolo");
                $(".box-big").stop(true,true).animate({"marginLeft":"0"},500)
        	}
        	function goRight(index){
                if( nowIndex =0){ nowIndex =2;}
                $(".bg-color").eq(nowIndex-=1).addClass("kolo").siblings().removeClass("kolo");
                $(".box-big").stop(true,true).animate({"marginLeft":"-1266px"},500)
        	}
        	$(".bg-bigleft").click(function(){
        		goLeft(nowIndex);
        	})
        	$(".bg-bigright").click(function(){
        		goRight(nowIndex);
        	})
        	exportTimer();
        	function exportTimer(){
        		timer =setInterval(function(){
        			var width =$(".box-big").css("margin-left");
        			if(width == "-1266px"){
        				goLeft();
        			};
        			if (width == "0px") {
        				goRight();
        			};
        		},5000);       		
        	}
        	$(".bg-bigleft").hover(function(){
        		clearInterval(timer);
        	},function(){
        		exportTimer();
        	})
        	 $(".bg-bigright").hover(function(){
            	clearInterval(timer);
            },function(){
            	exportTimer();
            })
        })
        $(function(){
        	$(".contain-tab ul li").mouseover(function(){
		   	    $(this).children(".children").slideDown();
		   })
		   $(".contain-tab ul li").mouseleave(function(){
		     	$(this).children(".children").slideUp();
		   })
           $(".main-two ul li").hover(function(){
           	  $(this).addClass("main-color").siblings().removeClass("main-color");
           	  var index =$(this).index();
           	  $(".tab-main>div").eq(index).show().siblings().hide();
           })
           $(".main-one ul li").hover(function(){
           	  $(this).addClass("main-about").siblings().removeClass("main-about");
           	  var index =$(this).index();
           	  $(".tabone-main>div").eq(index).show().siblings().hide();
           })

        })
        $(function(){
        	var nowIndex = $(".bg-qu").index();
	        $(".i-left").click(function(){
	              if(nowIndex ==2) { nowIndex =-1;}          
	        	    $(".greethree a").eq(nowIndex+=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".big-hali").stop(true,true).animate({
	        			marginLeft:"-=296px",
	        		},500,function(){
	                    var first = $(".big-hali>div ").first();
	        		    var last = $(".big-hali>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    first.insertAfter(last);
	        		    $(".big-hali").css("margin-left","-296px");
	        		})
	        		
	        })
	        $(".i-right").click(function(){
	              if(nowIndex ==0) { nowIndex =3;}          
	        	    $(".greethree a").eq(nowIndex-=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".big-hali").stop(true,true).animate({
	        			marginLeft:"+=296px",
	        		},500,function(){
	                    var first = $(".big-hali>div ").first();
	        		    var last = $(".big-hali>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    last.insertBefore(first);
	        		    $(".big-hali").css("margin-left","-296px");
	        		})
	        })
	        $(".greethree a").click(function(){
	                var nowIndex =$(this).index()
	        	    $(".greethree a").eq(nowIndex).addClass("bg-qu").siblings().removeClass("bg-qu");
	                if (nowIndex==0) {
	                	$(".big-hali").stop(true,true).animate({"marginLeft":"0"},500)
	                };
	                if (nowIndex==1) {
	                	$(".big-hali").stop(true,true).animate({"marginLeft":"-296px"},500)
	                };
	                if (nowIndex==2) {
	                	$(".big-hali").stop(true,true).animate({"marginLeft":"-592px"},500)
	                };
	        })
		 	
        })
        $(function(){
        	var nowIndex = $(".bg-qu").index();
        	$(".i-lefttwo").click(function(){
	              if(nowIndex ==2) { nowIndex =-1;}          
	        	    $(".greetwo a").eq(nowIndex+=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".hali-two").stop(true,true).animate({
	        			marginLeft:"-=296px",
	        		},500,function(){
	                    var first = $(".hali-two>div ").first();
	        		    var last = $(".hali-two>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    first.insertAfter(last);
	        		    $(".hali-two").css("margin-left","-296px");
	        		})
	        })
	        $(".i-righttwo").click(function(){
	              if(nowIndex ==0) { nowIndex =3;}          
	        	    $(".greetwo a").eq(nowIndex-=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".hali-two").stop(true,true).animate({
	        			marginLeft:"+=296px",
	        		},500,function(){
	                    var first = $(".hali-two>div ").first();
	        		    var last = $(".hali-two>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    last.insertBefore(first);
	        		    $(".hali-two").css("margin-left","-296px");
	        		})
	        })
	        $(".greetwo a").click(function(){
	                var nowIndex =$(this).index()
	        	    $(".greetwo a").eq(nowIndex).addClass("bg-qu").siblings().removeClass("bg-qu");
	                if (nowIndex==0) {
	                	$(".hali-two").stop(true,true).animate({"marginLeft":"0"},500)
	                };
	                if (nowIndex==1) {
	                	$(".hali-two").stop(true,true).animate({"marginLeft":"-296px"},500)
	                };
	                if (nowIndex==2) {
	                	$(".hali-two").stop(true,true).animate({"marginLeft":"-592px"},500)
	                };
	        })
        })
        $(function(){
        	 $(".greefour a").click(function(){
	                var nowIndex =$(this).index()
	        	    $(".greefour a").eq(nowIndex).addClass("bg-qu").siblings().removeClass("bg-qu");
	                if (nowIndex==0) {
	                	$(".hali-four").stop(true,true).animate({"marginLeft":"0"},500)
	                };
	                if (nowIndex==1) {
	                	$(".hali-four").stop(true,true).animate({"marginLeft":"-296px"},500)
	                };
	                if (nowIndex==2) {
	                	$(".hali-four").stop(true,true).animate({"marginLeft":"-592px"},500)
	                };
	        })
        	var nowIndex = $(".bg-qu").index();
        	$(".i-leftfour").click(function(){
	              if(nowIndex ==2) { nowIndex =-1;}          
	        	    $(".greefour a").eq(nowIndex+=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".hali-four").stop(true,true).animate({
	        			marginLeft:"-=296px",
	        		},500,function(){
	                    var first = $(".hali-four>div ").first();
	        		    var last = $(".hali-four>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    first.insertAfter(last);
	        		    $(".hali-four").css("margin-left","-296px");
	        		})
	        })
	        $(".i-rightfour").click(function(){
	              if(nowIndex ==0) { nowIndex =3;}          
	        	    $(".greefour a").eq(nowIndex-=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	        	    var index =$(this).index();

	                $(".hali-four").stop(true,true).animate({
	        			marginLeft:"+=296px",
	        		},500,function(){
	                    var first = $(".hali-four>div ").first();
	        		    var last = $(".hali-four>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    last.insertBefore(first);
	        		    $(".hali-four").css("margin-left","-296px");
	        		})
	        })
	       
        })
        $(function(){
        	var nowIndex = $(".bg-qu").index();
        	$(".i-leftone").click(function(){
	              if(nowIndex ==2) { nowIndex =-1;}          
	        	    $(".greeone a").eq(nowIndex+=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".hali-one").stop(true,true).animate({
	        			marginLeft:"-=296px",
	        		},500,function(){
	                    var first = $(".hali-one>div ").first();
	        		    var last = $(".hali-one>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    first.insertAfter(last);
	        		    $(".hali-one").css("margin-left","-296px");
	        		})
	        })
	        $(".i-rightone").click(function(){
	              if(nowIndex ==0) { nowIndex =3;}          
	        	    $(".greeone a").eq(nowIndex-=1).addClass("bg-qu").siblings().removeClass("bg-qu");
	                $(".hali-one").stop(true,true).animate({
	        			marginLeft:"+=296px",
	        		},500,function(){
	                    var first = $(".hali-one>div ").first();
	        		    var last = $(".hali-one>div ").last();
	        		    console.log(first);
	        		    console.log(last);
	        		    last.insertBefore(first);
	        		    $(".hali-one").css("margin-left","-296px");
	        		})
	        })
	         $(".greeone a").click(function(){
	                var nowIndex =$(this).index()
	        	    $(".greeone a").eq(nowIndex).addClass("bg-qu").siblings().removeClass("bg-qu");
	                if (nowIndex==0) {
	                	$(".hali-one").stop(true,true).animate({"marginLeft":"0"},500)
	                };
	                if (nowIndex==1) {
	                	$(".hali-one").stop(true,true).animate({"marginLeft":"-296px"},500)
	                };
	                if (nowIndex==2) {
	                	$(".hali-one").stop(true,true).animate({"marginLeft":"-592px"},500)
	                };
	        })
        })
        $(function(){
        	$(".img-min").mouseover(function(){ 	
		   	 $(this).children(".move-top").slideDown();  
		   	})
		   	$(".img-min").mouseleave(function(){ 	
		   	 $(this).children(".move-top").slideUp();  
		   	}) 	 		 
        })
$(window).scroll(function(){
	var textHeight = $(".logo").height();
	var bodyHeight = $("body").height();        
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();	
    console.log(scrollHeight);
	if((scrollHeight + windowHeight) <= (windowHeight + textHeight )) {                         
          $(".logo").addClass("haha");
        }else {        
	      $(".logo").removeClass("haha"); 
	}
	var header =$(".header").height();
	var make =$(".time-text").height();
	var liHeight = $(".blog-box").height();
    if((scrollHeight + windowHeight) >= (header + liHeight)) {
           $(".time-text").addClass("agatime");
	}else {
		$(".time-text").removeClass("agatime");
	}
	
    $(".text-text").mouseover(function(){
		$(this).children(".comment-btn").css("opacity","1");
        $(this).parent().css("background","#fef6f6");
	})
	$(".text-text").mouseleave(function(){
		$(this).children(".comment-btn").css("opacity","0");
        $(this).parent().css("background","#fff");
	})
	$(".click-right").click(function(){
		$(this).parent(".fun-little").stop(true,true).animate({"marginLeft":"-120px"},500)
	})
	$(".click-left").click(function(){
		$(this).parent(".fun-little").stop(true,true).animate({"marginLeft":"0"},500)
	})
})


$(function(){
	var makeId = window.location.search.split("=")[1];
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=info",
		type: "get",
		dataType: "json",
		data: {
			id: makeId,
		},
		success:function(res){
            var qqstr = "";
            qqstr ='<h4>'+res.data.info.content+'<span>'+res.data.info.createdate+'</span></h4>'
		    $(".header-info").html(qqstr);
		    var str = "";
		    for(var a=0; a<res.data.commentList.length; a++){
		    	str +='<div class="comment-text"><a href="javascript:void(0)"><img src="./image/facjpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+res.data.commentList[a].author.name+'</a></span><span class="comment-city"> [天津市网友]</span><span class="comment-time">'+res.data.commentList[a].author.createtime+'</span></div><div class="comment-about"><p>'+res.data.commentList[a].content+'</p></div><div class="comment-btn"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a> </span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>'+res.data.commentList[a].user_id+'</a></span><span class="prop"><a href="javascript:void(0)"><i></i></a><div class="box-lun hide"><div class="new-lun clearfix"> <div class="no-fun clearfix"><div class="fun-little"><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxm6L_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxp8P_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)" class="click-left"></a><a href="javascript:void(0)" class="click-right"></a></div><div class="lun-p"><a href="javascript:void(0)">登录给他的评论盖章</a></div></div></div> </div></span></div></div></div>'
		        $(".loney").html(str);
		    }
		},
		error:function(res){
			alert("222");
		}
	})
	$(".header-login").click(function(){
		$(".dologin").show();
        $("body").addClass("kimi");
	})
	$(".close").click(function(){
		$(".dologin").hide();
		$("body").removeClass("kimi");
	})
    $(".do-phone").click(function(){
    	var aa= $(".do-phone").val();
    })
    $(".do-phone").click(function(){
    	var bb= $(".do-password").val();
    })
	$(".dologin-btn").click(function(){
		var phoneLength = $(".do-phone").val().length;
		var passwordLength = $(".do-phone").val().length;
		console.log(phoneLength);
		if(phoneLength == 0 ){			
			$(".ph-error").show();
		}else{
            $(".ph-error").hide();
		}	
	})
	$(".dologin-btn").click(function(){
		var em = $(".do-phone").val();
		var p = $(".do-password").val();
		console.log(em);
		console.log(p)
		$.ajax({
			url: "http://192.168.199.249:8080/index.php?c=api&a=doLogin",
			type:"post",
			dataType:"json",
			data: {
				email:em,
				password: p,
			},
			success:function(res){
				$(".dologin").hide();
				$("body").removeClass("kimi");
				window.localStorage.setItem("user_id", res.data.id);
				window.localStorage.setItem("user_name", res.data.name);
				$(".main-name").show();
				var str ="";
				str ='<a href="javascript:void(0)" class="header-login"><img src="./image/fac4942.jpg"></a><div class="border-top"></div><div class="main-name">'+res.data.name+'</div><div class="login-text"><textarea name="text" placeholder="来说两句吧..." id="" cols="30" rows="10"></textarea></div>'
			    $(".set").html(str);
			},
			error:function(res){
				alert("222");
			}
		})
		// $(".main-talk").click(function(){
		// 	$(".main-talk").var();
		// })
		$(".happy").click(function(){
			var cont = $(".login-text textarea").val();
			var userId = window.localStorage.getItem("user_id");
			var name = window.localStorage.getItem("user_name");
            var blogId = window.location.search.split("=")[1];
			console.log(cont,userId,blogId,name);
			$.ajax({
				url: "http://192.168.199.249:8080/index.php?c=api&a=doComment",
				type: "post",
				dataType: "json",
				data: {
                    content: cont,
                    user_id: userId,
                    blog_id: blogId,
				},
				success:function(res){
                    var contstr ="";
                    contstr ='<div class="comment-text"><a href="javascript:void(0)"><img src="./image/facjpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+name+'</a></span><span class="comment-city"> [天津市网友]</span><span class="comment-time">2017-8-10</span></div><div class="comment-about"><p>'+cont+'</p></div><div class="comment-btn"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a> </span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>'+res.data.commentInfo.user_id+'</a></span><span class="prop"><a href="javascript:void(0)"><i></i></a><div class="box-lun hide"><div class="new-lun clearfix"> <div class="no-fun clearfix"><div class="fun-little"><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxsBf_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxm6L_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)"><img src="./image/pKMxp8P_png.png" alt=""><p>88B</p></a><a href="javascript:void(0)" class="click-left"></a><a href="javascript:void(0)" class="click-right"></a></div><div class="lun-p"><a href="javascript:void(0)">登录给他的评论盖章</a></div></div></div> </div></span></div></div></div>'
		            $(".loney").append(contstr);
				},
				error:function(res){

				}
			})
		})
		
	})
})


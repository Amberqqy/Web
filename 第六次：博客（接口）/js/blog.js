$(function(){
	$.ajax({
		url: "http://192.168.199.249:8080/index.php?c=api&a=bloglist",
		type: "get",
		dataType: "json",
		success:function(res){
	    var str = "";
        for(var i=0; i<res.data.lists.length; i++){
            str +='<li class="clearfix"><div class="now-time"><span>'+res.data.lists[i].month+'</span><span>'+res.data.lists[i].year+'</span></div><div class="time-btn"></div><div class="time-text"><h2><a href="javascript:void(0)">'+res.data.lists[i].title+'</a></h2><div class="time-img clearfix"><span class="blog-img"><a href="javascript:void(0)"><img src="'+res.data.lists[i].image+'" alt=""></a></span><span class="blog-html"><p>'+res.data.lists[i].content+'</p><p><a href="javascript:void(0)">'+res.data.lists[i].classify_name+'</a><a href="./read.html?id='+res.data.lists[i].id+'" class="read-all">阅读全文>></a></p></span></div></div></li>'
            $(".time-box ul").html(str);
        } 
		},
		error:function(res){
            // alert("111");
		}
	})
	
	
})

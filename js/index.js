/*Top头部广告动画*/
$('#Top img.close').click(function(){
	$('#Top').slideUp();
});
/*Nav导航切换动画*/
$('#Nav div.content ul li').not('.first,.last').hover(function(){
	var _left = $(this).position().left;
	var _width = $(this).width();
	//document.title=_left+'--'+_width;
	$('#Nav div.content ul li.last').show().css("width",_width).stop().animate({"left":_left},100);
},
function(){
	$('#Nav div.content ul li.last').stop().animate({"left":"190px"},100);
	//$('#Nav div.content ul li.last').css({"left":190,"width":88});
	//$('#Nav div.content ul li.last').stop().hide();
});
/*Nav导航吸顶盒效果*/
$(window).scroll(function(){//鼠标滚动事件
	var _top = $(window).scrollTop();
	var _height = $('#TopMain').height();
		//document.title=_height;
	if(_top>=_height){
		$('#Nav').addClass("fixed");
	}else{
		$('#Nav').removeClass("fixed");
	}
});
/*二级菜单hover定位效果*/
$("#Nav div.content div.List div.list").mouseover(function(){
	var top = $(this).position().top;
	var height = 118-top;
	if(height<0){
		$("#Nav div.content div.List div.list div.moreList").css("top",height);
	}else if(height>0){
		$("#Nav div.content div.List div.list div.moreList").css("top",-1);
	}
});
//scroll无缝滚动轮播效果
/*$("#Part1 div.content div.scroll div.btn i").mouseover(function(){//鼠标移入事件
	$(this).addClass("first");
}).mouseout(function(){//鼠标移出事件
	$(this).removeClass("first");
});*/
var _index = 0,preindex = 0;
var clearTime = null;
$("#Part1 div.content div.center div.scroll div.btn i").mouseover(function(){
	clearInterval(clearTime);//清楚自动轮播
	_index = $(this).index();
	scrollPlay();
	preindex = _index;
}).mouseout(function(){//鼠标移开时开始自动轮播
	autoPlay();
});
//点击向右
var startTime = new Date();
$("#Part1 div.content div.center a.next").click(function(){
	var nextTime = new Date();
	if(nextTime-startTime>500){
		_index++;
		if(_index>5){
			_index = 0;
			preindex = 5;
		}
		scrollPlay();
		preindex = _index;}
	startTime = new Date();
});
//点击向左
$("#Part1 div.content div.center a.prev").click(function(){
	var nextTime = new Date();
	if(nextTime-startTime>500){
		_index--;
		if(_index<0){
			_index = 5;
			preindex = 0;
		}
		scrollPlay();
		preindex = _index;
	}
	startTime = new Date();
});
function hove($a){ 
	$a.hover(function(){
		clearInterval(clearTime);
	},function(){
		autoPlay();
	});
}
hove($("#Part1 div.content div.center a.prev"));
hove($("#Part1 div.content div.center a.next"));
//自动轮播
autoPlay();
function autoPlay(){
	clearTime=setInterval(function(){
	_index++;
	if(_index>5){
		_index = 0;
		preindex = 5;
	}
	scrollPlay();
	preindex = _index;
	},3000);
}
//鼠标事件轮播
function scrollPlay(){
	$("#Part1 div.content div.center div.scroll div.btn i").eq(_index).addClass("first").siblings().removeClass("first");//siblings()除掉当前元素的其他同级元素
	if(_index==0&&preindex==5){
		next();
	}else if(_index==5&&preindex==0){
		prev();
	}else if(_index>preindex){
		next();
	}else if(_index<preindex){
		prev();
	}
}
function next(){
		$("#Part1 div.content div.center div.scroll img").eq(preindex).stop().animate({"left":"-820px"},1000);//eq(index)获取对应索引的同级元素
		$("#Part1 div.content div.center div.scroll img").eq(_index).css("left","820px").stop().animate({"left":"0px"},1000);
}
function prev(){
		$("#Part1 div.content div.center div.scroll img").eq(preindex).stop().animate({"left":"820px"},1000);//eq(index)获取对应索引的同级元素
		$("#Part1 div.content div.center div.scroll img").eq(_index).css("left","-820px").stop().animate({"left":"0px"},1000);
}
//滚动条特效
function scrollbar($Btn,$scroll,$Txt){
	var y=0,_top=0,_height=0;
	$Btn.mousedown(function(e){
		 y = e.clientY;
		 _top = $(this).offset().top;
		 _height = y-_top;
		$(document).mousemove(function(e){
			var top = e.clientY-_height-$scroll.offset().top;
			if(top<=0){
				top=0;
			}else if(top>=145){
				top=145;
			}
			$Btn.css("top",top);
			var dHeight = $scroll.height()-$Btn.height();
			var n = top/dHeight;
			var newTop = n*($Txt.height()-145);
			$Txt.css("top",-newTop);
		});
		$(document).mouseup(function(){
			$(document).unbind("mousemove");
			$(document).unbind("mousemup");
		});
		return false;
	});
}
function onClick($Scroll,$Btn,$Txt){
	$Scroll.mousedown(function(e){
		var newtop = e.clientY-$Scroll.offset().top+$(window).scrollTop();
		if(newtop<=0){
				newtop=0;
			}else if(newtop>=145){
				newtop=145;
			}
		$Btn.css("top",newtop);
		var dHeight = $Scroll.height()-$Btn.height();
		var n = newtop/dHeight;
		var newTop = n*($Txt.height()-145);
		$Txt.css("top",-newTop);
	});
}
scrollbar($("#Part1 div.content div.news div.scroll div.scrollbar1 div.scrolltop_t div.scrollBtn"),$("#Part1 div.content div.news div.scroll div.scrollbar1 div.scrolltop_t"),$("#Part1 div.content div.news div.newsCon div.tznewsTxt div.newsTxt div.newsT"));
scrollbar($("#Part1 div.content div.news div.scroll div.scrollbar2 div.scrolltop_t div.scrollBtn"),$("#Part1 div.content div.news div.scroll div.scrollbar2 div.scrolltop_t"),$("#Part1 div.content div.news div.newsCon div.holiday div.newsTxt div.newsT"));
onClick($("#Part1 div.content div.news div.scroll div.scrollbar1 div.scrolltop_t"),$("#Part1 div.content div.news div.scroll div.scrollbar1 div.scrolltop_t div.scrollBtn"),$("#Part1 div.content div.news div.newsCon div.tznewsTxt div.newsTxt div.newsT"));
onClick($("#Part1 div.content div.news div.scroll div.scrollbar2 div.scrolltop_t"),$("#Part1 div.content div.news div.scroll div.scrollbar2 div.scrolltop_t div.scrollBtn"),$("#Part1 div.content div.news div.newsCon div.holiday div.newsTxt div.newsT"));

/*今日新品倒计时*/
	
//时间倒计时
function changeTime(endTimes,obj){
	var nowTime = new Date();
	var s = (endTimes-nowTime.getTime())/1000;
	var day = Math.floor(s/86400);
		s = s%86400;
	var hour = Math.floor(s/3600);
		s = s%3600;
	var minute = Math.floor(s/60);
	s = Math.floor(s%60);
	obj.eq(0).html(fullzero(day));
	obj.eq(1).html(fullzero(hour));
	obj.eq(2).html(fullzero(minute));
	obj.eq(3).html(fullzero(s));
}
//时间格式，01,02。。。
function fullzero(time){
	var str = ""+time;
	while(str.length<2){
		str = "0"+time;
	}
	return str;
}
//第一个倒计时
var endTime1 = new Date();
		endTime1.setFullYear(2015);
		endTime1.setMonth(7);
		endTime1.setDate(25);
		endTime1.setHours(4);
		endTime1.setMinutes(0);
		endTime1.setSeconds(0);
		endTimes1 = endTime1.getTime();
changeTime(endTimes1,$("p.time1 font"));
setInterval(function(){
	changeTime(endTimes1,$("p.time1 font"));
},1000);
//第二个倒计时
var endTime2 = new Date();
		endTime2.setFullYear(2015);
		endTime2.setMonth(7);
		endTime2.setDate(24);
		endTime2.setHours(3);
		endTime2.setMinutes(0);
		endTime2.setSeconds(0);
		endTimes2 = endTime2.getTime();
changeTime(endTimes2,$("p.time2 font"));
setInterval(function(){
	changeTime(endTimes2,$("p.time2 font"));
},1000);
//第三个倒计时
var endTime3 = new Date();
		endTime3.setFullYear(2015);
		endTime3.setMonth(7);
		endTime3.setDate(25);
		endTime3.setHours(8);
		endTime3.setMinutes(7);
		endTime3.setSeconds(56);
		endTimes3 = endTime3.getTime();
changeTime(endTimes3,$("p.time3 font"));
setInterval(function(){
	changeTime(endTimes3,$("p.time3 font"));
},1000);
//第四个倒计时
var endTime4 = new Date();
		endTime4.setFullYear(2015);
		endTime4.setMonth(7);
		endTime4.setDate(26);
		endTime4.setHours(6);
		endTime4.setMinutes(3);
		endTime4.setSeconds(0);
		endTimes4 = endTime4.getTime();
changeTime(endTimes4,$("p.time4 font"));
setInterval(function(){
	changeTime(endTimes4,$("p.time4 font"));
},1000);
//第五个倒计时
var endTime5 = new Date();
		endTime5.setFullYear(2015);
		endTime5.setMonth(7);
		endTime5.setDate(23);
		endTime5.setHours(2);
		endTime5.setMinutes(2);
		endTime5.setSeconds(0);
		endTimes5 = endTime5.getTime();
changeTime(endTimes5,$("p.time5 font"));
setInterval(function(){
	changeTime(endTimes5,$("p.time5 font"));
},1000);

//产品加边框
$("#newTaday div.content div.goods div.align ul li").hover(function(){
		$(this).addClass("border");
	},function(){
		$(this).removeClass("border");	
});

//点击切换一轮
var mark=0;
var clearProductTime=null;
$("#newTaday div.content div.top span").click(function(){
	
	product_autoPlay();		
});
function product_autoPlay(){

	if(mark==0){
		mark=1;
	}else{	
		mark=0;
	}
	$("#newTaday div.content div.goods div.align ul").eq(mark).fadeIn().siblings("#newTaday div.content div.goods div.align ul").fadeOut();
}

$("#newTaday div.content div.top span").hover(function(){
	clearInterval(clearProductTime);
},function(){
	clearProductTime=setInterval(product_autoPlay,3000);
});
//自动轮播
clearProductTime=setInterval(product_autoPlay,3000);
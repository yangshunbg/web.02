/*查看作业事件*/
$('#Content div.C_con div.C_con_c div.catalog div.web ul li.first a').click(function(){
	$('#Show').addClass("show")
});
/*目录吸顶盒效果*/
$(window).scroll(function(){//鼠标滚动事件
	var $_top = $(window).scrollTop();
	var $_height = $('#Title').height();
		//document.title=_height;
	if($_top>=$_height){
		$('#Content div.C_con div.C_con_c div.catalog').addClass("fixed");
	}else{
		$('#Content div.C_con div.C_con_c div.catalog').removeClass("fixed");
	}
});
/*查看目录效果封装函数*/
var slide = function($Btn,$Web){
		var blnShow = true;
		$Btn.click(function(){	
			if(blnShow){
				$Web.slideUp(500,function(){
					blnShow = false;
					$Btn.css("background-position","-282px -59px");	
				});	
			}
			else{
				$Web.slideDown(500,function(){
					blnShow = true;
					$Btn.css("background-position","-310px -58px");	
				});
			}
		});
};
slide($('#Content div.C_con div.C_con_c div.catalog div.cat1 a'),$('#Content div.C_con div.C_con_c div.catalog div.web1'));
slide($('#Content div.C_con div.C_con_c div.catalog div.cat2 a'),$('#Content div.C_con div.C_con_c div.catalog div.web2'));
slide($('#Content div.C_con div.C_con_c div.catalog div.cat3 a'),$('#Content div.C_con div.C_con_c div.catalog div.web3'));
slide($('#Content div.C_con div.C_con_c div.catalog div.cat4 a'),$('#Content div.C_con div.C_con_c div.catalog div.web4'));
slide($('#Content div.C_con div.C_con_c div.catalog div.cat5 a'),$('#Content div.C_con div.C_con_c div.catalog div.web5'));
slide($('#Content div.C_con div.C_con_c div.catalog div.cat6 a'),$('#Content div.C_con div.C_con_c div.catalog div.web6'));

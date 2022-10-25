$(document).ready(function(){
	
	$('p#intro').animate({
		padding: '20px', 		// 테두리 기준 안쪽
		fontSize : '30px'
	},2000);
	
	$('#navigation > ul > li').hover(function(){
		$(this).animate({paddingLeft : '+=15px'},200);
	},function(){
		$(this).animate({paddingLeft : '-=15px'},200);
	});
	
	
	$(window).scroll(function(){
		$('#navigation').css({'top' : $(document).scrollTop()})
	})
})
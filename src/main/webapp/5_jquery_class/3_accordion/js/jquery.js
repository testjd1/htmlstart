$(function(){
	$('.accordion').each(function(){
		
		var allDt = $(this).find('dt');
		var allDd = $(this).find('dd');
		
		allDd.hide();
		allDd.first().show();

		allDt.css({'cursor':'pointer'});
		allDt.click(function(){
		//	alert('ok')
			allDd.hide();
			$(this).next().show()
		})
		
	})
	
	
})
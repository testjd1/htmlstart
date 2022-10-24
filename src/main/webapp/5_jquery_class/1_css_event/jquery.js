$(function(){
	
	$('#hideButton').click(function(){
		$('#intro').hide()
	})
	
	$('#showButton').click(function(){
		$('#intro').show()
	})
	/*
	$('#toggleButton').click(function(){
		$('#intro').toggle()
	})
	*/ 								// fadeToggle(2000)
									// slideToggle(2000)
	
	$('#toggleButton').click(function(){
		if($('#intro').is(':visible'))
		{
			$('#intro').fadeOut(1000);
		}else{
			$('#intro').fadeIn(1000);
		}
	})
	
	
	// 테이블의 내용 중 홀수행을 배경색 지정
	//$('#celebs table.data >tbody > tr:odd').css({'background' : 'lightblue'})
	$('#celebs table.data >tbody > tr:odd').addClass('table_striping')
	
	var trodd  = $('#celebs table.data >tbody > tr:odd')
	// 마우스 올라갔을 때 배경색 바뀌고, 다시 나오면 원래색
	
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover');
	}, function(){
		$(this).removeClass('td_mouseover');
		
	})
	
})
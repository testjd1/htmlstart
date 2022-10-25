$(document).ready(function(){
	$('.fontSize  button:eq(0)').click(function(){
		// alert('+클릭')	
		$('#txt').animate({
			fontSize :  '+=3px'
		})
		
	})
	
	$('.fontSize  button:eq(1)').click(function(){
		// alert('-클릭')
		$('#txt').animate({
			fontSize :  '-=3px'
		})	
	})
	
	
		
		
//글씨체 조정
   $('#fontstyle').change(function(){
      $('body').css({
         'font-family' : $(this).val()
      });
       $('#txt').css({
         'font-family' : $(this).val()
      });
      
   });
	
	
})
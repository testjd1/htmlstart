$(function(){
   
   $('#bio h3').css({'cursor':'pointer'});
   
   $('#bio div').hide();
   $('#bio h3').show();
   
   $('#bio h3').click(function(){
	// 버튼 눌렀을 때의 값을 this로 받음
     // $(this).next().show();
     
     // 2초간 보여주고 사라짐 
      $(this).next().animate({'height':'toggle'},2000,'easeOutBounce')
   })
   

});
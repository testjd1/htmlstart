$(function(){
	//	(1) 오늘 날짜 출력 (10점)
	var now = new Date();
	//alert(now);
	$('.year').text(now.getFullYear()); // 년도 출력
	$('.month').text(now.getMonth()+1);	// 월 출력
	$('.date').text(now.getDate());		// 날짜 출력
	
 	// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
 	$('#keyword').focus(function(){	// 포커스 갔을 때,
	$('#keyword').css("background-position","0 -500px"); // 이미지 없앰
		
	})
	$('#keyword').blur(function(){	//	 포커스 없을 때,
		$('#keyword').css("background-position","0 0")	// 이미지 다시 보임
	})
   	// (3) 탭팬 구현 (10점)
           $('#tabmenu>dt>a>img').click(function() { // 해당 탭(사진) 눌렀을 때, 
           var src = $(this).attr('src');
            $(this).attr("src", src.replace("out","over"));	// 해당 탭을 흰색으로 보여줌 (over)
            var ori=$('#tabmenu>dt[name="on"]>a>img')		 // 이전 탭  
            ori.attr("src",ori.attr("src").replace("over","out")); // 이전 탭을 어두운색으로 보여줌 (out)
         })
         
      $('#tabmenu dt').click(function(){		// 해당 탭(사진) 클릭했을때, 
         $('#tabmenu dd').hide();		// 전체 탭의 내용 다 닫음
         $(this).next('dd').show();		// 해당 탭의 내용 보여줌
         $('#tabmenu dt[name="on"]').removeAttr('name'); // 전체 탭중 on이포함되어있던 클래스의 이름 중 on 지움
         $(this).attr('name','on');				// 해당 탭의 이름을 on으로 줌
      });
      
      
      
   	// (4) 이미지슬라이드 구현 (10점)
 
	var k= $('#best_bg > ul').bxSlider({
     auto: true,
     autoControls: true,
     stopAutoOnClick: true,
     pager: true,
     slideWidth: 600,
      minSlides: 5,
       maxSlides: 5,
       slideMargin: 5,  
        moveSlides: 1,
   });
   
   $('.prev_btn img').on('click', function() {	// 오른쪽 버튼 눌렀을 때
      k.goToPrevSlide();    
   });
   
   $('.next_btn img').click(function() {		// 왼쪽 버튼 눌렀을 때
      k.goToNextSlide();
   });


   	// (5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
   	
   $('img[alt="로그인"]').click(function(){ // 로그인 누르면 로그인 창 보임
		$('#login_f').css("top","0")
	
	 $('img[alt="닫기버튼"]').click(function(){ // 로그인 닫기 누르면 로그인 창 안보임
	 //alert('닫기누름')
		$('#login_f').css("top","-500px")
		})
	})	// 로그인 창 닫음
	
   	// (6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
   	$('img[alt="전체메뉴"]').click(function(){ // 전체메뉴 누르면 전체메뉴 창 보임
      //alert('dd')
      	$('#total_menu').show();
   
    	$('img[alt="전체메뉴 닫기"]').click(function(){ // 전체메뉴 닫기 누르면 전체메뉴 창 안보임
    //alert('닫기누름')
      	$('#total_menu').hide();
      	})  // 메뉴 닫기 버튼 close
   	}) // 전체메뉴 close
   
   
   	// (7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
   	// 기능 1 : 상담시간 아니라는 문구 출력
   	$('img[alt="출판상담문의 02-3235-1722"]').click(function(){ // 상담 문의 배너 눌렀을 때,
	alert("현재는 상담 시간이 아닙니다.");		// 해당 문구 출력
	})
   	
   	// 기능 2 : 알림판 1234 사진 변경
   	$("#roll_banner_wrap img").each(function() { // 해당 탭(사진) 눌렀을 때, 
   		$(this).click(function(){
			var src = $("#roll_banner_wrap img[src*='over']");	// img 속성 중 over 들어가는 요소 확인 
			var ori=src.attr("src").replace("over","out");		// 속성 값 over -> out 변경 (빨간색-> 흰색)
            let thissrc = $(this).attr("src");					// 클릭한 탭의 속성 저장
            
            $("#roll_banner_wrap dd").hide();			// 전체 탭의 내용 다 닫음
         	 $(this).closest("dt").next().show(); 		// 클릭한 탭의 내용 표현
         	src.attr("src",ori);						// 속성 값 over -> out 변경 (빨간색-> 흰색) 
         	
         	$(this).attr("src",thissrc.replace("out","over")) // 해당 속성 out -> over 변경 ( 흰색 -> 빨간색)  탭 눌린 느낌 줌
		}) // 클릭 탭 닫음
  	})	// 개별 each 문 닫음
  		

   	
}) // $(function()) close
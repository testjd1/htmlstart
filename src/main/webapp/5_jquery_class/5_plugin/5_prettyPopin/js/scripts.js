$(function(){
	// 첫 번째 a 태그를 찾아서 prettyPopin 실행
	
	$('a[rel ="prettyPopin"]:eq(0)').prettyPopin({width:500})
	
	$('a[rel ="prettyPopin"]:eq(1)').prettyPopin({
		// 속성명 : 속성값,
		width		:500,
		callback 	: function(){
						alert('팝업 닫힘')
						}
		
		
		
		})
})
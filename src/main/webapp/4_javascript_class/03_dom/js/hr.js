
window.onload = function(){
	

	let tds = document.getElementsByClassName("item");
	for(let i = 0; i<tds.length; i++){
		tds[i].onclick = function(evt){
			let price = evt.target.getAttribute('price');
			window.alert('ok')
			window.alert(price);
		}
	}
}
 /*
window.onload = function(){   
// (1) 각 쉘(td)에 클릭하면 "OK"라는 메세지창(alert) 으로 먼저 확인
//    (2) 각 쉘(td)에 클릭하면 해당 price 값을 메세지창(alert) 으로 확인
        var td = document.getElementsByClassName('item');
      for(let i=0; i<td.length; i++){
         td[i].addEventListener('click', function(){
            alert('ok');
            alert(td[i].getAttribute('price'));            
         });
      }
}  */ 
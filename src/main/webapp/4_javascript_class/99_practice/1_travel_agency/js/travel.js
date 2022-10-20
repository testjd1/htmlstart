window.onload=function(){
  // 체크박스
    //  alert('ok')
  	 var frm = document.getElementById('frm');
  
	//var inputs = document.querySelectorAll("input");
    
    frm.onsubmit = function(evt){
			evt.stopPropagation();
			evt.preventDefault();
			if(!frm.checkbox.checked){
				alert('체크해')
				return;
			}
			if(!frm.checkbox2.checked){
				alert('체크해')
				return;
			}
					
		}
 
   adult.onchange = calc;      //calc();  XXXXX 호출하는거라서 하면 안됨
   child.onchange = calc;
   baby.onchange  = calc;
  // 계산기 
   function calc(){
       //  alert(adult.value);
         total.value=(adult.value*39000)+(child.value*29000)+(baby.value*19000);
   }
  

   
} 
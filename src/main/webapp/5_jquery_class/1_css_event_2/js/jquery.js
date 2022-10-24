$(function(){
   
   
   
  $(function(){

	
	
    var k = new Array('Home', 'Products', 'Company');
     for(let i = 0; i<k.length; i++){
	

     var k2= $('.rollover img[alt='+k[i]+']');
     k2.hover(function(){ //마우스 이벤트=hover
	         $(this).attr('src','imgs/menu0'+(i+1) + '_on.png')
	       }, function(){
	         $(this).attr('src','imgs/menu0'+(i+1) + '_off.png')   
	       }); 
	     
	     }
	 });
})

  
   
     /*
    c.click(function(){
      c.attr('src','imgs/menu01_on.png'); //속성값 함수 attr
      });
   */	
	  
	  /*
	   for( var i = 0; i<k.length; i++){
		
		  	k2[0]= $('.rollover img[alt='+k[i]+']');
	      	
	       k2.hover(function(){ //마우스 이벤트=hover
	         $(this).attr('src','imgs/menu0'+(i+1) + '_on.png')
	       }, function(){
	         $(this).attr('src','imgs/menu0'+(i+1) + '_off.png')   
	       }); 
		k2++;
		}
	})
     
     */
    
  
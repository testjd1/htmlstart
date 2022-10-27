$(function(){
	$('#signup > form').validate({
		rules : {
			name : {required: true},
			email : {required : true, 
						email : true
						},
			website : {url:true},
			password : {
					minlength : 6,
					maxlength : 12
			},
			passconf : {
				equalTo : '#password'
			}			
		},
		success : function(label){
			label.addClass('valid');
			label.text('성공');			// 없으면 체크박스 안뜸
		}
		
	
	});
	// attr() -> prop() 
	
	//체크박스
   $('.check-all').click(function(){
	/*
      var checked = $('.check-all').is(':checked');
      
      if(checked)
         $('.agree').prop('checked',true);
      else if(!checked)
         $('.agree').prop('checked',false);   
      */   
      $('.agree').prop('checked', $('.check-all').is(':checked'));      
   })
	
	$('.agree').click(function(){
	
			//$('input:checkbox[id="check-all"]').prop('checked',false);

			$('.check-all').prop('checked',false);
			
			
			//alert('#agree'.length)
			
			
		})
		
	})

//导航
$(function(){		
    		/*****左侧导航****/
    			$('.navLeft li a').click(function(event){
    				
			    $(this).parent().addClass('active').siblings('.active').removeClass('active');
			   
			});	  			
		  
			
/*****分页导航****/
    			$('li.page a').click(function(event){
    				event.preventDefault();
			    $(this).parent().addClass('active').siblings('.active').removeClass('active'); 
			});	  

			/******名字 车牌 手机验证*****/
		function inputnull(){
			$("#username").blur(function(){
		    		var $username=$("#username").val();
		    		console.log($username);
				if($username == ''){ 
				        alert("信息不能为空"); 
				 } 
			});
		}
		function inputnull2(){
			$("#username2").blur(function(){
		    		var $username2=$("#username2").val();
		    		console.log($username2);
				if($username2 == ''){ 
				        alert("信息不能为空"); 
				 } 
			});
		}
		inputnull();
		inputnull2();
    		function inputBlur(){
			$("#userPhe").blur(function(){
		    		var $phone=$("#userPhe").val();
		    		console.log($phone);
				if(!(/^1[3|4|5|8][0-9]\d{8}$/.test($phone))){ 
				        alert("请正确输入手机号"); 
				 } 
			});
		}
			inputBlur();
			/*****添加司机信息****/
 			var $drive1=$('.driverLi').html();
 			console.log($drive1);
			 $('.addDriveBox').click(function(){
			 	var $drive=$('<div class="driverLi">'+$drive1+'</div>');
			 	
			    $('.driverMess').prepend($drive);

			    /****单机删除**/
			    $('.driverLi .deleteImg').click(function(){
				 	$(this).parent().remove();
				 });
				 
				inputnull();
				inputBlur();
				inputnull2();
				 
			 });

	/********input输入框placeholder的ie7兼容问题*******/
			if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
			    $('[placeholder]').focus(function() {
			        var input = $(this);
			        if (input.val() == input.attr('placeholder')) {
			            input.val('');
			            input.removeClass('placeholder');
			        }
			    }).blur(function() {
			        var input = $(this);
			        if (input.val() == '' || input.val() == input.attr('placeholder')) {
			            input.addClass('placeholder');
			            input.val(input.attr('placeholder'));
			        }
			    }).blur();
			};
			
			function placeholderSupport() {
			    return 'placeholder' in document.createElement('input');
			}  
			
			
})






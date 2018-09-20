

// 登录拦截
$.ajax({
	url:'/employee/checkRootLogin',
	type:'get',
	async: false,
	success:function(res){

		if(res.error && res.error === 400){
			location.href = "login.html"
		}
		console.log(res);

	}
})


$(function(){
	// 退出功能
	// 获取退出按钮 添加点击事件
	// 调用退出接口 实现退出功能
	$('.login_out_bot').on('click',function(){

		if(confirm("确定要退出吗?")) {
			$.ajax({
				url:'/employee/employeeLogout',
				type:'get',
				success:function(res){

					console.log(res)
					if(res.success){

						location.href = 'login.html';

					}else{

						alert(res.message);

					}
				}
			})
		}

	});

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});
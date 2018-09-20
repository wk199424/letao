
$.ajax({
	url:'/employee/checkRootLogin',
	type:'get',
	async: false,
	success:function(res){

		if(res.success){
			location.href = "user.html"
		}
		console.log(res);

	}
})


$(function(){

    // 登陆
    // 1.获取登录按钮并且添加点击事件
    // 2.获取用户输入的用户名和密码
    // 3.对用户输入的表单信息进行验证
    // 4.调用登录接口实现登录
    // 5.登录成功 跳转到用户管理页面
    $("#loginBtn").on('click' ,function(){

        var data = {
            username:$.trim($("#username").val()),
            password:$.trim($("#password").val())
        }
        
        if(!data.username){
            alert("请输入用户名");
            return;
        }

        if(!data.password){
            alert("请输入密码");
            return;
        }
        
        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            data: data,
            success:function(res){
                console.log(res);
                
                if(res.success){

                    location.href = "user.html";

                }else{
                    alert(res.message);
                }
            }
        })

        // return false;
    });




});
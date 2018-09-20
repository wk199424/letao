$(function(){

    $.ajax({
        url:"/user/queryUser",
        type:'get',
        data:{
            page: 1,
            pageSize: 10
        },
        success:function(res){
            console.log(res);

            var html = template('userTpl',res)

            console.log(html);

            $('#usertext').html(html);
        }
        
    });
    // 用户的状态管理
    // 获取操作按钮 并且添加点击事件
    // 判断当前操作是禁用操作还是启用操作
    // 根据当前的操作 调用接口 传递不同的参数
    // 刷新页面 

    $('#usertext').on('click','.edit-btn', function(){


        // 当前用户状态
        var isDelete = Number($(this).attr('data-isDelete')) ? 0 : 1;
        // 用户id
        var id = $(this).attr('data-id');

        $.ajax({

            url:'/user/updateUser',
            type:'post',
            data: {
                id: id,
                isDelete: isDelete
            },
             success:function(res){

                console.log(res)
                if(res.success){
                    location.reload();
                }

             }
        })

    })

})
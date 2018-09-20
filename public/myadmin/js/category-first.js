$(function(){
// 获取一级分类数据并展示

    var page = 1;
    var pageSize =10;
    var totalPage = 0;

    // 页面上来加载的第一页数据
    getData()


    // 下一页
    $('#next').on('click',function(){

        page++;
        if(page > totalPage){

            page = totalPage;

            alert('已经是最后一页')
        }

        getData();
    });


    // 上一页
    $('#prev').on('click',function(){

        page--;
        if(page < 1){

            page = 1;
            
            alert('已经是第一页')
        }

        getData();
    })

    function getData(){
         $.ajax({
        url:'/category/queryTopCategoryPaging',
        type:'get',
        data: {
            page: page,
            pageSize: pageSize
        },
        success:function(res){
           
            var html = template('categoryFisttTpl', res);
            // 总页数
            totalPage = Math.ceil(res.total / pageSize );
            // console.log(html)
            $('#categoryBox').html(html);
        }
    }) 
    }

    $('#save').on('click',function(){
        var firstName = $.trim($("[name = 'firstName']").val())
        // if(!firstName){
        //     alert('请输入内容');
        //     return;
        // }
        $.ajax({
            url:"/category/addTopCategory",
            type:'post',
            data:{
                categoryName: firstName
            },
            success:function(res){
               if(res.success){
                location.reload();
               }
            }
        })
    })

});

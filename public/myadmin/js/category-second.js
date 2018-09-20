$(function(){

    var page = 1;
    var totalPage = 0;
    var pageSize = 10;

    // 页面一开始加载
    catagoryData();
   
//    下一页
    $('#nextBtn').on('click',function(){
        page++;

        if(page > totalPage){

            page = totalPage;

            alert('最后一页');

        }
        catagoryData();

    });

    // 上一页
    $('#prevBtn').on('click',function(){
        page--;
        if(page < 1){
            page = 1;
            alert('第一页')
        }
        catagoryData();
    })


    function catagoryData(){
        $.ajax({
            url:'/category/querySecondCategoryPaging',
            type:'get',
            data:{
                page: page,
                pageSize: pageSize
            },
            success:function(res){
    
               var html = template('sategorTmp',res);

               totalPage = Math.ceil(res.total / pageSize);

            //    console.log(html);

               $('#categoryBox').html(html);
            }
        })
    }

    $.ajax({
        url:'/category/queryTopCategoryPaging',
        type:'get',
        data:{
            page: 1,
            pageSize: 100
        },
        success:function(res){
            console.log(res)
            var html = template('sategorTpl',res);
            // console.log(html)
            $('#second-type').html(html);
        }
    })
    // 图片预览

    var catrgoryImg = '';
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {

            // console.log(data);
            $("#preview").attr("src",data.result.picAddr);    
            previewImg = data.result.picAddr; 
          }
    });

    
    $("#categorySave").on('click',function(){
        var brandName = $.trim($("[name='brandName']").val());
        var categoryId = $.trim($("[name='categoryId']").val());
        
        // var categoryId = $("[name='categoryId']").val().trim();

        $.ajax({
            url:'/category/addSecondCategory',
            type:'post',
            data:{
            brandName: brandName,
            categoryId: categoryId,
            brandLogo: previewImg,
            hot: 0
            },
        
            success: function(res){
                location.reload();
            }
        });
    })

});
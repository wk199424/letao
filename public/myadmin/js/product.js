$(function(){
   
    $.ajax({
        url:'/product/queryProductDetailList',
        type:'get',
        data:{
            page: 1,
            pageSize: 20
        },
        success:function(res){
            // console.log(res)
           var html = template('productTxt', res)
        //    console.log(html)
           $("#productAdd").html(html);
        }
    })

    // 添加商品
    $.ajax({
        url:'/category/querySecondCategoryPaging',
        type:'get',
        data:{
            page: 1,
            pageSize: 100
        },
        success:function(res){
            
            var html = template('productClassify', res)
            // console.log(html)
            $("#brand").html(html);
        }
    })

    var imageAttr = [];
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            imageAttr.push(data.result);
            console.log(imageAttr)
        }
    });

    $('#addProduct').on('click',function(){
        var proName = $.trim($("[name='porName']").val());
        var oldPrice = $.trim($("[name='oldPrice']").val());
        var price = $.trim($("[name='price']").val());
        var num =$.trim($("[name='num']").val());
        var size =$.trim($("[name='size']").val());
        var proDesc =$.trim($("[name='proDesc']").val());
        var brandId =$.trim($("[name='brandId']").val());
        $.ajax({
            url:'/product/addProductPic',
            tpye:'post',
            data:{
                proName: proName,
                oldPrice: oldPrice,
                price: price,
                num: num,
                size: size,
                proDesc: proDesc,
                brandId: brandId,
                statu: 1,
                pic: imageAttr
            },
            succerr:function(res){
                console.log(res)
                if(res.succerr){
                    location.reload();
                }else{
                    alert(res.message)
                }
            }
        })
    })
});
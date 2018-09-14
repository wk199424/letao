$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });


    $.ajax({
        url: "/category/queryTopCategory",
        type: "get",
        success: function (response) {
            console.log(response);
            var html = template('category-first', {result: response.rows});
            $('#links').html(html);
            if (response.rows.length) {
                $('#links').find('a').eq(0).addClass('active');
                var id = response.rows[0].id;
                getSecondCategory(id);
            }

        }
    });


    $('#links').on('click', 'a', function () {
        console.log($(this).attr('data-id'))
        var id = $(this).attr('data-id');
        $(this).addClass('active').siblings().removeClass('active');
        getSecondCategory(id);
    });
});

function getSecondCategory(id) {
    $.ajax({
        url: '/category/querySecondCategory',
        type: 'get',
        data: {
            id: id
        },
        success: function (response) {
            console.log(response)
            var html = template('category-second', response);
            $('#cont-right').html(html);
        }
    })
}
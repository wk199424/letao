$(function () {
    $(".my-btn").on('click', function () {
        console.log('sss');
        var keyword = $(this).siblings('input').val();
        console.log(keyword);
        if (keyword) {
            alert(222);
            key.push(keyword);
            localStorage.setItem('key', JSON.stringify(key));
             location.href = 'search-list.html?keyword=' + keyword;
        }
        else{
            alert('请输入关键字');
        }
    });
    var key = [];
    if (localStorage.getItem('key')) {
        key = JSON.parse(localStorage.getItem('key'));
        console.log('key');
        var html = template("historyTpl", {result: key});
        $('#history-box').html(html);
    }
    $('#clearBtn').on('click',function(){

        $('#historyTpl').html("");

        localStorage.removeItem("key");

    });
});

$(document).ready(function () {


    $(".contents_wrap").hide();
    $(".contents_wrap:first").show();
    $(".top_tabs > ul > li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".contents_wrap").hide();
        $($(this).data("value")).fadeIn();
    })

    /* 클릭 시 숫자 증감 코드 */
    $('.minus').click(function (e) {
        e.preventDefault();
        var stat = $('.countNum').text();
        var num = parseInt(stat, 10);
        num--;
        if(num<=0){
            alert('더 이상 줄일수 없습니다.');
            num =1;
            }
        $('.countNum').text(num);
    });
    $('.plus').click(function (e) {
        e.preventDefault();
        var stat = $('.countNum').text();
        var num = parseInt(stat, 10);
        num++;
        if(num>10){
            alert('더 사면 비싸요.');
            num = 10;
            }
        $('.countNum').text(num);
    });





});

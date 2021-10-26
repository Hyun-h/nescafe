$(document).ready(function () {


    for (let i = 1; i < 11; i++) {

        $(".products figure img.americano" + i).hover(function () {
            $(this).stop().animate({ opacity: 0 }, 350);
            $(this).next().animate({ opacity: 1 }, 350);
        },
            function () {
                $(this).stop().next().animate({ opacity: 0 }, 350);
                $(this).stop().animate({ opacity: 1 }, 350);
            });

        // $(".products figure img.americano" + i).hover(function(){
        //     $(this).attr('src','img/americano' + i +'.png');
        // }, function(){
        //     $(this).attr('src','img/americano' + i +'fix.png');
        // });

    };
    /* for문닫기 */







});

$(document).ready(function () {
    $(".h_nav_on").hide();

    $(".h_nav").hover(function () {
        $(".header").stop().animate({
            height: "540px"
        }, 200);
        $(".h_nav_on").stop().fadeIn(200);

    }, function () {

        $(".header").stop().animate({
            height: "90px"
        }, 200);
        $(".h_nav_on").stop().hide();
    })

    $(".header_mobile_menu").click(function(){
        $(".h_nav_mobile_wrap").stop().animate({
            right:0},500);
    });

    $(".mobile_nav_login>span").click(function(){
        $(".h_nav_mobile_wrap").stop().animate({
            right:-450},500);
    });


    $(".mobile_nav>li>a").click(function(){
        $clicknav = $(this).next("ul");
        $clickclass = $(this).parents("li");
        
        if($clicknav.is(":visible")){
            $clicknav.stop().slideUp();
            $clickclass.removeClass("mobile_active");
        }else{
            $(".h_nav_mobile_on").stop().slideUp();
            $(".mobile_nav>li").removeClass("mobile_active");
            $clicknav.stop().slideDown();
            $clickclass.addClass("mobile_active");
        }
    });

    $(".footer_address_mobile").click(function(){
        $(".footer_mobile_slide").stop().slideToggle();
    });
    
});
$(document).ready(function(){

    $(".cont_wrap").hide();
    $(".cont_wrap:first").show();
    $(".list_wrap > ul > li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".cont_wrap").hide();
        $($(this).data("value")).fadeIn();
    })




})

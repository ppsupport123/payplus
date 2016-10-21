/**
 * Created by Nature on 16/10/21.
 */
$(function(){
    $(".nav-child-a").mouseover(function(){
        $(this).next().show();
        $(this).addClass("mouseover")
    });
    $(".nav-child").mouseleave(function(){
        $(this).find(".nav-child-a").removeClass("mouseover");
        $(this).find(".menu-nav").hide();
    })
});

$(function(){
    $("#slider").powerSlider({handle:"fadeTo"});
});
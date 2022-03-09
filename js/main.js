/*jslint browser : true */
/*global $, window*/
$(function () {
    "use strict";
    var winH   = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH   = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winH - (upperH + navH));
    //upper audio
    $(".upper-bar .first .sound").on("click", function () {
        $(".upper-bar .first .mute").fadeIn();
        $(".upper-bar .first .sound").fadeOut();
        $(".upper-bar .first audio").addClass("muted");
        $(".upper-bar .first audio").removeClass("autoplay");
    });
    $(".upper-bar .first .mute").on("click", function () {
        $(".upper-bar .first .sound").fadeIn();
        $(".upper-bar .first .mute").fadeOut();
        $(".upper-bar .first audio").addClass("autoplay");
        $(".upper-bar .first audio").removeClass("muted");
        
    });
    
    //featured work shuffle
    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shuffle-image .col-md").css("opacity", 1);
        } else {
            $(".shuffle-image .col-md").css("opacity", 0.3);
            $($(this).data("class")).parent().css("opacity", 1);
        }
    });
    //testimonial
    window.setInterval(function () {
        if ($(".carousel-inner .active").is(":first-child")) {
            $(".testimonial .carousel-control-prev").css("backgroundColor", "#08526d");
        } else {
            $(".testimonial .carousel-control-prev").css("backgroundColor", "#ec1c23");
        }
    }, 1);
    
    $(window).load(function () {
        $(".loading").fadeOut(2000, function () {
            $("body").css("overflow", "auto");
        });
       
    });
});
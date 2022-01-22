$(document).ready(function() {

    // movie-slider
    var sliderMain = $(".trending-list");
    $(".go-right").click(function() {
        sliderMain.append($(".trending-item:first"));
    })
    $(".go-left").click(function() {
        var temp = sliderMain.pop();
        console.log(temp);
    })

    // responsive hamburger menu
    $(".hamburger").click(function() {
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(".mobile-nav").removeClass("is-active");
        } else {
            $(this).addClass("is-active");
            $(".mobile-nav").addClass("is-active");
        }
    })

})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 530) {
            $(".navigation").css("background-color", "#222");
        } else {
            $(".navigation").css("background-color", "transparent");
        }
    });
});
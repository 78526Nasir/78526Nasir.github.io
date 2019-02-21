
$(document).ready(function () {
    $(".nav-link, .link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var _hash = this.hash;

            $("html, body").animate({
                scrollTop: $(_hash).offset().top
            }, 700, function () {
                window.location.hash = _hash;
            });
        }
    });

});

$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $("#fixed-float").css("display", "block");

    if (scrollTop > 500) {
        $("#fixed-float").css("display", "block");
    } else {
        $("#fixed-float").css("display", "none");
    }

});


$(function () {
    $('.chart').easyPieChart({
        animate: 2000,
        lineWidth: 12,
        trackColor: "#dddddd",
        scaleColor: false,
        barColor: "#7952b3",
        lineCap: "butt",
        size: 100,
    });
});
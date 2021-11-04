$(".article-hide-content").click(function () {
    $(".article-toggler").toggleClass("article-active");
});

function _scroll() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 320) {
        $('header').css('background-color', 'rgb(133, 197, 176)');
    } else {
        $('header').css('background-color', 'transparent');
    }
}
$(window).on('scroll', function () {
    _scroll()
});
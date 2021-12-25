// function _scroll() {
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > 320) {
//         $('header').css('background-color', 'rgb(133, 197, 176)');
//     } else {
//         $('header').css('background-color', 'transparent');
//     }
// }
// $(window).on('scroll', function () {
//     _scroll()
// });
$(document).ready(function () {
    // when a hanburger menu is clicked
    let $ul = $(".nav-m"),
        $menu = $("#nav-icon1");

    $($menu).click(function () {
        // toggle menu-click Class
        $ul.slideToggle("menu-click");
        // $ul.toggleClass("menu-click");
    }); // end click event handler
});
$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});
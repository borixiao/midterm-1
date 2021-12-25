$(document).ready(function () {

    // Register GSAP ScrollTrigger Plugin
    // gsap.registerPlugin(ScrollTrigger);

    // set GSAP Timeline
    let timeLine = new gsap.timeline({
        scrollTrigger: {
            trigger: "#block",//觸發點設置(要設誰為觸發點(本例子是方塊本身)，當方塊的正中央碰到畫面的正中央就開始播動畫)
            pin: true, // pin the trigger element while active
            start: "center center", // when the center of the trigger hits the center of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: true,
            markers: true,
            id: "block",
        },
    });
    timeLine
        .to("#block", 2, { backgroundColor: "red" })
        .to("#block", 1, {
            x: $(window).width() - $("#block").width(),
        }, 0)
        .to("#block", 1, { x: 0 })
    // 給0是兩個動畫一起播，沒有就是依序播
})

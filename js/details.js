new WOW().init();
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});
// $(document).ready(function () {

//     // Register GSAP ScrollTrigger Plugin
//     // gsap.registerPlugin(ScrollTrigger);

//     // set GSAP Timeline
//     let timeLine = new gsap.timeline({
//         scrollTrigger: {
//             trigger: "#block",//觸發點設置(要設誰為觸發點(本例子是方塊本身)，當方塊的正中央碰到畫面的正中央就開始播動畫)
//             pin: true, // pin the trigger element while active
//             start: "center center", // when the center of the trigger hits the center of the viewport
//             end: "+=500", // end after scrolling 500px beyond the start
//             scrub: true,
//             markers: true,
//             id: "block",
//         },
//     });
//     timeLine
//         .to("#block", 2, { backgroundColor: "red" })
//         .to("#block", 1, {
//             x: $(window).width() - $("#block").width(),
//         }, 0)
//         .to("#block", 1, { x: 0 })
//     // 給0是兩個動畫一起播，沒有就是依序播
// })
// $(document).ready(function () {
//     // Register GSAP ScrollTrigger Plugin
//     gsap.registerPlugin(ScrollTrigger);
//     // lottie開始
//     let openingAnimWindow = document.querySelector("#openingLottie");
//     let openingAnimData = {
//         container: openingAnimWindow,
//         animType: "svg",
//         loop: false,
//         prerender: true,
//         autoplay: false,
//         path: 'https://assets8.lottiefiles.com/packages/lf20_aDPqr7.json'
//     };
//     // set bodymovin
//     let scrollAnim = bodymovin.loadAnimation(openingAnimData);
//     // Set Pin Page 設定一個畫面的鎖定pin，開始點是top top，意思是當物件的top碰觸到畫面的top就開始播
//     ScrollTrigger.create({
//         trigger: "#page1",
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//     });

//     // Set GSAP Timeline with Pin
//     let timeLine_page2 = new gsap.timeline({
//         scrollTrigger: {
//             trigger: "#page2",
//             yoyo: true,
//             pin: true, // pin the trigger element while active
//             start: "bottom bottom", // when the top of the trigger hits the top of the viewport
//             end: "100%", // end after scrolling 500px beyond the start
//             scrub: true,
//             markers: true,
//             id: "page2",
//         },
//     });
//     scrollAnim.addEventListener("DOMLoaded", onDOMLoaded);

//     // // Frame-by-frame play
//     function onDOMLoaded() {
//         timeLine_page2.to(
//             {
//                 frame: 0,
//             },
//             3,
//             {
//                 frame: scrollAnim.totalFrames - 1,
//                 onUpdate: function () {
//                     scrollAnim.goToAndStop(Math.round(this.targets()[0].frame), true);
//                     $("#counter").html(Math.round(this.targets()[0].frame));
//                 },
//                 ease: Linear.easeNone,
//             }
//         );

//     } //不管她的變數名稱是甚麼，反正他就是要播下面這個動畫，只是觸發的東西變了，變得不是物件本身
//     // .to("#block", 2, { backgroundColor: "red" })
//     // .to("#block", 1, { x: $(window).width() - $("#block").width() }, 0)
//     // .to("#block", 1, { x: 0 });
//     // .fromTo("#block", 1, { autoAlpha: 0 }, { autoAlpha: 1 });


//     let timeLine_page3 = new gsap.timeline({
//         scrollTrigger: {
//             trigger: "#page3",
//             yoyo: true,
//             pin: true, // pin the trigger element while active
//             start: "bottom bottom", // when the top of the trigger hits the top of the viewport
//             end: "100%", // end after scrolling 500px beyond the start
//             scrub: true,
//             markers: true,
//             id: "page3",
//         },
//     });
//     timeLine_page3.to(
//         {
//             frame: 0,
//         },
//         3,
//         {
//             frame: scrollAnim.totalFrames - 1,
//             onUpdate: function () {
//                 scrollAnim.goToAndStop(Math.round(this.targets()[0].frame), true);
//                 $("#counter").html(Math.round(this.targets()[0].frame));
//             },
//             ease: Linear.easeNone,
//         }
//     );



// });


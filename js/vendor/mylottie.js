$(document).ready(function () {
    // Register GSAP ScrollTrigger Plugin
    // gsap.registerPlugin(ScrollTrigger);
    // lottie開始
    let openingAnimWindow = document.querySelector('#mylottie');
    let openingAnimData = {
        container: openingAnimWindow,
        animType: "svg",
        loop: false,
        prerender: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_8nuuen0b.json'
    };
    // set bodymovin
    let scrollAnim = bodymovin.loadAnimation(openingAnimData);
})
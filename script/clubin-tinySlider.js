// artist section tiny-slider start
let navContainer = document.querySelector(".artist-indicator-container");
let controlsContainer = document.querySelector(".artist-controls-container");
const slider = tns({
    container: "#artist-item-container",
    items: 1,
    mouseDrag: true,
    swipeAngle: false,
    fixedWidth: 325,
    speed: 300,
    nav: true,
    navPosition: "bottom",
    rewind: true,
    controlsPosition: "bootom",
    navContainer: navContainer,
    controlsContainer: controlsContainer,
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 3500,
});
// artist section tiny-slider end
function swipwerBanner() {
    new Swiper('.banner .swiper', {
        loop: true,
        effect: 'coverflow',
        autoplay: {
            delay: 3000,
        },

        // pagination: {
        //     el: '.swiper-pagination',
        // },
    });
}
function initialize() {
    swipwerBanner()
}

initialize()
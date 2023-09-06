

var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 1500,
    },
    slidesPerView: 2,
    loop:true,
    

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});
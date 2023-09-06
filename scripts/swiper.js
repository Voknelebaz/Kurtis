

var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
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
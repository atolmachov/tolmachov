;(function($){
    $(function(){
        $('.slick-slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-up"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-down"></i></button>',
            dots: true,
            infinite: true,
         //   autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
})(jQuery);
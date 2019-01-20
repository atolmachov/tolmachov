;(function ($) {
    $(function () {
        $('a:first-of-type').on('click', function () {
            $(this).next().hide(2000);
        });
        $('a:nth-of-type(2)').on('click', function () {
            $(this).next().show(1000);
        });
        $('a:nth-of-type(3)').on('click', function () {
            $(this).next().toggle(1000);
        });
        $('a:nth-of-type(4)').on('click', function () {
            $(this).next().slideUp(2000);
        });
        $('a:nth-of-type(5)').on('click', function () {
            $(this).next().slideDown(2000);
        });
        $('a:nth-of-type(6)').on('click', function () {
            $(this).next().slideToggle(2000);
        });
        $('a:nth-of-type(7)').on('click', function () {
            $(this).next().fadeOut(1000);
        });
        $('a:nth-of-type(8)').on('click', function () {
            $(this).next().fadeIn(1000);
        });
        $('a:nth-of-type(9)').on('click', function () {
            $(this).next().fadeTo(1000, .5);
        });
        $('a:nth-of-type(10)').on('click', function () {
            $(this).next().fadeToggle(1000, function () {
                console.log(123);
            });
        });
        $('a:nth-of-type(11)').on('click', function () {
            $(this).next().animate({
                width: '500px',
                height: '200px',
                margin: '50px 200px'
            }, 2000, function () {
                $(this).addClass('animated')
            });
        });
    });
})(jQuery);
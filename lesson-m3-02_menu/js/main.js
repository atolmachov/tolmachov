;(function($){
    $(function() {
        var menu = $('nav > ul');
        $('.hamburger').on('click', function () {
            // menu.toggle();
            menu.toggleClass('visible');
            $(this).toggleClass('menu-opened');
        });
        // $(window).on('resize', function () {
        //     if ($(window).width() > 920) {
        //         menu.show();
        //     } else {
        //         menu.hide();
        //     }
        // });
    });
})(jQuery);
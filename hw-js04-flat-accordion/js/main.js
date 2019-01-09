;(function ($) {
    $(function () {

        $('.head').on('click', function () {
            var section = $(this).parent();
            // if ($('p').hasClass('show')) {
            //     $('p').removeClass('show');
            // }
            // $this.siblings().addClass('show');
            if (section.hasClass('show')) {
                section.removeClass('show');
            } else {
                section
                    .addClass('show')
                    .siblings()
                    .removeClass('show');
            }
        });

        var tabsContent = $('.tabs-content');
        $('.tabs a').on('click', function () {
            var $this = $(this),
                tabIndex = $this.data('id');
            $this
                .addClass('active')
                .siblings()
                .removeClass('active');
            tabsContent
                .find('[data-id=' + tabIndex + ']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    })
})(jQuery);


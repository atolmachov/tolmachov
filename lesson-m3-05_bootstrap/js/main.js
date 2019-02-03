;(function($){
    $(function() {
        $('.alert').on('closed.bs.alert', function () {
            console.log(321);
        });



        function showPopup(content, position) {
            var popup = $('.ba-popup-bg');
            // testContent.appendTo(popup)
            popup
                .addClass('opened')
                .find('.ba-popup-body-content')
                .append(content);
            $('body').css({overflow: 'hidden'});
            if (!position) {
                position = 'center'
            }
            popup.addClass(position);
        }
        $('.ba-popup-bg').on('click', function (e) {
            var me = $(e.target);
            if (me.is('.ba-popup-bg') || me.is('.ba-popup-close')) {
                me
                    .closest('.ba-popup-bg')
                    .removeClass('opened top-left center top-center') // и другие классы
                    .find('.ba-popup-body-content')
                    .html('');
                $('body').css({overflow: 'visible'});
            }
        });

        $('.ba-open-popup').on('click', function () {
            var testContent = $('.ba-popup-test-content').html();

            showPopup(testContent, 'top-left');
        });
        $('.ba-open-popup-2').on('click', function () {
            var testContent = $('.ba-popup-test-content-2').html();

            showPopup(testContent);
        });
    });
})(jQuery);
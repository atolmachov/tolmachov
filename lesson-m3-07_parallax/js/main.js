;(function($){
    $(function(){
        var w = $(window),
            b1 = $('.child:nth-child(1)'),
            b2 = $('.child:nth-child(2)'),
            b3 = $('.child:nth-child(3)'),
            b1t = b1.position().top,
            b2t = b2.position().top,
            b3b = b3.position().top,
            b1l = b1.position().left,
            b2l = b2.position().left,
            b3l = b3.position().left;
        // console.log(b1t,b2t,b3b);
        // w.on('scroll', function () {
        //     var scrollTop = w.scrollTop();
        //     console.log(scrollTop);
        //     b1.css('top', b1t + scrollTop/30 + 'px');
        //     b2.css('top', b2t - scrollTop/30 + 'px');
        //     b3.css(
        //         {
        //             top: b3b + scrollTop/10 + 'px',
        //             bottom: 'initial'
        //         }
        //         );
        // });
        w.on('mousemove', function (e) {
            b1.css({top: b1t - e.clientY/30 + 'px',
                left: b1l + e.clientX/30 + 'px'
            });
            b2.css({top: b2t - e.clientY/30 + 'px',
                left: b2l - e.clientX/30 + 'px'
            });
            b3.css(
                {
                    top: b3b + e.clientY/10 + 'px',
                    bottom: 'initial',
                    left: b3l - e.clientX/10 + 'px'
                }
            );
        });
    });
})(jQuery);
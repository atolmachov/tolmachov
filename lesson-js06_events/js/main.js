;(function(){
    $(function(){
        console.log('document ready');
        document.getElementsByTagName('span')[0].onclick = function () {
            console.log('span clicked');
        }
        document.getElementsByTagName('span')[0].onclick = function () {
            console.log('span clicked 2');
        }

        function consoleLog() {
            console.log('div clicked');
        }
        document.getElementsByTagName('div')[0].addEventListener('click', consoleLog)
        document.getElementsByTagName('div')[0].addEventListener('click', function () {
            console.log('Div clicked 2');
        })
        document.getElementsByTagName('div')[0].removeEventListener('click', consoleLog);

        $('i').click(function () {
            console.log('jQuery clicked');
        });
        $('i').click(function () {
            console.log('jQuery clicked 2');
            $(this).after('<br><i>jQuery click me</i>');
        });
        $('i').on('click', function () {
            console.log('jQuery clicked from "on" listener');
        });
        $('body').on('click', 'i', function () {
            console.log('jQuery clicked from "on" listener');
        });
        $('b').on('mousedown', function () {
            console.log('b mousedown');
        });
        $('b').on('mouseup', function () {
            console.log('b mouseup');
        });
        $('i').on('contextmenu', function () {
            console.log('jQuery clicked right btn');
        });
        $('i').on('dblclick', function () {
            console.log('jQuery clicked twice');
        });
        // $('i').off('click');

        // $('.s1').on('mouseover', function () {
        //     console.log('mouseover');
        // })
        // $('.s1').on('mouseout', function () {
        //     console.log('mouseout');
        // })
        // $('.s2').on('mouseenter', function () {
        //     console.log('mouseenter');
        // });
        // $('.s2').on('mouseleave', function () {
        //     console.log('mouseleave');
        // });
        $('section').on('mousemove', function (event) {
            console.log('mousemove');
            console.log(event.clientY);
            console.log(event.pageY);
        });
       /* $('input').on('keydown', function (e) {
            console.log('keydown', e.key);
        });
        $('input').on('keyup', function (e) {
            console.log('keyup', e.key);
        });
        $('input').on('keypress', function (e) {
            console.log('keypress', e.key);
        });
*/
        $('form').on('submit', function (e) {
            e.preventDefault();
            console.log('submited');
            if($(this).find('#sex').val() === '0') {
                alert('Выберите пол');
            }
            if (!$(this).find('#name').val()) {
                alert('Введите имя');
            }
            // $(this).submit();
        });
        $('#name').on('input', function () {
           console.log($(this).val());
        });
        $('#second-name').on('change', function () {
           console.log($(this).val());
        });
        $('#student').on('change', function () {
           console.log($(this).is(':checked'));
        });
        $('#sex').on('change', function () {
           console.log($(this).val());
        });


    });
    $(window).on('load', function () {
       console.log('Document with resources is loaded');
    });
    // $(window).on('beforeunload', function (e) {
    //     e.preventDefault();
    //     return '';
    // });
    var up = $('#up');
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if($(window).scrollTop() > 100) {
            up.show();
        } else {
            up.hide();
        }
    });
    up.on('click', function () {
       $(window).scrollTop(30);
    });
})();
;(function($){
    $(function() {
        var h1 = $('h1');
        console.log(h1.html()); //получение значения
        h1.html('New title');   //меняем значение
        console.log(h1.html());
        h1
            .text('New title from .text()')
            .css({
                color: '#ff9940',
                fontStyle: 'italic',
                fontWeight: 'normal'
            })
            .addClass('red')
            .next()
            .addClass('red')
            .nextAll('p')
            .addClass('green')
            .prev()
            .addClass('blue')
            .removeClass('blue')
            .nextAll('ul')
            .css('text-align', 'center')
            .find('.active')
            .addClass('red')
            .find('a')
            .addClass('green')
        // .end()
        // .end()
        // .hide();
        console.log(h1.text());
        h1.closest('main').toggleClass('main-content');   //ищем родительский эл-т от h1
        var span = $('<span></span>').text('span text');
        $('main').append(span);
        span.appendTo('main');
        $('main, ul').addClass('new-class');
        $('main')
            .prepend('<span>text from prepend</span>')
            .append('<div>text from append</div>')
            .after('after text')
            .before('before text');
        $('<div>text from insertBefore</div>').insertBefore('ul');
        $('<div>text from insertAfter</div>').insertAfter('ul');

        // работа с тэгами и аттрибутами
        $('ul li')
            .css('color', '#ccc')
            .eq(0)      //выбираем первый эл-т
            .filter(':lt(2)')   // отбираем эл-ты по фильтру (первые два)
            .css('color', 'black')
            .find('a')
            .attr('href', 'http://google.com');
        console.log($('main').attr('href'));
        console.log($('main').attr('class'));
        console.log($('main')[0].hasAttribute('href'));
        $('#main-link').removeAttr('href');
        $('li:nth-child(3)').data('test', '22');
        console.log($('li:nth-child(3)').data('test'));


        var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
            {
                author: "queen",
                song: "bohemian rhapsody",
                duration: "2:30"
            },
            {
                author: "lynyrd skynyrd",
                song: "free bird",
                duration: "1:56"
            },
            {
                author: "deep purple",
                song: "smoke on the water",
                duration: "3:03"
            },
            {
                author: "jimi hendrix",
                song: "all along the watchtower",
                duration: "2:53"
            },
            {
                author: "AC/DC",
                song: "back in black",
                duration: "2:43"
            },
            {
                author: "queen",
                song: "we will rock you",
                duration: "2:13"
            },
            {
                author: "metallica",
                song: "enter sandman",
                duration: "3:03"
            }
        ];

        var $playList = $('<div />', {id: 'play-list'}).appendTo('body').prepend('<hr />');
        for (var k = 0; k < playList.length; k++) {
            $('<div />')
                .append('<span class="author">' + playList[k].author + '</span>')
                .append('<span class="duration">' + playList[k].duration + '</span>')
                .append('<h3>' + playList[k].song + '</h3>')
                .append('<hr />')
                .appendTo($playList);
        }
    });

})(jQuery);
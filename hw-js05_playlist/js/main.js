;(function($){
    $(function() {
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

        var $playList = $('<div />', {id: 'play-list'}).appendTo('body');
        $('<h1>PlayList</h1>').appendTo('#play-list')/*.append('<hr />')*/;
        for (var k = 0; k < playList.length; k++) {
            $('<div />')
                .append('<hr />')
                .append('<span class="duration">' + playList[k].duration +  '</span>')
                .append('<span class="author">' + playList[k].author + '</span>')
                .append('<h3>' + playList[k].song + '</h3>')
                .appendTo($playList);
        }
    });

})(jQuery);
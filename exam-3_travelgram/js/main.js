;(function($){
    $(function(){
        $('.slick-slider').slick({
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-up"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-down"></i></button>',
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        });
        var menu = $('nav');
/*меню*/
        $('.hamburger').on('click', function () {
            menu.toggleClass('visible');
            $(this).toggleClass('menu-opened');
        });
/*добавление стрелки*/
        $(window).scroll(function() {
            var height = $(window).scrollTop();
            if(height > 300){
                $('.arrow').addClass('arrow-fixed');
            } else{
                $('.arrow').removeClass('arrow-fixed');
            }
        });
/*анимация пролистывания страницы*/
        $('a[href^="#"]').click(function (e) {
            var href = $(this).attr('href'),
                element = $(href);
            e.preventDefault();
            if(href == '#') return false;
            if(element.length==0) return false;
            var posTop = element.offset().top,
                scrollTop = $(window).scrollTop;
            $("html, body").animate({ scrollTop: posTop + "px" },1000);
            console.log(posTop);
        });
/*отправка формы*/
        var regex = {
            firstName: /^[a-zA-Z ]{2,30}$/,
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        };
        function validateField(val, fieldName) {
            var pattern = regex[fieldName];
            if (pattern.test(val)) {
                return true;
            } else {
                return false;
            }
        }
        $('#send-request-form').on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var firstName = $("#firstName"),
                email = $("#email"),
                message = $("#message"),
                data = {
                    firstName: firstName.val(),
                    email: email.val(),
                    message: message.val()
                };
            if (!data.firstName || (data.firstName && !validateField(data.firstName, 'firstName'))) {
                firstName.prev('.contact__error').show();
            } else if (!data.email || (data.email && !validateField(data.email, 'email'))) {
                email.prev('.contact__error').show();
            } else if (!data.message || (data.message && data.message.length > 1000)) {
                email.prev('.contact__error').show();
            } else {
                $.ajax({
                    url: './php/backend.php',
                    type: 'POST',
                    data: data,
                    success: function (response) {
                        if (response && response.error) {
                            console.log(response.error)
                        } else {
                            alert('Thanks for your treatment');
                        }
                    },
                    error: function (jqXHR, textStatus) {
                        console.log('ОШИБКИ AJAX запроса: ' + textStatus);
                    },
                    complete: function () {

                    }
                });
            }
        });
        $('#send-request-form input, #send-request-form textarea').on('keydown', function () {
            $(this).prev('.contact__error').hide();
        })
    });
})(jQuery);
/*Гугл-карта*/
var marker;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 12.9768701, lng: 77.589954}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 12.9768701, lng: 77.589954}
    });
    marker.addListener('click', toggleBounce);
}
/*анимация маркера*/
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

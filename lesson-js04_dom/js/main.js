;(function($){
    // обращаемся напрямую к DOM-дереву
    console.log(document.getElementsByTagName('h1'));
    console.log(document.getElementById('main-link'));
    console.log(document.getElementsByClassName('active')[1]);
    console.log(document.querySelectorAll('li'));
    console.log(document.querySelector('li'));

    document.getElementsByTagName('h1')[0].innerText = 'New text';
    console.log(document.querySelector('ul').innerHTML);
    console.log(document.querySelector('ul').outerHTML);
    document.getElementsByTagName('h1')[0].innerHTML = '<span>' + document.getElementsByTagName('h1')[0].innerHTML + '</span>';
    var secondLi = document.querySelectorAll('.active')[1];
    console.log(secondLi.classList);
    secondLi.classList.add('new-class');    //добавили class
    secondLi.classList.remove('second');    //удалили class
    secondLi.classList.toggle('cls');       //добавили class
    secondLi.classList.toggle('active');    //удалили class
    console.log(secondLi.classList.contains('active'));

    // обращаемся к DOM-дереву через jQuery
    console.log($('#main-link')[0]);
    console.log($('#main-link'));
})(jQuery);



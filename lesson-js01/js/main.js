;(function () {

    var int = 1;
    var string = 'Hello, Beetroot',
        bool = true,
        object = {
            name: 'Ivan',
            age: 20,
            isDriver: false,
            family: {
                wife: 'Susanna'
            }
        },
        nullVar = null,
        undef = undefined;
    /*    console.log(int, bool, object.name);
        console.log(string);
        var name = prompt('Как Вас зовут?', 'Гость'),
            age = confirm('Есть ли Вам 18 лет?');
        console.log('Имя: '+name, age);
        if (name && age) {
            console.log('Привет, '+name + ' Добро пожаловать!');
        } else if (name && !age) {
            console.log(name + ', введите возраст, пожалуйста!');
        } else if (!name && age) {
            console.log('Как к Вам обращаться?');
        } else {
            console.log('Прощайте!!!');
        }
    */


    var int1 = 123,
        int2 = -222,
        int3 = 12.33,
        int4 = 3,
        int5 = 3;
    console.log(int1, int2, int3);
    console.log(int1 + int2);
    console.log(int1 - int2);
    console.log(-int2);
    console.log(int3 - 1);
    // var int2 = int2 + 10;
    int2 += 10;
    console.log(int2);
    int2++;
    console.log(int2);
    ++int2;
    console.log(int2);
    console.log(++int4);
    console.log(int5++);

    console.log(10 % 2); // получение остатка от деления
    console.log(12 / 'dff');// NaN - Not a Number

    var str,
        str1 = '',
        str2 = 'Hello',
        str3 = 'Beetroot';
    console.log(str2 + ', ' + str3); // конкатенация
    console.log(str2 + int1); // при склеивании со строкой всегда получается строка

    console.log(typeof str1); //вывод типа данных
    console.log(typeof int1);
    console.log(typeof str);
    console.log(typeof nullVar);

    console.log(1 > 2);
    console.log(1 < 2);
    console.log(1 <= 2);
    console.log(1 == 1); //проверка на равенство
    console.log(1 != 1); //проверка на неравенство
    console.log('\'1\' == 1', '1' == 1);
    console.log('1' === 1);//строгое сравнение
    console.log(str2 < str3);//в строке идет сравнение по символам
    console.log('aab' > 'aac');

    console.log('true && true', true && true);
    console.log('true && false', true && false);
    console.log('true || true', true || true);
    console.log('true || false', true || false);

    console.log('\'\'', !'');
    if (1 >= 1 || 'строка') {
        console.log('Верно!');
    } else if (1 >= 1) {
        console.log('Да');
    } else {
        console.log('Нет');
    }

    for (var i = 0; i < 10; i++) {
        console.log('for', i);
    }
    var aaa = 10;
    while (aaa <= 10) {
        console.log(aaa++);
    }

    do {
        console.log('do while', aaa++);
    } while (aaa < 10);

    console.log(str3.length); //длина строки
    console.log(str3[0]); //первый символ
    console.log(str3.substr(0, 3)); //подстрока (вывод нескольких символов)
    console.log(int3.toFixed(1)); // округление до 1 знака после запятой

    var Masha = '12 яблок',
        vasya = '1 арбуз',
        ivan = '3 банана';
    console.log(parseInt(Masha) + parseInt(vasya) + parseInt(ivan));//выводит число

    console.log(Math.floor(1.3));//округляет до целого в меньшую сторону
    console.log(Math.ceil(1.3));// в большую
    console.log(Math.round(1.3));// до ближайшего целого
    console.log(Math.random());//случайное число

    var coin = Math.round(Math.random());
    // console.log(Math.round(Math.random()));//выбирает 0 или 1
    if (coin) {
        console.log('Орел');
    } else {
    console.log('Решка');
    }
    console.log(coin ? 'Орел' : 'Решка');
})();

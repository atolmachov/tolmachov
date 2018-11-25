;(function(){

    // var name = prompt('Your name');
    function sayHello() {
        console.log('Hello, ' + name);
    }
    sayHello();

    if (1 == 1) {
        let variable1 = 1;// let - видна только внутри блока
    }
    variable1 = 2;
    console.log(variable1);

    function calcSum(a, b, c) {
        // c = c ? c : 0;
        c = c || 0;
        console.log(a + b + c);
    }
    calcSum(1, 4, 2);

    var calcArea = function (a, b) {
        console.log(a * b);
    };
    calcArea(2, 3);

    var calcPerim = function (a, b) {
        // if (b > 10) {
        //     console.log('b > 10');
        //     return;
        // }
        return 2 * (a + b);//возвращает значение и прерывает функцию
    };
    console.log('Периметр ', calcPerim(2, 3));
    console.log('Половина периметра ', calcPerim(2, 3) / 2);
    console.log(calcPerim(2, 11));

    function calcPrice() {
        var pricePerOne = 10,
            l = +prompt('Длина стены'),
            w = +prompt('Высота стены'),
            perim = calcPerim(l, w);
        // if (perim > 20) {
        //     return perim * pricePerOne * 0.95;//скидка 5%
        // } else {
        //     return perim * pricePerOne; //без скидки
        // }
        return (perim > 20) ? perim * 0.95 * pricePerOne : perim * pricePerOne;
    }
    // console.log(calcPrice());

    // Рекурсия - вызов функции самой себя (возведение числа в степень)
    function calcDegree(num, degree) {
        console.log('degree', degree);
        if (degree > 1) {
            return num * calcDegree(num, degree - 1);
        } else {
            return num;
        }
    }
    console.log(calcDegree(2, 3));

    function ucFirst(str) {
        var firstChar = str.charAt(0).toUpperCase(),
            substr = str.substr(1, str.length);
        return firstChar + substr;
    }
    console.log(ucFirst('вася'));

    function min(a, b) {
        console.log(a > b ? b : a);
    }
    min(2, 5);
    min(3, -1);


    function prompt100() {
        var num = parseInt(prompt('Введите число'));
        if (num < 100) {
            prompt100();
        }else {
            console.log('Поздравляем!');
        }
    }
    prompt100();
})();


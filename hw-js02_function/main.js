/*
Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.

*/

;(function () {
    // var firstNum = prompt('Введите первое число'),
    //     lastNum = prompt('Введите последнее число');
    //
    // for (var i = firstNum; i <= lastNum; i++) {
    //     for (var j = firstNum; j < i; j++) {
    //         if (i % j == 0) continue
    //     }
    //     console.log('Натуральные числа в заданном диапазоне: ', i);
    // }
    //
    function getPrimeNum (from, to) {
        isPrime:
        for (from; from <= to; from++) {
           for (var i = 2; i < from; i++) {
               if (from % i == 0) continue isPrime;
           }
               console.log(from);
        }
    }
    getPrimeNum(1, 10);
})();
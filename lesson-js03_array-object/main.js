;(function () {
    var car = {
        params: {
            speed: 300,
            color: 'red',
            weght: 1000
        },
        details: ['door', 'wheel', 'engine', 'gear-box'],
        new: true
    }
    console.log(car);
    console.log(car.details);   // вывод свойства объекта
    if (car.new) {              //проверяет свойство new
        console.log('Машина новая');
    }
    car.inUkraine = false;      //добавление свойства
    console.log(car);
    car.params.power = 300;
    var car2 = car;
    car2.params.color = 'blue';
    console.log(car2);

    console.log(car.details[0]);    //вывод эл-та массива
    car.details[2] = 'steering wheel';
    car.details[10] = 'engine';
    console.log(car.details.length); //длина массива
    car.details.push('mirror'); //добавление эл-та в конец массива
    car.details.unshift('bumper'); //добавление эл-та в начало массива
    car.details.shift();        // удаление первого элемента
    car.details.pop();          // удаление последнего эл-та
    console.log('В машине есть детали: ' + car.details.filter(function (item) { return item != undefined }).join(', ')); //склеивание join в строку + filter пустых эл-тов

    var fruits = 'apple, orange, banana, kiwi, apple, orange, banana, fruit fruit';
    var fruitsArray = fruits.split(', ');//разбиение строки в массив
    console.log(fruitsArray);
    delete fruitsArray[2];      //удаление одного эл-та без сдвига
    console.log(fruitsArray);
    fruitsArray.splice(4, 3);   //удаление 3-х эл-тов, начиная с 4-ого
    fruitsArray.splice(4, 3, 'melon', 'watermelon');   // .... и добавление 2-х новых
    console.log(fruitsArray);
                                  // slice - создает копию массива
    // for in
    var student = {
        FirstName: 'Ivan',
        secondName: 'Ivanov',
        age: 20,
        rating: 97
    }
    for(var key in student) {
        // console.log(key);
        // console.log(student[key]);
        if (key === 'rating') {
            if (student[key] >= 90) {
                console.log(key + ': отличник');
            } else if (student[key] >= 70) {
                console.log(key + ': хорошист');
            } else if (student[key] >= 55) {
                console.log(key + ': базовый уровень');
            } else {
                console.log(key + ': двоечник');
            }
        } else {
            console.log(key + ': ' + student[key]);
        }
    }
})();
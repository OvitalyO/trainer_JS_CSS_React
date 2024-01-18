const Function = () => {
    /** 1) function Declaration === объявление функции */
    function myFunction(a, b) {
        return a + b;
    }

    /** 2) function Expression === функциональные выражения */
    const myExpFunction = function (a, b) {
        return a + b;
    }

    /** 3) arrow function (ES6) === стрелочные функции */
    const myArrowFunction = (a , b) => a + b;
    const myArrowFunction2 = a => a + 10;

    /** 4) Generator function (ES6) === функция-генератор */
    // function * generate () { //допустимо с *
    // function *generate () { //допустимо с *
    function* generate () {
        console.log("first step");
        yield 1; // ключевое слово - возвращает промежуточные данные в виде object{done:false, value: 1} и отдает контроль над функцей
        yield 2; //{done:false, value: 2}
        console.log("second step");
    }
    let iterator = generate();
    iterator.next(); //исползуем метод next()
    console.log(iterator)

    function* generate () {
        console.log("first step");
        let res = (yield) * 2;
        console.log("Result: ", res);
    }
    let iterator2 = generate();
    console.log(iterator2.next()); //вызываем с помощью метода next()
    console.log(iterator.next(2));

    //
    /** 5) Использование new Function */

    // 6) Сокращенное определение метода
    console.log(myFunction(1,2), myExpFunction(2,3), myArrowFunction2(1));


    return (
        <div>
            function Declaration === объявление функции
            function Expression === функциональные выражения
            arrow function (ES6) === стрелочные функции
            Generator function (ES6) === функция-генератор (функция, которая выполняясь может остановиться и вернуть промежуточный результат. А потом продожит выполняться
        </div>
    );
};

export default Function;

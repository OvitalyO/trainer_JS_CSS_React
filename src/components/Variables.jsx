const Variables = () => {
    (function test() {
        /**var - 1)локальная (внутри функции) область видимости;
        2) считается устаревшим после выхода ES6 в июне 2015
        3) при вызове до объявления выдаст undefained
        4) при вызове несколько раз не выдаст ошибку
         5)чтобы изолировать использовали самовызывающие функ */
        if (true){
            var company = "MKB"
            console.log('проверяем var внури блока if: ', company)
        }
        console.log('проверяем var внури функции: ', company)
        var company = "MKS"
    }());

    /**let - 1)блочная область видимости;
     2) вышел с ES6 в июне 2015
     3) при вызове до объявления выдаст ошибку
     4) при вызове несколько раз выдаст ошибку
     */

    if (true){
        const company = 'nameCompany';
        console.log('проверяем let внури блока if: ', company)
    }
    // console.log('проверяем let внури функции: ', company) ОШИБКА

    /**const - 1)блочная область видимости;
     2) вышел с ES6 в июне 2015
     3) можно менять содержимое object и array, но нельзя изменять тип данных.
     */
    const city = 'Moscow';

    return (
        <div>
            Undefined(|ˌʌndɪˈfaɪnd|) === не определено
            Variables |ˈverɪəbəlz| === переменные
        </div>
    );
};

export default Variables;

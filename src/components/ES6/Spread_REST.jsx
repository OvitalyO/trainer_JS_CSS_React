const Spread_REST = () => {
    const classic = ['lada', 'BMW', 'Audi'];
    const electric = ['Teala', 'Xiomi', 'Ferrari'];

    const allAuto = [...classic, ...electric]; //1.1) //["lada","BMW", "Audi", "Teala", "Xiomi", "Ferrari"];

    const allAutoDublicate = classic.concat(electric) //2)

    // console.log(allAuto, allAutoDublicate)
    //добавляем еще один бренд между
    let allCarsDublicate = [...classic, 'Ford', ...electric]; //1.2) //["lada","BMW", "Audi", "Ford", "Teala", "Xiomi", "Ferrari"];

    let allCars = []; //2)
    allCars = allCars.concat(classic);
    allCars.push('Ford');
    allCars = allCars.concat(electric);
    //не грубокая копия масива или объекта
    const copyTest = [...allCarsDublicate]; //1.3) //["VAZ","BMW", "Audi", "Ford", "Teala", "Xiomi", "Ferrari"];
    copyTest[0] = 'VAZ';

    // сумма массива
    const arr = [1,2,3];
    function  sum(a,b,c){
        return a + b +c
    }
    console.log(sum(...arr));

    //строку разбить посимвольно в массив
    let typeCars = 'electric'; // 1.4)
    let arrayTypeCars = [...typeCars]; //["e","l","e", "c", "t", "r", "i", "c"]

    //работа с элементами span
    // const cars = [...(document.querySelectorAll('#mmr'))];
    // const cars2 = Array.from(document.querySelectorAll('.cars2 span'));
    // const carsListing = cars.map(car => car.textContent);
    // console.log(carsListing);
    // console.log(cars2);

    // console.log(allCars, allCarsDublicate, copyTest, arrayTypeCars);
    return (
        <div className='cars2'>
            <span id='mmr'>Tesla</span>
            <span id='mmr'>Audi</span>
            <span className='cars'>Ford</span>
        </div>
    );
};

export default Spread_REST;

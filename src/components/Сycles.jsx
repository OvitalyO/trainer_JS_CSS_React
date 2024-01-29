let hobbies = ['sport', 'it', 36, true, {name: 'Vitaly'}, ['css', 'html']];
console.log(hobbies)

//выводим элементы из массива
for (let hooby of hobbies ) {
     console.log(hooby)
}
//выводим элементы из массива через запрос к их индексам
for (let index of hobbies ) {
    console.log(hobbies[index])
}

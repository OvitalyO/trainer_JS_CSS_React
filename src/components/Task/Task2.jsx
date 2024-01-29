const cloneDeep = require('lodash/cloneDeep');

// from math import plus

// #include<>

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

const serverResponse = {
    res: {
        headers: {
            format: 'raw',
            'Content-Type': 'text/json'
        },
        body: {
            data: [...library]
        }
    }
}

function getSortedCollection (collection, field) {
    let copyRes = cloneDeep(collection);
    copyRes.res.body.data.sort(( a, b )=> a[field] < b[field] ? -1 : 1 );
    return copyRes;
}

function clone () {

}

console.log('source data before calling', serverResponse.res.body.data)
console.log('result data', getSortedCollection(serverResponse, 'title').res.body.data)
console.log('source data after calling', serverResponse.res.body.data)

'use strict';

// промис который выполнился успешно
let promiseResult = new Promise((resolve, reject) => {
    resolve('data');
    reject('error');
});
promiseResult.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('isFinally')
});

// промис который выполнился с ошибкой
let promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data');
    }, 1000);
    reject('error');
});
promiseError.then(
    result => console.log(result),
    error => console.log(error)
);

fetch('result.json').then(
    result => result.json()
).then(
    result => result.data.items.forEach((item) => {
        console.log(item.name);
    }),
    error => console.log(error)
);




// перебор массива
const words = ['q', 'w', 'e', 'r', 't', 'y'];
for (let word of words) {
//    console.log(word);
}

// альтернативный способ итерации
const eWords = words[Symbol.iterator]();
//console.log(eWords.next().value);
//console.log(eWords.next().value);
//console.log(eWords.next().value);

// соединение двух массивов
const numbers = [1, 2, 3];
const wordsAndNumbers = words.concat(numbers);
//console.log(wordsAndNumbers);

// возвращает новый объект содержащий пару ключ / значение
const eNumbers = numbers.entries();
//console.log(eNumbers.next().value);

// проверяет удовлеторяют ли все елементы массива условию в данном случает все меньше 4
let tinyInt = numbers.every(number => number < 4);
//console.log(tinyInt);

// создает массив из 5 элементов  и заполняет значение 4 от 2-й и 3-й элементы
const fills = Array(5).fill(4, 1, 3);
fills[0] = 3;
//console.log(fills);

// создает новый массив прошедший проверку в данно случае значение должно быть больше 1
const eFills = fills.filter(value => value > 1);
//console.log(eFills);

function isPrime(element, index, array) {
    return element % 2 === 0;
}
// выдает значение первого найденного в массиве элемента
const prime = fills.find(isPrime);
//console.log(prime);

// выдает значение индекса первого найденного в массиве элемента
const primeIndex = fills.findIndex(isPrime);
//console.log(primeIndex);

// бесконечность
let depth = Infinity;
// console.log(depth); // Infinity
// возвращает новый массив на уровень depth
const flats = [1, 2, [3, 4, [5, 6]]].flat(depth);
// console.log(flats); // [ 1, 2, 3, 4, 5, 6 ]

// возвращает сначало применяет к каждому элементу а потом преобразует в плоский
const flatMaps = numbers.flatMap(x => [x * 2]);
// console.log(flatMaps); // [ 2, 4, 6 ]

// выполняет указанную функцию для каждого элемента в массиве
numbers.forEach((element) => {
    // console.log(element); // 1 2 3
});

// создает массив из строки, Set или Map
const fromString = Array.from('string');
// console.log(fromString); // [ 's', 't', 'r', 'i', 'n', 'g' ]
const s = new Set();
s.add('from');
s.add(null)
const fromSet = Array.from(s);
//console.log(fromSet); // [ 'from', null ]
const m = new Map();
m.set('from', 'map');
m.set('to', null, '');
const fromMap = Array.from(m);
// console.log(fromMap); // [ [ 'from', 'map' ], [ 'to', null ] ]

// определяет содержит ли массив значение или нет
const isOne = numbers.includes(1);
// console.log(isOne); // true
const isFive = numbers.includes(5);
// console.log(isFive); // false


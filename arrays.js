// перебор массива
const words = ['q', 'w', 'e', 'r', 't', 'y'];
for (let word of words) {
    // console.log(word);
}

// альтернативный способ итерации
const eWords = words[Symbol.iterator]();
// console.log(eWords.next().value); // q
// console.log(eWords.next().value); // w
// console.log(eWords.next().value); // e

// соединение двух массивов
const numbers = [1, 2, 3];
const wordsAndNumbers = words.concat(numbers);
// console.log(wordsAndNumbers); // [ 'q', 'w', 'e', 'r', 't', 'y', 1, 2, 3 ]

// возвращает новый объект содержащий пару ключ / значение
const eNumbers = numbers.entries();
// console.log(eNumbers.next().value); // [ 0, 1 ]
// console.log(eNumbers.next().value); // [ 1, 2 ]

// проверяет удовлеторяют ли все елементы массива условию в данном случает все меньше 4
let tinyInt = numbers.every(number => number < 4);
// console.log(tinyInt); // true

// создает массив из 5 элементов  и заполняет значение 4 от 2-й и 3-й элементы
const fills = Array(5).fill(4, 1, 3);
fills[0] = 3;
// console.log(fills); // [ 3, 4, 4, <2 empty items> ]

// создает новый массив прошедший проверку в данно случае значение должно быть больше 1
const eFills = fills.filter(value => value > 1);
// console.log(eFills); // [ 3, 4, 4 ]

function isPrime(element, index, array) {
    return element % 2 === 0;
}
// выдает значение первого найденного в массиве элемента удовлетворяющий условию
const prime = fills.find(isPrime);
// console.log(prime); // 4

// выдает значение индекса первого найденного в массиве элемента
const primeIndex = fills.findIndex(isPrime);
// console.log(primeIndex); // 1

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
s.add('null');
s.add(null)
const fromSet = Array.from(s);
// console.log(fromSet); // [ 'null', null ]
const m = new Map();
m.set('null', null);
m.set(1, 2, 3);
const fromMap = Array.from(m);
// console.log(fromMap); // [ [ 'null', null ], [ 1, 2 ] ]

// определяет содержит ли массив значение или нет
const isOne = numbers.includes(1);
// console.log(isOne); // true
const isFive = numbers.includes(5);
// console.log(isFive); // false

// возвращает первый индекс по которому данный элемент найден в массиве если не найден -1
const isTwo = numbers.indexOf(2);
// console.log(isTwo); // 1
const isFour = numbers.indexOf(4);
// console.log(isFour);

// проверяет является переменная массивом или нет
// console.log(Array.isArray(numbers)); // true
// console.log(Array.isArray(isOne)); // false

//
const joinFromString = fromString.join('');
// console.log(joinFromString); // string
const joinWithDashFromString = fromString.join('-');
// console.log(joinWithDashFromString); // s-t-r-i-n-g

// возвращает новый итератор массива, содержащий ключи каждого индекса в массиве.
const keys = numbers.keys();
// console.log(keys.next()); // { value: 0, done: false }
// console.log(keys.next()); // { value: 1, done: false }
// console.log(keys.next()); // { value: 2, done: false }
// console.log(keys.next()); // { value: undefined, done: true }

// возвращает последние индекс по которому задан элемент
// console.log(fills.lastIndexOf(4)); // 2

// создает новый массив в котором делает преобразования для каждого элемента старого массива
const mapNumbers = numbers.map((value) => {
    return value * 10;
});
//console.log(mapNumbers);

// создаст новый массив со значениями 1, 3, 5
// console.log(Array.of(1,3,5)); // [ 1, 3, 5 ]

// удаляет последний элемент массива и возвращает его значение
const popElement = numbers.pop();
// console.log(popElement); // 3
// console.log(numbers); // [ 1, 2 ]

// добавляет один или более элементов в массив и возвращает его новую длину
const pushElement = numbers.push(5, 7);
// console.log(pushElement); // 4
// console.log(numbers); // [ 1, 2, 5, 7 ]


const reducer = (accumulator, currentValue) => accumulator - currentValue;
// применяет функцию reducer к каждому элементу массива с начала массива к концу
// console.log(numbers.reduce(reducer)); // -13
// применяет функцию reducer к каждому элементу массива с конца массива к началу
// console.log(numbers.reduceRight(reducer)); // -1

// переворачивает массив в обратном порядке
// console.log(numbers.reverse()); // [ 7, 5, 2, 1 ]

// удаляет первый элемент массива и возвращает его значение
// console.log(numbers.shift()); // 1
// console.log(numbers); // [ 2, 3 ]

// создает новый массив на основнии предыдущего
// console.log(numbers); // [ 1, 2, 5, 7 ]
// console.log(numbers.slice(2)); // [ 5, 7 ]
// console.log(numbers.slice(1, 3)); // [ 2, 5 ]

// проверка удовлетворяет какой то элемент условию или нет
// console.log(numbers.some(isPrime)); // true
// console.log(numbers.slice(2).some(isPrime)); // false

// сортирует элементы массива и возвращает новый массив
// console.log(words); // [ 'q', 'w', 'e', 'r', 't', 'y' ]
// console.log(words.sort()); // [ 'e', 'q', 'r', 't', 'w', 'y' ]

// удаляет существующие и добавляет новые
// console.log(numbers); // [ 1, 2, 5, 7 ]
numbers.splice(2, 1, 3, 9);
// console.log(numbers); // [ 1, 2, 3, 9, 7 ]

// массив выдает строкой через запятую
// console.log(numbers.toString()); // 1,2,3,9,7
// массиы выдает через знак который в указан в настройках локали
// console.log(numbers.toLocaleString()); // 1,2,3,9,7

// добавляет один или несколько элементов в начало массива и вернет его новую длину
// console.log(numbers.unshift(8, 5)); // 7
// console.log(numbers); // [ 8, 5, 1, 2, 3, 9, 7 ]

const colors = ['red', 'green', 'blue'];
const colorsValues = colors.values()
// console.log(colorsValues.next().value); // red
// console.log(colorsValues.next().value); // green
// console.log(colorsValues.next().value); // blue

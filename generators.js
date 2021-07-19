/**
 * генератор тригонометрических функций
 * @param value
 * @returns {Generator<number, number, *>}
 */
function* trigonometricValues(value) {
    yield Math.sin(value);
    yield Math.cos(value);
    yield Math.tan(value);
    return Math.tanh(value);
}

let values = trigonometricValues(0);

console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());

/** результат выполнения
 { value: 0, done: false }
 { value: 1, done: false }
 { value: 0, done: false }
 { value: 0, done: true }
 */

/**
 * генератор значений
 * @param begin
 * @param end
 * @returns {Generator<*, void, *>}
 */
function* rangeValues(begin, end) {
    for (let i = begin; i <= end; i++) yield i;
}

/**
 * генерирует нужные значения в один генератор
 * @returns {Generator<*, void, *>}
 */
function* rangePasswordValues() {
    yield* rangeValues(48, 57);
    yield* rangeValues(65, 90);
    yield* rangeValues(97, 122);
}

let strRangePassword = '';

for (let value of rangePasswordValues()) {
    strRangePassword += String.fromCharCode(value);
}

console.log(strRangePassword);
/**
 * результат выполнения
 * 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 */

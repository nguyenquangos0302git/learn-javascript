const sum = 1 + 2; // 3
const substract = 1 - 2; // -1
const multiply = 1 * 2; // 2
const divide = 1 / 4; // 0.25
const remainder = 7 % 5; // 2 because 7 = 5x1 + 2 (remainder)
// increment
let count = 1;
const n = count++; // 1 postfix, return first, then increase
let count = 1;
const n = ++count; // 2 prefix, increase first, then return
// decrement
let count = 1;
const n = count--; // 1 postfix, return first, then decrease
let count = 1;
const n = --count; // 0 prefix, decrease first, then return
// unary plus: attempts to convert to number if it's not a number
const n = +"123"; // 123
// unary negation: return the negation of the operand
const n = -"123"; // -123
// exponentiation operator
const n = 2 ** 3; // means 2^3 = 8

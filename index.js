// EXAMPLE 1 - Check if Value is a Negative Number

function isNegative(num) {
  if (Math.sign(num) === -1) {
    return true;
  }

  return false;
}

console.log(isNegative(-5)); // 👉️ true
console.log(isNegative(5)); // 👉️ false
console.log(isNegative('-5')); // 👉️ true
console.log(isNegative('test')); // 👉️ false

// // ------------------------------------------------------

// function checkNumberSign(num) {
//   if (Math.sign(num) === 1) {
//     console.log('The value is a positive number');
//   } else if (Math.sign(num) === -1) {
//     console.log('The value is a negative number');
//   }
// }

// checkNumberSign(5); // 👉️ The value is a positive number
// checkNumberSign(-5); // 👉️ The value is a negative number

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Value is a Negative Number using comparison operators

// function isNegative(num) {
//   if (num < 0) {
//     return true;
//   }

//   return false;
// }

// console.log(isNegative(-5)); // 👉️ true
// console.log(isNegative(5)); // 👉️ false
// console.log(isNegative('-5')); // 👉️ true
// console.log(isNegative('test')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Number is a Negative Integer in JavaScript

// function isNegativeInteger(value) {
//   if (Number.isInteger(value) && value < 0) {
//     return true;
//   }

//   return false;
// }

// console.log(isNegativeInteger(0)); // 👉️ false
// console.log(isNegativeInteger(-1.5)); // 👉️ false
// console.log(isNegativeInteger(-1)); // 👉️ true
// console.log(isNegativeInteger('-1')); // false

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if Value is a Positive Number in JavaScript

// function isPositive(num) {
//   if (Math.sign(num) === 1) {
//     return true;
//   }

//   return false;
// }

// console.log(isPositive(-5)); // 👉️ false
// console.log(isPositive(5)); // 👉️ true
// console.log(isPositive('5')); // 👉️ true
// console.log(isPositive('test')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 5 - Check if Value is a Positive Number using comparison operators

// function isPositive(num) {
//   if (num > 0) {
//     return true;
//   }

//   return false;
// }

// console.log(isPositive(-5)); // 👉️ false
// console.log(isPositive(5)); // 👉️ true
// console.log(isPositive('5')); // 👉️ true
// console.log(isPositive('test')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if String is a Positive Integer in JavaScript

// function isPositiveInteger(str) {
//   if (typeof str !== 'string') {
//     return false;
//   }

//   const num = Number(str);

//   if (Number.isInteger(num) && num > 0) {
//     return true;
//   }

//   return false;
// }

// console.log(isPositiveInteger('0')); // 👉️ false
// console.log(isPositiveInteger('1')); // true
// console.log(isPositiveInteger('-1')); // 👉️ false
// console.log(isPositiveInteger('1.5')); // 👉️ false
// console.log(isPositiveInteger('test')); // false
// console.log(isPositiveInteger('')); // 👉️ false
// console.log(isPositiveInteger('   ')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 7 - Check if String is a Positive Integer using Math.sign()

// function isPositiveInteger(str) {
//   const num = Number(str);

//   if (Number.isInteger(num) && Math.sign(num) === 1) {
//     return true;
//   }

//   return false;
// }

// console.log(isPositiveInteger('0')); // 👉️ false
// console.log(isPositiveInteger('1')); // true
// console.log(isPositiveInteger('-1')); // 👉️ false
// console.log(isPositiveInteger('1.5')); // 👉️ false
// console.log(isPositiveInteger('test')); // false
// console.log(isPositiveInteger('')); // 👉️ false
// console.log(isPositiveInteger('   ')); // 👉️ false

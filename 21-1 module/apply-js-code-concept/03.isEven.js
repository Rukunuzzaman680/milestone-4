// even number
// console.log(4 / 2);
// console.log(98 / 2);
// console.log(114 / 2);
// console.log(1234 / 2);
// odd number
// console.log(4 / 2);
// console.log(98 / 2);
// console.log(114 / 2);
// console.log(1234 / 2);

// console.log(4 % 2);
// console.log(98 % 2);
// console.log(114 % 2);
// console.log(1234 % 2);

// console.log(7 % 2);
// console.log(99 % 2);
// console.log(115 % 2);
// console.log(1237 % 2);

function isEven(number) {
  const reminder = number % 2;
  // console.log(reminder);
  if (reminder === 0) {
    // console.log('number is even');
    return true;
  } else {
    // console.log('number is odd');
    return false;
  }
}
// isEven(303);
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
// isEven(1280);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);

// let factorial = 1;
// for (i = 1; i <= 5; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

// ---------------

function factorial(i) {
  if (i == 1) {
    return 1;
  } else {
    return i * factorial(i - 1);
  }
}
const result = factorial(4);
console.log(result);

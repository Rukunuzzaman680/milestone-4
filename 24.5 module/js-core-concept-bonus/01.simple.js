// var sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// var sum = 0;
// for (let i = 10; i >= 1; i--) {
//   sum = sum + i;
// }
// console.log(sum);

// ----- recursion ------

function sum(i) {
  if (i == 1) {
    return 1;
  } else {
    return i + sum(i - 1);
  }
}
const result = sum(5);
console.log(result);

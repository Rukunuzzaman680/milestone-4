// math power
const result = Math.pow(3, 8);
// console.log(result);

// math absolute
const num1 = 25;
const num2 = 45;
// const gap = num1 - num2;
const gap = Math.abs(num1 - num2);
console.log(gap);
// console.log(gap);
if (gap < 5) {
  console.log('you guys can be friends');
} else {
  console.log('you guys stay apart');
}

//--------------------
// -------------------
const number = 3.5435;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(2.000034);
const result3 = Math.floor(2.000034);
// console.log(result2);
// console.log(result3);

// -------------------
// random

// console.log(Math.random());
const random = Math.round(Math.random() * 100);
// console.log(random);
for (i = 0; i < 10; i++) {
  const random = Math.round(Math.random() * 100);
  console.log(random);
}

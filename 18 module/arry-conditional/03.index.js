var numbers = [45, 35, 64, 21, 67, 88];
console.log(numbers);
console.log(numbers[0]);

// 1. get element by index
var element = numbers[1];
// console.log(element);

// 2. set element value change by index
numbers[3] = 25;
numbers[4] = 100;
// console.log(numbers);

// 3. find index of an element
var position = numbers.indexOf(88);
// if any value has no in the index
var positionIndex = numbers.indexOf(888);

// console.log(position);
// console.log(positionIndex);

let sum = 0;
for (i = 0; i <= 7; i++) {
  sum = sum + i;
  // console.log(i, sum);
}

function sumOfNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number.length; i++) {
    sum = sum + i;
    console.log(sum);
  }
  return sum;
}
const evenNumber = [23, 44, 55, 67, 88, 12, 55];
const evenNumberValue = sumOfNumber(evenNumber);
console.log(evenNumberValue);

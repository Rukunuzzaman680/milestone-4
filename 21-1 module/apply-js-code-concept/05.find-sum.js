function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

const myNumbers = [12, 65, 78, 32, 45, 91];
const numberSum = getSum(myNumbers);
console.log('odd number sum:', numberSum);

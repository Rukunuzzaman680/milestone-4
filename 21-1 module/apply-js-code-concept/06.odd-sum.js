function getOddNumbers(numbers) {
  const oddNumber = [];
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];

    if (element % 2 == 1) {
      oddNumber.push(element);
      var sum = element + sum;
      console.log(index, element, sum);
    }
  }
  return oddNumber;
}
const myNumbers = [12, 65, 78, 32, 45, 91];
const oddNumber = getOddNumbers(myNumbers);
const oddNumberSum = getOddNumbers(oddNumber);
console.log('this is odd number', oddNumberSum);

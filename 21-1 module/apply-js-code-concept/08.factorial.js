// 5! = 1*2*3*4*5
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
const result = factorial(5);
console.log(result);

const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLowerCase() == userInput.toLowerCase()) {
  console.log('valid number');
} else {
  console.log('invalid number');
}

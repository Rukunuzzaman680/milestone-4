var numbers = [12, 22, 32, 42, 52, 62, 188, 34, 754, 88];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    continue;
  }
  console.log(number);
}

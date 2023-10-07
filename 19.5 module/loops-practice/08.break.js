// for (var i = 1; i <= 20; i++) {
//   console.log(i);
//   if (i > 5) {
//     break;
//   }
// }

// var roastGiven = 0;
// while (roastGiven < 10) {
//   console.log('give me roast');
//   roastGiven++;
//   if (roastGiven > 4) {
//     break;
//   }
// }

// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'phone'];
// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   if (item == 'pen') {
//     break;
//   }
//   console.log(item);
// }

var numbers = [112, 22, 32, 42, 52, 62, 188, 34, 754, 88];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number);
}

// array vs object
// var shoppingCart = ['books', 'sunglass', 'shoes', 'pen'];
// var friendAge = [12, 45, 79, 40, 34];

// var shoppingCart = {
//   books: 100,
//   sunglass: 30,
//   keyboard: 50,
//   mouse: 60,
//   pen: 85,
//   shoes: 2,
//   bottle: 4,
// };

var shoppingCart = {
  books: 200,
  sunglass: 35,
  keyboard: 50,
  mouse: 60,
  pen: 56,
  shoes: 16,
  bottle: 10,
};

var keysName = Object.keys(shoppingCart);
// console.log(keysName);
var valuesName = Object.values(shoppingCart);
// console.log(valuesName);

// declared keysName and keysValues
for (var i = 0; i < keysName.length; i++) {
  var propertyName = keysName[i];
  // console.log(propertyName);
  var propertyValue = shoppingCart[propertyName];
  // console.log(propertyValue);
  console.log(i, propertyName, propertyValue);
  // var propertiesValue = shoppingCart[propertyName];
  // console.log(propertyName, propertiesValue);
}

// for in loop
for (var propertyName in shoppingCart) {
  var value = shoppingCart[propertyName];
  // console.log(propertyName, value);
}

var shoppingCart = {
  books: 100,
  sunglass: 30,
  keyboard: 50,
  mouse: 60,
  pen: 85,
};
// console.log(shoppingCart);

//  ## declare the property value in 3 ways ##
// --- "" first system "" ---
var penCount = shoppingCart.pen;
// console.log(penCount);
// --- "" second system ""---
var penCount2 = shoppingCart['keyboard'];
// console.log(penCount2);
// --- "" third system "" ---
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue, propertyName);

// **** change the properties value *****
// --- "" first system "" ---
shoppingCart.sunglass = 35;
console.log(shoppingCart);
// --- "" second system "" ---
shoppingCart['books'] = 200;
console.log(shoppingCart);
// --- "" third system "" ---
shoppingCart[propertyName] = 65;
console.log(shoppingCart);

// find all properties of the object
var propertiesKeys = Object.keys(shoppingCart);
console.log(propertiesKeys);
// find all value of the object
var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

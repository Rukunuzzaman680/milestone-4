const friends = [99, 88, 77, 66, 55, 44, 33, 22];

// Removes elements from an array
// and, if necessary, inserts new elements in their place,
// returning the deleted elements.
console.log(friends);

const partial = friends.splice(2, 4);
console.log(partial);
console.log(friends);
const partial2 = friends.splice(2, 0, 100, 200, 300);
// console.log(partial2);
console.log(friends);

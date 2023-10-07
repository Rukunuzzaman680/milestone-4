const country = 'Bangladesh';
const age = 23;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'Rny' };
const friends = [12, 15, 11, 21, 23, 17, 33, 64, 76];
function add(num1, num2) {
  return num1 + num2;
}

console.log(student);
console.log(add);

// check array ---- is or not
console.log(Array.isArray(friends));

// find element of array
console.log(friends.includes(76));
console.log(friends.includes(760));
// unusual use find of array
if (friends.indexOf(33) !== -1) {
  console.log('33 is here');
} else {
  console.log('33 is not here');
}

// concat
const newFriends = [99, 88, 77, 66, 55, 44, 33, 22];
const allFriends = newFriends.concat(friends);
console.log(allFriends);

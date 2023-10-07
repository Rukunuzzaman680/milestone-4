// 1. Variable
// var myName = 'rony';

// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=

// 2. Array
var friends = ['rony', 'rukon', 'umme', 'hani', 'zohra'];

var thirdFriend = friends[2];
friends[3] = 'mukul';

// 3. conditionals
// >, <, >=, <=, ==, ===, !=, !===
if (friends.length < 6) {
  console.log('you have any friend');
} else {
  console.log('yes, i have a friend');
}

// 4. loop
// while
var number = 0;
while (number < 6) {
  console.log(number);
  number++;
}
// for
for (var i = 0; i <= 10; i++) {
  console.log();
}

// 5. function
function isMoonUp() {
  if (time > 7) {
    return true;
  }
}

// object
var resultMarks = {
  bangla: 78,
  english: 80,
  math: 56,
};

function reverseString(text) {
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    console.log(element);
  }
}
const myString = 'i am a good boy';
const reversed = reverseString(myString);

// reverse way
function reverseString1(text1) {
  for (let i = text1.length - 1; i >= 0; i--) {
    const element1 = text1[i];
    console.log(element1);
  }
}
const myString1 = 'i am a good boy';
const reversed2 = reverseString1(myString1);

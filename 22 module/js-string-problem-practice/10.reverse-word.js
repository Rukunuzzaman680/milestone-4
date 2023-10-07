function reverseWords(str) {
  const words = str.split(' ');
  const result = [];
  // console.log(words);
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(' ');
  return reversed;
}
const myString = 'i am a good boy';
const reversed = reverseWords(myString);
console.log(reversed);

function minInArray(numbers) {
  let smallest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
const hights = [167, 190, 165, 137, 120];
const mostShort = minInArray(hights);
console.log('Most small number:', mostShort);

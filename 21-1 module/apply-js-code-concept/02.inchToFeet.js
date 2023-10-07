// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadaInches / 12;
// console.log('dadi feet', dadaFeet);

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);

// miles to km
function milesToKm(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}
const distanceMiles = 130;
const distanceKm = milesToKm(distanceMiles);
console.log('130 miles =', distanceKm);

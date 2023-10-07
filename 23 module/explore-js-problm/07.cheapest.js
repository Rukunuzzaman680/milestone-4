const phones = [
  { name: 'Samsung', camera: 12, storage: '32', price: 36000, color: 'silver' },
  { name: 'Walton', camera: 12, storage: '32', price: 22000, color: 'silver' },
  { name: 'iPhone', camera: 12, storage: '32', price: 96000, color: 'silver' },
  { name: 'Xiaomi', camera: 12, storage: '32', price: 52000, color: 'silver' },
  { name: 'Oppo', camera: 12, storage: '32', price: 20000, color: 'silver' },
  { name: 'Nokia', camera: 12, storage: '32', price: 62000, color: 'silver' },
];
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);

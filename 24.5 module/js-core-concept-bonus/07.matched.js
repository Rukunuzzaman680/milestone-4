const products = [
  { id: 1, name: 'xiaomi phone One night' },
  { id: 2, name: 'lenevo yoga laptop' },
  { id: 3, name: 'iphone' },
  { id: 4, name: 'mac book air laptop' },
  { id: 5, name: 'Dell inspiron laptop' },
  { id: 6, name: 'Samsung Phone s23 ultra' },
  { id: 7, name: 'Nokia old phone' },
  { id: 8, name: 'New brand Phone ' },
];
// function matchedProducts(products, search) {
//   const matched = [];
//   for (const product of products) {
//     if (product.name.toLowerCase().includes(search.toLowerCase())) {
//       matched.push(product);
//     }
//   }
//   return matched;
// }
// const result = matchedProducts(products, 'phone');
// console.log(result);

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);

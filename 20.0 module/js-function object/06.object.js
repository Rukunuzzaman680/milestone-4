var student = {
  id: 115,
  name: 'Rukunuzzaman Rony',
  class: 9,
  marks: 72,
};

var mobile = {
  brand: 'Samsung',
  price: 18000,
  storage: '64gb',
  camera: '7mp',
  processor: 'snapdragon gen2',
};
console.log(mobile.processor);
// change the object value
mobile.processor = 'snapdragon gen3';
console.log(mobile.processor);

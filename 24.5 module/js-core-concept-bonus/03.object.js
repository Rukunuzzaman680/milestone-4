const actor = {
  name: 'Rukunuzzaman Rony',

  id: 12009029,

  address: 'Begum Rokeya University, Rangpur',

  isSingle: true,

  friends: ['umme', 'hani', 'zohra', 'taniya'],

  movies: [
    { name: '3 idiot', year: 2015 },
    { name: 'pk', year: 2010 },
  ],

  act: function () {
    console.log('i am rony');
  },

  car: {
    brand: 'tesla',
    price: 39999999,
    made: 'USA',
    manufacturer: {
      name: 'tesla',
      ceo: 'Elon Mask',
      country: 'USA',
    },
  },
};
console.log(actor.movies[1]);
actor.act();

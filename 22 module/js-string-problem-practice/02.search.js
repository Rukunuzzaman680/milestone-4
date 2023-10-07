// search the string number and element
const lyrics =
  'Amar sonar bangla ami tomay vlobasi.. cirodin tomar akash tomar Batash amar prane .. oo ma amar prane bajay basi sonar bangla ami tomay vlobasi.';

const doExist = lyrics.includes('tomayy');
// console.log(doExist);

const searchString = 'BaTash';
const searchStringLower = searchString.toLowerCase();
const searchLyricsLower = lyrics.toLowerCase();
const doesExist = searchLyricsLower.includes(searchStringLower);
// console.log(doesExist);

// exist one line
const existOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(existOneLine);

// index of
console.log(lyrics.indexOf('ami'));

// search element exist or not exist
if (lyrics.indexOf('banglaa') !== -1) {
  console.log('exist number here');
} else {
  console.log('number is not here');
}

// // startWith
// console.log(lyrics.startsWith('Amar'));

// // endWith
// console.log(lyrics.endsWith('vlobasi.'));

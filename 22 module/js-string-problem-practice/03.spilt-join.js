const lyrics =
  'Amar sonar bangla ami tomay vlobasi. cirodin tomar akash tomar Batash amar prane. oo ma amar prane bajay basi sonar bangla ami tomay vlobasi.';

// split
// for every word
const parts = lyrics.split(' ');
// for every sentence
const sentence = lyrics.split('.');
// for every character
const chars = lyrics.split('');

// slice
const partial = lyrics.slice(11, 18);
console.log(partial);

// substring
const partial2 = lyrics.substring(5, 10);

// join
const newLyrics = [
  'Amar sonar bangla ami tomay',
  'vlobasi. cirodin tomar akash',
  'tomar Batash amar prane. oo ma',
  'amar prane bajay basi sonar',
  'bangla ami tomay vlobasi',
];
const newSong = newLyrics.join('. ');
console.log(newSong);

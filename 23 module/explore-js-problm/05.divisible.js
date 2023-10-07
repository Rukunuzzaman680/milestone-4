for (i = 1; i <= 35; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('footbar');
  } else if (i % 3 === 0) {
    console.log('foot');
  } else if (i % 5 === 0) {
    console.log('bar');
  } else {
    console.log(i);
  }
}

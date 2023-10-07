function isLeapYear(year) {
  var remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const leapYearDate = 2016;
const leapYear = isLeapYear(leapYearDate);
console.log(leapYear);

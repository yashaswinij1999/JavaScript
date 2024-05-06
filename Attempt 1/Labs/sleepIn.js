function sleepIn(weekday, vacation) {
  if (weekday === false && vacation === true) {
    return true;
  } else if (weekday === false && vacation === false) {
    return true;
  } else {
    return false;
  }
}
console.log(sleepIn(false, false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));

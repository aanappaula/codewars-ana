function isLeapYear(year) {
  if (year / 4 && year / 400) {
    return true;
  } else if (year / 100) {
    return false;
  } else {
    return false;
  }
}

function isLeapYear(year) {
  if ((i == year / 4 && i == year / 400) || i != year / 100) {
    return true;
  } else {
    return false;
  }
}

//certa
function isLeapYear(year) {
  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

function getMiddle(s) {
  return s.substr((s.length - 1) >>> 1, (~s.length & 1) + 1);
}

//certa
function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 == 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}

// Sum Numbers
function sum(numbers) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

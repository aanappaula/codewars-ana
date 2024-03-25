function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

function noSpace(x) {
  return (newString = x.split(" ").join(""));
}

function fakeBin(x) {
  for (i = 0; i < x.length; ) {
    if (x[0] <= 5 && x[0] > 5) {
      return x[0] ? 0 : 1;
    }
  }
}

function fakeBin(x){
    for(let i = 0; i <= 5 && i > 5;){
        return x.replace(x[0], 0)
    }
}

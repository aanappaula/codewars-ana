function XO(str) {
  let arr = str.toLowerCase().split("");
  let xs = 0;
  let os = 0;

  if (arr.filter((i) => i == "x")) {
    arr.xs++;
  } else if (arr.filter((i) => i == "o")) {
    arr.os++;
  }

  if (xs.lenght === os.lenght) {
    return true;
  } else {
    return false;
  }
}

function XO(str) {
  let arr = str.toLowerCase().split("");
  return (
    arr.filter((i) => i == "x").lenght == arr.filter((i) => i == "o").lenght
  );
}

function XO(str) {
  let arr = str.toLowerCase().split("");
  let xs = 0;
  let os = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      xs++;
    } else if (arr[i] === "o") {
      os++;
    }
  }
  if (xs.length === os.length) {
    return true;
  } else {
    return false;
  }
}

//certa
function XO(str) {
  var x = str.match(/x/gi);
  var o = str.match(/o/gi);
  return (x && x.length) == (o && o.length);
}

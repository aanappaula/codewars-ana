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

function fakeBin(x) {
  for (let i = 0; i <= 5 && i > 5; ) {
    return x.replace(x[0], 0);
  }
}

function betterThanAverage(classPoints, yourPoints) {
  var media = classPoints / 2;
  if (yourPoints > media) {
    return True;
  } else {
    return false;
  }
}

function betterThanAverage(classPoints, yourPoints) {
  var media = classPoints.length;
  return classPoints.reduce((a, b) => a + b) / media < yourPoints;
}

function maps(x) {
  var res = [];
  for (let i = 0; i < x.length; i++) if (x[0]) res.push(x[i] * 2);
  return res;
}

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function countSheeps(sheep) {
  var sum = 0;
  for (let i = 0; i < sheep.length; i++)
    if (sheep[i] === true) {
      sum++;
    }
  return sum;
}

function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

function litres(time) {
  var litres = time.reduce((a) => a * 0.5);
  return Math.round(litres);
}

function litres(time) {
  return Math.floor(time * 0.5);
}

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

function friend(friends) {
  for (let i = 0; i < friends.length; i++)
    if (friends.length === 4) {
      return friends[i] === 4;
    }
}

function friend(friends) {
  return friends.filter(function (i) {
    return i.length === 4;
  });
}

function longest(s1, s2) {
  var junto = [...new Set(s1 + s2)].sort();
  return junto.join("");
}

const reverseSeq = (n) => {
  const res = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] > 0) {
      for (let j = n[i]; j >= 0; j--) {
        res.push(j);
      }
    }
  }

  return res;
};

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return names[0] + " likes this";
  }
  else if (names.length === 2) {
    return names[0] + " and " + names[1] + " like this";
  }
  else if (names.length === 3) {
    return names[0] + ", " + names[1] +  " and " + names[2] + " like this";
  }
  else if (names.length >= 4) {
    return names[0] + ", " + names[1] + " and " + (names.length - 2)  + " others like this";
  }
 
}

function positiveSum(arr) {
  
return arr.filter((i) => i < 0).concat(arr.filter((i) => i === 0));
}
  


function positiveSum(arr) {
  const sum = 0 
  for (arr.filter((i) => i < 0).concat(arr.filter((i) => i > 0))) {
    sum+= arr[i]
    return sum
}

}

function positiveSum(arr) {
  const sum = 0;
  const sla = arr.filter((i) => i < 0).concat(arr.filter((i) => i > 0));
  for (let i = 0; i < arr.length; i++) {
    if ( sla )
   sum+= arr[i];
}
return 
}
  

function grow(x){
  for (var i = 0; i < x.length; i++) {
    if (x.length === 3) {
    return x[0]*x[1]*x[2]
    }
    else if (x.length === 4) {
    return x[0]*x[1]*x[2]*x[3]
    } 
   else if (x.length === 4) {
    return x[0]*x[1]*x[2]*x[3]*x[4]
 }
}
}

function grow(x){
  return  x.reduce((a, b) => a * b);
}

function findUniq(iterable) {
  var array = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      array.push(iterable[i]);
    }
  }
  return array;
}

function solution(str){
  return str.split("").reverse().join("");
}

function squareDigits(num){
  var idx = array.indexOf(elemento);
  while (idx != -1){
    return num * num
  }  
}

function tribonacci(signature,n){
  for(let i = 0; i < n -3; i++) {
  signature.push(signature.slice(i) .reduce(( a , b) => a + b),);
  }
  return signature.slice(0, n);
  }
  
  function descendingOrder(n){
    return parseInt((n+'').split('').sort().reverse().join(''))
}

function setAlarm(employed, vacation){
  if (employed == true && vacation == false) {
      return true
  } else {
    return false
  }
}

function basicOp(operation, value1, value2){
  if (operation == "+"){
    return value1 + value2
  } else if (operation == "-"){
     return value1 - value2
  } else if (operation == "*"){
     return value1 * value2
  } else if (operation == "/"){
     return value1 / value2
  }
}

function duplicateCount(text){
  var array = 0;
for (text[i] === text[i + 1]) {
    array++;

    return array;
  }


}
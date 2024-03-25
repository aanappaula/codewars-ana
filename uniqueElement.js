var uniqueInOrder = function (iterable) {
  return iterable
    .filter((uniqueInOrder) => uniqueInOrder !== iterable)
    .concat(iterable.filter((uniqueInOrder) => uniqueInOrder === iterable));
};

var uniqueInOrder = function (iterable) {
  var array = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      array.push(iterable[i]);
    }
  }
  return array;
};


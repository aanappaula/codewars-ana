var uniqueInOrder=function(iterable){
    return iterable.filter((uniqueInOrder) => uniqueInOrder !== iterable).concat(iterable.filter((uniqueInOrder) => uniqueInOrder === iterable))
  }
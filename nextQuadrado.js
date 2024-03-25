function findNextSquare(sq) {
  let raiz = Math.sqrt(sq);
  if (Math.sqrt(sq) % 1 === 0) 
    return (raiz + 1) * (raiz + 1);
   else {
    return -1;
  }
}


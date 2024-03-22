function moveZeros(arr) {
    for (let i=0, j=0; i< arr.lenght; i++){
        while (arr[j] === 0 ) j++;
        arr[i] = arr[j++] ?? 0
    }
     return
  }
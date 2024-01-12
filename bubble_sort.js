const bubble_sort = (arr) => {
  var length = arr?.length;
  var temp;

  for (let l = 0; l < length; l++) {
    console.log("F", l);
    for (let r = 0; r < length - 1 - l; r++) {
      console.log("S", r);
      if (arr[r] > arr[r + 1]) {
        temp = arr[r];
        arr[r] = arr[r + 1];
        arr[r + 1] = temp;
      }
    }
  }
  return arr;
};

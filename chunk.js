var chunk = function (arr, size) {
  let rs = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (let j = 0; j < size && i + j < arr.length; j++) {
      chunk.push(arr[i + j]);
    }
    rs.push(chunk);
  }
  return rs;
};

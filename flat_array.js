const Steamroller = (arr) => {
  if (arr instanceof Array) {
    const isEmpty = arr.length === 0;
    if (isEmpty) {
      return [];
    } else {
      return [...Steamroller(arr[0]), ...Steamroller(arr.slice(1))];
    }
  }
  return [arr];
};

const arr = [1, [[[2]]], [2, [3]], [[4]], 5, []];
const flat = Steamroller(arr);

console.time();
Steamroller(arr);
console.timeEnd();

[[[[2]]], [3], [[4]], 5, []];

const flattenArrayR = (arr, depth = 1) => {
  if (depth === 0 || !Array.isArray(arr)) {
    // If depth is 0 or arr is not an array, return the array as is
    return [arr];
  }

  return arr.reduce((result, element) => {
    console.log("pre", result);
    console.log("cur", element);
    return result.concat(flattenArrayR(element, depth - 1));
  }, []);
};

console.time();
flattenArrayR(arr, 3);
console.timeEnd();

const flattenArray = (arr, depth = 1) => {
  if (depth === 0 || !Array.isArray(arr)) {
    // If depth is 0 or arr is not an array, return the array as is
    return [arr];
  }

  let flattened = [];

  for (const element of arr) {
    flattened = flattened.concat(flattenArray(element, depth - 1));
  }

  return flattened;
};

console.time();
flattenArray(arr, 3);
console.timeEnd();

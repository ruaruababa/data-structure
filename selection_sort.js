const selection_sort = (arr) => {
  //   const len = arr.length;

  //   for (let i = 0; i < len - 1; i++) {
  //     let minIndex = i;

  //     // Find the index of the minimum element in the unsorted part of the array
  //     for (let j = i + 1; j < len; j++) {
  //       if (arr[j] < arr[minIndex]) {
  //         minIndex = j;
  //       }
  //     }

  //     // Swap the found minimum element with the first element in the unsorted part
  //     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  //   }

  //   return arr;

  const len = arr.length;
  // [5, 10, 4, 6, 23, 0, 7];
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    console.log(`After  i ${i} loop`, arr);
    console.log("Mindex", minIndex);

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      // right small than left
      // min index =  right index
      if (arr[j] < arr[minIndex]) {
        console.log("arr[j]", arr[j]);
        console.log("arr[minIndex]", arr[minIndex]);
        minIndex = j;
      }
    }

    console.log("Minindex === i >>> Min", minIndex);
    console.log("Minindex === i >>> I", i);
    if (minIndex !== i) {
      console.log("before", arr[i]);
      console.log("before minIndex", arr[minIndex]);
      // Swap using a temporary variable
      let temp = arr[i]; //5
      arr[i] = arr[minIndex];
      //arr[0] = 0
      arr[minIndex] = temp;
      //arr[5] = 5
      console.log("after", arr[i]);
      console.log("after minIndex", arr[minIndex]);
    }
  }

  return arr;
};

function selectionSortDescending(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let maxIndex = i;

    // Find the index of the maximum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      // Swap the found maximum element with the current element
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }

  return arr;
}

function selectionSort(A) {
  // Temporary variable to store the position of the minimum element
  let minimum;

  // Reduces the effective size of the array by one in each iteration
  for (let i = 0; i < A.length - 1; i++) {
    // Assuming the first element to be the minimum of the unsorted array
    minimum = i;

    // Gives the effective size of the unsorted array
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < A[minimum]) {
        // Finds the minimum element
        minimum = j;
      }
    }

    // Putting the minimum element in its proper position
    swap(A, minimum, i);
  }
  return A;
}

// Function to swap elements in an array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selection_sort([5, 10, 4, 6, 23, 0, 7]));
// console.log(selectionSort([5, 10, 4, 6, 23, 0, 4]));

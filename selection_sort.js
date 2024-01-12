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

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    console.log("r", i);
    console.log("rs", arr);
    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap using a temporary variable
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
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

// console.log(selection_sort([5, 10, 4, 6, 23, 0, 4]));
console.log(selectionSort([5, 10, 4, 6, 23, 0, 4]));

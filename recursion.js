// 1. Write a program in C to print the first 50 natural numbers using recursion.

const printNumber = (n) => {
  if (n <= 50) {
    console.log(n);
    printNumber(n + 1);
  }
};

const sumNumber = (n) => {
  let sum;
  if (n === 1) {
    return 1;
  } else {
    sum = n + sumNumber(n - 1);
  }
  return sum;
};

console.log(sumNumber(5));

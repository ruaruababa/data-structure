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

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function printFibonacciSeries(count) {
  for (let i = 0; i < count; i++) {
    console.log(fibonacci(i));
  }
}

function fibonacci_(n, current = 0, next = 1) {
  if (n <= 0) {
    return;
  }

  console.log(current);
  fibonacci_(n - 1, next, current + next);
}

// Example: Print the first 10 Fibonacci numbers
fibonacci_(10);

// printFibonacciSeries(10);

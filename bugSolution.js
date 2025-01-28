function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Corrected
  } else {
    return a + b;
  }
}

console.log(foo(0, 1)); // Output: 1 (Correct)
console.log(foo(1, 0)); // Output: 1 (Correct)
console.log(foo(1, 1)); // Output: 2 (Correct)
console.log(foo(0, 0)); // Output: 0 (Correct)
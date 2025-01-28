# Subtle Zero Handling Bug in JavaScript Function

This repository demonstrates a common, yet easily missed, bug in JavaScript function dealing with zero values.

The `foo` function is designed to return 0 only when both input arguments are 0.  However, a simple logic error causes it to return 0 if *either* input is 0.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version.

## Bug Description
The issue lies in the conditional statement within the function. The `||` (OR) operator should be replaced by `&&` (AND) to ensure that the function returns 0 only when both `a` and `b` are equal to 0.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run the buggy code using Node.js: `node bug.js`
4. Observe the incorrect output for inputs where only one parameter is 0.
5. Then, run the corrected code `node bugSolution.js` to see how it is fixed.

## Solution
The correct logic is achieved by using the `&&` operator to ensure that both conditions must be true for the function to return 0.
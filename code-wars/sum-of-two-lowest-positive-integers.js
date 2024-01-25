// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
/**
 * function that adds the 2 lowest positive nums in array
 * @param {*} numbers - array of positive nums
 * @returns the sum of two lowest nums
 */
const sumTwoSmallestNumbers = numbers => {  
    let result = 0;
    // sort by lowest & add first 2 numbers
    numbers.sort(function(a, b){return a - b});
    result =+ numbers[0] + numbers[1];
    return result;
};
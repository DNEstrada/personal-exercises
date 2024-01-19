// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
const findAverage = array => {
    let result;
    if (array.length == 0) {
        return 0;
    };
    // loop to add all items then result is the average
    let sum = 0;
    array.forEach (num => {
        sum += num;
        console.log(sum);
    });
    result = (sum / array.length);
    return result;
};

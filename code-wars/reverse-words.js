/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
 * Examples
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 * @param {*} str - string to be reversed
 * @returns string w/ letters in each word reversed
 */
const reverseWords = str => {
    let result = "";
    result = str.split(" ");
    reverseArr = [];
    result.forEach(word => {
        i = word.split("");
        i = i.reverse();
        i = i.join("");
        reverseArr.push(i);
    });
    result = reverseArr.join(" ");
    return result;
};
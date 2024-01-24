// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
/**
 * function to state if name is playing banjo, based on if their name starts w/ "r"
 * @param {*} name - person's name
 * @returns string saying if they play banjo or not
*/
const areYouPlayingBanjo = name => {
    let result = "";
    // check if name starts w/ r then assigns string to result
    return result = (name.charAt(0).toLowerCase() == "r") ? name + " plays banjo" : name + " does not play banjo";
};
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
// Example scoring
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
const score = dice => {
    let result = 0;
    let diceArr = [...dice].sort();
    console.log(diceArr);
    if (diceArr.includes(1, 0) && diceArr.includes(1, 1) && diceArr.includes(1, 2)) {
        console.log("1000 points");
        diceArr.splice(0, 3);
        result += 1000;
    } 
    if (diceArr.includes(6, 2) && diceArr.includes(6, 3) && diceArr.includes(6, 4)) {
        console.log("600 points");
        diceArr.splice(2, 3);
        result += 600;
    }
    // if (diceArr.includes(1)) {
    //     console.log("100 points");
    //     result += 100;
    // } else if (diceArr.includes(5)) {
    //     console.log("50 points");
    //     result += 50;
    // }
    console.log(diceArr);
    return result; 
};

console.log("score is " + score([1, 6, 5, 4, 1]));
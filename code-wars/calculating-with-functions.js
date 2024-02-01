// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));
const zero = (oper) => {
    if(oper == undefined) {
        return 0;
    } else if (oper == plus) {
        return 0 + oper;
    } else if (oper == minus) {
        return 0 - oper;
    }
};
const one = () => { return 1 };
const two = () => { return 2 };
const three = () => { return 3 };
const four = () => { return 4 };
const five = () => { return 5 };
const six = () => { return 6 };
const seven = () => { return 7 };
const eight = () => { return 8 };
const nine = () => { return 9 };

const plus = (right) => {
    return right;
};
function minus() {}
function times() {}
function dividedBy() {}

console.log(zero(plus(three())));
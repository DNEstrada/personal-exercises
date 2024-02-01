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
/**
 * offloaded func to check if num func has the operation in arg, otherwise pass just the num
 * @param {}} num - if no func given, pass this num as right operand
 * @param {*} oper - anon func in operation, w/ num as left operand
 * @returns - either just num or anon func w/ left num
 */
const checkNum = (num, oper) => {
    if (oper == undefined) {
        return num;
    } else {
        return oper(num);
    }
};
/**
 * num func that utilize checkNum with that specific num
 * @param {*} oper - passes the func arg to the operation
 * @returns - the return of checkNum
 */
const zero = oper => { 
    return checkNum(0, oper);
};
const one = oper => {
    return checkNum(1, oper);
};
const two = oper => {
    return checkNum(2, oper);
};
const three = oper => {
    return checkNum(3, oper);
};
const four = oper => {
    return checkNum(4, oper);
};
const five = oper => {
    return checkNum(5, oper);
};
const six = oper => {
    return checkNum(6, oper);
};
const seven = oper => {
    return checkNum(7, oper);
};
const eight = oper => {
    return checkNum(8, oper);
};
const nine = oper => {
    return checkNum(9, oper);
};
/**
 * operation func used in arg of checkNum func
 * @param {} right - num func returning w/ just the num
 * @param {} left - returned from checkNum oper that is passed eg "left = oper(left)"
 * @returns - left is passed (num) when checkNum finds the oper func called, to operate w/ right
 */
const plus = right => {
    return ( left => {
        return left + right;
    });
}
const minus = right => {
    return ( left => {
        return left - right;
    });
};
const times = right => {
    return ( left => {
        return left * right;
    });
};
const dividedBy = right => {
    return ( left => {
        return parseInt(left / right);
    });
}
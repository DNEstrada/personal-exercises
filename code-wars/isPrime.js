// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const isPrime = num => {
    if (num <= 1) {
        return false;
    } else if (num < 4 || num == 5) {
        return true;
    };
    let result = false;
    // run a loop for all basic divisions, if modulus equals 0 then it is not prime number
    let divCount = 0;
    for (let i = 2; i <= 5; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    console.log("true");
    return true;
};

isPrime(7);
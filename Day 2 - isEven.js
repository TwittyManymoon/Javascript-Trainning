/* {
// Day 2 :
// 
// Odd / Even identifier without modulus
//
// ::: developed by Twitty Manymoon :::
}*/

function isEven(num) {
    if (num == 0) {
        return "even";
    }
    else if (num == 1) {
        return "odd";
    }

    /* debug : when num is negative */ 
    else if (num < 0) {
        num = num * -1;
    }
    return isEven(num - 2);
}

console.log(isEven(-10));   // even

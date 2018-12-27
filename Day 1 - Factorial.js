/* {
// Day 1 :
// 
// Recursive function - using function itself again and again
//
// ::: developed by Twitty Manymoon :::
}*/

/* simple factorial */

function factorial(n) {
    // because it uses 'call stack' principle, it should return some value at the highest of stack
    if (n == 1 || n == 0) {
        return 1;
    }
    // factorial(n-1) will multiply from 2 * 1 -> 3 * 2 until 4 * 6
    else if (n > 1) {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));              // 24

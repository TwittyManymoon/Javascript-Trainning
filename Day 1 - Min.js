/* {
// Day 1 :
// 
// Min function - just a basic function to find minimum between 2 arguments
//
// ::: developed by Twitty Manymoon :::
}*/

/* variation 1 : old school */

function min_1(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

/* variation 2 : arrow */
var min_2 = (c, d) => {
    if (c < d) { return c; }
    else { return d; }
};

console.log(min_1(10, 100));
console.log(min_2(90, -90));

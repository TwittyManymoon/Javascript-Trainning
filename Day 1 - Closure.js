/* {
// Day 1 :
// 
// Closure - basic concept of function
// Closure is nothing but the function with preserved data 
//
// ::: developed by Twitty Manymoon :::
}*/

/* simple adding function */

function add(in_1) {
    function add_2(in_2) {
        return in_1 + in_2;
    }
    return add_2;
}

var add_3 = add(3);     // preserved '3' in 'in_1'
var add_4 = add_3(1);   // preserved '1' in 'in_2'

console.log(add_4);     // hell yeah

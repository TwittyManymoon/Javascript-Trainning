/* {
// Day 2 :
// 
// Bean counting - counting the uppercase 'B' in the string
//
// ::: developed by Twitty Manymoon :::
}*/

var string;
var count = 0;
function countBs(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'B') {
            count++;
        }
    }
    return count;
}

console.log(`Bean count : ${countBs("bbbBbb")}`);     // 1

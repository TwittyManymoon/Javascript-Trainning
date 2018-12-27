/* {
/* Day 1 :
/* Write a loop that makes seven calls of '#' to create triangle
/* developed by Twitty 
}*/


var i, j = 0;

for (i = 0; i < 7; i++) {
    for (j = 0; j <= i; j++) {
        process.stdout.write("#"); //console.log without automatically printing new line
    }
    console.log();
}

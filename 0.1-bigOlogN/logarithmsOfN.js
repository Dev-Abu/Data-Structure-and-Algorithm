/**
 * here is a program how to logarithm of a number
 */

function logarthmsN(n){

    while(n>1){
        console.log(n);
        n = n/2
    }
}

function anotherLogN(n){

    while(n<=1){
        console.log("Done");
        n /= 2
        return
    }
    console.log(n)
    anotherLogN(n/2)
}

logarthmsN(8)
anotherLogN(16)
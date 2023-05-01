/** @ Constants and Smaller terms Dosn't matter
 * 
 * 
 * 
 * Constant terms dosn't matter
 * 
 * 1. if time Complexity > O(2n) we will call only  O(n).
 * 1. if time Complexity > O(100) we will call only O(1).
 * 1. if time Complexity > O(15*) we will call only O(n*).
 * 
 * Smaller terms Dosn't matter
 * 
 * 1. if time Complexity > O(n + 1)       we will call only = O(n)
 * 2. if time Complexity > O(100 n + 50)  we will call only = O(n)
 * 3. if time Complexity > O(n* + 5n + 8) we will call only = O(n*)
 * 
 */

// here is 2 example:

//explore this code run it and find the solution.
// more details find photos in a related folder.



function min5log(n){

    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
        
    }
}

function max5log(n){

    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
        
    }
}

//min5log(9)
max5log(3)

/**@ Big O(_) // big o notation what is ?
 * 
 * Big O(n) notation is used to measure how running time and space requirements
 *  for your program grows as the input grows.
 * 
 * Big O is a way of measure of space and time complexity
 * for a particular function or program with increasing input values.
 * 
 * Rules of Big O(_) notaion.
 * 1. Keep the fastest-growing term and remove the other terms.
 * 2. Remove constants.
 * 
 * 
 */
// code example 1;


// here is an example of time complexity. calculating a program with big O(1)

function sumOfAll_2(n){

    // by counting operations finding the right complexity

    // 1. 1 multiplicarion
    // 2. 1 addition 
    // 3. 1 division //  here is 1 three times of operation ,(Big O(3))

    //  but we will call  (Big O(1)) // by ignoring constants

    return n*(n+1)/2; 

}

// // here is an example of space complexity. calculating a program with big O(1)space


function sumOfArr(arr){

    let total =0;// one_1 // after looping having a number and assigning it to the total.

    for (let i = 0; i < arr.length; i++) { // two_1
        total += arr[i]; 
        //assigning the number to the array to another number sum.!! but not in an array
        //doesn't matter how many mumbers array or elements in the array we have only a number to total.
        // so here is space complexity Big O(1)space
        
    }
    return total;
}


console.log(sumOfAll(9));
console.log(sumOfArr[23, 7, 5]);

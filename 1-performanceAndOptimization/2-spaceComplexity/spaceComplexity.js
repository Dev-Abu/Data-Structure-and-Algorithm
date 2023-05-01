
/** @space coplexity
 * 
 * we also can use big O notation (big O(n)space) 
 * to  consider the space of complexity
 *  how much space will take to run the code.
 * 
*/

// example 1. 
// space copmplexity (O (1)space) which is too good.

function sum1(arr){

    let total =0;// one_1 // after looping having a number and assigning it to the total.

    for (let i = 0; i < arr.length; i++) { // two_1
        total += arr[i]; 
        
        // finding the right algorithm of space complexity with big O()space 

        //assigning the number to the array to another number sum.!! but not in an array
        //doesn't matter how many mumbers array or elements in the array we have only a number to total.
        // so here is space complexity Big O(1)space
        // details example slide photo 1
        
    }
    return total;

}

// example 2.  
// (Big O(n)space)


function sum2Double(arr_1){

    let newArr_2 = [];
    /**
     * 1. (arr_1) is in looping/iterating the elements and pushing/assigning to (newArr_2)
     * 2. and multiplying the (arr_1)* elements to (newArr_2)
     * 
     * here is complexity depending on the array. if  increase (arr_1)
     * also same will be for the (newArr_2). 
     * so here is space complexity big O(n)space 
     */
    for (let i = 0; i < arr_1.length; i++) {
        newArr_2.push(arr[i] *2)
        // example slide photo 2

    }
    return newArr_2;
}

console.log(sum1([23, 4, 6]));
console.log(sum2Double([23, 4, 6]));


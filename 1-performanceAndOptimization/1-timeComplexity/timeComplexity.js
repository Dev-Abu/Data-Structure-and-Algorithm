

/** @ time complexity: what is?
 * 
 * in the last lesson we find out (example code 2) is fast performance and  readable.
 *  then (example code 1), we did compare both and found the time complexity.
 * 
 * but in which way we can find out the right time complexity?
 *
 * because.
 * 
 * 1. different machines can record different times.
 * 2. the same machine can record different times.
 * 
 * so for the right algorithm we can't count it by times or machines. 
 *
 * we will take Consider finding the right algorithm for time complexity.
 * by counting all operations in code with (big O notation) not by executing times in machine.
 *
*/

// to know more see  example (example photo 1. and an example photo 2.)

// here is an example program on how to calculate the right algorithm of time complexity.

// example 1.

function sumOfAll_1( n){

    totall = 0;
    for (let i = 0; i <=n; i++){

        // by counting  operation finding right complexity

      /**
       * 1. n assignment.
       * 2. n addition
       * 3. n comparisons
       * 4. n addition
       * 5. n assignment again
       * and
       * 1 assaignment 1
       * 2 assaignment 1 // here is n(5times) and 1(2times) of operation (Big o(n5+2)).
       * 
       * //  but we will call (big O(n)) // by ignore constants of big O(_)
      */

        totall = totall + i;
    }
    
    return totall;
}


// code example 2;


// find (in this folder) photo example 2. to know more.

function sumOfAll_2(n){

    // by counting  operation finding right complexity

    // 1. n multiplicarion
    // 2. n addition 
    // 3. n division //  here is n three times of operation ,(Big O(n3))

    //  but we will call  (Big O(1)) 

    return n*(n+1)/2; 

}

console.log(sumOfAll_1(5));
console.log(sumOfAll_2(5));



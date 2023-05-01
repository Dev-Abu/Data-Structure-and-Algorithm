
/** @ performance And Optimization ; what is ?
 * suppose in a function we can solve a problem in different way.
 *  so how we will understand which the is the best code??
 * 
 * What is best code ? well,  good/best code is if the code is readable and scalable.
 
 * 
 * 1. readable.
 * 2. scalable.
 * 
 * there is two example fuctions. 
 * 1. code example 1.
 * 2. code example 2
 * 
 * (code example 2) is less executing time and more readable code then (example code 1).
 * but the both program gives the same out-put . so (example code 2) ofc is the best code
 * then (code example 1).
 * 
 * 
*/

// code example 1;

// find photo example 1. in this file to know more

function sumOfAll( n){

     totall = 0;
    for ( let i = 0; i <=n; i++){

        totall = totall + i;
        
    }

    
    return totall;
}


// code example 2. ***********************************

// find (in this folder) photo example 2. to know more.

function sumOfAll_1(n){

    return n*(n+1)/2; 

}

console.log(sumOfAll(5));

console.log(sumOfAll_1(5));
 

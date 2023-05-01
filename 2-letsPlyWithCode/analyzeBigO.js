/**
 * from previous lessons, we already know about big O(n) time and space complexity
 * so let's exercise a program where we will implement both complexity time and space.
*/


function unicqName(arr){
    
    let unicqName= []
    for (let i = 0; i < arr.length; i++) { // time complexity big O(n)
        let element = arr[i]; 
        if(!unicqName.includes(element)){ // time complexity big O(n)
            unicqName.push(element)
        }
    }
    return unicqName //  space complexiy n
    

  // time complexiy n2 = // big O(n*) big O n squre.
  // space complexiy n = // big O(n) big O n .
}

let nameArray=['alex', 'abu', 'alex', 'kalam']

console.log(unicqName(nameArray));

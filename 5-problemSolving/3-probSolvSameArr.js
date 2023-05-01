// write program 

function same(arr1, arr2){
    if(arr1.length !== arr2.length){ 
        return false; 
    }

    for (let i = 0; i < arr1.length; i++) {
        let currentIndex = arr2.indexOf(arr1[i]** 2)
        //console.log(currentIndex);
        if(currentIndex === -1){
            return false
        }
        
        arr2.splice(currentIndex, 1)
    }
    return true
}

// n*n = n2 big O(n2)  complexity

Arr1 = [2, 3, 6] 
//Arr2 = [9, 4, 36] 
Arr2 = [9, 4, 36]


// console.log(same(Arr1, Arr2));

// write better code convert big O(n2) to big O(n) the same program!

function same1(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let sequenceCounter1 = {}
    let sequenceCounter2 = {}
    for(let val of arr1){
        sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
    }

    for(let val of arr2){
        sequenceCounter2
        [val] = sequenceCounter2[val] + 1 || 1;
    }
    //console.log(sequenceCounter2);

    for (let key in sequenceCounter1) {
        if (!(key ** 2) in sequenceCounter2) {
            return false
        }
        
        if (sequenceCounter2[key **2] !==sequenceCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same1(Arr1, Arr2));

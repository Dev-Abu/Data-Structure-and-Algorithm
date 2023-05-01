

let temperature = [-2, 4 , 6, 33, "text error", -3, -5, 30, 45]

function getHigherAndLower(arr){
    // create a higher variable
    let higher = arr[0]
    // create a lower variable
    let lower = arr[0]
    // iterate the whole array
    for (let i = 0; i < arr.length; i++) {
        // lets check if there is any errors
        if (typeof arr[i] !== "number") continue;
        //console.log(typeof arr[i]);

        // if higher vaiable has smaller number then our current number the value will be our current element
        if (higher < arr[i]) {
            higher = arr[i]
        }

        // if lower vaiable has bigger number then our current number the value will be our current element
        if (lower > arr[i]) {
            lower = arr[i]
        }

    }

    return higher -lower;
    // return higher and lower variable
}

console.log(getHigherAndLower(temperature));


const myObj = {
    Channel: "My Channel",
    Instructor: "abu",
    videos: [2, 6, 8, 11]
}

// console.log(Object.keys(myObj)); // big O(n)
// console.log(Object.values(myObj)); // big O(n)
// console.log(Object.entries(myObj)); // big O(n)
// console.log(myObj.hasOwnProperty("Channel"));// big O(1)

let myArr = ["abu", "salam", "kalam"]

myArr.unshift("malek")// big O(n)
myArr.shift("malek")// big O(n)

myArr.push("kader")// big O(1)
myArr.pop("kader")// big O(1)

// Searching // big O(n)
// Access // big O(1)

console.log(myArr);

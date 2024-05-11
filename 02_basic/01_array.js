const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktriman", "nagraj"]

const myArr2 = new Array(4,5,6,7)

//console.log(myArray[0])

//Array methods
 
// myArray.push(6) 
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

//console.log(myArray.includes(0))
//console.log("myArray ",myArray)

const newArr = myArray.join();
// console.log(myArray)
// console.log( typeof newArr)

//slice, splice

console.log("A ",myArray)

const myn1= myArray.slice(1, 3)

console.log(myn1)
console.log("b ",myArray)

const myn2= myArray.splice(1, 3)
console.log(myn2)
console.log("c ",myArray)
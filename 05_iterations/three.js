//for of
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

// const greetings ="hello world"
// for (const greet of greetings) {
//     console.log(greet)
// }

//maps
const map=new Map();
map.set('IN', 'india')
map.set('USA', 'united states of america')
map.set('FR', 'france')
map.set('IN', 'india')
// console.log(map)

for (const [key, value] of map) {
    ///console.log(key, "->", value)
}

const myObject = {
    'game1':'NFS',
    'game2':'SPiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, "->", value)
// }
//wrong solution to iterate object


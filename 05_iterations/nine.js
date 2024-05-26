const myNums= [1,2,3]
//const initialvalue
// const myTotal=myNums.reduce( function(acc,curvalue) {
//     console.log(`acc ${acc} and cur val is ${curvalue}`)
//     return acc+curvalue
// },3)

const myTotal=myNums.reduce( (acc,curvalue)=>acc+curvalue,0)

// console.log(myTotal)

const shoppingCart =[
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    },
]

const total= shoppingCart.reduce( (acc,item)=>acc+item.price,0) 
console.log(total)
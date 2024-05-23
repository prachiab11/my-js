function loginUserMessage(username= "prachi"){
    if(!username){
    console.log("please enter the username")
    return
    }
    return `${username} just logged in`
}
 //console.log(loginUserMessage("prachi"))
 console.log(loginUserMessage("hitesh"))// overrides the parameters

 function calculateCartPrice(f1,f2,...num1){
    return num1;
 }

 console.log(calculateCartPrice(45,67,235,45755))

 const user= {
    username:"jitesh",
    price: 199
 }

 function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
 }

 //handleObject(user)
 handleObject({
    username:"sam",
    price:399
 })

 const myNewArray = [200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 //console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([45,36,79,32]))

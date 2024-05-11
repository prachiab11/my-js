//singleton

//object literals
const mySym= Symbol("key1")

const JsUser= {
    "name" : "Hitesh",
    "full name": "Hitesh Chaudhary",
    age : 26, 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser.email)

JsUser.greeting= function(){
    console.log("hello js user")
}
console.log(JsUser.greeting())

JsUser.greetingTwo= function(){
    console.log(`hello js user, ${this.name} `)
}
console.log(JsUser.greetingTwo())
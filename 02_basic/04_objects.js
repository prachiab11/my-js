const tinderUser= new Object()
//const tinder = {}

tinderUser.id="123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn= false

// console.log(tinderUser)

const regularUser={
    email :"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"chaoudhary"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname)
 
const obj1= {1: "a",2:"b"}
const obj2= {3: "a",4:"b"}
const obj4= {5: "a",6:"b"}
//const obj3={obj1, obj2}
// const obje3=Object.assign({},obj1, obj2,obj4)
// console.log(obje3)

const obj3= {...obj1, ...obj2}
//console.log("obje 3 ", obj3)

const users = [
    {
        id:1,
        email:"h@g.com"
    },
    {
        id:2,
        email:"o@g.com"
    },
]

//console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
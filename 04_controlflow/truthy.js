useremail=[]

if(useremail.length ===0){
    console.log("array is empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}

//nullish coalescing operator (??):null undefined
let val1;
// val1= 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1=null ?? 5 ??10

console.log(val1)
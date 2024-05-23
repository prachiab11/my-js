

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
// }
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element ==5){
//     console.log("5 is best number")
//     }
//     console.log(element)
// }


let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element)
    
}

// for (let index = 1; index <= 20; index++) {
//    // const element = array[index];
//    if(index==5){
//     console.log("value detected is ",index)
// break;
//    }
//    console.log("value of i is ",index)
// }

for (let index = 1; index <= 20; index++) {
   // const element = array[index];
   if(index==5){
    console.log("value detected is ",index)
continue;
   }
   console.log("value of i is ",index)
}

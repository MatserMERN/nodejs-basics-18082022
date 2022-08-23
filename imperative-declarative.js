// Imperative Code
// const lessThan10Filter = array => {
//     const lessthan10Array = []
//     for(var i=0; i<array.length;i++){
//         if(array[i]< 10){
//             lessthan10Array.push(array[i])
//         }
//     }
//     return lessthan10Array
// }



// Declrative Code
const lessThan10Filter = array => array.filter(item => item <10)

var array = [10, 9, 8, 12,20, 4,5]
console.log(lessThan10Filter(array))

const add = ( x,y , callback )=>{
    setTimeout(() => {
        sum = x+ y 
     callback(sum)
    }, 500);
}

add(1,2,sum=>{
    console.log(sum)
})








// setTimeout(() => {
//     console.log('after 1.5 sec ')
// }, 1500);

// const getGeo = (address , callback )=>{
//     setTimeout(() => {
//         const data ={
//             x:1,
//             y:2 
//         }

//          callback(data)
//     }, 2000);
// }

// getGeo('Egypt' , data=>{
//     console.log(data)
// })


// const myFun = () => {
//     const mes = 'Hi' ; 
//     const pri = ()=>{
//         console.log(mes); 
//     }
//     return pri ; 
// }
// // myFun()
// const myPrinyMessage = myFun() ; 
// myPrinyMessage(); 

// clouser with return function 
const creatTipper = (tip) => {
    return (amount)=>{
        return tip * amount ; 
    }
}

const ff = creatTipper(15) ; 
console.log(ff(2)) ; 
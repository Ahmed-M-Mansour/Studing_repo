// numbers MDN
//cMath MDN 

let num = 5.7155 ; 

console.log(Math.floor(num))
console.log(num.toFixed(2))


let min = 1 ; 
let max = 5 ; 

let makeGeuss = num => {
    let ranNum = Math.floor(Math.random() * (max - min + 1 )) + min 
    console.log(ranNum)
    if(ranNum == num)   console.log( 'True') 
    else console.log( 'False') 
}

makeGeuss(5) ; 
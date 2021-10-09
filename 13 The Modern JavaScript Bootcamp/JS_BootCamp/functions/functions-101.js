let fu = function(){
    console.log("Hello Ahmed")
}

function any(){
    console.log("Hi Ahmed")
}

let arf = () => {
    console.log("Arrow Ahmed")
}

fu() ; 
any() ; 
arf() ; 


// square 

let squ = (n) => {
     let res = n * n 
     console.log(res)
}

squ(9) 



// convert from fahrenheit to clsuis 

let converter = fahrtemp =>{
    clsuisTemp = ( fahrtemp - 32) *5/9  
    return clsuisTemp ; 
}

let firstTemp = converter(32) 
let secondTemp = converter(68) 

console.log("The Tempreture in  clsius is : " + firstTemp   )
console.log("The Tempreture in  clsius is : " + secondTemp  )

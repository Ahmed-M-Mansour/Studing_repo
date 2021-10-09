let add = (a,b) =>{
    return a + b ; 
}

let anotherAdd = a =>{
    return a ; 
}

let res = add() ; 
console.log(res)                  // --> NaN

let anotherRes = anotherAdd() ; 
console.log(anotherRes)           // --> undefined

// default argument 
let getScoreText = (score = 0  , name = 'Anonymous' ) =>{
    console.log(name) ; 
    console.log(score) ; 
}

getScoreText() ; 

// chalnge 

let getTip = (total = 1 , tip = 0.2) => {
    return  `The total with tip is : ${total * tip}$ `    ; 
}

let tipVal = getTip(50) ; 
console.log(tipVal) ; 
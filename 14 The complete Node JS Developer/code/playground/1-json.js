const fs = require('fs');


// const person = {
//     name: "Ahmed Mnasour" , 
//     age: 22 , 
//     city: "Giza"
// }

// const personJSOn = JSON.stringify(person) ; 

// console.log(personJSOn) ; 
// console.log(JSON.parse(personJSOn)) ; 
// fs.writeFileSync('1-json.json'  , personJSOn) ; 
const dataBuffer = fs.readFileSync('1-json.json') ; 
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = 'mans' 
data.age = 23 ; 
data.city = "October city" ; 
fs.writeFileSync('1-json.json' , JSON.stringify(data)  )

console.log( data)
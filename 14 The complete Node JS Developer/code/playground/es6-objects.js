
const name = "Ali"

const me = {
    saf:'sddsf' , 
    asas:'fsafsa'
}
const anome = {
    name, 
    age: 22 , 
    ...me , 
    asdsa:'sasas' 
}
const{name:userName , saf} = anome ; 
console.log(userName)
console.log(saf)

console.log(anome)  

const fun = (type , {age})=>{
    return age  ; 
}   


console.log(fun('ascsa' , anome))  

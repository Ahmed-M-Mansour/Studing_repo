const mans = {
    city: 'October' , 
    birthDay: '17/6/1999'
}
const me = {
    id: 51710250 , 
    name: "Ahmed Mansour", 
    age: 22 , ...mans
}


const {id:myId , name:myName , otherValue= 'was Added'} = me ; 

function display( {id:myId , age:myAge , birthDay:myBirthDay } ){
    return `${myAge} And My Birthday is: ${myBirthDay}` ; 
}
console.log(display(me)) ; 

console.log(myId , ' : ' , myName , otherValue) ; 
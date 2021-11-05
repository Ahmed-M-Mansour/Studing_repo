const team = ['Library' , 'Ahmed' , 'Ali' , 'lolo' , 'Essam' , 'Mo' , 'Mans']  ; 

const anotherTeam = ['Special' , ...team] ; 

console.log(anotherTeam) ;


const me = {
    id: 51710250 , 
    name: "Ahmed Mansour"
}

const completeMe = {
    ...me, 
    age: 22 
}

console.log(completeMe) ; 
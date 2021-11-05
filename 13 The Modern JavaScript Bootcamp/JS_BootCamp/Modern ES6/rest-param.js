const calcAvg = (...nums) =>{
    let sum = 0 ; 
    nums.forEach(num=>  sum+= num  ) ;  
    return sum / nums.length ; 
}
console.log(calcAvg(100,50,75, 90 ))


// chalange 
const printTeam = (team , coach , ...players ) =>{
    

    return `The Team Name is: ${team} , Coach Name: ${coach} and Players are: ${players.join(' , ')}`
}

console.log(printTeam('Library' , 'Ahmed' , 'Ali' , 'lolo' , 'Essam' , 'Mo' , 'Mans')) ; 
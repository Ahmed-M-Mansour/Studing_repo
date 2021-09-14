const mySet = new Set() ; 

mySet.add(22) ; 
mySet.add(25) ; 
mySet.add(27) ; 
mySet.add(29) ; 
mySet.add(30) ; 

const o = {name:"Ahmed" , age:22   ,  city: "Giza" } 
mySet.add(o) ; 
mySet.add(32) ; 
console.log(mySet)
console.log(mySet.has(25))
console.log( "The size of the set is: " + mySet.size)
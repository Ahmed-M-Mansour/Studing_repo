const stack = [] ; 
// To add element to the top 
stack.push(5) ; 
stack.push(4) ; 
stack.push(8) ; 
stack.push(3) ; 
stack.push(1) ; 
// To remove element from the top 
stack.pop() ; 
console.log(stack) ;  



// to reverse string 
function reverseStr(str){
    // create a stack 
    let stack = [] ; 
    // push the elements to thestack 
    for(let i =0 ; i < str.length ; i++) {
        stack.push(str[i]) ; 
    }
    // the container of reversed string 
    let stringToReverse = "" ; 
    while(stack.length > 0 ){
        stringToReverse += stack.pop() ; 
    }
    return stringToReverse ; 
}


console.log(reverseStr("Ahmed Mansour "))
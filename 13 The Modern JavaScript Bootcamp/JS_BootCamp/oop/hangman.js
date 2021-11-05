// const Hangman = function(x ,y ){
//     this.x = x ; 
//     this.y = y ; 
// }

// const game1 = new Hangman(1,5) ; 
// console.log(game1); 

// const game2 = new Hangman(5,6) ; 
// console.log(game2); 

const any = 'Ahmed' ; 
const x = any.split('') ; 
const container = [] ; 
for(let i = x.length-1 ; i>=0 ; i--){
    container.push(x[i]) ; 
}
console.log(container);

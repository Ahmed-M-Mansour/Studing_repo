const todoes = [
    {
        text: 'Alasr praer' ,
        complete: true 
    } , 
    {
        text: 'fnish Array section' ,
        complete: false 
    } , 
    {
        text: 'project' ,
        complete: true 
    } , 
    {
        text: 'go to sleep early ' ,
        complete: false 
    } , 
]; 
// To filter the Todoes 
const filterTodoes = todoes.filter(todo => {
        return !todo.complete ; 
})
console.log(filterTodoes)
console.log(filterTodoes[0].complete)

// to add the number of todoes in html page 
const notSelectedTodes = document.createElement('h2') ; 
notSelectedTodes.textContent =  ` You have ${filterTodoes.length} Todoes left  `  ; 
document.querySelector('p').appendChild(notSelectedTodes) ; 
// To add todoes to the html page 
filterTodoes.forEach(todo => {
    let textTodoes = document.createElement('p') ; 
    textTodoes.textContent  = todo.text ; 
    document.querySelector('body').appendChild(textTodoes) ; 
})


// filter the todos that have "the" word 
let todos = document.querySelectorAll('p') ; 
console.log(todos)
const filterTodo = todos => {
    todos.forEach( todo => {
        if(todo.textContent.includes('the')) {
            console.log('found the ') ; 
            todo.remove();
        }
    })
}
console.log(filterTodo(todos))

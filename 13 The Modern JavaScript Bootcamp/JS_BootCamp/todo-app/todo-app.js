'use strict' 

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})







// const todoes = getSavedTodos(); 
// let filters = {
//     serachText: '' , 
//     // hideCompleted: false , 
// } ; 

// renderTodoes(todoes , filters ) ; 

// document.getElementById('search-todo').addEventListener('input' , e => {
//     filters = e.target.value ; 
//     renderTodoes(todoes , filters )
// })

// // handle todo form 
// document.getElementById('todo-form').addEventListener('submit' , e => {
//     e.preventDefault() ; 
//     todoes.push({
//         id:  uuidv4() , 
//         text: e.target.elements.addToDo.value , 
//         complete: false 
//     }) ; 
//     renderTodoes(todoes , filters )
//     console.log(e.target.elements.addToDo.value) ; 
//     e.target.elements.addToDo.value = '' ; 
//     saveTodos(todoes) ; 
// })

// // // handle seclected options 
// // document.getElementById('filter-by').addEventListener('change', e => {
// //     console.log(e.target.value) ; 
// // })

// //---------------------------------------------------------------------------------------------
// // Local storage 
// // localStorage.setItem('Location' , 'Egypt') ; 
// // console.log(localStorage.getItem('Location'));
// // localStorage.removeItem('Location') ; 
// // console.log(localStorage.getItem('Location'));
// // localStorage.clear();  // clear every thing 
// // const user = {
// //     name: 'Ahmed Mansour' , 
// //     age: 22 
// // }
// // const userJson = JSON.stringify(user) ;
// //  localStorage.setItem('user' , userJson) ; 
// // console.log(localStorage.getItem('user' )) 

// // const getUser = localStorage.getItem('user') ; 
// // const userToObject = JSON.parse(getUser) ; 
// // console.log(`Hi: Iam ${userToObject.name} , My age is ${userToObject.age}`) ; 
// //---------------------------------------------------------------------------------------------
// // handle check box 
// // document.getElementById('Hide-completed').addEventListener('change' , e => {
// //     filters.hideCompleted = e.target.checked ; 
// //     renderTodoes(todoes , filters )
// // })

// //---------------------------------------------------------------------------------------------

// // // To filter the Todoes 
// // const filterTodoes = todoes.filter(todo => {
// //         return !todo.complete ; 
// // })
// // console.log(filterTodoes)
// // console.log(filterTodoes[0].complete)

// // // to add the number of todoes in html page 
// // const notSelectedTodes = document.createElement('h2') ; 
// // notSelectedTodes.textContent =  ` You have ${filterTodoes.length} Todoes left  `  ; 
// // document.querySelector('p').appendChild(notSelectedTodes) ; 
// // // To add todoes to the html page 
// // filterTodoes.forEach(todo => {
// //     let textTodoes = document.createElement('p') ; 
// //     textTodoes.textContent  = todo.text ; 
// //     document.querySelector('body').appendChild(textTodoes) ; 
// // })


// // // filter the todos that have "the" word 
// // let todos = document.querySelectorAll('p') ; 
// // console.log(todos)
// // const filterTodo = todos => {
// //     todos.forEach( todo => {
// //         if(todo.textContent.includes('the')) {
// //             console.log('found the ') ; 
// //             todo.remove();
// //         }
// //     })
// // }
// // console.log(filterTodo(todos))





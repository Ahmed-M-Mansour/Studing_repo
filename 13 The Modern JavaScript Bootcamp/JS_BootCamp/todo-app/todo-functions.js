'use strict' 

// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    try{
        !todosJSON  ? JSON.parse(todosJSON) :  [] ; 
    }catch(e){
        return []
    }
    // if (todosJSON !== null) {
    //     return JSON.parse(todosJSON)
    // } else {
    //     return []
    // }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}





















// // fetch existing todos from localstorage 
// const getSavedTodos = () => {
//     const todoJson = localStorage.getItem('todoes') ; 
//     if(todoJson !== null) {
//         return JSON.parse(todoJson) ; 
//     }else return [] ; 
// }

// // save todos to localstorage 
// const saveTodos = todoes => {
//     localStorage.setItem('todoes' , JSON.stringify(todoes))
// }
// // Remove todo 
// const removeTodo = id => {
//     const todoindex = todoes.findIndex(todo =>{
//         return todo.id == id ; 
//     } ) 
//     if(todoindex > -1){
//         todoes.splice(todoindex, 1) 
//     }
// }

// // Toggle the completed value for a given todo
// const toggleTodo = function (id) {
//     const todo = todoes.find(function (todo) {
//         return todo.id === id
//     })

//     if (todo !== undefined) {
//         todo.completed = !todo.completed
//     }
// }

// // // to toogle todo 
// // const toggleCheckBox = id => {
// //     const todo = todoes.find(function  (todo)  {
// //         return todo.id === id ; 
// //     })
// //     if (todo !== undefined){
// //         todo.complete = ! todo.complete ; 
// //     }
// // }


// // rendertodos 
// const renderTodoes = (todoes , filters) => {
//     let filterTodoes = todoes.filter(todo => {
//         return todo.text.toLowerCase().includes(filters.serachText)
//     })
    
//     document.getElementById('todoes').innerHTML = '' ; 
//     filterTodoes.forEach(todo => {
//        const todoEl =  generateTodoDom(todo)
//         document.getElementById('todoes').appendChild(todoEl) ; 
         
//     })
// }


// // get the DOM elements from an individual note 
// const generateTodoDom = todo => {
//     const todoEl = document.createElement('div') ; 
//     const textEl = document.createElement('span') ; 
//     // check box 
//     const boxEl  = document.createElement('input') ; 
//     boxEl.setAttribute('type' , 'checkbox') ; 
//     // to edit check box 
//     boxEl.addEventListener('change' , function (e) {
//         toggleTodo(todo.id) ; 
//            saveTodos(todoes) ; 
//            renderTodoes(todoes , filters) ; 
            
            
//         console.log(e.target.checked)
//     })

//     const removeButton = document.createElement('button') ; 
//     todoEl.appendChild(removeButton) ;
//     todoEl.appendChild(textEl) ; 
//     todoEl.appendChild(boxEl) ; 

//     // to remove todo with bitton 
//     removeButton.textContent = 'x' ; 
//     removeButton.addEventListener('click' , function(){
//         removeTodo(todo.id) ; 
//         saveTodos(todoes) ; 
//         renderTodoes(todoes , filters) ; 

    
       
       
         
    
//     })
   


//         if(todo.text.length > 0 ){
//             textEl.textContent = todo.text ; 
//         } else textEl.textContent = 'Text not Found ' ; 
      
//         return todoEl ; 
// }
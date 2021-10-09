// selcet one element 
const p = document.querySelector('p').textContent ; 
console.log(p) ; 
// p.remove() ; 

// select all elements 
const spans = document.querySelectorAll('span') ; 
spans.forEach(span => {
    span.remove() ; 
})


const newP = document.createElement('p') ; 
newP.textContent = 'New p from JS ' ; 
document.querySelector('div').appendChild(newP) ;   

const btn = document.getElementById('btn') ; 
const clickBtn = () => {
    console.log('u clicked ')
}
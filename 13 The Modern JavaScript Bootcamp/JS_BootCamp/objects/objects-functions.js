let book = {
    title: 'Hepta' , 
    Author: 'Mohamed' , 
    pagesCount: 256
}

let otherBook = {
    title: 'Ritch Dad ' , 
    Author: 'Robert' , 
    pagesCount: 2659
}


let getSummary = book => {
    // return ` Title: ${book.title} and Author: ${book.Author}` ; 
    return {
        summary: ` Title: ${book.title} and Author: ${book.Author}` , 
        pageCountSummary: ` Title: ${book.title} is ${book.pagesCount} pages `
    } 
}

console.log(getSummary(book)) ; 
console.log(getSummary(otherBook)) ; 


// Chalange 
let getTemp = fahrtemp =>{
    let clsuisTemp = ( fahrtemp - 32) *5/9 ; 
    let kelvin = (fahrtemp + 459.67 ) *5/9 ; 
    return {
        clsiusTemp : ` The Tepreture in Clsius is : ${clsuisTemp} ` , 
        kelvinTemp : ` The Tepreture in Clsius is : ${kelvin} `
    }
}

console.log(getTemp(32))
console.log(getTemp(74))


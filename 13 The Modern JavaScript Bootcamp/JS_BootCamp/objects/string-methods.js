let isValidPassword = password =>{
    let cottectPassword = password.length > 8 && password.includes('password') == false  ; 
    console.log(cottectPassword) ; 
                          
}


isValidPassword('58584password') ; 
isValidPassword('5148chjcgsd') ; 
isValidPassword('25414') ; 

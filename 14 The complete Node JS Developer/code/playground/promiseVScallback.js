// callback 
const work = (callback)=>{
    setTimeout(() => {
        callback( undefined , "Hi its me ")
    }, 1000);
}

work((err, succ)=>{
    if(err) console.log(err) ; 
    else console.log(succ)
})
//-----------------------------------------------------------------------------
// promise 
const pWOrk = new Promise( (res , rej)=>{
    setTimeout(() => {
        rej('its a promise error  ')
    }, 1500);
})

pWOrk.then(result=>{
    console.log(result) ; 
}).catch(err=>{
    console.log('Error:' , err)
})
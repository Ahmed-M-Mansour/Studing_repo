//callback 
// setTimeout( ()=>{
//     console.log('Time out')
// } , 3000)


//promise with callback 
const getPromisedata = data => new Promise( (resolve , reject) => {
    resolve(data) ; 
}, 4000)

const MyPromiseData = getPromisedata("Ahmed Mansour Here!") ; 
MyPromiseData.then(done =>{
    console.log(done);
} , (error)=> {
    console.log(error); 
})

//--------------------------------------------------------------------------------

// pure promise 
const mypr = new Promise((resolve , reject) => {
    // resolve('Done') ;     
    reject('Error') ; 
},2000) ; 

mypr.then(data =>{
    console.log(data) ;  // Done or Resolved 
}, (error)=>{
    console.log(error);  // Failed or Rejected 
}
)


//  ex for using promise with chaning 

const chPromise = num=> new Promise( (resolve , reject )=>{
    setTimeout(() => {
        typeof num === 'number'? resolve(num *2 ) : reject('must number') ; 
    }, 2000);
} ) ; 

chPromise(2).then( (data) =>{
    chPromise(data).then((data)=>{
        console.log(`My data ${data}`) ; 
    }, (err)=>{
        console.log(err) ; 
    })
} , (err)=>{
    console.log(err) ; 
}
) ; 
// Best practice 
chPromise(10).then((data)=>{
    return chPromise(data) ; 
}).then((data)=>{
    console.log(`sec data ${data}`) ; 
    return chPromise(data) ; 
}).then((data)=>{
    console.log(`Third data ${data}`) ; 
}).catch(err=>{
    console.log(err)
})
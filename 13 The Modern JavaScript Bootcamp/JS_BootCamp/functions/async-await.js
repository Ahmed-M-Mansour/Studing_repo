const chPromise = num=> new Promise( (resolve , reject )=>{
    setTimeout(() => {
        typeof num === 'number'? resolve(num *2 ) : reject('must number') ; 
    }, 200);
} ) ; 

const myAsyncFun = async ()=>{
    let data = await chPromise(10) ; 
    data = await chPromise(data)
    data = await chPromise(data)
    data = await chPromise(data)

   return data ; 
}

myAsyncFun().then(res =>{
    console.log(res) ; 
}).catch(err =>{
    console.log(err) ; 
})


const getLocation = async  ()=>{
    const location = await getLocation() ; 
    const country = await getCountry(location.country) ; 
    return country ; 
   
}
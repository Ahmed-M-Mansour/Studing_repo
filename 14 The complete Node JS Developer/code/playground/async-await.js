const add = (a,b)=>{
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(a + b )  
        }, 555);
    })
    
}

const getSum = async ()=>{
    return await add(1,5) ; 
}

getSum().then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e) ; 
})
const getTip = amount => {
    if(typeof amount == 'number'){
        return amount * .5
    } else throw Error ('please eneter the number') ; 
 }

 try{
    console.log(getTip('sdfsd'))
 }catch (e) {
    console.log(e.message)
 }

const geoCode = require('./utils/geocode') ; 
const forcast = require('./utils/forcast') ; 

const addres = process.argv[2] ; 

if(!addres) console.log('please enter a Addres') ; 
else 
geoCode(addres , (error , {latitude ,longitude , locaton})=>{
    error ? onclose.log(error) : 
    forcast(latitude , longitude , locaton , (error , forcastData) =>{
        console.log('Error', error);
        console.log('Data', forcastData);
    } )
})







// http://api.weatherstack.com/current?access_key=6dd149f68fd9a3fa1d61a985624faba8&query=Cairo
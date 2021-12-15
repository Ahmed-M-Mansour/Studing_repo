const request = require("postman-request")
const geoCode = require('./geocode')

const forcast = (latitude , longitude , locaton , callback )=>{
    const url = 'http://api.weatherstack.com/current?access_key=6dd149f68fd9a3fa1d61a985624faba8&query=' + latitude + ',' + longitude + '&units=m'; 
    request({url , json:true } , (error , {body} )=>{
        if(error){
            callback('Unable to connect to weather service!' , undefined )
        } else if(body.error){
            callback('Unable to find location' , undefined)
        } else {
            callback(undefined , body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out in " + locaton ); 
        }
    })
    
    
}

module.exports = forcast ; 
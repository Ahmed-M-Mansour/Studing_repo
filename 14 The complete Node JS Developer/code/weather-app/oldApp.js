//-------------------------------------------------------------------
const url = 'http://api.weatherstack.com/current?access_key=6dd149f68fd9a3fa1d61a985624faba&query=42.3605,-71.0596&units=f'

request({ url: url, json: true }, (error, response) => {
    // if (error) {
    //     console.log('Unable to connect to weather service!')
    // } else if (response.body.error) {
    //     console.log('Unable to find location')
    // } else {
    //     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
    // }
})
//-----------------------------------------------------------------------------------

// create a new request with mapBox APi 
// const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/20001;20009;22209.json?access_token=pk.eyJ1IjoiYWhtZWQtbS1tYW5zb3VyIiwiYSI6ImNrdnJtaG15NDJjejgycWtsYmRybjdzcnkifQ.ZHd3mhskUcxGFuxCa4-M-w';
// request(mapBoxURL , (err , res)=>{
//     // const lattitude = res.body.features[0].center[1] ; 
//     // const longitude = res.body.features[0].center[0]
//     // console.log(res.body.query) ; 

// })
//----------------------------------------------------------------------
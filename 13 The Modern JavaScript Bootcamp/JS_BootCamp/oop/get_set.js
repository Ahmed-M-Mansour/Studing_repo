const data = {
    locations:[] , 
    get location(){
        return this._location ; 
    },
    set location(value){
        this._location = value
        this.locations.push(this._location) ; 
    }
}
data.location = 'cairo' ; 
data.location = 'Aswan' ; 

console.log(data) ; 
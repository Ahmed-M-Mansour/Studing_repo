let resturent = {
    name: 'KFC' , 
    guestCapacity: 100 , 
    guestCount: 0 , 

    checkAvilability: function (num)  {
        let setsLeft = this.guestCapacity - this.guestCount ; 
        // console.log(setsLeft)   ; 
        // console.log(this) ; 
        return setsLeft >= num ; 
    } , 

    seatParty: function (partySize){
        this.guestCount = this.guestCount + partySize ; 
    } , 
    removeParty: function (num) {
        this.guestCount = this.guestCount - num ; 
    }
    
}

let aval = resturent.checkAvilability(8) ; 
console.log(aval) ; 

resturent.seatParty(14) ; 
console.log(resturent.checkAvilability(55)) ; 

resturent.removeParty(5) ; 
console.log(resturent.checkAvilability(55)) ; 
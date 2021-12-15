const {MongoClient , ObjectID} = require('mongodb') ; 

const connectionURL = 'mongodb://127.0.0.1:27017' ; 
const databaseNmae  = 'task-manager' ; 

MongoClient.connect( connectionURL , {useNewUrlParser: true} , (error , client )=>{
    if(error){
        return console.log(`Unable to connect to The DB , ${error}`) ; 
    }

    console.log(`Connected Correctly`) ; 

    const db = client.db(databaseNmae) ; 
      db.collection('users').deleteOne({
          _id: new ObjectID('61909bd8515964b2a6a9e94c')
      }).then((res)=>{
        console.log(res)
        }).then(err=>{
        console.log(err) ; 
        })
})
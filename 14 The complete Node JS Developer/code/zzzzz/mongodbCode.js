   // C:\Users\ahmed\mongodb\bin/mongod.exe --dbpath=C:\Users\ahmed\mongodb-data 
   
   
   // const mongodb = require('mongodb') ; 
// const MongoClient = mongodb.MongoClient ; 
// const ObjectID = mongodb.ObjectId ; 

// insert 

   // db.collection('users').insertOne({
    //     id: 51710250 , 
    //     name: 'Ahmed Mnasour' , 
    //     age: 22 
    // }, (error , result) =>{
    //     if(error){
    //         return console.log(error) ;
    //     }

    //     console.log(result) ; 
    // })
    //------------------------------------------------------------------------------
    // db.collection('users').insertMany([
    //     {
    //         id: 5467888415 , 
    //         name: 'Ali safan' , 
    //         age: 28 
    //     } , 
    //     {
    //         id: 265647 , 
    //         name: 'Mohgtar scsd ' , 
    //         age: 27 
    //     }
    // ] , (error , result)=>{
    //     if(error){
    //         return console.log("unable to insert ") ; 
    //     } 
    //     console.log(result) ; 
    // })
    //------------------------------------------------------------------------------
    // db.collection('tasks').insertMany([
    //     {
    //         describtion: " Critical Thinking" , 
    //         complete: false 
    //     } , 
    //     {
    //         describtion: " Compiler" , 
    //         complete: false 
    //     } , 
    //     {
    //         describtion: " Computer Graphics " , 
    //         complete: true 
    //     } , 
        
    // ], (error , result)=>{
    //     if(error){
    //          return console.log("unable to insert ") ; 
    //      } 
    //      console.log(result) ;
    // })





    // find in mongo 

    // db.collection('users').findOne({_id:new ObjectID("61909bd8515964b2a6a9e94c") } , (err , user)=>{
    //     if(err){
    //         return console.log(" Unable to fetch") ; 
    //     }
    //     console.log(user) ; 
    // })
    // const tasks  = db.collection('tasks') ; 
    // tasks.findOne({_id: new ObjectID("61909d46c72df025b37d78fd")} , (err , task)=>{
    //     console.log(task) ; 
    // })
    // tasks.find({complete: false}).toArray((err , res)=>{
    //     console.log(res) ; 
    // })
    // tasks.find({complete: false}).count((err , res)=>{
    //     console.log(res) ; 
    // })



    // Upadte 

    db.collection('users').updateOne({_id: new ObjectID('618ff134e3990bdf31916902')} , 
    {
        $set:{
            name: "Omar Zahran" , 
            age: 23 , 
            id: 5896247 
        }
    }).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err) ; 
    })

    db.collection('users').updateOne({_id: new ObjectID('618ff134e3990bdf31916902')} , 
    {
        $inc:{
            age: -2
        }
    }).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err) ; 
    })

    // update many 
    db.collection('tasks').updateMany({
      complete: false 
  } , {
      $set:{
          complete: true 
      }
  }).then((res)=>{
      console.log(res)
  }).then(err=>{
      console.log(err) ; 
  })

  // delete many 
  db.collection('users').deleteMany({
   age: 28 
      }).then((res)=>{
      console.log(res)
      }).then(err=>{
      console.log(err) ; 
      })

      
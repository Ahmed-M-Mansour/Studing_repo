const {MongoClient , objectID} = require('mongodb') ; 

const connectionURL = 'mongodb://127.0.0.1:27017' ;  
const databaseName = "Ecommerce-for-me" ; 
// Start the connection 
MongoClient.connect(connectionURL , { useNewUrlParser: true } , (err , client)=>{
    err? console.log(`Unable to connect to The DB , ${error}`) : console.log(`Connected Correctly`)

    const db = client.db(databaseName) ; 

    // insert product to Database 
    const addProduct = ()=>{
    db.collection('products').insertOne({
        name: 'blue-TShirt' , 
        price: 170 , 
        category: 'clothes'
    }).then(product=>{
        console.log(`Product: ${product}`)
    }).catch(err=>{
        console.log(`Error: ${err}`)
    })
    } 


    // find products 
    const findProducts = ()=>{
        db.collection('products').find({
            price: 150 
        }).then(products=>{
            console.log(`Products: ${products}`)
        }).catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

    // find one product 
    const findOneProduct = ()=>{
        db.collection('products').findOne({
            _id: new objectID('id')
        }).then(product=>{
            console.log(`Product: ${product}`)
        }).catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

    // update products 
    const updateProducts = ()=>{
        db.collection('products').updateMany({
            category: 'clothes'
        } , {
            $set:{
                details:{
                    option1: 'option1' , 
                    option2: 'option2' , 
                    option3: 'option3' , 
                    option4: 'option4' , 
                }
            }
        }).then(products=>{
            console.log(`Products: ${products}`)
        }).catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

    // update one product 
    const updateProduct = ()=>{
        db.collection('products').updateOne({_id: new objectID('id')} , {
            $set:{
                price: 190 
            }
        }).then(product=>{
            console.log(`Product: ${product}`)
        }).catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

    // Delete product 
    const deleteProduct = ()=>{
        db.collection('products').deleteMany({ price: 200}).then(products=>{
            console.log(`Products: ${products}`)
        }).catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

})
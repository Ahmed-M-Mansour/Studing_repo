const express = require('express') ; 
require('./db/mongoose') ; 

 
   // C:\Users\ahmed\mongodb\bin/mongod.exe --dbpath=C:\Users\ahmed\mongodb-data 

const userRouter = require('./routers/user'); 
const taskRouter = require('./routers/task')

const app = new express() ; 
const port = process.env.PORT || 3000 ; 
// Mantainance Mode 
// app.use((req , res , next )=>{
//     res.status(503).send('Site is currently down ') 
//     console.log(req.method , req.path) 
    
// })

app.use(express.json())
app.use(userRouter) ; 
app.use(taskRouter) ; 

app.listen(port , () =>{
    console.log('App is running on Port: ' , port)
}); 


// const Task = require('./models/task')
// const User = require('./models/user')
// const fun = async ()=>{

//     const task = await Task.findById('61b863b64e22941be070afd6') 
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('61b863a44e22941be070afcd')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

//  fun()


const multer = require('multer') ; 
const upload =  multer({
    dest: 'images' , 
    limits: {
        fileSize: 1000000
    } ,
    fileFilter(req, file, cb ){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('its must be a word file ') )
        }
        cb(undefined , true)
    }
})

app.post('/upload' , upload.single('upload') , (req, res)=>{
    res.send() ; 
},(error , req , res, next)=>{
    res.status(400).send({error: error.message}) ; 
})
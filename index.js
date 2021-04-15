const express=require('express')
const app=express()
const port=4000
const mongoose=require('mongoose')


app.get('/',(req,res)=>res.send('hello world'))

app.listen(port,()=>console.log(`Exampleapp listening on port ${port}!`))

mongoose.connect('mongodb+srv://gon109:199512gy@boilerplate.qk2s3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ 
    useNewUrlParser :true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

const express=require('express')
const app=express()
const port=4000
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const config=require('./config/key');

const {User} = require("./models/User");

//application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{ 
    useNewUrlParser :true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))


app.get('/',(req,res)=>res.send('문구 바꾼거 확인하기12345'))

app.get('api/hello',(req,res)=>{
    res.send("안녕하세요~")
})

app.post('/register',(req,res) => { 

    const user = new User(req.body);
    user.save((err,userInfo) => {     // mongdb command
    
        if(err) return res.json({ success: false,err})
    
        return res.status(200).json({ success: true })
    
      })

    
    }) // end of post

app.listen(port,()=>console.log(`Exampleapp listening on port ${port}!`))


const express = require('express')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const sendemail = require('./email')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cookieparser())


app.post('/send',(req,res)=>{

    console.log(req.body);
    
    sendemail(to , name , type)


})


app.listen(5000,()=>{

console.log('run server ');


})
const express = require('express')
const mongoose = require('../cms/node_modules/mongoose')
const app = express()
require('../stripe/node_modules/dotenv/config')
const bodyparser = require('../express_2/node_modules/body-parser') 

//import router


app.use(bodyparser.json()) // for read json format body req


const postrouter = require('./router/posts')




app.use('/post',postrouter)
// app.use('/user',userrouter)

//middelwer





//routers




// conext db

mongoose.connect(process.env.DB_CONECT,{useruseNewUrlParser:true},()=>{

console.log('conect db ');


})


app.listen(3003)
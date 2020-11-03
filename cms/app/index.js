const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const validator = require('express-validator')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const flash = require('connect-flash')
const passport = require('passport')



module.exports = class Application {

    constructor(){

this.setuopExpres();
this.setmongo();
this.setconfig();
     this.setrouters()
    }

    
    setuopExpres(){
        const server = http.createServer(app);
        server.listen(3000 ,()=>{
            console.log('run');
            
        })

    }

    setmongo(){

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test')
    }

    setconfig(){

app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views',path.resolve('../resourse/views'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))


app.use(session({

 secret:'mysecretkey',
 resave:true,
 saveUninitialized:true,
 store: new MongoStore({mongooseConnection : mongoose.connection})

}))
app.use(cookieparser('mysecretkey'))
app.use(flash())

/*
app.get('/',(req,res)=>{

res.json('json run ')

})
*/

    }

    setrouters(){


        app.use(require('./router/web'))
    }

}
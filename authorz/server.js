const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const {success , error} = require('consola')
const Mongoose  = require('mongoose')

const {DB , PORT } = require('./config')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())

require('./midelwers/passport')(passport)

app.use("/api/user" , require('./router/users'))

const StartApp = async () => {

    try{
       await Mongoose.connect(DB , {

            useCreateIndex:true,
            useFindAndModify:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        
        
        })
        success({msg:`ok connect db ${DB}`})

        app.listen(PORT, ()=> {


            success({msg:`wow memorry me ${PORT}` , badge:true})
        // console.log( `wow memorry me ${PORT}` );
        
        
        })

    }
    catch(err){
        error({errors:`no connect db ${DB} \n ${err}`})
   StartApp()
    }

}
StartApp()


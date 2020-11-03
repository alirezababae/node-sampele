const express = require('express')

const app = express()

//middelwer


app.use('/posts',()=>{

console.log('his maddelwer');

    
})




//routers


app.get('/',(req,res)=>{
res.send('we me')


})



//lisent

app.listen(3000)
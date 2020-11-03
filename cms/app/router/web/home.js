const express = require('express')

const router = express.Router()

const homeControler = require('./../../http/controlers/homecontroler')


router.get('/',homeControler.index)


// router.get('/',(req,res)=>{

// res.json('home router')

// })



module.exports = router
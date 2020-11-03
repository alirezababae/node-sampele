const express = require('express')

const router = express.Router()




const admincontroler = require('./../../http/controlers/admin/admincontroler')

router.get('/',admincontroler.index)



// router.get('/',(req,res)=>{

// res.json('admin router')

// })

// router.get('/cor',(req,res)=>{

//     res.json('core')

// })



module.exports = router
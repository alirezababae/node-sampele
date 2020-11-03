const express = require('express')

const router = express.Router()

// admin req file index

const adminRouter = require('./admin')

// user req file index

const UserRouter = require('./home')


router.use('/admin',adminRouter)
router.use('/home',UserRouter)


/*
router.get('/',(req,res)=>{

res.json('heloo router')

})
*/



module.exports = router;
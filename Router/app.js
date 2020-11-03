const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/homefile',express.static(path.join(__dirname,'/')));

router.get('/',(req,res)=>{

res.sendFile(path.join(__dirname,'/','app.html'));
app();
});


const app = ()=>{

console.log('sapp');

};

router.use('/about',require('./about'));



module.exports = router;
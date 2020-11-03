const express = require('express');

const nono = express.Router();

nono.get('/about',(req,res)=>{

console.log('uploder');


});

module.exports = nono;
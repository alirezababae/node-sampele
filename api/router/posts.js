const express = require('express')
const router = express.Router();

const Post = require('../models/Post')


router.get('/',(req,res)=>{

res.send('post router')
// console.log('dsfdf');

})

router.post('/',(req,res)=>{

// console.log(req.body);

const post = new Post({

title:req.body.title,
description:req.body.description

})

post.save()
// .exec()
.then(data => {
res.json(data)

})

.catch(err => [

    res.json({messagr:err})

])


})


// router.get('/send',(req,res)=>{

// res.send('send post')

// })



module.exports = router;
 
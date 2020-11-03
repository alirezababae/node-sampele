const express = require('express');
const path = require('path');

const app = express();




const objectarro = {
name:"pord",
age:33,
pro:"333$"
};

const poo = ["apple","googel","weater","facbook"];


//app.use('/publicfile',express.static(path.join(__dirname,'/views'))); 
//app.use('/public',exprees.static(path.join(__dirname,'static_1')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs'); 

app.get('/site',(req,res)=>{


res.render('index',{data : {propss : objectarro.age , propssarro : poo  }});




});
app.listen(3000);
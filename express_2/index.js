/*

// firs app exprees

const express = require('express');

const app = express();

app.get('/game',(req,res)=>{

res.send('hello world game');

});

app.listen(3000);
*/



/*

// request express 

const exprees = require('express');

const app = exprees();

app.get('/app/:name/:age',(req,res)=>{

console.log(req.params);

res.send('app node');

});
app.listen(3000);

*/



/*

// log url rquest 


const exprees = require('express');

const app = exprees();

app.get('/app/:name',(req,res)=>{

console.log(req.params);
console.log(req.query);

res.send(req.params.name + ' no find');


});
app.listen(3000);
*/




/*
//lodfile in express

const exprees = require('express');
const app = exprees();
const path = require('path');

app.use('/public',exprees.static(path.join(__dirname,'static_1')));


app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname,'static_1','app.html'));

});

app.listen(3000);

*/


const exprees = require('express');
const app = exprees();
const bodyParser = require('body-parser');
const path = require('path');
const joi = require('joi');

app.use('/public',exprees.static(path.join(__dirname,'static_email')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname,'static_email','index.html'));

});


app.post('/',(req,res)=>{

console.log(req.body);

const scema = joi.object().keys({

    email : joi.string().trim().email().required(),
    passsword: joi.string().min(5).max(10).required()
});
joi.validate(req.body,scema,(err,result)=>{

if(err){
    console.log(err);
    
res.send('an error has triy');

}
console.log(result);
res.send('susuccessfull joi');


})
//res.send('susuccessfull posted data');

//res.json({success : true});


});



app.listen(3000);



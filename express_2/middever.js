const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

app.use((req,res,next)=>{

//console.log(req.url,req.method);

req.banan = 0;

next();


});


app.get('/',(req,res)=>{
console.log(req.banan+=1);

res.send('exampel');
 

});

app.listen(3000);
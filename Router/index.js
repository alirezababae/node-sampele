const express = require('express');
const path = require('path');
//const bodyparser = require('body-parser');


const app = express();

app.use('/publicfile',express.static(path.join(__dirname,'/')));

app.set('view negine','ejs');

//const people = require('./app');
 
app.use('/home',require('./app'));
app.listen(3000);
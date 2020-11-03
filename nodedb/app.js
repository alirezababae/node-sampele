const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

const path = require('path');


const db = require("./db");

const collection = "todo";


app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));
  

});

app.get('/getTodos', (req, res) => {

  db.getDB().collection(collection).find({}).toArray((err, documents) => {

    if (err)
      console.log(err);
    else {
      console.log(documents);
      res.json(documents);

    }
  });

})


app.delete('/:id',(req,res)=>{

const todoID = req.params.id;

db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimarykey(todoID)},(err,result)=>{

  if(err)
  console.log(err);
  else
  res.json(result)

})


})










/*
app.post('/post',(req,res)=>{

const uSerInput = req.body;


db.getDB().collection(collection).insertOne(uSerInput,(err,result)=>{

if(err)
console.log(err);

else

res.json({result:result,document:result.ops[0]});


});


});

*/

/*

app.put('/:id', (req, res) => {

  const todoID = req.params.id;
  const uSerInput = req.body;

  db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimarykey(todoID) }, { $set: { todo: "uSerInput.todo" } }, { returnOriginal: false }, (err, result) => {

    if (err)
      console.log(err);
    else
      res.json(result);


  })

})

*/





db.connect((err) => {

  if (err) {

    console.log('unable to connect to database');
    process.exit(1);

  } else {

    app.listen(3000, () => {

      console.log('connected to database');

    });

  }

})

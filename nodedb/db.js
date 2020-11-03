const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbname = "test";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser:true};

const state = {

db:null

};

const connect = (cb)=>{

if(state.db)
cb();
else{
MongoClient.connect(url,mongoOptions,(err,client)=>{

if(err)
cb(err);
else{

state.db = client.db(dbname);
cb();

}

});

}


}

const getPrimarykey = (_id)=>{

return ObjectID(_id);

}

const test = (sum)=>{

return sum * 2;

}


const getDB = ()=>{

return state.db;

}

module.exports = {getDB,connect,getPrimarykey,test};

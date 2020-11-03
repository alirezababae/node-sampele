/*
const fs = require('fs');

const a = "hi node js test";

fs.writeFile('exampel.txt',a,(alerts)=>{

    if(alerts)
    console.log(alerts);
    else
    console.log("ok succesfully create file");
    /*
fs.readFile('exampel.txt','utf8',(alerts,file)=>{
if(alerts)
console.log(alerts);
else

console(file);

});


});


*/


//readfile


/*
var fs = require('fs');

var name = "alireza";

fs.writeFile('file.txt', name, function (alerttt) {

if (alerttt) {
  console.log(alerttt);
}else {
  console.log("ok create r");
fs.readFile('file.txt','utf8',(err,file)=>{
if(err)
console.log(err);
else
console.log(file);

});

}

});

*/




//rename file name

/*
const fs = require('fs');
      // firs name to 
fs.rename('file.txt', 'filesname.txt',  (err)=>{

  if(err)
  console.log(err);
else

console.log("ok cgenger is file name");


});

*/

/*

const fs = require('fs');
   //plus text to file
fs.appendFile('filesname.txt','22:37 your system down',(err)=>{

if(err){

console.log("error!");
}else{
console.log('OK');


}

});
*/



/*

 //delete files

const fs = require('fs');
   //delete files
fs.unlink('filesname.txt',(err)=>{



});
*/


/*

//mkdir dirctory 

const fs = require('fs');


fs.mkdir('mkdir_test',(err)=>{
if(err){

console.log(err);


}
else {console.log("ok");}



});
*/

/*

//remove dirctory

const fs = require('fs');

fs.rmdir('mkdir_test',(err)=>{



})
*/


/*


//read file

const fs = require('fs');

const read  = fs.createReadStream('./exampel.txt','utf8');
read.on('data',(unche)=>{

console.log(unche);


})
*/









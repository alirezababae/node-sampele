/*
const readline = require('readline');
const rl =  readline.createInterface({

input : process.stdin,
output : process.stdout

});

for(var i = 0; i<=10;i++){

    let num1 = Math.floor((Math.random() * 10) + 1 );
    let num2 = Math.floor((Math.random() * 10) + 1 );

    let answer = num1 + num2;

    rl.question(`what is ${ num1 } + ${ num2 } ? \n`,
    (userInput)=>{

    if(userInput.trim() == answer){
        console.log("ok");
    }
    else{

console.log("no");
    }

    });
}
*/

var readline = require('readline');
var fs = require('fs');



var inputt = readline.createInterface(process.stdin,process.stdout);

inputt.question("whts name ? ",(input)=>{

fs.writeFile('name.txt', input, function (alertscreate) {

if (alertscreate) {
console.log(alertscreate);

}else {
  console.log("ok craee");
}


});


});

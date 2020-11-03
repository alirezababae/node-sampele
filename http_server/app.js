
/*

const http = require('http');

const server = http.createServer((req,res)=>{

//res.write('hi mpn j');    

if(req.url == '/admin'){

res.write("hi me admin ");
res.end();

}else{

res.write("no object");
res.end();
}


});

server.listen('3000');
*/

// html fiel 

const http = require('http');

const fs = require('fs');


http.createServer((req,res)=>{

    const readsys = fs.createReadStream('./index.html'); //or exampel image
                                    // for render image  'content-type:'image/png' '     
    res.writeHead(200,{'Content-type':'text/html'}); 
   readsys.pipe(res); // for run file save to readsys varibels 
}).listen('3000');








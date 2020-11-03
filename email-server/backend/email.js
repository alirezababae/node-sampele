const emilter = require('nodemailer')
const Hello = require('./hello_temp')

const  getEmailData = (to , name , templete) => {

let data = null

switch (templete) {
    case "hello":
       
data = {

    form :"Ali <myalirezababaei@gmail.com>",
    to,
    subject:`hello ${nam}`,
    html:Hello()



}
break;

case "tanks":

    data = {

        form :"Ali <myalirezababaei@gmail.com>",
        to,
        subject:`hello ${nam}`,
        html:Tanks()
    
    
    
    }

    break;
    default:

    // console.log('error');
    data;



}
return data

}



const sendemail = (to , name , type ) =>{

const sendtelPort = emilter.createTransport({

    service:"Gmail",

    auto:{
user:"myalirezababaei@gmail.com",

pass:""


    }


})



const nail = getEmailData(to , name , type)

sendtelPort.sendMail(nail , function(error,response){

if(error){

    console.log(error);
    
}else{

    console.log('send email ok');
    


}

sendtelPort.close()

})


}


module.exports = {sendemail}
const EventEmitter = require('events'); //  EventEmitter اسم دلخواه

const eventEmitter = new EventEmitter();

const a = 22;

eventEmitter.on('eventsme',(num1,num2) => {
console.log("runing progres");
console.log(num1 + num2);
});

eventEmitter.emit('eventsme',2,3);


class App extends  EventEmitter{

constructor(name){
super(name);

this._name = name;


}
get name(){
return this._name;

}


}

let nameme = new App('Hi');

nameme.on('name',()=>{

    console.log( nameme.name + 'Alireza babei')

});

nameme.emit('name');



/*
if(a == 24){

    eventEmitter.emit('eventsme');

}
*/
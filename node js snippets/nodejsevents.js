const EventEmitter=require('events');// importing events package to use this package omit type module

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('Water',()=>{
    console.log("Event detected");
    setTimeout(()=>{
        console.log("Eveent finished")
    },3000);
});
console.log("Script is running")
myEmitter.emit('Water');
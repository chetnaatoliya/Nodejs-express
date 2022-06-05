const EventEmitter =require("event");
const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log('your name is kriva');
});
event.emit('sayMyName');
const EventEmitter = require('events')
const myEmitter = new EventEmitter()
const sayHi =()=>{
    console.log("Hi,User")
}
const sayHello =()=>{
    console.log("Helo User")
}
myEmitter.on('userJohn',sayHi)
myEmitter.on('userJohn',sayHello)




myEmitter.emit('userJohn')
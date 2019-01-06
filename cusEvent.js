const EventEmitter = require('events');

class Logger extends EventEmitter { 
    log(message){
        this.on(message,(arg)=>{
            console.log("Call a function "+message+" with ",arg)
        })
        this.emit(message,{url:'https://www.tester.com',username:'user',password:'user'})
    }
}

module.exports = Logger
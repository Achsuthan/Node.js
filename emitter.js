const EventEmitter = require('events')

var emitter = new EventEmitter()

function EventEmitterFunc(eventName, paramters){

    emitter.on(eventName,function (pparamters){
        console.log('Event called with '+pparamters+ ' paramters');
    });

    emitter.emit(eventName, paramters)
}

module.exports.EventEmitterFunc = EventEmitterFunc
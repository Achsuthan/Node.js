
const logger = require('./logger');
const eventManagement = require('./emitter')
logger.endPoint('This is API call');

//handling the event management
const eventEmitter = require('events');
//eventEmitter is a class so we have to create a object for it 
var emitter = new eventEmitter()

//emitter.on() function will handle when the event function triggered
emitter.on('Event',function(paramter) {
    console.log('event called with parameter ', paramter);
});
//emitter.emit() function used for trigger the evnet
emitter.emit('Event','values')

//emitter.on() function should difine before the emiiter.emit() function




eventManagement.EventEmitterFunc('Test Event', 'Values of paramters')



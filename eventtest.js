
const EventEmitter = require('events');

const Logger =require('./logger');
const logger = new Logger();


logger.on('message1', (arg) => {
  console.log(`Event occurred with ${arg}`);
});

logger.log('message');
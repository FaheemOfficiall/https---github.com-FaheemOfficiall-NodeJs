import events from 'events'


const eventEmitter = new events.EventEmitter();

const fun1 = () => {
    console.log('go to sleep');
};


const fun = () => {
    console.log('go to work');
}

eventEmitter.once('night', fun1);
eventEmitter.on('work', fun)

eventEmitter.emit('work', fun);
eventEmitter.emit('work', fun);
eventEmitter.emit('work', fun);
eventEmitter.emit('work', fun);

eventEmitter.emit('night');
eventEmitter.emit('night');
eventEmitter.emit('night');
eventEmitter.emit('night');
eventEmitter.emit('night');
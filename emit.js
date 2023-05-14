// const { log  = require("console");

const EventEmitter = require("events")

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
    console.log("An Event Occured");
});

// myEmitter.emit("event");

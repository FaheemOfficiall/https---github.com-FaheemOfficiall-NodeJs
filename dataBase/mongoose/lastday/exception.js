import socket from 'node:net'
socket.createServer()
console.log("hello");


try {
    console.log("try block")
    // sdfghjkl;
    throw 'user define err'

} catch (error) {
    // console.log(error.name);
    // console.log(error.mesaage);
    // console.log(error.stack);
    console.log(" err occured");
    console.log(error);

} finally {
    console.log('finally block');
}

console.log("hello world");
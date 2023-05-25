import net from "net"

const createserver= net.createServer((connection)=>{
    console.log("client is connected");
    connection.on('end',()=>{
        console.log('end server')
    })
    
    connection.write('wellcome to new client')
    connection.write('wellcome to new client2')

    connection.pipe(connection)

});


// createserver.on('connection',



createserver.listen(3000,()=>{
    console.log("server is running");
})
import net from 'net'

const client = net.connect({ port: 3000 }, () => {
    console.log('connected client side')
})

client.on('data', (data) => {
    console.log(data.toString());
    client.end()
})
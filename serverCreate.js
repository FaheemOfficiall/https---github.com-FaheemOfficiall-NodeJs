const http=require("http")
http.createServer(function(req,res)
{
    res.writeHead(200,{"Content-type":"text/plain"})
    res.end("hello Faheem is My First Server helllo World\n")


}).listen(8080,"127.0.0.1");

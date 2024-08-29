const JSONServer = require("json-server")

const MediaServer = JSONServer.create()

const router = JSONServer.router("db.json")

const middleWare = JSONServer.defaults()

const port = 3000 || process.env.port

MediaServer.use(middleWare)
MediaServer.use(router)

MediaServer.listen(port,() => {
    console.log(`mediaplayer server started at port: ${port} and waiting for the client request`);
    
})
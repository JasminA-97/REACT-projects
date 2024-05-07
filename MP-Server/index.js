//import json-server
const jsonServer = require('json-server')
//create server for media player app
const MPServer = jsonServer.create()
//create middleware used by JSON server
const middleware = jsonServer.defaults()
//set up route for JSON file in server
const route = jsonServer.router('db.json')
//set up port for running server aplication
const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})
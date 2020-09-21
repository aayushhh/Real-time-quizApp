const express = require('express')
const path = require('path')
const socketio= require('socket.io')
const http = require('http')
//initialization of app object
const app = express();
//Create a server bia http
const server = http.createServer(app)
// inititate the variable io with server for connecion
const io = socketio(server)
// we give a path for frontend
app.use('/', express.static(path.join(__dirname, 'Quiz App Master')))
//sed server cuz it  the same thing 
// app.listen(2345,() => console.log('Website hosted on port 2345'));

//For listening the client side 
io.on('connection',(socket)=>{
    console.log(" we got a forword from Client "+ socket.id)
    var id =socket.id
    socket.on('Nitin', (questionArray)=>{
        console.log(questionArray)
        socket.emit('msg',questionArray)
        console.log('')
        });
})
//server on the localhost
server.listen(2345,()=> console.log('Website hosted on port 2345'));
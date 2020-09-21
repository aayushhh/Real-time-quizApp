var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var port = 3000;

// static false
app.use(express.static('Quiz App Master'))

// app.use('./img', express.static(__dirname + 'public/img'))


//set views
// app.set('views','./views')
// app.set('view engine', 'ejs')

//get the index html file into ejs 
app.get('', (req, res) => {
    res.render('index', { text: 'this is ejs'})
})
app.get('', (req, res) => {
    res.render('game', { text: 'this is ejs'})
})





// //To display html page 
// app.get("", (res,req) => {
//     res.sendFile(__dirname +'/views/index.html')
// })






//Listen to port 3000
app.listen(port, () => console.info('Server listening on port$(port)'))
// function onRequest (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('./index.html', null, function (err, data) {
//       if (err){
//           response.writeHead(404);
//           response.write("File not found")
//       } else{
//           response.write(data);
//       }
//       response.end();
//   });
// }
// http.createServer(onRequest).listen(8080);

 
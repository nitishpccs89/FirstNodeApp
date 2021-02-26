var express = require('express');
const http = require('http');
const port=process.env.PORT || 3000
var app = express();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
    console.log(`Server running at port `+port);
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
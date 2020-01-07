//var cp = require('child_process');
//
//var n = cp.fork(__dirname + '/sub.js');
//
//n.on('message', function(m) {
//
//	console.log('PARENT got message:', m);
//	if( m == "end" ) process.exit();
//
//});
//
//
//var _interval = setInterval(function(){ n.send({ hello: 'world' }); },1000);

//const { exec } = require('child_process');
//exec('dir/w', (error, stdout, stderr) => {
//  if (error) {
//    console.error(`exec error: ${error}`);
//    return;
//  }
//  console.log(`stdout: ${stdout}`);
//  console.error(`stderr: ${stderr}`);
//});


//const EventEmitter = require('events');
//
//class MyEmitter extends EventEmitter {}
//
//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
//  console.log('an event occurred!');
//});
//myEmitter.emit('event');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
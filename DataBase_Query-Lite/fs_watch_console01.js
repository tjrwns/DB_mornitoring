var fs = require( "fs" );

//fs.watch("./Taobao-Daily - Lite_Data - 생성 - 2018 - 201804.dbjs.result",function(evt,filenm){
//
//	console.log( evt )
//
//
//})

//setTimeout(function(){
//	console.log( 1 )
//var fName = "test.txt"
//var fNameStat = fs.statSync(fName);
//  fs.watch( fName, function (event, filename) {
//    var fNameStatChanged = fs.statSync(fName);
//    console.log('file changed from ' + fNameStat.size + ' to ' + fNameStatChanged.size);
//
//    fs.open(fName, 'r', function(err, fd) {
//      var newDataLength = fNameStatChanged.size - fNameStat.size;
//      var buffer = new Buffer(newDataLength.toString() , 'utf-8');
//      fs.read(fd, buffer, 0, newDataLength, fNameStat.size, function (err, bytesRead, newData) {
//         if (err) {
//            console.log(err);
//         };
//         console.log(newData.toString());
//
//      });
//      fNameStat = fs.statSync(fName);
//    });
//
//  }); // fs.watch
// console.log( 2 )
////},2000)


var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('test.txt'),
    output: process.stdout,
    //console: false
	crlfDelay: Infinity
});

	rd.on('line', function(line) {
		console.log(line);
	});


  fs.watch( 'test.txt', function (event, filename) {
	 console.log( event )
	rd.on('resume', function() {
		console.log("resume");
	});


  }); // fs.watch



//
//var i = 0,iLen = 100000000;
//for(;i<iLen;++i){
//
//	fs.appendFileSync('test.txt', i.toString() + "\n" )
//
//}
//


//var stream = fs.createReadStream( "./test.txt" );
//
//
//stream.on( "data",function(data){ console.log( data.toString() ) })
//stream.on( "data",function(){ console.log( "end" ) })
//stream.on( "error",function(er){ console.log( er ) })


//fs.watchFile('test.text', (curr, prev) => {
//  console.log(`the current mtime is: ${curr.mtime}`);
//  console.log(`the previous mtime was: ${prev.mtime}`);
//});


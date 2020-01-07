var fs = require( "fs" );

//fs.watch("./Taobao-Daily - Lite_Data - 생성 - 2018 - 201804.dbjs.result",function(evt,filenm){
//
//	console.log( evt )
//
//
//})

var i = 0,iLen = 1000;
for(;i<iLen;++i){

	fs.appendFileSync('test.txt', i.toString() + "\n" )

}



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


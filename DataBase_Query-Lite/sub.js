var  i = 0
process.on('message', function(m){
	console.log('CHILD got message:', m);
	process.send({ foo: m });
	if( i == 10 ){
	process.send('end');
	process.exit();
	}
	++i;
});

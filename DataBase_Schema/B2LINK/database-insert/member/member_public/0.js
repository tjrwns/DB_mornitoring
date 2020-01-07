var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_public.remove({});

var _col$member_basic = db0.member_basic;

a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );

		delete io.mpw;
		delete io.bConn;

	db0.member_public.insert( io );
};
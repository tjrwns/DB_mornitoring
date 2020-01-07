var rr = {};
var r = [];

var db0 = db.getSiblingDB( "list_static" );
var col = db0.bank_swift_kr;
	col.find({}).forEach( function( doc ){
		if( !rr[ doc.city ] )
		{
			rr[ doc.city ] = 1;
			r.push( doc.city );
		}
	});
r = r.sort();

/*/
var r = ["ANSAN","BUSAN","DAEGU","INCHEON","JEJU","MASAN","PUSAN","SEONGNAM","SEOUL","SUWON-SI","UIWANG-SI","YONGIN-SI"];
var r0 = {};
var i=0, iLen=r.length;
for( ; i<iLen; ++i ) r0[ r[ i ] ] = [];


var db0 = db.getSiblingDB( "list_static" );
var col = db0.bank_swift_kr;
col.find({}).forEach( function( doc ){
		//doc._id = NumberInt( r0[ doc.city[ 0 ] ].length ) );
		r0[ doc.city ].push( doc );
	});
r0
/*/
var r = ["ANSAN","BUSAN","DAEGU","INCHEON","JEJU","MASAN","PUSAN","SEONGNAM","SEOUL","SUWON-SI","UIWANG-SI","YONGIN-SI"];
var r0 = {};
var i=0, iLen=r.length;
for( ; i<iLen; ++i ) r0[ r[ i ][ 0 ] ] = [];


var db0 = db.getSiblingDB( "list_static" );
var col = db0.bank_swift_kr;
col.find({}).forEach( function( doc ){
		//doc._id = NumberInt( r0[ doc.city[ 0 ] ].length ) );
		r0[ doc.city[ 0 ] ].push( doc );
	});
//r0;

var db1 = db.getSiblingDB( "list_static__bank_swift" );
var colNm = "bank_swift_kr__";
var io;
for( var s in r0 ){
	io = r0[ s ];
	var col = db1.getCollection( colNm + s );

	var a = io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i ){
		col.insert( a[ i ] );
	}
}
//*/
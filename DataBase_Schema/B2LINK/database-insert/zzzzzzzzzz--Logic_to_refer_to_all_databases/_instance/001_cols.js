var db0 = db.getSiblingDB( "_instance" );
var col = db0.getCollection( "dbs" );

var tCol = db0.getCollection( "cols" );
	tCol.remove({});

col.find({}).forEach( function( doc ){
	var db1 = db.getSiblingDB( doc._id );
	var cols = db1.getCollectionNames();
	var i=0, iLen=cols.length;
	for( ; i<iLen; ++i )
	{
		var nm_col = cols[ i ];
		print( "nm_col : " + nm_col );
		if( "system.js" != nm_col )
		{
			tCol.insert({ _id : nm_col, db : doc._id });
		}
	}
});
function( ids )
{
	print( "-- [ S ] - member_session$remove_ids():{uint}----------" );
	print( "ids : " + ids );
	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		r.push( member_session$_getCol().remove( p, 1 ) );
	}
	print( "result : " );
	printjson( r );
	print( "-- [ E ] - member_session$remove_ids():{uint}----------" );
	return 1;
}

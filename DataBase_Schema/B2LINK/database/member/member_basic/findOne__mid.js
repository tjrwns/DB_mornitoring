function ( mid )
{
	print( "-- [ S ] - member_basic$findOne__mid():{Document}----------" );

	print( "mid : " + mid );
	print( "member_basic$_getCol() - " + member_basic$_getCol() );

	var r = member_basic$findOne({ mid : mid });
	print( "- r -" );
	printjson( r );

	print( "-- [ E ] - member_basic$findOne__mid():{Document}----------" );

	return r;
}
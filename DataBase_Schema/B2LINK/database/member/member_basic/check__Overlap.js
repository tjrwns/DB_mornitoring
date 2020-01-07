function( d )
{
	print( "-- [ S ] - member_basic$check__Overlap():{uint}----------" );

	printjson( d );

	if( !d.email ){	return 0; }

	var r = member_basic$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - member_basic$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_basic$check__Overlap():{uint}----------return 1;" );
	return 1;
}
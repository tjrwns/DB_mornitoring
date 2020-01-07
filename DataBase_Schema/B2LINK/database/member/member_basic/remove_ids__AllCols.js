function( ids )
{
	print( "-- [ S ] - member_basic$remove_ids__AllCols():{uint}----------" );

	print( "ids : " + ids );

	var r = member_basic$remove_ids( ids );
		print( "member_basic result : " );
		printjson( r );

	var r = member_session$remove_ids( ids );
		print( "member_session result : " );
		printjson( r );

	var r = member_date$remove_ids( ids );
		print( "member_date result : " );
		printjson( r );

	print( "-- [ E ] - member_basic$remove_ids__AllCols():{uint}----------return 1;" );
	return 1;
}
function( _id )
{
	print( "-- [ S ] - member_basic$remove_id__AllCols():{uint}----------" );

	print( "_id : " + _id );

	var r = member_basic$remove_id( _id );
		print( "member_basic$remove_id( _id );" );
		print( r );

	var r = member_session$remove_id( _id );
		print( "member_session$remove_id( _id );" );
		print( r );

	var r = member_date$remove_id( _id );
		print( "member_date$remove_id( _id );" );
		print( r );

	print( "-- [ E ] - member_basic$remove_id__AllCols():{uint}----------return 1;" );
	return 1;
}
function( _id )
{
	print( "-- [ S ] - member_session$remove_id():{uint}----------" );

	print( "_id : " + _id );

	//if( !( _id > -1 ) ){
	if( !member_session$validation__remove_id( _id ) )
	{
		print( "-- [ E ] - member_session$remove_id():{uint}----------return 0;" );
		return 0;
	}

	var r = member_session$_getCol().remove( { _id : NumberInt( _id ) }, 1 );
	print( r );
	print( "-- [ E ] - member_session$remove_id():{uint}----------return 1;" );
	return 1;
}

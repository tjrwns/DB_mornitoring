function( n )
{
	print( "-- [ S ] - member_basic$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - member_basic$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - member_basic$validation__remove_id():{uint}----------return 0;" );
	return 0;
}
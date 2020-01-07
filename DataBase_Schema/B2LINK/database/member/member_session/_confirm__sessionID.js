function( sid )
{
	print( "-- [ S ] - member_session$_confirm__sessionID():{uint}----------" );

	if( !member_session$validation__sid( sid ) )
	{
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return -1;" );
		return -1;
	}

	var o = member_session$_findOne__sid( sid );
	if( o )
	{
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return o;" );
		return o;
	}
	else
	{
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return 0;" );
	return 0;
}
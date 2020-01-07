function( sid )
{
	print( "\n\n\n\n\n" );
	print( "-- [ S ] - member_session$checkSession__Expired__sid():{uint}----------" );

	print( "Input sid : " + sid );

	var r = member_session$_findOne__sid( sid );//printjson( r );
	if( !r )
	{
		print( "-- [ E ] - member_session$checkSession__Expired__sid():{uint}----------return 0;" );
		return 0;
	}

	var nExpired = member_session$checkSession__Expired( sid, r );
	print( "nExpired : " + nExpired );
	print( "\n-- [ E ] - member_session$checkSession__Expired__sid():{uint}----------return nExpired;" );
	print( "\n\n\n\n\n" );
	return nExpired;
}
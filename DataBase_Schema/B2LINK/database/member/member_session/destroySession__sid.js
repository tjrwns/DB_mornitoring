function( sid )
{
	print( "-- [ S ] - member_session$destroySession__sid():{uint}----------" );

	var r = member_session$_destroySession( member_session$_findOne__sid( sid ) );
		print( "result : " + r );

	print( "-- [ E ] - member_session$destroySession__sid():{uint}----------return r;" );
	return r;
}
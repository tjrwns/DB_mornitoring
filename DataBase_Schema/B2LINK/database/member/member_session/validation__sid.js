function( sid )
{
	print( "-- [ S ] - member_session$validation__sid():{uint}----------" );

	print( "session id - sid : " + sid );
	if( "" == sid || null == sid || "null" == sid )
	{
		print( 'if( "" == sid || null == sid || "null" == sid )' );
		print( new Error( "[ Error ] - Invalid session - sid : " + sid ) );
		print( new Error( "[ Error ] - 올바르지 않은 세션 - sid : " + sid ) );
		print( "-- [ E ] - member_session$validation__sid():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_session$validation__sid():{uint}----------return 1;" );
	return 1;
}
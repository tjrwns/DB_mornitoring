function( o )
{
	print( "-- [ S ] - member_session$_destroySession():{uint}----------" );

	print( "Input d : " );
	printjson( o );

	if( o )
	{
		if( o.d_ex )
		{
			//세션 시간 파괴된 후처리 로직 넣기;
			o.d_ex = null;
			o.sid = null;
			member_session$_update__Session( o );
			print( "-- [ E ] - member_session$_destroySession():{uint}----------return 1;" );
			return 1;
		}
	}

	print( "-- [ E ] - member_session$_destroySession():{uint}----------return 0;" );
	return 0;
}
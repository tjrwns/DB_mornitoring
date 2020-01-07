function( sid, so )
{
	print( "-- [ S ] - member_session$checkSession__Expired():{uint}----------" );

	//if( so )
	if( so && so.sid )
	//if( so && so.sid && so.d_ex )
	{
		var date_now = new Date();
		var date_expired = new Date( so.d_ex );
		print( "so.d_ex : " + so.d_ex );
		print( "date_n : " + date_now + " - Date Now" );
		print( "date_e : " + date_expired + " - Date - Expired" );

		if( date_now < date_expired && sid == so.sid )
		{
			//Session Check Log;
			print( "-- [ E ] - member_session$checkSession__Expired():{uint}----------return 1;" );
			return 1;
		}
		else
		{
			so.d_ex = null;
			so.sid = null;
			member_session$_update__Session( so );
			print( "-- [ E ] - member_session$checkSession__Expired():{uint}----------return 0;" );
			return 0;
		}
	}
}
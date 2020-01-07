function( d )
{
	print( "-- [ S ] - member_session$checkSession__Expired__mid():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	//Confirm - member_session.session id;
	var n = member_session$_confirm__sessionID( d.sid );
	if( -1 == n )
	{
		print( "var n = member_session$_confirm__sessionID( d.sid );" );
		print( new Error( "Session Error. - sid : " + d.sid ) );
		print( new Error( "세션 오류. - sid : " + d.sid ) );
		print( "-- [ E ] - member_session$checkSession__Expired__mid():{uint}----------return 0;" );
		return 0;
	}
	else if( 0 == n )//세션 문서가 없음;
	{
		print( "-- [ E ] - member_session$checkSession__Expired__mid():{uint}----------return 0;" );
		member_session$_destroySession( n );//의미 없음;
		member_session$_update__Session( d );
		member_session_log$addDoc( d );
		return 0;
	}
	else//동일한 세션 문서가 있음;
	{
		if( n.mid == d.mid )
		{
			var nExpired = member_session$checkSession__Expired( d.sid, n );
			print( "nExpired : " + nExpired );
			print( "-- [ E ] - member_session$checkSession__Expired__mid():{uint}----------if( n.mid == d.mid )	return nExpired;" );
			return nExpired;
		}
		else
		{
			member_session$_destroySession( n );
			print( new Error( "Do the same session connection - Remove Session. - mid : " + n.mid + "\n sid : " + n.sid ) );
			print( new Error( "동일한 세션이 접속 - 세션 제거. - mid : " + n.mid + "\n sid : " + n.sid ) );
			print( "-- [ E ] - member_session$checkSession__Expired__mid():{uint}----------return 0;" );
			return 0;
		}
	}
}
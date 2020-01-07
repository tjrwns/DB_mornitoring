function( d )
{
	print( "-- [ S ] - member_session$checkSession__Sign_In():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	//--------------------------------------------------;

	//Confirm - member_basic.member id;
	var o = member_basic$_findOne__mid( d.mid );
	if( !o )//o == null;
	{
		print( "var r = member_basic$findOne__mid( d.mid );" );
		print( new Error( "[ Error ] - The account does not exist. - " + d.mid ) );
		print( new Error( "[ Error ] - 이 계정은 존재하지 않음. - " + d.mid ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}

	//Confirm - member_basic.member password;
	var n = member_basic$_confirm__Password___update__nSignInFail( o, d.mpw );
	if( !n )//n == 0;
	{
		print( "var n = member_basic$_confirm__Password___update__nSignInFail( r, d.mpw );" );
		print( new Error( "[ Error ] - It exceeded the number of failed authentication account. - " + d.mid + " - Count : " + n ) );
		print( new Error( "[ Error ] - 이 계정의 인증 실패 횟수 초과. - " + d.mid + " - Count : " + n ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}

	//--------------------------------------------------;

	//Confirm - member_session.session id;
	var n = member_session$_confirm__sessionID( d.sid );
	if( -1 == n )
	{
		print( "var n = member_session$_confirm__sessionID( d.sid );" );
		print( new Error( "[ Error ] - Session Error. - sid : " + d.sid ) );
		print( new Error( "[ Error ] - 세션 오류. - sid : " + d.sid ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}
	else if( 0 == n )//세션 문서가 없음;
	{
		var r = member_session$_findOne__mid( d.mid );
		if( r )
		{
			print( "Update Session Document. - sid : " + d.sid );
			print( "세션 문서 업데이트. - sid : " + d.sid );
			d._id = o._id;
			member_session$_update__Session( d );
			member_date$update_lastSignIn( d );
			member_session_log$addDoc( d );
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 1;" );
			return 1;
		}
		else
		{
			print( "Create Session Document. - sid : " + d.sid );
			print( "세션 문서 생성. - sid : " + d.sid );
			member_session$_getCol().insert({
				_id : NumberInt( o._id )
				, d_ex : d.d_ex//date_expire;
				, mid : d.mid//member id;
				, sid : d.sid//session id;
			});
			member_date$update_lastSignIn( d );
			member_session_log$addDoc( d );
			member_session$checkSession__Sign_In( d );
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 1;" );
			return 1;
		}
	}
	else//동일한 세션 문서가 있음;
	{
		if( n.mid == d.mid )
		{
			var nExpired = member_session$checkSession__Expired( d.sid, n );
			print( "nExpired : " + nExpired );
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------if( n.mid == d.mid )	return nExpired;" );
			member_date$update_lastSignIn( d );
			member_session_log$addDoc( d );
			return nExpired;
		}
		else
		{
			member_session$_destroySession( n );
			print( new Error( "[ Error ] - Do the same session connection - Remove Session. - mid : " + n.mid + "\n sid : " + n.sid ) );
			print( new Error( "[ Error ] - 동일한 세션이 접속 - 세션 제거. - mid : " + n.mid + "\n sid : " + n.sid ) );
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
			return 0;
		}
	}

	print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
	return 0;
}
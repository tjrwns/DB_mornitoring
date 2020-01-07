function( d )
{
	print( "-- [ S ] - member_basic$sign_in():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	//Check - member_basic.member id;
	var r = member_basic$findOne__mid( d.mid );
	if( !r )
	{
		print( new Error( "존재하지 않는 계정." ) );
		print( "var r = member_basic$findOne__mid( d.mid );" );
		print( "-- [ E ] - member_basic$sign_in():{uint}----------if( !r )	return 0;" );
		return 0;
	}
	printjson( r );

	//Check - member_basic.sign in failue count;
	var n = member_basic$_check__nSignInFail( r );
	if( 0 == n )
	{
		print( new Error( "SignIn 시도가 5회 이상 실패." ) );
		//수정 - 20161012 - 송선우 - 테스트 - 로그인 횟수 제한;
		print( "var n = member_basic$_check__nSignInFail( r );" );
		//print( "-- [ E ] - member_basic$sign_in():{uint}----------if( 0 == member_basic$_check__nSignInFail( r ) )	return 0;" );
		//return 0;
	}

	//Check - member_basic.member password;
	if( 1 == member_basic$_confirm__Password( r, d.mpw ) )//'mpw'가 일치한다.;
	{
		member_basic$validation__sign_in( d );
		print( "-- [ E ] - member_basic$sign_in():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		//*/
		if( 0 == member_basic$_update__nSignInFail( r._id, ++r.nSignInFail ) )
		{
			print( "-- [ E ] - member_basic$sign_in():{uint}----------if( 0 == member_basic$_update__nSignInFail( r._id, ++r.nSignInFail ) )	return 0;" );
			return 0;
		}
		//*/
	}

	print( "-- [ E ] - member_basic$sign_in():{uint}----------return 0;" );
	return 0;
}
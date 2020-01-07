function( o, mpw )
{
	print( "-- [ S ] - member_basic$_confirm__Password___update__nSignInFail():{uint}----------" );

	//Confirm - member_basic.member password;
	var n = member_basic$_confirm__Password( o, mpw );
	if( 0 == n )
	{
		print( "o.nSignInFail : " + o.nSignInFail );
		member_basic$_update__nSignInFail( o._id, ++o.nSignInFail );
		print( "++o.nSignInFail : " + o.nSignInFail );

		print( "var n = member_basic$_confirm__Password( o, mpw );" );
		print( new Error( "Password mismatch. - " + d.mid + "/" + mpw ) );
		print( new Error( "비밀번호 불일치. - " + d.mid + "/" + mpw ) );
		print( "-- [ E ] - member_basic$_confirm__Password___update__nSignInFail():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_basic$_confirm__Password___update__nSignInFail():{uint}----------return 1;" );
	return 1;
}
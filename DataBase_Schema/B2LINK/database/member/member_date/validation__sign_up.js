function( d )
{
	print( "-- [ S ] - member_date$validation__sign_up():void----------" );

	try
	{
		d.d_l_si = {};
		d.d_su = {};
		d.d_sec = {};

		setDate__YMD_HoMiSe( d.d_l_si );
		setDate__YMD_HoMiSe( d.d_su );
		setDate__YMD_HoMiSe( d.d_sec );

		d.cd_rank = d.cd_rank ? d.cd_rank : NumberInt( 0 );
	}
	catch( er )
	{
		print( "member_date$validation__sign_up Error : " + er );
		print( "-- [ E ] - member_date$validation__sign_up():void----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_date$validation__sign_up():void----------return 1;" );
	return 1;
}
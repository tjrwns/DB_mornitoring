function( d )
{
	print( "-- [ S ] - member_basic$validation__addDoc():void----------" );

	d.bConn = NumberInt( d.bConn ) || -1;

	/*/
	d.d_l_si = validation_Date__YMD_HoMiSe( d.d_l_si || {} );
	d.d_su = validation_Date__YMD_HoMiSe( d.d_su || {} );
	d.d_sec = validation_Date__YMD_HoMiSe( d.d_sec || {} );
	//*/

	d.cd_rank = NumberInt( d.cd_rank ) || 0;

	//d.email = NumberInt( d.email );
	//d.email_id = NumberInt( d.email_id );
	//d.email_domain = NumberInt( d.email_domain );

	d.nSignInFail = NumberInt( d.nSignInFail ) || -1;

	print( "-- [ E ] - member_basic$validation__addDoc():void----------" );
	return d;
}
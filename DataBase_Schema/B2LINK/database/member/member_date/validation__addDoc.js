function( d )
{
	print( "-- [ S ] - member_date$validation__addDoc():void----------" );

	d.d_l_si = validation_Date__YMD_HoMiSe( d.d_l_si || { y : -1, m : -1, d : -1, ho : -1, mi : -1, se : -1 } );
	d.d_su = validation_Date__YMD_HoMiSe( d.d_su || { y : -1, m : -1, d : -1, ho : -1, mi : -1, se : -1 } );
	d.d_sec = validation_Date__YMD_HoMiSe( d.d_sec || { y : -1, m : -1, d : -1, ho : -1, mi : -1, se : -1 } );

	//d.email = NumberInt( d.email );
	//d.email_id = NumberInt( d.email_id );
	//d.email_domain = NumberInt( d.email_domain );

	//d.cd_rank = NumberInt( d.cd_rank ) || -1;

	print( "-- [ E ] - member_date$validation__addDoc():void----------" );
	return d;
}
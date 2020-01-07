function( d )
{
	print( "-- [ S ] - member_basic$validation__sign_in():void----------" );
	//printjson( d );
	setDate__YMD_HoMiSe( d.d_l_si || {} );

	//are you ok?;
	d.d_sec = validation_Date__YMD_HoMiSe( d.d_sec || {} );
	print( "-- [ E ] - member_basic$validation__sign_in():void----------" );
}
function( d )
{
	print( "-- [ S ] - member_basic$validation__sign_up():{uint}----------" );
	try
	{
		member_basic$validation__email( d );
	}
	catch( er )
	{
		print( colNm + "validation__sign_up Error : " + er );
		print( "-- [ E ] - member_basic$validation__sign_up():{uint}----------return 0;" );
		return 0;
	}

	//Sign up하면 무조건 cd_rank(등급)은 0;
	//추후 관리자가 등급 상향 시키기;
	d.cd_rank = d.cd_rank ? d.cd_rank : -1000;

	print( "-- [ E ] - member_basic$validation__sign_up():{uint}----------return 1;" );
	return 1;
}
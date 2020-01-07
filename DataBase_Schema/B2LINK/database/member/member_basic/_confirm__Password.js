function( o, mpw )
{
	print( "-- [ S ] - member_basic$_confirm__Password():{uint}----------" );

	print( "//--------------------------------------------------;" );
	print( "( " + o.mpw + " == " + mpw + " )" );
	print( "//--------------------------------------------------;" );

	if( o.mpw == mpw )
	{
		print( "-- [ E ] - member_basic$_confirm__Password():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - member_basic$_confirm__Password():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_basic$_confirm__Password():{uint}----------return 0;" );
	return 0;
}
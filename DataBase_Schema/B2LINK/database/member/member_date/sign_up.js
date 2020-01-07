function( d )
{
	print( "-- [ S ] - member_date$sign_up():{uint}----------" );

	printjson( d );

	var doc = member_basic$findOne__mid( d.mid );
		print( "- doc -" );
		printjson( doc );

	if( doc )
	{
		var doc = member_date$findOne__mid( d.mid );
		if( doc )
		{
			print( "-- [ E ] - member_date$sign_up():{uint}----------return 0 - if( doc )" );
			return 0;
		}
		else
		{
			print("- doc else d -" );
			printjson( d );
			member_date$addDoc( d );
			return 1;
		}
	}
	else
	{
		print("- d -" );
		printjson( d );
		member_date$addDoc( d );
		print( "-- [ E ] - member_date$sign_up():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - member_date$sign_up():{uint}----------return 0;" );
	return 0;
}
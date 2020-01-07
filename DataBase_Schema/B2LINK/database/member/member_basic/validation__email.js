function( d )
{
	print( "-- [ S ] - member_basic$validation__email():{uint}----------" );
	if( d.email || ( d.email_id && d.email_domain ) )
	{
		if( d.email )
		{
			var a = d.email.split( "@" );
			d.email_id = a[ 0 ];
			d.email_domain = a[ 1 ];
		}
		else if( d.email_id && d.email_domain ) d.email = d.email_id + "@" + d.email_domain;
		else
		{
			print( "'email', 'email_id', 'email_domain' none." );
			print( "-- [ E ] - member_basic$validation__email():{uint}----------return 0;" );
			return 0;
		}

		print( "-- [ E ] - member_basic$validation__email():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - member_basic$validation__email():{uint}----------return 0;" );
	return 0;
}
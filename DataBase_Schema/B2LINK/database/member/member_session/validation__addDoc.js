function( d )
{
	print( "-- [ S ] - member_session$validation__addDoc():{uint|Object}----------" );

	if( d.mid )
	{
	}
	else
	{
		print( "-- [ E ] - member_session$validation__addDoc():{uint|Object}----------return 0;" );
		return 0;
	}

	/*/
	if( d.sid )
	{
	}
	else
	{
		print( "-- [ E ] - member_session$validation__addDoc():{uint|Object}----------return 0;" );
		return 0;
	}
	//*/

	print( "-- [ E ] - member_session$validation__addDoc():{uint|Object}----------return d;" );
	return d;
}
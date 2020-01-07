function( d )
{
	print( "-- [ S ] - member_session$getSession():{uint|Object}----------" );
	//print( "mid : " + mid );
	var r = member_session$_findOne__mid( d.mid );
	if( r )
	{
		print( "-- [ E ] - member_session$getSession():{uint|Object}----------return r;" );
		return r;
	}
	else
	{
		print( "-- [ E ] - member_session$getSession():{uint|Object}----------return 0;" );
		return 0;
	}
}
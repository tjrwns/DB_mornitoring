function( sid )
{
	//print( "-- [ S ] - member_session$findOne__sid():{uint}----------" );

	var r = member_session$findOne__sid( sid );

	//print( "-- [ E ] - member_session$findOne__sid():{uint}----------" );
	return r._id;
}
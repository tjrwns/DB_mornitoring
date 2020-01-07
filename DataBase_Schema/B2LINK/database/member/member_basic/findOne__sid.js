function( sid )
{
	print( "-- [ S ] - member_basic$findOne__sid():{Object}----------" );

	var o = member_session$findOne__sid( sid );
	if( o ) o = member_basic$_findOne___id( o._id );

	print( "-- [ E ] - member_basic$findOne__sid():{Object}----------" );

	return o;
}
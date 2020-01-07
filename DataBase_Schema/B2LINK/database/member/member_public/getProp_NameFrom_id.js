function( _id )
{
	//print( "-- [ S ] - member_public$getProp_NameFrom_id():{String}----------" );

	var r = member_public$_findOne___id( _id );

	//print( "-- [ E ] - member_public$getProp_NameFrom_id():{String}----------" );
	return r.nm.a;
}
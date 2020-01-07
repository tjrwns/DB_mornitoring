function( _id )
{
	//print( "-- [ S ] - member_basic$findOne___id():{Document}----------" );
	//print( "-- [ E ] - member_basic$findOne___id():{Document}----------" );

	return member_basic$findOne({ _id : _id });
}
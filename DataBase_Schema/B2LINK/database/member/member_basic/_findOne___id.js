function( _id )
{
	//print( "-- [ S ] - member_basic$_findOne___id():{Object}----------" );
	//print( "-- [ E ] - member_basic$_findOne___id():{Object}----------" );
	return member_basic$_getCol().findOne({ _id : _id });
}
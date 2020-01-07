function( _id )
{
	//print( "-- [ S ] - member_public$_findOne___id():{Object}----------" );
	//print( "-- [ E ] - member_public$_findOne___id():{Object}----------" );
	return member_public$_getCol().findOne({ _id : _id });
}
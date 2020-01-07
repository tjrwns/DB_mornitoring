function( mid )
{
	//print( "-- [ S ] - member_basic$_findOne__mid():{Object}----------" );
	//print( "-- [ E ] - member_basic$_findOne__mid():{Object}----------" );
	return member_basic$_getCol().findOne({ mid : mid });
}
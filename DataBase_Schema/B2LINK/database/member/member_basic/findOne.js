function( d )
{
	print( "-- [ S ] - member_basic$findOne():{Document}----------" );
	printjson( d );

	var o = member_basic$_getCol().findOne( d );
	if( o ) member_basic$_delete__findOne_Common( o );

	print( "-- [ E ] - member_basic$findOne():{Document}----------" );
	return o;
}
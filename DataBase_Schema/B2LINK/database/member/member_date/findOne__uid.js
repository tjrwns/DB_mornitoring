function( uid )
{
	print( "-- [ S ] - member_date$findOne__uid():void----------" );
	print( "uid : " + uid );
	print( "member_date$_getCol() - " + member_date$_getCol() );
	print( "-- [ E ] - member_date$findOne__uid():void----------" );
	return member_date$findOne( { uid : uid } );
}
function( mid )
{
	print( "-- [ S ] - member_date$findOne__mid():void----------" );
	print( "mid : " + mid );
	print( "member_date$_getCol() - " + member_date$_getCol() );
	print( "-- [ E ] - member_date$findOne__mid():void----------" );
	return member_date$findOne({ mid : mid });
}
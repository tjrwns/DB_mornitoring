function()
{
	print( "-- [ S ] - member_date$getAllList():void----------" );
	var r = [];
	member_date$_findAll().forEach( function( doc ){ r.push( doc ); });
	print( "-- [ E ] - member_date$getAllList():void----------" );
	return r;
}
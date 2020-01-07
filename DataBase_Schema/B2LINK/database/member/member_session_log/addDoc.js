function( d )
{
	print( "-- [ S ] - member_session_log$addDoc():void----------" );
	print( "session_log : " );
	printjson( d );
	var len = member_session_log$_findAll().count();
	d._id = NumberInt( len );
	d.date = getDate__YMD_HoMiSeMil();
	member_session_log$_getCol().insert( d );
	print( "-- [ E ] - member_session_log$addDoc():void----------" );
	return 1;
}
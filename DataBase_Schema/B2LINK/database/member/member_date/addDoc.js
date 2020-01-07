function( d )
{
	print( "-- [ S ] - member_date$addDoc():void----------" );
	var col = member_date$_getCol();
	var len = member_date$_findAll().count();

	d.d_su = getDate__YMD_HoMiSeMil();

	var r = member_date$validation__addDoc( d );
	if( 0 == r )
	{
		print( "-- [ E ] - member_date$addDoc():void----------if( 0 == r )" );
		return 0;
	}
	col.insert({
		_id : NumberInt( len )
		, d_l_si : r.d_l_si
		, d_sec : r.d_sec
		, d_su : r.d_su
		, mid : r.mid
	});

	print( "-- [ E ] - member_date$addDoc():void----------col.insert({" );
	return 1;
}
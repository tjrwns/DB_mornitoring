function( d )
{
	print( "-- [ S ] - member_basic$update():{uint}----------" );

	printjson( d );

	delete d._id;
	delete d.sid;
	delete d.d_ex;
	delete d.nCached;

	try {
		member_basic$_getCol().update(
			{ mid : d.mid },
			{
				$set : d
			}
		);
	} catch (err) {
		return 0;
	}

	print( "-- [ S ] - member_basic$update():{uint}----------" );
	return 1;
}

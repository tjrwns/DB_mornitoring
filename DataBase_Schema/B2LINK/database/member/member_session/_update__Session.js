function( d )
{
	print( "-- [ S ] - member_session$_update__Session():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	var oSearch = { _id : d._id };
	var oModify = {
		$set : {
			d_ex : d.d_ex
			//, mid : d.mid
			, sid : d.sid
		}
	};
	var option_update = { upsert : false };
	//var o = member_session$_findOne___id( d._id );
	member_session$_getCol().update( oSearch, oModify, option_update );

	print( "-- [ E ] - member_session$_update__Session():{uint}----------return 1;" );
	return 1;
}
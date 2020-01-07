function( d )
{
	print( "-- [ S ] - member_date$update_lastSignIn():void----------" );
	print( "Input d : " );
	printjson( d );

	var currentDate  = getDate__YMD_HoMiSeMil();

	var col = member_date$_getCol();
	var oSearch = { _id : d._id };
	var oModify = {
		$set : {
			d_l_si : currentDate
		}
	};
	var option_update = { upsert : false };

	col.update( oSearch, oModify, option_update );

	print( "-- [ E ] - member_date$update_lastSignIn():void----------col.update({" );
	return 1;
}

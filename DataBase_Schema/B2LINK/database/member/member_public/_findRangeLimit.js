function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - member_public$_findRange():{Array}----------" );

	/*/
	var r = [];
	member_public$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			member_public$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - member_public$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - member_public$_findRange():{Array}----------" );

	return member_public$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
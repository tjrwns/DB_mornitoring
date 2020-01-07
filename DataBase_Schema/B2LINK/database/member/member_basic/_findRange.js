function( _id_gt, _id_lt )
{
	print( "-- [ S ] - member_basic$_findRange():{Array}----------" );

	/*/
	var r = [];
	member_basic$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			member_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - member_basic$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - member_basic$_findRange():{Array}----------" );

	return member_basic$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
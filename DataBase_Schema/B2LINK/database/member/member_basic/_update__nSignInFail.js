function( _id, nSignInFail )
{
	print( "-- [ S ] - member_basic$_update__nSignInFail():{uint}----------" );

	print( "_id : " + _id );
	print( "nSignInFail : " + nSignInFail );

	member_basic$_getCol().update(
		{ _id : _id }//search Object;
		, {
			$set : { nSignInFail : NumberInt( nSignInFail ) }
		}
		, { upsert : false }
	);

	print( "-- [ E ] - member_basic$_update__nSignInFail():{uint}----------return 1;" );
	return 1;
}
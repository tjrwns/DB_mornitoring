function ( _id )
{
	return member_public$_getCol().findOne( { "_id" : _id } );
}
function( nmCol, oSearch )
{
	return _getDB().getCollection( nmCol ).findOne( oSearch );
}
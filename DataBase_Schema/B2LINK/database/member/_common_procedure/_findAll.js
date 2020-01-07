function( nmCol )
{
	return _getDB().getCollection( nmCol ).find();
}
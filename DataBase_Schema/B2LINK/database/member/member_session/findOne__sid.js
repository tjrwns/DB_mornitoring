function( sid )
{
	var o = member_session$_getCol().findOne({ sid : sid });
	member_session$_delete__findOne__sid( o );
	return o;
}
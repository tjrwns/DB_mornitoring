function( _id )
{
	return member_session$findOne({ _id : _id });
}
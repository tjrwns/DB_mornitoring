function( sid )
{
	return member_session$findOne({ sid : sid });
}
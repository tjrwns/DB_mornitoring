function( uid )
{
	return member_session$findOne({ uid : uid });
}
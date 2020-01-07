function( d )
{
	print(d.messenger_id)
	print( "-- [ S ] - member_public$addDoc():{uint}----------" );
	var col = member_public$_getCol();
	var len = member_public$_findAll().count();
	var r = member_public$validation__addDoc( d );
	print( "r : " + r );

	if( 0 != r )
	{
	print("asdfasdfasdfasdf",r)
		col.insert({
			_id : NumberInt( len )

			,cd_div : r.cd_div

			, cd_div_team : r.cd_div_team

			, email : r.email

			, phone_cell : r.phone_cell

			, phone_tel : r.phone_tel

			, messenger: {
				_id$messenger: NumberInt(r.messenger._id$messenger)
				, id: r.messenger.id
			}

			, nm : r.nm, nm_cn : r.nm_cn, nm_kr : r.nm_kr, nm_us : r.nm_us
		});

		print( "-- [ E ] - member_public$addDoc():{uint}----------return 1;" );
		return 1;
	}

   print( "-- [ E ] - member_public$addDoc():{uint}----------return 0;" );
   return 0;
}
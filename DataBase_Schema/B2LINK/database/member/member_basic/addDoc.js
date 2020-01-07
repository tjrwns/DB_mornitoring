function( d )
{
	print( "-- [ S ] - member_basic$addDoc():{uint}----------" );
	var col = member_basic$_getCol();
	var len = member_basic$_findAll().count();

	var r = member_basic$validation__addDoc( d );
	print( "r : " + r );
	var data;
	if( 0 != r )
	{
		data = {

			_id: NumberInt(len)

			, bConn: r.bConn

			, cd_rank: r.cd_rank

			, cd_div: r.cd_div

			, cd_div_team: r.cd_div_team

			, email: r.email

			, email_id: r.email_id

			, email_domain: r.email_domain

			, phone_cell: r.phone_cell

			, phone_tel: r.phone_tel

			, messenger: {
				_id$messenger: NumberInt(r._id$messenger)
				, id: r.messenger_id
			}

			, mid: r.mid, mpw: r.mpw

			, nm: r.nm, nm_cn: r.nm_cn, nm_kr: r.nm_kr, nm_us: r.nm_us

			, nSignInFail: r.nSignInFail
		}

		col.insert(data);
		member_public$addDoc(data);

		print( "-- [ E ] - member_basic$addDoc():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - member_basic$addDoc():{uint}----------return 0;" );
	return 0;
}
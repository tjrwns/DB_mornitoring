function ( _skip, _limit, _searchDivision, _searchTeam, _searchType, _searchKeyword )
{
	print( "-- [ S ] - member_public$getSearchList():{Array}----------" );

	var r = [];
	if ( _skip < 0 || _limit < 1 || _searchType == "" ) return r;

	var oFind = {};
	if ( _searchDivision != "" ) oFind[ "cd$category_division" ] = _searchDivision;
	if ( _searchTeam != "" ) oFind[ "cd$category_division_team" ] = _searchTeam;
	if ( _searchKeyword == "" ) _searchKeyword = ".*";
	oFind[_searchType] = { $regex : eval( "/" + _searchKeyword + "/i") }; //필수값

	var oSort = {};
	if ( _searchDivision != "") oSort[ "cd$category_division" ] = 1;
	if ( _searchTeam != "") oSort[ "cd$category_division_team" ] = 1;
	oSort[ "nm.a" ] = 1;
	oSort[ "email" ] = 1;

	member_public$_getCol().find(
		oFind
		, { "_id" : true, "cd$category_division" : true, "cd$category_division_team" : true, "email" : true, "nm" : true, "phone_cell" : true, "phone_tel" : true }
	)
	//.sort( { "cd$category_division" : 1, "cd$category_division_team" : 1, "nm.a" : 1, "email" : 1 } )
	.sort( oSort )
	.skip( NumberInt( _skip ) )
	.limit( NumberInt( _limit ) )
	.forEach( function( doc ) {
		doc.seq = ++_skip;
		r.push( doc );
	});

	print( "-- [ E ] - member_public$getSearchList():{Array}----------return r;" );
	return r;
}

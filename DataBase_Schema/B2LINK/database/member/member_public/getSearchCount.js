function ( _searchDivision, _searchTeam, _searchType, _searchKeyword )
{
	print( "-- [ S ] - member_public$getSearchCount():{Array}----------" );

	var r = 0;
	if ( _searchType == "" ) return r;

	var oFind = {};
	if ( _searchDivision != "" ) oFind[ "cd$category_division" ] = _searchDivision;
	if ( _searchTeam != "" ) oFind[ "cd$category_division_team" ] = _searchTeam;
	if ( _searchKeyword == "" ) _searchKeyword = ".*";
	oFind[_searchType] = { $regex : eval( "/" + _searchKeyword + "/i") }; //필수값

	r = member_public$_getCol().find(
		oFind
	).count();

	print( "-- [ E ] - member_public$getSearchCount():{Array}----------return r;" );
	return r;
}

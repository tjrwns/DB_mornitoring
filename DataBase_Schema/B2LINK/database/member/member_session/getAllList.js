function()
{
	var r = [];
	member_session$_findAll().forEach( function( doc ){
		r.push( doc );
	});
	return r;
}
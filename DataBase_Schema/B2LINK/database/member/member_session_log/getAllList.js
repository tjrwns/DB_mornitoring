function()
{
	var r = [];
	member_session_log$_findAll().forEach( function( doc ){
		r.push( doc );
	});
	return r;
}
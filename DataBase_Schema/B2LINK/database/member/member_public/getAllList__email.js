function()
{
	var r = [];
	member_public$_findAll().forEach( function( doc ){
		r.push( doc.email );
	});
	return r;
}
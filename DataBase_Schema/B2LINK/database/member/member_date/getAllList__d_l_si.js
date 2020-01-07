function()
{
	var r = [];
	member_date$_findAll().forEach( function( doc ){
		r.push( doc.d_l_si );
	});
	return r;
}
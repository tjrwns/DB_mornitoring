function()
{
	var r = [];
	member_basic$_findAll().forEach( function( doc ){
		member_basic$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}
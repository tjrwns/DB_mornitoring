function ( d ) {

	print( "-- [ S ] - member_basic$updateList():void----------" );

	printjson(d);

	var members = d.update_ids;
		members = JSON.parse(members);

	members.forEach(function(member) {
		member_basic$update(member);
	});

	return 1;

	print( "-- [ S ] - member_basic$updateList():void----------" );
}

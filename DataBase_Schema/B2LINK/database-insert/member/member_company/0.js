var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_company.remove({});

var _col$member_basic = db0.member_basic;

a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a[ i ].mid

		, cd$category_company : "CCI001"
		, cd$category_division : a[ i ].cd$category_division
		, cd$category_division_team : a[ i ].cd$category_division_team
		, cd$category_division_part : a[ i ].cd$category_division_part
	};

	db0.member_company.insert( io );
};
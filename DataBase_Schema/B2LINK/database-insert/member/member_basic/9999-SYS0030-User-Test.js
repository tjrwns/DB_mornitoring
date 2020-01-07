//----------------------------------------------------------------------------------------------------;

//	SYS0030(BrandPortal) Test User 계정;

//----------------------------------------------------------------------------------------------------;

var a = [
	{
		"mid" : "paparecipe@gmail.com", "mpw" : "paparecipe@gmail.com", "bConn" : 0
		, "cd$authority_code" : 30100, "cd$category_division" : undefined, "cd$category_division_team" : undefined, "cd$category_division_part" : undefined
		, "email" : "paparecipe@gmail.com", "messenger" : {}
		, "nm" : { "a" : "paparecipe", "f" : undefined, "l" : undefined }, "nm_cn" : {}, "nm_kr" : {}, "nm_us" : {}
		, "nSignInFail" : 0
		, "phone_cell" : {}, "phone_tel" : {}
	}
	, { "mid" : "leaders@gmail.com", "mpw" : "leaders@gmail.com", "bConn" : 0
		, "cd$authority_code" : 30100, "cd$category_division" : undefined, "cd$category_division_team" : undefined, "cd$category_division_part" : undefined
		, "email" : "leaders@gmail.com", "messenger" : {}
		, "nm" : { "a" : "leaders", "f" : undefined, "l" : undefined }, "nm_cn" : {}, "nm_kr" : {}, "nm_us" : {}
		, "nSignInFail" : 0
		, "phone_cell" : {}, "phone_tel" : {}
	}
	, { "mid" : "ahc@gmail.com", "mpw" : "ahc@gmail.com", "bConn" : 0
		, "cd$authority_code" : 30100, "cd$category_division" : undefined, "cd$category_division_team" : undefined, "cd$category_division_part" : undefined
		, "email" : "ahc@gmail.com", "messenger" : {}
		, "phone_cell" : {}, "phone_tel" : {}
		, "nm" : { "a" : "ahc", "f" : undefined, "l" : undefined }, "nm_cn" : {}, "nm_kr" : {}, "nm_us" : {}
		, "nSignInFail" : 0
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );

var len = db0.member_basic.find({}).count();

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( len + i );
		io.bConn = NumberInt( io.bConn );
		io.cd$authority_code = NumberInt( io.cd$authority_code );
		io.nSignInFail = NumberInt( io.nSignInFail );

	db0.member_basic.insert( io );
};
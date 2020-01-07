//----------------------------------------------------------------------------------------------------;

//	SYSTEM ACCOUNT;

//----------------------------------------------------------------------------------------------------;

var a = [
	  { mid : "b2ker@b2link.co.kr", cd$authority_code : 20000001, nm : { a : "CEO" } }
	, { mid : "brandportal@b2link.co.kr", cd$authority_code : 30000001, nm : { a : "CFO" } }
	, { mid : "excelserver@b2link.co.kr", cd$authority_code : 60000001, nm : { a : "CSO" } }
	, { mid : "sessionserver@b2link.co.kr", cd$authority_code : 10000001, nm : { a : "COO" } }

	, { mid : "sys0010@b2link.co.kr", cd$authority_code : 10000001, nm : { a : "Session Server" } }
	, { mid : "SYS0010@b2link.co.kr", cd$authority_code : 10000001, nm : { a : "Session Server" } }

	, { mid : "sys0015@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "Components Server" } }
	, { mid : "SYS0015@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "Components Server" } }

	, { mid : "sys0020@b2link.co.kr", cd$authority_code : 20000001, nm : { a : "B2Ker" } }
	, { mid : "SYS0020@b2link.co.kr", cd$authority_code : 20000001, nm : { a : "B2Ker" } }

	, { mid : "sys0030@b2link.co.kr", cd$authority_code : 30000001, nm : { a : "BrandPortal" } }
	, { mid : "SYS0030@b2link.co.kr", cd$authority_code : 30000001, nm : { a : "BrandPortal" } }

/*/
	, { mid : "sys0040@b2link.co.kr", cd$authority_code : 40000001, nm : { a : "SYS0040" } }
	, { mid : "SYS0040@b2link.co.kr", cd$authority_code : 40000001, nm : { a : "SYS0040" } }

	, { mid : "sys0050@b2link.co.kr", cd$authority_code : 50000001, nm : { a : "SYS0050" } }
	, { mid : "SYS0050@b2link.co.kr", cd$authority_code : 50000001, nm : { a : "SYS0050" } }

	, { mid : "sys0060@b2link.co.kr", cd$authority_code : 60000001, nm : { a : "SYS0060" } }
	, { mid : "SYS0060@b2link.co.kr", cd$authority_code : 60000001, nm : { a : "SYS0060" } }

	, { mid : "sys0070@b2link.co.kr", cd$authority_code : 70000001, nm : { a : "SYS0070" } }
	, { mid : "SYS0070@b2link.co.kr", cd$authority_code : 70000001, nm : { a : "SYS0070" } }

	, { mid : "sys0080@b2link.co.kr", cd$authority_code : 80000001, nm : { a : "SYS0080" } }
	, { mid : "SYS0080@b2link.co.kr", cd$authority_code : 80000001, nm : { a : "SYS0080" } }

	, { mid : "sys0090@b2link.co.kr", cd$authority_code : 90000001, nm : { a : "SYS0090" } }
	, { mid : "SYS0090@b2link.co.kr", cd$authority_code : 90000001, nm : { a : "SYS0090" } }

	, { mid : "sys0100@b2link.co.kr", cd$authority_code : 100000001, nm : { a : "SYS0100" } }
	, { mid : "SYS0100@b2link.co.kr", cd$authority_code : 100000001, nm : { a : "SYS0100" } }
//*/
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );

var len = db0.member_basic.find({}).count();

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( len + i );
		io.bConn = NumberInt( 0 );
		//io.nSignInFail = NumberInt( io.nSignInFail );
		io.nSignInFail = NumberInt( 0 );

		io.cd$authority_code = NumberInt( io.cd$authority_code );
		io.email = io.mid;
		io.mpw = "b2labs2017!";

		if( !io.cd$category_division ) io.cd$category_division = "System";
		if( !io.cd$category_division_team ) io.cd$category_division_team = "";
		if( !io.cd$category_division_part ) io.cd$category_division_part = "";

		if( !io.messenger ) io.messenger = { cd$messenger : "", id : "" };

		if( !io.nm.f ) io.nm.f = io.nm.a;
		if( !io.nm.l ) io.nm.l = io.nm.a;

		if( !io.nm_cn ) io.nm_cn = { a : io.nm.a, f : io.nm.f, l : io.nm.l };
		if( !io.nm_kr ) io.nm_kr = { a : io.nm.a, f : io.nm.f, l : io.nm.l };
		if( !io.nm_us ) io.nm_us = { a : io.nm.a, f : io.nm.f, l : io.nm.l };

		if( !io.phone_cell ) io.phone_cell = { f : "", c : "", a : "", n0 : "", n1 : "" };
		if( !io.phone_tel ) io.phone_tel = { f : "+", c : "", a : "", n0 : "", n1 : "" };

	db0.member_basic.insert( io );
};
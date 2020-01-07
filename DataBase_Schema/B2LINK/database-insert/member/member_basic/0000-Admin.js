//----------------------------------------------------------------------------------------------------;

//	ADMINISTRATOR ACCOUNT;

//----------------------------------------------------------------------------------------------------;

var a = [
	  { mid : "admin@b2link.co.kr"			, cd$authority_code : 50000004, nm : { a : "Admin" } }
	, { mid : "administrator@b2link.co.kr"	, cd$authority_code : 50000004, nm : { a : "Administrator" } }
	, { mid : "b2labs@b2link.co.kr"			, cd$authority_code : 50000004, nm : { a : "B2Labs" } }
	, { mid : "b2link@b2link.co.kr"			, cd$authority_code : 50000004, nm : { a : "B2LiNK" } }
	, { mid : "dev@b2link.co.kr"			, cd$authority_code : 50000004, nm : { a : "B2Labs" } }
];

var db0 = db.getSiblingDB( "member" );

	//필수;
	db0.member_basic.remove({});

	//옵션;
	db0.member_company.remove({});

	//필수;
	db0.member_date.remove({});

	//옵션;
	db0.member_option.remove({});

	//필수 또는 옵션 property중 노출이 되어도 상관없는 property 모음;
	db0.member_public.remove({});

	//필수;
	db0.member_session.remove({});

	//옵션;
	db0.member_session_log.remove({});

	//옵션;
	db0.member_webhook.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
		io.bConn = NumberInt( 0 );
		//io.nSignInFail = NumberInt( io.nSignInFail );
		io.nSignInFail = NumberInt( 0 );

		io.cd$authority_code = NumberInt( io.cd$authority_code );
		io.email = io.mid;
		io.mpw = "b2labs2017!";

		if( !io.cd$category_division ) io.cd$category_division = "BLS";
		if( !io.cd$category_division_team ) io.cd$category_division_team = "DEV";
		if( !io.cd$category_division_part ) io.cd$category_division_part = "DEV";

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
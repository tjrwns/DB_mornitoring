//----------------------------------------------------------------------------------------------------;

//	TEAM ACCOUNT;

//----------------------------------------------------------------------------------------------------;

var a = [

	//B2Labs - Admin;
	//{ mid : "b2labs@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BSD" } }

	//Brand Incubation Division;
	  { mid : "bid-BD@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BID-BD" } }
	, { mid : "bid-pp@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BID-PP" } }
	, { mid : "bid-sa@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BID-SA" } }

	//Brand Sales Division;
	, { mid : "bsd-bm@b2link.co.kr" , cd$authority_code : 50000004, nm : { a : "BSD-BM" } }
	, { mid : "bsd-ofl@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BSD-OFL" } }
	, { mid : "bsd-onl@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BSD-ONL" } }
	, { mid : "bsd-so@b2link.co.kr" , cd$authority_code : 50000004, nm : { a : "BSD-SO" } }
	, { mid : "bsd-log@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "BSD-LOG" } }

	//Shared Service Division;
	, { mid : "ssd-fi@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-FI" } }
	, { mid : "ssd-ge@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-GE" } }
	, { mid : "ssd-gs@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-GS" } }
 	, { mid : "ssd-hr@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-HR" } }
	, { mid : "ssd-pr@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-PR" } }
	, { mid : "ssd-st@b2link.co.kr", cd$authority_code : 50000004, nm : { a : "SSD-ST" } }
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

		if( !io.cd$category_division ) io.cd$category_division = "Team";
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
require( "../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "_global.mongo.exec-localhostː＊＊＊＊＊.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;

require( "../../Development-NodeJS_Modules/js/mongodb/__define/000_define_global.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

SUtilMongoDB.exportImportCreator({
	EXPORT : {
		mongodb_version : "4.0.10"

		//, host : "localhost", port : 55523//B2LiNK-MongoDB-OnSight--JD-Daily;
		//, host : "localhost", port : 55524//B2LiNK-MongoDB-OnSight--JD-List;

		//, host : "localhost", port : 55525//B2LiNK-MongoDB-OnSight--Kaola;
		//, host : "localhost", port : 55529//B2LiNK-MongoDB-OnSight--Kaola--Review;

		, host : "localhost", port : 55526//B2LiNK-MongoDB-OnSight--Taobao-Daily;
		//, host : "localhost", port : 55527//B2LiNK-MongoDB-OnSight--Taobao-List;
		//, host : "localhost", port : 55531//B2LiNK-MongoDB-OnSight--Taobao-Review;

		//, host : "localhost", port : 55528//B2LiNK-MongoDB-OnSight--VIP;
		//, host : "localhost", port : 55530//B2LiNK-MongoDB-OnSight--VIP--Review;

		//, host : "localhost", port : 55532//B2LiNK-MongoDB-OnSight--Lazada-Daily;
		//, host : "localhost", port : 55533//B2LiNK-MongoDB-OnSight--Lazada-List;
		//, host : "localhost", port : 55534//B2LiNK-MongoDB-OnSight--Lazada--Review;

		//, host : "localhost", port : 55535//B2LiNK-MongoDB-OnSight--Shopee-Daily;
		//, host : "localhost", port : 55536//B2LiNK-MongoDB-OnSight--Shopee-List;
		//, host : "localhost", port : 55537//B2LiNK-MongoDB-OnSight--Shopee-Review;


		//, host : "192.168.1.230", port : 57321//BatchPC - OnSight-ChinaCrawler-DB-1;


		//, host : "222.239.10.122", port : 55421//122 - B2LiNK-OnSight-Tool-SKUMapper;

		, authenticationDatabase : "admin", username : "b2link", password : "qlxnfldzmdb2017_"
		, query : '"{}"'
		, db : '""'
		, collection : '""'
		, out : '""'
	}
	, IMPORT : {
		mongodb_version : "4.0.10"

		//, host : "localhost", port : 55523//B2LiNK-MongoDB-OnSight--JD-Daily;
		//, host : "localhost", port : 55524//B2LiNK-MongoDB-OnSight--JD-List;

		//, host : "localhost", port : 55525//B2LiNK-MongoDB-OnSight--Kaola;
		//, host : "localhost", port : 55529//B2LiNK-MongoDB-OnSight--Kaola--Review;

		, host : "localhost", port : 55526//B2LiNK-MongoDB-OnSight--Taobao-Daily;
		//, host : "localhost", port : 55527//B2LiNK-MongoDB-OnSight--Taobao-List;
		//, host : "localhost", port : 55531//B2LiNK-MongoDB-OnSight--Taobao-Review;

		//, host : "localhost", port : 55528//B2LiNK-MongoDB-OnSight--VIP;
		//, host : "localhost", port : 55530//B2LiNK-MongoDB-OnSight--VIP--Review;

		//, host : "localhost", port : 55532//B2LiNK-MongoDB-OnSight--Lazada-Daily;
		//, host : "localhost", port : 55533//B2LiNK-MongoDB-OnSight--Lazada-List;
		//, host : "localhost", port : 55534//B2LiNK-MongoDB-OnSight--Lazada--Review;

		//, host : "localhost", port : 55535//B2LiNK-MongoDB-OnSight--Shopee-Daily;
		//, host : "localhost", port : 55536//B2LiNK-MongoDB-OnSight--Shopee-List;
		//, host : "localhost", port : 55537//B2LiNK-MongoDB-OnSight--Shopee-Review;

		//, host : "222.239.10.122", port : 55421//122 - B2LiNK-OnSight-Tool-SKUMapper;

		, authenticationDatabase : "admin", username : "b2link", password : "qlxnfldzmdb2017_"
		, mode : "upsert", upsertFields : "_id", numInsertionWorkers : 1
		, db : '""'
		, collection : '""'
		, file : '""'
	}
});

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
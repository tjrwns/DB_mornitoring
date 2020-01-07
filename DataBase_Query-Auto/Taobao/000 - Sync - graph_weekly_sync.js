require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Taobao-Daily - All - weekly - data";
if( console ) console.log( "[ S ] - " + fileNm + ".js" + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );
global.REQUIRES.fs = global.REQUIRES.fs || require( "fs" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;

require( "../../../Development-NodeJS_Modules/js/mongodb/__define/000_define_global.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

var _CWD_ = global.process.cwd();
var _EXPORT_PATH_ = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/HTTPServer_MongoDB/APIServer/temp/";
var _ARGV_ = global.process.argv;
var _ARGV_20 = _ARGV_[ 20 ];
var _SITE_NAME00_ = "TAOBAO-DAILY";
var _DB_NAME_PREFIX00_ = "Taobao";
var _DB_NAME_PREFIX01_ = "taobao";


var _TARGET_DATE_ = global.process.argv[2];
console.log(  "=================================================================" );
console.log(  _TARGET_DATE_ );
console.log(  "=================================================================" );

//----------------------------------------------------------------------------------------------------;

//DB공통인포;
/*/
var TARGET_DB_PORT = JSON.parse( SUtilFsReadStream.getFile( "..\\_resource\\dbInfo.json" ).toString() );
/*/
var TARGET_DB_PORT = {
//	"SELF" : { "host" : "127.0.0.1", "port" : 55522 }
//	, "JD-DAILY": { "host" : "127.0.0.1", "port" : 55523 }
//	, "JD-LIST" : { "host" : "127.0.0.1", "port" : 55524 }
//	, "KAOLA": { "host" : "127.0.0.1", "port" : 55525 }
	"TAOBAO-DAILY" : { "host" : "127.0.0.1", "port" : 55526 }
//	, "TAOBAO-LIST" : { "host" : "127.0.0.1", "port" : 55527 }
//	, "VIP" : { "host" : "127.0.0.1", "port" : 55528 }
//	, "LAZADA" : { "host" : "127.0.0.1", "port" : 55532 }
//	, "SHOPEE" : { "host" : "127.0.0.1", "port" : 55535 }
//	, "ONSIGHT_BATCH" : { "host" : "192.168.0.230", "port" : 57321 }
	, "SKUMAPPER" : { "host" : "222.239.10.122", "port" : 55421 }
//	, "SKUMAPPER_TEST" : { "host" : "222.239.10.122", "port" : 55421 }
	, "ONSIGHT" : { "host" : "222.239.10.122", "port" : 55320 }
	, "ONSIGHT_TEST" : { "host" : "222.239.10.123", "port" : 55320 }
	, "ONSIGHT_ADMIN" : { "host" : "222.239.10.123", "port" : 55540 }
//	, ONSIGHT_BATCH  : { "host" : "192.168.0.230", "port" : 57321 }
//	, "BATCH_PC_SELF" : { "host" : "192.168.0.230", "port" : 55522 }
//	, "BATCH_PC_JD-DAILY" : { "host" : "192.168.0.230", "port" : 55523 }
//	, "BATCH_PC_JD-LIST" : { "host" : "192.168.0.230", "port" : 55524 }
//	, "BATCH_PC_KAOLA" : { "host" : "192.168.0.230", "port" : 55525 }
//	, "BATCH_PC_TAOBAO-DAILY" : { "host" : "192.168.0.230", "port" : 55526 }
//	, "BATCH_PC_TAOBAO-LIST" : { "host" : "192.168.0.230", "port" : 55527 }
//	, "BATCH_PC_VIP" : { "host" : "192.168.0.230", "port" : 55528 }
//	, "BATCH_PC_LAZADA" : { "host" : "192.168.0.230", "port" : 55532 }
//	, "BATCH_PC_SHOPEE" : { "host" : "192.168.0.230", "port" : 55535 }
}
//*/

//주차별데이터에이용되는 날짜데이터;
var DATE_WEEK_INFO = JSON.parse( SUtilFsReadStream.getFile( "..\\_resource\\DATE_WEEK_INFO.json" ).toString() );

try
{
	var CONFIG;

	if( _ARGV_20 ) var CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + _ARGV_20 + ".json" ).toString() );
	else CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + fileNm + ".json" ).toString() );
	//...;
}
catch( er )
{
	global.console.error( "[ CONFIG ] - " + er );
	global.process.exit();
}

var CONNECTION_INFO_IP	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST || "127.0.0.1";
var CONNECTION_INFO_PORT = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.PORT || "55528";;
var CONNECTION_INFO_DB	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.NMDB;

//----------------------------------------------------------------------------------------------------;

var _CMDS = {
	//Export CMD;
	CMD000 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --out "<!=FILE_NM=!>" --jsonArray'

	//Import CMD;
	, CMD001 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --file "<!=FILE_NM=!>" --mode insert --numInsertionWorkers 1 --jsonArray'

	//Drop,Import CMD;
	, CMD002 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --drop --file "<!=FILE_NM=!>" --mode insert --numInsertionWorkers 1 --jsonArray'

	//Import CMD --jsonArray 미사용;
	, CMD003 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --file "<!=FILE_NM=!>" --mode insert --numInsertionWorkers 1'

	//Export CMD with QUERY --jsonArray 사용못함;
	, CMD004 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --query "<!=QUERY=!>" --out "<!=FILE_NM=!>"'

};

//----------------------------------------------------------------------------------------------------;

var FUNCTIONS = [];
var FUNCTIONS_ERROR = [];
var CMD;

//----------------------------------------------------------------------------------------------------;

var funcsExecuter = function(){
	var _ = this;

	_.start = function(){
		if( _.i == FUNCTIONS.length )
		{
			global.console.log( "[ COMPLETE ]" );
			global.process.exit();
			return;
		}
		else
		{
			_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount = 0;
			_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue = 0;

			for( var s in TARGET_DB_PORT )
			{
				global.mongodb.exec( TARGET_DB_PORT[ s ] );
				global.console.log( s + "--[ Free ]"  );
			}
		}
	}

	_.cbComplete = function( error, result ){

		global.console.log( FUNCTIONS.length + " / " + _.i + " - recount : " + _.recount + " - result : " + result );

		if( error )
		{
			global.console.error( "[ ERROR ] - " + error );
			++_.recount;
			setTimeout( _.start, 2000 );
			return;
		}

		//1을 반환 받았을시 DB의 Lock가 해제 된걸로 판단하고 다음 함수를 실행한다;
		if( Number( result ) == 1 )
		{
			try
			{
				FUNCTIONS[ _.i ]();
				_.recount = 0;
				++_.i;
				setTimeout( _.start, 2000 );
			}
			catch( er )
			{
				var bThrowError = true;
				var i=0, iLen=NON_ERROR_EXCEPTION_LIST.length;
				for( ; i<iLen; ++i ) if( -1 != er.message.indexOf( NON_ERROR_EXCEPTION_LIST[ i ] ) ) bThrowError = false;

				if( bThrowError )
				{
					global.console.error( er );
					//throw new Error( er );
					global.process.exit();
				}
				else
				{
					++_.i;
					setTimeout( _.start, 2000 );
				}
			}
			return;
		}
		//null이 나왔을시
		else if( null == result )
		{
			++_.recount;
			setTimeout( _.start, 2000 );
			return;
		}
	};

	_.CHECK_DBS_STATUS__CB_COMPLETE = function( error, result ){

		++_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount;

		if( error ){
			global.console.error( "[ ERROR ] - " + error );
			++_.recount;
			setTimeout( _.start, 2000 );
			return;
		}
		else
		{
			++_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue;
		}

		global.console.log( "dbResCount : " + _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount + " / dbResCountTrue : " + _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue );

		if( _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount == _.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT && _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue == _.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT )
		{
			//구동;
			//global.mongodb.exec( _.CONNECTION_INFO );

			try
			{
				FUNCTIONS[ _.i ]();
				_.recount = 0;
				++_.i;
				setTimeout( _.start, 2000 );
			}
			catch( er )
			{
				var bThrowError = true;
				var i=0, iLen=NON_ERROR_EXCEPTION_LIST.length;
				for( ; i<iLen; ++i ) if( -1 != er.message.indexOf( NON_ERROR_EXCEPTION_LIST[ i ] ) ) bThrowError = false;

				if( bThrowError )
				{
					global.console.error( er );
					//throw new Error( er );
					global.process.exit();
				}
				else
				{
					++_.i;
					setTimeout( _.start, 2000 );
				}
			}

			return;
		}

		if( _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount == _.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT && _.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue != _.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT )
		{
			setTimeout( _.CHECK_DBS_STATUS__CB_COMPLETE, 2000 );
			return;
		}
	};

	_.i = 0;
	_.recount = 0;//동일 쿼리 요청 횟수;
	_.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT = NaN;//동적 계산됨;
	_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCount = 0;
	_.CHECK_DBS_STATUS__CB_COMPLETE.dbResCountTrue = 0;


	return _;
};

/*
 * Childprocess 실행함수;
 * @fucntion
 * @param{ String } str
 */
var FN000 = function( str ){

	global.console.log( "[ COMMAND ] - " + str );
	var result = SUtilCP.sExec( str ).toString()
	global.console.log( result )

	return;
};


/*
 * mongodb.exec 실행함수;
 * @fucntion
 * @param{ String } fileNm
 */
var FN100 = function( fileNm ){

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/

	global.console.log( "[ E ] - " + fileNm );
};

/*
 * 파일존재여부를 확인하는 함수
 * @function
 * @param{ String } filePath;
 * @return{ Bollean }
 */
var isFileExist = function( filePath ){ return global.REQUIRES.fs.existsSync( filePath ); };

////----------------------------------------------------------------------------------------------------WEEKLY_GRAPH_DATA;
//
////Taobao-Daily - 그래프데이터생성_주간_00--graph_data.week_summary_by_brand - 재생성;
//
//FUNCTIONS.push(function(){
//
//	var fileNm = "Taobao-Daily - 그래프데이터생성_주간_00--graph_data.week_summary_by_brand - 재생성.dbjs";
//
//	global.console.log( "[ S ] - " + fileNm );
//
//	//실행DBJS PATH 설정;
//	var filePath = _CWD_ + "/" + fileNm;
//
//	//쿼리설정;
//	var _query = SUtilFsReadStream.getFile( filePath ).toString();
//	var query = _query.replace( "<!=TARGET_WEEK_NO=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_WEEK_NO );
//
//	//쿼리실행;
//	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	/*/
//	var result = global.mongodb.exec(
//		CONNECTION_INFO_IP
//		, CONNECTION_INFO_PORT
//		, CONNECTION_INFO_DB
//		, query );
//
//	global.console.log( result );
//	//*/
//
//	global.console.log( "[ E ] - " + fileNm );
//});
//
////Taobao-Daily - 그래프데이터생성_주간_01--graph_data.week_top3_sales_amount_by_brand - 재생성;
//
//FUNCTIONS.push(function(){
//
//	var fileNm = "Taobao-Daily - 그래프데이터생성_주간_01--graph_data.week_top3_sales_amount_by_brand - 재생성.dbjs";
//
//	global.console.log( "[ S ] - " + fileNm );
//
//	//실행DBJS PATH 설정;
//	var filePath = _CWD_ + "/" + fileNm;
//
//	//쿼리설정;
//	var _query = SUtilFsReadStream.getFile( filePath ).toString();
//	var query = _query.replace( "<!=TARGET_WEEK_NO=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_WEEK_NO );
//
//	//쿼리실행;
//	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	/*/
//	var result = global.mongodb.exec(
//		CONNECTION_INFO_IP
//		, CONNECTION_INFO_PORT
//		, CONNECTION_INFO_DB
//		, query );
//
//	global.console.log( result );
//	//*/
//
//	global.console.log( "[ E ] - " + fileNm );
//});
//
////Taobao-Daily - 그래프데이터생성_주간_02--graph_data.week_top3_by_platform - 재생성;
//
//FUNCTIONS.push(function(){
//
//	var fileNm = "Taobao-Daily - 그래프데이터생성_주간_02--graph_data.week_top3_by_platform - 재생성.dbjs";
//
//	global.console.log( "[ S ] - " + fileNm );
//
//	//실행DBJS PATH 설정;
//	var filePath = _CWD_ + "/" + fileNm;
//
//	//쿼리설정;
//	var _query = SUtilFsReadStream.getFile( filePath ).toString();
//	var query = _query.replace( "<!=TARGET_WEEK_NO=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_WEEK_NO );
//
//	//쿼리실행;
//	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	/*/
//	var result = global.mongodb.exec(
//		CONNECTION_INFO_IP
//		, CONNECTION_INFO_PORT
//		, CONNECTION_INFO_DB
//		, query );
//
//	global.console.log( result );
//	//*/
//
//	global.console.log( "[ E ] - " + fileNm );
//});
//
////Taobao-Daily - 그래프데이터생성_주간_03--graph_data.week_top5_sales_quantity - 재생성;
//
//FUNCTIONS.push(function(){
//
//	var fileNm = "Taobao-Daily - 그래프데이터생성_주간_03--graph_data.week_top5_sales_quantity - 재생성.dbjs";
//
//	global.console.log( "[ S ] - " + fileNm );
//
//	//실행DBJS PATH 설정;
//	var filePath = _CWD_ + "/" + fileNm;
//
//	//쿼리설정;
//	var _query = SUtilFsReadStream.getFile( filePath ).toString();
//	var query = _query.replace( "<!=TARGET_WEEK_NO=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_WEEK_NO );
//
//	//쿼리실행;
//	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	/*/
//	var result = global.mongodb.exec(
//		CONNECTION_INFO_IP
//		, CONNECTION_INFO_PORT
//		, CONNECTION_INFO_DB
//		, query );
//
//	global.console.log( result );
//	//*/
//
//	global.console.log( "[ E ] - " + fileNm );
//});
//
////----------------------------------------------------------------------------------------------------WEEKLY_GRAPH_DATA;
//
////----------------------------------------------------------------------------------------------------graph_data 임포트전 기존데이터 삭제 ;
//
//FUNCTIONS.push(function(){
//
//	var fileNm = "Taobao-Daily - graph_data 임포트전 기존데이터 삭제 - Weekly.dbjs";
//
//	global.console.log( "[ S ] - " + fileNm );
//
//	var filePath = _CWD_ + "/" + fileNm;
//
//	var _query = SUtilFsReadStream.getFile( filePath ).toString();
//	var query = _query.replace( "<!=TARGET_WEEK_NO=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_WEEK_NO );
//
//	//*/
//	//exec 쿼리실행;
//	var info = { host : TARGET_DB_PORT[ 'ONSIGHT' ].host, port : TARGET_DB_PORT[ 'ONSIGHT' ].port, dbNm : "admin", query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	var info = { host : TARGET_DB_PORT[ 'ONSIGHT_TEST' ].host, port : TARGET_DB_PORT[ 'ONSIGHT_TEST' ].port, dbNm : TARGET_DB_PORT[ 'ONSIGHT_TEST' ].DB, query : query, cbComplete : function( error, result ){
//			//debugger;
//			//if( error ){ throw new Error(); return; }
//
//			global.console.log( result );
//		}
//	};
//
//	global.mongodb.exec( info );
//
//	/*/
//	//execSync 쿼리실행;
//	var result = global.mongodb.exec(
//		CONNECTION_INFO_IP
//		, CONNECTION_INFO_PORT
//		, CONNECTION_INFO_DB
//		, query );
//
//	global.console.log( result );
//	//*/
//	global.console.log( "[ E ] - " + fileNm );
//
//});
//
//
////----------------------------------------------------------------------------------------------------GRAPH_DATA 임포트;

//커맨드 생성 - 데이터 병합;
FUNCTIONS.push(function(){

	var year = _TARGET_DATE_.substr( 0, 4 );
	var weekNo = _TARGET_DATE_.substr( 4, 2 ) * 1;


	var exportHost00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var importHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var importPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;

	var importHost01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].host;
	var importPort01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].port;

	var exportDb00 = "graph_data";

	var exportCol00 = "week_summary_by_brand";
	var exportCol01 = "week_top3_by_platform";
	var exportCol02 = "week_top3_sales_amount_by_brand";
	var exportCol03 = "week_top5_sales_quantity";

	var importDb00 = "graph_data";

	var importCol00 = "week_summary_by_brand";
	var importCol01 = "week_top3_by_platform";
	var importCol02 = "week_top3_sales_amount_by_brand";
	var importCol03 = "week_top5_sales_quantity";

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb00 + "." + exportCol01 + ".json";
	var outFile02 = _EXPORT_PATH_ + exportDb00 + "." + exportCol02 + ".json";
	var outFile03 = _EXPORT_PATH_ + exportDb00 + "." + exportCol03 + ".json";

	var QUERY00 = "{ year : '" + year + "', week : " + weekNo + " }"

	//---------------------------------------------------------------------------Export;

	//Export;
	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol01 ).replace( "<!=FILE_NM=!>", outFile01 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol02 ).replace( "<!=FILE_NM=!>", outFile02 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol03 ).replace( "<!=FILE_NM=!>", outFile03 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	//Import 122;
//	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
//	FN000( CMD );
//
//	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
//	FN000( CMD );
//
//	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
//	FN000( CMD );
//
//	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
//	FN000( CMD );

	//Import 123;
	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

});

//----------------------------------------------------------------------------------------------------;
var NON_ERROR_EXCEPTION_LIST = [

	//mongoimport 사용시 대상 json 파일의 내용이 []만 존재할시 발생되는 에러 메세지;
	"Failed: error processing document #1: invalid character ']' looking for beginning of value"
];

//----------------------------------------------------------------------------------------------------;



//----------------------------------------------------------------------------------------------------;

var logic = new funcsExecuter();

(function(){
	logic.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT = 0;
	var io;
	for( var s in TARGET_DB_PORT ){
		++logic.CHECK_DBS_STATUS__CB_COMPLETE._MAX_COUNT;

		io = TARGET_DB_PORT[ s ];
		io.dbNm = "admin";
		io.ID = "b2link";
		io.PASS = "qlxnfldzmdb2017_";
		io.port = io.port.toString();
		io.query = "return 1;";
		io.cbComplete = logic.CHECK_DBS_STATUS__CB_COMPLETE;
	}
})();

setTimeout( logic.start, 2000 );
//*/

/*
var query = `
var i=0, iLen=10000000000;
for( ; i<iLen; ++i ){ print(i); }
`;
var info = { host : "127.0.0.1", port : "55522", dbNm : "admin", query : query, cbComplete : function( error, result ){
		//debugger;
		if( error )
		{
			throw new Error();
			return;
		}

		global.console.log( result );
	}
};

global.mongodb.exec( info );

global.N = setInterval( function(){ console.log( global.mongodb.execSync( "127.0.0.1", "55522", "admin", "print( 1 );" ) ); }, 1000 );

clearInterval( N );
*/

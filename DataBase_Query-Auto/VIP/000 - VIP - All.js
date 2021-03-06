require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - VIP - All";
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
var _SITE_NAME00_ = "VIP";
var _DB_NAME_PREFIX00_ = "VIP";
var _DB_NAME_PREFIX01_ = "vip";

//----------------------------------------------------------------------------------------------------;

//DB공통인포;
/*/
var TARGET_DB_PORT = JSON.parse( SUtilFsReadStream.getFile( "..\\_resource\\dbInfo.json" ).toString() );
/*/
var TARGET_DB_PORT = {
	"SELF" : { "host" : "127.0.0.1", "port" : 55522 }
//	, "JD-DAILY": { "host" : "127.0.0.1", "port" : 55523 }
//	, "JD-LIST" : { "host" : "127.0.0.1", "port" : 55524 }
//	, "KAOLA": { "host" : "127.0.0.1", "port" : 55525 }
//	, "TAOBAO-DAILY" : { "host" : "127.0.0.1", "port" : 55526 }
//	, "TAOBAO-LIST" : { "host" : "127.0.0.1", "port" : 55527 }
	, "VIP" : { "host" : "127.0.0.1", "port" : 55528 }
//	, "LAZADA" : { "host" : "127.0.0.1", "port" : 55532 }
//	, "SHOPEE" : { "host" : "127.0.0.1", "port" : 55535 }
//	, "ONSIGHT_BATCH" : { "host" : "192.168.0.230", "port" : 57321 }
	, "SKUMAPPER" : { "host" : "222.239.10.122", "port" : 55421 }
//	, "SKUMAPPER_TEST" : { "host" : "222.239.10.123", "port" : 55421 }
	, "ONSIGHT" : { "host" : "222.239.10.122", "port" : 55320 }
	, "ONSIGHT_TEST" : { "host" : "222.239.10.123", "port" : 55320 }
//	, "ONSIGHT_ADMIN" : { "host" : "222.239.10.123", "port" : 55540 }
//	, "BATCH_PC_SELF" : { "host" : "192.168.0.230", "port" : 55522 }
//	, "BATCH_PC_JD-DAILY" : { "host" : "192.168.0.230", "port" : 55523 }
//	, "BATCH_PC_JD-LIST" : { "host" : "192.168.0.230", "port" : 55524 }
//	, "BATCH_PC_KAOLA" : { "host" : "192.168.0.230", "port" : 55525 }
//	, "BATCH_PC_TAOBAO-DAILY" : { "host" : "192.168.0.230", "port" : 55526 }
//	, "BATCH_PC_TAOBAO-LIST" : { "host" : "192.168.0.230", "port" : 55527 }
//	, "BATCH_PC_VIP" : { "host" : "192.168.0.230", "port" : 55528 }
//	, "BATCH_PC_LAZADA" : { "host" : "192.168.0.230", "port" : 55532 }
//	, "BATCH_PC_SHOPEE" : { "host" : "192.168.0.230", "port" : 55535 }

	//Lite
//	, "KAOLA--Lite"          : { "host" : "192.168.0.230", "port" : 55542 }
//	, "TAOBAO-DAILY--Lite"   : { "host" : "192.168.0.230", "port" : 55539 }
	, "VIP--Lite"            : { "host" : "192.168.0.230", "port" : 55543 }
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
				global.console.log( s + "--[ Free ]" );
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
				for( ; i<iLen; ++i ) if( -1 == er.message.indexOf( NON_ERROR_EXCEPTION_LIST[ i ] ) ) bThrowError = false;

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

//----------------------------------------------------------------------------------------------------goods_list 임포트;

FUNCTIONS.push(function(){

	global.console.log( "[S] - VIP - skumapper -- 01_매핑데이터작업 -- goods_list export_Skumapper_Import_CSJ" );

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;
	var importHost00 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST;
	var importPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var exportDb00 = "goods_list__vip";
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "_233001";
	var importDb00 = "goods_list_" + year;
	var importCol00= CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00 = _EXPORT_PATH_ + importDb00 + "." + importCol00 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	global.console.log( "[E] - VIP - skumapper -- 01_매핑데이터작업 -- goods_list export_Skumapper_Import_CSJ" );
});

//----------------------------------------------------------------------------------------------------product_service_vip 임포트;

FUNCTIONS.push(function(){

	global.console.log( "[ S ] - VIP -product_service_vip 임포트 " );

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;
	var importHost00 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST;
	var importPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var exportDb00 = "product";
	var exportCol00 = "product_service_" + _DB_NAME_PREFIX01_;
	var importDb00 = "product";
	var importCol00= "product_service_" + _DB_NAME_PREFIX01_;

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	global.console.log( "[ E ] - VIP -product_service_vip 임포트 " );
});


//---------------------------------------------------------------------------------------------------- 수집데이터병합;

//수집데이터병합;
FUNCTIONS.push(function(){

	var fileNm = "VIP - 수집데이터병합_날짜지정.dbjs";
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
});

//----------------------------------------------------------------------------------------------------디테일그래프데이터생성;

//디테일그래프데이터생성;
FUNCTIONS.push(function(){

	var fileNm = "VIP - _STATISTICS--COMMON.dashboard-detail - 기간지정 - 재생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------데일리그래프데이터생성;

//데일리그래프데이터생성;
FUNCTIONS.push(function(){

	var fileNm = "VIP - _STATISTICS--COMMON.dashboard-daily - 기간지정 - 재생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------데일리ERROR데이터생성;

//데일리그래프데이터생성;
FUNCTIONS.push(function(){

	var fileNm = "VIP - _STATISTICS--COMMON.dashboard-ERROR - 기간지정 - 재생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------Diff데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - makeDiffData -- 01_일자별생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------collected_data 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - skumapper -- 02_매핑데이터작업 -- collected_data 생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------graph_data-daily 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - 데이터정제 -- graph_data -- daily_price -- 날짜지정.dbjs";
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
});

//----------------------------------------------------------------------------------------------------graph_data-monthly 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - 데이터정제 -- graph_data -- monthly_price -- 년월지정.dbjs";
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
});

//----------------------------------------------------------------------------------------------------graph_data-weekly 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - 데이터정제 -- graph_data -- weekly_price -- 년주차지정.dbjs";
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
});


//----------------------------------------------------------------------------------------------------VIP-Lite 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - Lite_Data - 생성.dbjs";
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
});

//----------------------------------------------------------------------------------------------------VIP-Lite-PIMS 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "VIP - Lite_Data - goods_list - 매핑.dbjs";
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
});

//----------------------------------------------------------------------------------------------------vip - graph_data 임포트;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMETERS_NODEJS.CHILDPROCESS_PARAMETER.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var importHost00 = TARGET_DB_PORT[ 'VIP--Lite' ].host;
	var importPort00 = TARGET_DB_PORT[ 'VIP--Lite' ].port;

	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year + "-Lite";
	var exportDb01 = _DB_NAME_PREFIX00_ + "_" + year + "-Lite--PIMS";

	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var exportCol01 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var importDb00 = _DB_NAME_PREFIX00_ + "_" + year + "-Lite--PIMS";
	var importCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb01 + "." + exportCol01 + ".json";

	//---------------------------------------------------------------------------Export;

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb01 )
		.replace( "<!=COL_NM=!>", exportCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	//---------------------------------------------------------------------------Export;
	//---------------------------------------------------------------------------Import;

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	//---------------------------------------------------------------------------Import;

});

//----------------------------------------------------------------------------------------------------비교데이터서비스반영;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var importHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var importPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;

	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year + "--비교";
	var importDb00 = _DB_NAME_PREFIX01_ + "_" + year + "_continuity";

	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--new";
	var exportCol01 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--remove";
	var exportCol02 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--price";
	var exportCol03 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--title";
	var exportCol04 = "STATISTICS";

	var importCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--new";
	var importCol01 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--remove";
	var importCol02 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--price";
	var importCol03 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "--title";
	var importCol04 = "STATISTICS";

	var outFile00= _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01= _EXPORT_PATH_ + exportDb00 + "." + exportCol01 + ".json";
	var outFile02= _EXPORT_PATH_ + exportDb00 + "." + exportCol02 + ".json";
	var outFile03= _EXPORT_PATH_ + exportDb00 + "." + exportCol03 + ".json";
	var outFile04= _EXPORT_PATH_ + exportDb00 + "." + exportCol04 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol02 )
		.replace( "<!=FILE_NM=!>", outFile02 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol03 )
		.replace( "<!=FILE_NM=!>", outFile03 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol04 )
		.replace( "<!=FILE_NM=!>", outFile04 );

	FN000( CMD );

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

		FN000( CMD );
	}
	catch( er )
	{
		//er;
		global.console.error( "[ ERROR ] - " + er.message );

	}

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

		FN000( CMD );
	}
	catch( er )
	{
		//er;
		global.console.error( "[ ERROR ] - " + er.message );

	}

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol02 )
		.replace( "<!=FILE_NM=!>", outFile02 );

		FN000( CMD );
	}
	catch( er )
	{
		//er;
		global.console.error( "[ ERROR ] - " + er.message );

	}

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol03 )
		.replace( "<!=FILE_NM=!>", outFile03 );

		FN000( CMD );
	}
	catch( er )
	{
		//er;
		global.console.error( "[ ERROR ] - " + er.message );

	}

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
			.replace( "<!=PORT=!>", importPort00 )
			.replace( "<!=DB_NM=!>", importDb00 )
			.replace( "<!=COL_NM=!>", importCol04 )
			.replace( "<!=FILE_NM=!>", outFile04 );

		FN000( CMD );
	}
	catch( er )
	{
		//er;
		global.console.error( "[ ERROR ] - " + er.message );

	}

	//-------------------------;
});

//----------------------------------------------------------------------------------------------------Collected_data 서비스반영( SKUMapper );

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;
	var importHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var importPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;

	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year + "-collected_data";
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var importDb00 = "collected_data_vip";
	var importCol00= _DB_NAME_PREFIX01_ + "_" + CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00= _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;
});

//----------------------------------------------------------------------------------------------------vip - graph_data 임포트;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMETERS_NODEJS.CHILDPROCESS_PARAMETER.TARGET_DATE.substr( 0, 4 );
	var month = CONFIG.PARAMETERS_NODEJS.CHILDPROCESS_PARAMETER.TARGET_DATE.substr( 0, 6 );

	var weekNo;
	var z,zo;
	for( z in DATE_WEEK_INFO[ year ] ){
		zo = DATE_WEEK_INFO[ year ][ z ]
		if( zo.days.indexOf( CONFIG.PARAMETERS_NODEJS.CHILDPROCESS_PARAMETER.TARGET_DATE ) == -1 ) continue;
		weekNo = z;
	}

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var importHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var importPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;
	var importHost01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].host;
	var importPort01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].port;

	var exportDb00 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-daily";
	var exportDb01 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-monthly";
	var exportDb02 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-weekly";

	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var exportCol01 = month;
	var exportCol02 = weekNo;

	var importDb00 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-daily";
	var importDb01 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-monthly";
	var importDb02 = "graph_data__" + _DB_NAME_PREFIX01_ + "_" + year + "-weekly";

	var importCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var importCol01 = month;
	var importCol02 = weekNo;

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb01 + "." + exportCol01 + ".json";
	var outFile02 = _EXPORT_PATH_ + exportDb02 + "." + exportCol02 + ".json";

	//---------------------------------------------------------------------------Export;

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb01 )
		.replace( "<!=COL_NM=!>", exportCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb02 )
		.replace( "<!=COL_NM=!>", exportCol02 )
		.replace( "<!=FILE_NM=!>", outFile02 );

	FN000( CMD );

	//-------------------------;

	//---------------------------------------------------------------------------Export;
	//---------------------------------------------------------------------------Import;

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb01 )
		.replace( "<!=COL_NM=!>", importCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 )
		.replace( "<!=PORT=!>", importPort00 )
		.replace( "<!=DB_NM=!>", importDb02 )
		.replace( "<!=COL_NM=!>", importCol02 )
		.replace( "<!=FILE_NM=!>", outFile02 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost01 )
		.replace( "<!=PORT=!>", importPort01 )
		.replace( "<!=DB_NM=!>", importDb00 )
		.replace( "<!=COL_NM=!>", importCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost01 )
		.replace( "<!=PORT=!>", importPort01 )
		.replace( "<!=DB_NM=!>", importDb01 )
		.replace( "<!=COL_NM=!>", importCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost01 )
		.replace( "<!=PORT=!>", importPort01 )
		.replace( "<!=DB_NM=!>", importDb02 )
		.replace( "<!=COL_NM=!>", importCol02 )
		.replace( "<!=FILE_NM=!>", outFile02 );

	FN000( CMD );

	//-------------------------;
	//---------------------------------------------------------------------------Import;

});

//----------------------------------------------------------------------------------------------------backup file export;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;


	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year;
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var exportDb01 = _DB_NAME_PREFIX00_ + "_" + year + "-ERROR";
	var exportCol01 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
//	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year;
//	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00= _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01= _EXPORT_PATH_ + exportDb01 + "." + exportCol01 + ".json";
//	var outFile02= _EXPORT_PATH_ + exportDb02 + "." + exportCol02 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb00 )
		.replace( "<!=COL_NM=!>", exportCol00 )
		.replace( "<!=FILE_NM=!>", outFile00 );

	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
		.replace( "<!=PORT=!>", exportPort00 )
		.replace( "<!=DB_NM=!>", exportDb01 )
		.replace( "<!=COL_NM=!>", exportCol01 )
		.replace( "<!=FILE_NM=!>", outFile01 );

	FN000( CMD );

	//-------------------------;

//	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 )
//		.replace( "<!=PORT=!>", exportPort00 )
//		.replace( "<!=DB_NM=!>", exportDb00 )
//		.replace( "<!=COL_NM=!>", exportCol00 )
//		.replace( "<!=FILE_NM=!>", outFile00 );
//
//	FN000( CMD );

	//-------------------------;

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
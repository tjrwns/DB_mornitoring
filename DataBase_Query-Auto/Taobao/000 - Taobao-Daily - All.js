require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Taobao-Daily - All";
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
//	, "ONSIGHT_ADMIN" : { "host" : "222.239.10.123", "port" : 55540 }
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

	//Lite
//	, "KAOLA--Lite"          : { "host" : "192.168.0.230", "port" : 55542 }
	, "TAOBAO-DAILY--Lite"   : { "host" : "192.168.0.230", "port" : 55539 }
//	, "VIP--Lite"            : { "host" : "192.168.0.230", "port" : 55543 }
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


var dateFormat = function( strDate ){
	return strDate.substr(0,4) + "-" + strDate.substr(4,2) + "-" + strDate.substr(6,2) + "T00:00:00Z";
};

//----------------------------------------------------------------------------------------------------goods_list 임포트;

FUNCTIONS.push(function(){

	global.console.log( "[S] - TAOBAO-DAILY - skumapper -- 01_매핑데이터작업 -- goods_list export_Skumapper_Import_CSJ" );

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;
	var importHost00 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST;
	var importPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var exportDb00 = "goods_list__taobao";
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE + "_233001";
	var importDb00 = "goods_list_" + year;
	var importCol00= CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00 = _EXPORT_PATH_ + importDb00 + "." + importCol00 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	//-------------------------;

	global.console.log( "[E] - TAOBAO-DAILY - skumapper -- 01_매핑데이터작업 -- goods_list export_Skumapper_Import_CSJ" );
});

//----------------------------------------------------------------------------------------------------product_service_**** 임포트;

FUNCTIONS.push(function(){

	global.console.log( "[ S ] - TAOBAO-DAILY - product_service_**** 임포트 " );

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;
	var importHost00 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST;
	var importPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var exportDb00 = "product";
	var exportCol00 = "product_service";
	var exportCol01 = "product_service_taobao";
	var exportCol02 = "product_service_tmall";

	var importDb00 = "product";
	var importCol00= "product_service";
	var importCol01= "product_service_taobao";
	var importCol02= "product_service_tmall";

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb00 + "." + exportCol01 + ".json";
	var outFile02 = _EXPORT_PATH_ + exportDb00 + "." + exportCol02 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	global.console.log( "[ E ] - TAOBAO-DAILY - product_service_**** 임포트 " );

});

//----------------------------------------------------------------------------------------------------brand_service_**** 임포트;

FUNCTIONS.push(function(){

	global.console.log( "[ S ] - TAOBAO-DAILY - brand_service_**** 임포트 " );

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;
	var importHost00 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST;
	var importPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var exportDb00 = "brand";
	var exportCol00 = "brand_basic";
	var exportCol01 = "brand_service";
	var exportCol02 = "brand_service_kaola";
	var exportCol03 = "brand_service_red";
	var exportCol04 = "brand_service_taobao";
	var exportCol05 = "brand_service_tmall";
	var exportCol06 = "brand_service_vip";

	var importDb00 = "brand";
	var importCol00 = "brand_basic";
	var importCol01 = "brand_service";
	var importCol02 = "brand_service_kaola";
	var importCol03 = "brand_service_red";
	var importCol04 = "brand_service_taobao";
	var importCol05 = "brand_service_tmall";
	var importCol06 = "brand_service_vip";

	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb00 + "." + exportCol01 + ".json";
	var outFile02 = _EXPORT_PATH_ + exportDb00 + "." + exportCol02 + ".json";
	var outFile03 = _EXPORT_PATH_ + exportDb00 + "." + exportCol03 + ".json";
	var outFile04 = _EXPORT_PATH_ + exportDb00 + "." + exportCol04 + ".json";
	var outFile05 = _EXPORT_PATH_ + exportDb00 + "." + exportCol05 + ".json";
	var outFile06 = _EXPORT_PATH_ + exportDb00 + "." + exportCol06 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol05 ).replace( "<!=FILE_NM=!>", outFile05 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol06 ).replace( "<!=FILE_NM=!>", outFile06 );
	FN000( CMD );

	//-------------------------;

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol05 ).replace( "<!=FILE_NM=!>", outFile05 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol06 ).replace( "<!=FILE_NM=!>", outFile06 );
	FN000( CMD );

	global.console.log( "[ E ] - TAOBAO-DAILY - brand_service_**** 임포트 " );

});

//---------------------------------------------------------------------------------------------------- 수집데이터병합;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 수집_데이터_병합-----날짜지정.dbjs";
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

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - _STATISTICS--COMMON.dashboard-daily - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
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

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - _STATISTICS--COMMON.dashboard-detail - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
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

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - _STATISTICS--COMMON.dashboard-ERROR - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
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

	var fileNm = "Taobao-Daily - makeDiffData -- 01_일자별생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/
	global.console.log( "[ E ] - " + fileNm );
});

//----------------------------------------------------------------------------------------------------셀카운트현황데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - _STATISTICS--COMMON.dashboard-sellCount_check - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/
	global.console.log( "[ E ] - " + fileNm );
});

//----------------------------------------------------------------------------------------------------Daily_master 생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - daily_master.daily_master - 재생성 - 데일리.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/
	global.console.log( "[ E ] - " + fileNm );
});

//----------------------------------------------------------------------------------------------------DAILY_GRAPH_DATA;

//Taobao-Daily - 그래프데이터생성_일간_00--graph_data.update_shop_type - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_00--graph_data.update_shop_type - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	//*/
	var query = _query;
	/*/
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );
	//*/

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

//Taobao-Daily - 그래프데이터생성_일간_01--graph_data.daily_data_by_shop - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_01--graph_data.daily_data_by_shop - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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

//Taobao-Daily - 그래프데이터생성_일간_02--graph_data.daily_data_by_sku - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_02--graph_data.daily_data_by_sku - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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

//Taobao-Daily - 그래프데이터생성_일간_03--graph_data.daily_sku_by_shop - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_03--graph_data.daily_sku_by_shop - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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

//Taobao-Daily - 그래프데이터생성_일간_04--graph_data.daily_sales_by_brand - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_04--graph_data.daily_sales_by_brand - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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

//Taobao-Daily - 그래프데이터생성_일간_05--graph_data.daily_shop_info_by_brand - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_05--graph_data.daily_shop_info_by_brand - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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


//Taobao-Daily - 그래프데이터생성_일간_06--graph_data.daily_product_by_shop - 재생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 그래프데이터생성_일간_06--graph_data.daily_product_by_shop - 재생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

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

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------Taobao-Daily - Lite_Data - 생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - Lite_Data - 생성.dbjs";
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

//----------------------------------------------------------------------------------------------------Taobao-Daily - Lite_Data - goods_list;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - Lite_Data - goods_list.dbjs";
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

//----------------------------------------------------------------------------------------------------Taobao-Daily - Lite--PIMS 임포트;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMETERS_NODEJS.CHILDPROCESS_PARAMETER.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var importHost00 = TARGET_DB_PORT[ 'TAOBAO-DAILY--Lite' ].host;
	var importPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY--Lite' ].port;

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


//----------------------------------------------------------------------------------------------------collected_data 데이터생성;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - skumapper -- 02_매핑데이터작업 -- collected_data 생성.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/
	global.console.log( "[ E ] - " + fileNm );
});

//----------------------------------------------------------------------------------------------------비교데이터서비스반영;


FUNCTIONS.push(function(){

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var importHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var importPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;

	var exportDb00 = "Taobao_" + year + "--비교";
	var importDb00 = "taobao_" + year + "_continuity";

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

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	//-------------------------;

	try
	{
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
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
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
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
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
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
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
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
		CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
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

	var exportHost00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;
	var importHost00 = TARGET_DB_PORT[ 'SKUMAPPER' ].host;
	var importPort00 = TARGET_DB_PORT[ 'SKUMAPPER' ].port;

	var exportDb00 = "Taobao_" + year + "-collected_data";
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var importDb00 = "collected_data_taobao";
	var importCol00= "taobao_" + CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;

	var outFile00= _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";

	//-------------------------;

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	//-------------------------;
});

//----------------------------------------------------------------------------------------------------graph_data 임포트전 기존데이터 삭제 ;

FUNCTIONS.push(function(){


	var fileNm = "Taobao-Daily - graph_data 임포트전 기존데이터 삭제 - Daily.dbjs";

	global.console.log( "[ S ] - " + fileNm );

	var filePath = _CWD_ + "/" + fileNm;

	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//exec 쿼리실행;
	var info = { host : TARGET_DB_PORT[ 'ONSIGHT' ].host, port : TARGET_DB_PORT[ 'ONSIGHT' ].port, dbNm : "admin", query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	var info = { host : TARGET_DB_PORT[ 'ONSIGHT_TEST' ].host, port : TARGET_DB_PORT[ 'ONSIGHT_TEST' ].port, dbNm : "admin", query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	/*/
	//execSync 쿼리실행;
	var result = global.mongodb.exec(
		CONNECTION_INFO_IP
		, CONNECTION_INFO_PORT
		, CONNECTION_INFO_DB
		, query );

	global.console.log( result );
	//*/
	global.console.log( "[ E ] - " + fileNm );

});


//----------------------------------------------------------------------------------------------------GRAPH_DATA 임포트;

//커맨드 생성 - 데이터 병합;
FUNCTIONS.push(function(){

	global.console.log( "[ S ] - GRAPH_DATA 임포트 " );

	var exportHost00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].host;
	var exportPort00 = TARGET_DB_PORT[ 'TAOBAO-DAILY' ].port;

	var importHost00 = TARGET_DB_PORT[ 'ONSIGHT' ].host;
	var importPort00 = TARGET_DB_PORT[ 'ONSIGHT' ].port;
	var importHost01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].host;
	var importPort01 = TARGET_DB_PORT[ 'ONSIGHT_TEST' ].port;

	var exportDb00 = "graph_data";

	var exportCol00 = "daily_data_by_shop";
	var exportCol01 = "daily_data_by_sku";
	var exportCol02 = "daily_product_by_shop";
	var exportCol03 = "daily_sales_by_brand";
	var exportCol04 = "daily_shop_info_by_brand";
	var exportCol05 = "daily_sku_by_shop";

	var importDb00 = "graph_data";
	var importDb01 = "graph_data";

	var importCol00 = "daily_data_by_shop";
	var importCol01 = "daily_data_by_sku";
	var importCol02 = "daily_product_by_shop";
	var importCol03 = "daily_sales_by_brand";
	var importCol04 = "daily_shop_info_by_brand";
	var importCol05 = "daily_sku_by_shop";


	var outFile00 = _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01 = _EXPORT_PATH_ + exportDb00 + "." + exportCol01 + ".json";
	var outFile02 = _EXPORT_PATH_ + exportDb00 + "." + exportCol02 + ".json";
	var outFile03 = _EXPORT_PATH_ + exportDb00 + "." + exportCol03 + ".json";
	var outFile04 = _EXPORT_PATH_ + exportDb00 + "." + exportCol04 + ".json";
	var outFile05 = _EXPORT_PATH_ + exportDb00 + "." + exportCol05 + ".json";


	var QUERY00 = "{ 'date_of_value.a' : ISODate( '" + dateFormat( CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE ) + "') }";
	var QUERY01 = "{ 'date' : ISODate( '" + dateFormat( CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE ) + "') }";

	//---------------------------------------------------------------------------Export;

	//Export;
	global.console.log( "EXPOERT - local" );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol00 ).replace( "<!=FILE_NM=!>", outFile00 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol01 ).replace( "<!=FILE_NM=!>", outFile01 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol02 ).replace( "<!=FILE_NM=!>", outFile02 ).replace( "<!=QUERY=!>", QUERY01 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol03 ).replace( "<!=FILE_NM=!>", outFile03 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	CMD = _CMDS.CMD000.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	CMD = _CMDS.CMD004.replace( "<!=HOST=!>", exportHost00 ).replace( "<!=PORT=!>", exportPort00 ).replace( "<!=DB_NM=!>", exportDb00 ).replace( "<!=COL_NM=!>", exportCol05 ).replace( "<!=FILE_NM=!>", outFile05 ).replace( "<!=QUERY=!>", QUERY00 );
	FN000( CMD );

	//Import 122;
	global.console.log( "IMPORT - 122 " );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost00 ).replace( "<!=PORT=!>", importPort00 ).replace( "<!=DB_NM=!>", importDb00 ).replace( "<!=COL_NM=!>", importCol05 ).replace( "<!=FILE_NM=!>", outFile05 );
	FN000( CMD );

	//Import 123;
	global.console.log( "IMPORT - 123 " );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol00 ).replace( "<!=FILE_NM=!>", outFile00 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol01 ).replace( "<!=FILE_NM=!>", outFile01 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol02 ).replace( "<!=FILE_NM=!>", outFile02 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol03 ).replace( "<!=FILE_NM=!>", outFile03 );
	FN000( CMD );

	CMD = _CMDS.CMD002.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol04 ).replace( "<!=FILE_NM=!>", outFile04 );
	FN000( CMD );

	CMD = _CMDS.CMD003.replace( "<!=HOST=!>", importHost01 ).replace( "<!=PORT=!>", importPort01 ).replace( "<!=DB_NM=!>", importDb01 ).replace( "<!=COL_NM=!>", importCol05 ).replace( "<!=FILE_NM=!>", outFile05 );
	FN000( CMD );

	global.console.log( "[ E ] - GRAPH_DATA 임포트 " );

});

//---------------------------------------------------------------------------------------------------- backup file export;

FUNCTIONS.push(function(){

	var year = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE.substr( 0, 4 );

	var exportHost00 = TARGET_DB_PORT[ _SITE_NAME00_ ].host;
	var exportPort00 = TARGET_DB_PORT[ _SITE_NAME00_ ].port;

	var exportDb00 = _DB_NAME_PREFIX00_ + "_" + year;
	var exportCol00 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;
	var exportDb01 = _DB_NAME_PREFIX00_ + "_" + year + "-ERROR";
	var exportCol01 = CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE;


	var outFile00= _EXPORT_PATH_ + exportDb00 + "." + exportCol00 + ".json";
	var outFile01= _EXPORT_PATH_ + exportDb01 + "." + exportCol01 + ".json";

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

});

//---------------------------------------------------------------------------------------------------- product sequence update;

FUNCTIONS.push(function(){

	var fileNm = "Taobao-Daily - 상품seq업데이트.dbjs";
	global.console.log( "[ S ] - " + fileNm );

	//실행DBJS PATH 설정;
	var filePath = _CWD_ + "/" + fileNm;

	//쿼리설정;
	var _query = SUtilFsReadStream.getFile( filePath ).toString();
	var query = _query.replace( "<!=TARGET_DATE=!>", CONFIG.PARAMTERS_MONGODB_QUERY.TARGET_DATE );

	//*/
	//쿼리실행;
	var info = { host : TARGET_DB_PORT[ "ONSIGHT" ].host, port : TARGET_DB_PORT[ "ONSIGHT" ].port, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
			//debugger;
			//if( error ){ throw new Error(); return; }

			global.console.log( result );
		}
	};

	global.mongodb.exec( info );

	var info = { host : TARGET_DB_PORT[ "ONSIGHT_TEST" ].host, port : TARGET_DB_PORT[ "ONSIGHT_TEST" ].port, dbNm : CONNECTION_INFO_DB, query : query, cbComplete : function( error, result ){
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

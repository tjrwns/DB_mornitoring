require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Lazada - dbSync - 대량실행파일만들기";
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
var _SITE_NAME00_ = "LAZADA";
var _DB_NAME_PREFIX00_ = "Lazada";
var _DB_NAME_PREFIX01_ = "lazada";

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
//	, "VIP" : { "host" : "127.0.0.1", "port" : 55528 }
	, "LAZADA" : { "host" : "127.0.0.1", "port" : 55532 }
//	, "SHOPEE" : { "host" : "127.0.0.1", "port" : 55535 }
//	, "ONSIGHT_BATCH" : { "host" : "192.168.0.230", "port" : 57321 }
//	, "SKUMAPPER" : { "host" : "222.239.10.122", "port" : 55421 }
//	, "SKUMAPPER_TEST" : { "host" : "222.239.10.122", "port" : 55421 }
//	, "ONSIGHT" : { "host" : "222.239.10.122", "port" : 55320 }
//	, "ONSIGHT_TEST" : { "host" : "222.239.10.123", "port" : 55320 }
//	, "ONSIGHT_ADMIN" : { "host" : "222.239.10.123", "port" : 55540 }
//	, "BATCH_PC_SELF" : { "host" : "192.168.0.230", "port" : 55522 }
//	, "BATCH_PC_JD-DAILY" : { "host" : "192.168.0.230", "port" : 55523 }
//	, "BATCH_PC_JD-LIST" : { "host" : "192.168.0.230", "port" : 55524 }
//	, "BATCH_PC_KAOLA" : { "host" : "192.168.0.230", "port" : 55525 }
//	, "BATCH_PC_TAOBAO-DAILY" : { "host" : "192.168.0.230", "port" : 55526 }
//	, "BATCH_PC_TAOBAO-LIST" : { "host" : "192.168.0.230", "port" : 55527 }
//	, "BATCH_PC_VIP" : { "host" : "192.168.0.230", "port" : 55528 }
	, "BATCH_PC_LAZADA" : { "host" : "192.168.0.230", "port" : 55532 }
//	, "BATCH_PC_SHOPEE" : { "host" : "192.168.0.230", "port" : 55535 }
}
//*/

//주차별데이터에이용되는 날짜데이터;
var DATE_WEEK_INFO = JSON.parse( SUtilFsReadStream.getFile( "..\\_resource\\DATE_WEEK_INFO.json" ).toString() );

//try
//{
//	var CONFIG;
//
//	if( _ARGV_20 ) var CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + _ARGV_20 + ".json" ).toString() );
//	else CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + fileNm + ".json" ).toString() );
//	//...;
//}
//catch( er )
//{
//	global.console.error( "[ CONFIG ] - " + er );
//	global.process.exit();
//}
//
//var CONNECTION_INFO_IP	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST || "127.0.0.1";
//var CONNECTION_INFO_PORT = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.PORT || "55528";;
//var CONNECTION_INFO_DB	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.NMDB;

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

var dateToFormat = {
	"YYYYMMDD" : function( _date ){
		var date = new Date( _date );
		var yyyy = date.getFullYear().toString();
		var mm = ( date.getMonth() + 1 ).toString().length > 1 ? ( date.getMonth() + 1 ).toString() : "0" + ( date.getMonth() + 1 ).toString()
		var dd = date.getDate().toString().length > 1 ? date.getDate().toString() : "0" + date.getDate().toString()

		return yyyy + mm + dd
	}
	, "YYYY-MM-DD" : function( _date){
		var date = new Date( _date );
		var yyyy = date.getFullYear().toString();
		var mm = ( date.getMonth() + 1 ).toString().length > 1 ? ( date.getMonth() + 1 ).toString() : "0" + ( date.getMonth() + 1 ).toString()
		var dd = date.getDate().toString().length > 1 ? date.getDate().toString() : "0" + date.getDate().toString()

		return yyyy + "-" + mm + "-" + dd;
	}
}

var getDateRange = function( start, end ){
	var startDate = new Date( Number( start.substr(0,4)), Number( start.substr(4,2)) - 1, Number( start.substr(6,2)) );
	var endDate = new Date( Number( end.substr(0,4)), Number( end.substr(4,2)) - 1, Number( end.substr(6,2)) );
	var tmp = startDate;

	var r = [];
	while( tmp < endDate ){
		r.push( dateToFormat["YYYYMMDD"]( tmp ) )
		tmp.setDate(tmp.getDate() + 1);
	}
	r.push( dateToFormat["YYYYMMDD"]( endDate ) )

	return r;
};

//----------------------------------------------------------------------------------------------------goods_list 임포트;
global.console.log( "[ S ] - Lazada - dbSync - Make BAT FILE" );


var startDate = "20190627";
var endDate = "20190630";

var dates = getDateRange( startDate, endDate );

var i = 0,iLen = dates.length,io
var z = 0;
var CMDS = "";
for(;i<iLen;++i){
	io = dates[ i ];

	var CMD00 = 'call "000 - Lazada - dbSync - excuter.bat" ' + io + '\n';
	CMDS += CMD00;
}
CMDS += "cmd/k";
SUtilFsWriteStream.writeFile( _CWD_ + "\\000 - Lazada - dbSync__" + startDate + "_" + endDate + ".bat", CMDS );

global.console.log( "[ E ] - Lazada - dbSync - Make BAT FILE" );

process.exit();

//----------------------------------------------------------------------------------------------------;
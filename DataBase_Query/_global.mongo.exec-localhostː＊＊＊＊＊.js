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

var _CWD_ = global.process.cwd();

var ARGV = global.process.argv;

var CONNECTION_INFO_IP   = ARGV[ 4 ] || "127.0.0.1";//ARGV[ 3 ].replace( /\\/gi, "/" );
var CONNECTION_INFO_PORT = ARGV[ 3 ].replace( /\\/gi, "/" );

var PATH000 = _CWD_ + "/_Backup-ExecutedQuery/";
SUtilFsWriteStream.createDirectory__BeforCheck( PATH000 );

var PATH_DBJS = ARGV[ 2 ].replace( /\\/gi, "/" ); global.console.log( "PATH_DBJS : " + PATH_DBJS );

//----------------------------------------------------------------------------------------------------;

var query = SUtilFsReadStream.getFile( PATH_DBJS ).toString();

//--------------------------------------------------;

//실행된 query 백업;
(function(){
	var a_date = SUtilDate.getDate__Seconds_Array();
	var fn_pad = function( s ){ if( 1 == s.toString().length ) return "0" + s; else return s; };
	var a_path = PATH_DBJS.split( "/" );
	SUtilFsWriteStream.writeFile_UTF8(
		PATH000 + a_date[ 0 ] + fn_pad( a_date[ 1 ] ) + fn_pad( a_date[ 2 ] ) + "_" + fn_pad( a_date[ 3 ] ) + fn_pad( a_date[ 4 ] )
			+ "-----" + global.REQUIRES.os.hostname()
			+ "-----" + CONNECTION_INFO_IP + "ː"+ CONNECTION_INFO_PORT
			+ "-----" + a_path[ a_path.length - 1 ]
			+ ".mongoquery"
		, query );
})();

//--------------------------------------------------;

var info = { host : CONNECTION_INFO_IP, port : CONNECTION_INFO_PORT, dbNm : "admin", query : query, cbComplete : function( error, result ){
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

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
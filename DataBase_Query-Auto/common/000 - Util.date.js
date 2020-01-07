require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Make - goods_list";
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

//DEFINE;

//----------------------------------------------------------------------------------------------------;


var _CWD = global.process.cwd();


//----------------------------------------------------------------------------------------------------;

//FUNCTION;

//----------------------------------------------------------------------------------------------------;

global.SYS0037 = global.SYS0037 || {};

//----------------------------------------------------------------------------------------------------;

global.SYS0037.QUERY_AUTO = global.SYS0037.QUERY_AUTO || {};

//----------------------------------------------------------------------------------------------------;

global.SYS0037.QUERY_AUTO.UTIL = global.SYS0037.QUERY_AUTO.UTIL || {};

//----------------------------------------------------------------------------------------------------;

global.SYS0037.QUERY_AUTO.UTIL.DATE = global.SYS0037.QUERY_AUTO.UTIL.DATE || {};

//----------------------------------------------------------------------------------------------------;

global.SYS0037.QUERY_AUTO.UTIL.DATE.dateToFormat = {
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
//----------------------------------------------------------------------------------------------------;

//LGOIC;

//----------------------------------------------------------------------------------------------------;

//
//----------------------------------------------------------------------------------------------------;



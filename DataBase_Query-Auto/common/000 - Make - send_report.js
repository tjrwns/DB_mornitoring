require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Make - send_report";
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

require( "./000 - Util.webhook.jandi.js" );
require( "./000 - Util.date.js" );

//----------------------------------------------------------------------------------------------------;

//DEFINE;

//----------------------------------------------------------------------------------------------------;


var _CWD = global.process.cwd();

var URLS = {};

//메일을 보내는 라우터;
URLS.URL00 = "http://localhost:45528/diffData/sendMail/report?date=<!=YYYY-MM-DD=!>";

//;
URLS.URL01 = "https://wh.jandi.com/connect-api/webhook/11320800/b17a76bac0bf974b0100e64f4df62559";

//;
URLS.URL02 = "https://i1.jandi.com/inner-api/token";

//;
URLS.URL03 = "https://i1.jandi.com/message-api/v1/teams/11320800/rooms/11443444/messages";
//URLS.URL03 = "https://i1.jandi.com/message-api/v1/teams/11320800/rooms/13132144/messages"
//실헹힐 URL들을 저장하는 변수;
var REQ_URLS = [];

//;
var idx = 0;

//
var TARGET_DATES = [];




//----------------------------------------------------------------------------------------------------;

//URL을 생성하는 로직;
(function(){
	var _ts = SUtilFsReadStream.getFile( _CWD + "/" + fileNm + ".json" );
	var _to = JSON.parse( _ts );
	_to.TARGET_DATES.forEach(function(date){
		var url = URLS.URL00.replace( "<!=YYYY-MM-DD=!>", date );
		REQ_URLS.push( url );
		TARGET_DATES.push( date );
	});
})();

//----------------------------------------------------------------------------------------------------;

//FUNCTION;

//----------------------------------------------------------------------------------------------------;

var send_requset = function( url, header ){

	global.console.log( "-------------------------------------------------------" );
	global.console.log( "[ URL ] - " + url );


	var o = STtwUtilURL.getParseResult( url );

	var l = o.host.split(":");

	var n = {
		encoding: "utf8",
		options: {host: l[0],port: l[1],path: o.path,headers: header ? header : null},
		cbFunctions: { end: send_requset_end,error:send_requset_error }
	};

	try
	{
		STtwUtilHttp.request_GET(n);
	}
	catch(g)
	{
		//g는 error;
		global.console.error( g );
		global.process.exit();
	}
};

var send_requset_end = function( result ){


	global.console.log( "[ SUCCESS ] - " + Date() );
	global.console.log( "==> " + result );
	global.console.log( "-------------------------------------------------------" );

	var msg00 = "**Diff 메일전송 - " + global.SYS0037.QUERY_AUTO.UTIL.DATE.dateToFormat[ "YYYY-MM-DD" ]( new Date() ) + "**\n";
		msg00 += "발송일자 : " + global.SYS0037.QUERY_AUTO.UTIL.DATE.dateToFormat[ "YYYY-MM-DD" ]( new Date() ) + "\n";
		msg00 += "대상일자 : " + TARGET_DATES[ idx ] + "\n";
		msg00 += "```\n" + JSON.stringify( JSON.parse( result ), null, 4 );
	var desc = [];
//	var desc = [
//		{"title" : "ffff","description" : "123" }
//		, {"title" : "dddd","description" : "123" }
//	];

	global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.send_jandi_webHook( URLS.URL01, msg00, desc );
	global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.get_token_jandi( function( token ){
		global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.send_jandi_message( token, URLS.URL03, msg00,function( result ){
			++idx;
			if( idx > REQ_URLS.length - 1 )
			{
				global.process.exit();
			}
			send_requset( REQ_URLS[ idx ], null );
		});
	});
};

var send_requset_error = function( e ){

	global.console.log( "[ ERROR ] - " + Date() );
	global.console.error( e );
	global.console.log( "-------------------------------------------------------" );

	global.process.exit();

	return;
};

//----------------------------------------------------------------------------------------------------;

//LGOIC;

//----------------------------------------------------------------------------------------------------;

send_requset( REQ_URLS[ idx ], null );

//----------------------------------------------------------------------------------------------------;
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

global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK = global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK || {};

//----------------------------------------------------------------------------------------------------;

global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI = global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI || {};

global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.URLS = {};


//;
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.URLS.URL00 = "https://i1.jandi.com/inner-api/token";

//
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO = {};
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO.username = "jun@b2link.co.kr";
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO.password ="tjrwns2482";
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO.platform = "web";
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO.grant_type ="password";

global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.send_jandi_webHook = function( url, msg, desc, cbFunction ){

	var header = {};
		header.accept = "application/vnd.tosslab.jandi-v2+json";
		header[ "content-type" ] = "application/json";

	var o = STtwUtilURL.getParseResult( url );
	var l = o.host.split(":");

	var n = {
		encoding: "utf8",
		options: {
			host: l[0],
		//	port: l[1],
			path: o.path,
			headers: header ? header : null
		}
	};
	try { n.options.method = "POST"; }catch(n){}

	var result = "";
	var req = global.REQUIRES.https.request(n.options, function(res) {

		res.setEncoding( n.encoding );
		res.on("data", function(resText){ try{ result += resText; }catch(n){};})
		res.on("end", function(){
			console.log("WebHook Send Complete - " + new Date() );
			console.log(" result : " + result)
			if( cbFunction ) cbFunction( result );
		})
		res.on("error", function(e){ console.log( e ); })
	});

	req.on("error", function(e){ console.log(e) }),

	STtwUtilHttp.setHttpRequestHeaders(req, n.options.headers)

	var _msg = {"body" : msg,"connectColor" : "#FAC11B","connectInfo" : []};

	if( desc ) _msg.connectInfo = desc;

	req.write( JSON.stringify( _msg ) )

	req.end()
};

/*
{
	"access_token":"9957c4ef66082a4c0df810066f2a61941087b6c42ff2055b650711fd3b11561aa6329ac61ead90e98718a61dc0afa1ac",
	"expires_in":43200,
	"refresh_token":"3045db6f61c5fa8fb08dd2e7fa4c911904c3ef95a1f3be91c02f646a30be5a996105e1244658579be997d2221818a070",
	"token_type":"bearer",
	"ts":1568867621758
}
*/
global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.get_token_jandi = function( cbFunction ){

	var header = {};
		header.accept = "application/vnd.tosslab.jandi-v4+json";
		header[ "content-type" ] = "application/json;charset=UTF-8";
		header[ "accept-encoding" ] = "gzip, deflate, br"
		//header[ "content-length" ] = "92";

	var o = STtwUtilURL.getParseResult( global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.URLS.URL00 );
	var l = o.host.split(":");

	var n = {
		//encoding: "utf8",
		options: {
			host: l[0],
		//	port: l[1],
			path: o.path,
			headers: header ? header : null
		}
	};
	try { n.options.method = "POST"; }catch(n){}

	var result = "";
	var req = global.REQUIRES.https.request(n.options, function(res) {

		//res.setEncoding( n.encoding );
		res.on("data", function(resText){ try{ result += resText; }catch(n){};})
		res.on("end", function(){
			console.log("WebHook Send Complete - " + new Date() );
			console.log(" result : " + result)
			if( cbFunction ) cbFunction( JSON.parse( result ).access_token );
		})
		res.on("error", function(e){ console.log( "[ res - error ] - " + e );})
	});

	req.on("error", function(e){ console.log( "[ req - error ] - " + e );})

	STtwUtilHttp.setHttpRequestHeaders(req, n.options.headers)
	req.write( JSON.stringify( global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.GET_TOKEN_JANDI_INFO ) );

	req.end()
};

global.SYS0037.QUERY_AUTO.UTIL.WEBHOOK.JANDI.send_jandi_message = function( token, url, msg, cbFunction ){

	var header = {};
		header.accept = "application/vnd.tosslab.jandi-v2+json";
		header[ "content-type" ] = "application/json;charset=UTF-8";
		header[ "authorization"] = "bearer " + token;

	var o = STtwUtilURL.getParseResult( url );
	var l = o.host.split(":");

	var n = {
		encoding: "utf8",
		options: {
			host: l[0],
		//	port: l[1],
			path: o.path,
			headers: header ? header : null
		}
	};
	try { n.options.method = "POST"; }catch(n){}

	var result = "";
	var req = global.REQUIRES.https.request(n.options, function(res) {

		res.setEncoding( n.encoding );
		res.on("data", function(resText){ try{ result += resText; }catch(n){};})
		res.on("end", function(){
			console.log("WebHook Send Complete - " + new Date() );
			console.log(" result : " + result)
			if( cbFunction ) cbFunction( result );
		})
		res.on("error", function(e){ console.log( "[ res - error ] - " + e );})
	});

	req.on("error", function(e){ console.log( "[ req - error ] - " + e );})

	STtwUtilHttp.setHttpRequestHeaders(req, n.options.headers)
	var _msg = { text  : msg };
	req.write( JSON.stringify( _msg ) );

	req.end()
};
//----------------------------------------------------------------------------------------------------;

//LGOIC;

//----------------------------------------------------------------------------------------------------;

//
//----------------------------------------------------------------------------------------------------;



//require( "../../Development-NodeJS_Modules/Common-WebServer-000-0.js" );
require( "../../Development-NodeJS_Modules/Common-WebServer-000-1.js" );
//require( "../../Development-NodeJS_Modules/Common-WebServer-001-0.js" );
//require( "../../Development-NodeJS_Modules/Common-WebServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "HTTPServer_WebPage.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
//require( "../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
require( "./_$TATIC_NODE_MODULES.js" );

//require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Define - CONST;

//----------------------------------------------------------------------------------------------------;

/**
 * HTTPService를 할 대상 root Path
 * @property {String}
 */
global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH = global.process.cwd() + "/../WebPage/root/";
global._$TATIC_CONST_SERVER_HTTP_HOST = null;
global._$TATIC_CONST_SERVER_HTTP_PORT = 45527;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
	"" : "text/plain"
	, bmp : "image/bmp"
	, css : "text/css"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"

	, "server-120-ip" : "application/javascript"
	, "server-122-ip" : "application/javascript"
	, "server-123-ip" : "application/javascript"

	//, tjs : "application/javascript"//오픈 금지;
	//, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	//Font;
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"
};

global.b2link.fs.autoLoad_JSs([ [ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ] ]);

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Router;

//----------------------------------------------------------------------------------------------------;

//*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath();
//*/

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	var _CWD_ = global.process.cwd();
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	//Custom URI Example - http://localhost:port/a;
	_[ "/a" ] = function( req, res ){
		console.log( 1 );
		SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
	};

	(function(){
		var version="20190710_1759";
		var PATH__data_static = _CWD_ + "/../WebPage/data-static/";
/*/
		var PATH__productID_lite  = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao--ProductID-Lite/UNZIP/" + version + "/";
		var PATH__sellcount_day   = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Day/UNZIP/" + version + "/";
		var PATH__sellcount_month = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Month/UNZIP/" + version + "/";
		var PATH__sellcount_time  = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Time/UNZIP/" + version + "/";

		var PATH_ZIP__productID_lite = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao--ProductID-Lite/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_day = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Day/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_month = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Month/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_time = _CWD_ + "/../../../B2LiNK-OnSight-FileData--Taobao-SellCount-Time/ZIP/" + version + "/";
/*/
		var PATH__productID_lite = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao--ProductID-Lite/UNZIP/" + version + "/";
		var PATH__sellcount_day = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Day/UNZIP/" + version + "/";
		var PATH__sellcount_month = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Month/UNZIP/" + version + "/";
		var PATH__sellcount_time = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Time/UNZIP/" + version + "/";

		var PATH_ZIP__productID_lite = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao--ProductID-Lite/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_day = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Day/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_month = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Month/ZIP/" + version + "/";
		var PATH_ZIP__sellcount_time = "E:/GitHub_B2LiNK/B2LiNK-OnSight-FileData--Taobao-SellCount-Time/ZIP/" + version + "/";
//*/

		_[ "/data-static" ] = function( req, res ){
			var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, PATH__data_static, q.filePath );
		};

		/*/
			http://localhost:45527/SYS0030/taobao/productID?goods_id=10014839772&year=2019
		//*/
		_[ "/SYS0030/taobao/productID" ] = function( req, res ){
			var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

			if( !q.goods_id || !q.year ) global.b2link.response.send_200_False( req, res );
			
			var goods_id_front2 = q.goods_id.toString().substr( 0, 2 );
			var filePath = q.year + "/" + goods_id_front2 + "/" + q.goods_id + ".json";

			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, PATH__productID_lite, filePath );
		};

		/*/
			http://localhost:45527/SYS0030/taobao/day?goods_id=10323612959
		//*/
		_[ "/SYS0030/taobao/day" ] = function( req, res ){
			var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

			if( !q.goods_id ) global.b2link.response.send_200_False( req, res );
			
			var goods_id_front2 = q.goods_id.toString().substr( 0, 2 );
			var filePath = goods_id_front2 + "/" + q.goods_id;

			var fs_zip = global.b2link.fs.getFile_UTF8( PATH_ZIP__sellcount_day + goods_id_front2 + ".zip" );

			var fs_zip = SUtilFsReadStream.getFile( PATH_ZIP__sellcount_day + goods_id_front2 + ".zip" );
			var ba_u = SUtilBuffer.uncompress_String( fs_zip );
//			response_200_(res, ba_u );


			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, PATH__sellcount_day, filePath );
		};
		/*/
			http://localhost:45527/SYS0030/taobao/month?goods_id=10323612959
		//*/
		_[ "/SYS0030/taobao/month" ] = function( req, res ){
			var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

			if( !q.goods_id ) global.b2link.response.send_200_False( req, res );
			
			var goods_id_front2 = q.goods_id.toString().substr( 0, 2 );
			var filePath = goods_id_front2 + "/" + q.goods_id;

			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, PATH__sellcount_month, filePath );
		};
		/*/
			http://localhost:45527/SYS0030/taobao/time?goods_id=10323612959
		//*/
		_[ "/SYS0030/taobao/time" ] = function( req, res ){
			var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

			if( !q.goods_id ) global.b2link.response.send_200_False( req, res );
			
			var goods_id_front2 = q.goods_id.toString().substr( 0, 2 );
			var filePath = goods_id_front2 + "/" + q.goods_id;

			global.b2link.response.sendStream_200_File_URI_NCallback( req, res, PATH__sellcount_time, filePath );
		};

	})();

	/*/
	_[ "/js/index.js" ]
		= _[ "/js/index_dev_mongodb.js" ]
		= function( req, res ){ global.b2link.response.sendStream_200_File_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH ); };
	//*/

	//B2LiNK-B2Labs IP 이외 차단 파일 목록;
	require( "../../Development-NodeJS_Modules/NotAvailableServiceFiles__IP.js" );
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Initialize;

//----------------------------------------------------------------------------------------------------;

//WebServer용 HTTPServer를 생성한다.;
global.server = global.b2link.server_http.newServer__WebServer();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, Development-NodeJS_Modules에 존재한다.;
// - ./js__b2link__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.b2link.fs.autoLoad_JSs([
		//  [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker/"                  , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-BrandPortal-Dev"            , "./js__b2link__brandPortal/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer__webServer/" , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js__b2link__fileServer/"             , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__sessionServer/"          , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebHookServer-Dev"          , "./js__b2link__webHookServer/"          , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/" , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev", "./js__b2link__SYS0010/", { router : 1, router_external : 1, router_internal : 1 } ]
	]);
})();
//*/

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
require( "../../../Development-NodeJS_Modules/Common-APIServer-000-0.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-000-1.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-000-1-express.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-001-0.js" );
//require( "../../../Development-NodeJS_Modules/Common-APIServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "APIServer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리;

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
//require( "./_$TATIC_NODE_MODULES.js" );

require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

//----------------------------------------------------------------------------------------------------;

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;
if( global.REQUIRES ){ if( !global.REQUIRES.mongodb ){ global.TtwLog.error( "알수없는 이유로 global.REQUIRES.mongodb가 존재하지 않는다" ); debugger; } }else{ global.TtwLog.error( "알수없는 이유로 global.REQUIRES가 존재하지 않는다" ); debugger; }

//----------------------------------------------------------------------------------------------------;

//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

/**
 * Session Time
 * 2000000 : 37분 정도
 * 10000000 : 3시간 정도
 * @static
 * @property {Number}
 */
global._$TATIC_CONST_SESSION_TIME = 10000000;

//----------------------------------------------------------------------------------------------------;

/*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;
//서버 생성 전에 모든 Router를 구동하기전 공통 Interface Overriding;

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 File에 축적한다.;
//global.b2link.server_api.overrideInterface_collectURILog_File();

//SUtilHttpServer.evt_request__API_Only Overriding 한다. - URI, IP, PORT, SCODE, Session ID등을 DataBase에 축적한다.;
global.b2link.server_api.overrideInterface_collectURILog_MongoDB();
//*///--------------------------------------------------URI 접근 및 사용 정보를 기록한다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){

	(function(){
		SUtilHttpServer.evt_request__API_Only = function( req, res ){
			var url = decodeURIComponent( req.url );
			var q = global.b2link.url.getQueryFromURL( url );//URL to Query Object;
			var uri = STtwUtilHttpServer.getURIFromURL( url );

			try
			{
				global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ uri ]( req, res );
			}
			catch( er )
			{
				return STtwUtilHttpServer.evt_request__httpServer_404( req, res );
			}
		};
	})();

	//----------Initlaize Server;
	var server_port = process.argv[ 2 ] ? process.argv[ 2 ] : 45528;
	if( "NaN" == parseFloat( server_port ).toString() ) server_port = 45528;

	var _server = new global.Lib.Ttw.CLASS.HTTPAPIServer.MongoDB({
		instanceKey : "global.Lib.Ttw.httpAPIServer_MongoDB"
		, mongodb : { host : "localhost", port : 55522 }
		//, mongodb : { host : "222.239.10.120", port : 55521 }
		, server : { host : null, port : server_port }
	});
	global.server = _server;


	var f = _server.addRouter;

	//http://localhost:port/member_basic/getAllList__email?a=1&b=1
	f( "/member_basic/getAllList__email", function( req, res ){
		var _server = global.server;
		var q = _server.getQueryFromURL( req.url );

		//use q;
		//...Custom parameter process;

		q.db = "member";
		q.q = "member_basic$getAllList__email()";

		_server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				console.error( q.q + " Error : " + error );
				_server.sendResponse_200_False( req, res );
				return;
			}

			//...;

			_server.sendResponse_200_String( req, res, JSON.stringify( result ) );
		});
	});

	//--------------------------------------------------;
})();
//*/

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, Development-NodeJS_Modules에 존재한다.;
// - ./js__b2link__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.b2link.fs.autoLoad_JSs([
		//  [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js-express__b2link__fileServer/"     , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker/"                  , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-B2Ker-Dev"                  , "./js__b2link__b2ker-excel/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-BrandPortal-Dev"            , "./js__b2link__brandPortal/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer/"            , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"            , "./js__b2link__excelServer__webServer/" , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-FileServer-Dev"             , "./js__b2link__fileServer/"             , { b2link_router : 1 } ]
		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__sessionServer/"          , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebHookServer-Dev"          , "./js__b2link__webHookServer/"          , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
		//, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/" , { b2link_router : 1 } ]

		//, [ "JavaScript Import - B2LiNK-SessionServer-Dev"          , "./js__b2link__SYS0010/"                , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]

		    [ "JavaScript Import - B2LiNK-OnSight-DB-Processing"      , "./js__b2link__SYS0037/"                , { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);
})();
//*/

//확인하기 - 20170911_1944 - 제대로 된 인증 절처 및 디테일한 내용이 픽스 되기 전까진 주석 처리;
//global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack = global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack;

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

//	APIServer Routers & API Sources;

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

(function(){

	//--------------------------------------------------;

	var CWD = global.process.cwd();

	var _COMMON_PATH0 = CWD + "/js__b2link__SYS0037__BatchServer";

	//--------------------------------------------------;



	require( _COMMON_PATH0 + "/000__common/000_define.js" );
	require( _COMMON_PATH0 + "/000__common/050_util.js" );
	require( _COMMON_PATH0 + "/000__common/100_dashboard.js" );



	require( _COMMON_PATH0 + "/100__수집데이터머지/000_define.js" );

	require( _COMMON_PATH0 + "/100__수집데이터머지/200_kaola.js" );
	require( _COMMON_PATH0 + "/100__수집데이터머지/200_taobao.js" );
	require( _COMMON_PATH0 + "/100__수집데이터머지/200_vip.js" );
	require( _COMMON_PATH0 + "/100__수집데이터머지/200_jd.js" );
	require( _COMMON_PATH0 + "/100__수집데이터머지/200_lazada.js" );
	require( _COMMON_PATH0 + "/100__수집데이터머지/200_shopee.js" );

	require( _COMMON_PATH0 + "/100__수집데이터머지/100_all.js" );
})();

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
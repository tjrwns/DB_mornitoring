//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/000__common/050_util.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE - STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @property {Object} 배치 라우터 작동중 여부 관리 API Object;
	 */
	global.__BATCH_ROUTER__ = {

		//배치 라우터 작동중 여부;
		b_processing : false

		//수정하기 - 최석준 - 20190228_1857 - b_url -> URL;
		//배치 라우터의 요청 URL;
		, b_url : null
		, URL : null

		//배치 라우터의 종료시간;
		, endTime : null

		//배치 라우터의 시작시간;
		, startTime : null
	};

	/**
	 * Request 객체의 Query Parameter 검증 공통 함수
	 * @function
	 * @param {http.ClientRequest} req
	 * @param {http.ClientResponse} res
	 * @param {Array} queryParameterList [ "", "", "", ... ]
	 * @param {Object} q
	 * <code>
		{
			"code_db" : ""
			, "shop" : ""
			, "targetYear" : ""
			, ...
		}
	 * </code>
	 * @return {Boolean}
	 */
	global.__BATCH_ROUTER__.RESPONSE_COMMON_VALIDATION = function( req, res, queryParameterList, q ){
		global.TtwLog.log( "--- [ S ] - global.__BATCH_ROUTER__.RESPONSE_COMMON_VALIDATION():void----------" );

		var b = true;

		var a = queryParameterList;
		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			if( !q[ io ] )
			{
				b = false;
				break;
			}
		}

		if( !b )
		{
			var _ERROR_RESPONSE_DATA_ = { r : 2, m : "BadValue" };

			global.b2link.response.send_200_JSON_Pretty( req, res, _ERROR_RESPONSE_DATA_ );

			global.TtwLog.log( "--- [ E ] - global.__BATCH_ROUTER__.RESPONSE_COMMON_VALIDATION():void----------return false;" );
			return false;
		}

		global.TtwLog.log( "--- [ E ] - global.__BATCH_ROUTER__.RESPONSE_COMMON_VALIDATION():void----------return true" );
		return true;
	};

	//--------------------------------------------------;

	/**
	 * 배치 라우터가 완료 또는 종료되면 잔디 웹훅와 클라이언트에 결과 전달.;
	 * @function
	 * @param {http.ClientRequest} req
	 * @param {http.ClientResponse} res
	 * @param {Object} param
	 */
	global.__BATCH_ROUTER__.endProcessing = function( req, res, param ){
		global.TtwLog.log( "--- [ S ] - global.__BATCH_ROUTER__.endProcessing():void----------" );

		var t = global.__BATCH_ROUTER__;

		if( t.b_processing )
		{
			t.endTime = global.b2link.date.timstampToformatedDatetime( Date.now() );

			t.b_processing = false;

			param.startTime = t.startTime;
			param.endTime = t.endTime;
			param.b_url = t.b_url;

			var title0 = t.b_url.split( "?" )[ 0 ];
			var title1 = title0.split( "/" );

			//잔디 메신저 웹훅에 전송랑 데이터;
			var hookData = {
				body : "[ " + param.startTime + " ] - [ 배치작업 ] - [ " + title1[ 1 ] + " ] --- " + title1[ 2 ]
				, connectInfo : [
					{
						title : "Result"
						, description : JSON.stringify( param, null, "\t" )
					}
				]
			};

			//잔디 메신저 웹훅 기능 사용;
			global.fnUseWebHookAPI._sendCommon( hookData, global.onsight.batchServer.webhook.common.path, "배치작업 잔디 메세지 전송" );

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON_Pretty( req, res, param );

			window.console.warn( "global.__BATCH_ROUTER__.endProcessing::t.b_processing : " + t.b_processing );
		}

		global.TtwLog.log( "--- [ E ] - global.__BATCH_ROUTER__.endProcessing():void----------" );
	};

	/**
	 * 배치 라우터 구동시 기존에 작동중인 배치 라우터가 없다면 상태 값을 True로 변경.
	 * 배치 라우터가 작동중이면 클라이언트에 Error Response를 전달.
	 * @function
	 * @param {http.ClientRequest} req
	 * @param {http.ClientResponse} res
	 * @return {Boolean} 0, 1
	 */
	global.__BATCH_ROUTER__.startProcessing = function( req, res ){
		global.TtwLog.log( "--- [ S ] - global.__BATCH_ROUTER__.startProcessing():{Boolean}----------" );

		var t = global.__BATCH_ROUTER__;

			//수정하기 - 최석준 - 20190228_1857 - b_url -> URL;
			t.b_url = global.decodeURIComponent( req.url );
			t.URL = global.decodeURIComponent( req.url );

		if( !t.b_processing )
		{
			t.startTime = global.b2link.date.timstampToformatedDatetime( Date.now() );

			t.b_processing = true;
			window.console.warn( "global.__BATCH_ROUTER__.startProcessing::t.b_processing : " + t.b_processing );

			global.TtwLog.log( "--- [ E ] - global.__BATCH_ROUTER__.startProcessing():{Boolean}----------return 1;" );
			return 1;
		}
		else
		{
			t.startTime = global.b2link.date.timstampToformatedDatetime( Date.now() );

			//클라이언트에게 실패 결과 전송;
			global.b2link.response.send_200_False( req, res );

			window.console.warn( "global.__BATCH_ROUTER__.startProcessing::t.b_processing : " + t.b_processing );

			global.TtwLog.log( "--- [ E ] - global.__BATCH_ROUTER__.startProcessing():{Boolean}----------return 0;" );
			return 0;
		}
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	var _CURRENT_PATH = global.process.cwd() + "/js__b2link__SYS0037__BatchServer/000__common/";

	//------------------------------;

	var _CP_OPTION = { maxBuffer : 1024 * 500 };

	var _EXPORT_JSON_PATH = global.process.cwd() + "/temp/";

	//--------------------------------------------------;

	/**
	 * Request 객체의 Query Parameter 검증 함수
	 * @function
	 * @param {http.ClientRequest} req
	 * @param {http.ClientResponse} res
	 * @param {uint} queryParameterType 0, 1
	 * @param {Object} q
	 * <code>
		{
			"code_db" : ""
			, "shop" : ""
			, "targetYear" : ""
		}
	 * </code>
	 * @return {Boolean}
	 */
	var _RESPONSE_COMMON_VALIDATION = function( req, res, queryParameterType, q )
	{
		global.TtwLog.log( "- [ S ] - _RESPONSE_COMMON_VALIDATION():{Boolean}----------" );

		var bool = global.__BATCH_ROUTER__.RESPONSE_COMMON_VALIDATION( req, res
			, _RESPONSE_COMMON_VALIDATION.CHECK_QUERY_PARAMETERS[ "TYPE" + queryParameterType ]
			, q
		);

		global.TtwLog.log( "- [ E ] - _RESPONSE_COMMON_VALIDATION():{Boolean}----------" );
		return bool;
	};
	//Request 객체의 Query Parameter 목록;
	_RESPONSE_COMMON_VALIDATION.CHECK_QUERY_PARAMETERS = {
		  TYPE0 : [ "code_db", "nm_site", "targetYear" ]
		, TYPE1 : [ "code_db", "nm_site" ]
		, TYPE2 : [ "code_db", "nm_site", "nm_db", "nm_col" ]
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	ROUTER;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetDB : 운영디비
			, db : Kaola_2018-수집
			, collection : 20181231_0155-LIST
			, out : Kaola_2018.수집_20181231_0155-LIST.json
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getDbListByHost?code_db=VIP
	* </code>
	*/
	global.server.addRouter( "/common/util/getDbListByHost", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/getDbListByHost():void----------" );

		//배치작업이 진행되고 있다면 중지;
		// if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getDbListByHost.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query;//.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "getDbListByHost.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				// global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /common/util/getDbListByHost():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetDB : 운영디비
			, db : Kaola_2018-수집
			, collection : 20181231_0155-LIST
			, out : Kaola_2018.수집_20181231_0155-LIST.json
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getCollectionListByHost?code_db=VIP&nm_db={{db}}
	* </code>
	*/
	global.server.addRouter( "/common/util/getCollectionListByHost", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/getDbListByHost():void----------" );

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getCollectionListByHost.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "getCollectionListByHost.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /common/util/getCollectionListByHost():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetDB : 운영디비
			, db : Kaola_2018-수집
			, collection : 20181231_0155-LIST
			, out : Kaola_2018.수집_20181231_0155-LIST.json
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getCollectionListByHost__info?code_db=VIP&nm_db={{db}}
	* </code>
	*/
	global.server.addRouter( "/common/util/getCollectionListByHost__info", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/getCollectionListByHost__info():void----------" );

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getCollectionListByHost__info.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "getCollectionListByHost__info.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /common/util/getCollectionListByHost__info():void----------" );
	});


	/**
	 * 컬렉션리스트를 가져올시 size,count,brand_count,shop.count를 같이전달하는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetDB : 운영디비
			, db : Kaola_2018-수집
			, collection : 20181231_0155-LIST
			, out : Kaola_2018.수집_20181231_0155-LIST.json
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getCollectionListFromDashboardDailyByHost?code_db=VIP&target_year=2019
	* </code>
	*/
	global.server.addRouter( "/common/util/getCollectionListFromDashboardDailyByHost", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/getCollectionListFromDashboardDailyByHost():void----------" );

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.target_year ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		if( q.code_db == "TAOBAO-LIST" )
		{

			var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "taobao_list_getCollectionListAndSizeCountByHost.dbjs" );

			//쿼리내용의 치환자를 파라미터로 교체한다.;
			var query = _query.replace( "<!=target_year=!>", q.target_year );
	
			//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
			global.b2link.fs.writeQuery( _CURRENT_PATH + "taobao_list_getCollectionListAndSizeCountByHost.query", query );
	

		}
		else
		{

			var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getCollectionListFromDashboardDailyByHost.dbjs" );

			//쿼리내용의 치환자를 파라미터로 교체한다.;
			var query = _query.replace( "<!=target_year=!>", q.target_year );

			//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
			global.b2link.fs.writeQuery( _CURRENT_PATH + "getCollectionListFromDashboardDailyByHost.query", query );

		}
		
		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /common/util/getCollectionListFromDashboardDailyByHost():void----------" );
	});

	/**
	 * 웹서버와 연계해 화면을 서비스해주는 라우터;
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetYear : 2018
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/dbExport대상가져오기-ui?code_db=VIP
	* </code>
	*/
	global.server.addRouter( "/common/util/dbExport대상가져오기-ui", function( req, res ){
		global.CSJLog.log( "- [ S ] -/common/util/dbExport대상가져오기-ui():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "dbExport대상가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query;//.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "dbExport대상가져오기.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				global.__BATCH_ROUTER__.b_processing = false;

				//잠시 후 사라질 임시 URI 발급;
				var redirectURI = global.b2link.uri.createTempURI( req, res, result );
				var path = "DBExport"
				global.b2link.response.send_301_Batch( req, res, path, redirectURI );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] -/common/util/dbExport대상가져오기-ui():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetDB : 운영디비
			, db : Kaola_2018-수집
			, collection : 20181231_0155-LIST
			, out : Kaola_2018.수집_20181231_0155-LIST.json
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>

		//파일명지정의경우;
		http://localhost:45528/common/dbExport?code_db=VIP&nm_db=Kaola_2018-수집&nm_col=20181231_0155-LIST&out=Kaola_2018.수집_20181231_0155-LIST.json
		http://localhost:45528/common/dbExport?code_db=VIP&nm_db=Kaola_2018-수집&nm_col=20181231_0155-DETAIL&out=Kaola_2018.수집_20181231_0155-DETAIL.json
		http://localhost:45528/common/dbExport?code_db=VIP&nm_db=Kaola_2018-수집&nm_col=20181231_0155-DETAIL_HTML&out=Kaola_2018.수집_20181231_0155-DETAIL_HTML.json
	* </code>
	*/
	global.server.addRouter( "/common/util/dbExport", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/dbExport():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		var outFile = q.out || q.nm_db + "." + q.nm_col + ".json";
		var outFilePath = _EXPORT_JSON_PATH + "/" + outFile;
		var option = {
			db : q.nm_db
			, collection : q.nm_col
			, out : outFilePath
		};
		var command = global.b2link.mongodb.exportDb( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), option );

		//mongExort 실행;
		SUtilCP.asExec( command, _CP_OPTION, function( error, stdout, stderr ){
			if( error )
			{
				//처리 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_JSON_Pretty( req, res, error );
				return;
			};

			//Mongoexport의 결과는 stderr로 출력되게 되어있음;
			var d = {
				error : error
				, stdout : stdout
				, stderr : stderr
			};

			global.__BATCH_ROUTER__.endProcessing( req, res, { r : 0, m : "OK", d : d });
		});

		global.CSJLog.log( "- [ E ] - /common/dbExport():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{

		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		//파일명지정의경우;
		http://localhost:45528/common/util/dbImport?code_db=VIP&nm_db=test&nm_col=test&inputFilePath=D:\GitHub_B2LiNK\B2LiNK-OnSight-DB-Processing\HTTPServer_MongoDB\APIServer\temp\Kaola_2018.20181015.json
	* </code>
	*/
	global.server.addRouter( "/common/util/dbImport", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/util/dbImport():void----------" );

		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.inputFilePath ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//var inputFile = q.file || q.nm_db + "." + q.nm_col + ".json";
		//var inputFilePath = inputFile;

		//Imort파일 존재여부 체크;
		if( !global.REQUIRES.fs.existsSync( q.inputFilePath ) ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );

		var option = { db : q.nm_db, collection : q.nm_col, file : q.inputFilePath };
		var command = global.b2link.mongodb.importDb( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), option );

		//mongExort 실행;
		SUtilCP.asExec( command, _CP_OPTION, function( error, stdout, stderr ){
			if( error )
			{
				//처리 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_JSON_Pretty( req, res, error );
				return;
			};

			//Mongoexport의 결과는 stderr로 출력되게 되어있음;
			var d = {
				error : error
				, stdout : stdout
				, stderr : stderr
			};

			global.__BATCH_ROUTER__.endProcessing( req, res, { r : 0, m : "OK", d : d });
		});

		global.CSJLog.log( "- [ E ] - /common/util/dbImport():void----------" );
	});

	/**
	 * 웹서버와 연계해 화면을 서비스해주는 라우터;
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetYear : 2018
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/dbImport-ui
	* </code>
	*/
	global.server.addRouter( "/common/util/dbImport-ui", function( req, res ){
		global.CSJLog.log( "- [ S ] -/common/util/dbImport-ui():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		global.__BATCH_ROUTER__.b_processing = false;

		//잠시 후 사라질 임시 URI 발급;
		var redirectURI = global.b2link.uri.createTempURI( req, res, null );
		var path = "DBimport"

		global.b2link.response.send_301_Batch( req, res, path, redirectURI );

		global.CSJLog.log( "- [ E ] -/common/util/dbImport-ui():void----------return;" );
		return;
	});

	/**
	 * 웹서버와 연계해 화면을 서비스해주는 라우터;
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetYear : 2018
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getImportFileList?filePath=
	* </code>
	*/
	global.server.addRouter( "/common/util/getImportFileList", function( req, res )
	{

		global.CSJLog.log( "- [ S ] -/common/util/getImportFileList():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;
		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.filePath ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		if( !global.REQUIRES.fs.existsSync( q.filePath ) ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );

		var results = [];
		var _resulut = global.REQUIRES.fs.readdirSync( q.filePath );
			_resulut.forEach( function( file ){ if( global.REQUIRES.path.extname( file ).toLowerCase() == ".json" ) results.push( file ); })

		global.__BATCH_ROUTER__.b_processing = false;

		global.b2link.response.send_200_JSON_Pretty( req, res, results );

		global.CSJLog.log( "- [ E ] -/common/util/getImportFileList:void----------return;" );
		return;
	});

	/**
	 * 웹서버와 연계해 화면을 서비스해주는 라우터;
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetYear : 2018
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getImportFileList?code_db=VIP&nm_db={{DB}}&nm_col={{collection}}
	* </code>
	*/
	global.server.addRouter( "/common/util/getCollectionInfo", function( req, res ){
		global.CSJLog.log( "- [ S ] -/common/util/getCollectionInfo():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getCollectionInfo.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "getCollectionInfo.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] -/common/util/getCollectionInfo():void----------" );
	});

	/**
	 * 웹서버와 연계해 화면을 서비스해주는 라우터;
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			targetYear : 2018
		}
	* </code>
	*
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/common/util/getMergeTarget?code_db=VIP
	* </code>
	*/
	global.server.addRouter( "/common/util/getMergeTarget", function( req, res ){
		global.CSJLog.log( "- [ S ] -/common/util/getMergeTarget():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH + "getMergeTarget.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		//var query = _query.replace( "<!=db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );
		var query = _query;

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH + "getMergeTarget.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( global.b2link.response.getResultStatus( result ) )
			{
				global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] -/common/util/getMergeTarget():void----------" );
	});

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
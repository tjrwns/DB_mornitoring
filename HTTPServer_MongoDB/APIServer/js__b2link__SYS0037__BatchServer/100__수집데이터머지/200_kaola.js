//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/100__수집데이터머지/200_kaola.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	var _CURRENT_PATH_ = global.process.cwd() + "/js__b2link__SYS0037__BatchServer/100__수집데이터머지/";

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
			, ...
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
		  TYPE0 : []
		, TYPE1 : []
		, TYPE2 : []
	};

	//padding을 추가하는 함수;
	var pad = function(n, width) {
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
	}

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	ROUTER;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * UI 없이 요청화면에 결과를 표출하는 라우터;
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
		http://localhost:45528/수집데이터머지/kaola/02_정제대상월간수집컬렉션가져오기?code_db=kaola&targetYear=2018
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/02_정제대상월간수집컬렉션가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/02_정제대상월간수집컬렉션가져오기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__02_정제대상월간수집컬렉션가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__02_정제대상월간수집컬렉션가져오기.query", query );

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

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/02_정제대상월간수집컬렉션가져오기():void----------" );
	});

	/**
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
		http://localhost:45528/수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기?code_db=kaola&targetYear=2018
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__00_정제대상데일리수집컬렉션가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__00_정제대상데일리수집컬렉션가져오기.query", query );

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

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기():void----------" );
	});

	//----------------------------------------------------------------------------------------------------;

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
		http://localhost:45528/수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기-ui?code_db=kaola&ttargetYear=2018&afadfasdf=1
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기-ui", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기-ui():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__00_정제대상데일리수집컬렉션가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__00_정제대상데일리수집컬렉션가져오기.query", query );

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
				//Todo : 파일명정책세워 변경하기 -최석준- 2019.01.31;
				var type = "00_dataMerge";
				global.b2link.response.send_301_Batch( req, res, type, redirectURI );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/00_정제대상데일리수집컬렉션가져오기-ui():void----------" );
	});

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 수집데이터를 하나의 document로 합치는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/kaola/01_데일리수집데이터를합치기?code_db=kaola&nm_col=20181231_0155
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/01_데일리수집데이터를합치기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/01_데일리수집데이터를합치기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__01_데일리수집데이터를합치기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_col=!>", q.nm_col);

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__01_데일리수집데이터를합치기.query", query );

		//몽고디비에 쿼리를 요청한다.;
		//*/
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			//global.b2link.response.send_200_JSON( req, res, result );
			global.__BATCH_ROUTER__.endProcessing( req, res, result );
		});
		/*/
		debugger;
		var _result = global.b2link.mongodb.executeQuerySync( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query )

		var result = JSON.parse( _result );
		if( global.b2link.response.getResultStatus( result ) )
		{
			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.__BATCH_ROUTER__.endProcessing( req, res, result );
			return;
		}
		else
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, result );
			return;
		}
		//*/

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/01_데일리수집데이터를합치기():void----------" );
	});

	/**
	 * 수집데이터를 월간 컬렉션으로 합치는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
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
		http://localhost:45528/수집데이터머지/kaola/02_데일리수집데이터를월간데이터로정제?code_db=kaola&targetYear=2019&targetMonth=3
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/02_데일리수집데이터를월간데이터로정제", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/02_데일리수집데이터를월간데이터로정제():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetMonth ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__02_데일리수집데이터를월간데이터로정제.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear ).replace( "<!=targetMonth=!>", pad( q.targetMonth, 2 ) );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__02_데일리수집데이터를월간데이터로정제.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			//global.b2link.response.send_200_JSON( req, res, result );
			global.__BATCH_ROUTER__.endProcessing( req, res, result );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/02_데일리수집데이터를월간데이터로정제():void----------" );
	});

	/**
	 * 수집데이터를 하나의 document로 합치는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/상품상세정보가져오기?code_db=kaola&nm_db={{nm_db}}&nm_col={{nm_col}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품상세정보가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품상세정보가져오기():void----------" );

		var NAME = "kaola__상품상세정보가져오기";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db).replace( "<!=nm_col=!>", q.nm_col);

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품상세정보가져오기():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/taobao/상품상세정보가져오기썸네일?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품상세정보가져오기썸네일", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품상세정보가져오기썸네일():void----------" );

		var NAME = "kaola__상품상세정보가져오기썸네일";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품상세정보가져오기썸네일():void----------" );
	});


	/**
	 * 상품리스트의 정보를 가져오는 라우터 - 페이징처리
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/taobao/상품상세정보가져오기썸네일페이징?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}&limit={{limit}}&skip={{skip}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품상세정보가져오기썸네일페이징", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품상세정보가져오기썸네일페이징():void----------" );

		var NAME = "kaola__상품상세정보가져오기썸네일페이징";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품상세정보가져오기썸네일페이징():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/상품상세정보가져오기리스트?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}&skip={{skip}}&limit={{limit}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품상세정보가져오기리스트", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품상세정보가져오기리스트():void----------" );

		var NAME = "kaola__상품상세정보가져오기리스트";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=nm_col=!>", q.nm_col )
				.replace( "<!=skip=!>", q.skip )
				.replace( "<!=limit=!>", q.limit );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품상세정보가져오기리스트():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/상품가격추이?code_db={{code_db}}&product_id={{product_id}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품가격추이", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품가격추이():void----------" );

		var NAME = "kaola__상품가격추이";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.product_id ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;



		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=product_id=!>", q.product_id )

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품가격추이():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/상품가격추이_PIMS?code_db={{code_db}}&product_id={{product_id}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품가격추이_PIMS", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품가격추이_PIMS():void----------" );

		var NAME = "kaola__상품가격추이_PIMS";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.product_id ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=product_id=!>", q.product_id )

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품가격추이_PIMS():void----------" );
	});

/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/상품가격가격분포카테고리?code_db={{code_db}}&category_id={{category_id}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품가격가격분포카테고리", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품가격가격분포카테고리():void----------" );

		var NAME = "kaola__상품가격가격분포카테고리";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=category_id=!>", q.category_id )

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품가격가격분포카테고리():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/lazada/상품상세정보가져오기검색조건대용량?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}&skip={{skip}}&limit={{limit}}&search={{search}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/상품상세정보가져오기검색조건대용량", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/상품상세정보가져오기검색조건대용량():void----------" );

		var NAME = "kaola__상품상세정보가져오기검색조건대용량";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=nm_col=!>", q.nm_col )
				.replace( "<!=skip=!>", q.skip )
				.replace( "<!=limit=!>", q.limit )
				.replace( "<!=search=!>", q.search );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/상품상세정보가져오기검색조건대용량():void----------" );
	});

	/**
	 * 상품리스트의 정보를 가져오는 라우터 - 페이징처리
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/비교상품상세정보가져오기썸네일?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/비교상품상세정보가져오기썸네일", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/비교상품상세정보가져오기썸네일():void----------" );

		var NAME = "kaola__비교상품상세정보가져오기썸네일";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/비교상품상세정보가져오기썸네일():void----------" );
	});


	/**
	 * 상품리스트의 정보를 가져오는 라우터 - 페이징처리
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/비교상품상세정보가져오기검색조건썸네일대용량?code_db={{code_db}}&nm_db={{nm_db}}&nm_col={{nm_col}}&skip={{skip}}&limit={{limit}}&search={{search}}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/비교상품상세정보가져오기검색조건썸네일대용량", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/비교상품상세정보가져오기검색조건썸네일대용량():void----------" );

		var NAME = "kaola__비교상품상세정보가져오기검색조건썸네일대용량";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------Validation - Query Parameters;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------Validation - Query Parameters;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
				.replace( "<!=nm_col=!>", q.nm_col )
				.replace( "<!=skip=!>", q.skip )
				.replace( "<!=limit=!>", q.limit )
				.replace( "<!=search=!>", q.search );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/비교상품상세정보가져오기썸네일():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/머지데이터의브랜드정보가져오기?code_db=kaola&nm_db=kaola_2019-수집&nm_col=20190225
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/머지데이터의브랜드정보가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/머지데이터의브랜드정보가져오기():void----------" );

		var NAME = "kaola__머지데이터의브랜드정보가져오기";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db).replace( "<!=nm_col=!>", q.nm_col);

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/머지데이터의브랜드정보가져오기():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/머지데이터의샵정보가져오기?code_db=kaola&nm_db=kaola_2019-수집&nm_col=20190225
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/머지데이터의샵정보가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/머지데이터의샵정보가져오기():void----------" );

		var NAME = "kaola__머지데이터의샵정보가져오기";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db).replace( "<!=nm_col=!>", q.nm_col);

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/머지데이터의샵정보가져오기():void----------" );
	});

	/**
	 * @function
	 * @param {http.ClientRequest} req
	 * <code>
		{
			nm_col : 20181231_0119
		}
	* </code>
	* @param {http.ClientResponse} res
	* <code>
		{

		}
	* </code>
	*
	* @example
	* <code>
		http://localhost:45528/수집데이터머지/kaola/머지데이터의카테고리정보가져오기?code_db=VIP&nm_db=VIP_2019-수집&nm_col=20190225
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/머지데이터의카테고리정보가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/머지데이터의카테고리정보가져오기():void----------" );

		var NAME = "kaola__머지데이터의카테고리정보가져오기";

		//배치작업이 진행되고 있다면 중지;
		//if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.nm_col ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;


		//----------[ S ] - Query Cache - Cache 파일 체크;
		var resultCheckCache = global.b2link.router.checkQueryCacheFile( req, res, "SYS0037_APIServer", NAME, q );
		if( true == resultCheckCache ) return;
		//----------[ E ] - Query Cache - Cache 파일 체크;


		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + NAME + ".dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + NAME + ".query", query );

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
				//----------[ S ] - Query Cache - Cache 파일 생성;
				global.b2link.fs.writeQueryResultCache( "SYS0037_APIServer", resultCheckCache, result );
				//----------[ E ] - Query Cache - Cache 파일 생성;


				//global.__BATCH_ROUTER__.b_processing = false;
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/머지데이터의카테고리정보가져오기():void----------" );
	});

	/**
	 * 대쉬보드 데일리데이터를 insert하는 라우터
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
		http://localhost:45528/수집데이터머지/kaola/대쉬보드데일리데이터생성?code_db=kaola&nm_db=kaola&nm_col=20190101
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/대쉬보드데일리데이터생성", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/대쉬보드데일리데이터생성():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 2, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__대쉬보드데일리데이터생성.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
			.replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__대쉬보드데일리데이터생성.query", query );

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
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/대쉬보드데일리데이터생성():void----------" );
	});

	/**
	 * 대쉬보드 디테일데이터를 insert하는 라우터
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
		http://localhost:45528/수집데이터머지/kaola/대쉬보드디테일데이터생성?code_db=kaola&nm_db=kaola&nm_col=20190101
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/kaola/대쉬보드디테일데이터생성", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/kaola/대쉬보드디테일데이터생성():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 2, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "kaola__대쉬보드디테일데이터생성.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_db=!>", q.nm_db )
			.replace( "<!=nm_col=!>", q.nm_col );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "kaola__대쉬보드디테일데이터생성.query", query );

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
				global.b2link.response.send_200_JSON_Pretty( req, res, result );
				return;
			}

			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/kaola/대쉬보드디테일데이터생성():void----------" );
	});

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
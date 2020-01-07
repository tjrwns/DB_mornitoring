//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/100__수집데이터머지/200_jd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	var connectionInfo = global.onsight.batchServer.DB.common.connectionInfo;
	var _CURRENT_PATH_ =  global.process.cwd() + "/js__b2link__SYS0037__BatchServer/100__수집데이터머지/";

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

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	ROUTER;

	//----------------------------------------------------------------------------------------------------;

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
		http://localhost:45528/수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기?code_db=VIP&targetYear=2018
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "jd__00_정제대상데일리수집컬렉션가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "jd__00_정제대상데일리수집컬렉션가져오기.query", query );

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

		global.CSJLog.log( "- [ E ] - /수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기():void----------" );
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
		http://localhost:45528/수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기-ui?code_db=VIP&targetYear=2018
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기-ui", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기-ui():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "jd__00_정제대상데일리수집컬렉션가져오기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "jd__00_정제대상데일리수집컬렉션가져오기.query", query );

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

		global.CSJLog.log( "- [ E ] - /수집데이터머지/jd/00_정제대상데일리수집컬렉션가져오기-ui():void----------" );
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
		http://localhost:45528/수집데이터머지/jd/01_데일리수집데이터를합치기?code_db=VIP&colNm=20181204_0131
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/jd/01_데일리수집데이터를합치기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/jd/01_데일리수집데이터를합치기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.colNm ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "jd__01_데일리수집데이터를합치기.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=colNm=!>", q.colNm );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "jd__01_데일리수집데이터를합치기.query", query );

		//몽고디비에 쿼리를 요청한다.;
		global.b2link.mongodb.executeQuery( global.onsight.batchServer.DB.common.getDBinfo( q.code_db ), query, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			if( !global.b2link.response.getResultStatus( result ) )
			{
				global.__BATCH_ROUTER__.endProcessing( req, res, result );
				return;
			}
		});

		global.CSJLog.log( "- [ E ] - /수집데이터머지/jd/01_데일리수집데이터를합치기():void----------" );
	});

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
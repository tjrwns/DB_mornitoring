//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/000__common/100_dashboard.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	var _CURRENT_PATH_ = global.process.cwd() + "/js__b2link__SYS0037__BatchServer/000__common/";

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
		  TYPE0 : [ "code_db", "nm_site", "targetYear" ]
		, TYPE1 : [ "code_db", "nm_site" ]
		, TYPE2 : [ "code_db", "nm_site", "nm_db", "nm_col" ]
		, TYPE3 : [ "code_db", "targetYear" ]
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
		http://localhost:45528/common/dashboard/getDataSizeCount__Collection?code_db=VIP&nm_site=Kaola&targetYear=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDataSizeCount__Collection", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDataSizeCount__Collection():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 0, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDataSizeCount__Collection.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_site=!>", q.nm_site ).replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDataSizeCount__Collection.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDataSizeCount__Collection():void----------" );
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
		http://localhost:45528/common/dashboard/getDataSizeCount__Collection_detail?code_db=VIP&nm_site=Kaola&targetYear=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDataSizeCount__Collection_detail", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDataSizeCount__Collection_detail():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 0, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDataSizeCount__Collection_detail.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_site=!>", q.nm_site )
			.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDataSizeCount__Collection_detail.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDataSizeCount__Collection_detail():void----------" );
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
		http://localhost:45528/common/dashboard/getDataTaobaoSellCountStatus?code_db=VIP&nm_site=Kaola&targetYear=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDataTaobaoSellCountStatus", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDataTaobaoSellCountStatus():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 3, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDataTaobaoSellCountStatus.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDataTaobaoSellCountStatus.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDataTaobaoSellCountStatus():void----------" );
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
		http://localhost:45528/common/dashboard/getDailyByShop?code_db=VIP&nm_site=kaola
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDailyByShop", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDailyByShop():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 1, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDailyByShop.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_site=!>", q.nm_site );
			//.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDailyByShop.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDailyByShop():void----------" );
	});

	/**
	 * 데일리데이터의 정보를 연도별로 가저오는 라우터
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
		http://localhost:45528/common/dashboard/getDailyInfoToYearByShop?code_db=VIP&targetYear=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDailyInfoToYearByShop", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDailyInfoToYearByShop():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 3, q ) ) return;

		//----------------------------------- validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.code_db ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		if( !q.targetYear ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------------------------------- validation;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDailyInfoToYearByShop.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDailyInfoToYearByShop.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDailyInfoToYearByShop():void----------" );
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
		http://localhost:45528/common/dashboard/getDetailByShop?code_db=VIP&nm_site=kaola
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDetailByShop", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDailyByShop():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 1, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDetailByShop.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_site=!>", q.nm_site );
			//.replace( "<!=targetYear=!>", q.targetYear );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDetailByShop.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDetailByShop():void----------" );
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
		http://localhost:45528/common/dashboard/getDiffInfoByShop?code_db=VIP&nm_site=Kaola&target_year=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getDiffInfoByShop", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getDiffInfoByShop():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 1, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getDiffInfoByShop.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=nm_site=!>", q.nm_site )
			.replace( "<!=target_year=!>", q.target_year );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getDiffInfoByShop.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getDiffInfoByShop():void----------" );
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
		http://localhost:45528/common/dashboard/getERRORInfoToYearByShop?code_db=VIP&target_year=2019
	* </code>
	*/
	global.server.addRouter( "/common/dashboard/getERRORInfoToYearByShop", function( req, res ){
		global.CSJLog.log( "- [ S ] - /common/dashboard/getERRORInfoToYearByShop():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//Request 객체의 Query Parameter 검증 함수;
		if( !_RESPONSE_COMMON_VALIDATION( req, res, 3, q ) ) return;

		//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
		global.b2link.debug._check_mongodb_queryParameter( q );

		//MongoDB Template Query를 dbjs 파일로부터 가져오기;
		var _query = global.b2link.fs.getDBJS__require( _CURRENT_PATH_ + "getERRORInfoToYearByShop.dbjs" );

		//쿼리내용의 치환자를 파라미터로 교체한다.;
		var query = _query.replace( "<!=targetYear=!>", q.targetYear )
			.replace( "<!=SITE=!>", q.code_db );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( _CURRENT_PATH_ + "getERRORInfoToYearByShop.query", query );

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

		global.CSJLog.log( "- [ E ] - /common/dashboard/getERRORInfoToYearByShop():void----------" );
	});

})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
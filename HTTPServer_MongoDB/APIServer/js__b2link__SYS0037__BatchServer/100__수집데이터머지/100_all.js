//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/100__수집데이터머지/100_all.js";
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
		http://localhost:45528/all/01_데일리수집데이터를합치기
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/all/01_데일리수집데이터를합치기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /all/01_데일리수집데이터를합치기():void----------" );

		//배치작업이 진행되고 있다면 중지;
		if( !global.__BATCH_ROUTER__.startProcessing( req, res ) ) return;

		var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		//----------validation;

		//var u0 = encodeURI( "http://localhost:45528/수집데이터머지/jd/01_데일리수집데이터를합치기?colNm=20181204_0131" );//JD --- 현재사용하지않음;
		var u1 = encodeURI( "http://localhost:45528/수집데이터머지/kaola/01_데일리수집데이터를합치기?colNm=20181231_0155" );//Kaola;
		var u2 = encodeURI( "http://localhost:45528/수집데이터머지/vip/01_데일리수집데이터를합치기?colNm=20181231_0119" );//Vip;

		var count = 0;//Request Count;
		var resParam = [];//Response Data;

		/*/
		//JD수집데이터 합치기;
		global.b2link.request.get( u0, function( e ){
			++count;
			resParam.push( e );
			if( 2 == count )
			{
				//MongoDB Query 실행 후 결과를 Client에 전송하기;
				global.b2link.response.send_200_JSON( req, res, resParam );
			}
		}, null );
		//*/

		//카올라수집 데이터 합치기;
		global.b2link.request.get( u1, function( e ){
			++count;
			resParam.push( e );
			if( 2 == count )
			{
				//실행 후 결과를 Client에 전송하기;
				global.__BATCH_ROUTER__.endProcessing( req, res, resParam );
			}
		}, null );

		//VIP수집 데이터 합치기;
		global.b2link.request.get( u2, function( e ){
			++count;
			resParam.push( e );
			if( 2 == count )
			{
				//실행 후 결과를 Client에 전송하기;
				global.__BATCH_ROUTER__.endProcessing( req, res, resParam );
			}
		}, null );

		global.CSJLog.log( "- [ E ] - /수집데이터머지/all/01_데일리수집데이터를합치기():void----------" );
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
		http://localhost:45528/수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기?data={}
	* </code>
	*/
	global.server.addRouter( "/수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기", function( req, res ){
		global.CSJLog.log( "- [ S ] - /수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기():void----------" );

		//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
		var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

		//----------validation;
		var paramErrorObject = { r : 2, m : "BadValue" };
		if( !q.data ) return global.b2link.response.send_200_JSON_Pretty( req, res, paramErrorObject );
		//----------validation;

		var data = JSON.parse( q.data );

		var url0 = "http://localhost:45528/수집데이터머지/";
		var url1 = "/00_정제대상데일리수집컬렉션가져오기?code_db=";
		var url2 = "&targetYear=";
		var urlArr = [];

		var io;
		var i=0, iLen=data.param0.length;
		var _tUrl;
		for( ; i<iLen; ++i )
		{
			io = data.param0[ i ];

			var jo;
			var j=0, jLen = data.param1.length;
			for( ; j<jLen; ++j )
			{
				jo = data.param1[ j ];
				_tUrl = url0 + global.onsight.batchServer.DB.common.SITE_NAMES[ jo ].toLowerCase() + url1 +  jo + url2 + io;
				console.log( _tUrl )
				urlArr.push( _tUrl );
			}
		}

		var count = 0;//Request Count;
		var resParam = [];//Response Data;

		var io;
		var i=0, iLen=urlArr.length;
		var _tmpR;
		for( ; i<iLen; ++i )
		{
			io = urlArr[ i ];
			global.b2link.request.get( encodeURI( io ), function( e ){
				++count;

				_tmpR = JSON.parse( e )
				resParam.push( _tmpR.d );

				if( urlArr.length == count )
				{
					//실행 후 결과를 Client에 전송하기;
					global.b2link.response.send_200_JSON_Pretty( req, res, resParam );
				}
			}, null );
		}

		global.CSJLog.log( "- [ E ] - /수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기():void----------" );
	});
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
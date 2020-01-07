//----------------------------------------------------------------------------------------------------;
//var fileNm = "js__b2link__SYS0037/b2link/__define/200_define_global.b2link.uri.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.uri;

global.b2link.uri = global.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.uri;

/**
 * Client Browser에 JSON(String)- pretty된 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Array|Object} obj Array 또는 Object
 */
global.b2link.uri._TEMP_URI = {};


global.b2link.uri.createTempURI = function( req, res, data ){
	var tempURI = "/" + global.btoa( SUtilMath.getUnique() ).replace( /\=/gi, "" );
	global.b2link.uri._TEMP_URI[ tempURI ] = function( req, res ){

		//1회 호출 후 삭제;
		if( global.b2link.uri.createTempURI.removeTempURI( tempURI ) )
		{
			global.b2link.response.send_200_JSON( req, res, data );
			return;
		}

		global.b2link.response.send_200_False( req, res );
	};

	global.server.addRouter( tempURI, global.b2link.uri._TEMP_URI[ tempURI ] );

	//호출 되지 않더라도 10초후 삭제;
	setTimeout( function(){ global.b2link.uri.createTempURI.removeTempURI( tempURI ); }, global.b2link.uri.createTempURI.TIMEOUT );

	return tempURI;
}

global.b2link.uri.createTempURI.removeTempURI = function( tempURI ){
	try
	{
		delete _$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST[ tempURI ];
		delete global.b2link.uri._TEMP_URI[ tempURI ];
		return 1;
	}
	catch( er )
	{
		return 0;
	}
};

global.b2link.uri.createTempURI.TIMEOUT = 1000000;//임시 URI 유효 시간 - 100초;
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
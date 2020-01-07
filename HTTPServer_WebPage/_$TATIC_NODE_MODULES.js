//----------------------------------------------------------------------------------------------------;
var fileNm = "_$TATIC_NODE_MODULES.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	STATIC VARIABLES - 알파벳 순 정렬;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------public;

/**
 * fs module 로 호출한 파일을 실행할 때 nodejs 가 request 를 실행하지 않는 이슈가 있다.
 * 서버 실행시 메모리에 올려 사용할 경우 사용가능하니 모든 npm modules 는 여기에 등록할 것.
 *
 * @static
 * @const
 * @property {Object}
 * @example
 * <code>
	//사용 방법;
	var _request = require( "request" );
	global.REQUIRES.__defineGetter__( "request", function(){ return _request; } );
 * </code>
 */
global.REQUIRES = global.REQUIRES || {};

/*///그냥 편하고 심플하게 STATIC Const로 추상화 시킨 약속 형태의 사용방법;
global.REQUIRES = {
	request : require( "request" )
};
/*///CONST가 가능하도록 __defineGetter__로 생성하는 방법;
(function (){

	//Native;
	//var _assert = require( "assert" );
	//var _cp = require( "child_process" );
	var _fs = require( "fs" );
	//var _http = require( "http" );
	var _path = require( "path" );
	//var _os = require( "os" );

	//ThirdParty;
	//var _request = require( "request" );

	//Native;
	//global.REQUIRES.__defineGetter__( "assert", function(){ return _assert; } );
	//global.REQUIRES.__defineGetter__( "cp", function(){ return _cp; } );
	global.REQUIRES.__defineGetter__( "fs", function(){ return _fs; } );
	//global.REQUIRES.__defineGetter__( "http", function(){ return _http; } );
	global.REQUIRES.__defineGetter__( "path", function(){ return _path; } );
	//global.REQUIRES.__defineGetter__( "os", function(){ return _os; } );

	//ThirdParty;
	//global.REQUIRES.__defineGetter__( "request", function(){ return _request; } );

})();
//*/

//--------------------------------------------------protected;

//--------------------------------------------------private;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
var fileNm = "_$TATIC_CONST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	STATIC VARIABLES - 알파벳 순 정렬;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------public;

//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

global._$TATIC_CONST_PATH_JS_COMMON = "E:/WorkSpace_B2LINK/HTTPServer_MongoDB/MemberSession";

//확인하기 - 20170527 - 송선우 - 경로가 이렇게 잡히면 안될거같은 느낌인데요..?
/**
 * 파일 서버 nfs mount 위치.
 * @static
 * @const
 * @property {String}
 */
//global._$TATIC_CONST_NFS = "/HTTPServer_FileServer";

/**
 * Session Time
 * 2000000 : 37분 정도
 * 10000000 : 3시간 정도
 *
 * @static
 * @const
 * @property {Number}
 */
global._$TATIC_CONST_SESSION_TIME = 100000000000;

/**
 * @static
 * @const
 * @property {Number}
 */
global._$TATIC_CONST_PORT_API = 49320;

/**
 * MongoDB 구동 포트
 * @static
 * @const
 * @property {Number}
 */
global._$TATIC_CONST_PORT_MONGO = 59320;

/**
 * MySQL 접속 설정 정보
 * @static
 * @const
 * @property {Number}
 */
global._$TATIC_CONST_MYSQL_CONFIG = {
	connectionLimit: 100,
	multipleStatements: true,
	host: "222.239.10.116",
	user: "scm",
	password: "b2linkscm!@",
	database: "scm",
	port: "3306"
};

//--------------------------------------------------protected;

//--------------------------------------------------private;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
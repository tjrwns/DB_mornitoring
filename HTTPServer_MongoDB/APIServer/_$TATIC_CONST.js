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

global._$TATIC_CONST_PATH_JS_COMMON = "E:/WorkSpace_B2LINK/HTTPServer_MongoDB/APIServer";

/**
 * 파일 서버 nfs mount 위치.
 * FileServer 는 추후에 새로운 리파지토리로 생성될 것이므로 로컬 피씨에 B2KER 의 파일서버를 복사하여 개발하고 커밋은 하지 않는다.
 * 경로는 아래와 같이 개인의 파일서버 위치로 설정해두되 추후에는 파일서버의 마운트 위치로 설정될 것임.
 * ex) /mnt/files/brand_portal/exel/
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
//global._$TATIC_CONST_PORT_API = 45320;

/**
 * MongoDB 구동 포트
 * @static
 * @const
 * @property {Number}
 */
//global._$TATIC_CONST_PORT_MONGO = 55320;

/**
 * MySQL 접속 설정 정보
 * @static
 * @const
 * @property {Number}
 */
/*/
global._$TATIC_CONST_MYSQL_CONFIG = {
	connectionLimit: 100,
	multipleStatements: true,
	host: "222.239.10.116",
	user: "scm",
	password: "b2linkscm!@",
	database: "scm",
	port: "3306"
};
//*/

//--------------------------------------------------protected;

//--------------------------------------------------private;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
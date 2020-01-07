//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_router/__define/101_define_global.b2link_router.STATIC.CONFIG.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _ = "";

//--------------------------------------------------[ S ] - global.b2link_router.STATIC.CONFIG;

global.b2link_router.STATIC.CONFIG = global.b2link_router.STATIC.CONFIG || {};

global.TtwLog.timeStamp( "--------------------------------------------------[ S ] - global.b2link_router.STATIC.CONFIG.URL" );
global.b2link_router.STATIC.CONFIG.URL = {};
global.b2link_router.STATIC.CONFIG.URL._COMMON = "http://localhost:49320/";//시스템 개별 정의;

global.b2link_router.STATIC.CONFIG.URL.MEMBER = {};
global.b2link_router.STATIC.CONFIG.URL.MEMBER.COMMON = global.b2link_router.STATIC.CONFIG.URL._COMMON + "member/";

global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION = {};
/*/
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON = global.b2link_router.STATIC.CONFIG.URL.MEMBER.COMMON + "member_session/";
_ = global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON;
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION = _ + "checkSession?";
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION = _ + "destroySession";
/*/
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON = global.b2link_router.STATIC.CONFIG.URL.MEMBER.COMMON + "session/";
_ = global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.COMMON;
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION = _ + "check_session?";
global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION = _ + "destroy_session";
//*/
global.TtwLog.timeStamp( "--------------------------------------------------[ E ] - global.b2link_router.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - global.b2link_router.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//--------------------------------------------------------------------------------------------------;
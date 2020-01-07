//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/101_define_window.b2link.STATIC.CONFIG.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _ = "";

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG;

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG = window.b2link.STATIC.CONFIG || {};

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG.URL" );

window.b2link.STATIC.CONFIG.URL = window.b2link.STATIC.CONFIG.URL || {};

//window.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";
window.b2link.STATIC.CONFIG.URL.PROXY = "";
try{ if( require( "os" ) ) window.b2link.STATIC.CONFIG.URL.PROXY = ""; }catch( er ){}


window.b2link.STATIC.CONFIG.URL.SERVER = "http://localhost:45527/";
window.b2link.STATIC.CONFIG.URL.SCODE = "SYS0037";//시스템 개별 정의;

//--------------------------------------------------;

//	URL - IMG;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.IMG = window.b2link.STATIC.CONFIG.URL.IMG || {};
window.b2link.STATIC.CONFIG.URL.IMG.BASE = "./img/";

//--------------------------------------------------;

//	URL - UI;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI = window.b2link.STATIC.CONFIG.URL.UI || {};
window.b2link.STATIC.CONFIG.URL.UI.BASE = "./ui/";

//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "cn";
window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "kr";
//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";

_ = window.b2link.STATIC.CONFIG.URL.UI.BASE;

window.b2link.STATIC.CONFIG.URL.UI.B2LINK = _ + "b2link/";

window.b2link.STATIC.CONFIG.URL.UI.B2LINK_API = _ + "b2link_api/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER = _ + "b2link_member/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION = _ + "b2link_session/";

//B2LiNK-SessionServer-Dev;
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_AUTHORITY = _ + "b2link_authority/";

//All Project;
window.b2link.STATIC.CONFIG.URL.UI.test = _ + "test/";

//--------------------------------------------------;

//	URL - UI - CSS;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI.CSS = "";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".semanticui";

//--------------------------------------------------;

//	URL - MONGODB;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB = window.b2link.STATIC.CONFIG.URL.MONGODB || {};

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER || {};
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "member/";
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON;
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.BASIC = _ + "member_basic/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.PUBLIC = _ + "member_public/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION = _ + "member_session/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION_LOG = _ + "member_session_log/";

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
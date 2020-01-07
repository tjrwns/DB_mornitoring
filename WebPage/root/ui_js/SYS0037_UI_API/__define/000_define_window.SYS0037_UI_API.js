//----------------------------------------------------------------------------------------------------;
var fileNm = "js/SYS0037_UI_API/__define/200_define_window.SYS0037_UI_APIjs";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0037_UI_API

window.SYS0037_UI_API = window.SYS0037_UI_API || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0037_UI_API

window.SYS0037_UI_API.CONST = {};
window.SYS0037_UI_API.CONST.SITES = {
	  JD     : { name : "JD", databases : { } }
	, KAOLA  : { name : "KAOLA", code : "Kaola" }
	, LAZADA : { name : "LAZADA", code : "Lazada" }
	, SHOPEE : { name : "SHOPEE", code : "Shopee" }
	, TAOBAO : { name : "TAOBAO", database : {
			TAOBAO_DAILY : "TAOBAO-DAILY"
			, TAOBAO_LIST : "Taobao-List"
		}
	}
	, VIP    : { name : "VIP", code : "VIP" }
};



window.SYS0037_UI_API.CONST.SITE_NAMES = {
	  "JD-DAILY"     : "JD"
	, "JD-LIST"      : "JD"
	, "TAOBAO-DAILY" : "Taobao"
	, "TAOBAO-LIST"  : "Taobao"
	, KAOLA          : "Kaola"
	, VIP            : "VIP"
	, LAZADA         : "Lazada"
	, SHOPEE         : "Shopee"
};

window.SYS0037_UI_API.CONST.CONNECTION_INFO = {
	  SELF           : "SELF"

	/*/
	, KAOLA          : "KAOLA"
	, TAOBAO         : "TAOBAO"
	, VIP            : "VIP"
	/*/
	//, "JD-DAILY"   : "JD-DAILY"
	//, "JD-LIST"    : "JD-LIST"
	, KAOLA          : "KAOLA"
	, LAZADA         : "LAZADA"
	, "TAOBAO-DAILY" : "TAOBAO-DAILY"
	, "TAOBAO-LIST"  : "TAOBAO-LIST"
	, VIP            : "VIP"
	, SHOPEE 		 : "SHOPEE"
	, Onsight        : "Onsight"
	, Onsight_Batch  : "Onsight_Batch"
	//*/
};

window.SYS0037_UI_API.CONST.ROUTER_PATH = {
	  "JD-DAILY"     : "jd"
	, "JD-LIST"      : "jd"
	, LAZADA         : "lazada"
	, "TAOBAO-DAILY" : "taobao"
	, "TAOBAO-LIST"  : "taobao"
	, KAOLA          : "kaola"
	, VIP            : "vip"
	, SHOPEE         : "shopee"
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
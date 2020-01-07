//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/101_define_global.b2link.STATIC.REGEXP.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.STATIC.REGEXP;

global.b2link.STATIC.REGEXP = global.b2link.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------global.b2link.STATIC.REGEXP.MATCH;

global.b2link.STATIC.REGEXP.MATCH = global.b2link.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
global.b2link.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;

/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js;
	console.log( arr[ 1 ] );//http://;
	console.log( arr[ 2 ] );//localhost:8080/;
	console.log( arr[ 3 ] );//public/index.js;
 * </code>
 */
global.b2link.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//----------------------------------------------------------------------------------------------------global.b2link.STATIC.REGEXP.REPLACE;

global.b2link.STATIC.REGEXP.REPLACE = global.b2link.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see global.b2link.util.getMoney
 */
global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see global.b2link.util.getRemoveCommaFormatFloat
 */
global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.STATIC.REGEXP;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//var fileNm = "js-common/b2link/__define/101_define_window.b2link.STATIC.REGEXP.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.STATIC.REGEXP;

window.b2link.STATIC.REGEXP = window.b2link.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.MATCH;

window.b2link.STATIC.REGEXP.MATCH = window.b2link.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
window.b2link.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;


//수정하기 - 20170525 - 송선우 - Node 기본 유틸로 있을껄요?;
/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js
	console.log( arr[ 1 ] );//http://
	console.log( arr[ 2 ] );//localhost:8080/
	console.log( arr[ 3 ] );//public/index.js
 * </code>
 */
window.b2link.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.REPLACE;

window.b2link.STATIC.REGEXP.REPLACE = window.b2link.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.getMoney
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.convertCommaSeparatedNumberToFloat
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

/**
 * @property {RegExp}
 * @see window.b2ker.util.getStringChangePriceToComma
 */
window.b2link.STATIC.REGEXP.REPLACE.PRICE_COMMA = /("price":[0-9.-]+)/g;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.STATIC.REGEXP;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
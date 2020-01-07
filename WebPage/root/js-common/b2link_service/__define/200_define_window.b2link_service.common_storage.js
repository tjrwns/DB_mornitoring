//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/200_define_window.b2link_service.common_storage.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.common_storage;

window.b2link_service.common_storage = window.b2link_service.common_storage || {};

//--------------------------------------------------window.b2link_service.common_storage.g***;

/**
 * DB에서 Public로 식별되는 DB & Collection만 사용할수 있는 API
 * Client Memory 상에 보관되어있으면 있는 값을 리턴하고 없으면 서버에 요청해서 가져와서 저장하고 리턴한다.
 * Client Memory를 비우는 API는 별도로 존재한다.
 * Public DB Schema가 새롭게 추가되어 필요시 요청바람.
 *
 *
 * DB 목록
 * category
 * list_static
 *
 * DB * Collection 목록
 * brand.brand_basic
 *
 * information.exchange_rate
 *
 * member.member_public
 *
 * partner.partner_buyer
 * partner.partner_logistics
 * partner.partner_supplier
 *
 * product.product_basic
 * product.product_type
 *
 * @function
 * @param {String} nm_prop _id$***, cd$***
 * @param {*} value
 * @return {*}
 * @example
 * <code>
	{
		var data = window.b2link_service.common_storage.get( "_id$country", 0 );

		var data = window.b2link_service.common_storage.get( "cd$category_division", "BOD" );
	}
 * </code>
 */
try{!function(){var e,r=SUtilXMLHttpReqGet.reqSyncReturn,n=(window.b2link.STATIC.CONFIG.URL,window.b2link.url.getServerURL_APIServer_Self()+"/_query_public/findOne/getDoc?"),i=window.b2link.url.getServerURL_APIServer_Self()+"/_instance/";try{e=JSON.parse(r(i+"cols/getAllList").responseText)}catch(o){window.TtwLog.error("Collections 정보를 가져오지 못함."),e={}}var t;try{t=JSON.parse(r(i+"dbs_cols__public/getAllList").responseText)}catch(o){window.TtwLog.error("Collections( + DB 이름) 정보를 가져오지 못함."),t={}}window.b2link_service.common_storage.get=function(i,o){window.TtwLog.timeStamp("---- [ S ] - window.b2link_service.common_storage.get():{*}----------");var s=i.split("$"),l=s[1],w=e[l].db;window.b2link_service.common._checkDBColNames(w,l);try{var c=t[w][l];if(c){var a=c[o];return a?a:(c[o]=JSON.parse(r(n+window.b2link_url_member.member_session.getParam(window.b2link.session.getSession())+"&data="+JSON.stringify({k:i,v:o})).responseText),c[o])}}catch(_){return window.b2link_ui.message.error(_),null}window.TtwLog.timeStamp("---- [ E ] - window.b2link_service.common_storage.get():{*}----------")}}();}catch(e){}

//--------------------------------------------------window.b2link_service.common_storage.g***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.common_storage;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
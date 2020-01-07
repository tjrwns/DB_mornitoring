//----------------------------------------------------------------------------------------------------;
var fileNm = "js/SYS0037_UI_API/__define/200_define_window.SYS0037_UI_API.fancygrid.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0037_UI_API.fancygrid;

window.SYS0037_UI_API.fancygrid = window.SYS0037_UI_API.fancygrid || {};
window.SYS0037_UI_API.fancygrid.CONST = window.SYS0037_UI_API.fancygrid.CONST ||{};
window.SYS0037_UI_API.fancygrid.event = window.SYS0037_UI_API.fancygrid.event ||{};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0037_UI_API.fancygrid;

//----------------------------------------------------------------------------------------------------;

//	CONST;

//----------------------------------------------------------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST = {};

/*
 *로더표출용 셋타임아웃 옵션
 */
window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT = 100;

//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.BBAR = {};
window.SYS0037_UI_API.fancygrid.CONST.BBAR.HEIGHT = 37;

//--------------------------------------------------;

/**
 * @important productInfoView등의 키값 명명은 파일 명명과 동일 해야한다.
 * @property {Object}
 */
window.SYS0037_UI_API.fancygrid.CONST.DB_LIST_BY_SITE = {
	"JD-DAILY" : {
		dbList : {
			productInfoView :                 [ "JD_2018","JD_2019" ]
			, productInfoView_List :          [ "JD_2018","JD_2019" ]
			, productInfoView_List_price :    [ "JD_2018","JD_2019" ]
			, productInfoView_List_price_UI : [ "JD_2018","JD_2019" ]
			, productInfoViewThumb :          [ "JD_2018","JD_2019" ]
			, productInfoViewThumb_List :     [ "JD_2018","JD_2019" ]
			, productInfoViewThumb_diff :     [ "JD_2018--비교","JD_2019--비교" ]
			, brandInfoView :                 [ "JD_2018","JD_2019" ]
			, shopInfoView :                  [ "JD_2018","JD_2019" ]
			, categoryInfoView :              [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand :      [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByShop :       [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByCategory :   [ "JD_2018","JD_2019" ]
			, brandInfoByScatter :            [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand_popup : [ "JD_2018","JD_2019" ]
			, brandInfoViewByKeyword : [ "JD_2018","JD_2019" ]
		}
		, isUse : false
	}
	, "JD-LIST" : {
		dbList : {
			productInfoView :                 [ "JD_2018","JD_2019" ]
			, productInfoView_List :          [ "JD_2018","JD_2019" ]
			, productInfoView_List_price :    [ "JD_2018","JD_2019" ]
			, productInfoView_List_price_UI : [ "JD_2018","JD_2019" ]
			, productInfoViewThumb :          [ "JD_2018","JD_2019" ]
			, productInfoViewThumb_List :     [ "JD_2018","JD_2019" ]
			, productInfoViewThumb_diff :     [ "JD_2018--비교","JD_2019--비교" ]
			, brandInfoView :                 [ "JD_2018","JD_2019" ]
			, shopInfoView :                  [ "JD_2018","JD_2019" ]
			, categoryInfoView :              [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand :      [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByShop :       [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByCategory :   [ "JD_2018","JD_2019" ]
			, brandInfoByScatter :            [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "JD_2018","JD_2019" ]
			, sellCountInfoViewByBrand_popup : [ "JD_2018","JD_2019" ]
			, brandInfoViewByKeyword : [ "JD_2018","JD_2019" ]
		}
		, isUse : false
	}
	, "TAOBAO-DAILY" : {
		dbList : {
			  productInfoView :               [ "Taobao_2018","Taobao_2019" ]
			, productInfoView_List :          [ "Taobao_2018","Taobao_2019","Taobao_2019-ERROR" ]
			, productInfoView_List_price :    [ "Taobao_2018","Taobao_2019" ]
			, productInfoView_List_price_UI : [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb :          [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb_List :     [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb_diff :     [ "Taobao_2018--비교","Taobao_2019--비교" ]
			, brandInfoView :                 [ "Taobao_2018","Taobao_2019" ]
			, shopInfoView :                  [ "Taobao_2018","Taobao_2019" ]
			, categoryInfoView :              [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByBrand :      [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByShop :       [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByCategory :   [ "Taobao_2018","Taobao_2019" ]
			, brandInfoByScatter :            [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByBrand_popup : [ "Taobao_2018","Taobao_2019" ]
			, brandInfoViewByKeyword : [ "Taobao_2018","Taobao_2019" ]
		}
		, isUse : true
	}
	, "TAOBAO-LIST" : {
		dbList : {
			  productInfoView :               [ "Taobao_2018","Taobao_2019" ]
			, productInfoView_List :          [ "Taobao_2018","Taobao_2019" ]
			, productInfoView_List_price :    [ "Taobao_2018","Taobao_2019" ]
			, productInfoView_List_price_UI : [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb :          [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb_List :     [ "Taobao_2018","Taobao_2019" ]
			, productInfoViewThumb_diff :     [ "Taobao_2018--비교","Taobao_2019--비교" ]
			, brandInfoView :                 [ "Taobao_2018","Taobao_2019" ]
			, shopInfoView :                  [ "Taobao_2018","Taobao_2019" ]
			, categoryInfoView :              [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByBrand :      [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByShop :       [ "Taobao_2018","Taobao_2019" ]
			, sellCountInfoViewByCategory :   [ "Taobao_2018","Taobao_2019" ]
			, brandInfoByScatter :            [ "Taobao_2019-상세-수집" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "Taobao_2019-상세-수집" ]
			, sellCountInfoViewByBrand_popup : [ "Taobao_2019-상세-수집" ]
			, brandInfoViewByKeyword : [ "Taobao_2019-상세-수집" ]

		}
		, isUse : true
	}
	, "KAOLA" : {
		dbList : {
			  productInfoView :               [ "Kaola_2018","Kaola_2019" ]
			, productInfoView_List :          [ "Kaola_2018","Kaola_2019", "Kaola_2018-N", "Kaola_2019-N" ]
			, productInfoView_List_price :    [ "Kaola_2018","Kaola_2019" ]
			, productInfoView_List_price_UI : [ "Kaola_2018","Kaola_2019", "Kaola_2018-N", "Kaola_2019-N" ]
			, productInfoViewThumb :          [ "Kaola_2018","Kaola_2019" ]
			, productInfoViewThumb_List :     [ "Kaola_2018","Kaola_2019" ]
			, productInfoViewThumb_diff :     [ "Kaola_2018--비교","Kaola_2019--비교" ]
			, brandInfoView :                 [ "Kaola_2018","Kaola_2019" ]
			, shopInfoView :                  [ "Kaola_2018","Kaola_2019" ]
			, categoryInfoView :              [ "Kaola_2018","Kaola_2019" ]
			, sellCountInfoViewByBrand :      [ "Kaola_2018","Kaola_2019" ]
			, sellCountInfoViewByShop :       [ "Kaola_2018","Kaola_2019" ]
			, sellCountInfoViewByCategory :   [ "Kaola_2018","Kaola_2019" ]
			, brandInfoByScatter :            [ "Kaola_2018","Kaola_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "Kaola_2018","Kaola_2019" ]
			, sellCountInfoViewByBrand_popup : [ "Kaola_2018","Kaola_2019" ]
			, brandInfoViewByKeyword : [ "Kaola_2018","Kaola_2019" ]
		}
		, isUse : true
	}
	, "VIP" : {
		dbList : {
			  productInfoView :               [ "VIP_2018","VIP_2019" ]
			, productInfoView_List :          [ "VIP_2018","VIP_2019" ]
			, productInfoView_List_price :    [ "VIP_2018","VIP_2019" ]
			, productInfoView_List_price_UI : [ "VIP_2018","VIP_2019" ]
			, productInfoViewThumb :          [ "VIP_2018","VIP_2019" ]
			, productInfoViewThumb_List :     [ "VIP_2018","VIP_2019" ]
			, productInfoViewThumb_diff :     [ "VIP_2018--비교","VIP_2019--비교" ]
			, brandInfoView :                 [ "VIP_2018","VIP_2019" ]
			, shopInfoView :                  [ "VIP_2018","VIP_2019" ]
			, categoryInfoView :              [ "VIP_2018","VIP_2019" ]
			, sellCountInfoViewByBrand :      [ "VIP_2018","VIP_2019" ]
			, sellCountInfoViewByShop :       [ "VIP_2018","VIP_2019" ]
			, sellCountInfoViewByCategory :   [ "VIP_2018","VIP_2019" ]
			, brandInfoByScatter :            [ "VIP_2018","VIP_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "VIP_2018","VIP_2019" ]
			, sellCountInfoViewByBrand_popup : [ "VIP_2018","VIP_2019" ]
			, brandInfoViewByKeyword : [ "VIP_2018","VIP_2019" ]
		}
		, isUse : true
	}
	, "LAZADA" : {
		dbList : {
			  productInfoView :               [ "Lazada_2018","Lazada_2019" ]
			, productInfoView_List :          [ "Lazada_2018","Lazada_2019" ]
			, productInfoView_List_price :    [ "Lazada_2018","Lazada_2019" ]
			, productInfoView_List_price_UI : [ "Lazada_2018","Lazada_2019" ]
			, productInfoViewThumb :          [ "Lazada_2018","Lazada_2019" ]
			, productInfoViewThumb_List :     [ "Lazada_2018","Lazada_2019" ]
			, productInfoViewThumb_diff :     [ "Lazada_2018--비교","Lazada_2019--비교" ]
			, brandInfoView :                 [ "Lazada_2018","Lazada_2019" ]
			, shopInfoView :                  [ "Lazada_2018","Lazada_2019" ]
			, categoryInfoView :              [ "Lazada_2018","Lazada_2019" ]
			, sellCountInfoViewByBrand :      [ "Lazada_2018","Lazada_2019" ]
			, sellCountInfoViewByShop :       [ "Lazada_2018","Lazada_2019" ]
			, sellCountInfoViewByCategory :   [ "Lazada_2018","Lazada_2019" ]
			, brandInfoByScatter :            [ "Lazada_2018","Lazada_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "Lazada_2018","Lazada_2019" ]
			, sellCountInfoViewByBrand_popup : [ "Lazada_2018","Lazada_2019" ]
			, brandInfoViewByKeyword : [ "Lazada_2018","Lazada_2019" ]
		}
		, isUse : true
	}
	, "SHOPEE" : {
		dbList : {
			  productInfoView :               [ "Shopee_2018","Shopee_2019" ]
			, productInfoView_List :          [ "Shopee_2018","Shopee_2019" ]
			, productInfoView_List_price :    [ "Shopee_2018","Shopee_2019" ]
			, productInfoView_List_price_UI : [ "Shopee_2018","Shopee_2019" ]
			, productInfoViewThumb :          [ "Shopee_2018","Shopee_2019" ]
			, productInfoViewThumb_List :     [ "Shopee_2018","Shopee_2019" ]
			, productInfoViewThumb_diff :     [ "Shopee_2018--비교","Shopee_2019--비교" ]
			, brandInfoView :                 [ "Shopee_2018","Shopee_2019" ]
			, shopInfoView :                  [ "Shopee_2018","Shopee_2019" ]
			, categoryInfoView :              [ "Shopee_2018","Shopee_2019" ]
			, sellCountInfoViewByBrand :      [ "Shopee_2018","Shopee_2019" ]
			, sellCountInfoViewByShop :       [ "Shopee_2018","Shopee_2019" ]
			, sellCountInfoViewByCategory :   [ "Shopee_2018","Shopee_2019" ]
			, brandInfoByScatter :            [ "Shopee_2018","Shopee_2019" ]
			, sellCountInfoViewByBrand_dhtmlx : [ "Shopee_2018","Shopee_2019" ]
			, sellCountInfoViewByBrand_popup : [ "Shopee_2018","Shopee_2019" ]
			, brandInfoViewByKeyword : [ "Shopee_2018","Shopee_2019" ]

		}
		, isUse : true
	}
};

//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS = {};

/*///--------------------------------------------------;
window.SYS0037_UI_API.fancygrid.CONST.URLS = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.JD = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.KAOLA = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.LAZADA = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.SHOPEE = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.TAOBAO = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.TAOBAO.APISERVER = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.TAOBAO.SITE = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS.VIP = {};
//*///--------------------------------------------------;
//--------------------------------------------------;
window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION = {};
window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION.PRODUCT_LIST_THUMNAIL = [
	{ data_key : "goodsId" }
	, { data_key : "brandId" }
	, { data_key : "brandName" }
	, { data_key : "categoryId" }
	, { data_key : "categoryName" }
	, { data_key : "shopId" }
	, { data_key : "shopName" }
	, { data_key : "goodsName" }
	, { data_key : "price" }
	, { data_key : "keyword" }
	, { data_key : "url" }
	, { data_key : "sellCount" }
];

//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE = {};

window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_INFO_MODAL_TEMPLATE = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfoViewTHumb-modal.html" );

window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_INFO_LIST_COL = '<div class="ui grid" style=" padding: 12px 0px;">'
	+ '<div class="row" style="white-space: normal;display: contents;"><div class="sixteen wide column"><img clsaa="ui image centered" src="{{goodsImg}}"></div></div>'
	+ '<div class="row" style="white-space: normal;display: contents;"><div class="sixteen wide column" style="line-height: 25px;">{{keyword}}{{goodsId}}{{sellCount}}{{brandName}}{{price}}{{categoryName}}</div></div>'
	+ '<div class="row" style="white-space: normal;display: flex;padding: 2px;" ><div class="sixteen wide column" style="height: 30px;display: block;line-height: 15px;overflow: hidden;">{{goodsName}}</div></div>'
	+ '</div>';

window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfo_search.html" )
window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_V = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfo_search_v.html" )
window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_H = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfo_search_h.html" )



//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.HOST =  window.SYS0037_UI_API.fancygrid.CONST.HOST || {};
window.SYS0037_UI_API.fancygrid.CONST.HOST = {};

window.SYS0037_UI_API.fancygrid.CONST.HOST.SELF = {};
window.SYS0037_UI_API.fancygrid.CONST.HOST.SELF.WEB_SERVER = window.b2link.url.getServerURL_WebServer_Self();

window.SYS0037_UI_API.fancygrid.CONST.HOST.SYS0015 = {}
window.SYS0037_UI_API.fancygrid.CONST.HOST.SYS0015.WEB_SERVER = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.LINK = {};
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE = {};
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE.JD = "";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE.KAOLA = "https://goods.kaola.com/product/<!=ID_GOODS=!>.html";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE.LAZADA = "";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE.SOPEE = "";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE[ "TAOBAO-DAILY" ] = "https://item.taobao.com/item.htm?id=<!=ID_GOODS=!>";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE[ "TAOBAO-LIST" ] = "https://item.taobao.com/item.htm?id=<!=ID_GOODS=!>";
window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE.VIP = "https://detail.vip.com/detail-<!=ID_BRAND=!>-<!=ID_GOODS=!>.html";

//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.URLS = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON = {};
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL = {};

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getCollectionListByHost__info = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getCollectionListByHost__info?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/상품상세정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getBrandDistribution = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo__paging = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/상품상세정보가져오기검색조건대용량?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&skip=<!=SKIP=!>&limit=<!=LIMIT=!>&search=<!=SEARCH=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getShopDistribution = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의샵정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getCategoryDistribution = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의카테고리정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo_diff__paging = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/비교상품상세정보가져오기검색조건썸네일대용량?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&skip=<!=SKIP=!>&limit=<!=LIMIT=!>&search=<!=SEARCH=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByBrand = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByShop = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의샵별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByCategory = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의카테고리별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//--------------------------------------------------;

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON = {};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.tBar = {};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.tBar.SITE_LIST = [
	{ index : 0, SITE : "SITE" }
	//, { index : 1, DB : "JD-DAILY" }
	//, { index : 2, DB : "JD-LIST" }
	, { index : 3, SITE : "TAOBAO-DAILY" }
	, { index : 4, SITE : "TAOBAO-LIST" }
	, { index : 5, SITE : "KAOLA" }
	, { index : 6, SITE : "VIP" }
	, { index : 7, SITE : "LAZADA" }
	, { index : 8, SITE : "SHOPEE" }
];

///RENDER_DB_AND_COLLECTION_GRID;
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID = function(){
	return {
		  renderTo : null
		, title : "DB Server List"
		, width : null, height : null
		, theme : { name : "bootstrap", config : { cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }

		, defaults : { type : "string", sortable : true }
		, selModel: { type: 'row' }
		, trackOver: true
		, paging : { pageSize : 100, pageSizeData : [ 30, 50, 100, 150, 200 ] }
		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]

		, tbar : [
			{
				 type : "combo"
				, editable: false
				, data : window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.tBar.SITE_LIST
				, displayKey : "SITE"
				, valueKey : "index"
				, value : 0
				, events : []
			}
			, {
				type : "combo"
				, editable: false
				, data : [ { index : 0, DB : "Database" } ]
				, displayKey : "DB"
				, valueKey : "index"
				, value : 0
				, width : 200
				, minListWidth : 150
				, events : []
			}
			, { type : "search", emptyText : "Search", paramsMenu : true }
		]

		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "HOST" , title : "HostKey"   , type : "string", width : 60, hidden : true }
			, { index : "DB" , title : "DbName"   , type : "string", width : 200 }
			, { index : "COL"  , title : "ColName"   , type : "string", width : 200 }
			, { index : "count" , title : "Count"  , type : "text", flex : 1 }
			, { index : "size"  , title : "Size"   , type : "text", flex : 1 }
			// , { index : "count_brand" , title : "Brand Count"  , type : "text", flex : 1 }
			// , { index : "count_shop"  , title : "Shop Count"   , type : "text", flex : 1 }
		]
		, data : []
		, events : []
	};
};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID.BTN_ITEMS = [
	  { type : "action", title : "List Chart", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
	, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
];


///RENDER_DB_AND_COLLECTION_GRID;
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__ROW = function(){
	return {
		  renderTo : null
		, cellHeight : null
		, width : null
		, height : null

		, title : "Product List"
		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true, flex:1 }
		, paging : { pageSize : null, pageSizeData : [ 3, 10, 20, 50 ] }

		//----------;
		//, bbar : [{ disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, data : []
		, columns : [
			  { index : "goodsImg"    , title : "goodsImg", type : "image", cls : 'imgeFit' , width : 100, render : function( o ){ o.style = { "text-align" : "center" }; return o; }, flex:0  }
			, { index : "siteNm"      , flex : 1, title : "siteNm", hidden: true }
			, { index : "brandId"     , flex : 1, title : "brandId" }
			, { index : "brandName"   , flex : 1, title : "brandName" }
			, { index : "goodsId"     , flex : 1, title : "goodsId" }
			, { index : "goodsName"   , flex : 1, title : "goodsName", render : function( o ){ o.style = { "white-space" : "pre-line" }; return o; } }
			, { index : "categoryId"  , flex : 1, title : "categoryId" }
			, { index : "categoryName", flex : 1, title : "categoryName" }
			, { index : "shopId"      , flex : 1, title : "shopId" }
			, { index : "shopName"    , flex : 1, title : "shopName" }
		]
		, controllers : []
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__ROW.BTN_ITEMS = [
	  { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
	, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
];

///RENDER_DB_AND_COLLECTION_GRID;
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID = function(){
	return {
		  renderTo : null
		, title : " - BRAND LIST"
		, width : null
		, height : null

		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }

		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, data : []
		, columns : [
			  { index : "name"      , type : "string", width : 250, title : "name" }
			, { index : "brand_id"  , type : "string", width : 100, title : "brand_id" }
			, { index : "value"     , type : "number", width : 80 , title : "Prodcut Count" }
			, { index : "count_shop", type : "number", width : 90 , title : "Shop Count" }
			, { index : [ "value", "count_shop" ], type : "hbar", flex : 1, title : "line chart"
				, sortable : false
				, sparkConfig : {
					tipTpl : "{value}"
					//, stacked : true
					, title : [ "value", "count_shop" ]
					, legend : { type : "tbar", style : {} }
					, tipFormat : function( o ){ return o.value; }
				}
			}
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS = [
	  { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
	, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
];

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SHOP_DISTRIBUTION__GRID = function(){
	return {
		  renderTo : null
		, title : " - BRAND LIST"
		, width : null
		, height : null

		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }

		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, data : []
		, columns : [
			  { index : "name"       , type : "string", width : 250, title : "name" }
			, { index : "shopId"     , type : "string", width : 100, title : "shopId" }
			, { index : "value"      , type : "number", width : 80 , title : "Shop Conut" }
			, { index : "count_brand", type : "number", width : 90 , title : "Brand Count" }
			, { index : [ "value", "count_brand" ], type : "hbar", flex : 1, sortable : false, title : "", title : "line chart"
				, sparkConfig : {
					tipTpl : "{value}"
					//, stacked : true
					, title : [ "value", "count_brand" ]
					, legend : { type : "tbar", style : {} }
					, tipFormat : function( o ){ var data = o.data; return JSON.stringify( o.data.value ); }
				}
			}
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SHOP_DISTRIBUTION__GRID.BTN_ITEMS = [
	  { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
	, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
];


window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_CATEGORY_DISTRIBUTION__GRID = function(){
	return {
		  renderTo : null
		, title : " - BRAND LIST"
		, width : null
		, height : null

		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }

		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, data : []
		, columns : [
			  { index : "name"       , type : "string", width : 250, title : "name" }
			, { index : "cateId"     , type : "string", width : 100, title : "shopId" }
			, { index : "value"      , type : "number", width : 80 , title : "Shop Conut" }
			, { index : "count_brand", type : "number", width : 90 , title : "Brand Count" }
			, { index : [ "value", "count_brand" ], type : "hbar", flex : 1, sortable : false, title : "", title : "line chart"
				, sparkConfig : {
					tipTpl : "{value}"
					//, stacked : true
					, title : [ "value", "count_brand" ]
					, legend : { type : "tbar", style : {} }
					, tipFormat : function( o ){ var data = o.data; return JSON.stringify( o.data.value ); }
				}
			}
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_CATEGORY_DISTRIBUTION__GRID.BTN_ITEMS = [
	  { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
	, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
];

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__THUMNAIL = function(){
	return {
		  renderTo : null
		, cellHeight : null
		, cellHeaderHeight: 0
		, width : null
		, height : null

		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12 } }
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true, type : "string", render : window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_thumnail_info, flex : 1 }
		//, paging : { pageSize : _CTRLS.fancygrid_1_config.rowCnt }

		//----------;
		, bbar : [
			{
				type: 'button',
				text: 'prevPage',
				cls: 'prevPage',
				handler: window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.prevPage
			}
			, {
				type: 'button',
				text: 'nextPage',
				cls: 'nextPage',
				handler: window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.nextPage
			}
			, {
				type: 'number',
				vtype: { before: ['notempty', 'notnan'], type: 'min', param: 1 },
				editable: true,
				value : null,
				events: [
					{
						enter : window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.movePage
					}
				]
			}
			, { text: " / ", type: 'text' }
			, { text: null, type: 'text' }
			, 'side'
			, { text: null, type: 'text' }
		]

		//, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, data : []
		, columns : []
		, events : [
			{
				init: function(grid){
					grid.header.hide();
					grid.setWidth( grid.getWidth() );
				}
				, scope: {}// not required
			}
		]
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__THUMNAIL_PRICE_TREND = function(){
	return {
		renderTo : null
		, title : null
		, height : null
		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 100, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12} }
		, data : null
		, defaults : { type : "string", sortable : true, flex : true }
		, paging : { pageSize : 50, pageSizeData : [ 30, 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [{ disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true }]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, selModel: { type: 'row' }
		, trackOver: true
		, scrollable: true
		, columns : null
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST_DIFF = function(){
	return {
		  renderTo : null
		, cellHeight : null
		, cellHeaderHeight: 0
		, width : null
		, height : null

		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12}}
		, data : null

		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true, flex : 1, type : "string", render : window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_thumnail_info }
		//, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, paging : { pageSize : _CTRLS.fancygrid_1_config.rowCnt }

		//----------;
		, bbar : [
			{
				type: 'button',
				text: 'prevPage',
				cls: 'prevPage',
				handler: window.SYS0037_UI_API.fancygrid.render_product_list_diff.prevPage
			}
			, {
				type: 'button',
				text: 'nextPage',
				cls: 'nextPage',
				handler: window.SYS0037_UI_API.fancygrid.render_product_list_diff.nextPage
			}
			, {
				type: 'number',
				vtype: { before: ['notempty', 'notnan'], type: 'min', param: 1 },
				editable: true,
				value : null,
				events: [
					{
						enter : window.SYS0037_UI_API.fancygrid.render_product_list_diff.movePage
					}
				]
			}
			, { text: " / ", type: 'text' }
			, { text: null, type: 'text' }
			, 'side'
			, { text: null, type: 'text' }
		]
		//, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : null
		//, controllers : [ "DBExport_colList_ctrl" ]
		, events : [{
				init: function(grid){
					grid.header.hide();
					grid.setWidth( grid.getWidth() - 5 );
				}
				, scope: {}// not required
			}
			, {
				celldblclick : function( g, o ){
					/*/
					//반복적으로 데이터를 적용할때 사용함;
					var arr = [ o.value ];
					window.b2link.html_div.apply_child( _ELS.DIV_PRODUCT_INFO_MODAL, arr );
					//*/
					//window.b2link.html.applyBrace( _ELS.DIV_PRODUCT_INFO_MODAL, o.value );
					//$('.div-Product-Info.ui.modal').modal('show');
					//*/

					var columnIndex00,columnIndex01;
					if( o.columnIndex % 2 == 0 )
					{
						columnIndex00 = o.columnIndex
						columnIndex01 = o.columnIndex + 1;
					}
					else
					{
						columnIndex00 = o.columnIndex - 1;
						columnIndex01 = o.columnIndex;
					}

					var dataObject = {
						prev_doc : o.data[ "item" + columnIndex00 ]
						, doc : o.data[ "item" + columnIndex01 ]
					}
					//product_info_window( dataObject );

				}
			}
		]
	}
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_BRAND__GRID = function(){
	return {
		  renderTo : null
		, width : null
		, height : null
		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12}}
		, data : null
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true,flex : 1 }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "name"      , type : "string", width : 250, title : "name",flex : 0 }
			, { index : "brand_id"  , type : "string", width : 250, title : "brand_id",flex : 0 }
			, { index : "value"     , type : "number", width : 80 , title : "Sell Count",flex : 0 }
			, { index : "sellAmount", type : "number", width : 90 , title : "Shop Amount",flex : 0 }
			, { index : "value", type : "progressbar",  title : "Sell Count", sortable : true, cls : "progress", sparkConfig : { tipTpl : "{value}", align: 'right', percents: false, label: true } }
			, { index : "sellAmount", type : "progressbar", title : "Sell Amount", sortable : true, sparkConfig : { tipTpl : "{value}", percents: false, title : "sellAmount", label: { type: 'right' } } }
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_SHOP__GRID = function(){
	return {
		  renderTo : null
		, width : null
		, height : null
		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12}}
		, data : null
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true,flex : 1 }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "name"      , type : "string", width : 250, title : "name",flex : 0 }
			, { index : "shopId"  , type : "string", width : 250, title : "shop_id",flex : 0 }
			, { index : "siteType"  , type : "string", width : 250, title : "shop_type",flex : 0 }
			, { index : "value"     , type : "number", width : 80 , title : "Sell Count",flex : 0 }
			, { index : "sellAmount", type : "number", width : 90 , title : "Shop Amount",flex : 0 }
			, { index : "value", type : "progressbar",  title : "Sell Count", sortable : true, cls : "progress", sparkConfig : { tipTpl : "{value}", align: 'right', percents: false, label: true } }
			, { index : "sellAmount", type : "progressbar", title : "Sell Amount", sortable : true, sparkConfig : { tipTpl : "{value}", percents: false, title : "sellAmount", label: { type: 'right' } } }
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_CATEGORY__GRID = function(){
	return {
		  renderTo : null
		, width : null
		, height : null
		, theme : { name : "bootstrap", config : {cellHeaderHeight : 30, cellHeight : 32, titleHeight : 42, barHeight : 37, bottomScrollHeight : 12}}
		, data : null
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true,flex : 1 }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "name"      , type : "string", width : 250, title : "name",flex : 0 }
			, { index : "categoryId"  , type : "string", width : 250, title : "category_id",flex : 0 }
			, { index : "value"     , type : "number", width : 80 , title : "Sell Count",flex : 0 }
			, { index : "sellAmount", type : "number", width : 90 , title : "Shop Amount",flex : 0 }
			, { index : "value", type : "progressbar",  title : "Sell Count", sortable : true, cls : "progress", sparkConfig : { tipTpl : "{value}", align: 'right', percents: false, label: true } }
			, { index : "sellAmount", type : "progressbar", title : "Sell Amount", sortable : true, sparkConfig : { tipTpl : "{value}", percents: false, title : "sellAmount", label: { type: 'right' } } }
		]
		, events : []
	};
};

window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.JD = {};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.KAOLA = {};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.LAZADA = {};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.SHOPEE = {};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.TAOBAO = {};
window.SYS0037_UI_API.fancygrid.CONST.OPTIONS.VIP = {};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;


/**
 * @funnction
 * @param {Object} grid
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.change__combo__getDBList = function( grid, value, ctrl ){

	if( value == "0" ) return;
	var _TARGET_SITE_NAME_ = grid.data[ grid.valueIndex ].SITE;
	var NM_VIEW = window.CURRENT_VIEW_UI_CTRL.NAME;
	var NM_CTRL = NM_VIEW + "-RENDER_DB_AND_COLLECTION_GRID";

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var DbList = [];
		DbList.push( { index : 0, DB : "Database" } )

		var io;
		var i=0, iLen= window.SYS0037_UI_API.fancygrid.CONST.DB_LIST_BY_SITE[ _TARGET_SITE_NAME_ ].dbList[ NM_VIEW ].length;
		for( ; i<iLen; ++i )
		{
			io = window.SYS0037_UI_API.fancygrid.CONST.DB_LIST_BY_SITE[ _TARGET_SITE_NAME_ ].dbList[ NM_VIEW ][ i ];
			DbList.push( { index : i + 1, DB : io } )
		}


		ctrl.tbar[ 1 ].setData( DbList );
		ctrl.tbar[ 1 ].setValue( 0 );

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

	return;

	//window.SYS0037_UI_API.spinner.hide();

};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.change__combo__getColList = function( grid, value, ctrl ){

	var _tbar0 = ctrl.tbar[ 0 ];
	var _tbar1 = ctrl.tbar[ 1 ];

	if( _tbar1.value == 0 ) return;
	if( _tbar0.value == 0 ) return;

	var _TARGET_DB_ = _tbar1.data[ _tbar1.valueIndex ].DB;
	var _TARGET_SITE_NAME_ = _tbar0.data[ _tbar0.valueIndex ].SITE;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var data = JSON.parse( window.b2link.xhr.reqSync_String( window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getCollectionListByHost__info.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
		.replace( "<!=NM_DB=!>", _TARGET_DB_ ) ) );

		if( window.b2link.response.getResultStatus( data ) )
		{
			var colList = [];

			var io;
			var i=0, iLen=data.d.length;
			for( ; i<iLen; ++i )
			{
				io = data.d[ i ];

				colList.push({
					  HOST : window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ]
					, COL : io.nm_col
					, DB : _TARGET_DB_
					, count : io.count
					, size : io.size
					// , count_brand : io.count_brand
					// , count_shop : io.count_shop
				});
			}

			ctrl.setData( colList );
			ctrl.setHeight( ctrl.getHeight() );

			ctrl.update();
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_btn_render_product_list_row = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
			//window.SYS0037_UI_API.spinner.hide();
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};

window.SYS0037_UI_API.fancygrid.event.click_cell_render_product_list_thumnail = function( DATA ){

	var fileName = "productInfoViewThumb-modal";
	var _PATH_ = "/ui/App/BatchDesktop/";
	var _FILE_URL_ = window.SYS0037_UI_API.fancygrid.CONST.HOST.SELF.WEB_SERVER + _PATH_ + fileName;

	//모달 객체를 1개만 유지하기 위해 생성된 모달을 폐기한다;
	//if( _CTRLS[ modalIndex ] ) _CTRLS[ modalIndex ].dispose();

	var els = window.b2link.util.importHTMLJSCSS( _FILE_URL_ + ".html", _FILE_URL_ + ".js", _FILE_URL_ + ".css", "div_0__Top_modal" );

	var el = els[ 0 ];
	var elc = els[ 1 ];

	//_CTRLS[ modalIndex ] = elc;

	var data = {
		//loader : _LOADER_SPINNER_
		data : DATA.value.value
		, siteName : DATA.grid.pagingConfig.HOST
	};

//	elc.dispose();
	elc.initialize( data );
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_btn_render_brand_distribution__grid = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getBrandDistribution.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_btn_render_category_distribution__grid = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getCategoryDistribution.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_btn_render_shop_distribution__grid = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getShopDistribution.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH [ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_img_newTap = function( grid, value ){

	if( value.column.type != "image" ) return;
	return window.open( value.value, "_blank" );

};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap = function( grid, value ){

	if( value.column.type != "action" ) return;
	if( !value.data ) return;
	var url = window.SYS0037_UI_API.fancygrid.CONST.LINK.TEMPLATE[ value.value.siteNm ].replace( "<!=ID_BRAND=!>", value.value.brandId ).replace( "<!=ID_GOODS=!>", value.value.goodsId );
	window.open( url, "_blank" );

};


//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

/**
 * DB 및 Collection 리스트를 표출하는 함수 - 기능버튼1개
 * @funnction
 * @param {Object} param
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn1 = function( param ){
	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID();

		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = param.elementID;
		option.width = param.width;
		option.height = param.height;

	var ctrl = new FancyGrid( option );

	ctrl.tbar[ 0 ].on("change", function( grid, value ){ return window.SYS0037_UI_API.fancygrid.event.change__combo__getDBList( grid, value, ctrl ); });
	ctrl.tbar[ 1 ].on("change", function( grid, value ){ return window.SYS0037_UI_API.fancygrid.event.change__combo__getColList( grid, value, ctrl ); } );

	return ctrl;
};

/**
 * DB 및 Collection 리스트를 표출하는 함수 - 기능버튼2개
 * @funnction
 * @param {Object} param
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn2 = function( param ){
	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID();

		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID.BTN_ITEMS[ 0 ] );
		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_DB_AND_COLLECTION_GRID.BTN_ITEMS[ 1 ] );

		option.renderTo = param.elementID;
		option.width = param.width;
		option.height = param.height;

	var ctrl = new FancyGrid( option );

	ctrl.tbar[ 0 ].on("change", function( grid, value ){ return window.SYS0037_UI_API.fancygrid.event.change__combo__getDBList( grid, value, ctrl ); });
	ctrl.tbar[ 1 ].on("change", function( grid, value ){ return window.SYS0037_UI_API.fancygrid.event.change__combo__getColList( grid, value, ctrl ); } );

	return ctrl;
};

/**
 * 상품리스트를 list 형태로 render
 * @funnction
 * @param {Object} param
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_product_list_row = function( param ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__ROW();

		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__ROW.BTN_ITEMS[ 0 ] );

		option.renderTo = param.elementID;
		option.width = param.width;
		option.height = param.height;
		option.cellHeight = option.columns[0].width = param.cellHeight;
		option.columns[0].cls = param.imgCls;
		option.paging.pageSize = param.pageSize;

		option.data = param.data;

	var ctrl = new FancyGrid( option );

	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};


/**
 * 상품가격추이리스트를 thumbnail 형태로 render
 * @funnction
 * @param {Object} param
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thunail_price_trend = function( param ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__THUMNAIL_PRICE_TREND();

		option.columns = param.columns;
		option.renderTo = param.elementID;
		option.height = param.height;
		option.data = param.data;

	var ctrl = new FancyGrid( option );

	//ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
	//ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};

/**
 * 상품가격추이 thumbnail list를 그리기위해 컬럼옵션을 정제하는 함수
 * @funnction
 * @param {Object} param
 * @param {Array} columns
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thunail_price_trend.refine_data = function( param ){

	var columns =[];
	if( param.d.info.length > 0 )
	{
		var s,so,_to;
		for( s in param.d.info[ 0 ] ){
			_to = {};
			if( s == "goodsImg" )
			{
				_to = {
					type : "image"
					, cls : "list_img"
					, width : 100
					, render : function( o ){ o.style = { "text-align" : "center" }; return o; }
					, flex : 0
				};
			}
			else if( s == "goodsDeclareList")
			{
				_to = { type : "string", width : 600, flex : false };
			}
			else
			{
				_to = { type : "string" };
			}

			_to.index = _to.title = s;
			columns.push( _to );
		}
	}

	return columns;
};


/**
 * 상품리스트를 thumbnail 형태로 render
 * @funnction
 * @param {Object} param
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail = function( param ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST__THUMNAIL();

		option.renderTo = param.elementID || "div-fancygrid-List";
		option.width = param.width || "100%";
		option.height = param.height || "100%";
		option.cellHeight = ( option.height - window.SYS0037_UI_API.fancygrid.CONST.BBAR.HEIGHT ) / param.pagingConfig.rowCnt;
		option.columns = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.set_columns( param.pagingConfig.colCnt );

		option.defaults.width = ( option.width ) / ( param.pagingConfig.colCnt + 1 );

		option.data = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.refindData( param.data.data, param.pagingConfig.colCnt );

		option.bbar[2].value = param.pagingConfig.paging.curPage;
		option.bbar[4].text = param.pagingConfig.paging.totalPage;
		option.bbar[6].text = ( param.pagingConfig.paging.curPage * param.pagingConfig.paging.limit ) + " / " + param.pagingConfig.paging.totalCount;

	var ctrl = new FancyGrid( option );
		ctrl.pagingConfig = param;

		ctrl.prevPage = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.prevPage;
		ctrl.nextPage = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.nextPage
		ctrl.search_product = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.search

	window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL = ctrl;

	window.document.getElementById( 'div-fancygrid-List' ).focus();

	return ctrl;
};

/**
 * 상품리스트 썸네일형의 데이터를 Request하는 함수
 * @funnction
 * @param {Object} param
 * @param {Function} cbFunction
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.getData = function( DATA, cbFunction ){

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		DATA.pagingConfig.paging.url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo__paging.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ DATA.HOST ] )
				.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ DATA.HOST ] )
				.replace( "<!=NM_DB=!>", DATA.DB )
				.replace( "<!=NM_COL=!>", DATA.COL );

		var url = DATA.pagingConfig.paging.url.replace( "<!=SKIP=!>", DATA.pagingConfig.paging.limit * ( DATA.pagingConfig.paging.curPage - 1 ) )
			.replace( "<!=LIMIT=!>", DATA.pagingConfig.paging.limit )
			.replace( "<!=SEARCH=!>", DATA.pagingConfig.search );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			DATA.pagingConfig.paging.totalCount = data.d.totalCount;
			DATA.pagingConfig.paging.totalPage = Math.ceil( DATA.pagingConfig.paging.totalCount / (( DATA.pagingConfig.colCnt + 1 ) * ( DATA.pagingConfig.rowCnt )));

			DATA.data = data.d;
			cbFunction( DATA );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};

/**
 * 상품리스트를 검색조건으로 검색하여 결과를 업데이트하는 함수
 * @funnction
 * @param {Object} param
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.search = function( param ){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL;
	var pagingInfo = t.pagingConfig.pagingConfig.paging;

	pagingInfo.curPage = 1;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		t.pagingConfig.pagingConfig.search = param;

		var url = pagingInfo.url.replace( "<!=SKIP=!>", pagingInfo.limit * ( pagingInfo.curPage - 1 ) )
			.replace( "<!=LIMIT=!>", pagingInfo.limit )
			.replace( "<!=SEARCH=!>", t.pagingConfig.pagingConfig.search );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			pagingInfo.totalCount = data.d.totalCount;
			pagingInfo.totalPage = Math.ceil( pagingInfo.totalCount / (( t.pagingConfig.pagingConfig.colCnt + 1 ) * ( t.pagingConfig.pagingConfig.rowCnt )));

			t.setData( window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.refindData( data.d.data, t.pagingConfig.pagingConfig.colCnt ) )
			t.bbar[4].el.$dom[0].innerHTML = pagingInfo.totalPage.toString();

			if( pagingInfo.totalPage == pagingInfo.curPage ) t.bbar[5].el.$dom[0].innerHTML = pagingInfo.totalCount + " / " + pagingInfo.totalCount;
			else t.bbar[5].el.$dom[0].innerHTML = ( pagingInfo.curPage * pagingInfo.limit ) + " / " + pagingInfo.totalCount;

			t.update();

			window.SYS0037_UI_API.spinner.hide();
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};

/**
 * 검색조건 초기화 함수
 * @funnction
 * @param {Elemnet} els
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.reset_search_condition = function( els ){

	var i = 0,iLen = els.length,io;
	for(;i<iLen;++i) els[ i ].value = "";
	return;
};


window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_input_vertical = function(){

	var el00 = window.b2link.html.createHTMLElement( window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_V );
	var el01 = el00.children[0].children[0];

	window.b2link.html_div.apply_child( el01, window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION.PRODUCT_LIST_THUMNAIL );

	return el00;
};

window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_input_horizontal = function(){

	var el00 = window.b2link.html.createHTMLElement( window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_H );
	var el01 = el00.children[0].children[0];

	window.b2link.html_div.apply_child( el01, window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION.PRODUCT_LIST_THUMNAIL );

	return el00

};

window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition = function( els ){

	var i = 0,iLen = els.length,io;
	var _to = {};
	for(;i<iLen;++i)
	{
		io = els[ i ];
		if( io.value != "" ) _to[ io.attributes['data-key'].value ] = io.value
	}

	return JSON.stringify( _to );
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.nextPage = function(){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;
	if( gridConfig.paging.curPage + 1 > gridConfig.paging.totalPage ) return;

	++gridConfig.paging.curPage;

	return window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */

window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.prevPage = function(){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;

	if( gridConfig.paging.curPage == 1 ) return;

	--gridConfig.paging.curPage;

	return window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */

window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.movePage = function( grid, value ){

	if( !Number( value ) ) return;

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL;
	if( Number( value ) < 1 ) return;
	if( Number( value ) >  t.pagingConfig.pagingConfig.paging.totalPage ) return;

	t.pagingConfig.pagingConfig.paging.curPage = value * 1;

	return window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.loadPage = function(){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;

	var skip = gridConfig.paging.limit * ( gridConfig.paging.curPage - 1 );

	//gridConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition();

	var url = gridConfig.paging.url.replace( "<!=SKIP=!>", skip ).replace( "<!=LIMIT=!>", gridConfig.paging.limit ).replace( "<!=SEARCH=!>", gridConfig.search );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ));

	t.setData( window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.refindData( data.d.data, gridConfig.colCnt ) );

	t.bbar[2].setValue( gridConfig.paging.curPage );
	if( gridConfig.paging.totalPage == gridConfig.paging.curPage ) t.bbar[5].el.$dom[0].innerHTML = gridConfig.paging.totalCount + " / " + gridConfig.paging.totalCount;
	else t.bbar[5].el.$dom[0].innerHTML = ( gridConfig.paging.curPage * gridConfig.paging.limit ) + " / " + gridConfig.paging.totalCount;

	t.update();

	return;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Array} ta
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.refindData = function( listArray, colCnt ){

	var to = {};
	var ta = []
	var i = 0,iLen = listArray.length,io;
	var k = 0;

	for(;i<iLen;++i){
		to[ "item" + k ] = listArray[ i ];
		if( k == colCnt )
		{
			k = 0;
			ta.push( to );
			to = {};
		}
		else ++k;
	}

	if( Object.keys( to ).length != 0 ) ta.push( to );

	return ta;
}

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Array} cols
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.set_columns = function( colCnt ){

	var cols = [];
	var _to0;
	var i = 0,iLen = colCnt + 1;
	for(;i<iLen;++i){
		_to0 =  { index : "item" + i };
		cols.push( _to0 );
	}
	return cols;
};


/**
 * 썸네일정보를 html로 만드는 함수( 생성시스타일을 같이 지정한다. );
 * @funnction
 * @param {Object} param
 * @return {Object} o
 */
window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_thumnail_info = function( o ){

	if( o.value && o.value.goodsName )
	{
		var keywordTemplate = "";
		var sellCountTemplate = "";
		var barndNameTemplate = "";
		var priceTemplate = "";
		var categoryNameTemplate = "";
		var goodsIdTemplate = "";

		if( typeof o.value.keyword == "object" )
		{
			var s,so;
			for( s in o.value.keyword )
			{
				keywordTemplate = keywordTemplate + '<div class="ui violet horizontal label">' + s + '</div>';
			}
		}
		else
		{
			if( o.value.keyword != "" ) keywordTemplate = '<div class="ui violet horizontal label">' + o.value.keyword + '</div>';
		}

		if( o.value.sellCount != -1 ) sellCountTemplate = '<div class="ui red horizontal label">' + o.value.sellCount + '</div>';
		if( o.value.brandName != "" ) barndNameTemplate = '<div class="ui pink horizontal label">' + o.value.brandName + '</div>';
		if( o.value.price != -1 ) priceTemplate = '<div class="ui purple horizontal label">' + o.value.price + '</div>';
		if( o.value.categoryName != -1 ) categoryNameTemplate = '<div class="ui teal horizontal label">' + o.value.categoryName + '</div>';
		if( o.value.goodsId != -1 ) goodsIdTemplate = '<div class="ui blue horizontal label">' + o.value.goodsId + '</div>';


		var _template = window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_INFO_LIST_COL.replace("{{goodsName}}", o.value.goodsName || "No Data" )
			.replace("{{goodsImg}}", o.value.goodsImg || "https://cdn.warehouseskateboards.com/images/products/preview/no-image.jpg" )

			//label;
			.replace("{{keyword}}", keywordTemplate )
			.replace("{{sellCount}}", sellCountTemplate )
			.replace("{{brandName}}", barndNameTemplate )
			.replace("{{price}}", priceTemplate )
			.replace("{{categoryName}}", categoryNameTemplate )
			.replace("{{goodsId}}", goodsIdTemplate );
	}
	else
	{
		var _template = "";
	}

	o.style = {
		"backgroundColor" : "#fff"
		, "color" : "#666"
	}

	o.value = _template;
	return o;
}


























/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_PRODUCT_LIST_DIFF();

		option.renderTo = DATA.elementID || "div-fancygrid-List";
		option.width = DATA.width || "100%";
		option.height = DATA.height || "100%";
		option.cellHeight = ( option.height - window.SYS0037_UI_API.fancygrid.CONST.BBAR.HEIGHT ) / DATA.pagingConfig.rowCnt;
		option.columns = window.SYS0037_UI_API.fancygrid.render_product_list_diff.set_columns( DATA.pagingConfig.colCnt );

		option.data = window.SYS0037_UI_API.fancygrid.render_product_list_diff.refindData( DATA.data.data, DATA.pagingConfig.colCnt );

		option.bbar[2].value = DATA.pagingConfig.paging.curPage;
		option.bbar[4].text = DATA.pagingConfig.paging.totalPage;
		option.bbar[6].text = ( DATA.pagingConfig.paging.curPage * DATA.pagingConfig.paging.limit ) + " / " + DATA.pagingConfig.paging.totalCount;

	var ctrl = new FancyGrid( option );
		ctrl.pagingConfig = DATA;

		ctrl.prevPage = window.SYS0037_UI_API.fancygrid.render_product_list_diff.prevPage;
		ctrl.nextPage = window.SYS0037_UI_API.fancygrid.render_product_list_diff.nextPage
		ctrl.search_product = window.SYS0037_UI_API.fancygrid.render_product_list_diff.search

	window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL = ctrl;

	window.document.getElementById( 'div-fancygrid-List' ).focus();

	return ctrl;
};

window.SYS0037_UI_API.fancygrid.render_product_list_diff.getData = function( DATA, cbFunction ){

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		DATA.pagingConfig.paging.url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getProductInfo_diff__paging.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ DATA.HOST ] )
				.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ DATA.HOST ] )
				.replace( "<!=NM_DB=!>", DATA.DB )
				.replace( "<!=NM_COL=!>", DATA.COL );

		//DATA.pagingConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_search_condition();

		var url = DATA.pagingConfig.paging.url.replace( "<!=SKIP=!>", DATA.pagingConfig.paging.limit * ( DATA.pagingConfig.paging.curPage - 1 ) )
			.replace( "<!=LIMIT=!>", DATA.pagingConfig.paging.limit )
			.replace( "<!=SEARCH=!>", DATA.pagingConfig.search );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			DATA.pagingConfig.paging.totalCount = data.d.totalCount;
			DATA.pagingConfig.paging.totalPage = Math.ceil( DATA.pagingConfig.paging.totalCount / (( DATA.pagingConfig.colCnt + 1 ) * ( DATA.pagingConfig.rowCnt )));

			DATA.data = data.d;
			cbFunction( DATA );

			//window.SYS0037_UI_API.spinner.hide();
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};

window.SYS0037_UI_API.fancygrid.render_product_list_diff.search = function( search_condition ){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL;
	var pagingInfo = t.pagingConfig.pagingConfig.paging;

	pagingInfo.curPage = 1;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		t.pagingConfig.pagingConfig.search = search_condition;

		var url = pagingInfo.url.replace( "<!=SKIP=!>", pagingInfo.limit * ( pagingInfo.curPage - 1 ) )
			.replace( "<!=LIMIT=!>", pagingInfo.limit )
			.replace( "<!=SEARCH=!>", t.pagingConfig.pagingConfig.search );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			pagingInfo.totalCount = data.d.totalCount;
			pagingInfo.totalPage = Math.ceil( pagingInfo.totalCount / (( t.pagingConfig.pagingConfig.colCnt + 1 ) * ( t.pagingConfig.pagingConfig.rowCnt )));

			t.setData( window.SYS0037_UI_API.fancygrid.render_product_list_diff.refindData( data.d.data, t.pagingConfig.pagingConfig.colCnt ) )
			t.bbar[4].el.$dom[0].innerHTML = pagingInfo.totalPage.toString();

			if( pagingInfo.totalPage == pagingInfo.curPage ) t.bbar[5].el.$dom[0].innerHTML = pagingInfo.totalCount + " / " + pagingInfo.totalCount;
			else t.bbar[5].el.$dom[0].innerHTML = ( pagingInfo.curPage * pagingInfo.limit ) + " / " + pagingInfo.totalCount;

			t.update();

			window.SYS0037_UI_API.spinner.hide();
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );
};


window.SYS0037_UI_API.fancygrid.render_product_list_diff.reset_search_condition = function( els ){
	var i = 0,iLen = els.length,io;
	for(;i<iLen;++i) els[ i ].value = "";
	return;
};


window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_search_input_vertical = function(){

	var el00 = window.b2link.html.createHTMLElement( window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_V );
	var el01 = el00.children[0].children[0];

	window.b2link.html_div.apply_child( el01, window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION.PRODUCT_LIST_THUMNAIL );

	return el00;
};

window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_search_input_horizontal = function(){

	var el00 = window.b2link.html.createHTMLElement( window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_THUMNAIL_SEARCH_INPUT_H );
	var el01 = el00.children[0].children[0];

	window.b2link.html_div.apply_child( el01, window.SYS0037_UI_API.fancygrid.CONST.SEARCH_OPTION.PRODUCT_LIST_THUMNAIL );

	return el00

};


window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_search_condition = function( els ){

	var i = 0,iLen = els.length,io;
	var _to = {};
	for(;i<iLen;++i)
	{
		io = els[ i ];
		if( io.value != "" ) _to[ io.attributes['data-key'].value ] = io.value
	}

	return JSON.stringify( _to );
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff.nextPage = function( gird, value ){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;

	if( gridConfig.paging.curPage + 1 > gridConfig.paging.totalPage ) return;

	++gridConfig.paging.curPage;

	return window.SYS0037_UI_API.fancygrid.render_product_list_diff.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */

window.SYS0037_UI_API.fancygrid.render_product_list_diff.prevPage = function( gird, value ){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;

	if( gridConfig.paging.curPage == 1 ) return;

	--gridConfig.paging.curPage;

	return window.SYS0037_UI_API.fancygrid.render_product_list_diff.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */

window.SYS0037_UI_API.fancygrid.render_product_list_diff.movePage = function(){

	if( !Number( value ) ) return;
	var t = window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;
	if( Number( value ) < 1 ) return;
	if( Number( value ) >  gridConfig.pagingConfig.pagingConfig.paging.totalPage ) return;

	gridConfig.pagingConfig.pagingConfig.paging.curPage = value * 1;

	return window.SYS0037_UI_API.fancygrid.render_product_list_diff.loadPage();
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff.loadPage = function(){

	var t = window.SYS0037_UI_API.fancygrid.render_product_list_diff.CTRL;

	var gridConfig = t.pagingConfig.pagingConfig;

	var skip = gridConfig.paging.limit * ( gridConfig.paging.curPage - 1 );

	//gridConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_search_condition();

	var url = gridConfig.paging.url.replace( "<!=SKIP=!>", skip ).replace( "<!=LIMIT=!>", gridConfig.paging.limit ).replace( "<!=SEARCH=!>", gridConfig.search );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ));

	t.setData( window.SYS0037_UI_API.fancygrid.render_product_list_diff.refindData( data.d.data, gridConfig.colCnt ) );

	t.bbar[2].setValue( gridConfig.paging.curPage );
	if( gridConfig.paging.totalPage == gridConfig.paging.curPage ) t.bbar[5].el.$dom[0].innerHTML = gridConfig.paging.totalCount + " / " + gridConfig.paging.totalCount;
	else t.bbar[5].el.$dom[0].innerHTML = ( gridConfig.paging.curPage * gridConfig.paging.limit ) + " / " + gridConfig.paging.totalCount;

	t.update();

	return;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Array} ta
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff.refindData = function( data, colCnt ){
	var style0 = { backgroundColor : "#f5f5f5", color : "#333333",  };
	var style1 = { backgroundColor : "#ffffff", color : "#333333" };
	var style = style0;

	var z = 0;
	var i=0, iLen=data.length/2;
	for( ; i<iLen; ++i ){
		var idx0 = i * 2;
		var idx1 = i * 2 + 1;

		data[ idx0 ].style = data[ idx1 ].style = style;

		if( z < 9 )
		{
			if( style0 == style ) style = style1;
			else if( style1 == style ) style = style0;
			++z;
		}
		else
		{
			if( style0 == style ) style = style0;
			else if( style1 == style ) style = style1;
			z = 0;
		}
	}

	var to = {};
	var ta = []
	var i = 0,iLen = data.length,io;
	var k = 0;

	for(;i<iLen;++i){
		to[ "item" + k ] = data[ i ];
		if( k == colCnt )
		{
			k = 0;
			ta.push( to );
			to = {};
		}
		else ++k;
	}

	if( Object.keys( to ).length != 0 ) ta.push( to );

	return ta;
}

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Array} cols
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff.set_columns = function( colCnt ){

	var cols = [];
	var _to0;
	var i = 0,iLen = colCnt + 1;
	for(;i<iLen;++i){
		_to0 =  { index : "item" + i };
		cols.push( _to0 );
	}
	return cols;
};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} o
 */
window.SYS0037_UI_API.fancygrid.render_product_list_diff.make_thumnail_info = function( o ){

	if( o.value && o.value.goodsName )
	{
		var keywordTemplate = "";
		var sellCountTemplate = "";
		var barndNameTemplate = "";
		var priceTemplate = "";
		var categoryNameTemplate = "";
		var goodsIdTemplate = "";

		if( typeof o.value.keyword == "object" )
		{
			var s,so;
			for( s in o.value.keyword )
			{
				keywordTemplate = keywordTemplate + '<div class="ui violet horizontal label">' + s + '</div>';
			}
		}
		else
		{
			if( o.value.keyword != "" ) keywordTemplate = '<div class="ui violet horizontal label">' + o.value.keyword + '</div>';
		}

		if( o.value.sellCount != -1 ) sellCountTemplate = '<div class="ui red horizontal label">' + o.value.sellCount + '</div>';
		if( o.value.brandName != "" ) barndNameTemplate = '<div class="ui pink horizontal label">' + o.value.brandName + '</div>';
		if( o.value.price != -1 ) priceTemplate = '<div class="ui purple horizontal label">' + o.value.price + '</div>';
		if( o.value.categoryName != -1 ) categoryNameTemplate = '<div class="ui teal horizontal label">' + o.value.categoryName + '</div>';
		if( o.value.goodsId != -1 ) goodsIdTemplate = '<div class="ui blue horizontal label">' + o.value.goodsId + '</div>';


		var _template = window.SYS0037_UI_API.fancygrid.CONST.TEMPLATE.PRODUCT_INFO_LIST_COL.replace("{{goodsName}}", o.value.goodsName || "No Data" )
			.replace("{{goodsImg}}", o.value.goodsImg || "https://cdn.warehouseskateboards.com/images/products/preview/no-image.jpg" )

			//label;
			.replace("{{keyword}}", keywordTemplate )
			.replace("{{sellCount}}", sellCountTemplate )
			.replace("{{brandName}}", barndNameTemplate )
			.replace("{{price}}", priceTemplate )
			.replace("{{categoryName}}", categoryNameTemplate )
			.replace("{{goodsId}}", goodsIdTemplate );
	}
	else
	{
		var _template = "";
	}

	o.style = { backgroundColor : "#ffffff", color : "#000000", borderWidth : 0 };

	try
	{
		if( o.value.style ){
			if( o.value.style.backgroundColor ) o.style.backgroundColor = o.value.style.backgroundColor;
			if( o.value.style.color ) o.style.color = o.value.style.color;

		}
	}
	catch( er )
	{
		//er;
	}

	o.value = _template;

	return o;
};


























/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_brand_distribution__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_shop_distribution__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SHOP_DISTRIBUTION__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};


/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_category_distribution__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_CATEGORY_DISTRIBUTION__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_brand__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_BRAND__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );
		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_brand__grid.getData = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByBrand.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_shop__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_SHOP__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_shop__grid.getData = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByShop.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 * @return {Object} ctrl
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_category__grid = function( DATA ){

	var option = window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_SELLCOUNT_DISTRIBUTION_BY_CATEGORY__GRID();

//		option.columns.push( window.SYS0037_UI_API.fancygrid.CONST.OPTIONS._COMMON.RENDER_BRAND_DISTRIBUTION__GRID.BTN_ITEMS[ 0 ] );

		option.renderTo = DATA.elementID;
		option.width = DATA.width;
		option.height = DATA.height;

		option.data = DATA.data;

	var ctrl = new FancyGrid( option );

//	ctrl.on( "rowdblclick", window.SYS0037_UI_API.fancygrid.event.click_img_newTap );
//	ctrl.on( "cellclick", window.SYS0037_UI_API.fancygrid.event.click_ProductLink_newTap );

	return ctrl;
};

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_category__grid.getData = function( grid, value, cbFunction ){

	if( value.column.type != "action" ) return;
	if( value.columnIndex != 5 ) return;

	if( !value.value ) return;

	_TARGET_DB_ = value.value.DB;
	_TARGET_SITE_NAME_ = value.value.HOST;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = window.SYS0037_UI_API.fancygrid.CONST.URLS._COMMON.UTIL.getSellCountByCategory.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_DB=!>", value.value.DB )
			.replace( "<!=NM_COL=!>", value.value.COL );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			cbFunction( data.d );
		}
		else
		{
			//결과가 없음;
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.fancygrid.CONST._N_SETTIMEOUT );

};
//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


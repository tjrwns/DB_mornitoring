//----------------------------------------------------------------------------------------------------;
var fileNm = "js/SYS0037_UI_API/__define/200_define_window.SYS0037_UI_API.dhtmlx.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0037_UI_API.dhtmlx;

window.SYS0037_UI_API.dhtmlx = window.SYS0037_UI_API.dhtmlx || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0037_UI_API.dhtmlx;

//----------------------------------------------------------------------------------------------------;

//	CONST;

//----------------------------------------------------------------------------------------------------;

window.SYS0037_UI_API.dhtmlx.CONST = window.SYS0037_UI_API.CONST.dhtmlx || {};
window.SYS0037_UI_API.dhtmlx.CONST.SIZE = window.SYS0037_UI_API.dhtmlx.CONST.SIZE || {};

window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN = {};
window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH = window.innerWidth;
window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT = window.innerHeight;

//---------------------------------------------;

window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE = {}
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfoViewThumb_info-window.html" );
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO_DETAIL = "<div class=\"row\"><div class=\"four wide column\">{{title}}</div>\n<div class=\"twelve wide column\">{{value}}</div></div>";

window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_DIFF__PRODUCT_INFO = window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfoViewThumb_diff-window.html" );
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_DIFF__PRODUCT_INFO_DETAIL = '<div class="ui grid">'
			+ '<div class="row" style="    max-height: 190px;padding: 5px 0px 2px 0px;"><div class="sixteen wide column" style="margin: auto;top: 0;bottom: 0;left: 0;right: 0;text-align:center;padding: 10px" ><img clsaa="ui image centered" src="{{goodsImg}}" style="min-height:-webkit-fill-available;max-height:-webkit-fill-available"></div></div>'
			+ '<div class="row" style="white-space: normal;display: contents;"><div class="sixteen wide column" style="line-height: 25px;">{{keyword}}{{sellCount}}{{brandName}}{{price}}</div></div>'
			+ '<div class="row" style="white-space: normal;display: flex;padding: 2px;" ><div class="sixteen wide column" style="height: 30px;display: block;line-height: 15px;overflow: hidden;">{{goodsName}}</div></div>'
			+ '</div>';


window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_LINK_TEMPLATE = {};
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_LINK_TEMPLATE.KAOLA = "https://goods.kaola.com/product/<!=PRODUCT_ID=!>.html";
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_LINK_TEMPLATE.VIP = "https://detail.vip.com/detail-<!=BRAND_ID=!>-<!=PRODUCT_ID=!>.html";
window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_LINK_TEMPLATE[ "TAOBAO-DAILY" ] = "https://item.taobao.com/item.htm?id=<!=PRODUCT_ID=!>";

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;



(function(){

	var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	//CSS;
	window.b2link.util.importCSSsToHead( host + "/libs/dhtmlx/5.1.0/fonts/font_roboto/roboto.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxlayout_dhx_skyblue.css"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxlayout_dhx_terrace.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxlayout_dhx_web.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxlayout_material.css"
	);

	//JS - host + "/libs/dhtmlx/5.1.0/dhtmlxCommon/dhtmlx-all.js";
	window.b2link.util.importJSsToHead( host + "/libs/dhtmlx/5.1.0/dhtmlxCommon/dhtmlxcommon-all.js"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxlayout.js"
	);

	//--------------------------------------------------dhtmlxWindows;

	//CSS;
	window.b2link.util.importCSSsToHead( host + "/libs/dhtmlx/5.1.0/fonts/font_roboto/roboto.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_dhx_skyblue.css"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_dhx_terrace.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_dhx_web.css"
		//, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_material.css"
	);

	//JS - host + "/libs/dhtmlx/5.1.0/dhtmlxCommon/dhtmlx-all.js";
	window.b2link.util.importJSsToHead( host + "/libs/dhtmlx/5.1.0/dhtmlxwindows-controller.js", host + "/libs/dhtmlx/5.1.0/dhtmlxCommon/dhtmlxcommon-all.js"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows.js"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_dnd.js"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_menu.js"
		, host + "/libs/dhtmlx/5.1.0/dhtmlxwindows_resize.js"
		, initialize
	);

	/**
	 * dhtmlx 라이브러리 초기화;
	 * @function
	 */
	function initialize()
	{
		try
		{
			if( initialize._bInit ) return;
			if( !window._dhx$Windows )
			{

				window._dhx$Windows = new dhtmlXWindows();
				window._dhx$Windows.attachViewportTo( window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_PANEL );

				initialize._bInit = 1;
			}

		}
		catch( e )
		{
			window.TtwLog.log( "[ ERROR ] - initialize - " + e );
			return;
		}
	};

	initialize._bInit = 0;

	if( !initialize._bInit ) initialize();

})();


window.SYS0037_UI_API.dhtmlx.event = window.SYS0037_UI_API.dhtmlx.event || {};
window.SYS0037_UI_API.dhtmlx.event.window_close = function( win ){

		win.detachAllEvents();
		window.dhx$Windows.close( win );
		win = null;
}

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * dhtmlx window를 생성하는 함수
 * @function
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow = function()
{

	var id = SUtilMath.getUnique();

	var window0 = window._dhx$Windows.createWindow( id, 10, 10, 400, 500 );

	//test;
	//window.wind0 = window0;

	//--------------------------------------------------;
	//dhtml Window Object Reference;
	//var windowObject = _dhx$Windows.window( id );
	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( "dhtmlxAccordionWindows" );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	return windowObject;
};


/**
 * dhtmlx window를 fullScreen으로 생성하는 함수
 * @function
 * @param {String} title //윈도우타이틀
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow__fullScreen = function( title )
{

	title = title || "dhtmlxAccordionWindows";

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, 0, 0, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	return windowObject;
};


/**
 * dhtmlx window를 좌표,크기를 지정해서 생성하는 함수
 * @function
 * @param {String} title //윈도우타이틀
 * @param {Object} option
 <code>
 {
 	  t : 100 //top;
 	, l : 100 //left;
 	, w : 100 //width;
 	, h : 100 //heigth;
 }
 </code>
 */
window.SYS0037_UI_API.dhtmlx.createWindow = function( title, option )
{

	title = title || "dhtmlxAccordionWindows";

	var t,l,w,h;
	if( option )
	{
		t = option.t || 0;
		l = option.l || 0;
		w = option.w || window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH;
		h = option.h || window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT;
	}
	else
	{
		t = 0;
		l = 0;
		w = window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH;
		h = window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT;
	}

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, l, t, w, h );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	windowObject.attachEvent( "onClose", function( win ){ windowObject.windowClose( win ); });

	return windowObject;
};

/**
 * dhtmlx window를 좌표,크기를 지정해서 생성하고 엘레멘트를 삽입하는 함수
 * @function
 * @param {String} title //윈도우타이틀
 * @param {Object} option
 <code>
 {
 	  t : 100 //top;
 	, l : 100 //left;
 	, w : 100 //width;
 	, h : 100 //heigth;
 }
 </code>
 * @param {element} el //;
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow__AppendObject = function( title, option, el )
{

	title = title || "dhtmlxAccordionWindows";

	var t,l,w,h;
	if( option )
	{
		t = option.t || 0;
		l = option.l || 0;
		w = option.w || window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH;
		h = option.h || window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT;
	}
	else
	{
		t = 0;
		l = 0;
		w = window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH;
		h = window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT;
	}

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, l, t, w, h );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	windowObject.appendObject( el );

	windowObject.attachEvent( "onClose", function( win ){ windowObject.windowClose( win ); });

	return windowObject;
};

/**
 * dhtmlx window를 생성하고 엘레멘트를 삽입하는 함수 - 풀스크린용
 * @function
 * @param {String} title //윈도우타이틀
 * @param {element} el //;
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow__fullScreen_AppendObject = function( title, el )
{

	title = title || "dhtmlxAccordionWindows";

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, 0, 0, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	windowObject.appendObject( el );

	windowObject.attachEvent( "onClose", function( win ){ windowObject.windowClose( win ); });

	return windowObject;
};

/**
 * dhtmlx window를 생성하고 엘레멘트를 삽입하는 함수 - 풀스크린용
 * @function
 * @param {String} title //윈도우타이틀
 * @param {element} el //;
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow__attachLayout_2U = function( title, el, type )
{

	title = title || "dhtmlxAccordionWindows";

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, 0, 0, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	//windowObject.appendObject( el );

	var _dhx$layout = windowObject.attachLayout( type );
		_dhx$layout.attachEvent("onContentLoaded", function(id){
			_dhx$layout.cells( id ).progressOff();
			_dhx$layout.items.items[ 1 ].cell.focus();
		});

	windowObject.attachEvent( "onClose", function( win ){ windowObject.windowClose( win ); });

	return windowObject;
};

/**
 * dhtmlx window를 생성하고 엘레멘트를 삽입하는 함수 - 풀스크린용
 * @function
 * @param {String} title //윈도우타이틀
 * @param {element} el //;
 * @return {Object} windowObject
 */
window.SYS0037_UI_API.dhtmlx.createWindow__attachLayout = function( title, type )
{

	title = title || "dhtmlxAccordionWindows";

	var id = SUtilMath.getUnique();
	var window0 = window._dhx$Windows.createWindow( id, 0, 0, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.WIDTH, window.SYS0037_UI_API.dhtmlx.CONST.SIZE.FULL_SCREEN.HEIGHT );

	var windowObject = window0;

	//dhtmlx Window"s API;
	windowObject.setText( title );
	//windowObject.keepInViewport( true );

	//windowObject.button( "close" ).disable();
	//windowObject.button( "stick" ).hide();
	windowObject.button( "stick" ).show();

	//windowObject.setModal( false );
	//windowObject.setModal( true );
	windowObject.stick();
	//windowObject.unstick();
	//--------------------------------------------------;

	//windowObject.appendObject( el );

	var _dhx$layout = windowObject.attachLayout( type );
		_dhx$layout.attachEvent("onContentLoaded", function(id){
			_dhx$layout.cells( id ).progressOff();
			_dhx$layout.items.items[ 1 ].cell.focus();
		});

	windowObject.attachEvent( "onClose", function( win ){ windowObject.windowClose( win ); });

	return windowObject;
};

/**
 * 윈도우의 상품정보 템플릿을 만드는 함수
 * @function
 * @param {Object} param
 <code>
 {

 }
 </code>
 * @return {String} HTML_string
 */
window.SYS0037_UI_API.dhtmlx.product_price_trend_makeProductInfo = function( param ){
	//var template = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO;

	var HTML_string = "";
	var template_detail = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO_DETAIL;
	var s,so;
	for( s in param ){
		so = param[ s ];
		if( s == "goodsImg" ) continue;

		if( typeof so == "object" )
		{
			var k,ko;
			for( k in so )
			{
				HTML_string += template_detail.replace( "{{title}}", s ).replace( "{{value}}", k );
			}
		}
		else HTML_string += template_detail.replace( "{{title}}", s ).replace( "{{value}}", so );
	}

	return HTML_string;
};


/**
 * 윈도우의 상품정보 템플릿을 만드는 함수
 * @function
 * @param {Object} param
 <code>
 {

 }
 </code>
 * @return {String} HTML_string
 */
window.SYS0037_UI_API.dhtmlx.product_diff_makeProductInfo = function( param ){
	if( Object.keys(param.data.doc).length === 0 && Object.keys(param.data.prev_doc).length === 0 ) return;

	var k,ko,PRODUCT_DETAIL_INFO;
	for( k in param.data ){
		ko = param.data[ k ];

		PRODUCT_DETAIL_INFO = "";

		delete ko.productInfo;
		delete ko.style;

		var s,so;
		for( s in ko ){
			so = ko[ s ];
			if( s == "goodsImg" ) continue;
			PRODUCT_DETAIL_INFO = PRODUCT_DETAIL_INFO + "<tr><td class=\"collapsing\">" + s + "</td><td>" + so + "</td></tr>\n";
		}

		ko.productInfo = PRODUCT_DETAIL_INFO;

		if( "" == ko.url ) ko.url = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_LINK_TEMPLATE[ param.HOST ].replace("<!=BRAND_ID=!>",ko.brandId).replace("<!=PRODUCT_ID=!>",ko.goodsId );

	}

	var HTML_string = window.b2link.string.applyBrace( window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_DIFF__PRODUCT_INFO, param.data );
	return HTML_string;
};

/**
 * 상품비교 정보를 표출할 Html문자열을 리턴하는 함수
 * @function
 * @param {Object} param
 <code>
 {

 }
 </code>
 * @return {String} HTML_string
 */
window.SYS0037_UI_API.dhtmlx.product_diff_makeDiffMessage = function( param ){

	var HTML_string = "";

	if( "" == param.prev_doc.goodsId && "" != param.doc.goodsId )
	{
		HTML_string = "<div class=\"ui red message\"><div class=\"header\">상품이 신규등록 되었습니다.</div>"
			+ "<p>You may now log-in with the username you have chosen</p></div>";
	}
	if( "" != param.prev_doc.goodsId && "" == param.doc.goodsId )
	{
		HTML_string = "<div class=\"ui red message\"><div class=\"header\">상품이 삭제되었습니다.</div>"
			+ "<p>You may now log-in with the username you have chosen</p></div>";
	}

	if( param.prev_doc.price != "" && param.doc.price != "" )
	{

		if( param.prev_doc.price.toString().indexOf("-") != -1 ||  param.doc.price.toString().indexOf("-") != -1 )
		{
			HTML_string = "<div class=\"ui red message\"><div class=\"header\">상품 가격이 변동되었습니다.</div>"
				+ "<p></p>"
				+ "<p>" + param.prev_doc.price + " 에서 </p>"
				+ "<p>" + param.doc.price + " 로 변경되었습니다.</p></div>";
		}
		else
		{
			if( param.prev_doc.price != param.doc.price )
			{
				var rateOfChange = 0;
				var rateOfChangeSymbol = null;
				var rateAmount = 0;
				var diff = ""

				if(  param.prev_doc.price > param.doc.price )
				{
					rateOfChangeSymbol = "-";
					rateOfChange = param.doc.price / param.prev_doc.price
					rateAmount = param.prev_doc.price - param.doc.price
					diff = " ¥ " + rateOfChangeSymbol + rateAmount.toFixed(2) + " (" + rateOfChangeSymbol + "" + rateOfChange.toFixed(2) + "%)" + " 감소했습니다."
				}
				else
				{
					rateOfChangeSymbol = "+";
					rateOfChange = param.prev_doc.price / param.doc.price
					rateAmount = param.doc.price - param.prev_doc.price
					diff = " ¥ " + rateOfChangeSymbol + rateAmount.toFixed(2) + " (" + rateOfChangeSymbol + "" + rateOfChange.toFixed(2) + "%)" + " 증가했습니다.."
				}

				HTML_string ="<div class=\"ui red message\"><div class=\"header\">상품 가격이 변동되었습니다.</div>"
				+ "<p></p>"
				+ "<p>" + diff + "</p>"
				+ "<p> ¥" + param.prev_doc.price + " -> ¥" + param.doc.price + "</p></div>";
			}
		}

	}
	if( param.prev_doc.goodsName != "" && param.doc.goodsName != "" )
	{
		if( param.prev_doc.goodsName != param.doc.goodsName )
		{
			HTML_string = "<div class=\"ui red message\"><div class=\"header\">상품명 변동되었습니다.</div>"
			+ "<p></p>"
			+ "<p>" + param.prev_doc.goodsName + " 에서 </p>"
			+ "<p>" + param.doc.goodsName + " 로 변경되었습니다.</p></div>";
		}
	}

	return HTML_string;

};
//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
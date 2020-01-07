//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------dhtmlxLayout;

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

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );
window.b2link.util.importJS__Reuse( host + "/libs/FancyGrid/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;
var F1 = window.b2link.element.getElementsByClassName;

//----------------------------------------------------------------------------------------------------;

/**
 * ESC 키로 DHTMLX Window 종료하기
 * @function
 * @param {KeyBoardEvent} e
 */
var evt_kUp__dhxWindow = function( e )
{
	if( !window._dhx$Windows ) return;

	var windowTop = _dhx$Windows.getTopmostWindow();

	if( !windowTop ) return;
	if( 27 == e.keyCode  )
	{
		window.dhx$Windows.close( windowTop );
	}

	if( e.keyCode == 37 || e.keyCode == 39 )
	{
		var windowIdd = _dhx$Windows.getTopmostWindow();

		//window.console.log( "e.keyCode : " + e.keyCode );
		if( e.keyCode == 37 )
		{
			//if( 1 == window.CURRENT_VIEW_UI_CTRL._CTRLS.fancygrid_1_config.paging.curPage ) return;
			windowTop.grid.prevPage();
		}

		if( e.keyCode == 39 ) windowTop.grid.nextPage();
	}

	if( e.keyCode == 13 )
	{
		if( -1 != e.target.className.indexOf( "id-input-search" ) )
		{
			if( windowTop.grid.search_product ) windowTop.grid.search_product();
		}
	}
	return;
};


/**
 * @property {Object}
 */
var _ELS = {
	BODY : document.body
	, BTN_FOLDING_MENU : F0( window.document, "id-header-icon" )
	, MENU_LIST : F0( window.document, "id-menu-list" )

	, CONTENT : F0( window.document, "id-content" )
	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )
	, CONTENT_TITLE : F0( window.document, "id-sub-header-title" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )

	, DIV_LOADER : F0( window.document, "loader" )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, LOADER : F0( window.document, "id-loader" )

	, LNB : F0( window.document, "id-menu-list-left" )

	, WRAP : F0( window.document, "id-wrap" )

	, BTN_MODAL_REFINE_DATA : F0( window.document, "id-btn-render_reine_data")
};


var CONTENT_HEADER_HEIGHT = _ELS.CONTENT_HEADER.offsetHeight;

/**
 * @important productInfoView등의 키값 명명은 파일 명명과 동일 해야한다.
 * @property {Object}
 */
var CONTENT_INFO = {

	//일반유저기능 - 최석준;
	dashboard                       : { title : "대쉬보드"                   , menu_title : "대쉬보드"                   , nm_file : "dashboard"                      , icon : "chart" }
	, status_all                    : { title : "종합 데이터 현황"             , menu_title : "종합 데이터 현황"             , nm_file : "status_all"                     , icon : "chart" }
	, status_daily_merge            : { title : "병합 데이터 현황"             , menu_title : "병합 데이터 현황"             , nm_file : "status_daily_merge"             , icon : "chart" }
	, status_detail                 : { title : "수집 데이터 현황"             , menu_title : "수집 데이터 현황"             , nm_file : "status_detail"                  , icon : "chart" }
	, status_diff                   : { title : "병합 데이터 현황 - 전일비교"    , menu_title : "병합 데이터 현황 - 전일비교"     , nm_file : "status_diff"                   , icon : "chart" }
	, status_ERROR                  : { title : "병합 데이터 현황 - 에러데이터"   , menu_title : "병합 데이터 현황 - 에러데이터"   , nm_file : "status_ERROR"                  , icon : "chart" }

	, brandInfoViewByKeyword        : { title : "병합데이터 - Brand - 수집키워드", menu_title : "병합데이터 - Brand - 수집키워드", nm_file : "brandInfoViewByKeyword"               , icon : "file image" }

	, productInfoView               : { title : "상품검색 - 테이블"            , menu_title : "상품검색 - 테이블"             , nm_file : "productInfoView"               , icon : "file image" }
	, productInfoView_List          : { title : "상품검색 - 썸네일 - 대용량"     , menu_title : "상품검색 - 썸네일 - 대용량"     , nm_file : "productInfoView_List"          , icon : "file image" }
	, productInfoView_List_price    : { title : "상품검색 - 가격추이"           , menu_title : "상품검색 - 가격추이"           , nm_file : "productInfoView_List_price"    , icon : "file image" }
	, productInfoView_List_price_UI : { title : "상품검색 - 가격추이 - UI"      , menu_title : "상품검색 - 가격추이 - UI"      , nm_file : "productInfoView_List_price_UI" , icon : "file image" }
	, productInfoViewThumb          : { title : "상품조회 - 썸네일"            , menu_title : "상품조회 - 썸네일"             , nm_file : "productInfoViewThumb"          , icon : "file image" }
	, productInfoViewThumb_List     : { title : "상품조회 - 썸네일 - 대용량"     , menu_title : "상품조회 - 썸네일 - 대용량"     , nm_file : "productInfoViewThumb_List"      , icon : "file image" }
	, productInfoViewThumb_diff     : { title : "상품조회 - 전일비교"           , menu_title : "상품조회 - 전일비교"           , nm_file : "productInfoViewThumb_diff"     , icon : "file image" }
	, brandInfoView                 : { title : "병합 데이터 - Brand 분포"     , menu_title : "병합 데이터 - Brand 분포"      , nm_file : "brandInfoView"                 , icon : "file image" }
	, shopInfoView                  : { title : "병합 데이터 - Shop 분포"      , menu_title : "병합 데이터 - Shop 분포"       , nm_file : "shopInfoView"                  , icon : "file image" }
	, categoryInfoView              : { title : "병합 데이터 - Category 분포"  , menu_title : "병합 데이터 - Category 분포"   , nm_file : "categoryInfoView"              , icon : "file image" }
	, sellCountInfoViewByBrand      : { title : "병합 데이터 - sellCount 분포 - 브랜드" , menu_title : "병합 데이터 - sellCount 분포 - 브랜드"  , nm_file : "sellCountInfoViewByBrand"             , icon : "file image" }
	, sellCountInfoViewByShop       : { title : "병합 데이터 - sellCount 분포 -  샵" , menu_title : "병합 데이터 - sellCount 분포 -  샵"  , nm_file : "sellCountInfoViewByShop"             , icon : "file image" }
	, sellCountInfoViewByCategory   : { title : "병합 데이터 - sellCount 분포 - 카테고리" , menu_title : "병합 데이터 - sellCount 분포 -  카테고리"  , nm_file : "sellCountInfoViewByCategory"             , icon : "file image" }
	, brandInfoByScatter            : { title : "병합 데이터 - Brand 정보 확인" , menu_title : "병합 데이터 - Brand 정보 확인"  , nm_file : "brandInfoByScatter"             , icon : "file image" }

	, sellCountInfoViewByBrand_dhtmlx            : { title : "병합 데이터 - Brand 정보 확인 - dhtmlx " , menu_title : "병합 데이터 - Brand 정보 확인 - dhtmlx"  , nm_file : "sellCountInfoViewByBrand_dhtmlx"           , icon : "file image" }
	, sellCountInfoViewByBrand_popup             : { title : "병합 데이터 - Brand 정보 확인 - 팝업"     , menu_title : "병합 데이터 - Brand 정보 확인 - 팝업"     , nm_file : "sellCountInfoViewByBrand_popup"            , icon : "file image" }


	//일반유저기능 - 김현요;
	, sellCountByGoods_ids          : { title : "SellCount 조회 - goods_id" , menu_title : "SellCount 조회 - goods_id"  , nm_file : "sellCountByGoods_ids"          , icon : "file image" }

	//관리자기능;
	, DBexport                      : { title : "관리자 - Data - Export"     , menu_title : "관리자 - Data - Export"     , nm_file : "DBexport"                      , icon : "database" }
	, DBimport                      : { title : "관리자 - Data - Import"     , menu_title : "관리자 - Data - Import"     , nm_file : "DBimport"                      , icon : "database" }
	, "00_dataMerge_daily"          : { title : "관리자 - 수집 데이터 병합 - 일"  , menu_title : "관리자 - 수집 데이터 병합 - 일" , nm_file : "00_dataMerge_daily"            , icon : "database" }
	, "00_dataMerge_monthly"        : { title : "관리자 - 수집 데이터 병합 - 월"  , menu_title : "관리자 - 수집 데이터 병합 - 월" , nm_file : "00_dataMerge_monthly"          , icon : "database" }

	// , productInfoViewThumb_leaflet  : { title : "상품상세보기테스트"        , menu_title : "상품상세보기테스트"        , nm_file : "productInfoViewThumb_leaflet"    , icon : "file image" }

};


var FOOTER_HEIGHT = _ELS.CONTENT_FOOTER.offsetHeight;

var HEADER_TOP_HEIGHT = _ELS.HEADER_TOP.offsetHeight;

/**
 * UI Component들이 배치될 메인 컨테이너
 * @property {String}
 */
var _HTML_ID_CONTAINER_ = "id-container";

//--------------------------------------------------;

/**
 * UI Rendring 관련 함수 모음 패키지 선언;
 * FUNCTION 영역에 상세 정의;
 * @property {Object}
 */
var _UI_RENDERER_ = {

	//초기 UI 화면 표출;
	initialize : null

	//왼쪽 메뉴바에서 선택한 UI 표출;
	, render : null
};

//--------------------------------------------------;

/**
 * 현재 화면에 보이는 Content View Controller;
 * @property {Object}
 */
window.CURRENT_VIEW_UI_CTRL;

window.SYS0037_UI_INFO = window.SYS0037_UI_INFO|| {};
window.SYS0037_UI_INFO.CONST = window.SYS0037_UI_INFO.CONST|| {};
window.SYS0037_UI_INFO.CONST.SIZE = {};
window.SYS0037_UI_INFO.CONST.SIZE.LNB_WIDTH = function(){ return _ELS.MENU_LIST.offsetWidth };
//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
function initialize()
{
	try
	{
		if( initialize._bInit ) return;
		_ELS.BODY.style.overflowY = "hidden";
		_UI_RENDERER_.initialize();

		initialize._bInit = 1;

	}
	catch( e )
	{
		window.TtwLog.log( "[ ERROR ] - initialize - " + e );
		return;
	}
};
initialize._bInit = 0;

/**
 * @function
 * @param {MouseEvent} e
 */
//var _evt_loader_click = function( e ){ return; };

/**
 * @function
 * @param {ResizeEvent} e
 */
var _evt_resize_content = function( e )
{
	var _WIDTH_ = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_PANEL.offsetWidth;
	_ELS.CONTENT.style.width = ( _WIDTH_ - _ELS.LNB.offsetWidth ) + "px";

	     if( window.innerWidth < 1270 ) lnb_toggle( "close" );
	else if( window.innerWidth > 1270 ) lnb_toggle( "open" );

	//화면 레이아웃 재배치;
	window.CURRENT_VIEW_UI_CTRL.reset_layout();
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} param "optn", "close"
 */
var lnb_toggle = function( param )
{
	if( param == lnb_toggle._idMenuFolding ) return;

	if( !param )
	{
		if( lnb_toggle._idMenuFolding == "open" ) param = "close";
		else param = "open";
	}

	lnb_toggle._idMenuFolding = param;

	var menuControlInfo = {
		  close : { title_display : "none" , LNB_width : 30 }
		, open  : { title_display : "block", LNB_width : 250 }
	};

	var _el_menu_titles = window.document.getElementsByClassName( "id-header-title" );

	var io;
	var i=0, iLen=_el_menu_titles.length;
	for( ; i<iLen; ++i )
	{
		io = _el_menu_titles[ i ];
		io.style.display = menuControlInfo[ lnb_toggle._idMenuFolding ].title_display;
	}

	_ELS.LNB.style.width = menuControlInfo[ lnb_toggle._idMenuFolding ].LNB_width + "px";
	_ELS.CONTENT.style.width = ( _ELS.WRAP.offsetWidth - menuControlInfo[ lnb_toggle._idMenuFolding ].LNB_width ) + "px";

	lnb_toggle._idMenuFolding = param;
};
lnb_toggle._idMenuFolding = "open";

//--------------------------------------------------;

/**
 * 초기 UI 화면 표출
 * @function
 * @param {String} fileName
 */
_UI_RENDERER_.initialize = function()
{
	_ELS.CONTENT.style.width = ( _ELS.WRAP.offsetWidth - _ELS.LNB.offsetWidth ) + "px";

	window.CURRENT_VIEW_UI_CTRL = _UI_RENDERER_.render( "dashboard" );

	//window.b2link.html_div.apply_child( el, listArray );
	var menu_list = [];
	for( var s in CONTENT_INFO )
	{
		menu_list.push( CONTENT_INFO[ s ] );
	}
	window.b2link.html_div.apply_child( _ELS.MENU_LIST, menu_list )
	_ELS.LNB.style.cursor = "pointer";
	_ELS.BTN_FOLDING_MENU.addEventListener( "click", function( e ){
		var t = e.target;

		if( t.parentElement.getAttribute( "data-act" ) ) return;
		if( t.id == "bars" || t.parentElement.id == "bars" )
		{
			lnb_toggle();
			window.CURRENT_VIEW_UI_CTRL.reset_layout();
			return;
		}

		e.stopImmediatePropagation();
		e.stopPropagation();
	});

	_ELS.LNB.addEventListener( "click", function( e ){
		var t = e.target;
		if( t.id == "bars" || t.parentElement.id == "bars" ) return;
		if( !t.parentElement.getAttribute( "data-act" ) ) return;
		if( t.parentElement.tagName != "DIV" ) return;


		//window.CURRENT_VIEW = t.parentElement.getAttribute( "data-act" );
		window.CURRENT_VIEW_UI_CTRL = _UI_RENDERER_.render( t.parentElement.getAttribute( "data-act" ) );
		window.CURRENT_VIEW_UI_CTRL.NAME = t.parentElement.getAttribute( "data-act" );
	});

	//_ELS.LOADER.addEventListener( "click", _evt_loader_click );
};

/**
 * 왼쪽 메뉴바에서 선택한 UI 표출
 * @function
 * @param {String} fileName
 */
_UI_RENDERER_.render = function( fileName )
{
	window.b2link.element.removeAllChildren( _ELS.DIV_ID_CONTAINER );

	//Content Title 변경;
	_ELS.CONTENT_TITLE.innerText = CONTENT_INFO[ fileName ] ? CONTENT_INFO[ fileName ].title : fileName;

	//----------CONTENT UI 생성;
	var host = window.b2link.url.getServerURL_WebServer_Self();

	//UI 소스 로딩 후 [ {HTMLElement}, {Object:Controller} ]를 반환한다;
	var _PATH_ = "/ui/App/BatchDesktop/";
	var _FILE_URL_ = host + _PATH_ + fileName;
	var key_els = _PATH_ + fileName;

	var _b_init = 0;
	var els = window.b2link.STATIC.UI.__getObj( key_els );

	if( !els )
	{
		els = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI( key_els, _FILE_URL_ + ".html", _FILE_URL_ + ".js", _FILE_URL_ + ".css", _HTML_ID_CONTAINER_ );
		_b_init = 1;
	}

	var el = els[ 0 ];
	var elc = els[ 1 ];

	window.b2link.element.appendChild( _ELS.DIV_ID_CONTAINER, el );

	var data = {
		contatinerHeight : window.innerHeight - HEADER_TOP_HEIGHT - CONTENT_HEADER_HEIGHT - FOOTER_HEIGHT - 20
		, loader : {}
		, menuNm : fileName
		, lnb_toggle : lnb_toggle
	};

	//*/
	if( _b_init ) elc.initialize( data );
	/*/
	//최석준 - 수정중
	if( _b_init ) elc.initialize( data );
	else
	{
		debugger;
		elc.reload();
	}
	//*/
	//화면 레이아웃 재배치;
	if( _b_init ) elc.reset_layout();
	//----------;

	return elc;
};
(function(){
	if( -1 != window.location.href.indexOf( "mornitor.html" ) )
	{
		window._FN_SET_MODE = function( mode ){
			window.CURRENT_VIEW_UI_CTRL = _UI_RENDERER_.render( mode );
			window.CURRENT_VIEW_UI_CTRL.NAME = mode;
		};
	}
})();


var render_modal_refine_data = function( e ){
	var fileName = "refine_data_info-modal";
	var _PATH_ = "/ui/App/BatchDesktop/";
	var _FILE_URL_ = window.SYS0037_UI_API.fancygrid.CONST.HOST.SELF.WEB_SERVER + _PATH_ + fileName;

	//모달 객체를 1개만 유지하기 위해 생성된 모달을 폐기한다;
	//if( _CTRLS[ modalIndex ] ) _CTRLS[ modalIndex ].dispose();

	var els = window.b2link.util.importHTMLJSCSS( _FILE_URL_ + ".html", _FILE_URL_ + ".js", _FILE_URL_ + ".css", "div_0__Top_modal" );

	var el = els[ 0 ];
	var elc = els[ 1 ];

	_ELS.BTN_MODAL_REFINE_DATA.classList.add('loading');

	setTimeout( function(){

		elc.render_modal_sync();
		_ELS.BTN_MODAL_REFINE_DATA.classList.remove('loading');

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );


}

//--------------------------------------------------;

//정제데이터확인 클릭 이벤트
_ELS.BTN_MODAL_REFINE_DATA.addEventListener( 'click', render_modal_refine_data )

//EVENT - ESC 키로 DHTMLX Window 종료하기;
window.document.removeEventListener( "keyup", evt_kUp__dhxWindow, false );
window.document.addEventListener( "keyup", evt_kUp__dhxWindow, false, 0, true );

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET METHOD;

//--------------------------------------------------SET METHOD;

/**
 * @function
 */
var setWindowContainer__div_0__UI_Component_Panel = function()
{
	var el = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_PANEL;
		el.setAttribute( "style", el.getAttribute( "style" ) + "position : absolute !important;" );
};

//--------------------------------------------------GET METHOD / SET METHOD;

//--------------------------------------------------GETTER;

//--------------------------------------------------SETTER;

//--------------------------------------------------GETTER / SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//;
setWindowContainer__div_0__UI_Component_Panel();

if( !initialize._bInit ) initialize();

window.addEventListener( "resize", _evt_resize_content );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

null;
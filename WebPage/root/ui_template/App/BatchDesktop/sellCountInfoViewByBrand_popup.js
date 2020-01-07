//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/brandInfoView.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

//JS - Fancygrid;
window.b2link.util.importJS__Reuse( host + "/libs/FancyGrid/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {
	  CHART0 : F0( window.document, "id-echarts0" )
	, CHART1 : F0( window.document, "id-echarts1" )

	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )

	, DIV_FANCYGRID : F0( window.document, "id-fancygrid" )
	, DIV_FANCYGRID_0 : window.document.getElementById( "div-fancygrid-0" )
	, DIV_FANCYGRID_1 : window.document.getElementById( "div-fancygrid-1" )
	, DIV_FANCYGRID_RIGHT : F0( window.document, "id-fancygrid-right" )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//--------------------------------------------------;
var _URLS = {};

	//
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getCollectionListByHost__info?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>";

	//;
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

	//;
	_URLS.URL3 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getDbListByHost?code_db=<!=CODE_DB=!>";
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

/**
 * 로딩중 모달 화면 컨트롤러
 * @property {Object}
 */
var _LOADER_SPINNER_;

/**
 * Echarts Controller List
 * @property {Array}
 */
var _LIST_ECHARTS_ = [];

/**
 * JD, KAOLA, TAOBAO, VIP, ...
 * @property {String}
 */
var _TARGET_SITE_NAME_;

var CONTAINER_HEIGHT;

var _N_SET_TIMEOUT_ = 100;
var _MENU_NAME_;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	  chart0 : null
	, chart1 : null

	, fancygrid_0 : null
	, fancyfrid_0_tbar : null
	, fancygrid_1 : null

	, window0 : null
};

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * ESC 키로 DHTMLX Window 종료하기
 * @function
 * @param {KeyBoardEvent} e
 */
var evt_kUp__dhxWindowClose = function( e )
{
	if( null == _CTRLS.window0 ) return;
	if( 27 != e.keyCode  ) return;

	_CTRLS.window0.detachAllEvents();

	window.dhx$Windows.close( _CTRLS.window0 );
	_CTRLS.window0 = null;
};

/**
 * Fancygrid 좌우 화살표 키보드로 이전/다음 페이지 이동하기
 * @function
 * @param {KeyBoardEvent} e
 */
var evt_kUp__FancygridMovePage = function( e )
{
	if( e.keyCode == 37 || e.keyCode == 39 )
	{
		//window.console.log( "e.keyCode : " + e.keyCode );
		var grid = FancyGrid.get( "div-fancygrid-1" );
		if( e.keyCode == 37 )
		{
			if( 1 == grid.getPage() ) return;
			grid.prevPage();
		}

		if( e.keyCode == 39 ) grid.nextPage();
	}
};

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {dhtmlXWindows}
 */
function initialize__dhtmlxWindows()
{
	if( !window._dhx$Windows )
	{
		window._dhx$Windows = new dhtmlXWindows();
		window._dhx$Windows.attachViewportTo( window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_PANEL );
	}

	return window._dhx$Windows;
};

/**
 * @function
 * @return {dhtmlXWindow}
 */
var _createWindow = function()
{
	var id = SUtilMath.getUnique();

	var window0 = window._dhx$Windows.createWindow( id, 10, 10, 400, 500 );

	//test;
	//window.wind0 = window0;

	//--------------------------------------------------;
	//dhtml Window Object Reference;
	//var windowObject = window._dhx$Windows.window( id );
	var windowObject = window0;

	//dhtmlx Window's API;
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
 * @function
 */
var _초기화면렌더링 = function()
{
	try
	{
		window.SYS0037_UI_API.spinner.show();

		//create_fancy_grid_siteList();
		//화면 레이아웃 재배치;
		_CTRLS.fancygrid_0 = window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn2( {
			elementID : "div-fancygrid-0"
			, width : 800
			, height : _ELS.DIV_ID_CONTAINER.offsetHeight
		})

		_CTRLS.fancygrid_0.on( "cellclick", fancygrid0_evt_click_btn )
		reset_layout();

		window.SYS0037_UI_API.spinner.hide();
	}
	catch( er )
	{
		window.TtwLog.error( "[ ERROR ] - " + er );
	}
};


var fancygrid0_evt_click_btn = function( grid, value ){

	if( value.column.type != "action" ) return;

	fancygrid0_evt_click_btn.DATA = {
			HOST : value.value.HOST
		, DB : value.value.DB
		, COL : value.value.COL
	};

	var FNS = {
		"List Chart" : function( grid, value ){

			window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_brand__grid.getData( grid, value, function( data ){

				if( _CTRLS.window0 && !_CTRLS.window0.isParked() ) _CTRLS.window0.park();

				var DATA = {
					elementID : "div-fancygrid-list"
					, width : _ELS.DIV_ID_CONTAINER.offsetWidth - _CTRLS.fancygrid_0.getWidth() - 34
					, height : _CTRLS.fancygrid_0.getHeight() - _ELS.CHART0.offsetHeight
					, data : data
				}

				if( !_CTRLS.fancygrid_1 ) _CTRLS.fancygrid_1 = window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_brand__grid( DATA );
				else
				{
					//update;
					_CTRLS.fancygrid_1.setData( data );
					_CTRLS.fancygrid_1.update();
				}

				var DATA = {
					HOST :fancygrid0_evt_click_btn.DATA.HOST
					, DB : fancygrid0_evt_click_btn.DATA.DB
					, COL : fancygrid0_evt_click_btn.DATA.COL
					, element : null
				};

				if( !_CTRLS.chart0 )
				{
					var id = "chart-" + SUtilMath.getUnique();

					var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
					_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

					_ELS[ id ].style.width = "100%";
					_ELS[ id ].style.height = "600px";

					_ELS.CHART0.appendChild( _ELS[ id ] );

					DATA.element = _ELS[ id ];
					window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async( DATA,function(chart){
						_CTRLS.chart0 = chart
					});
				}
				else
				{
					window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async.updateSeriesData( _CTRLS.chart0, DATA,function(chart){
						_CTRLS.chart0 = chart
					});
				}

				reset_layout();
			})
		}
		, "Full List" : function( grid, value ){

			var DATA = {
				HOST :fancygrid0_evt_click_btn.DATA.HOST
				, DB : fancygrid0_evt_click_btn.DATA.DB
				, COL : fancygrid0_evt_click_btn.DATA.COL
			};

			var popupId = "test"//window.SYS0037_UI_API.CONST.CONNECTION_INFO[ value.value.HOST ] + "-" + value.value.DB + "-" + value.value.COL;
			var popupW = window.screen.availWidth / 2;
			var popupH = window.screen.availHeight / 2;

			if( !window.b2link.open._map[ popupId ] )
			{
				 window.b2link.open._map[ popupId ] = window.b2link.open.newWindow__RelativeCoords( "./index-popup.common.html", popupId,
					{
						w : popupW//width;
						, h : popupH//height;
						, l : 0//left;
						, t : 0//top;
						, bCenter : false
						, params : ""//Popup Parameters;
					}
				);

				 window.b2link.open._map[ popupId ].__onload = function(){

					window.b2link.open._map[ popupId ].document.body.id = "body";
					window.b2link.open._map[ popupId ].b2link.util.importHTMLJS( "./ui_popup/ECharts/4.2.0.rc2/popup-addTreemap.html", "./ui_popup/ECharts/4.2.0.rc2/popupAPI.addTreemap.js", "div_0__UI_Component_Panel" );
					window.b2link.open._map[ popupId ].addChart( DATA );
					window.b2link.open._map[ popupId ].focus();
				};
			}
			else
			{
				window.b2link.open._map[ popupId ].addChart( DATA );
				window.b2link.open._map[ popupId ].focus();
			}
		}
	};

	return FNS[ value.column. title ]( grid, value );
};


/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _MIN_WIDTH_ = 1270;

	//----------Target HTMLElement;
	var tEL0 = _ELS.CHART0;
	var tEL1 = _ELS.DIV_FANCYGRID;
	var tEL2 = _ELS.DIV_FANCYGRID_RIGHT;
	var tEL3 = _ELS.DIV_ID_CONTAINER;
	//----------Target HTMLElement;

	var _WIDTH0_ = 800;
	var _WIDTH1_ = tEL1.offsetWidth - _WIDTH0_ - 10;
	tEL0.style.width = tEL2.style.width = ( _WIDTH1_ - 10 ) + "px"

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;
	tEL3.style.height = _HEIGHT_ + "px";
	tEL3.scrollTop = 0;

	//----------;
	var _HEIGHT0_;
	var _HEIGHT1_;
	if( window.innerWidth < _MIN_WIDTH_ )
	{
		tEL1.style.display = "table-caption";

		_WIDTH0_ = _WIDTH1_ = tEL3.offsetWidth - 34;

		_HEIGHT0_ = 300;
		_HEIGHT1_ = tEL3.offsetHeight - 22;

		tEL0.style.width = ( _WIDTH1_ ) + "px"
		tEL2.style.width = ( _WIDTH1_ - 10 ) + "px";
	}
	else
	{
		tEL1.style.display = "block";

		_WIDTH0_ = 800;
		_WIDTH1_ = tEL1.offsetWidth - _WIDTH0_ - 10;

		tEL0.style.width = ( _WIDTH1_ ) + "px"
		tEL2.style.width = ( _WIDTH1_ - 10 ) + "px";

		_HEIGHT0_ = tEL3.offsetHeight - 22;
		_HEIGHT1_ = tEL3.offsetHeight - tEL0.offsetHeight - 22;
	};
	//----------;


	//----------;
	var t = _CTRLS;
	if( t.fancygrid_0 ){ t.fancygrid_0.setWidth( _WIDTH0_ ); t.fancygrid_0.setHeight( _HEIGHT0_ ); }
	if( t.fancygrid_1 ){ t.fancygrid_1.setWidth( _WIDTH1_ ); t.fancygrid_1.setHeight( _HEIGHT1_ ); }
	if( t.window0 )
	{
		t.window0.setDimension( window.innerWidth, window.innerHeight );
		t.window0.setPosition( 0, 0 );

		//확인하기 - 20190303_1653 - 최석준 - _CTRLS.chart1에 API가 없을까요?;
		_ELS.CHART1.style.width = window.innerWidth - 30 + "px";
		_ELS.CHART1.style.height = window.innerHeight - 67 + "px";

		t.chart1.resize();
	}

	_LIST_ECHARTS_.forEach( function( chart ){ chart.resize(); });
	//----------;
};

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

//--------------------------------------------------GET METHOD/ SET METHOD;

//--------------------------------------------------GETTER;

//--------------------------------------------------SETTER;

//--------------------------------------------------GETTER / SETTER;

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//;
setWindowContainer__div_0__UI_Component_Panel();

//--------------------------------------------------;
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	RETURN;

//----------------------------------------------------------------------------------------------------;

( function(){
	window._ELS = _ELS;

	var _ = {};

		/**
		 * @property {Object}
		 * <code>
			{
			}
		 * </code>
		 */
		_._ELS = _ELS;

		/**
		 * @property {Object}
		 * <code>
			{
			}
		 * </code>
		 */
		_._CTRLS = _CTRLS;

		/**
		 * @function
		 * @param {Object} data
		 * <code>
			{
			}
		 * </code>
		 */
		_.initialize = function( data ){

			CONTAINER_HEIGHT = data.contatinerHeight;
			_LOADER_SPINNER_ = data.loader;
			_MENU_NAME_ = data.menuNm;

			_초기화면렌더링();
		};

		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

	return _;

})();
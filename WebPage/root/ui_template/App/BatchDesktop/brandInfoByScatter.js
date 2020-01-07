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
	, CHART2 : F0( window.document, "id-echarts2" )

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

	//;
	_URLS.URL4 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드카테고리정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&brand_id=<!=ID_BRAND=!>";
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
var _POPUP_COUNT_ = 0;
//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	  chart0 : null
	, chart1 : null
	, chart2 : null

	, fancygrid_0 : null
	, fancyfrid_0_tbar : null
	, fancygrid_1 : null

	, window0 : null
	, window1 : null
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

		create_fancy_grid_siteList();
		//화면 레이아웃 재배치;
		reset_layout();

		window.SYS0037_UI_API.spinner.hide();
	}
	catch( er )
	{
		window.TtwLog.error( "[ ERROR ] - " + er );
	}
};

var DbList = [ { index : 0, targetYear : "Year" } ];

var create_fancy_grid_siteList = function(){

_CTRLS.fancygrid_0 = new FancyGrid({ renderTo : "div-fancygrid-0", title : "DB Server List"
		, height : _ELS.DIV_ID_CONTAINER.offsetHeight
		, theme : { name : "bootstrap"
			, config : {
				cellHeaderHeight : 30
				, cellHeight : 32
				, titleHeight : 42
				, barHeight : 37
				, bottomScrollHeight : 12
			}
		}
		, data : []
		, defaults : { type : "string", sortable : true }
		, paging : { pageSize : 50, pageSizeData : [ 30, 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [{ disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [
			{ type : "combo", data : [
					  { index : 0, SITE : "SITE" }
					//, { index : 1, DB : "JD-DAILY" }
					//, { index : 2, DB : "JD-LIST" }
					, { index : 3, SITE : "TAOBAO-DAILY" }
					, { index : 4, SITE : "TAOBAO-LIST" }
					, { index : 5, SITE : "KAOLA" }
					, { index : 6, SITE : "VIP" }
				]
				, displayKey : "SITE"
				, valueKey : "index"
				, value : 0
				, events : [
					{
						change : create_fancy_grid_siteList.getDbList
					}
				]
			}
			, { type : "combo", data :  [
					{ index : 0, DB : "Database" }
		  		]
				, displayKey : "DB"
				, valueKey : "index"
				, value : 0
				, editable: true
				, width : 200
				, minListWidth : 150
				, events : [
					{
						change : create_fancy_grid_siteList.search
					}
				]
			}

			, { type : "search", emptyText : "Search", paramsMenu : true }
		]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;
		, selModel: { type: 'row' }
		, trackOver: true
		, columns : [
			  { index : "HOST" , title : "HostKey"   , type : "string", width : 60, hidden : true }
			, { index : "DB" , title : "DbName"   , type : "string", width : 200 }
			, { index : "COL"  , title : "ColName"   , type : "string", width : 200 }
			, { index : "count" , title : "Count"  , type : "text", flex : 1 }
			, { index : "size"  , title : "Size"   , type : "text", flex : 1 }
			// , { index : "count_brand" , title : "Brand Count"  , type : "text", flex : 1 }
			// , { index : "count_shop"  , title : "Shop Count"   , type : "text", flex : 1 }
			, { type : "action", title : "Chart&Grid", width: 90, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
			, { type : "action", title : "Full Chart", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]
		, events : [
			{
				cellclick : function( g, o ){
					if( o.column.type != "action" ) return;

					var tData0 = g.get( o.rowIndex );
					if( !tData0 ) return;

					window.SYS0037_UI_API.spinner.show();
					setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;
						var t0 = tData0.data;

						if( o.columnIndex == 6 )
						{
							if( _CTRLS.window0 == null )
							{
								window._dhx$Windows = initialize__dhtmlxWindows();

								_CTRLS.window0 = _createWindow();
								_CTRLS.window0.setDimension( window.innerWidth, window.innerHeight );
								_CTRLS.window0.setPosition( 0, 0 );
								_CTRLS.window0.setText( t0.DB + "." + t0.COL );

								//확인하기 - 20190303_1653 - 최석준 - _CTRLS.chart1에 API가 없을까요?;
								_ELS.CHART1.style.width = window.innerWidth - 30 + "px";
								_ELS.CHART1.style.height = window.innerHeight - 67 + "px";

								_CTRLS.window0.appendObject( _ELS.CHART1 );
							}

							_CTRLS.chart1 = renderChart( _ELS.CHART1, t0.DB, t0.COL, function(){ window.SYS0037_UI_API.spinner.hide(); });

							//차트선택시 그리드 데이터검색 이벤트;
							_CTRLS.chart1.on('dblclick',function (params) {

								var reqUrl = _URLS.URL4.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
									.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
									.replace( "<!=NM_DB=!>", t0.DB )
									.replace( "<!=NM_COL=!>", t0.COL )
									.replace( "<!=ID_BRAND=!>", params.data.brand_id )

								var html = window.b2link.xhr.reqSync_String( "./ui_popup/ECharts/4.2.0.rc2/pie-0.html" );
									html = html.replace( "<!=DATA=!>", reqUrl );

								var func = window.b2link.util.importJS( "./ui_popup/ECharts/4.2.0.rc2/pie-0.js" );
								//var func = window.b2link.util.importJS__Reuse( "./ui_popup/ECharts/4.2.0.rc2/pie-0.js" );



								//동일한팝업을 요청시 기존의 팝업을  focus 처리한다.;
								/*/

								var popupW = window.screen.availWidth / 4;
								var popupH = window.screen.availHeight / 2;
								var popupPos = [
									[ 0 , 0 ],
									[ popupW * 1 , 0 ],
									[ popupW * 2 , 0 ],
									[ popupW * 3 , 0 ],
									[ 0 , popupH ],
									[ popupW * 1 , popupH ],
									[ popupW * 2, popupH ],
									[ popupW * 3, popupH ],
								];

								if( !window.b2link.open._map[ params.data.brand_id ] )
								{
									window.b2link.open.newWindow__CompactPopup__HTML_JS( "temp.html", params.data.brand_id , { w:popupW, h:popupH, l:popupPos[ _POPUP_COUNT_ ][ 0 ], t:popupPos[ _POPUP_COUNT_ ][ 1 ] }, html, func );
									if( _POPUP_COUNT_ == 7 ) return _POPUP_COUNT_ = 0;
									return ++_POPUP_COUNT_;
								}
								else window.b2link.open._map[ params.data.brand_id ].focus();
								/*/
								var datas = {
									chartData : params
									, reqInfo :{
										NM_PATH : window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ]
										, CODE_DB : window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ]
										, NM_DB : t0.DB
										, NM_COL : t0.COL
										, ID_BRAND : params.data.brand_id
									}
								}

								var popupId = window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] + "-" + t0.DB + "-" + t0.COL;
								var popupW = window.screen.availWidth / 2;
								var popupH = window.screen.availHeight;

								if( !window.b2link.open._map[ popupId ] )
								{
									window.b2link.open.newWindow( "./ui_popup/ECharts/4.2.0.rc2/popup-55.html", popupId , "height=" + popupH + ", width=" + popupW + ", centerscreen=1" );

									var t = window.b2link.open._map[ popupId ];

										t.addEventListener('load', function(e) {
											console.log('popup load finished');
											t.CTRLS = {}
											t.addChart( datas, reqUrl );

											self.focus();
										});

//										t.addEventListener('blur', function(e) {
//											t.focus();
//										});

										//팡법클로즈이벤트 캣치;
										t.addEventListener('beforeunload', function(e){
											delete window.b2link.open._map[ popupId ];
											delete t.CTRLS[ params.data.brand_id ];
										});

										_ELS.CHART1.style.width = ( window.innerWidth / 2 ) - 30 + "px";
										_ELS.CHART1.style.height = window.innerHeight - 67 + "px";

										_CTRLS.window0.setDimension( window.innerWidth / 2, window.innerHeight );
										_CTRLS.window0.setPosition( window.innerWidth / 2, 0 );
										_CTRLS.chart1.resize();
								}
								else
								{
									var t = window.b2link.open._map[ popupId ];

									//debugger;
									if( !t.CTRLS[ params.data.brand_id ] )
									{
										//debugger;
										t.addChart( datas, reqUrl );
									}
									t.focus();
									debugger;
									t.ELS.CHART_LIST[ "DIV_" + params.data.brand_id ].parentElement.scrollIntoView({ behavior: 'smooth' });

//									var s,so;
//									for( s in t.ELS ){
//										so = t.ELS[ s ];
//										if( s.indexOf( "DIV_") != -1 )
//										{
//											if( s == "DIV_" + params.data.brand_id ) so.parentElement.style[ "background-color" ] = params.color;
//											else so.parentElement.style[ "background-color" ] = "#fff";
//										}
//									}
								}
								//*/
								return;
							});

							_CTRLS.window0.attachEvent( "onResizeFinish", reset_window_ui_chart );
							_CTRLS.window0.attachEvent( "onMaximize", reset_window_ui_chart );
							_CTRLS.window0.attachEvent( "onClose", function(){
								_CTRLS.window0.detachAllEvents();
								window.dhx$Windows.close( _CTRLS.window0 );
								_CTRLS.window0 = null;
							});

							return;
						}

						if( o.columnIndex == 5 )
						{
							while( _ELS.DIV_FANCYGRID_1.firstChild ) _ELS.DIV_FANCYGRID_1.removeChild( _ELS.DIV_FANCYGRID_1.firstChild );

							var data = JSON.parse( window.b2link.xhr.reqSync_String(
								_URLS.URL1.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
									.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
									.replace( "<!=NM_DB=!>", t0.DB )
									.replace( "<!=NM_COL=!>", t0.COL )
							));

							if( window.b2link.response.getResultStatus( data ) )
							{
								//;
								create_fancygrid_COLList( data.d, t0 );
								_CTRLS.chart0 = renderChart( _ELS.CHART0, t0.DB, t0.COL, function(){ window.SYS0037_UI_API.spinner.hide(); });

							}
							else
							{
								//결과가 없음;
							}
						}
					}, _N_SET_TIMEOUT_ );
				}
			}
		]
	});

	_CTRLS.fancyfrid_0_tbar = {
		SITE : _CTRLS.fancygrid_0.tbar[ 0 ]
		, DB : _CTRLS.fancygrid_0.tbar[ 1 ]
	};

	reset_layout();

}

/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
create_fancy_grid_siteList.search = function( evt, value ){

	if( _CTRLS.fancyfrid_0_tbar.SITE.value == 0 ) return;
	if( _CTRLS.fancyfrid_0_tbar.DB.value == 0 ) return;

	var _t0 = _CTRLS.fancyfrid_0_tbar.SITE;
	var _t1 = _CTRLS.fancyfrid_0_tbar.DB;

	_TARGET_DB_ = _t1.data[ _t1.valueIndex ].DB;
	_TARGET_SITE_NAME_ = _t0.data[ _t0.valueIndex ].SITE;

	window.SYS0037_UI_API.spinner.show();
	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var data = JSON.parse( window.b2link.xhr.reqSync_String( _URLS.URL0.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
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

			_CTRLS.fancygrid_0.setData( colList );
			_CTRLS.fancygrid_0.update();

			//화면 레이아웃 재배치;
			reset_layout();

			window.SYS0037_UI_API.spinner.hide();
		}
		else
		{
			//결과가 없음;
		}
	}, _N_SET_TIMEOUT_ );
}




/**
 * @funnction
 * @param {Object} evt
 * @param {String} value
 */
create_fancy_grid_siteList.getDbList = function( evt, value ){

	//if( _CTRLS.fancyfrid_0_tbar.targetYear.value == 0 ) return;

	if( _CTRLS.fancyfrid_0_tbar.SITE.value == 0 ) return;


	// var _t0 = _CTRLS.fancyfrid_0_tbar.targetYear;
	var _t1 = _CTRLS.fancyfrid_0_tbar.SITE;

	// _TARGET_YEAR_ = _t0.data[ _t0.valueIndex ].targetYear;
	_TARGET_SITE_NAME_ = _t1.data[ _t1.valueIndex ].SITE;

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		//var data = JSON.parse( window.b2link.xhr.reqSync_String( _URLS.URL3.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] ) ) );

		//if( window.b2link.response.getResultStatus( data ) )
		//{

			var DbList = [];
			DbList.push( { index : 0, DB : "Database" } )

			var io;
			var i=0, iLen= window.SYS0037_UI_API.fancygrid.CONST.DB_LIST_BY_SITE[ _TARGET_SITE_NAME_ ].dbList[ _MENU_NAME_ ].length;
			for( ; i<iLen; ++i )
			{
				io = window.SYS0037_UI_API.fancygrid.CONST.DB_LIST_BY_SITE[ _TARGET_SITE_NAME_ ].dbList[ _MENU_NAME_ ][ i ];
				DbList.push( { index : i + 1, DB : io } )
			}

			_CTRLS.fancyfrid_0_tbar.DB.setData( DbList );
			_CTRLS.fancyfrid_0_tbar.DB.setValue( 0 );

			//화면 레이아웃 재배치;
			reset_layout();

			window.SYS0037_UI_API.spinner.hide();
		//}
		//else
		//{
			//결과가 없음;
		//}
	}, _N_SET_TIMEOUT_ );
};

/**
 * @function
 * @param {Array} listArray
 * @param {Object} data
 */
var create_fancygrid_COLList = function( listArray, data )
{
	var _WIDTH_ = _ELS.DIV_FANCYGRID.offsetWidth - 830
	var _WIDTH_00 = ( _ELS.DIV_FANCYGRID.offsetWidth - 830 - 670 ) / 2 ;

	console.log( _WIDTH_00 )
	var _HEIGHT_ = _ELS.DIV_ID_CONTAINER.offsetHeight - 800 - 22

	_CTRLS.fancygrid_1 = new FancyGrid({ renderTo : "div-fancygrid-1"
		, title : data.DB + " - " + data.COL + " - BRAND LIST"

		, width : _WIDTH_, height : _HEIGHT_

		, theme : { name : "bootstrap"
			, config : {
				cellHeaderHeight : 30
				, cellHeight : 32
				, titleHeight : 42
				, barHeight : 37
				, bottomScrollHeight : 12
			}
		}

		, data : listArray

		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true }
		, paging : { pageSize : 50, pageSizeData : [ 50, 100, 150, 200 ] }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "name"      , type : "string", width : 250, title : "name" }
			, { index : "brand_id"  , type : "string", width : 250, title : "brand_id" }
			, { index : "value"     , type : "number", width : 80 , title : "Sell Count" }
			, { index : "sellAmount", type : "number", width : 90 , title : "Shop Amount" }
			, { index : "value", type : "progressbar", width : _WIDTH_00 , title : "Sell Count"
				, sortable : true
				, cls : "progress"
				, sparkConfig : {
					tipTpl : "{value}"
					, align: 'right'
					, percents: false
					//, stacked : true
					//, tipFormat : function( o ){ return o.value  }
					, label: true

				}
			}
			, { index : "sellAmount", type : "progressbar", width : _WIDTH_00, title : "Sell Amount"
				, sortable : true
				, sparkConfig : {
					tipTpl : "{value}"
					, percents: false
					//, stacked : true
					, title : "sellAmount"
					//, legend : { type : "tbar", style : {} }
					//, tipFormat : function( o ){ return o.value; }
					, label: {
						type: 'right'
					}

				}
			}
		]
		//, controllers : [ "DBExport_colList_ctrl" ]
		, events : []
	});

	//화면 레이아웃 재배치;
	reset_layout();

	/*/
	var el = window.b2link.element.getElementByClassName( window.document, "id-TEMPLATE-list" );
	window.b2link.html_div.apply_child( el, listArray );
	//*/
};

/**
 *
 * @function
 * @param {Object} param0
 * <code>
	{
	}
 * </code>
 * @param {String} nm_db
 * @param {String} nm_col
 * @param {Function} cbFunction function(){}
 */
var renderChart = function( param0, nm_db, nm_col, cbFunction )
{
	window.SYS0037_UI_API.spinner.show();

	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( param0 );
		myChart.showLoading( loadSetting );

	var url = _URLS.URL1.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
		.replace( "<!=NM_DB=!>"  , nm_db )
		.replace( "<!=NM_COL=!>" , nm_col );

	SUtilXMLHttpReqGet.req_String( url, function( result ){
		var data;
		try{ data = JSON.parse( result ); } catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); return; }

		var colors = [];
		var i = 0, iLen = data.d.length,io;
		for(;i<iLen;++i){
			io = data.d[ i ].name;
			colors.push( "#" + renderChart.numToHex( io ) )
		};

		var option = {
			tooltip : {
				position: {top: 10,left : 10}
				, triggerOn : "click"
				, formatter : function( info ){
					var value = info.value;
					var treePathInfo = info.treePathInfo;
					var treePath = [];

					for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

					var t0 = info.data;

					return renderChart._ECHARTS_TOOLTIP_TEMPLATE_
						.replace( "<!=NM_BRAND=!>"      , window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
						.replace( "<!=ID_BRAND=!>"      , t0.brand_id )
						.replace( "<!=COUNT_PRODUCT=!>", t0.value )
						.replace( "<!=COUNT_SHOP=!>"  , t0.sellAmount )
						.replace( "<!=RATIO_SC=!>"  , t0.ratioSC )
						.replace( "<!=RATIO_SA=!>"  , t0.ratioSA );
				}
			}

			, toolbox : {
				feature : {
					dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "treemap" ] }
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, color : colors
			, "colorMappingBy": "value"
			, series : [
				{ type : "treemap", name : "brand"
					, levels : [
						  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
						, { itemStyle : { normal : { gapWidth : 0 } } }
						, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
					]

					, width : "100%", height : "100%"

					, data : data.d

					, label : {
						normal : {
							position : "inside"
							, formatter : function( params ){
								return "{name|"                   + params.data.name + "}" + " {value|"       + params.data.brand_id + "}"
									+ "\n{hr|}"

									+ "\n{label|Sell Count} {value|" + params.data.value + "}"
									+ "\n{label|Sell Amout} {value|CNY "    + params.data.sellAmount + "}"
									+ "\n{label|Ratio sell Count} {value|"    + params.data.ratioSC + "%}"
									+ "\n{label|Ratio sell Amount} {value|"    + params.data.ratioSA + "%}";
							}
							, rich : {
								hr : { width : "100%", borderColor : "rgba(255,255,255,0.2)", borderWidth : 0.5, height : 0, lineHeight : 10 }
								, name : { fontSize : 22, color : "#fff",padding: [10, 10], textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4 }
								, value : { fontSize : 17, color : "#fff" ,align: 'left', padding: [2, 4] ,lineHeight: 30, textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4}
								, label : { fontSize: 12,color: '#fff',padding: [2, 4],lineHeight: 30, textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4}
							}
						}
					}
				}
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );
		}

		window.SYS0037_UI_API.spinner.hide();

	});

	//설명 달기 - 20190303_1739 - 최석준;
	cbFunction();

	return myChart;
};
renderChart._ECHARTS_TOOLTIP_TEMPLATE_ = '<div class="tooltip-title">Brand Name : <b><!=NM_BRAND=!></b></div>'
	+ "\nBrand id : "      + "<!=ID_BRAND=!>"      + "</br>"
	+ "\nSell Count : " + "<!=COUNT_PRODUCT=!>" + "</br>"
	+ "\nSell Amount : CNY " + "<!=COUNT_SHOP=!>" + "</br>"
	+ "\nRatio Sell Count : "  + "<!=RATIO_SC=!> %" + "</br>"
	+ "\nRatio Sell Amount : " + "<!=RATIO_SA=!> %";

renderChart.getRandomColor = function(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[ Math.floor( Math.random() * 16 ) ];
	}
	return color;
};

renderChart.numToHex = function( str ){
	// var n = ( renderChart.numToHex.ORIGIN_COLOR + parseInt( code ) ).toString( 16 );
	// var _tmp0 = parseInt( n.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));
	// var _tmp1;
	// if( renderChart.numToHex.MAX_HEX_NUM < _tmp0 ){
	// 	_tmp1 = _tmp0 - renderChart.numToHex.MAX_HEX_NUM;
	// 	return parseInt( _tmp1.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));
	// }

	// return parseInt( n.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));

	//	var r = (i & 0xFF).toString(16);
	//	var g = ((i >> 8) & 0xFF).toString(16);
	//	var b = ((i >> 16) & 0xFF).toString(16);
	//
	//	r = ('0' + r).slice(-2);
	//	g = ('0' + g).slice(-2);
	//	b = ('0' + b).slice(-2);
	//
	//	return r + g + b;

	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	//var colour = '#';
	var colour = '';
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 0xFF;
		colour += ('00' + value.toString(16)).substr(-2);
	}

	return colour;

};

renderChart.numToHex.ORIGIN_COLOR = parseInt( 'FF0000', 16 );
renderChart.numToHex.MAX_HEX_NUM = parseInt( "FFFFFF", 16 );
renderChart.numToHex.MAX_HEX_NUM_LEN = renderChart.numToHex.MAX_HEX_NUM.toString().length;

/**
 *
 * @function
 * @param {???} win
 */
var reset_window_ui_chart = function( win )
{
	var dimention = win.getDimension();
	debugger;
	//확인하기 - 20190303_1653 - 최석준 - _CTRLS.chart1에 API가 없을까요?;
	_ELS.CHART1.style.width  = dimention[ 0 ] - 30 + "px";
	_ELS.CHART1.style.height = dimention[ 1 ] - 67 + "px";

	_CTRLS.chart1.resize();
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
		_HEIGHT1_ = tEL3.offsetHeight - tEL0.offsetHeight - 20 - 22;
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

//EVENT - Fancygrid 좌우 화살표 키보드로 이전/다음 페이지 이동하기;
_ELS.DIV_FANCYGRID_1.removeEventListener( "keyup", evt_kUp__FancygridMovePage );
_ELS.DIV_FANCYGRID_1.addEventListener( "keyup", evt_kUp__FancygridMovePage );

//EVENT - ESC 키로 DHTMLX Window 종료하기;
window.document.removeEventListener( "keyup", evt_kUp__dhxWindowClose, false );
window.document.addEventListener( "keyup", evt_kUp__dhxWindowClose, false, 0, true );

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
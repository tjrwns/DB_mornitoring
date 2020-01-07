//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/productInfoViewThumb.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/FancyGrid/import-js.js" );
window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {

	CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_FANCYGRID : F0( window.document, "id-fancygrid" )
	, DIV_FANCYGRID_0 : window.document.getElementById( 'div-fancygrid-0' )
	, DIV_FANCYGRID_LIST : window.document.getElementById( 'div-fancygrid-List' )

	, DIV_ID_CONTAINER : window.document.getElementById( 'id-container' )

	, HEADER_TOP : F0( window.document, "id-header-top" )
	, DIV_PRODUCT_INFO_MODAL : F0( window.document, "div-Product-Info" )
};

var _THTMLS = {
	PRODUCT_INFO_MODAL_TEMPLATE : window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfoViewTHumb-modal.html" )
	, PRODUCT_INFO_LIST_COL : '<div style="text-align : center;">'
			+ "{{sellCountArea}}"
			+ '<div><img src="<!=goodsImg=!>" width="100%"></div>'
			+ '<div style="padding: 10px;white-space: normal;width: 100%;height:50px;"><!=goodsName=!></div>'
			+ '</div>'
	, SELL_COUNT_DIV : '<div style="background-color: <!=BACKGROUND_COLOR=!>;width: 100%;height: 30px;color: <!=COLOR=!>;font-weight: bold;font-size: medium;line-height: 30px;"><!=sellCount=!></div>'
};
//--------------------------------------------------;
var _URLS = {};

	//
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getCollectionListByHost__info?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>";

	//
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/상품상세정보가져오기썸네일?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

	//;
	_URLS.URL2 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/타일테스트?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&limit=<!=LIMIT=!>&skip=<!=SKIP=!>";

	//;
	_URLS.URL3 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getDbListByHost?code_db=<!=CODE_DB=!>";
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

/**
 * Echarts Controller List
 * @property {Array}
 */
var _LIST_ECHARTS_ = [];

/**
 * 로딩중 모달 화면 컨트롤러
 * @property {Object}
 */
var _LOADER_SPINNER_;

/**
 * JD, KAOLA, TAOBAO, VIP, ...
 * @property {String}
 */
var _TARGET_SITE_NAME_;
var _TARGET_YEAR_;

var _N_SET_TIMEOUT_ = 100;

var CONTAINER_HEIGHT;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {

	fancygrid_0 : null
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
		var grid = FancyGrid.get( "div-fancygrid-List" );
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

//----------------------------------------------------------------------------------------------------;

window.GIS = window.GIS || {};

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show();

	//컬렉션리스트 조회;
	create_fancy_grid_siteList();

	//화면 레이아웃 재배치;
	reset_layout();

	window.SYS0037_UI_API.spinner.hide();
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
			, { type : "action", title : "Full List", flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]
		, events : [
			{
				cellclick : function( g, o ){
					if( o.column.type != "action" ) return;

					var tData0 = g.get( o.rowIndex );
					if( !tData0 ) return;

					window.SYS0037_UI_API.spinner.show();

					var t0 = tData0.data;

					setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

						if( o.columnIndex != 5 ) return;

						if( _CTRLS.window0 == null )
						{
							window._dhx$Windows = initialize__dhtmlxWindows();

							_CTRLS.window0 = _createWindow();
							_CTRLS.window0.setDimension( window.innerWidth, window.innerHeight );
							_CTRLS.window0.setPosition( 0, 0 )
							_CTRLS.window0.setText( t0.DB + "." + t0.COL );

							_ELS.DIV_FANCYGRID_LIST.style.width = window.innerWidth - 30 + "px";
							_ELS.DIV_FANCYGRID_LIST.style.height = window.innerHeight - 67 + "px";

							var ID__MAP = "ttw-leaflet-map";
							var MAP_EL = window.document.getElementById( ID__MAP );

							_CTRLS.window0.appendObject( MAP_EL );
						}

						var nm_db = t0.DB;
						if( _TARGET_SITE_NAME_ == "TAOBAO-LIST") nm_db = "Taobao_2019-상세-수집"
						var data = JSON.parse( window.b2link.xhr.reqSync_String(
							_URLS.URL1.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
								.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
								.replace( "<!=NM_DB=!>", nm_db )
								.replace( "<!=NM_COL=!>", t0.COL )
						));

						//_CTRLS.window0.attachEvent( "onResizeFinish", reset_window_ui_chart );
						//_CTRLS.window0.attachEvent( "onMaximize", reset_window_ui_chart );

						_CTRLS.window0.attachEvent( "onClose", function(){
							_CTRLS.window0.detachAllEvents();
							window.dhx$Windows.close( _CTRLS.window0 );
							_CTRLS.window0 = null;
						});

						while( _ELS.DIV_FANCYGRID_LIST.firstChild ) _ELS.DIV_FANCYGRID_LIST.removeChild( _ELS.DIV_FANCYGRID_LIST.firstChild );

						create_fancygrid_COLList( data.d, t0 );

						window.SYS0037_UI_API.spinner.hide();

						return;

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

		var data = JSON.parse( window.b2link.xhr.reqSync_String( _URLS.URL3.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] ) ) );

		if( window.b2link.response.getResultStatus( data ) )
		{

			var DbList = [];
			DbList.push( { index : 0, DB : "Database" } )

			var io;
			var i=0, iLen=data.d.length;
			for( ; i<iLen; ++i )
			{
				io = data.d[ i ];
				DbList.push( { index : i + 1, DB : io.nm_db } )
			}

			_CTRLS.fancyfrid_0_tbar.DB.setData( DbList );
			_CTRLS.fancyfrid_0_tbar.DB.setValue( 0 );

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

var getColorCodeBySellCount = function( sellCount ){
	var t = getColorCodeBySellCount.MAPPING_TABLE;
		 if( t[ 0 ].n > sellCount ) return t[ 0 ].c;
	else if( t[ 1 ].n > sellCount ) return t[ 1 ].c;
	else if( t[ 2 ].n > sellCount ) return t[ 2 ].c;
	else if( t[ 3 ].n > sellCount ) return t[ 3 ].c;
	else if( t[ 4 ].n > sellCount ) return t[ 4 ].c;
	else if( t[ 5 ].n > sellCount ) return t[ 5 ].c;
	else if( t[ 6 ].n > sellCount ) return t[ 6 ].c;
	else if( t[ 7 ].n > sellCount ) return t[ 7 ].c;
	else if( t[ 8 ].n > sellCount ) return t[ 8 ].c;
	else if( t[ 9 ].n > sellCount ) return t[ 9 ].c;
	return "#d14a61";

};
getColorCodeBySellCount.MAPPING_TABLE = [
	{ c : "#E50065", n : 100 }
	, { c : "#D70674", n : 200 }
	, { c : "#C90D83", n : 300 }
	, { c : "#BB1393", n : 400 }
	, { c : "#AD1AA2", n : 500 }
	, { c : "#9F21B2", n : 600 }
	, { c : "#9127C1", n : 700 }
	, { c : "#832ED0", n : 800 }
	, { c : "#7534E0", n : 900 }
	, { c : "#673BEF", n : 1000 }
	//{ c : "#5942FF", n : 100 }
];


/**
 * @funnction
 * @param {Array} listArray
 * @param {Object} data
 */
var create_fancygrid_COLList = function( listArray, data )
{

	try
	{
		var ID__MAP = "ttw-leaflet-map";
		var MAP_EL = window.document.getElementById( ID__MAP );

		var MAP = window.ttw.gis.create_Map({ id : ID__MAP, continuousWorld : true, worldCopyJump : false, zoomControl : true, inertia : false
			, center : { lat : 38, lng : 127 }, zoom : 8
		});

		var MAP_CONTROLS = {};
			MAP_CONTROLS.attribution = window.ttw.gis.addControl_Attribution({ map : MAP, position : "bottomright", prefix : "B2Labs" });
			MAP_CONTROLS.scaleLine = window.ttw.gis.addControl_ScaleLine({ map : MAP, position : "bottomleft", maxWidth : 100, metric : true, imperial : true, updateWhenIdle : false });
			MAP_CONTROLS.zoom = window.ttw.gis.addControl_Zoom({ map : MAP, position : "topleft", zoomInText : "+", zoomOutText : "-", zoomInTitle : "Zoom in", zoomOutTitle : "Zoom out" });

		//*/
		window.ttw.gis.initialize_GeometryEditor({ k : "FeatureGroup_Editor", map : MAP
			, control : {
				position : "topright"
				//position : "topleft"
				, draw : { polyline : true, polygon : true, circle : true, marker : true }
				, edit : { remove : true }
				, event : { draw_created : null, draw_edited : null }
			}
		});
		//*/

		var MAP_LAYER__CartoDB_DarkMatter = window.ttw.gisPack.tileLayer( "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
			, { subdomains : "abcd", maxZoom : 19
				//, attribution : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}
		);

		window.ttw.gis.addLayer_Dictionary( MAP, MAP_LAYER__CartoDB_DarkMatter, MAP.DIC_LAYERS, "BASE_MAP" );

		var maps = {
			map : MAP, map_el : MAP_EL, controls : MAP_CONTROLS, layers : MAP.DIC_LAYERS
			, redrawAllLayers : function(){ for( var s in MAP.DIC_LAYERS ){ MAP.DIC_LAYERS[ s ].redraw(); } }
		};

		//STATIC REFERENCE;
		window.GIS.MAP_BASIC = maps;

		//지도 기본 위치;
		//MAP.setView( [ 37.510372649468756, 126.92659378051759 ], 12 );
		MAP.setView( [ 180, 90 ], 11 );

		/*/
		window.GIS.MAP_BASIC.map.addEventListener("zoomlevelschange",function(e){ console.log("zoomlevelschange");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("resize",function(e){ console.log("resize");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("unload",function(e){ console.log("unload");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("viewreset",function(e){ console.log("viewreset");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("load",function(e){ console.log("load");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("zoomstart",function(e){ console.log("zoomstart");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("movestart",function(e){ console.log("movestart");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("zoom",function(e){ console.log("zoom");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("move",function(e){ console.log("move");debugger; })
		window.GIS.MAP_BASIC.map.addEventListener("zoomend",function(e){ console.log("zoomend");debugger; })
		//*/


		var evt_moveend = function( e ){
			if( !window.GIS.MAP_BASIC.layers.BASE_MAP.isLoading() )
			{
				setTimeout( evt_moveend, 100 );
				return;
			}

//			var tileCnt = create_fancygrid_COLList.option.limit = 121;//window.GIS.MAP_BASIC.layers.BASE_MAP._tiles["405:188:9"].el.parentElement.children.length;
			var tileSize = 1;
			for( s in window.GIS.MAP_BASIC.layers.BASE_MAP._tiles ){
				tileSize = tileSize + i;
			}

			create_fancygrid_COLList.option.limit = tileSize
			//_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/타일테스트?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";
			var data = JSON.parse( window.b2link.xhr.reqSync_String( _URLS.URL2.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ "TAOBAO-DAILY" ] )
				.replace( "<!=NM_DB=!>", "Taobao_2019")
				.replace( "<!=NM_COL=!>", "20190101")
				.replace( "<!=NM_PATH=!>", "taobao" )
				.replace( "<!=LIMIT=!>", create_fancygrid_COLList.option.limit )
				.replace( "<!=SKIP=!>", create_fancygrid_COLList.option.skip ) ) );

			if( window.b2link.response.getResultStatus( data ) )
			{
				var s,so,i = 0
				for( s in window.GIS.MAP_BASIC.layers.BASE_MAP._tiles ){
					console.log( s );
					so = window.GIS.MAP_BASIC.layers.BASE_MAP._tiles[ s ].el;
					so.src = data.d[ i ];
					++i;
				}
				console.log( i );
			}

			create_fancygrid_COLList.option.skip = create_fancygrid_COLList.option.skip + i;
			create_fancygrid_COLList.option.limit = i;

			console.log( "SKIP : " + create_fancygrid_COLList.option.skip )
			console.log( "LIMIT : " + create_fancygrid_COLList.option.limit )
		};
		evt_moveend._TIMEOUT_ID = -1;
		window.GIS.MAP_BASIC.map.addEventListener("moveend", function(e){
			window.clearTimeout( evt_moveend._TIMEOUT_ID );
			evt_moveend._TIMEOUT_ID = setTimeout( evt_moveend, 800 );
		});
	}
	catch( e )
	{
		window.TtwLog.log( "[ ERROR ] - initialize - " + e );
		return;
	}


	//화면 레이아웃 재배치;
	reset_layout();

	/*/
	var el = window.b2link.element.getElementByClassName( window.document, "id-TEMPLATE-list" );
	window.b2link.html_div.apply_child( el, listArray );
	//*/
};

create_fancygrid_COLList.option = {
	skip : 0
	, limit : 121
}

//데이터리로드 구현해야함;
var dataReload = function(){
	window.b2link.element.removeAllChildren( _ELS.DIV_FANCYGRID_0 );
	window.b2link.element.removeAllChildren( _ELS.CHART0 );
	//_CTRLS.fancygrid_0.clearData();
	create_fancy_grid_siteList();
}

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _MIN_WIDTH_ = 1270;

	//----------Target HTMLElement;
	var tEL0 = _ELS.DIV_FANCYGRID;
//	var tEL1 = _ELS.DIV_FANCYGRID_RIGHT;
	var tEL2 = _ELS.DIV_ID_CONTAINER;
	//----------Target HTMLElement;

	var _HEIGHT0_;
	var _HEIGHT1_;

	var _WIDTH0_ = tEL0.offsetWidth - 10;
	var _WIDTH1_ = tEL0.offsetWidth - 10;

//	tEL1.style.width = _ELS.CHART0.style.width = ( _WIDTH1_ - 10 ) + "px";

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;
	tEL2.style.height = _HEIGHT_ + "px";
	tEL2.scrollTop = 0;

	if( window.innerWidth < _MIN_WIDTH_ )
	{
		tEL0.style.display = "table-caption";

		_WIDTH0_ = _WIDTH1_ = tEL2.offsetWidth - 34;

		_HEIGHT0_ = tEL2.offsetHeight - 22;
		_HEIGHT1_ = tEL2.offsetHeight - 22;
	}
	else
	{
		tEL0.style.display = "block";

		_WIDTH0_ = tEL0.offsetWidth - 10;
		_WIDTH1_ = tEL0.offsetWidth - 10;

		_HEIGHT0_ = tEL2.offsetHeight - 22;
		_HEIGHT1_ = tEL2.offsetHeight - 22;
	};

	if( _CTRLS.fancygrid_0 )
	{
		_CTRLS.fancygrid_0.setWidth( _WIDTH0_ );
		_CTRLS.fancygrid_0.setHeight( _HEIGHT0_ );
	}

//	if( _CTRLS.fancygrid_1 )
//	{
//		_CTRLS.fancygrid_1.setWidth( _CTRLS.fancygrid_1.getWidth() - 5 );
//		_CTRLS.fancygrid_1.setHeight( _CTRLS.fancygrid_1.getHeight() );
//	}

	if( _CTRLS.window0 )
	{
		_CTRLS.window0.setDimension( window.innerWidth, window.innerHeight );
		_CTRLS.window0.setPosition( 0, 0 );
	}
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


//EVENT - Fancygrid 좌우 화살표 키보드로 이전/다음 페이지 이동하기;
_ELS.DIV_FANCYGRID_LIST.removeEventListener( "keyup", evt_kUp__FancygridMovePage );
_ELS.DIV_FANCYGRID_LIST.addEventListener( "keyup", evt_kUp__FancygridMovePage );

//EVENT - ESC 키로 DHTMLX Window 종료하기;
window.document.removeEventListener( "keyup", evt_kUp__dhxWindowClose, false );
window.document.addEventListener( "keyup", evt_kUp__dhxWindowClose, false, 0, true );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	RETURN;

//----------------------------------------------------------------------------------------------------;


(function(){

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

			_초기화면렌더링();
		};
		_.reload = dataReload;
		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

	return _;

})();
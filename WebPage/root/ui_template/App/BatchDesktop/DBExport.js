//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/DBExport.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/FancyGrid/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {
	  CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_FANCYGRID : F0( window.document, "id-fancygrid" )
	, DIV_FANCYGRID_0 : window.document.getElementById( "div-fancygrid-0" )
	, DIV_FANCYGRID_1 : window.document.getElementById( "div-fancygrid-1" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//--------------------------------------------------;
var _URLS = {};

	//;
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getDbListByHost?code_db=<!=CODE_DB=!>";

	//;
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getCollectionListByHost?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>";

	//;
	_URLS.URL2 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getCollectionInfo?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

	//;
	_URLS.URL3 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/dbExport?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&out=<!=PATH_FILE_EXPORT=!>";
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

/**
 * 로딩중 모달 화면 컨트롤러
 * @property {Object}
 */
var _LOADER_SPINNER_;

/**
 * 몽고 디비 접속을 위한 정보와 매핑되는 키값 목록
 * @property {Array}
 * <code>
	[
		  { index : 0, host : "KAOLA" }
		, { index : 1, host : "VIP" }
		, { index : 2, host : "TAOBAO-DAILY" }
		, ...
	]
 * </code>
 */
var _MONGODB_INFO_KEY_LIST_=[{ index : 0, site : "SITE" }];

var CONTAINER_HEIGHT;

var CODE_DB;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	/**
	 * @property {FancyGrid}
	 */
	  fancygrid_0 : null
	, fancyfrid_0_tbar : null
	/**
	 * @property {FancyGrid}
	 */
	, fancygrid_1 : null

	/**
	 * @property {FancyForm}
	 */
	, fancyform_0 : null
};

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show();

	var _to;
	var s,so;
	var i = 1;
	for( s in window.SYS0037_UI_API.CONST.CONNECTION_INFO )
	{
		_to = { index : i, site : s };
		_MONGODB_INFO_KEY_LIST_.push( _to );
		++i;
	}

	_CTRLS.fancygrid_0 = new FancyGrid({ renderTo : "div-fancygrid-0", title : "DB Server List"
		, width : 500, height : _ELS.DIV_ID_CONTAINER.offsetHeight

		, theme : { name : "bootstrap"
			, config : {
				cellHeaderHeight : 30
				, cellHeight : 32
				, titleHeight : 42
				, barHeight : 37
				, bottomScrollHeight : 12
			}
		}
		, selModel: { type: 'row' }
		, trackOver: true
		, data : []

		, defaults : { type : "string", sortable : true, resizable: true }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [
			{ type : "combo", width : 150, data : _MONGODB_INFO_KEY_LIST_, displayKey : "site", valueKey : "index", value : 0
				, events : [
					{
						change : function(){
							if( _CTRLS.fancyfrid_0_tbar.SITE.value == "0" ) return;

							var _t0 = _CTRLS.fancyfrid_0_tbar.SITE;

							_TARGET_SITE_NAME_ = _t0.data[ _t0.valueIndex ].site;

							var fancygrid = FancyGrid.get( "div-fancygrid-0" );

							CODE_DB = _TARGET_SITE_NAME_;

							window.SYS0037_UI_API.spinner.show();

							var data;
							try{ data = JSON.parse( window.b2link.xhr.reqSync_String( _URLS.URL0 .replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ CODE_DB ] ) ) ); }catch( er ){ window.TtwLog.error( "[ ERROR ] : " + er ); }

							if( window.b2link.response.getResultStatus( data ) )
							{
								var dbList = [];

								var io;
								var i=0, iLen=data.d.length;
								for( ; i<iLen; ++i )
								{
									io = data.d[ i ];

									dbList.push({ HOST : window.SYS0037_UI_API.CONST.CONNECTION_INFO[ CODE_DB ], COUNT_COLS : io.count_cols, NM_DB : io.nm_db });
								}

								_CTRLS.fancygrid_0.setData( dbList );
								_CTRLS.fancygrid_0.update();

								//화면 레이아웃 재배치;
								reset_layout();

								window.SYS0037_UI_API.spinner.hide();
							}
							else
							{
								//결과가 없음;
							}
						}
					}
				]
			}
			, { type : "search", emptyText : "Search", paramsMenu : true }
		]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "HOST"      , title : "HostKey"  , width : 60 }
			, { index : "NM_DB"     , title : "DB Name"   , width : 150 }
			, { index : "COUNT_COLS", title : "COLs Count", width : 80 }
			, { type  : "action"    , title : "Button"    , flex : 1, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]
		, events : [
			{
				cellclick : function( g, o ){
					if( o.column.type != "action" ) return;
					if( o.columnIndex != 3 ) return;

					var tData0 = g.get( o.rowIndex );
					if( !tData0 ) return;

					var t = tData0.data;

					while( _ELS.DIV_FANCYGRID_1.firstChild ) _ELS.DIV_FANCYGRID_1.removeChild( _ELS.DIV_FANCYGRID_1.firstChild );

					window.SYS0037_UI_API.spinner.show();

					var url = _URLS.URL1.replace( "<!=CODE_DB=!>", t.HOST ).replace( "<!=NM_DB=!>", t.NM_DB );
					var data;
					try{ data = JSON.parse( window.b2link.xhr.reqSync_String( url ) ); }catch( er ){ window.TtwLog.error( "[ ERROR ] : " + er ); }

					if( window.b2link.response.getResultStatus( data ) )
					{
						var colList = [];

						var io;
						var i=0, iLen=data.d.length;
						for( ; i<iLen; ++i )
						{
							io = data.d[ i ];

							colList.push({
								HOST : t.HOST
								, COUNT_DOC : io.count_doc
								, NM_COL : io.nm_col
								, NM_DB : t.NM_DB
							});
						};

						create_fancygrid_COLList( colList, t )

						window.SYS0037_UI_API.spinner.hide();
					}
					else
					{
						//결과가 없음;
					}
				}
			}
		]
	});

	_CTRLS.fancyfrid_0_tbar = {
		SITE : _CTRLS.fancygrid_0.tbar[ 0 ]
	};

	//화면 레이아웃 재배치;
	reset_layout();

	window.SYS0037_UI_API.spinner.hide();
};

/**
 * @function
 * @param {Array} listArray
 * <code>
	{
	}
 * </code>
 * @param {Object} data
 * <code>
	{
	}
 * </code>
 */
var create_fancygrid_COLList = function( listArray, data )
{
	_CTRLS.fancygrid_1 = new FancyGrid({ renderTo : "div-fancygrid-1", title : data.HOST + " - " + data.NM_DB + " Collection List"

		, width : _ELS.DIV_FANCYGRID.offsetWidth - 410
		, height : _ELS.DIV_ID_CONTAINER.offsetHeight
		, selModel: { type: 'row' }
		, trackOver: true

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
		, defaults : { type : "string", sortable : true, resizable: true }
		, paging : { pageSize : 100, pageSizeData : [ 10, 20, 50, 100 ] }
		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
			//----------;

		, columns : [
			  { index : "HOST"     , title : "HostKey"   , width : 60 }
			, { index : "NM_DB"    , title : "DB Name"   , width : 150 }
			, { index : "NM_COL"   , title : "Col Name"  , width : 160 }
			, { index : "COUNT_DOC", title : "Docs Count", width : 80 }
			, { index : "COL_DATA" , title : "COL_DATA"  , flex : 1 }
			, { index : "STATUS"   , title : "STATUS"    , flex : 1 }
			, { index : "DATE"     , title : "DATE"      , width : 200 }
			, { index : "RESULT"   , title : "RESULT"    , flex : 1 }
			, { type  : "action"   , items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]

		, controllers : [ "DBExport_colList_ctrl" ]

		, events : [
			  { rowdblclick : "cellDbClick" }
			, { cellclick : function( g, o ){
					if( o.column.type != "action" ) return;

					var tData0 = g.get( o.rowIndex );
					if( !tData0 ) return;

					var t = tData0.data;

					window.SYS0037_UI_API.spinner.show( t.NM_DB + "." + t.NM_COL + " Export 진행 중..." );

					var url = _URLS.URL3.replace( "<!=CODE_DB=!>", t.HOST )
						.replace( "<!=NM_DB=!>", t.NM_DB )
						.replace( "<!=NM_COL=!>", t.NM_COL )
						.replace( "<!=PATH_FILE_EXPORT=!>", t.NM_DB + "." + t.NM_COL + ".json" );

					SUtilXMLHttpReqGet.req_String( url, function( result ){
						//결과정제;
						g.set( o.rowIndex, { DATE : new Date(), STATUS : "Export Complete", RESULT : result } );
						g.update();
						//RESULT_TEXTAREA.value = result;

						window.SYS0037_UI_API.spinner.hide();
					});
				}
			}
		]
	});

	//화면 레이아웃 재배치;
	reset_layout();
};

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _MIN_WIDTH_ = 1270;

	//----------Target HTMLElement;
	var tEL0 = _ELS.DIV_FANCYGRID;
	var tEL1 = _ELS.DIV_ID_CONTAINER;
	//----------Target HTMLElement;

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;
	tEL1.style.height = _HEIGHT_ + "px";
	tEL1.scrollTop = 0;

	var _HEIGHT0_;
	var _HEIGHT1_;

	var _WIDTH0_;
	var _WIDTH1_;

	if( window.innerWidth < _MIN_WIDTH_ )
	{
		tEL0.style.display = "table-caption";

		_WIDTH0_ = _WIDTH1_ = tEL1.offsetWidth - 34;

		_HEIGHT0_ = 300;
		_HEIGHT1_ = tEL1.offsetHeight - 22;
	}
	else
	{
		tEL0.style.display = "block";

		_WIDTH0_ = 500;
		_WIDTH1_ = tEL0.offsetWidth - _WIDTH0_ - 10;

		_HEIGHT0_ = _HEIGHT1_ = tEL1.offsetHeight - 22;
	}

	if( _CTRLS.fancygrid_0 )
	{
		_CTRLS.fancygrid_0.setWidth( _WIDTH0_ );
		_CTRLS.fancygrid_0.setHeight( _HEIGHT0_ );
	}

	if( _CTRLS.fancygrid_1 )
	{
		_CTRLS.fancygrid_1.setWidth( _WIDTH1_ );
		_CTRLS.fancygrid_1.setHeight( _HEIGHT1_ );
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

//;
Fancy.defineController( "DBExport_colList_ctrl", {

	/**
	 * RESULT Column을 DoubleClick 하였을 시 상세 메세지 화면을 표출한다
	 * @function
	 * @param {???} g
	 * @param {???} o
	 */
	cellDbClick : function( g, o ){
		var t = o.data;

		var columnIndex = o.column.index;

		if( "NM_COL" == columnIndex || "COL_DATA" == columnIndex )
		{
			window.SYS0037_UI_API.spinner.show();

			var url = _URLS.URL2.replace( "<!=CODE_DB=!>", t.HOST ).replace( "<!=NM_DB=!>", t.NM_DB ).replace( "<!=NM_COL=!>", t.NM_COL );
			SUtilXMLHttpReqGet.req_String( url, function( result ){
				window.SYS0037_UI_API.spinner.show();

				t.COL_DATA = result;

				g.update();

				//COL_DATA Column의 전체 문자열을 FancyForm으로 보여준다.;
				g.showColumnFullText__COL_DATA( t );

				window.SYS0037_UI_API.spinner.hide();
			});
		}
		else if( "RESULT" == columnIndex )
		{
			window.SYS0037_UI_API.spinner.show();

			//RESULT Column의 전체 문자열을 FancyForm으로 보여준다.;
			g.showColumnFullText__RESULT( t );

			window.SYS0037_UI_API.spinner.hide();
		}
	}

	/**
	 * COL_DATA Column의 전체 문자열을 FancyForm으로 보여준다.
	 * @function
	 * @param {???} item
	 */
	, showColumnFullText__COL_DATA : function( item ){
		var fancyform = _CTRLS.fancyform_0;
		if( fancyform )
		{
			fancyform.set( item );
			fancyform.setTitle( item.NM_DB + "." + item.NM_COL );
			fancyform.show();
		}
		else
		{
			fancyform = new FancyForm({ theme : "gray"
				, title : { text : item.NM_DB + "." + item.NM_COL, tools : [ { text : "Close", handler : function(){ this.hide(); } } ] }
				, window : true
				, draggable : true

				, width : 500, height : 500

				, defaults : { type : "string" }
				, items : [ { name : "COL_DATA", type : "textarea", value : item.COL_DATA, height : 400 } ]
				, events : [ { init : function(){ this.show(); } } ]
			});

			_CTRLS.fancyform_0 = fancyform;
		}
	}

	/**
	 * RESULT Column의 전체 문자열을 FancyForm으로 보여준다.
	 * @function
	 * @param {???} item
	 */
	, showColumnFullText__RESULT : function( item ){
		var fancyform = _CTRLS.fancyform_0;
		if( fancyform )
		{
			fancyform.set( item );
			fancyform.setTitle( item.NM_DB + "." + item.NM_COL );
			fancyform.show();
		}
		else
		{
			fancyform = new FancyForm({ theme : "gray"
				, title : { text : item.NM_DB + "." + item.NM_COL, tools : [ { text : "Close", handler : function(){ this.hide(); } } ] }
				, window : true
				, draggable : true

				, width : 500, height : 500

				, defaults : { type : "string" }
				, items : [ { name : "RESULT", type : "textarea", value : item.RESULT, height : 400 } ]
				, events : [ { init : function(){ this.show(); } } ]
			});

			_CTRLS.fancyform_0 = fancyform;
		}
	}
});

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

			_초기화면렌더링();
		};

		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

	return _;

})();
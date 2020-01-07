//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/01_refine_dailyMaster.js";
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

	, DIV_FANCYGRID   : F0( window.document, "id-fancygrid" )
	, DIV_FANCYGRID_1 : window.document.getElementById( "div-fancygrid-1" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//--------------------------------------------------;
var _URLS = {};

	//
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/01_데일리마스터정제대상컬렉션가져오기?code_db=<!=CODE_DB=!>";

	//;
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/01_데일리마스터정제?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

/**
 * 로딩중 모달 화면 컨트롤러
 * @property {Object}
 */
var _LOADER_SPINNER_;

var CONTAINER_HEIGHT;

var _N_SET_TIMEOUT_ = 100;
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

/**
 * @function
 */
var _초기화면렌더링 = function()
{
	var _STR__ALL_ = "ALL";

	try
	{
		window.SYS0037_UI_API.spinner.show();

		_CTRLS.fancygrid_0 = new FancyGrid({ renderTo : "div-fancygrid-0", title : "Daily Merge Data List"

			, width : _ELS.DIV_ID_CONTAINER.offsetWidth - 20, height : _ELS.DIV_ID_CONTAINER.offsetHeight - 22

			, theme : { name : "bootstrap"
				, config : {
					cellHeaderHeight : 30
//					, cellHeight : 70
					, titleHeight : 42
					, barHeight : 37
					, bottomScrollHeight : 12
				}
			}
			, data : []
			, defaults : { type : "string", sortable : true }
			, paging : { pageSize : 50, pageSizeData : [ 3, 10, 20, 50 ] }
			//----------;
			//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
			, tbar : [
				{ type : "combo", data : [
						  { index : 0, DB : "Database" }
						//, { index : 1, DB : "JD-DAILY" }
						//, { index : 2, DB : "JD-LIST" }
						, { index : 3, DB : "TAOBAO-DAILY" }
						//, { index : 4, DB : "TAOBAO-LIST" }
						//, { index : 5, DB : "KAOLA" }
						//, { index : 6, DB : "VIP" }
					]
					, displayKey : "DB"
					, valueKey : "index"
					, value : 0
					, events : [
						{
							change : _초기화면렌더링.search
						}
					]
				}
				, { type : "search", emptyText : "Search", paramsMenu : true }
			]

			//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true }]
			//----------;

			, columns : [
				//width 지정은 값이 전부 표출 되어야만 하는 칼럼;
				  { index : "SITE"  , title : "Site"   , type : "string", flex : 1 }
				, { index : "DB"    , title : "DBName" , type : "string", width: 105 }
				, { index : "COL"   , title : "ColName", type : "string", width: 100 }
				, { index : "COUNT" , title : "Count"  , type : "text", flex : 1 }
				, { index : "SIZE"  , title : "Size"   , type : "text", flex : 1 }
				, { index : "STATUS", title : "Status" , type : "string", flex : 1 }
				, { index : "DATE"  , title : "Date"   , type : "string", flex : 1 }
				, { index : "RESULT", title : "Result" , type : "string", flex : 1 }

				, { type : "action", items : [{ text : "select", cls : "test", action : "cellclick" }], filter : { header : false } }
			]

			, controllers : [ "Merge_list_ctrl" ]

			, events : [
				  { rowdblclick : "cellDbClick" }
				, { cellclick : function( g, o ){
						if( o.column.type != "action" ) return;

						var tData0 = g.get( o.rowIndex );
						if( !tData0 ) return;

						var t0 = tData0.data;

						if( t0.SITE == "" ) return alert( "SITE Empty" );
						if( t0.DB == "" ) return alert( "DB Empty" );
						if( t0.COL == "" ) return alert( "COL Empty" );

						var code_db = window.SYS0037_UI_API.CONST.CONNECTION_INFO[ t0.SITE ];
						var nm_site = window.SYS0037_UI_API.CONST.ROUTER_PATH[ t0.SITE ];

						var _SELECTED_COLLECTION_NAME_ = t0.SITE.toUpperCase() + " - " + t0.COL;
						window.SYS0037_UI_API.spinner.show( _SELECTED_COLLECTION_NAME_ + " 데일리 마스터 생성 중..." );
						setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;
							g.set( o.rowIndex, { DATE : new Date(), STATUS : "Processing..." });
							g.update();

							var result0 = window.b2link.xhr.reqSync_String(
								_URLS.URL1.replace( "<!=CODE_DB=!>", code_db )
										  .replace( "<!=NM_PATH=!>", nm_site )
										  .replace( "<!=NM_DB=!>", t0.DB )
										  .replace( "<!=NM_COL=!>", t0.COL ));
							g.set( o.rowIndex, { DATE : new Date(), STATUS : "Complete", RESULT : result0 });
							g.update();

							window.SYS0037_UI_API.spinner.hide();

						}, _N_SET_TIMEOUT_ );
					}
				}
			]
		});

		_CTRLS.fancyfrid_0_tbar = {
			DB : _CTRLS.fancygrid_0.tbar[ 0 ]
			//, targetYear : _CTRLS.fancygrid_0.tbar[ 1 ]
		};

		window.SYS0037_UI_API.spinner.hide();
	}
	catch( er )
	{
		window.console.error( "[ ERROR ] - " + er );
	}
};

_초기화면렌더링.search = function( data ){

	if( _CTRLS.fancyfrid_0_tbar.DB.value == 0 ) return;

	var _t1 = _CTRLS.fancyfrid_0_tbar.DB;

	_TARGET_SITE_NAME_ = _t1.data[ _t1.valueIndex ].DB;

	window.SYS0037_UI_API.spinner.show( "정제대상 컬렉션을 가져오는 중 입니다." );
	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		var url = _URLS.URL0.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
//			.replace( "<!=TARGET_YEAR=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ _TARGET_SITE_NAME_ ] )
			.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] );

		var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

		if( window.b2link.response.getResultStatus( data ) )
		{
			var colList = [];

			var io;
			var i=0, iLen=data.d.data.length;
			for( ; i<iLen; ++i )
			{
				io = data.d.data[ i ];

				var colInfo = {
					SITE : data.d.target_site
					, DB : data.d.DB
					, COL : io.nm_col
				};

				//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
				//colInfo의 COUNT와 SIZE Column 개별 완성;
				_초기화면렌더링.getStringCountAndSizeByTargetShop[ data.d.target_site ]( io, colInfo );

				colList.push( colInfo );

			};

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
};

//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
_초기화면렌더링.getStringCountAndSizeByTargetShop = {

	JD : function(){
	}

	, KAOLA : function( io, colInfo ){
		var F = _초기화면렌더링.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var ioc = io.stats.count;
		var ios = io.stats.size;

		var str_count = "LIST : " + ioc.LIST
			+ "\nDETAIL : " + ioc.DETAIL
			+ "\nDETAIL_COMMENT : " + ioc.DETAIL_COMMENT_INFO
			+ "\nDETAIL_HTML : " + ioc.DETAIL_HTML;

		var str_size = "LIST : " + F( ios.LIST )
			+ "\nDETAIL : " + F( ios.DETAIL )
			+ "\nDETAIL_COMMENT : " + F( ios.DETAIL_COMMENT_INFO )
			+ "\nDETAIL_HTML : " + F( ios.DETAIL_HTML );

		colInfo.COUNT = str_count;
		colInfo.SIZE = str_size;
	}

	, "TAOBAO-DAILY" : function( io, colInfo ){
		var F = _초기화면렌더링.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var ioc = io.stats.count;
		var ios = io.stats.size;

		colInfo.COUNT = ioc;
		colInfo.SIZE = F( ios ).toFixed(3) + " MB";
	}

	, VIP : function( io, colInfo ){
		var F = _초기화면렌더링.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var ioc = io.stats.count;
		var ios = io.stats.size;

		var str_count = "LIST : " + ioc.LIST
			+ "\nBRAND_COUPON : " + ioc.BRAND_COUPON
			+ "\nDETAIL : " + ioc.DETAIL;

		var str_size = "LIST : " + F( ios.LIST )
			+ "\nBRAND_COUPON : " + F( ios.BRAND_COUPON )
			+ "\nDETAIL : " + F( ios.DETAIL );

		colInfo.COUNT = str_count;
		colInfo.SIZE = str_size;
	}
};

/**
 * Byte를 MegaByte로 변경
 * @function
 * @param {Number} nByte
 * @return {Number} Megabyte
 */
_초기화면렌더링.getStringCountAndSizeByTargetShop.byteToMegabyte = function( nByte ){ return nByte / 1024 / 1024; };

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _MIN_WIDTH_ = 1270;

	if( window.innerWidth < _MIN_WIDTH_ ) _ELS.DIV_FANCYGRID.style.display = "table-caption";

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;
	_ELS.DIV_ID_CONTAINER.style.height = _HEIGHT_ + "px";
	_ELS.DIV_ID_CONTAINER.scrollTop = 0;

	var _WIDTH0_ = _ELS.DIV_ID_CONTAINER.offsetWidth - 20;
	var _HEIGHT0_ = _ELS.DIV_ID_CONTAINER.offsetHeight - 22;
	if( _CTRLS.fancygrid_0 )
	{
		_CTRLS.fancygrid_0.setWidth( _WIDTH0_ );
		_CTRLS.fancygrid_0.setHeight( _HEIGHT0_ );
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


Fancy.defineController( "Merge_list_ctrl", {

	/**
	 * RESULT Column을 DoubleClick 하였을 시 상세 메세지 화면을 표출한다
	 * @function
	 * @param {???} g
	 * @param {???} o
	 */
	cellDbClick : function( g, o ){
		var t = o.data;

		var columnIndex = o.column.index;

		if( "RESULT" == columnIndex )
		{
			window.SYS0037_UI_API.spinner.show();

			g.update();

			//RESULT Column의 전체 문자열을 FancyForm으로 보여준다.;
			g.showColumnFullText__RESULT( t );

			window.SYS0037_UI_API.spinner.hide();
		};
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
			fancyform.setTitle( item.DB + "." + item.COL );
			fancyform.show();
		}
		else
		{
			_CTRLS.fancyform_0 = new FancyForm({ theme : "gray"
				, title : { text : item.DB + "." + item.COL, tools : [ { text : "Close", handler : function(){ this.hide(); } } ] }
				, window : true
				, draggable : true

				, width : 500, height : 500

				, defaults : { type : "string" }
				, items : [
					{
						//label : "COL_DATA",
						name : "RESULT"
						, type : "textarea"
						, value : item.RESULT
						, height : 400
					}
				]
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
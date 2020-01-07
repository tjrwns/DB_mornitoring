//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/DBImport.js";
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
	  BTN_LIST_LOAD : F0( window.document, "id-btn-import-file-load" )

	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )
	, DIV_IMPORT_FILE_LIST : window.document.getElementById( "div-fancygrid-0" )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, INPUT_IMPORT_FILE_PATH : F0( window.document, "id-input-import-file-path" )
};

//--------------------------------------------------;
var _URLS = {};

	//;
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/getImportFileList?filePath=<!=PATH_FILE=!>";

	//;
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/common/util/dbImport?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&inputFilePath=<!=PATH_FILE=!>";
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var CONTAINER_HEIGHT;

var _HOST_LIST = [];
//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	fancygrid_0 : null
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

	_ELS.BTN_LIST_LOAD.addEventListener( "click", function( e ){
		if( _ELS.INPUT_IMPORT_FILE_PATH.value == "" ){ window.SYS0037_UI_API.spinner.hide(); return; };

		window.SYS0037_UI_API.spinner.show();
		var url = _URLS.URL0.replace( "<!=PATH_FILE=!>", _ELS.INPUT_IMPORT_FILE_PATH.value );
		SUtilXMLHttpReqGet.req_String( url, function( result ){
			var arrList = [];
			var hostList = [];

			var resultToObject = JSON.parse( result );

			var _to;
			resultToObject.forEach( function( file ){
				_to = {};
				_to.FILE = file;
				_to.HOST = "";
				_to.TARGET_DB = "";
				_to.TARGET_COL = "";

				arrList.push( _to );
			});

			window.b2link.element.removeAllChildren( _ELS.DIV_IMPORT_FILE_LIST );

			create_fancygrid_FileList( arrList, _ELS.INPUT_IMPORT_FILE_PATH.value );

			window.SYS0037_UI_API.spinner.hide();
		});
	});

	window.SYS0037_UI_API.spinner.hide();
};

/**
 * @function
 * @param {???} data
 * @param {String} path
 */
var create_fancygrid_FileList = function( data, path )
{
	if( _HOST_LIST.length == 0 )
	{
		var s,so;
		for( s in window.SYS0037_UI_API.CONST.CONNECTION_INFO ){
			_HOST_LIST.push( s );
		}
	}

	_CTRLS.fancygrid_0 = new FancyGrid({ renderTo : "div-fancygrid-0", title : path + " -- FILES"

		, height : CONTAINER_HEIGHT
			- _ELS.CONTENT_HEADER.offsetHeight
			- _ELS.CONTENT_FOOTER.offsetHeight
			- _ELS.HEADER_TOP.offsetHeight
			- _ELS.INPUT_IMPORT_FILE_PATH.offsetHeight

		, selModel: { type: 'row' }
		, trackOver: true

		, theme : { name : "bootstrap"
			, config : {
				  barHeight : 37
				, bottomScrollHeight : 12
				, cellHeaderHeight : 30
				, cellHeight : 32
				, titleHeight : 42
			}
		}
		, data : data
		, clicksToEdit : 1
		, defaults : { flex : 1, type : "string", sortable : true, resizable: true }

		//----------;
		//, bbar : [ { disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//----------;

		, columns : [
			  { index : "FILE"      , title : "FILE" }
			, { index : "HOST"      , title : "HOST"      , type : "combo", flex : 1, editable : true, data : _HOST_LIST }
			, { index : "TARGET_DB" , title : "TARGET_DB" , editable : true }
			, { index : "TARGET_COL", title : "TARGET_COL", editable : true }
			, { index : "STATUS"    , title : "STATUS" }
			, { index : "RESULT"    , title : "RESULT" }
			, { type  : "action", items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]
		, controllers : [ "DBimport_ctrl" ]
		, events : [
			  { rowdblclick : "cellDbClick" }
			, { cellclick : function( g, o ){
					if( o.column.type != "action" ) return;

					var tData0 = g.get( o.rowIndex );
					if( !tData0 ) return;

					var t0 = tData0.data;

					if( t0.HOST == "" )      return alert( "HOST Empty!" );
					if( t0.FILE == "" )      return alert( "File Path Empty!" );
					if( t0.TARGET_DB == "" ) return alert( "DB Name Empty!" );
					if( t0.TARGET_COL == "" )return alert( "Col Name Empty!" );

					if( !_ELS.INPUT_IMPORT_FILE_PATH.value ) return;

					//Target DB Name;
					var nm_db = t0.TARGET_DB;

					//Target Collection Name;
					var nm_col = t0.TARGET_COL;

					//filePath;
					var filePath = _ELS.INPUT_IMPORT_FILE_PATH.value + "\\" + t0.FILE;

					window.SYS0037_UI_API.spinner.show( t0.FILE + "을" + t0.HOST + "의" + nm_db + " - " + nm_col + "에 Import 중입니다." );
					var url = _URLS.URL1.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ t0.HOST ] )
						.replace( "<!=NM_DB=!>", nm_db )
						.replace( "<!=NM_COL=!>", nm_col )
						.replace( "<!=PATH_FILE=!>", filePath );

					SUtilXMLHttpReqGet.req_String( url, function( result ){
						g.set( o.rowIndex, { STATUS : "Import Complete", RESULT : result });

						window.SYS0037_UI_API.spinner.hide();
					});
				}
			}
		]
	});

	//화면 레이아웃 재배치;
	reset_layout();

	window.SYS0037_UI_API.spinner.hide();
};

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	//----------Target HTMLElement;
	var tEL0 = _ELS.DIV_ID_CONTAINER;
	//----------Target HTMLElement;

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;

	tEL0.style.height = _HEIGHT_ + "px";
	tEL0.scrollTop = 0;

	var _HEIGHT0_ = tEL0.offsetHeight - 32 - _ELS.INPUT_IMPORT_FILE_PATH.offsetHeight;
	var _WIDTH0_ = tEL0.offsetWidth - 20;

	if( _CTRLS.fancygrid_0 )
	{
		_CTRLS.fancygrid_0.setWidth( _WIDTH0_ );
		_CTRLS.fancygrid_0.setHeight( _HEIGHT0_ );
	}
};

//----------------------------------------------------------------------------------------------------;

//	GETTER / SETTER;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------GET;

//--------------------------------------------------SET;

/**
 * @function
 */
var setWindowContainer__div_0__UI_Component_Panel = function()
{
	var el = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_PANEL;
		el.setAttribute( "style", el.getAttribute( "style" ) + "position : absolute !important;" );
};

//--------------------------------------------------GET / SET;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//;
setWindowContainer__div_0__UI_Component_Panel();

//----------------------------------------------------------------------------------------------------;

Fancy.defineController( "DBimport_ctrl", {

	/**
	 * @function
	 * @param {???} g
	 * @param {???} o
	 */
	cellDbClick : function( g, o ){
		if( o.columnIndex == 5 )
		{
			window.SYS0037_UI_API.spinner.show();

			g.getResult( o.data );

			window.SYS0037_UI_API.spinner.hide();
		};
	}

	, getResult : function( item ){
		var _ = this
			, infoPannel_result = _.infoPannel_result;
		if( infoPannel_result )
		{
			infoPannel_result.set( item );
			infoPannel_result.setTitle( "asdfasdf" );
			infoPannel_result.show();
		}
		else
		{
			infoPannel_result = new FancyForm({ theme : "gray"
				, title : { text : "asdasdasd", tools : [ { text : "Close", handler : function(){ this.hide(); } } ] }

				, window : true
				, draggable : true

				, width : 500, height : 500

				, defaults : { type : "string" }
				, items : [ { name : "RESULT", type : "textarea", value : item.RESULT, height : 400 } ]
				, events : [ { init : function(){ this.show(); } } ]
			});

			_.infoPannel_result = infoPannel_result;
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
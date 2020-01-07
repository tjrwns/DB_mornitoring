//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/brandInfoView.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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

//----------------------------------------------------------------------------------------------------;

/**
 * Echarts Controller List
 * @property {Array}
 */
var _LIST_ECHARTS_ = [];

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

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

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

	var FNS = {
		"List Chart" : function( grid, value ){

			window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_category__grid.getData( grid, value, function( data ){

				if( _CTRLS.window0 && !_CTRLS.window0.isParked() ) _CTRLS.window0.park();

				var DATA = {
					elementID : "div-fancygrid-1"
					, width : _ELS.DIV_ID_CONTAINER.offsetWidth - _CTRLS.fancygrid_0.getWidth() - 34
					, height : _CTRLS.fancygrid_0.getHeight() - 400
					, data : data
				}

				if( !_CTRLS.fancygrid_1 ) _CTRLS.fancygrid_1 = window.SYS0037_UI_API.fancygrid.render_sellcount_distribution_by_category__grid( DATA )
				else
				{
					//update;
					_CTRLS.fancygrid_1.setData( data );
					_CTRLS.fancygrid_1.update();
				}

				var DATA = {
					HOST : value.value.HOST
					, DB : value.value.DB
					, COL : value.value.COL
					, element : null
					, option : { width : "100%", height : 400 }
				};

				if( !_CTRLS.chart0 )
				{
					var id = "chart-" + SUtilMath.getUnique();

					var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
					_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

					_ELS[ id ].style.width = "100%";
					_ELS[ id ].style.height = "400px";

					_ELS.CHART0.appendChild( _ELS[ id ] );

					DATA.element = _ELS[ id ];
					window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async( DATA,function(chart){
						_CTRLS.chart0 = chart
					});
				}
				else
				{
					window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async.updateSeriesData( _CTRLS.chart0, DATA,function(chart){
						_CTRLS.chart0 = chart
					});
				}

				reset_layout();

				reset_layout();
			})
		}
		, "Full List" : function( grid, value ){

			if( !_CTRLS.window0 )
			{
				var option = {
					  l : _CTRLS.fancygrid_0.getWidth() + window.SYS0037_UI_INFO.CONST.SIZE.LNB_WIDTH()
					, w : _ELS.DIV_ID_CONTAINER.offsetWidth - _CTRLS.fancygrid_0.getWidth()
				};

				_CTRLS.window0 = window.SYS0037_UI_API.dhtmlx.createWindow( value.value.DB + "." + value.value.COL, option )

				_CTRLS.window0.windowClose = function( win ){

					if( win )
					{
						win.detachAllEvents();
						window.dhx$Windows.store[ win.getId() ].close();
					}
					_CTRLS.window0 = null;
					_CTRLS.chart1.dispose();
					_CTRLS.chart1 = null;

//					while( _ELS.CHART1.firstChild ) _ELS.CHART1.removeChild( _ELS.CHART1.firstChild );
				};
			}

			if( _CTRLS.window0.isParked() ) _CTRLS.window0.park();

			var DATA = {
				HOST : value.value.HOST
				, DB : value.value.DB
				, COL : value.value.COL
				, element : null
			};

			if( !_CTRLS.chart1 )
			{
				var id = "chart-" + SUtilMath.getUnique();

				var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
				_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

				_ELS[ id ].style.width = "100%";
				_ELS[ id ].style.height = "100%";

				_CTRLS.window0.appendObject( _ELS[ id ] );

				DATA.element = _ELS[ id ];
				 window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async( DATA,function(chart){
					_CTRLS.chart1 = chart
				});
			}
			else
			{
				window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async.updateSeriesData( _CTRLS.chart1, DATA,function(chart){
					_CTRLS.chart1 = chart
				});
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
//	if( t.window0 )
//	{
//		t.window0.setDimension( window.innerWidth, window.innerHeight );
//		t.window0.setPosition( 0, 0 );
//
//		//확인하기 - 20190303_1653 - 최석준 - _CTRLS.chart1에 API가 없을까요?;
//		_ELS.CHART1.style.width = window.innerWidth - 30 + "px";
//		_ELS.CHART1.style.height = window.innerHeight - 67 + "px";
//
//		t.chart1.resize();
//	}

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

			_초기화면렌더링();
		};

		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

	return _;

})();
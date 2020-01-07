//----------------------------------------------------------------------------------------------------;
var fileNm = "./ui/App/BatchDesktop/brandInfoView.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;
var F1 = window.b2link.element.getElementsByClassName;

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
	, DIV_FANCYGRID_LIST : window.document.getElementById( "div-fancygrid-list" )
	, DIV_FANCYGRID_RIGHT : F0( window.document, "id-fancygrid-right" )

	, DIV_PIE_CONTAINER : window.document.getElementById( "id-div-pie-container" )



	, TEMPLATE_CHART : window.document.getElementById( "template-chart" )
	, TEMPLATE_HISTORY : window.document.getElementById( "template-history" )
	, TEMPLATE_PIE_CHART : window.document.getElementById( "template-pie-chart" )

	, FANCY_GRID_CONTAINER : window.document.getElementById( "fancygrid-container" )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//----------------------------------------------------------------------------------------------------;


/**
 * Echarts Controller List
 * @property {Array}
 */
var _LIST_ECHARTS_ = [];

var CONTAINER_HEIGHT;
var _MENU_NAME_;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	  chart0 : null
	, chart1 : null
	, pie_chart_list : {}
	, fancygrid_0 : null
	, fancyfrid_0_tbar : null
	, fancygrid_1 : null
	, fancygrid_2 : null

	, window0 : null
};

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;


var _el_btn_search__click = function(e){
	var search_condition = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition( _ELS.SEARCH_INPUTS );
	window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.search( search_condition );
	return;
};


var _el_btn_reset__click = function(e){
	window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.reset_search_condition( _ELS.SEARCH_INPUTS );
	return;
};

var _evt_click_treemap_chart = function (params){

	var id = "chart-" + params.data.brand_id;

	var TEMPLATE_CHART_HTML = _ELS.TEMPLATE_CHART.children[0].outerHTML;
	var TEMPLATE_HISTORY_HTML = _ELS.TEMPLATE_HISTORY.children[0].outerHTML;

	if( !_CTRLS.pie_chart_list[ id ] )
	{

		_ELS.CHART.insertBefore( window.b2link.html.createHTMLElement( TEMPLATE_CHART_HTML.replace( /<!=ID=!>/gi, "div-chart-outer-" + id )
			.replace( "{{BG_COLOR}}", params.color )
			.replace( "{{HEIGHT}}", (_CTRLS.window0.dataObj.items[ 1 ].getHeight() - _CTRLS.window0.dataObj.items[ 0 ]._getHdrHeight()) + "px" )
			.replace( "{{WIDTH}}", ( _CTRLS.window0.dataObj.items[ 1 ].getWidth() * 0.8 ) + "px" )
		), _ELS.CHART.childNodes[0] );

		_ELS.CHART_LIST[ id ] = window.document.getElementById( "div-chart-outer-" + id );

		_ELS.HISTORY.insertBefore( window.b2link.html.createHTMLElement( TEMPLATE_HISTORY_HTML.replace( "{{BRAND_NM}}", params.data.name  )
			.replace( "{{BG_COLOR}}", params.color )
			.replace( /{{ID}}/gi, "div-history-" + id )
			.replace( /{{SELL_COUNT}}/gi, params.data.value )
			.replace( /{{RATIO_SELL_COUNT}}/gi, params.data.ratioSC )
			.replace( /{{SELL_AMOUNT}}/gi, params.data.sellAmount )
			.replace( /{{RATIO_SELL_AMOUNT}}/gi, params.data.ratioSA )
		), _ELS.HISTORY.childNodes[0] );

		_ELS.HISTORY_LIST[ id ] = window.document.getElementById( "div-history-" + id );

		var DATA = {
			  HOST :fancygrid0_evt_click_btn.DATA.HOST
			, DB : fancygrid0_evt_click_btn.DATA.DB
			, COL : fancygrid0_evt_click_btn.DATA.COL

			, brandId : params.data.brand_id
			, element : null
		};

		var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
		_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

		_ELS[ id ].style.width = _ELS.CHART_LIST[ id ].offsetWidth + "px";
		_ELS[ id ].style.height = _ELS.CHART_LIST[ id ].offsetHeight + "px";
		_ELS.CHART_LIST[ id ].appendChild( _ELS[ id ] );

		DATA.element = _ELS[ id ];

		_evt_click_pie_chart_history.change( id );

		_ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })

		window.SYS0037_UI_API.echarts.category_by_brand_info_view_Async( DATA,function(chart){
			_CTRLS.pie_chart_list[ id ] = chart
			_ELS.CHART1 = _CTRLS.chart1._dom;

			_CTRLS.pie_chart_list[ id ].on('dblclick', _evt_click_pie_chart )

			//클릭시해당 차트위치로 스크롤된다.;
			_ELS.HISTORY_LIST[ id ].addEventListener( "click", _evt_click_pie_chart_history );
		})
	}
	else
	{
		_evt_click_pie_chart_history.change( id );
		_ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
	}

	resize_pie_chart();
}


var _evt_click_pie_chart_history = function(e){

	var t = e.target;

	var _t = t.getAttribute( "id" ) || t.parentElement.getAttribute( "id" );
	var id = _t.replace("div-history-","");

	_evt_click_pie_chart_history.change( id );
}

_evt_click_pie_chart_history.change = function(id){

	var s,so;
	for( s in _ELS.HISTORY_LIST ){
		so = _ELS.HISTORY_LIST[ s ];
		if( s == id ) so.style.border = "5px solid #fff";
		else so.style.border = "0px solid #fff";
	}

	_ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
}

		var s,so;
		for( s in _ELS.HISTORY_LIST ){
			so = _ELS.HISTORY_LIST[ s ];
			if( s == id ) so.style.border = "5px solid #fff";
			else so.style.border = "0px solid #fff";
		}

var _evt_click_pie_chart = function (params){

	//그리드높이 최소설정;
	_ELS.FANCY_GRID_CONTAINER.style.height = ( _CTRLS.window0.dataObj.items[ 2 ].getHeight() - _CTRLS.window0.dataObj.items[ 2 ]._getHdrHeight() ) + "px";
	var el_search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_input_vertical();

	_CTRLS.window0.dataObj.items[ 2 ].attachObject( el_search );

	_ELS.SEARCH_INPUTS = F1( window.document, "id-input-search" );
	_ELS.BTN_SEARCH = F0( window.document, "id-btn-search" );
	_ELS.BTN_RESET = F0( window.document, "id-btn-reset" );
	_ELS.DIV_SEARCH = F0( window.document, "id-div-search-input" );

	_ELS.BTN_SEARCH.addEventListener( "click", _el_btn_search__click );
	_ELS.BTN_RESET.addEventListener( "click", _el_btn_reset__click );

	var DATA = {
		  HOST :fancygrid0_evt_click_btn.DATA.HOST
		, DB : fancygrid0_evt_click_btn.DATA.DB
		, COL : fancygrid0_evt_click_btn.DATA.COL

		, height : _CTRLS.window0.dataObj.items[ 2 ].getHeight() - _CTRLS.window0.dataObj.items[ 2 ]._getHdrHeight() - _ELS.DIV_SEARCH.offsetHeight

		, pagingConfig : {
			colCnt : 9
			, rowCnt : 5
			, paging : { url : null, limit : 100, curPage : 1, totalCount : 0, totalPage : 0 }
			,search : { brandId : params.data.brandId, categoryId : params.data.cateId }
		}

		, data : null
	};


	var s,so;
	for( s in DATA.pagingConfig.search )
	{
		so = DATA.pagingConfig.search[ s ];
		var _t = F0( window.document, s )
		_t.value = so;
	};

	DATA.pagingConfig.paging.limit = ( DATA.pagingConfig.colCnt + 1 ) * DATA.pagingConfig.rowCnt;
	DATA.pagingConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition( _ELS.SEARCH_INPUTS );

	window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.getData( DATA, function( result ){
		_CTRLS.fancygrid_2 = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail( result );

		_CTRLS.window0.grid = _CTRLS.fancygrid_2;
		_CTRLS.window0.grid.prevPage = _CTRLS.fancygrid_2.prevPage;
		_CTRLS.window0.grid.nextPage = _CTRLS.fancygrid_2.nextPage;
		_CTRLS.window0.grid.search_product = _el_btn_search__click;
		_CTRLS.window0.windowClose = _CTRLS.window0.windowClose;

		_CTRLS.fancygrid_2.on( "celldblclick", _evt_click_grid_thumbnail );

	});
};

var _evt_click_grid_thumbnail = function( grid, value ){
	if( value.value == "" ) return;
	var DATA = {
		grid : grid
		, value : value
		, modalInex : "productDetailModal00"
	};
	window.SYS0037_UI_API.fancygrid.event.click_cell_render_product_list_thumnail( DATA );
};

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

		//화면 레이아웃 재배치;
		_CTRLS.fancygrid_0 = window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn2( {
			elementID : "div-fancygrid-0"
			, width : 800
			, height : _ELS.DIV_ID_CONTAINER.offsetHeight
		})

		_CTRLS.fancygrid_0.on( "cellclick", fancygrid0_evt_click_btn )
		//reset_layout();

		window.SYS0037_UI_API.spinner.hide();
	}
	catch( er )
	{
		window.TtwLog.error( "[ ERROR ] - " + er );
	}
};

/**
 * @function
 */
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

			//-------------------------------------------------------;

			if( !_CTRLS.window0 )
			{
				_CTRLS.window0 = window.SYS0037_UI_API.dhtmlx.createWindow__attachLayout ( value.value.DB + "." + value.value.COL, "3J" );
				_CTRLS.window0.windowClose = function( win ){
					if( win )
					{
						win.detachAllEvents();
						window.dhx$Windows.store[ win.getId() ].close();
					}
					_CTRLS.window0 = null;
					_CTRLS.chart1 = null;
					_CTRLS.pie_chart_list = {};
				};
				_CTRLS.window0.attachEvent("onResizeFinish", function(win){ _CTRLS.chart1.resize();});
			}

			_CTRLS.window0.grid = {};
			_CTRLS.window0.grid.prevPage = function(){return;};
			_CTRLS.window0.grid.nextPage = function(){return;};
			_CTRLS.window0.grid.search_product = function(){return;};
			_CTRLS.window0.windowClose = _CTRLS.window0.windowClose;

			//-------------------------------------------------------;

			_CTRLS.window0.dataObj.items[ 2 ].setWidth( window.innerWidth * 0.5 );

			var DATA = {
				  HOST :fancygrid0_evt_click_btn.DATA.HOST
				, DB : fancygrid0_evt_click_btn.DATA.DB
				, COL : fancygrid0_evt_click_btn.DATA.COL
				, element : null
			};

			if( !_CTRLS.chart1 )
			{
				var id = "chart-" + SUtilMath.getUnique();

				var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
				_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

				_ELS[ id ].style.width = _CTRLS.window0.dataObj.items[ 0 ].getWidth() + "px";
				_ELS[ id ].style.height = ( _CTRLS.window0.dataObj.items[ 0 ].getHeight() - _CTRLS.window0.dataObj.items[ 2 ]._getHdrHeight() ) + "px";

				_CTRLS.window0.dataObj.items[ 0 ].attachObject( _ELS[ id ] );;

				DATA.element = _ELS[ id ];
				window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async( DATA,function(chart){
					_CTRLS.chart1 = chart
					_ELS.CHART1 = _CTRLS.chart1._dom;

					var TEMPLATE_PIE_CHART_HTML = '<div id="id-div-pie-container" style="width:100%;overflow-y: auto;">'
					+ '<div id="history" style="width:20%;float:left;background-color:#fff;overflow-y: auto;postion:absolute;height:100%"></div>'
					+ '<div id="chart" style="width:80%;float:left;height: 100%;overflow-y: auto;"></div>'
					+ '</div>';

					_ELS.DIV_PIE_CONTAINER = window.b2link.html.createHTMLElement( TEMPLATE_PIE_CHART_HTML );
					_ELS.DIV_PIE_CONTAINER.style.width =_CTRLS.window0.dataObj.items[ 1 ].getWidth() + "px";
					_ELS.DIV_PIE_CONTAINER.style.height = (_CTRLS.window0.dataObj.items[ 1 ].getHeight() - _CTRLS.window0.dataObj.items[ 0 ]._getHdrHeight()) + "px";

					_CTRLS.window0.dataObj.items[ 1 ].attachObject( _ELS.DIV_PIE_CONTAINER );

					_ELS.CHART = window.document.getElementById( "chart" );
					_ELS.HISTORY = window.document.getElementById( "history" );

					if( !_ELS.CHART_LIST ) _ELS.CHART_LIST = {};
					if( !_ELS.HISTORY_LIST ) _ELS.HISTORY_LIST = {};

					//-------------------------------------------------------;

					_CTRLS.chart1.on('dblclick', _evt_click_treemap_chart )
				});
			}
			else
			{
				window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async.updateSeriesData( _CTRLS.chart0, DATA,function(chart){
					_CTRLS.chart1 = chart
					_ELS.CHART1 = _CTRLS.chart1._dom;
				});
			}

		}
	};

	return FNS[ value.column. title ]( grid, value );
};

var resize_pie_chart = function(){
	var docW = _CTRLS.window0.dataObj.items[ 1 ].getWidth()

	var scrollbarWidth00 = _ELS.CHART.offsetWidth - _ELS.CHART.clientWidth;
	var scrollbarWidth01 = _ELS.HISTORY.offsetWidth - _ELS.HISTORY.clientWidth;

	var s,so;
	for( s in _ELS.CHART_LIST ){
		so = _ELS.CHART_LIST[ s ];
		so.parentElement.style.width = ( docW - _ELS.HISTORY.offsetWidth - scrollbarWidth00 ) + "px";
	}

}

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
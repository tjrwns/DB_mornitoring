//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/productInfoViewThumb.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;
var F1 = window.b2link.element.getElementsByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {

	CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_FANCYGRID : F0( window.document, "id-fancygrid" )
	, DIV_FANCYGRID_0 : window.document.getElementById( 'div-fancygrid-0' )
	, DIV_FANCYGRID_1_CONTAINER : F0( window.document, 'div-fancygrid-1-container' )
	, DIV_FANCYGRID_LIST :  window.document.getElementById( 'div-fancygrid-List' )

	, DIV_ID_CONTAINER : window.document.getElementById( 'id-container' )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, DIV_SEARCH_CONDITION : F0( window.document, "search-condition" )

	, BTN_SEARCH : F0( window.document, "id-btn-search" )
	, BTN_RESET : F0( window.document, "id-btn-reset" )

	, DIV_PRODUCT_INFO : F0( window.document, "id-div-product-info" )
	, DIV_PRODUCT_INFO_GRID : window.document.getElementById( "product-info-grid" )
	, CHART0 : F0( window.document, "id-echarts0" )
	, CHART1 : F0( window.document, "id-echarts1" )

	//, BTN_PRODUCT_INFO_MODAL_PRODUCT_LINK : function(){ return window.document.getElementById( 'btn_product_link' ); }
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

	fancygrid_0 : null
	, fancyfrid_0_tbar : null

	, fancygrid_1 : null
	, fancygrid_1_config : {
		colCnt : null
		, rowCnt : null
		, cell_height : null
		, paging : {
			url : null
			, limit : 120
			, curPage : 1
			, totalCount : 0
			, totalPage : 0
		}
		, search : null
	}

	, fancygrid_2 : null
	, productDetailModal00 : null

	, layout00 : null

	, window0 : null

	, chart0 : null
	, chart1 : null
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


//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;
/**
 * @function
 */
var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show();

	//컬렉션리스트 조회;
	_CTRLS.fancygrid_0 = window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn1( { elementID : "div-fancygrid-0" });
	_CTRLS.fancygrid_0.on( "cellclick", function( grid, value ){

		if( value.column.type != "action" ) return;
		if( value.columnIndex != 5 ) return;
		if( !value.value ) return;

		var t0 = value.value;

		window.SYS0037_UI_API.spinner.show();

		//기존돔에 서치관련 돔을 생성한다.;
		var el_search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_input_vertical();

		_CTRLS.window0 = window.SYS0037_UI_API.dhtmlx.createWindow__fullScreen_AppendObject( t0.DB + "." + t0.COL, el_search )
		_CTRLS.window0.windowClose = function( win ){

			if( win )
			{
				win.detachAllEvents();
				window.dhx$Windows.store[ win.getId() ].close();
			}
			_CTRLS.window0 = null;
			_CTRLS.fancygrid_1 = null;
		};

		_ELS.SEARCH_INPUTS = F1( window.document, "id-input-search" );
		_ELS.BTN_SEARCH = F0( window.document, "id-btn-search" );
		_ELS.BTN_RESET = F0( window.document, "id-btn-reset" );
		_ELS.DIV_SEARCH = F0( window.document, "id-div-search-input" );

		_ELS.BTN_SEARCH.addEventListener( "click", _el_btn_search__click );
		_ELS.BTN_RESET.addEventListener( "click", _el_btn_reset__click );

		var DATA = {
			HOST : t0.HOST
			, DB : t0.DB
			, COL : t0.COL

			//, elementID : "div-fancygrid-List"
			//, width : _CTRLS.window0._getWidth()
			, height : _CTRLS.window0._getHeight() - _ELS.DIV_SEARCH.offsetHeight

			, pagingConfig : {
				colCnt : null
				, rowCnt : null
				, cell_height : 340
				, paging : { url : null, limit : 100, curPage : 1, totalCount : 0, totalPage : 0 }
				,search : null
			}

			, data : null
		};

		if( window.innerWidth > 1920 ){
			DATA.pagingConfig.colCnt = 19;
			DATA.pagingConfig.rowCnt = 5;
		}
		else
		{
			DATA.pagingConfig.colCnt = 9;
			DATA.pagingConfig.rowCnt = 3;
		}

		DATA.pagingConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition( _ELS.SEARCH_INPUTS );

		window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.getData( DATA, function( DATA ){

			_CTRLS.fancygrid_1 = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail( DATA );

			_CTRLS.fancygrid_1.on( "celldblclick", function( grid, value ){

				if( value.value == "" ) return;

				window.SYS0037_UI_API.spinner.callBackFunction(null,function(){

					_CTRLS.window1 = window.SYS0037_UI_API.dhtmlx.createWindow__attachLayout_2U( "Product Diff Info", _ELS.DIV_PRODUCT_INFO, "2U" );
					_CTRLS.window1.windowClose = function( win ){

						if( win )
						{
							win.detachAllEvents();
							window.dhx$Windows.store[ win.getId() ].close();
						}
						_CTRLS.window1 = null;
						_CTRLS.fancygrid_2 = null;

					};

					//윈도우레이아웃설정 좌측;
					_CTRLS.window1.dataObj.items[ 0 ].setWidth( window.innerWidth * 0.8 );
					_CTRLS.window1.dataObj.items[ 0 ].setText( "Product Price Trend" );

					_CTRLS.window1.dataObj.items[ 0 ].detachObject();

					//돔초기화;
					while( _ELS.CHART0.firstChild ){ _ELS.CHART0.removeChild( _ELS.CHART0.firstChild ); }
					while( _ELS.DIV_PRODUCT_INFO_GRID.firstChild ){ _ELS.DIV_PRODUCT_INFO_GRID.removeChild( _ELS.DIV_PRODUCT_INFO_GRID.firstChild ); }

					_CTRLS.window1.dataObj.items[ 0 ].attachObject( _ELS.DIV_PRODUCT_INFO );
					_CTRLS.window1.dataObj.items[ 0 ].showInnerScroll();
					//윈도우레이아웃설정 우측;
					_CTRLS.window1.dataObj.items[ 1 ].setWidth( window.innerWidth * 0.2 );
					_CTRLS.window1.dataObj.items[ 1 ].setHeight( _CTRLS.window1.dataObj.items[ 1 ]._getAvailHeight() );
					_CTRLS.window1.dataObj.items[ 1 ].showInnerScroll();

					_CTRLS.window1.dataObj.items[ 1 ].setText( "Product Info" );

					var id = "chart-" + SUtilMath.getUnique();

					var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
					_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

					_ELS[ id ].style.width = "100%";
					_ELS[ id ].style.height = "400px";

					_ELS.CHART0.appendChild( _ELS[ id ] )

					var DATA = {
						HOST : t0.HOST
						, element : _ELS[ id ]
						, goodsId : value.value.goodsId
						, goodsName : value.value.goodsName
						, brandName : value.value.brandName
					};

					_CTRLS.CHART0 = window.SYS0037_UI_API.echarts.product_price_trend( DATA );
					_CTRLS.CHART0.resData.d.info[ 0 ].productInfo = window.SYS0037_UI_API.dhtmlx.product_price_trend_makeProductInfo( _CTRLS.CHART0.resData.d.info[ 0 ] );

					//차트선택시 그리드 데이터검색 이벤트;
					_CTRLS.CHART0.on('click',function (params) {

						if( params.componentType == "series" )
						{
							_CTRLS.fancygrid_2.search( params.name );
							_CTRLS.fancygrid_2.tbar[0].setValue( params.name );

							var data = _CTRLS.fancygrid_2.get( _CTRLS.fancygrid_2.find( "date" , params.name )[0] ).data;

							delete data.productInfo;
							data.productInfo = window.SYS0037_UI_API.dhtmlx.product_price_trend_makeProductInfo( data );

							var _template00 = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO;
							var layout01 = window.b2link.string.applyBrace( _template00, data );

							_CTRLS.window1.dataObj.items[ 1 ].progressOn();
							_CTRLS.window1.dataObj.items[ 1 ].detachObject(true)
							_CTRLS.window1.dataObj.items[ 1 ].attachHTMLString( layout01 );
							_CTRLS.window1.dataObj.items[ 1 ].progressOff();

						}
						return;
					});

					/*
					//echart event test;
					_CTRLS.CHART0.getZr().on( 'mouseover',function(param){console.log( param );console.log('mousedown');});
					_CTRLS.CHART0.getZr().on( 'mousemove',function(param){console.log( param );console.log('mousedown');});

					_CTRLS.CHART0.on('rendered', function() {debugger;});
					_CTRLS.CHART0.on('dataviewchanged', function() {debugger;});
					_CTRLS.CHART0.on('pieselected', function() {debugger;});
					_CTRLS.CHART0.on('mapselected', function() {debugger;});
					_CTRLS.CHART0.on('axisareaselected', function() {debugger;});
					_CTRLS.CHART0.on('focusnodeadjacency', function() {debugger;});
					_CTRLS.CHART0.on('unfocusnodeadjacency', function() {debugger;});
					_CTRLS.CHART0.on('globalCursorTaken', function() {debugger;});
					_CTRLS.CHART0.on('rendered', function() {debugger;});
					_CTRLS.CHART0.on('rendered', function() {debugger;});
					_CTRLS.CHART0.on('rendered', function() {debugger;});
					_CTRLS.CHART0.on('rendered', function() {debugger;});
					_CTRLS.CHART0.on('rendered', function() { debugger;	});
					_CTRLS.CHART0.on('rendered', function() { debugger;	});
					*/


					var _template00 = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO;
					var layout01 = window.b2link.string.applyBrace( _template00 , _CTRLS.CHART0.resData.d.info[ 0 ] );
					_CTRLS.window1.dataObj.items[ 1 ].attachHTMLString( layout01 );

					_CTRLS.window1.dataObj.items[ 0 ].progressOff();
					_CTRLS.window1.dataObj.items[ 1 ].progressOff();

					delete _CTRLS.CHART0.resData.d.info[ 0 ].productInfo;
					var columns = window.SYS0037_UI_API.fancygrid.render_product_list_thunail_price_trend.refine_data( _CTRLS.CHART0.resData );

					var DATA = {
						elementID : "product-info-grid"
						, title : "Product Price Trend List"
						, height : _CTRLS.window1.dataObj.items[ 0 ]._getAvailHeight() - _ELS.CHART0.offsetHeight
						, data : _CTRLS.CHART0.resData.d.info
						, columns : columns
					};

					_CTRLS.fancygrid_2 = window.SYS0037_UI_API.fancygrid.render_product_list_thunail_price_trend( DATA );

					_CTRLS.fancygrid_2.on( "celldblclick", function( grid, value ){

						var data = value.data;

						//Chart Event;
						var dataIndex = _CTRLS.CHART0.getOption().xAxis[ 0 ].data.indexOf( data.date );

						_CTRLS.CHART0.dispatchAction({type: 'downplay',seriesIndex: 0,dataIndex: dataIndex});
						_CTRLS.CHART0.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex:dataIndex});
						_CTRLS.CHART0.dispatchAction({type: 'showTip',seriesIndex: 0,dataIndex: dataIndex});

						//Layout Right Event;
						delete data.productInfo;
						data.productInfo = window.SYS0037_UI_API.dhtmlx.product_price_trend_makeProductInfo( data );

						var _template00 = window.SYS0037_UI_API.dhtmlx.CONST.TEMPLATE.PRODUCT_PRICE_TREND__PRODUCT_INFO;
						var layout01 = window.b2link.string.applyBrace( _template00, data );

						_CTRLS.window1.dataObj.items[ 1 ].progressOn();
						_CTRLS.window1.dataObj.items[ 1 ].detachObject(true)
						_CTRLS.window1.dataObj.items[ 1 ].attachHTMLString( layout01 );
						_CTRLS.window1.dataObj.items[ 1 ].progressOff();

						return;
					})

					_CTRLS.window1.grid = _CTRLS.fancygrid_2;
				})
			});

			_CTRLS.window0.grid = _CTRLS.fancygrid_1;
			_CTRLS.window0.grid.prevPage = _CTRLS.fancygrid_1.prevPage;
			_CTRLS.window0.grid.nextPage = _CTRLS.fancygrid_1.nextPage;
			_CTRLS.window0.grid.search_product = _el_btn_search__click;
			_CTRLS.window0.windowClose = _CTRLS.window0.windowClose;

			window.SYS0037_UI_API.spinner.hide();
		});
	})

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
//
//		_CTRLS.fancygrid_1.setWidth( _CTRLS.fancygrid_1.getWidth() - 5 );
//		_CTRLS.fancygrid_1.setHeight( tEL3.offsetHeight - _ELS.DIV_SEARCH_CONDITION.offsetHeight - 50 );
//	}

	if( _CTRLS.window0 )
	{
		_CTRLS.window0.setDimension( window.innerWidth, window.innerHeight );
		_CTRLS.window0.setPosition( 0, 0 );
	}

	_LIST_ECHARTS_.forEach( function( chart ){ chart.resize(); });
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

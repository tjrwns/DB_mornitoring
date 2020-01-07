//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/productInfoView.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
	, DIV_FANCYGRID_RIGHT : F0( window.document, "id-fancygrid-right" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//----------------------------------------------------------------------------------------------------;

//	DEFINE - FANCYGRID;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	  fancygrid_0 : null
	, fancyfrid_0_tbar : null
	, fancygrid_1 : null

};

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//상품 목록을 화살표 키로 조작;
//!!!!!!!!!!!!!!!!!!! - 어떤식으로 API로 추출할지.. 고민해봐야함;
_ELS.DIV_FANCYGRID_1.addEventListener( "keyup", function( e ){
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
	};
});

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show();

	_CTRLS.fancygrid_0 = window.SYS0037_UI_API.fancygrid.render_DB_And_Collection_grid__btn1( {
		elementID : "div-fancygrid-0"
		, width : 800
		, height : _ELS.DIV_ID_CONTAINER.offsetHeight
	});

	_CTRLS.fancygrid_0.on( "cellclick", function( g, o ){

		window.SYS0037_UI_API.fancygrid.event.click_btn_render_product_list_row( g, o , function( data ){

			if( !_CTRLS.fancygrid_1 )
			{
				var defaultCellHeight = 120;
				var _CELL_HEIGHT_RESOURCE_ = _ELS.DIV_ID_CONTAINER.offsetHeight - 149 - 20;
				var pageSize = Math.floor( _CELL_HEIGHT_RESOURCE_ / defaultCellHeight )
				var cellHeight = _CELL_HEIGHT_RESOURCE_ / pageSize;

				if( window.innerHeight < 947 )
				{
					var pageSize = 3;
					var cellHeight = _CELL_HEIGHT_RESOURCE_ / pageSize;
				}

				var DATA = {
					elementID : "div-fancygrid-1"
					, width : _ELS.DIV_ID_CONTAINER.offsetWidth - _CTRLS.fancygrid_0.getWidth() - 34
					, height : window.CURRENT_VIEW_UI_CTRL._CTRLS.fancygrid_0.getHeight()
					, data : data
					, cellHeight : cellHeight
					, pageSize : pageSize
					, imgCls : "imgFit"//o.data.HOST
				};

				_CTRLS.fancygrid_1 = window.SYS0037_UI_API.fancygrid.render_product_list_row( DATA );
			}
			else
			{
				//update;
				_CTRLS.fancygrid_1.setData( data );

				_CTRLS.fancygrid_1.columns[ 0 ].cls = o.data.HOST;
				_CTRLS.fancygrid_1.update();
			}

			reset_layout();

		})

	})

	//화면 레이아웃 재배치;
	reset_layout();

	window.SYS0037_UI_API.spinner.hide();

	return;
};


/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _MIN_WIDTH_ = 1270;

	//----------Target HTMLElement;
	var tEL0 = _ELS.DIV_ID_CONTAINER;
	var tEL1 = _ELS.DIV_FANCYGRID;
	//----------Target HTMLElement;

	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;

	tEL0.style.height = _HEIGHT_ + "px";
	tEL0.scrollTop = 0;

	var _HEIGHT0_;
	var _HEIGHT1_;

	var _WIDTH0_;
	var _WIDTH1_;

	if( window.innerWidth < _MIN_WIDTH_ )
	{
		tEL1.style.display = "table-caption";

		_WIDTH0_ = _WIDTH1_ = tEL0.offsetWidth - 34;

		_HEIGHT0_ = 300;
		_HEIGHT1_ = tEL0.offsetHeight - 22;
	}
	else
	{
		tEL1.style.display = "block";

		_WIDTH0_ = 800;
		_WIDTH1_ = tEL1.offsetWidth - _WIDTH0_ - 10;

		_HEIGHT0_ = _HEIGHT1_ = tEL0.offsetHeight - 22;
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
		_CTRLS.fancygrid_1.fitHeight();
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

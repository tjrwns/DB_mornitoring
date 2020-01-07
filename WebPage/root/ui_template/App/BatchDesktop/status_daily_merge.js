//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/status_daily_merge.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _ELS = {
	  CHART0 : F0( window.document, "id-echarts0" )
	, CHART1 : F0( window.document, "id-echarts1" )
	, CHART2 : F0( window.document, "id-echarts2" )
	, CHART3 : F0( window.document, "id-echarts3" )
	, CHART4 : F0( window.document, "id-echarts4" )
	, CHART5 : F0( window.document, "id-echarts5" )
	, CHART6 : F0( window.document, "id-echarts6" )
	, CHART7 : F0( window.document, "id-echarts7" )

	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )
	, DIV_CHART_CONTAINER : window.document.getElementById( 'id-div-chart-contents' )

	, HEADER_TOP : F0( window.document, "id-header-top" )
};

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

var CONTAINER_HEIGHT;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - ECHART;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {};

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show( "차트를 불러오는 중입니다." );

	setTimeout(function(){

		var SITES = [ "TAOBAO-DAILY", "KAOLA", "VIP", "LAZADA", "SHOPEE" ];
		var TARGET_YEARS = [ 2019, 2018 ];
		var FNS = [
			window.SYS0037_UI_API.echarts.status_daily_Async
			, window.SYS0037_UI_API.echarts.status_detail_Async
			, window.SYS0037_UI_API.echarts.status_diff_Async
			, window.SYS0037_UI_API.echarts.status_error_Async
		];

		var i = 0,idx = 0,iLen = SITES.length,io
		for(;i<iLen;++i){
			io = SITES[ i ];
			TARGET_YEARS.forEach(function(year){

				var id = "chart-" + SUtilMath.getUnique();

				var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
				_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );

				_ELS[ id ].style.width = "100%";
				_ELS[ id ].style.height = "400px";

				_ELS.DIV_CHART_CONTAINER.appendChild( _ELS[ id ] )

				var _t = { HOST : io, target_year : year, element : _ELS[ id ] }

				var fn = FNS[ 0 ];
				fn( _t,function(chart){

					_CTRLS[ chart.id ] = chart;
					_LIST_ECHARTS_.push( chart );

				});

				++idx;


			})
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );
};

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;
	_ELS.DIV_ID_CONTAINER.style.height = _HEIGHT_ + "px";
	_ELS.DIV_ID_CONTAINER.scrollTop = 0;

	_LIST_ECHARTS_.forEach( function( chart ){ chart.resize(); });
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
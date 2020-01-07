//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/sellCountByGoods_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var _XHR_ = new XMLHttpRequest();

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;
//*/
var DATA_MODE = "FILE";
/*/
var DATA_MODE = "DB";
//*/
var data_sum = {};

var _ELS = {
	AREA_CHARTS : F0( window.document, "area_charts" )

	, BTN_SEARCH : F0( window.document, "btn_search" )
	, INPUT_SEARCH : F0( window.document, "input_search" )

	, CHART0 : F0( window.document, "id-echarts0" )
//	, CHART1 : F0( window.document, "id-echarts1" )


	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( 'id-container' )
	, DIV_MSG : F0( window.document, "message" )
	, DIV_MSG_COL : F0( window.document, "id-msg-col" )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, SELECT_BRAND : F0( window.document, "select_brand" )
	, SELECT_PRODUCT : F0( window.document, "select_product" )
};

var loadSetting = {
	text : "loading"
	, effect : "spin"
	, textStyle : { fontSize : 40 }
};

//--------------------------------------------------;
var _URLS = {};
	//머지;
	_URLS.URL1 = window.b2link.url.getServerURL_WebServer_Self() + "/data-static?filePath=taobao/sellCount/merge/<!=PATH01=!>/<!=PATH02=!>";

	//수집;
	_URLS.URL2 = window.b2link.url.getServerURL_WebServer_Self() + "/data-static?filePath=taobao/sellCount/collected/<!=PATH01=!>/<!=PATH02=!>";

	//브랜드리스트;
	_URLS.URL3 = window.b2link.url.getServerURL_WebServer_Self() + "/data-static?filePath=brand/brand_list.json";

	//상품리스트;
	_URLS.URL4 = window.b2link.url.getServerURL_WebServer_Self() + "/data-static?filePath=product/product_list.json";

	//매핑리스트;
	_URLS.URL5 = window.b2link.url.getServerURL_WebServer_Self() + "/data-static?filePath=goods_list/goods_list__taobao.json";

//--------------------------------------------------;

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
var _N_SET_TIMEOUT_ = 100;
//----------;

//----------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - ECHART;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {};

//----------------------------------------------------------------------------------------------------;

//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
//	- Callback를 정의하는 곳이 아님.
//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
//	- Common Interface
//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

//----------------------------------------------------------------------------------------------------;

/**
 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
 * @function
 */
var _addEvent = function()
{
	_removeEvent();

	_ELS.BTN_SEARCH.addEventListener( "click", _evt_mClick__btn_search, false, 0, true );
	_ELS.INPUT_SEARCH.addEventListener( "keyup", _evt_keyup__input_search, false, 0, true );
	_ELS.SELECT_BRAND.addEventListener( "change", _evt_vChange__select_brand, false, 0, true );
	_ELS.SELECT_PRODUCT.addEventListener( "change", _evt_vChange__select_product, false, 0, true );
};

/**
 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
 * @function
 */
var _removeEvent = function()
{
	_ELS.BTN_SEARCH.removeEventListener( "click", _evt_mClick__btn_search, false );
	_ELS.INPUT_SEARCH.removeEventListener( "keyup", _evt_keyup__input_search, false );
	_ELS.SELECT_BRAND.removeEventListener( "change", _evt_vChange__select_brand, false );
	_ELS.SELECT_PRODUCT.removeEventListener( "change", _evt_vChange__select_product, false );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

/**
 * 상품 선택
 * @param {CustomEvent} e event
 */var _evt_vChange__select_product = function( e )
{
	window.HykLog.timeStamp( "-- [ S ] - _evt_vChange__select_product():void----------" );

	var cd$product_master = e.target.value;

	var _url = _URLS.URL5;
	console.log( _url );

	var result = JSON.parse( window.b2link.xhr.reqSync_String( _url ) );

	if( window.b2link.response.getResultStatus( result ) )
	{
		_ELS.INPUT_SEARCH.value = "";

		var i=0, iLen=result[ cd$product_master ].length;
		var io;
		for( ; i<iLen; ++i )
		{
			io = result[ cd$product_master ][ i ];

			if( i != 0 ) _ELS.INPUT_SEARCH.value += ",";
			_ELS.INPUT_SEARCH.value += io.goods_id;
		}
	}
	else
	{
		//결과가 없음;
	}


	window.HykLog.timeStamp( "-- [ E ] - _evt_vChange__select_product():void----------" );
};

/**
 * 브랜드 선택
 * @param {CustomEvent} e event
 */var _evt_vChange__select_brand = function( e )
{
	window.HykLog.timeStamp( "-- [ S ] - _evt_vChange__select_brand():void----------" );

	var _id$brand_basic = e.target.value;

	var _url = _URLS.URL4;
	console.log( _url );

	var result = JSON.parse( window.b2link.xhr.reqSync_String( _url ) );

	if( window.b2link.response.getResultStatus( result ) )
	{
		var i=1, iLen=_ELS.SELECT_PRODUCT.childElementCount;
		var io;
		for( ; i<iLen; ++i )
		{
			io = _ELS.SELECT_PRODUCT.children[ i ];
			io.remove();
		}

		var i=0, iLen=result[ _id$brand_basic ].length;
		var io;
		for( ; i<iLen; ++i )
		{
			io = result[ _id$brand_basic ][ i ];

			var option =document.createElement("option");
				option.value = io.cd$product_master;
				option.innerText = io.nm;

			_ELS.SELECT_PRODUCT.appendChild( option );
		}
	}
	else
	{
		//결과가 없음;
	}


	window.HykLog.timeStamp( "-- [ E ] - _evt_vChange__select_brand():void----------" );
};

/**
 * 검색버튼 클릭
 * @param {CustomEvent} e event
 */
var _evt_mClick__btn_search = function( e )
{
	window.HykLog.timeStamp( "-- [ S ] - _evt_mClick__btn_search():void----------" );

	if( _ELS.INPUT_SEARCH.value != "" ) _fn_reqData();

	window.HykLog.timeStamp( "-- [ E ] - _evt_mClick__btn_search():void----------" );
};

/**
 * input box 엔터키 입력
 * @param {CustomEvent} e event
 */
var _evt_keyup__input_search = function( e )
{
	window.HykLog.timeStamp( "-- [ S ] - _evt_keyup__input_search():void----------" );

	if( e.type != "keyup" || e.keyCode != 13 ) return;

	if( _ELS.INPUT_SEARCH.value != "" ) _fn_reqData();

	window.HykLog.timeStamp( "-- [ E ] - _evt_keyup__input_search():void----------" );
};
//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/**
 * 데이터 요청
 * @function
 */
var _fn_req_brand_list = function()
{
	window.HykLog.timeStamp( "---- [ S ] - _fn_req_brand_list():void----------" );

	var _url = _URLS.URL3;
	console.log( _url );

	var result = JSON.parse( window.b2link.xhr.reqSync_String( _url ) );

	if( window.b2link.response.getResultStatus( result ) )
	{
		var i=0, iLen=result.length;
		var io;
		for( ; i<iLen; ++i )
		{
			io = result[ i ];

			var option =document.createElement("option");
				option.value = io._id;
				option.innerText = io.nm;

			_ELS.SELECT_BRAND.appendChild( option );
		}
	}
	else
	{
		//결과가 없음;
	}

	window.HykLog.timeStamp( "---- [ E ] - _fn_req_brand_list():void----------" );
};

/**
 * 데이터 요청
 * @function
 */
var _fn_reqData = function()
{
	window.HykLog.timeStamp( "---- [ S ] - _fn_reqData():void----------" );

	var goods_ids = _ELS.INPUT_SEARCH.value.split(",");

	data_sum = {};
	_fn_removeChildAll( _ELS.AREA_CHARTS );
	_fn_createElement( goods_ids );
	_fn_drawCharts( goods_ids );

//	debugger;

	window.HykLog.timeStamp( "---- [ E ] - _fn_reqData():void----------" );
};

/**
 * 차트 그리기
 * @function
 * @param { Array } goods_ids
 */
var _fn_drawCharts = function( goods_ids )
{
	window.HykLog.timeStamp( "------ [ S ] - _fn_drawCharts():void----------" );

	var i=0,iLen=goods_ids.length;
	var goods_id;
	for( ; i<iLen; ++i )
	{
		goods_id = goods_ids[ i ].trim();
/*/
		var d  = { goods_id : goods_id, cbFunction : renderChart_01 };

		_URLS.URL1
		window.service_sellCount.goods_id.getSearchSellCount__goods_id[ DATA_MODE ]( d );//window.service_sellCount.goods_id.getSearchSellCount__goods_id.FILE;
//*/
		var _url = _URLS.URL1.replace( "<!=PATH01=!>", goods_id.substr( 0,2 ) ).replace( "<!=PATH02=!>", goods_id );
		console.log( _url );
//*///동기식;
		var result = JSON.parse( window.b2link.xhr.reqSync_String( _url ) );

		if( window.b2link.response.getResultStatus( result ) )
		{
			data_sum[ result._id ] = result;

		}
		else
		{
			//결과가 없음;
		}

		renderChart_01();
		renderChart_02();
		// reset_layout();
/*///비동기식;
		SUtilXMLHttpReqGetRef.req( _XHR_, _url, {
			onerror : function( e ){}
			, onloadend : function( e ){
				// console.log( e.target.responseText );

				var result = JSON.parse( e.target.responseText );

				if( window.b2link.response.getResultStatus( result ) )
				{
					data_sum[ result._id ] = result;

					renderChart_01();
					renderChart_02();
					//reset_layout();
				}
				else
				{
					//결과가 없음;
				}
			}
		});
//*/
	}

/*/
	if( !_fn_isOne( _ELS.INPUT_SEARCH.value ) )
	{

	}
//*/

	window.HykLog.timeStamp( "------ [ E ] - _fn_drawCharts():void----------" );
};

/**
 * 차트 영역 만들기
 * @function
 * @param { Array } goods_ids
 */
var _fn_createElement = function( goods_ids )
{
	window.HykLog.timeStamp( "------ [ S ] - _fn_createElement():void----------" );

	var i=0;
	for( ; i<2; ++i )
	{
		var div = document.createElement( "DIV" );
		div.classList.add( "id-echarts0" + ( i + 1 ) );
		div.style.height="500px";
		div.style.margin="20px auto";

		_ELS.AREA_CHARTS.appendChild( div );
	}

	window.HykLog.timeStamp( "------ [ E ] - _fn_createElement():void----------" );
};

/**
 * 자식 엘리먼트 모두 지우기
 * @function
 * @param { element } el
 */
var _fn_removeChildAll = function( el )
{
	window.HykLog.timeStamp( "------ [ S ] - _fn_removeChildAll():void----------" );

	var i=0, iLen=el.childElementCount;
	for( ; i<iLen; ++i )
	{
		el.lastElementChild.remove();
	}

	window.HykLog.timeStamp( "------ [ E ] - _fn_removeChildAll():void----------" );
};

/**
 * input box value 값의 goods_id가 단일값인지 검사 - 구분자 ","
 * @function
 * @param { String } d
 * @return { boolean }
 */
var _fn_isOne = function( d )
{
	window.HykLog.timeStamp( "------ [ S ] - _fn_isOne():void----------" );

	if( d.indexOf( "," ) != -1 ) return false;

	return true;

	window.HykLog.timeStamp( "------ [ E ] - _fn_isOne():void----------" );
};

/**
 * @function
 */
var _초기화면렌더링 = function()
{

	window.SYS0037_UI_API.spinner.show();

	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;

		_fn_req_brand_list();

		window.SYS0037_UI_API.spinner.hide();
	}, _N_SET_TIMEOUT_ );
};

/**
 * 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart_01 = function()
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart_01 - " );

	var legendList = [];
	var series = [];

	var el_target_chart = F0( _ELS.AREA_CHARTS, "id-echarts01" );
	var myChart = window.echarts.init( el_target_chart );
		myChart.showLoading( loadSetting );

	var obj = {};

	for( var s in data_sum )
	{
		legendList.push( s );

		var dates = [];
		var sellCounts = [];
		for( var k in data_sum[ s ].sellCountHistory )
		{
			dates.push( k );
			sellCounts.push( data_sum[ s ].sellCountHistory[ k ] );
		}

		series.push( {
            name : s,
            type : "bar" ,
            stack: s,
//            areaStyle: {} ,
            data : sellCounts
        } )
        renderChart_01.xAxis[ 0 ].data = dates;
	}

	option = {
		title : { text : renderChart_01.chartTitle, subtext : renderChart_01.chartSubTitle, x : renderChart_01.chartTitlePosition }
		, grid : renderChart_01.grid
		, dataZoom : renderChart_01.dataZoom
		, tooltip : renderChart_01.tooltip
		, toolbox : renderChart_01.toolbox
		, legend : { data : legendList, x : renderChart_01.legendPosition }
		, xAxis : renderChart_01.xAxis
		, yAxis : renderChart_01.yAxis
		, series : series
	};

	if( option && typeof option === "object" )
	{
		myChart.hideLoading();
		myChart.setOption( option, true );

		_LIST_ECHARTS_.push( myChart );
	}

	window.HykLog.timeStamp( "-- [ E ] - renderChart_01 - " );
};
renderChart_01.chartTitle = "Sell Count";
renderChart_01.chartSubTitle = "";
renderChart_01.chartTitlePosition = "center";
renderChart_01.legendPosition = "left";
renderChart_01.xAxis = [ { type : "category", data : [],  boundaryGap : false, axisPointer : { type : "shadow" } } ];
renderChart_01.yAxis = [ { type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'left', offset : 80 } ];
//renderChart_01.dataZoom = [ { type : "inside" }, { type : "slider" } ];
renderChart_01.dataZoom = [ { show: true, start: 0, end: 100 }, { type: 'inside', start: 0, end: 100 }, { show: true, yAxisIndex: 0, filterMode: 'empty', width: 30, height: '80%', showDataShadow: false, left: '93%' } ];
renderChart_01.toolbox = { feature : { dataView : { show : true, readOnly : false } , magicType : { show : true, type : [ "bar", "line" ]} , restore : { show : true } , saveAsImage : { show : true } } };
renderChart_01.tooltip = { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } };
renderChart_01.grid = { left : "10%", right : "10%" };

/**
 * 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart_02 = function()
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart_02 - " );

	var legendList = [];
	var series = [];

	var el_target_chart = F0( _ELS.AREA_CHARTS, "id-echarts02" );
	var myChart = window.echarts.init( el_target_chart );
		myChart.showLoading( loadSetting );

	var obj = {};

	var loop=0;
	var dates = [];
	var sellCounts = [];
	var o_sellCounts = {};
	for( var s in data_sum )
	{
		for( var k in data_sum[ s ].sellCountHistory )
		{
			if( !loop ) dates.push( k );

			o_sellCounts[ k ] = o_sellCounts[ k ] ? parseInt( o_sellCounts[ k ] ) : 0;
			o_sellCounts[ k ] += data_sum[ s ].sellCountHistory[ k ] ? parseInt( data_sum[ s ].sellCountHistory[ k ] ) : 0;
		}
		loop=1;
	}

	for( var s in o_sellCounts )
	{
		sellCounts.push( o_sellCounts[ s ] );
	}

	legendList.push( "SUM COUNT" );
	series.push( {
        name : "SUM COUNT",
        type : "bar" ,
        stack: "SUM COUNT",
        // areaStyle: {} ,
        data : sellCounts
    } )
    renderChart_02.xAxis[ 0 ].data = dates;


	option = {
		title : { text : renderChart_02.chartTitle, subtext : renderChart_02.chartSubTitle, x : renderChart_02.chartTitlePosition }
		, grid : renderChart_02.grid
		, dataZoom : renderChart_02.dataZoom
		, tooltip : renderChart_02.tooltip
		, toolbox : renderChart_02.toolbox
		, legend : { data : legendList, x : renderChart_02.legendPosition }
		, xAxis : renderChart_02.xAxis
		, yAxis : renderChart_02.yAxis
		, series : series
	};

	if( option && typeof option === "object" )
	{
		myChart.hideLoading();
		myChart.setOption( option, true );

		_LIST_ECHARTS_.push( myChart );
	}

	window.HykLog.timeStamp( "-- [ E ] - renderChart_02 - " );
};
renderChart_02.chartTitle = "TOTAL Count";
renderChart_02.chartSubTitle = "";
renderChart_02.chartTitlePosition = "center";
renderChart_02.legendPosition = "left";
renderChart_02.xAxis = [ { type : "category", data : [],  boundaryGap : false, axisPointer : { type : "shadow" } } ];
renderChart_02.yAxis = [ { type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'left', offset : 80 } ];
//renderChart_02.dataZoom = [ { type : "inside" }, { type : "slider" } ];
renderChart_02.dataZoom = [ { show: true, start: 0, end: 100 }, { type: 'inside', start: 0, end: 100 }, { show: true, yAxisIndex: 0, filterMode: 'empty', width: 30, height: '80%', showDataShadow: false, left: '93%' } ];
renderChart_02.toolbox = { feature : { dataView : { show : true, readOnly : false } , magicType : { show : true, type : [ "bar", "line" ]} , restore : { show : true } , saveAsImage : { show : true } } };
renderChart_02.tooltip = { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } };
renderChart_02.grid = { left : "10%", right : "10%" };

/**
 * 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart_03 = function()
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart_02 - " );

	var el_target_chart = F0( _ELS.AREA_CHARTS, "id-echarts02" );

	var myChart = window.echarts.init( el_target_chart );
		myChart.showLoading( loadSetting );

	var chartTitle = "Sell Count";
	var chartSubTitle = "";
	var chartTitlePosition = "center";
	var legendList = [ "Total" ];
	var legendPosition = "left";
	var series = [{
            name : "Total",
            type : "bar" ,
            stack: "1111" ,
            areaStyle: {} ,
            data : []
        }];
	var xAxis = [ { type : "category", data : [],  boundaryGap : false, axisPointer : { type : "shadow" } } ];
	var yAxis = [ { type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'left', offset : 80 } ];

	var obj = {};


	for( var s in data_sum )
	{
		var dates = [];
		var sellCounts = [];


		for( var k in data_sum[ s ].sellCountHistory )
		{
			dates.push( k );
			sellCounts.push( data_sum[ s ].sellCountHistory[ k ] );
		}

		series[ 0 ].data = sellCounts;
        xAxis[ 0 ].data = dates;
	}



	option = {
		title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
		, grid : { left : "10%", right : "10%" }
		// , dataZoom : [ { type : "inside" }, { type : "slider" } ]
		, dataZoom : [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				  dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "bar", "line" ]}
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : legendList, x : legendPosition }
		, xAxis : xAxis
		, yAxis : yAxis
		, series : series

	};

	if( option && typeof option === "object" )
	{
		myChart.hideLoading();
		myChart.setOption( option, true );

		_LIST_ECHARTS_.push( myChart );
	}

	window.HykLog.timeStamp( "-- [ E ] - renderChart_02 - " );
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

setWindowContainer__div_0__UI_Component_Panel();
_addEvent();

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

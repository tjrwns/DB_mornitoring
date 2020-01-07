//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/sellCountByGoods_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );

//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;
var F1 = window.b2link.element.getElementsByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

var _ELS = {
	  BTN_SEARCH : F0( window.document, "btn_search" )
	, INPUT_SEARCH : F0( window.document, "input_search" )
	, INPUT_RADIO : F1( window.document, "radio_group" )

	, AREA_CHARTS : F0( window.document, "area_charts" )

	, CHART0 : F0( window.document, "id-echarts0" )
	, CHART1 : F0( window.document, "id-echarts1" )


	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( "id-container" )
	, DIV_MSG : F0( window.document, "message" )
	, DIV_MSG_COL : F0( window.document, "id-msg-col" )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, SELECT_BRAND : F0( window.document, "select_brand" )
	, SELECT_PRODUCT : F0( window.document, "select_product" )
};

//--------------------------------------------------;

var _CHARTS = {
	  CHART_LIST : []

	, EACH_CHART : []
	, MULTI_CHART : null
	, TOTAL_CHART : null

	, CONFIG : {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	}
};

//--------------------------------------------------;

var _XHR_ = new XMLHttpRequest();

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
			io = _ELS.SELECT_PRODUCT.children[ 0 ];
			io.remove();
		}

		var i=0, iLen=result[ _id$brand_basic ].length;
		var io;
		for( ; i<iLen; ++i )
		{
			io = result[ _id$brand_basic ][ i ];

			var option = window.document.createElement ("option" );
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

			var option = window.document.createElement( "option" );
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

	if( _fn_reqData.bRequest ){
		window.console.log( "데이터 요청 중입니다." );
		return;
	}
	else _fn_reqData.bRequest = true;

	var goods_ids = _ELS.INPUT_SEARCH.value.split( "," );

	//----------차트 및 차트 데이터 초기화;
	//1회 조회 요청시 요청되는 모든 goods_id 데이터를 모아 놓은 구조체;
	//조회 요청마다 초기화 된다.;
	_fn_reqData.I.ALL_DATAS = {};

	_CHARTS.EACH_CHART.length = 0;
	_CHARTS.MULTI_CHART.clear();
	_CHARTS.TOTAL_CHART.clear();

	renderChart__MultiChart.option.legend.data.length = 0;
	renderChart__MultiChart.option.series.length = 0;
	renderChart__TotalChart.option.legend.data.length = 0;
	renderChart__TotalChart.option.series.length = 0;
	//----------차트 및 차트 데이터 초기화;

	//----------EACH 차트 element 초기화;
	var i=2, iLen=_ELS.AREA_CHARTS.childElementCount;
	for( ; i<iLen; ++i )
	{
		_ELS.AREA_CHARTS.lastElementChild.remove();
	}
	//----------EACH 차트 element 초기화;



	_fn_reqData.I.a = goods_ids;
	_fn_reqData.I.i = 0;
	_fn_reqData.I.io = null;
	_fn_reqData.I.iLen = _fn_reqData.I.a.length;

	_fn_reqData.FN_I();

	window.HykLog.timeStamp( "---- [ E ] - _fn_reqData():void----------" );
};
_fn_reqData.bRequest = false;
_fn_reqData.I = {
	i : 0
	, iLen : 0
	, io : null//goods_id;
	, a : null//goods_ids;

	//1회 조회 요청시 요청되는 모든 goods_id 데이터를 모아 놓은 구조체;
	//조회 요청마다 초기화 된다.;
	, ALL_DATAS : {}
};
_fn_reqData.FN_I = function(){
	var t = _fn_reqData.I;
	if( t.i == t.iLen )
	{
		window.console.log( "[ COMPLETE ] - I" );

		_fn_reqData.bRequest = false;

		//_CHARTS.TOTAL_CHART 그리기;

		return;
	}

	//goods_id;
	t.io = t.a[ t.i ];

	//데이터 요청할 URL 생성;
	var _url = _URLS.URL1.replace( "<!=PATH01=!>", t.io.substr( 0, 2 ) ).replace( "<!=PATH02=!>", t.io );

	//데이터 요청 - XHR;
	SUtilXMLHttpReqGetRef.req( _XHR_, _url, {
	//SUtilXMLHttpReqGet.req( _url, {

		//에러 발생시 처리;
		onerror : function( e ){
			debugger;
		}

		//데이터 정상적으로 받은 후 처리;
		, onloadend : function( e ){
			var resultJSON = JSON.parse( e.target.responseText );

			//1회 요청에 해당하는 전체 데이터 모음 구조체;
			t.ALL_DATAS[ resultJSON._id ] = resultJSON;

//			//_CHARTS.MULTI_CHART 초기 생성;
//			if( 0 == t.i )
//			{
//				renderChart__MultiChart( resultJSON );
//			}
//			//_CHARTS.MULTI_CHART에 시리즈 데이터 추가;
//			else
//			{
//				renderChart__MultiChart( resultJSON );
//			}

// debugger;
			if( _ELS.INPUT_RADIO[ 0 ].checked )
			{
				_ELS.CHART0.style.display = "";

				//기본형;
				renderChart__MultiChart( resultJSON );
			}
			else
			{
				_ELS.CHART0.style.display = "none";

				var div = document.createElement( "DIV" );
				div.classList.add( "id-echarts" + ( t.i + 2 ) );
				div.style.height="500px";
				div.style.margin="20px auto";

				_ELS.AREA_CHARTS.appendChild( div );

				_CHARTS.EACH_CHART[ t.i ] = window.echarts.init( div );
				_CHARTS.CHART_LIST.push( _CHARTS.EACH_CHART[ t.i ] );

				//개별형;
				renderChart__EachChart( resultJSON );
			}


			//마지막 요청한 데이터를 받은 후 처리;
			if( t.i == t.iLen-1 ){
				_fn_reqData.bRequest = false;

				window.console.log( "[ COMPLETE ] - I" );

				renderChart__TotalChart( t.ALL_DATAS );
				return;
			}

			++t.i;
			setTimeout( _fn_reqData.FN_I, 1 );
		}
	});
};

/**
 * @function
 */
var _초기화면렌더링 = function()
{
	window.SYS0037_UI_API.spinner.show();

	//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;
	setTimeout( function(){

		//브랜드 선택 콤보박스 데이터 가져오기;
		_fn_req_brand_list();

		//----------;
		_CHARTS.MULTI_CHART = window.echarts.init( _ELS.CHART0 );
		// _CHARTS.MULTI_CHART.showLoading( _CHARTS.CONFIG );

		_CHARTS.TOTAL_CHART = window.echarts.init( _ELS.CHART1 );
		// _CHARTS.TOTAL_CHART.showLoading( _CHARTS.CONFIG );

		_CHARTS.CHART_LIST.push( _CHARTS.MULTI_CHART );
		_CHARTS.CHART_LIST.push( _CHARTS.TOTAL_CHART );
		//----------;

		window.SYS0037_UI_API.spinner.hide();

	}, _N_SET_TIMEOUT_ );
};

/**
 * EACH 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart__EachChart = function( data )
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart__EachChart - " );

	var t = renderChart__EachChart.option;
		t.legend.data.length = 0;
		t.series.length = 0;
		t.legend.data.push( data._id );
		t.title.text = data._id + " - Sell Count";


	var dates = [];
	var sellCounts = [];
	for( var s in data.sellCountHistory )
	{
		dates.push( s );
		sellCounts.push( data.sellCountHistory[ s ] );
	}
	var opt = _CHARTS.EACH_CHART[ _fn_reqData.I.i ].getOption();

	t.xAxis[ 0 ].data = dates;
	t.series.push({ name : data._id, type : "bar", stack : data._id
		//, areaStyle: {}
		, data : sellCounts
	});

	_CHARTS.EACH_CHART[ _fn_reqData.I.i ].hideLoading();
	_CHARTS.EACH_CHART[ _fn_reqData.I.i ].setOption( t, false, true );

	window.HykLog.timeStamp( "-- [ E ] - renderChart__EachChart - " );
};
renderChart__EachChart.option = {

	dataZoom : [
		  { show: true, start: 0, end: 100 }, { type: "inside", start: 0, end: 100 }
		, { show: true, yAxisIndex: 0, filterMode: "empty", width: 30, height: "80%", showDataShadow: false, left: "93%" }
	]

	, grid : { left : "10%", right : "10%" }

	, legend : {
		data : []

		//legendPosition;
		, x : "left"
	}

	, series : []

	, title : { text : "Sell Count", subtext : "", x : "center" }

	, toolbox : { feature : { dataView : { show : true, readOnly : false }, magicType : { show : true, type : [ "bar", "line" ]}, restore : { show : true }, saveAsImage : { show : true } } }
	, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }

	, xAxis : [
		{
			type : "category"

			, data : []

			, boundaryGap : false
			, axisPointer : { type : "shadow" }
		}
	]
	, yAxis : [
		{
			type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: "left", offset : 80
		}
	]
};

/**
 * Multi 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart__MultiChart = function( data )
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart__MultiChart - " );

	var t = renderChart__MultiChart.option;
		t.legend.data.push( data._id );


	var dates = [];
	var sellCounts = [];
	for( var s in data.sellCountHistory )
	{
		dates.push( s );
		sellCounts.push( data.sellCountHistory[ s ] );
	}
	var opt = _CHARTS.MULTI_CHART.getOption();

	t.xAxis[ 0 ].data = dates;
	t.series.push({ name : data._id, type : "line", stack : data._id
		//, areaStyle: {}
		, data : sellCounts
	});

	if( _fn_reqData.I.i == _fn_reqData.I.iLen-1 )
	{
		_CHARTS.MULTI_CHART.hideLoading();
		_CHARTS.MULTI_CHART.setOption( t, false, true );
	}

//	if( !opt )
//	{
//		t.xAxis[ 0 ].data = dates;
//		t.series.push({ name : data._id, type : "bar", stack : data._id
//			//, areaStyle: {}
//			, data : sellCounts
//		});
//
//		_CHARTS.MULTI_CHART.hideLoading();
//		_CHARTS.MULTI_CHART.setOption( t, false, true );
//	}
//	else
//	{
//		//opt.xAxis[ 0 ].data = dates;
//		/*/
//		opt.series.push({ name : data._id, type : "bar", stack : data._id
//			//, areaStyle: {}
//			, data : sellCounts
//		});
//		/*/
//		_CHARTS.MULTI_CHART.appendData({
//			seriesIndex : 0
//			, name : data._id, type : "bar", stack : data._id
//			//, areaStyle: {}
//			, data : sellCounts
//		})
//		//*/
//	}

	window.HykLog.timeStamp( "-- [ E ] - renderChart__MultiChart - " );
};
renderChart__MultiChart.option = {

	dataZoom : [
		  { show: true, start: 0, end: 100 }, { type: "inside", start: 0, end: 100 }
		, { show: true, yAxisIndex: 0, filterMode: "empty", width: 30, height: "80%", showDataShadow: false, left: "93%" }
	]

	, grid : { left : "10%", right : "10%" }

	, legend : {
		data : []

		//legendPosition;
		, x : "left"
	}

	, series : []

	, title : { text : "Sell Count", subtext : "", x : "center" }

	, toolbox : { feature : { dataView : { show : true, readOnly : false }, magicType : { show : true, type : [ "bar", "line" ]}, restore : { show : true }, saveAsImage : { show : true } } }
	, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }

	, xAxis : [
		{
			type : "category"

			, data : []

			, boundaryGap : false
			, axisPointer : { type : "shadow" }
		}
	]
	, yAxis : [
		{
			type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: "left", offset : 80
		}
	]
};

/**
 * Total 차트 그리기
 * @function
 * @return {ECharts}
 */
var renderChart__TotalChart = function( data )
{
	window.HykLog.timeStamp( "-- [ S ] - renderChart__TotalChart - " );

	var s_legend = "Total Count";
	var t = renderChart__TotalChart.option;
		t.legend.data.push( s_legend );


	var dates = [];
	var sellCounts = [];
	var o_sellCounts = {};
	var boolean=0;
	for( var goods_id in data )
	{
		for( var s in data[ goods_id ].sellCountHistory )
		{
			if( !boolean ) dates.push( s );

			o_sellCounts[ s ] = o_sellCounts[ s ] ? parseInt( o_sellCounts[ s ] ) : 0;
			o_sellCounts[ s ] += data[ goods_id ].sellCountHistory[ s ] ? parseInt( data[ goods_id ].sellCountHistory[ s ] ) : 0;
		}
		boolean=1;
	}

	for( var s in o_sellCounts )
	{
		sellCounts.push( o_sellCounts[ s ] );
	}

	var opt = _CHARTS.TOTAL_CHART.getOption();

	t.xAxis[ 0 ].data = dates;
	t.series.push({ name : s_legend, type : "bar", stack : s_legend
		//, areaStyle: {}
		, data : sellCounts
	});

	if( _fn_reqData.I.i == _fn_reqData.I.iLen-1 )
	{
		_CHARTS.TOTAL_CHART.hideLoading();
		_CHARTS.TOTAL_CHART.setOption( t, false, true );
	}

//	if( !opt )
//	{
//		t.xAxis[ 0 ].data = dates;
//		t.series.push({ name : s_legend, type : "bar", stack : s_legend
//			//, areaStyle: {}
//			, data : sellCounts
//		});
//
//		_CHARTS.TOTAL_CHART.hideLoading();
//		_CHARTS.TOTAL_CHART.setOption( t, false, true );
//	}
//	else
//	{
//		//opt.xAxis[ 0 ].data = dates;
//		/*/
//		opt.series.push({ name : s_legend, type : "bar", stack : s_legend
//			//, areaStyle: {}
//			, data : sellCounts
//		});
//		/*/
//		_CHARTS.TOTAL_CHART.appendData({
//			seriesIndex : 0
//			, name : s_legend, type : "bar", stack : s_legend
//			//, areaStyle: {}
//			, data : sellCounts
//		})
//		//*/
//	}

	window.HykLog.timeStamp( "-- [ E ] - renderChart__TotalChart - " );
};
renderChart__TotalChart.option = {

	dataZoom : [
		  { show: true, start: 0, end: 100 }, { type: "inside", start: 0, end: 100 }
		, { show: true, yAxisIndex: 0, filterMode: "empty", width: 30, height: "80%", showDataShadow: false, left: "93%" }
	]

	, grid : { left : "10%", right : "10%" }

	, legend : {
		data : []

		//legendPosition;
		, x : "left"
	}

	, series : []

	, title : { text : "Total Count", subtext : "", x : "center" }

	, toolbox : { feature : { dataView : { show : true, readOnly : false }, magicType : { show : true, type : [ "bar", "line" ]}, restore : { show : true }, saveAsImage : { show : true } } }
	, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }

	, xAxis : [
		{
			type : "category"

			, data : []

			, boundaryGap : false
			, axisPointer : { type : "shadow" }
		}
	]
	, yAxis : [
		{
			type : "value", name : "sell_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: "left", offset : 80
		}
	]
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

	_CHARTS.CHART_LIST.forEach( function( chart ){ chart.resize(); });
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

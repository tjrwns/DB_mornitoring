//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/stats_all.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;
/**
 * Element List
 * @property {Object}
 */
var _ELS = {

	CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( 'id-container' )

	, DIV_CHART_CONTAINER : window.document.getElementById( 'id-div-chart-contents' )

	, DIV_MSG : F0( window.document, "message" )
	, DIV_MSG_COL : F0( window.document, "id-msg-col" )

	, DIV_DATA_GRID : F0( window.document, "id-data-grid" )

	, HEADER_TOP : F0( window.document, "id-header-top" )

	, CHART_ELS : []

	, BTN_CHART_SCROLL : F0( window.document, "id-btn-chart-scroll-toggle" )
	, P_MODAL_MESSAGE : F0( window.document, "modal-message" )
};

var lnb_toggle;
//----------------------------------------------------------------------------------------------------;

/**
 * Echarts Controller List
 * @property {Array}
 */
var _LIST_ECHARTS_ = [];

//----------;


//----------------------------------------------------------------------------------------------------;

//	DEFINE - ECHART;

//----------------------------------------------------------------------------------------------------;
/**
 * Controller List
 * @property {Object}
 */
var _CTRLS = {};


var DATA_GRID_TEMPLATE = '<div class="id-data-grid-{{id}}" style="width:100%;">'

+ '</div>'
//----------------------------------------------------------------------------------------------------;

//	EVENT;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

/*
 *현재시간을 Array로 반환하는 함수;
 *@function
 *@param {Object} date //Date타입;
 *@return {Array}
 <code>
	[ "2019","01","01" ]
 </code>
 */
var getDateToArray = function( date ){
	var a = date || new Date();
	var yyyy = a.getFullYear();
	var mm = a.getMonth();
	var dd = a.getDate();
	var r = [
		yyyy.toString(),
		mm.toString().length < 2 ? "0" + mm : mm.toString()
		, dd.toString().length < 2 ? "0" + dd : dd.toString()
	]
	return r;
};

/**
 * @function
 */
var _초기화면렌더링 = function()
{

	//차트노출공간 확보를 위해 메뉴를 접는다;
	lnb_toggle();

	window.SYS0037_UI_API.spinner.show( "차트를 불러오고 있습니다." );

	setTimeout( function(){

		var SITES = [ "TAOBAO-DAILY", "KAOLA", "VIP", "LAZADA", "SHOPEE" ];

		var FNS = [
			window.SYS0037_UI_API.echarts.status_daily_Async
			, window.SYS0037_UI_API.echarts.status_detail_Async
			, window.SYS0037_UI_API.echarts.status_diff_Async
			, window.SYS0037_UI_API.echarts.status_error_Async
			//, window.SYS0037_UI_API.echarts.status_sellcount_Async
			, window.SYS0037_UI_API.echarts.merge_brand_by_keyword_Async
		];

		var chartHeight = _ELS.DIV_ID_CONTAINER.offsetHeight;
		var gridHeight = 300;

		//--------------------------------------------------:
		var id = "chart-" + SUtilMath.getUnique();

		var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
		_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );
		_ELS[ "data_gird_" + id ] = window.b2link.html.createHTMLElement( DATA_GRID_TEMPLATE.replace("{{id}}", id ) );

		_ELS.CHART_ELS.push( _ELS[ id ] );

		_ELS[ id ].style.width = "100%";
		_ELS[ id ].style.height = ( chartHeight - gridHeight  ) + "px";
		_ELS[ id ].style.paddingTop = "20px"
		_ELS[ id ].style.paddingBottom = "20px"

		_ELS[ "data_gird_" + id ].style.width = "100%";
		_ELS[ "data_gird_" + id ].style.height = gridHeight + "px";
		_ELS[ "data_gird_" + id ].style.paddingTop = "20px"
		_ELS[ "data_gird_" + id ].style.paddingBottom = "20px"
		_ELS[ "data_gird_" + id ].style.paddingLeft = "10%"
		_ELS[ "data_gird_" + id ].style.paddingRight = "10%"


		_ELS.DIV_CHART_CONTAINER.appendChild( _ELS[ id ] )
		_ELS.DIV_CHART_CONTAINER.appendChild( _ELS[ "data_gird_" + id ] )

		var _t = { HOST : "TAOBAO-DAILY", target_year : 2019, element : _ELS[ id ] }

		window.SYS0037_UI_API.echarts.status_sellcount_Async( _t,function(chart){
			_CTRLS[ chart.id ] = chart;

			var a = window.b2link.html.createHTMLElement( makeDataGrid00( chart.getOption() ) );
			_ELS[ "data_gird_" + chart.getDom().className ].appendChild( a )

			_LIST_ECHARTS_.push( chart );
			++idx;
		});
		//--------------------------------------------------:

		var i = 0,idx = 0,iLen = SITES.length,io
		for(;i<iLen;++i){
			io = SITES[ i ];
			var j = 0,jLen = FNS.length,jo;
			for( ;j<jLen;++j){

				if( j == 4  && io != "VIP" ) continue;

				var id = "chart-" + SUtilMath.getUnique();

				var html_chart_div = window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART;
				_ELS[ id ] = window.b2link.html.createHTMLElement( html_chart_div.replace("{{id}}", id ) );
				_ELS[ "data_gird_" + id ] = window.b2link.html.createHTMLElement( DATA_GRID_TEMPLATE.replace("{{id}}", id ) );

				_ELS.CHART_ELS.push( _ELS[ id ] );

				_ELS[ id ].style.width = "100%";
				_ELS[ id ].style.height = ( chartHeight - gridHeight  ) + "px";
				_ELS[ id ].style.paddingTop = "20px"
				_ELS[ id ].style.paddingBottom = "20px"

				_ELS[ "data_gird_" + id ].style.width = "100%";
				_ELS[ "data_gird_" + id ].style.height = gridHeight + "px";
				_ELS[ "data_gird_" + id ].style.paddingTop = "20px"
				_ELS[ "data_gird_" + id ].style.paddingBottom = "20px"
				_ELS[ "data_gird_" + id ].style.paddingLeft = "10%"
				_ELS[ "data_gird_" + id ].style.paddingRight = "10%"

				_ELS.DIV_CHART_CONTAINER.appendChild( _ELS[ id ] )
				_ELS.DIV_CHART_CONTAINER.appendChild( _ELS[ "data_gird_" + id ] )

				var _t = { HOST : io, target_year : 2019, element : _ELS[ id ] }

				var fn = FNS[ j ];

				if( j == 4 && io == "VIP" )
				{
					_t.DB = "VIP_" + getDateToArray()[0];
					_t.COL = null;//getDateToArray().join("");

					_ELS[ id ].style.height = ( chartHeight * 0.5 ) + "px";
					_ELS[ "data_gird_" + id ].style.height = ( chartHeight * 0.5 ) + "px";
					_ELS[ "data_gird_" + id ].style.paddingLeft = "5%"
					_ELS[ "data_gird_" + id ].style.paddingRight = "5%"

					fn( _t,function(chart){

						var a = window.b2link.html.createHTMLElement( makeDataGrid01( chart.getOption() ) );
						_ELS[ "data_gird_" + chart.getDom().className ].appendChild( a )

						_CTRLS[ chart.id ] = chart;
						_LIST_ECHARTS_.push( chart );
						++idx;
						if( _ELS.CHART_ELS.length == idx )
						{
							move_chart();
						}

					});
				}
				else
				{
					fn( _t,function(chart){

						var a = window.b2link.html.createHTMLElement( makeDataGrid00( chart.getOption() ) );
						_ELS[ "data_gird_" + chart.getDom().className ].appendChild( a )

						_CTRLS[ chart.id ] = chart;
						_LIST_ECHARTS_.push( chart );
						++idx;
						if( _ELS.CHART_ELS.length == idx )
						{
							move_chart();
						}

					});
				}
			}
		}

		window.SYS0037_UI_API.spinner.hide();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

};

//var reload = function(){
//
//	move_chart.moveStop();
//
//	move_chart()
//
//}

/*
 * chart의 옵션을 전달받아 테이블을 그린다.
 */
var makeDataGrid00 = function( obj ){

	var xt = [ "date" ];

	var o = {};

	var o_date = obj.xAxis[ 0 ].data;
	var dates = o_date.slice( o_date.length - 7, o_date.length );

	var i = 0,iLen = obj.series.length,io
	for(;i<iLen;++i){
		io = obj.series[ i ];
		xt.push( io.name )
		o[ io.name ] = io.data.slice( io.data.length - 7, io.data.length )
	}

	var r = '<table class="ui very compact celled fixed table ">'
	r += '<thead><tr>'

	var i = 0,iLen = xt.length,io
	for(;i<iLen;++i){
		io = xt[ i ];
		r += '<th style="background-color:#ddd;word-break: break-all;">' + io + '</th>'
	}

	r += '</tr><thead><tbody>'

	var i = 0,iLen = 7,io;
	for(;i<iLen;++i){
		r += '<tr>'
		r += '<td style="background-color:#eee;word-break: break-all;">' + dates[ i ] + '</td>';

		var s,so;
		for( s in o ){
			so = o[ s ]
			r += '<td style="word-break: break-all;">' + so[ i ] + '</td>';
		}
		r += '</tr>'
	}
	r += '</tbody>';

	r += '</table>';

	return r;
}

/*
 * chart의 옵션을 전달받아 테이블을 그린다.
 */
var makeDataGrid01 = function( obj ){

	var o = {};

	var r = '<div class="ui ten stackable cards">';

	var o_date = obj.xAxis[ 0 ].data;
	var i = 0,iLen = obj.series.length,io
	for(;i<iLen;++i){
		io = obj.series[ i ];
		o[ io.name ] = io.data;
	}

	var i = 0,iLen = o_date.length,io
	for(;i<iLen;++i){
		var _checkError = 0;

		io = o_date[ i ];

		var data = { keyword : io, data : "", trend : "" };

		var s,so,prvCnt,curCnt,_bYesterDay = 1;
		for( s in o ){
			so = o[ s ];
			if( !so[ i ] ) ++_checkError;
			if( _bYesterDay )
			{
				prvCnt = so[ i ];
				_bYesterDay = 0
			}
			else
			{
				curCnt = so[ i ];
				var _t_Cnt = curCnt - prvCnt
				//0
				//-
				//+
				var trend;
				if( _t_Cnt == 0 ) data.trend = '<span style="color: #ccc;float: right;"> - </span>';
				if( _t_Cnt < 0 ) data.trend = '<span style="color: #004eff;float: right;">▼ ' +  ( _t_Cnt * -1 ) + '</span>';
				if( _t_Cnt > 0 ) data.trend = '<span style="color: #ff0000;float: right;">▲ ' + _t_Cnt + '</span>';
			}

			data.data += s + " - " + so[ i ] + "</br>";
		}
		r += makeDataGrid01.cardStyleFNS[ _checkError ]( data );
	}

	r += '</div>';

	return r
}

makeDataGrid01.cardStyleFNS = [
	function( data ){
		var r;
		r = makeDataGrid01.cardTemplate.replace("{{backgroundColor}}","")
				.replace("{{keyword}}", data.keyword )
				.replace("{{data}}", data.data )
				.replace("{{trend}}", data.trend )
				.replace(/{{color}}/gi,"");
		return r;
	}
	, function( data ){
		var r;
		r = makeDataGrid01.cardTemplate.replace("{{backgroundColor}}","background-color: #ff5722;")
				.replace("{{keyword}}", data.keyword )
				.replace("{{data}}", data.data )
				.replace("{{trend}}", data.trend )
				.replace(/{{color}}/gi,"color: #fff;");
		return r;
	}
	, function( data ){
		var r;
		r = makeDataGrid01.cardTemplate.replace("{{backgroundColor}}","background-color: #ff0000;")
				.replace("{{keyword}}", data.keyword )
				.replace("{{data}}", data.data )
				.replace("{{trend}}", data.trend )
				.replace(/{{color}}/gi,"color: #fff;");
		return r;
	}
];

makeDataGrid01.cardTemplate = '<div class="card" style="{{backgroundColor}}"><div class="content">'
		+ '<div class="header" style="font-size:12px;{{color}}">{{keyword}} &nbsp;&nbsp;{{trend}}  </div>'
		+ '<div class="description" style="{{color}}">{{data}}</div>'
		+ '</div></div>';

/**
 * 화면 레이아웃 재배치
 * @function
 */
var reset_layout = function()
{
	var _HEIGHT_ = window.innerHeight - _ELS.CONTENT_HEADER.offsetHeight - _ELS.CONTENT_FOOTER.offsetHeight - _ELS.HEADER_TOP.offsetHeight;

	_ELS.DIV_ID_CONTAINER.style.height = _HEIGHT_ + "px";
	_ELS.DIV_ID_CONTAINER.scrollTop = 0;

	_LIST_ECHARTS_.forEach( function( chart ){
		chart.resize();
	});
};

/**
 *setInterval로 차트의 위치를 이동한다.
 *@function
 */
var move_chart = function(){

	if( move_chart.bStop ) return;
	var cnt_chart = _ELS.CHART_ELS.length;
	if( cnt_chart > _LIST_ECHARTS_.length ) return move_chart();
	if( move_chart.idx == cnt_chart - 1 ) move_chart.idx = 0;

	_ELS.CHART_ELS[ move_chart.idx ].scrollIntoView({ behavior: 'smooth' });

	setTimeout(function(){
		++move_chart.idx;
		move_chart();
	}, 10000 );
}

move_chart.idx = 0;
move_chart.bStop = 0;
move_chart.moveStop = function(){ move_chart.bStop = 1; };

_ELS.BTN_CHART_SCROLL.addEventListener("click",function( e ){
	var t = e.target;

	if( move_chart.bStop == 1 )
	{
		_ELS.P_MODAL_MESSAGE.innerText = "자동스크롤기능을 활성화 합니다.";
		$('.ui.basic.modal').modal({
			closable  : false,
//			onDeny    : function(){
//				window.alert('Wait not yet!');
//				return false;
//			},
			onApprove : function(){
				move_chart.bStop = 0;
				move_chart();
				t.classList.remove("green");
				t.classList.add("red");
				t.innerText = "자동스크롤 정지"

			}
		  }).modal('show');
		return;
	}

	if( move_chart.bStop == 0 )
	{
		_ELS.P_MODAL_MESSAGE.innerText = "자동스크롤기능을 비활성화 됩니다.";
		$('.ui.basic.modal').modal({
			closable  : false,
//			onDeny    : function(){
//				window.alert('Wait not yet!');
//				return false;
//			},
			onApprove : function(){
				move_chart.moveStop();
				t.classList.remove("red");
				t.classList.add("green");
				t.innerText = "자동스크롤 실행";
			}
		  }).modal('show');
		return;
	}

});

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
			lnb_toggle = data.lnb_toggle;
			_초기화면렌더링();
		};

		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

	return _;

})();

//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/stats_all.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

//----------------------------------------------------------------------------------------------------;

window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );

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
	, CHART8 : F0( window.document, "id-echarts8" )
	, CHART9 : F0( window.document, "id-echarts9" )
	, CHART10 : F0( window.document, "id-echarts10" )
	, CHART11 : F0( window.document, "id-echarts11" )
	, CHART12 : F0( window.document, "id-echarts12" )
	, CHART13 : F0( window.document, "id-echarts13" )
	, CHART14 : F0( window.document, "id-echarts14" )
	, CHART15 : F0( window.document, "id-echarts15" )
	, CHART16 : F0( window.document, "id-echarts16" )
	, CHART17 : F0( window.document, "id-echarts17" )
	, CHART18 : F0( window.document, "id-echarts18" )
	, CHART19 : F0( window.document, "id-echarts19" )


	, CONTENT_HEADER : F0( window.document, "id-header-content" )
	, CONTENT_FOOTER : F0( window.document, "id-footer" )

	, DIV_ID_CONTAINER : window.document.getElementById( 'id-container' )
	, DIV_MSG : F0( window.document, "message" )
	, DIV_MSG_COL : F0( window.document, "id-msg-col" )
	, DIV_MERGE_LIST : F0( window.document, "id-div-merge-list" )

	, DIV_DB_LIST  : F0( window.document, "id-div-db_list" )
	, HEADER_TOP : F0( window.document, "id-header-top" )
};

//--------------------------------------------------;
var _URLS = {};

	//;
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기?data=<!=DATA=!>";

	//;
	_URLS.URL1 = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDailyByShop?code_db=<!=CODE_DB=!>&nm_site=<!=NM_SITE=!>";

	//;
	_URLS.URL2 = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDetailByShop?code_db=<!=CODE_DB=!>&nm_site=<!=NM_SITE=!>";

	//;
	_URLS.URL3 = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDailyInfoToYearByShop?code_db=<!=CODE_DB=!>&targetYear=<!=YEAR_TARGET=!>";

	//;
	_URLS.URL4 = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDiffInfoByShop?code_db=<!=CODE_DB=!>&nm_site=<!=NM_SITE=!>&target_year=<!=YEAR_TARGET=!>";

	//;
	_URLS.URL5 = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getERRORInfoToYearByShop?code_db=<!=CODE_DB=!>&targetYear=<!=YEAR_TARGET=!>";
//--------------------------------------------------;

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
var _N_SET_TIMEOUT_ = 100;
//----------;
/**
 * 여러 차트 로딩시 전부 로딩 완료 되었는지 체크 하기 위한 변수
 * @property {uint}
 */
var COUNT_LOADED_CHART = 0;
var COUNT_LOADED_CHART_MAX = 4;
//----------;

//----------------------------------------------------------------------------------------------------;

//	DEFINE - ECHART;

//----------------------------------------------------------------------------------------------------;

var _CTRLS = {
	CHART0 : { target : null, cbFunctions : { finished : function(){ renderDashboard_detail( "CHART1", "TAOBAO-DAILY" ) }}}
	, CHART1 : { target : null, cbFunctions : { finished : function(){ renderDashboard_diff( "CHART2", "TAOBAO-DAILY", 2019 ) }}}
	, CHART2 : { target : null, cbFunctions : { finished : function(){ renderDashboard_ERROR( "CHART3", "TAOBAO-DAILY", 2019 ) }}}
	, CHART3 : { target : null, cbFunctions : { finished : null}}
//	, CHART3 : { target : null, cbFunctions : { finished : function(){ renderChart( "CHART4", "KAOLA", 2019 ) }}}
	// , CHART4 : { target : null, cbFunctions : { finished : function(){ renderDashboard_detail( "CHART5", "KAOLA" ) }}}
	// , CHART5 : { target : null, cbFunctions : { finished : function(){ renderDashboard_diff( "CHART6", "KAOLA", 2019 ) }}}
	// , CHART6 : { target : null, cbFunctions : { finished : function(){ renderDashboard_ERROR( "CHART7", "KAOLA", 2019 ) }}}
	// , CHART7 : { target : null, cbFunctions : { finished : function(){ renderChart( "CHART8", "VIP", 2019 ) }}}
	// , CHART8 : { target : null, cbFunctions : { finished : function(){ renderDashboard_detail( "CHART9", "VIP", 2019 ) }}}
	// , CHART9 : { target : null, cbFunctions : { finished : function(){ renderDashboard_diff( "CHART10", "VIP",2019 ) }}}
	// , CHART10 : { target : null, cbFunctions : { finished : function(){ renderDashboard_ERROR( "CHART11", "VIP",2019 ) }}}
	// , CHART11 : { target : null, cbFunctions : { finished : function(){ renderChart( "CHART12", "LAZADA", 2019 ) }}}
	// , CHART12 : { target : null, cbFunctions : { finished : function(){ renderDashboard_detail( "CHART13", "LAZADA" ) }}}
	// , CHART13 : { target : null, cbFunctions : { finished : function(){ renderDashboard_diff( "CHART14", "LAZADA", 2019 ) }}}
	// , CHART14 : { target : null, cbFunctions : { finished : function(){ renderDashboard_ERROR( "CHART15", "LAZADA", 2019 ) }}}
	// , CHART15 : { target : null, cbFunctions : { finished : function(){ renderChart( "CHART16", "SHOPEE", 2019 ) }}}
	// , CHART16 : { target : null, cbFunctions : { finished : function(){ renderDashboard_detail( "CHART17", "SHOPEE" ) }}}
	// , CHART17 : { target : null, cbFunctions : { finished : function(){ renderDashboard_diff( "CHART18", "SHOPEE", 2019 ) }}}
	// , CHART18 : { target : null, cbFunctions : { finished : function(){ renderDashboard_ERROR( "CHART19", "SHOPEE", 2019 ) }}}
	// , CHART19 : { target : null, cbFunctions : { finished : null }}


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

	window.SYS0037_UI_API.spinner.show( "데이터를 로딩중입니다." );


	setTimeout( function(){//즉시 _LOADER_SPINNER_ 표출을 위한 setTimeout;
		//정제 대상 콜렉션 목록 조회후 화면에 표출;
	_초기화면렌더링.getDbListAndStatus();

		//_초기화면렌더링.getMergeTargetCollection();

		//*/
	//renderChart( "CHART0", "TAOBAO-DAILY", 2019 );
		// renderDashboard_detail( "CHART1", "TAOBAO-DAILY" )
		// renderDashboard_diff( "CHART6", "TAOBAO-DAILY", 2019 )
		// renderChart( "CHART2", "KAOLA", 2019 )
		// renderDashboard_detail( "CHART3", "KAOLA" )
		// renderDashboard_diff( "CHART7", "KAOLA", 2019 )
		// renderChart( "CHART4", "VIP", 2019 )
		// renderDashboard_diff( "CHART5", "VIP", 2019 )
		// renderDashboard_detail( "CHART8", "VIP" )
		/*/
		//Taobao-Daily;
		renderChart( "CHART0", "TAOBAO-DAILY", 2019 )
		renderDashboard_detail( "CHART1", "TAOBAO-DAILY" );
		renderDashboard_diff( "CHART6", "TAOBAO-DAILY", 2019 );

		// //KAOLA;
		renderChart ( "CHART2", "KAOLA", 2019 );
		renderDashboard_detail( "CHART3", "KAOLA" );
		renderDashboard_diff( "CHART7", "KAOLA", 2019 );

		// //VIP;
		renderChart ( "CHART4", "VIP", 2019 );
		renderDashboard_detail( "CHART5", "VIP" );
		renderDashboard_diff( "CHART8", "VIP", 2019 );
		//*/

		window.SYS0037_UI_API.spinner.hide();

	}, _N_SET_TIMEOUT_ );
};

_초기화면렌더링.getDbListAndStatus = function()
{
	//수정하기 - 20190304_1444 - 최석준 - 프로퍼티 이름 수정;
	var requestParameters = {
		  //param0 : [ 2018, 2019 ]
		  param0 : [ 2019 ]

		//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
		, param1 : [ "KAOLA", "VIP", "TAOBAO-DAILY", "LAZADA", "SHOPEE" ]
	};


	var result = window.b2link.xhr.reqSync_String( _URLS.URL0.replace( "<!=DATA=!>", JSON.stringify( requestParameters ) ) );

	var data;
	try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

	if( window.b2link.response.getResultStatus( data ) )
	{
		var colList = [];

		var s,so
		var arr_db = [];
		var _to;
		for( s in window.SYS0037_UI_API.CONST.SITE_NAMES  ){
			_to = {};
			_to[ "DB_NAME" ] = s;
			arr_db.push( _to )
		}

		//window.b2link.html_div.apply_child( _ELS.DIV_DB_LIST, arr_db );

		if( data.length > 0 )
		{
			//_ELS.DIV_MSG.style.display = "block";
			//delete data.data;

			var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;
			var i = 0,iLen = data.length,io;
			for(;i<iLen;++i){
					io = data[ i ].data;
					var dbNm = data[ i ].DB


					var targetDBinfo ='<div class="id-div-merge-list ui column grid celled">'
								+ '<div class="row grey"><div class="eight wide column">DB Name</div><div class="eight wide column">정재대상갯수</div></div>'
								+ '<div class="row"><div class="eight wide column">' + dbNm + '</div><div class="eight wide column">' + data[ i ].totalCount + '</div></div>'
								+ '</div>'

					data[ i ].targetDBinfo = "";
					if( data[ i ].totalCount > 0 ) data[ i ].targetDBinfo = targetDBinfo;
					var mergeInfo = '';

					if( io.length > 0 )
					{
						var j = 0,jLen = io.length,jo;
						for(;j<jLen;++j){
							jo = io[ j ]
							var _mergeInfoDetail = '<div class="ui bulleted list" style="text-align:left;">{{MERGE_INFO_DETAIL_LIST}}</div>'
							/*/
							var _t00 = [];
							for(var s in jo.stats.size ){
								_t00.push( F( jo.stats.size[ s ] ) )
							}
							//var t00 = _t00.join("-")
							var _t01 = [];
							for(var s in jo.stats.count ){
								_t01.push( jo.stats.count[ s ] )
							}
							//var t01 = _t01.join("-")
							/*/
							var mergeInfoDetail_html = "";
							if( typeof jo.stats.size == "object" )
							{
								for(var s in jo.stats.size ){
									mergeInfoDetail_html += '<div class="item" style="border-bottom:0px;">' + s + " : " + F( jo.stats.size[ s ] ) + ' / ' + jo.stats.count[ s ] +'(ea)</div>\n'
								}
							}
							else
							{
								mergeInfoDetail_html += '<div class="item" style="border-bottom:0px;">' + F( jo.stats.size ) + ' / ' + jo.stats.count +'(ea)</div>\n'
							}
							var mergeInfoDetail = _mergeInfoDetail.replace( '{{MERGE_INFO_DETAIL_LIST}}', mergeInfoDetail_html )
							//*/

							mergeInfo +='<div class="stretched row">'
								+ '<div class="column">' + dbNm + '</div>'
								+ '<div class="column">' + jo.nm_col + '</div>'
								+ '<div class="column">' + mergeInfoDetail + '</div>'
								+'</div>\n';
						}
					}
					else
					{
						mergeInfo = '<div class="row"><div class="sixteen wide column">정제대상이 존재하지 않습니다.</div></div>\n';
					}

					data[ i ].detailInfo = mergeInfo
					if( data[ i ].totalCount == 0 ) data[ i ].STATUS = '<div class="ui green label">정상</div>';
					else data[ i ].STATUS = '<div class="ui grey label" style="min-width:45px;">' + data[ i ].totalCount + '</div><div class="ui red label">정제요망</div>';
			}

			window.b2link.html_div.apply_child( _ELS.DIV_DB_LIST, data );
			//window.b2link.html_div.apply_child( _ELS.DIV_MERGE_LIST, io );
			//window.b2link.html_div.apply_child( _ELS.DIV_DB_LIST, arr_db );

			//_ELS.DIV_MSG.addEventListener( "click", function( e ){ $( this ).closest( ".message" ).transition( "fade" ); });
		}

	}
	else
	{
		//결과가 없음;
		window.TtwLog.log( "결과가 없음" );
	}
};

/**
 * 정제 대상 콜렉션 목록 조회후 화면에 표출
 * @function
 */
_초기화면렌더링.getMergeTargetCollection = function()
{

	//수정하기 - 20190304_1444 - 최석준 - 프로퍼티 이름 수정;
	var requestParameters = {
		  //param0 : [ 2018, 2019 ]
		  param0 : [ 2019 ]

		//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
		, param1 : [ "KAOLA", "VIP", "TAOBAO-DAILY", "LAZADA", "SHOPEE" ]
	};


	var result = window.b2link.xhr.reqSync_String( _URLS.URL0.replace( "<!=DATA=!>", JSON.stringify( requestParameters ) ) );

	var data;
	try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

	if( window.b2link.response.getResultStatus( data ) )
	{
		var colList = [];

		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];

			var target_site = window.SYS0037_UI_API.CONST.CONNECTION_INFO[ io.target_site ];

			var jo;
			var j=0, jLen = io.data.length;
			for( ; j<jLen; ++j )
			{
				jo = io.data[ j ];

				var colInfo = {
					SITE : io.target_site
					, DB : io.DB
					, COL : jo.nm_col
					, COUNT : jo.stats.count
					, SIZE : jo.stats.size
				};

				//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
				//colInfo의 COUNT와 SIZE Column 개별 완성;
				_초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop[ target_site ]( io, jo, colInfo );

				colList.push( colInfo );
			};
		};

		if( colList.length > 0 )
		{
			_ELS.DIV_MSG.style.display = "block";

			window.b2link.html_div.apply_child( _ELS.DIV_MSG_COL, colList );

			_ELS.DIV_MSG.addEventListener( "click", function( e ){ $( this ).closest( ".message" ).transition( "fade" ); });
		}
	}
	else
	{
		//결과가 없음;
		window.TtwLog.log( "결과가 없음" );
	}

};

//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
_초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop = {
	JD : function(){
	}

	, KAOLA : function( io, jo, colInfo ){

		var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var joc = jo.stats.count;
		var jos = jo.stats.size;

		var str_count = " - " + joc.LIST
			+ " / " + joc.DETAIL
			+ " / " + joc.DETAIL_COMMENT_INFO
			+ " / " + joc.DETAIL_HTML;

		var str_size = " - " + F( jos.LIST ).toFixed( 2 )
			+ " / " + F( jos.DETAIL ).toFixed( 2 )
			+ " / " + F( jos.DETAIL_COMMENT_INFO ).toFixed( 2 )
			+ " / " + F( jos.DETAIL_HTML ).toFixed( 2 );


		colInfo.COUNT = str_count;
		colInfo.SIZE = str_size;
	}

	, "TAOBAO-DAILY" : function( io, jo, colInfo ){
		var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var joc = jo.stats.count;
		var jos = jo.stats.size;

		colInfo.COUNT = joc;
		colInfo.SIZE = F( jos ).toFixed(3) + " MB";
	}

	, VIP : function( io, jo, colInfo ){

		var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var joc = jo.stats.count;
		var jos = jo.stats.size;

		var str_count = " - " + joc.LIST
			+ " / " + joc.BRAND_COUPON
			+ " / " + joc.DETAIL;

		var str_size = " - " + F( jos.LIST ).toFixed( 2 )
			+ " / " + F( jos.BRAND_COUPON ).toFixed( 2 )
			+ " / " + F( jos.DETAIL ).toFixed( 2 );

		colInfo.COUNT = str_count;
		colInfo.SIZE = str_size;
	}
	, LAZADA : function( io, jo, colInfo ){

		var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var joc = jo.stats.count;
		var jos = jo.stats.size;

		var str_count = " - " + joc.LIST

		var str_size = " - " + F( jos.LIST ).toFixed( 2 )

		colInfo.COUNT = str_count;
		colInfo.SIZE = str_size;
	}
	, SHOPEE : function( io, jo, colInfo ){

		var F = _초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte;

		var joc = jo.stats.count;
		var jos = jo.stats.size;

		var str_count = " - " + joc.LIST

		var str_size = " - " + F( jos.LIST ).toFixed( 2 )

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
_초기화면렌더링.getMergeTargetCollection.getStringCountAndSizeByTargetShop.byteToMegabyte = function( nByte ){ return ( nByte / 1024 / 1024 ).toFixed( 2 ) + "(Mb)"; };

/**
 * @function
 * @param {HTMLElement} targetEl
 * @param {String} shop
 * @return {ECharts}
 */
var renderChart = function( targetEl, nm_site, targetYear )
{
	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( _ELS[ targetEl ] );
		myChart.showLoading( loadSetting );

//	var url = _URLS.URL3.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ nm_site ] )
//			.replace( "<!=YEAR_TARGET=!>", targetYear );
//	var colors = [ "#45dbf7", "#f6d54a","#f69846", "#ff4343"];

//	SUtilXMLHttpReqGet.req_String( url, function( result ){
//		var data;
//		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }
//
//		var t = data.d;

		var chartTitle = "test";
		var chartSubTitle = "test";
		var chartTitlePosition = "center";
		var legendList = [ "test" ];
		var legendPosition = "left";

		var option = {
			title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
//			, color : [ "#45dbf7", "#f6d54a","#f69846", "#ff4343"]
			, grid : { left : "10%", right : "10%" }
			, dataZoom : [ { type : "inside" }, { type : "slider" } ]
			, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
			, toolbox : {
				feature : {
					  dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "line", "bar" ]}
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, legend : { data : legendList, x : legendPosition }
			, xAxis : [ { type : "category", data : [], axisPointer : { type : "shadow" } } ]
			, yAxis : [
				  { type : "value", name : "size" , axisLabel : { formatter : "{value} MB" }, splitLine: { show: false }, position: 'left'}
			]
			, series : [
				  { name : "test" , type : "line" , data : [], yAxisIndex : 0, smooth: true
					, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
					, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
				}
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );
		}
//	});

	_CTRLS.CHART0 = myChart;

	window.test = setInterval(function () {

	var a  = _CTRLS.CHART0.getOption().series[ 0 ].data;
	var b  = _CTRLS.CHART0.getOption().xAxis[ 0 ].data;
	if(b.length > 50 )
	{
		a.shift()
		b.shift()
	}
	a.push( Math.random() );

	b.push( Date.now() );
    myChart.setOption({
		xAxis :[{
			data : b
		}]
        , series: [{
            data: a
        }]
    });
}, 100);

//    myChart.setOption({
//        series: [{
//            data: Math.random()
//        }]
//    });
//}, 1000);
//	if( _CTRLS[ targetEl ].cbFunctions.finished ) _CTRLS[ targetEl ].cbFunctions.finished();
	// return myChart;
};



var renderDashboard_daily = function( targetEl, site )
{

	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( _ELS[ targetEl ] );
		myChart.showLoading( loadSetting );

	var url = _URLS.URL1.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ site ] )
			.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ site ] );
	SUtilXMLHttpReqGet.req_String( url, function( result ){
		var data;
		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

		var t = data.d;

		var chartTitle = t.shopNm + " - Daily";
		var chartSubTitle = t.data[ 0 ] + " - " + t.data[ t.data.length - 1 ];
		var chartTitlePosition = "center";
		var legendList = [ "size", "count" ];
		var legendPosition = "left";

		var option = {
			  title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
			, color : [ "#5793f3", "#d14a61" ]
			, grid : { left : "10%" }
			, dataZoom : [ { type : "inside" }, { type : "slider" } ]
			, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
			, toolbox : {
				feature : {
					dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "line", "bar" ] }
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, legend : { data : legendList, x : legendPosition }
			, xAxis : [ { type : "category", data : t.data, axisPointer : { type : "shadow" } } ]
			, yAxis : [
				  { type : "value", name : "size" , axisLabel : { formatter : "{value} MB" } }
				, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
			]
			, series : [
				  { name : "size" , type : "bar" , data : t.size.mb, yAxisIndex : 0 }
				, { name : "count", type : "line", data : t.count  , yAxisIndex : 1 }
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );

			++COUNT_LOADED_CHART;
			if( COUNT_LOADED_CHART == COUNT_LOADED_CHART_MAX ) window.SYS0037_UI_API.spinner.hide();
		}
	});

	_CTRLS[ targetEl ].target = myChart;
	if( _CTRLS[ targetEl ].cbFunctions.finished ) _CTRLS[ targetEl ].cbFunctions.finished();
	//return myChart;
};

/**
 * @function
 * @param {HTMLElement} targetEl
 * @param {String} shop
 * @return {ECharts}
 */
var renderDashboard_detail = function( targetEl, site )
{
	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( _ELS[ targetEl ] );
		myChart.showLoading( loadSetting );

	var url = _URLS.URL2.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ site ] )
			.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ site ] );

	SUtilXMLHttpReqGet.req_String( url, function( result ){
		var data;
		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

		var chartTitle = data.d.shopNm + " - Detail";
		var chartSubTitle = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];
		var chartTitlePosition = "center";
		var legendList = [ "size", "count" ];
		var legendPosition = "left";

		var option = {
			  title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
			, color : [ "#5793f3", "#d14a61" ]
			, grid : { left : "10%" }
			, dataZoom : [ { type : "inside" }, { type : "slider" } ]
			, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
			, toolbox : {
				feature : {
					dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "line", "line" ] }
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, legend : { data : legendList, x : legendPosition }
			, xAxis : [ { type : "category", data : data.d.data, axisPointer : { type : "shadow" } } ]
			, yAxis : [
				  { type : "value", name : "size", axisLabel : { formatter : "{value} MB" } }
				, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
			]
			, series : [
				  { name : "size" , type : "line" , data : data.d.size.mb, yAxisIndex : 0, smooth: true }
				, { name : "count", type : "line", data : data.d.count, yAxisIndex : 1, smooth: true }
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );

			++COUNT_LOADED_CHART;
			if( COUNT_LOADED_CHART == COUNT_LOADED_CHART_MAX ) window.SYS0037_UI_API.spinner.hide();
		}
	});

	_CTRLS[ targetEl ].target = myChart;
	if( _CTRLS[ targetEl ].cbFunctions.finished ) _CTRLS[ targetEl ].cbFunctions.finished();
	//return myChart;
};

/**
 * @function
 * @param {HTMLElement} targetEl
 * @param {String} shop
 * @return {ECharts}
 */
var renderDashboard_diff = function( targetEl, site, target_year )
{
	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( _ELS[ targetEl ] );
		myChart.showLoading( loadSetting );

	var url = _URLS.URL4.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ site ] )
			.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ site ] )
			.replace( "<!=YEAR_TARGET=!>", target_year );

	SUtilXMLHttpReqGet.req_String( url, function( result ){
		var data;
		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

		var chartTitle = site + " - Diff - " + target_year;
		var chartSubTitle = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];
		var chartTitlePosition = "center";
		var legendList = [ "prev_doc_count", "doc_count", "removeItem_count", "newItem_count", "title_count", "price_count" ];
		var legendPosition = "left";

		var option = {
			  title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
			//, grid : { left : "10%"}
			, grid: {
				//top: 100,
				left: "10%",
				//right: 15,
				//height: 160
			}
			, dataZoom : [ { type : "inside" }, { type : "slider" } ]
			, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
			, toolbox : {
				feature : {
					dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "line", "bar" ] }
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, legend : { data : legendList, x : legendPosition }
			, xAxis : [ { type : "category", data : data.d.date, axisPointer : { type : "shadow" } } ]
			, yAxis :{ type : "value" }
			, series : [
				{ name : "removeItem_count", type : "bar", data : data.d.removeItem_count, smooth: true, stack: 'diff' }
				, { name : "newItem_count", type : "bar", data : data.d.newItem_count, smooth: true, stack: 'diff' }
				, { name : "title_count", type : "bar", data : data.d.title_count, smooth: true, stack: 'diff' }
				, { name : "price_count", type : "bar", data : data.d.price_count, smooth: true, stack: 'diff' }
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );

			++COUNT_LOADED_CHART;
			if( COUNT_LOADED_CHART == COUNT_LOADED_CHART_MAX ) window.SYS0037_UI_API.spinner.hide();
		}
	});

	_CTRLS[ targetEl ].target = myChart;
	if( _CTRLS[ targetEl ].cbFunctions.finished ) _CTRLS[ targetEl ].cbFunctions.finished();
	//return myChart;
};


/**
 * @function
 * @param {HTMLElement} targetEl
 * @param {String} shop
 * @return {ECharts}
 */
var renderDashboard_ERROR = function( targetEl, site, target_year )
{
	var loadSetting = {
		text : "loading"
		, effect : "spin"
		, textStyle : { fontSize : 40 }
	};

	var myChart = window.echarts.init( _ELS[ targetEl ] );
		myChart.showLoading( loadSetting );

	var url = _URLS.URL5.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ site ] )
			.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ site ] )
			.replace( "<!=YEAR_TARGET=!>", target_year );

	SUtilXMLHttpReqGet.req_String( url, function( result ){
		var data;
		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

		var chartTitle = site + " - ERROR - " + target_year;
		var chartSubTitle = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];
		var chartTitlePosition = "center";
		var legendList = [ "size", "count" ];
		var legendPosition = "left";

		var option = {
			  title : { text : chartTitle, subtext : chartSubTitle, x : chartTitlePosition }
			, color : [ "#5793f3", "#d14a61" ]
			, grid : { left : "10%" }
			, dataZoom : [ { type : "inside" }, { type : "slider" } ]
			, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
			, toolbox : {
				feature : {
					dataView : { show : true, readOnly : false }
					, magicType : { show : true, type : [ "line", "bar" ] }
					, restore : { show : true }
					, saveAsImage : { show : true }
				}
			}
			, legend : { data : legendList, x : legendPosition }
			, xAxis : [ { type : "category", data : data.d.data, axisPointer : { type : "shadow" } } ]
			, yAxis : [
				  { type : "value", name : "size", axisLabel : { formatter : "{value} MB" } }
				, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
			]
			, series : [
				  { name : "size" , type : "bar" , data : data.d.size.mb, yAxisIndex : 0, smooth: true }
				, { name : "count", type : "line", data : data.d.count, yAxisIndex : 1, smooth: true }
			]
		};

		if( option && typeof option === "object" )
		{
			myChart.hideLoading();
			myChart.setOption( option, true );

			_LIST_ECHARTS_.push( myChart );

			++COUNT_LOADED_CHART;
			if( COUNT_LOADED_CHART == COUNT_LOADED_CHART_MAX ) window.SYS0037_UI_API.spinner.hide();
		}
	});

	_CTRLS[ targetEl ].target = myChart;
	if( _CTRLS[ targetEl ].cbFunctions.finished ) _CTRLS[ targetEl ].cbFunctions.finished();
	//return myChart;
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

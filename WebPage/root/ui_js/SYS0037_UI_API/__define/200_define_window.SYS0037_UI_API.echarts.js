//----------------------------------------------------------------------------------------------------;
var fileNm = "js/SYS0037_UI_API/__define/200_define_window.SYS0037_UI_API.echarts.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0037_UI_API.echarts;

window.SYS0037_UI_API.echarts = window.SYS0037_UI_API.echarts || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0037_UI_API.echarts;

window.SYS0037_UI_API.echarts.CONST = window.SYS0037_UI_API.echarts.CONST || {};

//--------------------------------------------------;



//getData에 사용되는 URL 템플릿;
window.SYS0037_UI_API.echarts.CONST.URLS = {};
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON = {};

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.product_price_trend = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/상품가격추이?code_db=<!=CODE_DB=!>&product_id=<!=PRODUCT_ID=!>";;

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_daily = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDailyInfoToYearByShop?code_db=<!=CODE_DB=!>&targetYear=<!=YEAR_TARGET=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_detail = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDetailByShop?code_db=<!=CODE_DB=!>&nm_site=<!=NM_SITE=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_diff = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDiffInfoByShop?code_db=<!=CODE_DB=!>&nm_site=<!=NM_SITE=!>&target_year=<!=YEAR_TARGET=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_sellcount = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getDataTaobaoSellCountStatus?code_db=<!=CODE_DB=!>&targetYear=<!=YEAR_TARGET=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_error = window.b2link.url.getServerURL_APIServer_Self() + "/common/dashboard/getERRORInfoToYearByShop?code_db=<!=CODE_DB=!>&targetYear=<!=YEAR_TARGET=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.brand_info_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.shop_info_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의샵정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_info_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의카테고리정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";;

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_brand_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_shop_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의샵별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_category_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의카테고리별셀카운트정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_by_brand_info_view = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드카테고리정보가져오기?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>&brand_id=<!=ID_BRAND=!>"

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드정보가져오기수집키워드?code_db=<!=CODE_DB=!>&nm_db=<!=NM_DB=!>&nm_col=<!=NM_COL=!>";

//;
window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword_trend = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/<!=NM_PATH=!>/머지데이터의브랜드정보가져오기수집키워드트렌드?code_db=<!=CODE_DB=!>&nm_keyword=<!=NM_KEYWORD=!>";


//--------------------------------------------------;
//옵션공통 정의;
window.SYS0037_UI_API.echarts.CONST.OPTIONS = {};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON = {};
window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION = { text : "loading", effect : "spin", textStyle : { fontSize : 40 } };

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS = {};
window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00 = ["#1cd389","#668eff","#ffc751","#5bd1ff","#ff6e72","#16c1af","#9692ff","#eeeeee",];


window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH = {};
window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00 = {
	hr : { width : "100%", borderColor : "rgba(255,255,255,0.2)", borderWidth : 0.5, height : 0, lineHeight : 10 }
	, name : { fontSize : 18, color : "#fff",padding: [10, 10], textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4 }
	, value : { fontSize : 15, color : "#fff" ,align: 'left', padding: [2, 4] ,lineHeight: 30, textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4}
	, label : { fontSize: 10,color: '#fff',padding: [2, 4],lineHeight: 30, textBorderColor : "rgba(0,0,0,0.6)", textBorderWidth : 4}
}
window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE = 62;
//---------------------------------------------;
//툴팁 및 라벨 템플릿 정의;
window.SYS0037_UI_API.echarts.CONST.TEMPLATE = {};
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.DIV_CHART = '<div class="{{id}}" style="padding-bottom:10px;"></div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.BRAND_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">Brand Name : <b><!=NM_BRAND=!></b><br>\nBrand id : <!=ID_BRAND=!></br>\nProduct Count : <!=COUNT_PRODUCT=!> ea</br>\nShop Count : <!=COUNT_SHOP=!> ea</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.BRAND_INFO_VIEW_LABEL = "{name|{{NAME}}}\n{hr|}\n{value|brandId : {{BRAND_ID}}}\n{value|Product Count : {{VALUE}} ea}\n{value|Shop Count : {{COUNT_SHOP}} ea}";

window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SHOP_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">SHOP Name : <b><!=NM_SHOP=!></b><br>Shop id : <!=ID_SHOP=!></br>Product Count : <!=COUNT_PRODUCT=!> ea</br>Brand Count : <!=COUNT_BRAND=!> ea</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SHOP_INFO_VIEW_LABEL = "{name|{{NM_SHOP}}}\n{hr|}\n{value|shopId : {{ID_SHOP}}}\n{value|Product Count : {{VALUE}} ea}\n{value|Brand Count : {{COUNT_BRAND}} ea}";

window.SYS0037_UI_API.echarts.CONST.TEMPLATE.CATEGORY_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">CATEGORY Name : <b><!=NM_CATE=!></b><br>Category id : <!=ID_CATE=!></br>Product Count : <!=COUNT_PRODUCT=!> ea</br>Brand Count : <!=COUNT_BRAND=!> ea</br>Shop Count : <!=COUNT_SHOP=!> ea</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.CATEGORY_INFO_VIEW_LABEL = "{name|{{NAME}}}\n{hr|}\n{value|categoryId : {{ID_CATE}}}\n{value|Product Count : {{VALUE}} ea}\n{value|Brand Count : {{COUNT_BRAND}} ea}\n{value|Shop Count : {{COUNT_SHOP}} ea}";;

window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_BRAND_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">Brand Name : <b><!=NM_BRAND=!></b><br>\nBrand id : <!=ID_BRAND=!></br>\nSell Count : <!=VALUE=!></br>\nSell Amount : CNY <!=SELL_AMOUNT=!></br>\nRatio Sell Count : <!=RATIO_SC=!> %</br>\nRatio Sell Amount : <!=RATIO_SA=!> %</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_BRAND_INFO_VIEW_LABEL = "{name|{{NM_BRAND}}} {value|{{ID_BRAND}}}\n{hr|}\n{label|Sell Count} {value|{{VALUE}}}\n{label|Sell Amout} {value|CNY {{SELL_AMOUNT}}}\n{label|Ratio sell Count} {value|{{RAITO_SC}}%}\n{label|Ratio sell Amount} {value|{{RAITO_SA}}%}";

window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_SHOP_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">Shop Name : <b><!=NM_SHOP=!></b><br>\nShop id : <!=ID_SHOP=!><br>\nShop Type : <!=TYPE_SHOP=!></br>\nSell Count : <!=VALUE=!></br>\nSell Amount : CNY <!=SELL_AMOUNT=!></br>\nRatio Sell Count : <!=RATIO_SC=!> %</br>\nRatio Sell Amount : <!=RATIO_SA=!> %</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_SHOP_INFO_VIEW_LABEL = "{name|{{NM_SHOP}}} {value|{{ID_SHOP}}}\n{hr|}\n{label|Shop Type} {value|{{TYPE_SHOP}}}\n{label|Sell Count} {value|{{VALUE}}}\n{label|Sell Amout} {value|CNY {{SELL_AMOUNT}}}\n{label|Ratio sell Count} {value|{{RAITO_SC}}%}\n{label|Ratio sell Amount} {value|{{RAITO_SA}}%}";

window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_CATEGORY_INFO_VIEW_TOOLTIP = '<div class="tooltip-title"  style="margin : 50px;">Category Name : <b><!=NM_CATE=!></b><br>\nCategory id : <!=ID_CATE=!></br>\nSell Count : <!=VALUE=!></br>\nSell Amount : CNY <!=SELL_AMOUNT=!></br>\nRatio Sell Count : <!=RATIO_SC=!> %</br>\nRatio Sell Amount : <!=RATIO_SA=!> %</div>';
window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_CATEGORY_INFO_VIEW_LABEL = "{name|{{NM_CATE}}} {value|{{ID_CATE}}}\n{hr|}\n{label|Sell Count} {value|{{VALUE}}}\n{label|Sell Amout} {value|CNY {{SELL_AMOUNT}}}\n{label|Ratio sell Count} {value|{{RAITO_SC}}%}\n{label|Ratio sell Amount} {value|{{RAITO_SA}}%}";


//----------------------------------------------------------------------------------------------------;

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.PRODUCT_PRICE_TREND = function(){
	return {
		title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color: [ '#0f4471','#00adb5','#ff5722','#5628b4','#20BF55','#f23557','#118df0','#11cbd7','#d3327b','#ae318a','#993090','#6f3071' ]
		, grid : { top : 100, left : "10%", right : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			},
			backgroundColor: 'rgba(245, 245, 245, 0.8)',
			borderWidth: 1,
			borderColor: '#ccc',
			padding: 10,
			textStyle: {
				color: '#000'
			},
			position: function (pos, params, el, elRect, size) {
				var obj = {top: 10};
				obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
				return obj;
			},
			extraCssText: 'width: 170px'
		}
		, toolbox : {
			feature : {
				  dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "bar" ]}
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "price" ], x : "left" }
		, xAxis : []
		, yAxis : [
			{ type : "value", name : "price" , axisLabel : { formatter : "{value}" }, splitLine: { show: false }, position: 'left', offset : 80,silent: false,triggerEvent:true }
		]
		, series : []
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DAILY = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "bar" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "size", "count", "brand_count", "shop_count" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis : [
			  { type : "value", name : "size" , axisLabel : { formatter : "{value} MB" }, splitLine: { show: false }, position: 'left'}
			, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'left', offset : 80}
			, { type : "value", name : "brand_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'right'}
			, { type : "value", name : "shop_count", axisLabel : { formatter : "{value} ea" }, splitLine: { show: false }, position: 'right', offset : 80 }
		]
		, series : [
			  { name : "size" , type : "line" , data : null, yAxisIndex : 0, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "count", type : "line", data : null  , yAxisIndex : 1, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "brand_count", type : "line", data : null  , yAxisIndex : 2, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "shop_count", type : "line", data : null  , yAxisIndex : 3, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DETAIL = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "line" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "size", "count" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis : [
			  { type : "value", name : "size", axisLabel : { formatter : "{value} MB" } }
			, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
		]
		, series : [
			  { name : "size" , type : "line" , data : null, yAxisIndex : 0, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "count", type : "line", data : null, yAxisIndex : 1, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	}
};



window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DIFF = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "line" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "prev_doc_count", "doc_count", "removeItem_count", "newItem_count", "title_count", "price_count" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis :{ type : "value" }
		, series : [
			{ name : "removeItem_count", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "newItem_count", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "title_count", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "price_count", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	};
};


window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_ERROR = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "line" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "size", "count" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis : [
				  { type : "value", name : "size", axisLabel : { formatter : "{value} MB" } }
				, { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
			]
		, series : [
			  { name : "size" , type : "bar" , data : null, yAxisIndex : 0, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "count", type : "line", data : null, yAxisIndex : 1, smooth: true
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left :"10%", right :"10%",	y: 100, y2: 100 }
		//, dataZoom : [ { type : "inside" }, { type : "slider" } ]
		, tooltip : { position: {top: 100,left : 200 } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "line" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [], x : "left" }
		, xAxis : [
			{
				type: "category",
				//boundaryGap: false,
				data : null,
				axisLabel:{ show:true, interval : 0,rotate: 45,margin: 20 },
				splitLine: { show: false },
				axisPointer : { type : "shadow" },
				triggerEvent: true,
			}
		]
		, yAxis : [ { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }]
		, series : [
			{ name : "", type : "bar", data : null, barCategoryGap : "30%", smooth: true
//				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
//				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
				, label: { normal: { show: true, position: 'top', fontSize: 12, } }
			},
			{ name : "", type : "bar", data : null, barCategoryGap : "30%", smooth: true
//				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
//				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
				, label: { normal: { show: true, position: 'top', fontSize: 12, } }
			}
		]
	};
};


window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword_trend = function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : [] //window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left :"10%", right :"10%",	y: 150, y2: 150 }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { position: {top: 100,left : 200 },trigger : "axis" }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "bar" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "count" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis : [ { type : "value", name : "count", axisLabel : { formatter : "{value} ea" } }
		]
		, series : [
			{ name : "count", type : "line", data : null , smooth: true
				, lineStyle : { width : 2 }
				, areaStyle:  {
//					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//						{ offset: 0, color: 'rgb(255, 158, 68)' },
//						{ offset: 1, color: 'rgb(255, 70, 131)' }
//					])
				}
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_SELLCOUNT= function(){
	return {
		  title : {
			  text : null
			, subtext : null
			, x : "center"
		}
		, color : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.COLORS.COLOR00
		, grid : { left : "10%" }
		, dataZoom : [
			{ type: 'inside', show: true, realtime: true, startValue: -1, endValue: -1 },
			{ type: 'slider', show: true, realtime: true, startValue: -1, endValue: -1 }
		]
		, tooltip : { trigger : "axis", axisPointer : { type : "cross", crossStyle : { color : "#999" } } }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "line", "line" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, legend : { data : [ "none_both", "none_vagueSellCount", "none_sellCount" ], x : "left" }
		, xAxis : [ { type : "category", data : null, axisPointer : { type : "shadow" } } ]
		, yAxis :{ type : "value" }
		, series : [
			{ name : "none_both", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "none_vagueSellCount", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
			, { name : "none_sellCount", type : "bar", data : null, smooth: true, stack: 'diff'
				, markPoint: { symbolSize : 50, label : { fontSize : 12 }, data: [{type: 'max', name: 'price_highest'},{type: 'min', name: 'price_lowest'}] }
				, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.BRAND_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.brand_info_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "brand"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]

				, width : "100%", height : "100%"

				, data : null

				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.brand_info_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};

 window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SHOP_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.shop_info_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "brand"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]
				, width : "100%", height : "100%"
				, data : null
				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.shop_info_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.category_info_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "brand"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]
				, width : "100%", height : "100%"
				, data : null
				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.category_info_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};


window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_BRAND_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "brand"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]
				, width : "100%", height : "100%"
				, data : null
				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_SHOP_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "shop"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]
				, width : "100%", height : "100%"
				, data : null
				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW = function(){
	return {
		tooltip : { position: {top: 10,left : 10}, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data.tooltip_formatter }
		, toolbox : {
			feature : {
				dataView : { show : true, readOnly : false }
				, magicType : { show : true, type : [ "treemap" ] }
				, restore : { show : true }
				, saveAsImage : { show : true }
			}
		}
		, color : null
		, colorMappingBy : "value"
		, series : [
			{ type : "treemap", name : "category"
				, levels : [
					  { itemStyle : { normal : { borderWidth : 0, gapWidth : 0 } } }
					, { itemStyle : { normal : { gapWidth : 0 } } }
					, { colorSaturation : [ 0.35, 0.5 ], itemStyle : { normal : { gapWidth : 1, borderColorSaturation : 0.6 } } }
				]
				, width : "100%", height : "100%"
				, data : null
				, label : {
					normal : {
						position : "inside"
						, formatter : window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data.label_formatter
						, rich : window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.RICH.RICH00
					}
				}
			}
		]
	};
};

window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_BY_BRAND_INFO_VIEW = function(){
	return {
		title : {
			text: null,
			subtext: null,
			x:'left',
			padding: 20,
			subtextStyle : { color : "#fff" }
		},
		toolbox: { show : true, feature : { restore : { show: true }, saveAsImage : { show: true } } },
		tooltip : { trigger: 'item', formatter: "{b} : {c} ({d}%)" },
		legend: { type : 'scroll', orient : 'vertical', left : 20, top : 100, bottom : 20, data : null },
		color :  null,
		series : [
			{
				name: 'category',
				type: 'pie',
				radius : '30%',
				center: ['50%', '50%'],
				avoidLabelOverlap  : true,
				data: null,
				itemStyle : { emphasis : { shadowBlur : 10, shadowOffsetX : 0, shadowColor : 'rgba(0, 0, 0, 0.5)' } }
			}
		]
	};
};

//--------------------------------------------------;
//echart initialize;
(function(){

	var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
	window.b2link.util.importJS__Reuse( host + "/libs/ECharts/import-js.js" );

})();

//--------------------------------------------------;

/**
 * echart 초기화 함수
 * @funnction
 * @param {Object} DATA
 <code>
 {

 }
 </code>
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.init = function( DATA ){
	var chart = window.echarts.init( DATA.element );
	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;
	return chart;
};

/**
 * 차트를 그리는 함수;
 * @funnction
 * @param {Object} chart
 * @param {Object} option
 <code>
 {

 }
 </code>
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.render = function( chart, option ){

	if( option && typeof option === "object" )
	{
		chart.setOption( option, true );//차트생성;
		chart.resize();
		chart.hideLoading();//loader 숨김;
	}

	return chart;
};

/**
 * 상품가격추이 그래프를 생성하는 함수
 * @funnction
 * @param {Object} param
 <code>
 {

 }
 </code>
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.product_price_trend = function( param ){

	//echart 초기화;
	var chart = window.SYS0037_UI_API.echarts.init( param );

	//data Reqeust 실행;
	var data = window.SYS0037_UI_API.echarts.product_price_trend.getData( param );

	//차트옵션정제;
	var option = window.SYS0037_UI_API.echarts.product_price_trend.refine_data( data );
		option.title.text = param.goodsName;
		option.title.subtext = param.brandName;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );//차트생성;

	//res 데이타 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;
};

/**
 * 상품가격추이 데이터를 API 서버에 여청하는 함수
 * @funnction
 * @param {Object} param
 <code>
 {

 }
 </code>
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.product_price_trend.getData = function( param ){

	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.product_price_trend.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=PRODUCT_ID=!>", param.goodsId );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		//cbFunction( data );
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 옵션데이터를 정제하는 함수
 * @funnction
 * @param {Object} param
 * @return {Object} option
 */
window.SYS0037_UI_API.echarts.product_price_trend.refine_data = function( param ){

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.PRODUCT_PRICE_TREND();

	var t = param.d;

	var _to00;

	var yAxisOffset = 80;
	var yAxisIndex = 1;
	var s,so;
	for( s in param.d.price ){
		so = param.d.price[ s ];

		_to00 = { name : s , type : "line" , data : so, yAxisIndex : 0, smooth: true ,silent: false,triggerEvent:true
			, markPoint: { symbolSize : 100, label : { fontSize : 15 }, data: [] }
			, markLine: { data: [{type: 'average', name: '平均值', itemStyle : {}}] }
		};

		_to00.markPoint.data.push( {type: 'max', name: 'price_highest'} );
		_to00.markPoint.data.push( {type: 'min', name: 'price_lowest'} );

		if( -1 == s.indexOf("price") )
		{
			var yAxis = { type : "value", name : s , axisLabel : { formatter : "{value}" }, splitLine: { show: false }, position: 'left', offset : 80 }
			yAxis.position = "right";

			yAxis.offset = yAxisOffset;
			_to00.yAxisIndex = yAxisIndex;
			option.yAxis.push( yAxis );

			yAxisIndex += 1;
			yAxisOffset += 80;
		}
		else
		{
			_to00.yAxisIndex = 0;
		}


		option.legend.data.push( s );
		option.series.push( _to00 );
	}

	var xAxis = { type : "category", data : param.d.date, axisPointer : { type : "shadow" },silent: false,triggerEvent:true }
	option.xAxis.push( xAxis );

	return option;
};

/**
 * 데이리머지 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.status_daily = function( param ){

	//차트를 초기화한다;
	var chart = window.SYS0037_UI_API.echarts.init( param );

	//차트데이터를 API서버에 요청한다.
	var data = window.SYS0037_UI_API.echarts.status_daily.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DAILY();
		option.title.text = DATA.HOST + " -데일리머지현황- " + DATA.target_year;
		option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

		option.xAxis[0].data = data.d.data;
		option.series[0].data = data.d.size.mb;
		option.series[1].data = data.d.count;
		option.series[2].data = data.d.brand_count;
		option.series[3].data = data.d.shop_count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데이리머지 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_daily_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.status_daily.getData_Async( param, function(data){

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DAILY();
		option.title.text = param.HOST + " -데일리머지현황- " + param.target_year;
		option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

		option.xAxis[0].data = data.d.data;
		option.series[0].data = data.d.size.mb;
		option.series[1].data = data.d.count;
		option.series[2].data = data.d.brand_count;
		option.series[3].data = data.d.shop_count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.status_daily.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.status_daily.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DAILY();
			option.title.text = DATA.HOST + " -데일리머지현황- " + DATA.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;
			option.series[2].data = data.d.brand_count;
			option.series[3].data = data.d.shop_count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.status_daily_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.status_daily.getData_Async( param, function(data){

			var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DAILY();
			option.title.text = param.HOST + " -데일리머지현황- " + param.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;
			option.series[2].data = data.d.brand_count;
			option.series[3].data = data.d.shop_count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 데이리머지 현황차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.status_daily.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_daily.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{

		//cbFunction( data );
		return data

	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데이리머지 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_daily.getData_Async = function( param, cbFunction ){

	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_daily.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})

};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.status_daily.refine_data = function( param ){};

/**
 * 데일리 디태일 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.status_detail = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );
	var data = window.SYS0037_UI_API.echarts.status_detail.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DETAIL();
		option.title.text = param.HOST + " -데일리디테일현황- " + param.target_year;
		option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

		option.xAxis[0].data = data.d.data;
		option.series[0].data = data.d.size.mb;
		option.series[1].data = data.d.count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데일리디테일 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_detail_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.status_detail.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DETAIL();
			option.title.text = param.HOST + " -데일리디테일현황- " + param.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.status_detail.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.status_detail.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DETAIL();
			option.title.text = param.HOST + " -데일리디테일현황- " + param.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.status_detail_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.status_detail.getData_Async( param, function(data){
			var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DETAIL();
				option.title.text = param.HOST + " -데일리디테일현황- " + param.target_year;
				option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

				option.xAxis[0].data = data.d.data;
				option.series[0].data = data.d.size.mb;
				option.series[1].data = data.d.count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 데일리디테일 차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.status_detail.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_detail.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ param.HOST ] );;

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데일리디테일 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_detail.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_detail.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.status_detail.refine_data = function( param ){};

/**
 * 데일리비교  현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.status_diff = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.status_diff.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DIFF();
		option.title.text = param.HOST + " -데일리비교일현황- " + param.target_year;
		option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

		option.xAxis[0].data = data.d.date;
		option.series[0].data = data.d.removeItem_count;
		option.series[1].data = data.d.newItem_count;
		option.series[2].data = data.d.title_count;
		option.series[3].data = data.d.price_count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;
};

/**
 * 데일리비교 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_diff_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.status_diff.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DIFF();
			option.title.text = param.HOST + " -데일리비교일현황- " + param.target_year;
			option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.removeItem_count;
			option.series[1].data = data.d.newItem_count;
			option.series[2].data = data.d.title_count;
			option.series[3].data = data.d.price_count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.status_diff.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.status_diff.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DIFF();
			option.title.text = param.HOST + " -데일리비교일현황- " + param.target_year;
			option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.removeItem_count;
			option.series[1].data = data.d.newItem_count;
			option.series[2].data = data.d.title_count;
			option.series[3].data = data.d.price_count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.status_diff_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.status_diff.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_DIFF();
			option.title.text = param.HOST + " -데일리비교일현황- " + param.target_year;
			option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.removeItem_count;
			option.series[1].data = data.d.newItem_count;
			option.series[2].data = data.d.title_count;
			option.series[3].data = data.d.price_count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 데일리비교 차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.status_diff.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_diff.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데일리비교 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_diff.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_diff.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.status_diff.refine_data = function( DATA ){};

/**
 * 데일리에러 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.status_error = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.status_error.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_ERROR();
		option.title.text = param.HOST + " -데일리에러일현황- " + param.target_year;
		option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

		option.xAxis[0].data = data.d.data;
		option.series[0].data = data.d.size.mb;
		option.series[1].data = data.d.count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데일리에러 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_error_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.status_error.getData_Async( param, function(data){
	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_ERROR();
		option.title.text = param.HOST + " -데일리에러일현황- " + param.target_year;
		option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

		option.xAxis[0].data = data.d.data;
		option.series[0].data = data.d.size.mb;
		option.series[1].data = data.d.count;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};


/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.status_error.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.status_error.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_ERROR();
			option.title.text = param.HOST + " -데일리에러일현황- " + param.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.status_error_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.status_error.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_ERROR();
			option.title.text = param.HOST + " -데일리에러일현황- " + param.target_year;
			option.title.subtext = data.d.data[ 0 ] + " - " + data.d.data[ data.d.data.length - 1 ];

			option.xAxis[0].data = data.d.data;
			option.series[0].data = data.d.size.mb;
			option.series[1].data = data.d.count;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 데일리에러 차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.status_error.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_error.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데일리에러 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_error.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_error.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_SITE=!>", window.SYS0037_UI_API.CONST.SITE_NAMES[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.status_error.refine_data = function( DATA ){};

/**
 * 데이리머지 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.status_sellcount = function( param ){

	//차트를 초기화한다;
	var chart = window.SYS0037_UI_API.echarts.init( param );

	//차트데이터를 API서버에 요청한다.
	var data = window.SYS0037_UI_API.echarts.status_sellcount.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_SELLCOUNT();
		option.title.text = param.HOST + " -셀카운트일현황- " + param.target_year;
		option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

		option.xAxis[0].data = data.d.date;
		option.series[0].data = data.d.none_both;
		option.series[1].data = data.d.none_vagueSellCount;
		option.series[2].data = data.d.none_sellCount;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데이리머지 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_sellcount_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.status_sellcount.getData_Async( param, function(data){

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_SELLCOUNT();
		option.title.text = param.HOST + " -셀카운트일현황- " + param.target_year;
		option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

		option.xAxis[0].data = data.d.date;
		option.series[0].data = data.d.none_both;
		option.series[1].data = data.d.none_vagueSellCount;
		option.series[2].data = data.d.none_sellCount;

	var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};


/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.status_sellcount.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.status_sellcount.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_SELLCOUNT();
			option.title.text = param.HOST + " -셀카운트일현황- " + param.target_year;
			option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.none_both;
			option.series[1].data = data.d.none_vagueSellCount;
			option.series[2].data = data.d.none_sellCount;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.status_sellcount_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.status_sellcount.getData_Async( param, function(data){

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.STATUS_SELLCOUNT();
			option.title.text = param.HOST + " -셀카운트일현황- " + param.target_year;
			option.title.subtext = data.d.date[ 0 ] + " - " + data.d.date[ data.d.date.length - 1 ];

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.none_both;
			option.series[1].data = data.d.none_vagueSellCount;
			option.series[2].data = data.d.none_sellCount;

		var dataZoomStart = option.xAxis[0].data.length - 1 - window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.DATAZOOM_RANGE;
		var dataZoomEnd = option.xAxis[0].data.length - 1;

			option.dataZoom[0].startValue = dataZoomStart;
			option.dataZoom[1].startValue = dataZoomStart;
			option.dataZoom[0].endValue   = dataZoomEnd;
			option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 데이리머지 현황차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.status_sellcount.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_sellcount.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{

		//cbFunction( data );
		return data

	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데이리머지 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.status_sellcount.getData_Async = function( param, cbFunction ){

	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.status_sellcount.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=YEAR_TARGET=!>", param.target_year );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})

};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.status_sellcount.refine_data = function( param ){};

/**
 * 병합데이터의 브랜드분포를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.brand_info_view = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.brand_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.brand_info_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 병합데이터의 브랜드분포를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.brand_info_view_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.brand_info_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.brand_info_view.refine_data( data );;
		option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.brand_info_view.updateSeriesData = function( chart , param ){
	var data = window.SYS0037_UI_API.echarts.brand_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.brand_info_view.refine_data( data );;
		option.series[0].data = data.d

	chart.setOption( option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;
};


/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.brand_info_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.brand_info_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.BRAND_INFO_VIEW();

			option.color = window.SYS0037_UI_API.echarts.brand_info_view.refine_data( data );;
			option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.brand_info_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.brand_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.brand_info_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.brand_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	});
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.brand_info_view.refine_data = function( param ){
	var colors = [];
	var i = 0, iLen = param.d.length,io;
	for(;i<iLen;++i){
		io = param.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.brand_info_view.refine_data.tooltip_formatter = function( param ){
	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.BRAND_INFO_VIEW_TOOLTIP.replace( "<!=NM_BRAND=!>", window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
		.replace( "<!=ID_BRAND=!>"      , t0.brand_id )
		.replace( "<!=COUNT_PRODUCT=!>", t0.value )
		.replace( "<!=COUNT_SHOP=!>"  , t0.count_shop );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.brand_info_view.refine_data.label_formatter = function( param ){
	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.BRAND_INFO_VIEW_LABEL.replace( "{{NAME}}", param.data.name )
		.replace( "{{BRAND_ID}}",  param.data.brand_id )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{COUNT_SHOP}}", param.data.count_shop );
};

/**
 * 병합데이터의 샵분포를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.shop_info_view = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.shop_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.shop_info_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 병합데이터의 샵분포를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.shop_info_view_Async = function( DATA, cbFunction ){

	var chart = window.SYS0037_UI_API.echarts.init( DATA );

	window.SYS0037_UI_API.echarts.shop_info_view.getData_Async( DATA, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.shop_info_view.refine_data( data );;
		option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.shop_info_view.updateSeriesData = function( chart , param ){

	var data = window.SYS0037_UI_API.echarts.shop_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.shop_info_view.refine_data( data );;
		option.series[0].data = data.d

	chart.setOption( option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;
};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.shop_info_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.shop_info_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.shop_info_view.refine_data( data );;
		option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.shop_info_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.shop_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.shop_info_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.shop_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.shop_info_view.refine_data = function( data ){
	var colors = [];
	var i = 0, iLen = data.d.length,io;
	for(;i<iLen;++i){
		io = data.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.shop_info_view.refine_data.tooltip_formatter = function( param ){
	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SHOP_INFO_VIEW_TOOLTIP.replace( "<!=NM_SHOP=!>", window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
		.replace( "<!=ID_SHOP=!>"      , t0.shopId )
		.replace( "<!=COUNT_PRODUCT=!>", t0.value )
		.replace( "<!=COUNT_BRAND=!>"  , t0.count_brand );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.shop_info_view.refine_data.label_formatter = function( param ){
	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SHOP_INFO_VIEW_LABEL.replace( "{{NM_SHOP}}", param.data.name )
		.replace( "{{ID_SHOP}}",  param.data.shopId )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{COUNT_BRAND}}", param.data.count_brand );
};

/**
 * 병합데이터의 카테고리분포를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.category_info_view = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.category_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.category_info_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 병합데이터의 브랜드분포를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.category_info_view_Async = function( param, cbFunction ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.category_info_view.getData_Async( param, function(data){
	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.category_info_view.refine_data( data );;
		option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.category_info_view.updateSeriesData = function( chart , param ){
	var data = window.SYS0037_UI_API.echarts.category_info_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.category_info_view.refine_data( data );;
		option.series[0].data = data.d

	chart.setOption( option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;
};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.category_info_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.category_info_view.getData_Async( param, function(data){
	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.category_info_view.refine_data( data );;
		option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.category_info_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.category_info_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.category_info_view.refine_data = function( param ){
	var colors = [];
	var i = 0, iLen = param.d.length,io;
	for(;i<iLen;++i){
		io = param.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.category_info_view.refine_data.tooltip_formatter = function( param ){
	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.CATEGORY_INFO_VIEW_TOOLTIP.replace( "<!=NM_CATE=!>", window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
			.replace( "<!=ID_CATE=!>"      , t0.categoryId )
			.replace( "<!=COUNT_PRODUCT=!>", t0.value )
			.replace( "<!=COUNT_BRAND=!>"  , t0.count_brand )
			.replace( "<!=COUNT_SHOP=!>"  , t0.count_shop );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.category_info_view.refine_data.label_formatter = function( param ){

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.CATEGORY_INFO_VIEW_LABEL.replace( "{{NAME}}", param.data.name )
		.replace( "{{ID_CATE}}",  param.data.categoryId )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{COUNT_PRODUCT}}", param.data.value )
		.replace( "{{COUNT_BRAND}}", param.data.count_brand )
		.replace( "{{COUNT_SHOP}}", param.data.count_shop );
};

/**
 * Taobao 병합데이터의 브랜드의 셀카운트분포를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 병합데이터의 브랜드분포를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async = function( param, cbFunction ){


	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data( data );;
		option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_BRAND_INFO_VIEW();

			option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data( data );;
			option.series[0].data = data.d

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_BRAND_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data( data );;
		option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_brand_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_brand_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data = function( param ){
	var colors = [];
	var i = 0, iLen = param.d.length,io;
	for(;i<iLen;++i){
		io = param.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data.tooltip_formatter = function( param ){

	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_BRAND_INFO_VIEW_TOOLTIP.replace( "<!=NM_BRAND=!>"      , window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
		.replace( "<!=ID_BRAND=!>"      , t0.brand_id )
		.replace( "<!=VALUE=!>", t0.value )
		.replace( "<!=SELL_AMOUNT=!>"  , t0.sellAmount )
		.replace( "<!=RATIO_SC=!>"  , t0.ratioSC )
		.replace( "<!=RATIO_SA=!>"  , t0.ratioSA );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view.refine_data.label_formatter = function( param ){

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_BRAND_INFO_VIEW_LABEL.replace( "{{NM_BRAND}}", param.data.name )
		.replace( "{{ID_BRAND}}",  param.data.brand_id )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{SELL_AMOUNT}}", param.data.sellAmount )
		.replace( "{{RAITO_SC}}", param.data.ratioSC )
		.replace( "{{RAITO_SA}}", param.data.ratioSA );
};

/**
 * 병합데이터의 샵별 셀카운트를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view = function( DATA ){

	var chart = window.SYS0037_UI_API.echarts.init( DATA );

	var data = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData( DATA )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};


/**
 * 병합데이터의 샵별 셀카운트를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view_Async = function( param, cbFunction ){


	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data( data );;
		option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data( data );;
		option.series[0].data = data.d

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_SHOP_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data( data );;
		option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})

};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_shop_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_shop_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data = function( param ){
	var colors = [];
	var i = 0, iLen = param.d.length,io;
	for(;i<iLen;++i){
		io = param.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data.tooltip_formatter = function( param ){

	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_SHOP_INFO_VIEW_TOOLTIP.replace( "<!=NM_SHOP=!>" , window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
		.replace( "<!=ID_SHOP=!>", t0.shopId )
		.replace( "<!=TYPE_SHOP=!>", t0.siteType )
		.replace( "<!=COUNT_PRODUCT=!>", t0.value )
		.replace( "<!=COUNT_SHOP=!>", t0.sellAmount )
		.replace( "<!=RATIO_SC=!>", t0.ratioSC )
		.replace( "<!=RATIO_SA=!>", t0.ratioSA );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_shop_view.refine_data.label_formatter = function( param ){

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_SHOP_INFO_VIEW_LABEL.replace( "{{NM_SHOP}}", param.data.name )
		.replace( "{{ID_SHOP}}",  param.data.shopId )
		.replace( "{{TYPE_SHOP}}", param.data.siteType )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{SELL_AMOUNT}}", param.data.sellAmount )
		.replace( "{{RAITO_SC}}", param.data.ratioSC )
		.replace( "{{RAITO_SA}}", param.data.ratioSA );
};

/**
 * 병합데이터의 카테고리별 셀카운트분포를 Tree Map 차트로보여준다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData( param )

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

		option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data( data );;
		option.series[0].data = data.d

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 병합데이터의 카테고리별 셀카운트분포를 Tree Map 차트로보여준다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async = function( param, cbFunction ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

			option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data( data );;
			option.series[0].data = data.d

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData( param )

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

			option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data( data );;
			option.series[0].data = data.d

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;
};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData_Async( param, function(data){
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

			option.color = window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data( data );;
			option.series[0].data = data.d

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_category_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.sellcount_info_by_category_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트데이터의 컬러코드를 지정한다..
 * @funnction
 * @param {Object} param
 * @return {Array} colors
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data = function( param ){
	var colors = [];
	var i = 0, iLen = param.d.length,io;
	for(;i<iLen;++i){
		io = param.d[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	return colors;
};

/**
 * 차트의 툴팁을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data.tooltip_formatter = function( param ){

	var value = param.value;
	var treePathInfo = param.treePathInfo;
	var treePath = [];

	for( var i=1; i<treePathInfo.length; i++ ) treePath.push( treePathInfo[ i ].name );

	var t0 = param.data;

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_CATEGORY_INFO_VIEW_TOOLTIP.replace( "<!=NM_CATE=!>" , window.echarts.format.encodeHTML( treePath.join( "/" ) ) )
		.replace( "<!=ID_CATE=!>", t0.categoryId )
		.replace( "<!=COUNT_PRODUCT=!>", t0.value )
		.replace( "<!=COUNT_SHOP=!>", t0.sellAmount )
		.replace( "<!=RATIO_SC=!>", t0.ratioSC )
		.replace( "<!=RATIO_SA=!>", t0.ratioSA );
};

/**
 * 차트의 라벨을 포맷팅한다.
 * @funnction
 * @param {Object} param
 * @return {String}
 */
window.SYS0037_UI_API.echarts.sellcount_info_by_category_view.refine_data.label_formatter = function( param ){

	return window.SYS0037_UI_API.echarts.CONST.TEMPLATE.SELLCOUNT_BY_CATEGORY_INFO_VIEW_LABEL.replace( "{{NM_CATE}}", param.data.name )
		.replace( "{{ID_CATE}}",  param.data.categoryId )
		.replace( "{{VALUE}}",  param.data.value )
		.replace( "{{SELL_AMOUNT}}", param.data.sellAmount )
		.replace( "{{RAITO_SC}}", param.data.ratioSC )
		.replace( "{{RAITO_SA}}", param.data.ratioSA );
};

/**
 * 해당브랜드의 카테고리별 판매량을 Pie 차트로 표출한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view = function( DATA ){

	var chart = window.SYS0037_UI_API.echarts.init( DATA );

	var data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData( DATA );
	var refine_data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.refine_data( data );

	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_BY_BRAND_INFO_VIEW();

		option.title.text     = refine_data.data.d.info.brandNm + ' - Brand 기준 카데고리별 셀카운트 분포';
		option.title.subtext  = refine_data.data.d.info.date;

		option.legend.data    = refine_data.data.d.legend;
		option.color          = refine_data.colors;
		option.series[0].data = refine_data.data.d.data;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 해당브랜드의 카테고리별 판매량을 Pie 차트로 표출한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {fcuntion} cbFunction
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view_Async = function( DATA, cbFunction ){

	var chart = window.SYS0037_UI_API.echarts.init( DATA );

	window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData_Async( DATA, function(data){
		var refine_data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.refine_data( data );

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CATEGORY_BY_BRAND_INFO_VIEW();

			option.title.text     = refine_data.data.d.info.brandNm + ' - Brand 기준 카데고리별 셀카운트 분포';
			option.title.subtext  = refine_data.data.d.info.date;

			option.legend.data    = refine_data.data.d.legend;
			option.color          = refine_data.colors;
			option.series[0].data = refine_data.data.d.data;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view.updateSeriesData = function( chart , DATA ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData( DATA );
		var refine_data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.refine_data( data );

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

			option.title.text     = refine_data.data.d.info.brandNm + ' - Brand 기준 카데고리별 셀카운트 분포';
			option.title.subtext  = refine_data.data.d.info.date;
			option.legend.data    = refine_data.data.d.legend;
			option.color          = refine_data.colors;
			option.series[0].data = refine_data.data.d.data;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view_Async.updateSeriesData = function( chart , DATA, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData_Async( DATA, function(data){
		var refine_data = window.SYS0037_UI_API.echarts.category_by_brand_info_view.refine_data( data );

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.SELLCOUNT_BY_CATEGORY_INFO_VIEW();

			option.title.text     = refine_data.data.d.info.brandNm + ' - Brand 기준 카데고리별 셀카운트 분포';
			option.title.subtext  = refine_data.data.d.info.date;
			option.legend.data    = refine_data.data.d.legend;
			option.color          = refine_data.colors;
			option.series[0].data = refine_data.data.d.data;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 Request 한다 - 동기.
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData = function( DATA ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_by_brand_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ DATA.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ DATA.HOST ] )
		.replace( "<!=NM_DB=!>"  , DATA.DB )
		.replace( "<!=NM_COL=!>" , DATA.COL )
		.replace( "<!=ID_BRAND=!>", DATA.brandId );

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 차트데이터를 Request 한다 - 비동기.
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view.getData_Async = function( DATA, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.category_by_brand_info_view.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ DATA.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ DATA.HOST ] )
		.replace( "<!=NM_DB=!>"  , DATA.DB )
		.replace( "<!=NM_COL=!>" , DATA.COL )
		.replace( "<!=ID_BRAND=!>", DATA.brandId );

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * Pie 차트의 옵션을 정제한다.
 * @function
 * @param {Object} param
 * @return {Object}
 */
window.SYS0037_UI_API.echarts.category_by_brand_info_view.refine_data = function( param ){

	var colors = [];
	var i = 0, iLen = param.d.data.length,io;
	for(;i<iLen;++i){
		io = param.d.data[ i ].name;
		colors.push( "#" + window.SYS0037_UI_API.echarts.numToHex( io ) )
	};

	var label00 = {
		normal: {
			formatter: '{a|{b}}{abg|}\n{hr|}\n  {b|sellCount：}{c|{c}}  {per|{d}%}  ',
			backgroundColor: '#eee',
			borderColor: '#aaa',
			borderWidth: 1,
			borderRadius: 4,
			rich: {
				a: { color: '#000', lineHeight: 33, align: 'center' },
				hr: { borderColor: '#aaa', width: '100%', borderWidth: 0.5, height: 0 },
				b: { color : "#000", fontSize: 12, lineHeight: 33 },
				c: { color : "#000", fontSize: 12, lineHeight: 33 },
				per: { color: '#eee', backgroundColor: '#334455', padding: [2, 4], borderRadius: 2 }
			}
			, rectangle : function(){ return this.el.getBound(); }
		}
	};

	var label01 = {
		normal: { show : false },
		emphasis : { show : false }
	};

	var labelLine00 = { length : 40,length2 : 40 };

	var i = 0, iLen = param.d.data.length,io;
	for(;i<iLen;++i){
		io = param.d.data[ i ];
		if( ( io.value / param.d.info.totalSC ) > 0.01 )
		{
			io.label = label00;
			io.labelLine = labelLine00;
		}
		else
		{
			io.label = label01;
			io.labelLine = label01;
		}
	};

	return {
		colors : colors
		, data : param
	};
};

/**
 * 문자열을 컬로코드 값으로 변경하는 함수
 * @function
 * @param {String} str
 * @return {String} color
 */
window.SYS0037_UI_API.echarts.numToHex = function( str ){
	/*
	//샘플코드 문자열을 컬러코드 값으로 변경하는 로직
	var n = ( renderChart.numToHex.ORIGIN_COLOR + parseInt( code ) ).toString( 16 );
	var _tmp0 = parseInt( n.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));
	var _tmp1;
	if( renderChart.numToHex.MAX_HEX_NUM < _tmp0 ){
	 	_tmp1 = _tmp0 - renderChart.numToHex.MAX_HEX_NUM;
	 	return parseInt( _tmp1.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));
	}

	return parseInt( n.toString().slice( 0, renderChart.numToHex.MAX_HEX_NUM_LEN ));

	var r = (i & 0xFF).toString(16);
	var g = ((i >> 8) & 0xFF).toString(16);
	var b = ((i >> 16) & 0xFF).toString(16);

	r = ('0' + r).slice(-2);
	g = ('0' + g).slice(-2);
	b = ('0' + b).slice(-2);

	return r + g + b;
	*/

	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	var color = '';
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 0xFF;
		color += ('00' + value.toString(16)).substr(-2);
	}
	return color;
};

/**
 * 랜덤 컬로코드를 생성하는 함수
 * @function
 * @return {String} color
 */
window.SYS0037_UI_API.echarts.getRandomColor = function(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[ Math.floor( Math.random() * 16 ) ];
	}
	return color;
};


/**
 * 데일리에러 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData( param );
	var _data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.refine_data( data );
	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword();
		option.title.text = param.HOST + " -데일리에러일현황- " + data.d.target_date;

		option.xAxis[0].data = _data.xAxisData;
		option.legend.data = _data.legend;

		var i = 0;
		var s,so;
		for( s in _data.values ){
			option.series[ i ].name = s;
			option.series[ i ].data = _data.values[ s ];
			++i;
		}

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데일리에러 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData_Async( param, function(data){

		var _data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.refine_data( data );
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword();
			option.title.text = param.HOST + " -수집키워드별 수집현황 - " + data.d.target_date;

			option.xAxis[0].data = _data.xAxisData;
			option.legend.data = _data.legend;

			var i = 0;
			var s,so;
			for( s in _data.values ){
				option.series[ i ].name = s;
				option.series[ i ].data = _data.values[ s ];
				++i;
			}

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData( param );
		var _data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.refine_data( data );
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword();
			option.title.text = param.HOST + " -데일리에러일현황- " + data.d.target_date;

			option.xAxis[0].data = _data.xAxisData;
			option.legend.data = _data.legend;

			var i = 0;
			var s,so;
			for( s in _data.values ){
				option.series[ i ].name = s;
				option.series[ i ].data = _data.values[ s ];
				++i;
			}

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData_Async( param, function(data){

		var _data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword.refine_data( data );
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword();
			option.title.text = param.HOST + " -수집키워드별 수집현황 - " + data.d.target_date;

			option.xAxis[0].data = _data.xAxisData;
			option.legend.data = _data.legend;

			var i = 0;
			var s,so;
			for( s in _data.values ){
				option.series[ i ].name = s;
				option.series[ i ].data = _data.values[ s ];
				++i;
			}

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 데일리에러 차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL )

	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데일리에러 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_DB=!>"  , param.DB )
		.replace( "<!=NM_COL=!>" , param.COL )

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword.refine_data = function( DATA ){
	var data = {
		xAxisData : [],
		values : {},
		legend : []
	};

	var i = 0,iLen = DATA.d.data.length,io;
	for(;i<iLen;++i){
		io = DATA.d.data[ i ];

		data.xAxisData.push( io.nm );

		var s,so
		for( s in io.values ){
			so = io.values[ s ];
			if( data.legend.indexOf( s ) == -1 ) data.legend.push( s );
			if( !data.values[ s ] ) data.values[ s ] = [];
			data.values[ s ].push( so );
		}
	}
	return data
};


/**
 * 데일리에러 현황차트를 생성하는 함수 - 동기실행
 * @funnction
 * @param {Object} param
 * @return {Object} chart
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend = function( param ){

	var chart = window.SYS0037_UI_API.echarts.init( param );

	var data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData( param );
	var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword_trend();
		option.color[ 0 ] = "#" + window.SYS0037_UI_API.echarts.numToHex( param.nm_keyword );
		option.title.text = param.HOST + " - 수집키워드트렌드 - " + param.nm_keyword

		option.xAxis[0].data = data.d.date;
		option.series[0].data = data.d.value;

	var dataZoomStart = 0;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

	window.SYS0037_UI_API.echarts.render( chart, option );

	//res 데어터 재사용을 위한 프포퍼티;
	chart.resData = data;

	return chart;

};

/**
 * 데일리에러 현황차트를 생성하는 함수 - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend_Async = function( param, cbFunction ){
	var chart = window.SYS0037_UI_API.echarts.init( param );

	window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData_Async( param, function(data){

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword_trend();
			option.title.text = param.HOST + " - 수집키워드트렌드 - " + param.nm_keyword
			option.color[ 0 ] = "#" + window.SYS0037_UI_API.echarts.numToHex( param.nm_keyword );

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.value;

	var dataZoomStart = 0;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		window.SYS0037_UI_API.echarts.render( chart, option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 차트데이터를 업데이트 한다 - 동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @return {Obejct} chart
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.updateSeriesData = function( chart , param ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );

	setTimeout(function(){
		var data = window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData( param );
		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword_trend();
			option.title.text = param.HOST + " - 수집키워드트렌드 - " + param.nm_keyword
			option.color[ 0 ] = "#" + window.SYS0037_UI_API.echarts.numToHex( param.nm_keyword );

			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.value;

	var dataZoomStart = 0;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		chart.hideLoading();

	}, window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT );

	return chart;

};

/**
 * 차트데이터를 업데이트 한다 - 바동기.
 * @funnction
 * @param {Object} chart
 * @param {Object} param
 * @param {function} cbFunction
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend_Async.updateSeriesData = function( chart , param, cbFunction ){

	chart.showLoading( window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.CHART_LOADER_OPTION );//loader 호출;

	window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData_Async( param, function(data){

		var option = window.SYS0037_UI_API.echarts.CONST.OPTIONS._COMMON.merge_brand_by_keyword_trend();
			option.title.text = param.HOST + " - 수집키워드트렌드 - " + param.nm_keyword;
			option.color[ 0 ] = "#" + window.SYS0037_UI_API.echarts.numToHex( param.nm_keyword );
			console.log( param.nm_keyword )
			console.log( window.SYS0037_UI_API.echarts.numToHex( param.nm_keyword ) )
			option.xAxis[0].data = data.d.date;
			option.series[0].data = data.d.value;

	var dataZoomStart = 0;
	var dataZoomEnd = option.xAxis[0].data.length - 1;

		option.dataZoom[0].startValue = dataZoomStart;
		option.dataZoom[1].startValue = dataZoomStart;
		option.dataZoom[0].endValue   = dataZoomEnd;
		option.dataZoom[1].endValue   = dataZoomEnd;

		chart.setOption( option );

		chart.hideLoading();//loader 숨김;

		//res 데어터 재사용을 위한 프포퍼티;
		chart.resData = data;

		cbFunction( chart )
	})
};

/**
 * 데일리에러 차트데이터를 API서버에 요청한다. - 동기실행
 * @funnction
 * @param {Object} param
 * @return {String} data
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData = function( param ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword_trend.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_KEYWORD=!>", encodeURIComponent( param.nm_keyword ) )


	var data = JSON.parse( window.b2link.xhr.reqSync_String( url ) );

	if( window.b2link.response.getResultStatus( data ) )
	{
		return data
	}
	else
	{
		//결과가 없음;
	}
};

/**
 * 데일리에러 현황차트데이터를 API서버에 요청한다. - 비동기실행
 * @funnction
 * @param {Object} param
 * @param {function} cbFunction //CallbackFunction;
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.getData_Async = function( param, cbFunction ){
	var url = window.SYS0037_UI_API.echarts.CONST.URLS._COMMON.merge_brand_by_keyword_trend.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ param.HOST ] )
		.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ param.HOST ] )
		.replace( "<!=NM_KEYWORD=!>", encodeURIComponent( param.nm_keyword ) )

	SUtilXMLHttpReqGet.req_String( url, function(result){
		if( window.b2link.response.getResultStatus( result ) )
		{
			var data = JSON.parse( result );
			cbFunction( data );
		}
		else
		{
			//결과가 없음;
		}
	})
};

/**
 * 차트생성옵션을 정제한다. -- 사용하지않음;
 * @function
 */
window.SYS0037_UI_API.echarts.merge_brand_by_keyword_trend.refine_data = function( DATA ){};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
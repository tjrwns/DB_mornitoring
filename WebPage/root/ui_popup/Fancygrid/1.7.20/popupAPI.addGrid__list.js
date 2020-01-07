window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/jQuery/3.2.1/jquery-3.2.1.min.js" );
window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/FancyGrid/import-js.js" );

(function(){

	window.ELS = {
		CONTAINER : window.document.getElementById( "container" )
	};

	window.TtwLog = window.opener.TtwLog;
	//var FancyGrid = window.opener.FancyGrid;
	window.FancygridConfig = {
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
	};

	window.addGrid = function( dataURL ){
	console.log( dataURL )
//	var dataURL = 'http://localhost:45528/수집데이터머지/taobao/상품상세정보가져오기검색조건대용량?code_db=TAOBAO-DAILY&nm_db=Taobao_2019&nm_col=20190814&skip=0&limit=100&search={"brandId":"3612918","categoryId":"50010792"}';
	var data = JSON.parse( window.opener.b2link.xhr.reqSync_String( dataURL.replace("<!=LIMIT=!>" , window.FancygridConfig.paging.limit.toString() )
		.replace("<!=SKIP=!>", ( window.FancygridConfig.limit  * window.FancygridConfig.paging.curPage ).toString() )
		)
	);

	if( window.innerWidth > 1920 ){
		window.FancygridConfig.colCnt = 10;
		window.FancygridConfig.rowCnt = 5;
		window.FancygridConfig.paging.limit = 200;

		window.FancygridConfig.cell_height = 100//window.innerHeight / window.FancygridConfig.rowCnt;

	}
	else
	{
		window.FancygridConfig.colCnt = 10;
		window.FancygridConfig.rowCnt = 5;
		window.FancygridConfig.paging.limit = 70;
		window.FancygridConfig.cell_height = 200;
	}

	//window.FancygridConfig.search = make_search_condition();

//	window.FancygridConfig.paging.url = _URLS.URL1.replace( "<!=NM_PATH=!>", window.SYS0037_UI_API.CONST.ROUTER_PATH[ _TARGET_SITE_NAME_ ] )
//			.replace( "<!=CODE_DB=!>", window.SYS0037_UI_API.CONST.CONNECTION_INFO[ _TARGET_SITE_NAME_ ] )
//			.replace( "<!=NM_DB=!>", _NM_DB_ )
//			.replace( "<!=NM_COL=!>", _NM_COL_ )
//			.replace( "<!=SEARCH=!>", window.FancygridConfig.search );

//	var data = JSON.parse( window.b2link.xhr.reqSync_String(
//		window.FancygridConfig.paging.url.replace( "<!=SKIP=!>", window.FancygridConfig.paging.limit * ( window.FancygridConfig.paging.curPage - 1 ) )
//		.replace( "<!=LIMIT=!>", window.FancygridConfig.paging.limit )
//	));
	console.log( data.d )
	window.FancygridConfig.paging.totalCount = data.d.totalCount;
	window.FancygridConfig.paging.totalPage = Math.ceil( window.FancygridConfig.paging.totalCount / (( window.FancygridConfig.colCnt + 1 ) * ( window.FancygridConfig.rowCnt )));


	//_CTRLS.window0.attachEvent( "onResizeFinish", reset_window_ui_chart );
	//_CTRLS.window0.attachEvent( "onMaximize", reset_window_ui_chart );

//	_CTRLS.window0.attachEvent( "onClose", function(){
//		_CTRLS.window0.detachAllEvents();
//		window.dhx$Windows.close( _CTRLS.window0 );
//		_CTRLS.window0 = null;
//	});

//	while( _ELS.DIV_FANCYGRID_LIST.firstChild ) _ELS.DIV_FANCYGRID_LIST.removeChild( _ELS.DIV_FANCYGRID_LIST.firstChild );

	var refindData = function( listArray ){

		//*/
		var to = {};
		var ta = []
		var i = 0,iLen = listArray.length,io;
		var k = 0;

		for(;i<iLen;++i){

			to[ "item" + k ] = listArray[ i ];

			if( k == window.FancygridConfig.colCnt )
			{
				k = 0;
				ta.push( to );
				to = {};
			}
			else ++k;
		}

		if( Object.keys( to ).length != 0 ) ta.push( to );

		return ta;
		/*/
		return listArray;
		//*/
	};

	var data00 = refindData( data.d.data );
	//_CTRLS.fancygrid_1 = create_fancygrid_COLList( refineData );


	var cols = [];
	var _to0;
	var i = 0,iLen = window.FancygridConfig.colCnt + 1;
	for(;i<iLen;++i){
		_to0 =  { index : "item" + i };
		cols.push( _to0 );
	}

	var bInit = 0;
	var img_width = ( window.innerWidth - 400 ) / ( window.FancygridConfig.colCnt + 1 );

	var grid = new FancyGrid({ renderTo : "container"

		, cellHeight : window.FancygridConfig.cell_height
		//, cellHeaderHeight: 0

		, width : window.innerWidth
		, height : window.innerHeight
		, nativeScroller: true
		, theme : { name : "bootstrap"}
		, data : data.d.data
		, defaults : { type : "string", sortable : true, ellipsis : false, resizable : true, flex :true , type : "string" }

		//----------;
		, bbar : [
			{
				type: 'button',
				text: 'prevPage',
				cls: 'prevPage',
				//handler: prevPage
			}
			, {
				type: 'button',
				text: 'nextPage',
				cls: 'nextPage',
				//handler: nextPage
			}
			, {

				type: 'number',
				vtype: {
					before: ['notempty', 'notnan'],
					type: 'min',
					param: 1
				},
				text : window.FancygridConfig.paging.curPage,
				events: [{
					enter: function(grid, o){
						if( !( o * 1 ) ) return;

						//movePage( o )
					}
				}]
			}
			, {
				text: " / ",
				type: 'text'
			}
			, {
				text: window.FancygridConfig.paging.totalPage,
				type: 'text'
			}
			, 'side'
			, {
				text: ( window.FancygridConfig.paging.curPage * window.FancygridConfig.paging.limit ) + " / " + window.FancygridConfig.paging.totalCount,
				type: 'text'
			}
		]

		//----------;
		//, bbar : [{ disabled : true, text : "Bottom Bar", type : "button" } ]
		, tbar : [ { type : "search", emptyText : "Search", paramsMenu : true } ]
		//, subTBar : [{ type : "search", width : 200, emptyText : "Search", paramsMenu : true } ]
		//----------;
/*
brandId: "1682788571"
brandName: "1682788571"
categoryId: "50010796"
categoryName: "50010796"
goodsId: 596976736624
goodsImg: "//img.alicdn.com/imgextra/i4/3375170974/O1CN01HE0J4b1J48JwGH17g_!!0-item_pic.jpg"
goodsName: "完美日记马赛克小方块单色眼影闪粉珠光亮片偏光哑光星星网红盘"
id: 1004
keyword: ""
price: "26.9"
sellCount: 314633
shopId: "223545883"
shopName: "perfectdiary旗舰店"
*/
		//, columns : cols
		, columns : [
			  { index : "goodsImg"    , title : "goodsImg", type : "image",  cls : "taobao", width : window.FancygridConfig.cell_height, render : function( o ){ o.style = { "text-align" : "center", "width" : "200px", "height" : "200px" }; return o; }, flex:0  }
			, { index : "brandId"     , flex : 1, title : "brandId" }
			, { index : "brandName"   , flex : 1, title : "brandName" }
			, { index : "goodsId"     , flex : 1, title : "goodsId" }
			, { index : "goodsName"   , flex : 1, title : "goodsName", render : function( o ){ o.style = { "white-space" : "pre-line" }; return o; } }
			, { index : "categoryId"  , flex : 1, title : "categoryId" }
			, { index : "categoryName", flex : 1, title : "categoryName" }
			, { index : "shopId"      , flex : 1, title : "shopId" }
			, { index : "shopName"    , flex : 1, title : "shopName" }
//			, { type  : "action"      , width : 65, items : [ { text : "select", cls : "test", action : "cellclick" } ], filter : { header : false } }
		]

		//, controllers : [ "DBExport_colList_ctrl" ]
		, events : [
			{
				init: function(grid){
					//grid.header.hide();
					grid.setWidth( grid.getWidth() - 5 );
				}
				, scope: {}// not required
			}
			, {
				celldblclick : function( g, o ){
					//product_info_window( o.value );
				}
			}
		]
	});

	//_CTRLS.fancygrid_1.bbar[2].setValue( window.FancygridConfig.paging.curPage );

	//화면 레이아웃 재배치;
	//reset_layout();

	return //_CTRLS.fancygrid_1;


	};

render_img = function( o ){

	var _THTMLS = {
		PRODUCT_INFO_MODAL_TEMPLATE : window.b2link.xhr.reqSync_String( window.b2link.url.getServerURL_WebServer_Self() + "/ui/App/BatchDesktop/productInfoViewThumb_info-window.html" )
		, PRODUCT_INFO_LIST_COL : '<div class="ui grid">'
				+ '<div class="row" style="    max-height: 190px;padding: 5px 0px 2px 0px;"><div class="sixteen wide column" style="margin: auto;top: 0;bottom: 0;left: 0;right: 0;text-align:center;padding: 10px" ><img clsaa="ui image centered" src="{{goodsImg}}"></div></div>'
				+ '<div class="row" style="white-space: normal;display: contents;"><div class="sixteen wide column" style="line-height: 25px;">{{keyword}}{{sellCount}}{{brandName}}{{price}}</div></div>'
				//+ '<div class="ui divider"></div>'
				+ '<div class="row" style="white-space: normal;display: flex;padding: 2px;" ><div class="sixteen wide column" style="height: 30px;display: block;line-height: 15px;overflow: hidden;">{{goodsName}}</div></div>'
				//+ '<div class="row"><div class="sixteen wide column"><div><!=goodsName=!></div></div></div>'
				+ '</div>'
		//, SELL_COUNT_DIV : '<div style="background-color: <!=BACKGROUND_COLOR=!>;width: 100%;height: 30px;color: <!=COLOR=!>;font-weight: bold;font-size: medium;line-height: 30px;"><!=sellCount=!></div>'
	};

	if( o.value && o.value.goodsName )
	{
		var keywordTemplate = "";
		var sellCountTemplate = "";
		var barndNameTemplate = "";
		var priceTemplate = "";

		if( typeof o.value.keyword == "object" )
		{
			var s,so;
			for( s in o.value.keyword )
			{
				keywordTemplate = keywordTemplate + '<div class="ui violet horizontal label font10">' + s + '</div>';
			}
		}
		else
		{
			if( o.value.keyword != "" ) keywordTemplate = '<div class="ui violet horizontal label font10">' + o.value.keyword + '</div>';
		}

		if( o.value.sellCount != -1 ) sellCountTemplate = '<div class="ui red horizontal label font10">' + o.value.sellCount + '</div>';
		if( o.value.brandName != "" ) barndNameTemplate = '<div class="ui pink horizontal label font10">' + o.value.brandName + '</div>';
		if( o.value.price != -1 ) priceTemplate = '<div class="ui purple horizontal label font10">' + o.value.price + '</div>';

		var _template = _THTMLS.PRODUCT_INFO_LIST_COL.replace("{{goodsName}}", o.value.goodsName || "No Data" )
			.replace("{{goodsImg}}", o.value.goodsImg || "https://cdn.warehouseskateboards.com/images/products/preview/no-image.jpg" )

			//label;
			.replace("{{keyword}}", keywordTemplate )
			.replace("{{sellCount}}", sellCountTemplate )
			.replace("{{brandName}}", barndNameTemplate )
			.replace("{{price}}", priceTemplate );
	}
	else
	{
		var _template = "";
	}

	o.style = {
		"backgroundColor" : "#fff"
		, "color" : "#666"
	};

	o.value = _template;
	return o;
};

//3612918
//
//50010792

})();

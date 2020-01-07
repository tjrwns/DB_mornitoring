//window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/jQuery/3.2.1/jquery-3.2.1.min.js" );
window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/FancyGrid/import-js.js" );

var F0 = window.b2link.element.getElementByClassName;
var F1 = window.b2link.element.getElementsByClassName;

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


(function(){

	window.ELS = {
		CONTAINER : window.document.getElementById( "container" )
	};
	window.CTRLS = {};

	window.FancygridConfig = {
		colCnt : null
		, rowCnt : null
		, cell_height : null
		, paging : {
			url : null
			, limit : 50
			, curPage : 1
			, totalCount : 0
			, totalPage : 0
		}
		, search : null
	};
	window.ELS.CONTAINER.style.height = window.innerHeight + "px";

	window.addGrid = function( param ){

		while( window.ELS.CONTAINER.firstChild ) window.ELS.CONTAINER.removeChild( window.ELS.CONTAINER.firstChild );
		//기존돔에 서치관련 돔을 생성한다.;
		var el_search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_input_vertical();
		window.ELS.CONTAINER.appendChild( el_search );

		window.ELS.SEARCH_INPUTS = F1( window.document, "id-input-search" );
		window.ELS.BTN_SEARCH = F0( window.document, "id-btn-search" );
		window.ELS.BTN_RESET = F0( window.document, "id-btn-reset" );
		window.ELS.DIV_SEARCH = F0( window.document, "id-div-search-input" );

		window.ELS.BTN_SEARCH.addEventListener( "click", _el_btn_search__click );
		window.ELS.BTN_RESET.addEventListener( "click", _el_btn_reset__click );

		var DATA = {
			HOST : param.HOST
			, DB : param.DB
			, COL : param.COL

			//, elementID : "div-fancygrid-List"
			//, width : window.innerWidth - 20
			, height : window.innerHeight - window.ELS.DIV_SEARCH.offsetHeight - 60

			, pagingConfig : {
				colCnt : null
				, rowCnt : null
				, cell_height : null
				, paging : { url : null, limit : 100, curPage : 1, totalCount : 0, totalPage : 0 }
				,search : param.search
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

		if( window.innerWidth > 1920 ) DATA.pagingConfig.colCnt = 19;
		else DATA.pagingConfig.colCnt = 9;

		DATA.pagingConfig.rowCnt = ( ( window.innerHeight - window.ELS.DIV_SEARCH.offsetHeight ) / 400 ).toFixed();
		DATA.pagingConfig.cell_height = ( ( window.innerHeight - window.ELS.DIV_SEARCH.offsetHeight ) / DATA.pagingConfig.rowCnt ).toFixed();

		DATA.pagingConfig.paging.limit = ( DATA.pagingConfig.colCnt + 1 ) * DATA.pagingConfig.rowCnt;
		DATA.pagingConfig.search = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.make_search_condition( window.ELS.SEARCH_INPUTS );

		window.SYS0037_UI_API.fancygrid.render_product_list_thumnail.getData( DATA, function( result ){
			window.CTRLS.fancygrid_1 = window.SYS0037_UI_API.fancygrid.render_product_list_thumnail( result );

			window.CTRLS.fancygrid_1.on( "celldblclick", function( grid, value ){
				if( value.value == "" ) return;
				var DATA = {
					grid : grid
					, value : value
					, modalInex : "productDetailModal00"
				};
debugger;
				window.SYS0037_UI_API.fancygrid.event.click_cell_render_product_list_thumnail( DATA );
			});

//			window.CTRLS.window0.grid = window.CTRLS.fancygrid_1;
//			window.CTRLS.window0.grid.prevPage = window.CTRLS.fancygrid_1.prevPage;
//			window.CTRLS.window0.grid.nextPage = window.CTRLS.fancygrid_1.nextPage;
//			window.CTRLS.window0.grid.search_product = window.CTRLS.fancygrid_1.search_product;
//			window.CTRLS.window0.windowClose = window.CTRLS.window0.windowClose;

		});

	};
})();

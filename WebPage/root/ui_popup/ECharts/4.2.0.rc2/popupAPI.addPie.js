(function(){

	window.ELS = {
		CONTAINER : window.document.getElementById( "container" )
		, CHART : window.document.getElementById( "chart" )
		, HISTORY : window.document.getElementById( "history" )

		, TEMPLATE_CHART : window.document.getElementById( "template-chart" )
		, TEMPLATE_HISTORY : window.document.getElementById( "template-history" )

		, CHART_LIST : {}

	};

	window.CTRLS = {
		CHART_LIST : {}
	};

	/**
	 * @property window.addChart에서 사용하는 HTML Template
	 */
	window.TEMPLATE_CHART_HTML = window.ELS.TEMPLATE_CHART.children[0].outerHTML;
	window.TEMPLATE_HISTORY_HTML = window.ELS.TEMPLATE_HISTORY.children[0].outerHTML;;

	window.addChart = function( param ){
		console.log( param )
		window.addChart.data.HOST = param.reqInfo.HOST;
		window.addChart.data.DB = param.reqInfo.DB;
		window.addChart.data.COL = param.reqInfo.COL;
		window.addChart.data.barndId = param.reqInfo.brandId

		if( !window.ELS.CHART_LIST ) window.ELS.CHART_LIST = {};
		if( !window.ELS.HISTORY_LIST ) window.ELS.HISTORY_LIST = {};

		var id = "chart-" + param.reqInfo.brandId;

		window.ELS.CONTAINER.style.height = window.innerHeight + "px";
		window.ELS.CONTAINER.style.width = window.innerWidth + "px";


	if( !window.CTRLS.CHART_LIST[ id ] )
	{
		window.ELS.CHART.insertBefore( window.opener.b2link.html.createHTMLElement( window.TEMPLATE_CHART_HTML.replace( /<!=ID=!>/gi, "div-chart-outer-" + id )
			.replace( "{{BG_COLOR}}", param.chartInfo.color )
			.replace( "{{HEIGHT}}", "100%" )
			.replace( "{{WIDTH}}", "100%" )
		), window.ELS.CHART.childNodes[0] );

		window.ELS.CHART_LIST[ id ] = window.document.getElementById( "div-chart-outer-" + id );

		window.ELS.HISTORY.insertBefore( window.opener.b2link.html.createHTMLElement( window.TEMPLATE_HISTORY_HTML.replace( "{{BRAND_NM}}", param.chartInfo.data.name )
			.replace( "{{BG_COLOR}}", param.chartInfo.color )
			.replace( /{{ID}}/gi, "div-history-" + id )
			.replace( /{{SELL_COUNT}}/gi, param.chartInfo.data.value )
			.replace( /{{RATIO_SELL_COUNT}}/gi, param.chartInfo.data.ratioSC )
			.replace( /{{SELL_AMOUNT}}/gi, param.chartInfo.data.sellAmount )
			.replace( /{{RATIO_SELL_AMOUNT}}/gi, param.chartInfo.data.ratioSA )
		), window.ELS.HISTORY.childNodes[0] );

		window.ELS.HISTORY_LIST[ id ] = window.document.getElementById( "div-history-" + id );

		var DATA = {
			HOST : window.addChart.data.HOST
			, DB : window.addChart.data.DB
			, COL : window.addChart.data.COL
			, brandId : window.addChart.data.barndId
			, elementID : null
		};

		DATA.element = window.ELS.CHART_LIST[ id ];

		window.SYS0037_UI_API.echarts.category_by_brand_info_view_Async( DATA,function(chart){
			window.CTRLS.CHART_LIST[ id ] = chart
			window.ELS.CHART_LIST[ id ] = window.document.getElementById( "div-chart-outer-" + id );
//			var s,so;
//			for( s in window.ELS.HISTORY_LIST ){
//				so = window.ELS.HISTORY_LIST[ s ];
//				if( s == id ) so.style.border = "5px solid #e4e4e4";
//				else so.style.border = "0px solid #fff";
//			}

			window.ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
			window.ELS.HISTORY_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
			//window.CTRLS.CHART_LIST[ id ].on('dblclick', _evt_click_pie_chart )
			resize_chart()


			window.CTRLS.CHART_LIST[ id ].on('dblclick',function (params){

				var popupId = window.opener.SYS0037_UI_API.CONST.CONNECTION_INFO[ window.addChart.data.HOST ] + "-" +  window.addChart.data.DB + "-" +  window.addChart.data.COL + "- Product List";
				var popupW = window.screen.availWidth / 2;
				var popupH = window.screen.availHeight;

				var DATA = {
					HOST : window.addChart.data.HOST
					, DB : window.addChart.data.DB
					, COL : window.addChart.data.COL
					, brandId : window.addChart.data.barndId
					, search : { brandId : window.addChart.data.barndId, categoryId : params.data.cateId }
				};

				if( !window.opener.b2link.open._map[ popupId ] )
				{
					window.opener.b2link.open._map[ popupId ] = window.opener.b2link.open.newWindow__RelativeCoords( "./index-popup.common.html", popupId,
						{
							w : popupW//width;
							, h : popupH//height;
							, l : popupW//left;
							, t : 0//top;
							, bCenter : false
							, params : ""//Popup Parameters;
						}
					);

						//팡법클로즈이벤트 캣치;
					window.opener.b2link.open._map[ popupId ].addEventListener('beforeunload', function(e){
						delete window.opener.b2link.open._map[ popupId ].CTRLS[ params.data.brand_id ];
						delete window.opener.b2link.open._map[ popupId ];
					});

					window.opener.b2link.open._map[ popupId ].__onload = function(){
						window.opener.b2link.open._map[ popupId ].document.body.id = "body";
						window.opener.b2link.open._map[ popupId ].b2link.util.importHTMLJS( "./ui_popup/Fancygrid/1.7.20/popup-55.html", "./ui_popup/Fancygrid/1.7.20/popupAPI.addGrid__thumnail.js", "div_0__UI_Component_Panel" );
						window.opener.b2link.open._map[ popupId ].addGrid( DATA );
					};

				}
				else
				{
					window.opener.b2link.open._map[ popupId ].focus();
					window.opener.b2link.open._map[ popupId ].addGrid( DATA );

				}
				/*/
				POPUP.addEventListener('load', function(e) {
					console.log('popup load finished');
					var EVT_POPUP_LOAD_END = function(){
						window.clearTimeout( EVT_POPUP_LOAD_END.TIMEOUT );
						if( POPUP.popupInitialized )
						{
							POPUP.b2link.util.importHTMLJS( "./ui_popup/Fancygrid/1.7.20/popup-55.html", "./ui_popup/Fancygrid/1.7.20/popupAPI.addGrid.js", "body" );
							POPUP.addGrid();
						}
						else EVT_POPUP_LOAD_END.TIMEOUT = window.setTimeout( EVT_POPUP_LOAD_END, 100 );
					};
					EVT_POPUP_LOAD_END.TIMEOUT = -1;
					EVT_POPUP_LOAD_END.TIMEOUT = window.setTimeout( EVT_POPUP_LOAD_END, 100 );
					self.focus();
				});
				//*/
			});

		})
	}
	else
	{
		window.ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' });
		var s,so;
		for( s in window.ELS.HISTORY_LIST ){
			so = window.ELS.HISTORY_LIST[ s ];
			if( s == id ) so.style.border = "5px solid #fff";
			else so.style.border = "0px solid #fff";
		}
	}

		//새로고침방지이벤트;
		window.addEventListener("keydown",function(e){
			if( (e.ctrlKey == true && (e.keyCode == 78 || e.keyCode == 82)) || (e.keyCode == 116) ) {
				e.keyCode = 0;
				e.cancelBubble = true;
				e.returnValue = false;
			}
		});

		window.ELS.HISTORY_LIST[ id ].addEventListener( "click", function(e){
//
//			function updateColor( _col ){
////				var col = hexToRgb($("#color").val());
//				var _t = _col.slice( 4, _col.length - 1 ).split(",")
//				//var col = hexToRgb( _col )
//				var col = arrayToRgb( _t )
//				var sat = 0.01;
//				var gray = col.r * 0.3086 + col.g * 0.6094 + col.b * 0.0820;
//
//				col.r = Math.round(col.r * sat + gray * (1-sat));
//				col.g = Math.round(col.g * sat + gray * (1-sat));
//				col.b = Math.round(col.b * sat + gray * (1-sat));
//
//				var out = rgbToHex(col.r,col.g,col.b);
//				return out;
////				$('#output').val(out);
////
////				$('body').css("background",out);
//			}
//
//			function arrayToRgb( arr ) {
//
//				return {
//					r : Number( arr[ 0 ] )
//					,g : Number( arr[ 1 ] )
//					,b : Number( arr[ 2 ] )
//				}
//			}
//
//			function componentToHex(c) {
//				var hex = c.toString(16);
//				return hex.length == 1 ? "0" + hex : hex;
//			}
//
//			function rgbToHex(r, g, b) {
//				return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//			}
//
//			function hexToRgb(hex) {
//				var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//				return result ? {
//					r: parseInt(result[1], 16),
//					g: parseInt(result[2], 16),
//					b: parseInt(result[3], 16)
//				} : null;
//			}
//
//			var s,so;
//			for( s in window.ELS.HISTORY_LIST ){
//				so = window.ELS.HISTORY_LIST[ s ];
//				if( s == id ){
//					var _c = updateColor( so.style.backgroundColor );
//					so.style.border = "5px solid " + _c;
//				}
//				else so.style.border = "0px solid #fff";
//			}
			window.ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
		});

		//차트리사이즈이벤트;

	};

	window.addChart.data = {
		HOST : null
		, DB : null
		, COL : null
		, brandId : null
	};


	var resize_chart = function(){
		var docW = window.innerWidth;
		var scrollbarWidth = window.ELS.CHART.offsetWidth - window.ELS.CHART.clientWidth;
		var s,so;
		for( s in window.ELS.CHART_LIST ){
			so = window.ELS.CHART_LIST[ s ];
			so.style.width = ( docW - window.ELS.HISTORY.offsetWidth - scrollbarWidth - 20 ) + "px";
		}

		var s,so;
		for( s in window.CTRLS.CHART_LIST ){
			so = window.CTRLS.CHART_LIST[ s ]
			so.resize();
		}

	}
})();
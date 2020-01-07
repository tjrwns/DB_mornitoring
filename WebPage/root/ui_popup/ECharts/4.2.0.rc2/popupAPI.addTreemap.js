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

	window.addChart.data.HOST = param.HOST;
	window.addChart.data.DB = param.DB;
	window.addChart.data.COL = param.COL;

	if( !window.ELS.CHART_LIST ) window.ELS.CHART_LIST = {};
	if( !window.ELS.HISTORY_LIST ) window.ELS.HISTORY_LIST = {};

	var id = "chart-" + param.HOST + "-" + param.DB + "-" + param.COL;

	window.ELS.CONTAINER.style.height = window.innerHeight + "px";
	window.ELS.CONTAINER.style.width = window.innerWidth + "px";

	if( !window.CTRLS.CHART_LIST[ id ] )
	{
		window.ELS.CHART.insertBefore( window.opener.b2link.html.createHTMLElement( window.TEMPLATE_CHART_HTML.replace( /<!=ID=!>/gi, "div-chart-outer-" + id )
			.replace( "{{HEIGHT}}", "100%" )
			.replace( "{{WIDTH}}", "100%" )
		), window.ELS.CHART.childNodes[0] );

		window.ELS.CHART_LIST[ id ] = window.document.getElementById( "div-chart-outer-" + id );

		window.ELS.HISTORY.insertBefore( window.opener.b2link.html.createHTMLElement( window.TEMPLATE_HISTORY_HTML.replace( "{{TITLE}}",  param.HOST + "-" + param.DB + "-" + param.COL )
			.replace( "{{BG_COLOR}}", "#fff" )
			.replace( /{{ID}}/gi, "div-history-" + id )
		), window.ELS.HISTORY.childNodes[0] );

		window.ELS.HISTORY_LIST[ id ] = window.document.getElementById( "div-history-" + id );
		window.ELS.HISTORY_LIST[ id ].addEventListener( "click", function(e){
			debugger;
			var s,so;
			for( s in window.ELS.HISTORY_LIST ){
				so = window.ELS.HISTORY_LIST[ s ];
				if( s == id )
				{
					so.style.backgroundColor = "#fff";
				}
				else
				{
					so.style.backgroundColor = "#e4e4e4";
				}
			}

			var s,so;
			for( s in window.ELS.CHART_LIST ){
				so = window.ELS.CHART_LIST[ s ];
				if( s == id )
				{
//					so.style.border = "5px solid #fff";
					so.parentElement.style.backgroundColor = "#eee";
				}
				else
				{
//					so.style.border = "0px solid #fff";
					so.parentElement.style.backgroundColor = "#eee";
				}
			}


			window.ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' })
		});

		var DATA = {
			HOST : window.addChart.data.HOST
			, DB : window.addChart.data.DB
			, COL : window.addChart.data.COL
			, elementID : null
		};

		DATA.element = window.ELS.CHART_LIST[ id ];

		var s,so;
		for( s in window.ELS.HISTORY_LIST ){
			so = window.ELS.HISTORY_LIST[ s ];
			if( s == id ) so.style.backgroundColor = "#fff";
			else so.style.backgroundColor = "#e4e4e4";
		}

		window.SYS0037_UI_API.echarts.sellcount_info_by_brand_view_Async( DATA,function(chart){
			window.CTRLS.CHART_LIST[ id ] = chart
			window.ELS.CHART_LIST[ id ] = window.document.getElementById( "div-chart-outer-" + id );
			window.ELS.CHART_LIST[ id ].scrollIntoView({ behavior: 'smooth' })
			window.ELS.HISTORY_LIST[ id ].scrollIntoView({ behavior: 'smooth' })
			//window.CTRLS.CHART_LIST[ id ].on('dblclick', _evt_click_pie_chart )
			resize_chart()

			window.CTRLS.CHART_LIST[ id ].on('dblclick',function (params){

				var DATA = {
					chartInfo : params
					, reqInfo : {
						HOST : window.addChart.data.HOST
						, DB : window.addChart.data.DB
						, COL : window.addChart.data.COL
						, brandId : params.data.brand_id
					}
				};
				var popupId = window.SYS0037_UI_API.CONST.CONNECTION_INFO[ window.addChart.data.HOST ] + "-" + window.addChart.data.DB + "-" + window.addChart.data.COL;
				var popupW = window.screen.availWidth / 2;
				var popupH = window.screen.availHeight / 2;

				if( !window.opener.b2link.open._map[ popupId ] )
				{
					 window.opener.b2link.open._map[ popupId ] = window.opener.b2link.open.newWindow__RelativeCoords( "./index-popup.common.html", popupId,
						{
							w : popupW//width;
							, h : popupH//height;
							, l : 0//left;
							, t : popupH//top;
							, bCenter : false
							, params : ""//Popup Parameters;
						}
					);

					 window.opener.b2link.open._map[ popupId ].__onload = function(){
						debugger;
						window.opener.b2link.open._map[ popupId ].document.body.id = "body";
						window.opener.b2link.open._map[ popupId ].b2link.util.importHTMLJS( "./ui_popup/ECharts/4.2.0.rc2/popup-addPie.html", "./ui_popup/ECharts/4.2.0.rc2/popupAPI.addPie.js", "div_0__UI_Component_Panel" );
						window.opener.b2link.open._map[ popupId ].addChart( DATA );
						window.opener.b2link.open._map[ popupId ].focus();
					};
				}
				else
				{
					window.opener.b2link.open._map[ popupId ].addChart( DATA );
					window.opener.b2link.open._map[ popupId ].focus();
				}
			})
		})
	}
	else
	{
		window.ELS.CHART_LIST[ id ].parentElement.scrollIntoView({ behavior: 'smooth' });
		var s,so;
		for( s in window.ELS.HISTORY_LIST ){
			so = window.ELS.HISTORY_LIST[ s ];
			if( s == id )
			{
				so.style.backgroundColor = "#fff";
			}
			else
			{
				so.style.backgroundColor = "#e4e4e4";
			}
		}
	}
	debugger;
		//새로고침방지이벤트;
		window.addEventListener("keydown",function(e){
			if( (e.ctrlKey == true && (e.keyCode == 78 || e.keyCode == 82)) || (e.keyCode == 116) ) {
				e.keyCode = 0;
				e.cancelBubble = true;
				e.returnValue = false;
			}
		});

	};

	window.addChart.data = {
		HOST : null
		, DB : null
		, COL : null
	};


	var resize_chart = function(){
		var docW = window.innerWidth;
		var scrollbarWidth = window.ELS.CHART.offsetWidth - window.ELS.CHART.clientWidth;
		var s,so;
		for( s in window.ELS.CHART_LIST ){
			so = window.ELS.CHART_LIST[ s ];
			debugger;
			console.log( docW - scrollbarWidth )
			so.style.width = ( docW - window.ELS.HISTORY.offsetWidth - scrollbarWidth - 20 ) + "px";
		}

		var s,so;
		for( s in window.CTRLS.CHART_LIST ){
			so = window.CTRLS.CHART_LIST[ s ]
			so.resize();
		}


	}
})();
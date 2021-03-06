(function(){

	window.ELS = {
		CONTAINER : window.document.getElementById( "container" )

		, TEMPLATE : window.document.getElementById( "template" )
	};

	/**
	 * @property window.addChart에서 사용하는 HTML Template
	 */
	window.TEMPLATE_HTML = window.ELS.TEMPLATE.children[0].outerHTML;

	window.addChart = function( elementID, dataURL ){
		//var reqUrl = window.document.getElementById( "data" ).getAttribute( "data" );
		//window.DATA = JSON.parse( window.document.getElementById( "data" ).getAttribute( "data" ) );


		window.ELS.CONTAINER.appendChild( window.opener.b2link.html.createHTMLElement( window.TEMPLATE_HTML.replace( "<!=ID=!>", elementID ) ) );

		var data = JSON.parse( window.opener.b2link.xhr.reqSync_String( dataURL ) );

		var host = window.opener.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
		var dom = window.document.getElementById( elementID );
		var myChart = window.opener.echarts.init( dom );


		var numToHex = function( str ){

			var hash = 0;
			for (var i = 0; i < str.length; i++) {
				hash = str.charCodeAt(i) + ((hash << 5) - hash);
			}

			var colour = '';
			for (var i = 0; i < 3; i++) {
				var value = (hash >> (i * 8)) & 0xFF;
				colour += ('00' + value.toString(16)).substr(-2);
			}

			return colour;

		};

		var colors = [];
		var i = 0, iLen = data.d.legend.length,io;
		for(;i<iLen;++i){
			io = data.d.legend[ i ];
			colors.push( "#" + numToHex( io ) )
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
				, rectangle : function(){
					return this.el.getBound();
				}
			}
		};

		var labelLine00 = {
			length : 30,
			length2 : 30,
		}

		var label01 = {
			normal: { show : false },
			emphasis : { show : false }
		}

		var i = 0, iLen = data.d.data.length,io;
		for(;i<iLen;++i){
			io = data.d.data[ i ];
			if( ( io.value / data.d.info.totalSC ) > 0.01 )
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

		var app = {};
		var option = {
			title : {
				text: data.d.info.brandNm + " - Brand 기준 카데고리별 셀카운트 분포",
				subtext: data.d.info.date,
				x:'center'
			},
			grid : {
				top : 30,
			},
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				type: 'scroll',
				orient: 'vertical',
				left: 10,
				top: 20,
				bottom: 20,
				data: data.d.legend
			},
			color :  colors,
			series : [
				{
					name: '123123123',
					type: 'pie',
					radius : '50%',
					center: ['50%', '50%'],
					//labelLine : { show : false },
					avoidLabelOverlap  : true,
	//												label: {
	//													normal: {
	//														formatter: '{a|{b}}{abg|}\n{hr|}\n  {b|sellCount：}{c|{c}}  {per|{d}%}  ',
	//														backgroundColor: '#eee',
	//														borderColor: '#aaa',
	//														borderWidth: 1,
	//														borderRadius: 4,
	//														rich: {
	//															a: { color: '#000', lineHeight: 33, align: 'center' },
	//															hr: { borderColor: '#aaa', width: '100%', borderWidth: 0.5, height: 0 },
	//															b: { color : "#000", fontSize: 12, lineHeight: 33 },
	//															c: { color : "#000", fontSize: 12, lineHeight: 33 },
	//															per: { color: '#eee', backgroundColor: '#334455', padding: [2, 4], borderRadius: 2 }
	//														}
	//													}
	//												},
					data: data.d.data,
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};

		if( option && typeof option === "object" ) myChart.setOption( option, true );


		//새로고침방지이벤트;
		window.addEventListener("keydown",function(e){
			if( (e.ctrlKey == true && (e.keyCode == 78 || e.keyCode == 82)) || (e.keyCode == 116) ) {
				e.keyCode = 0;
				e.cancelBubble = true;
				e.returnValue = false;
			}
		});

		//팝업종료시부포창의 리스트에서도 제거;
	//									window.addEventListener("unload",function(e){ delete window.opener.b2link.open._map[ data.d.info.date ]; });

		//차트리사이즈이벤트;
		window.addEventListener("resize",function(e){ myChart.resize(); });
	};
});
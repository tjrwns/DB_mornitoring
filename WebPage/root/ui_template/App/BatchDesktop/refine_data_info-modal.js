//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/refine_data_info-modal.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el ){

	//----------------------------------------------------------------------------------------------------;

	var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	var F0 = window.b2link.element.getElementByClassName;

//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;
	//----------------------------------------------------------------------------------------------------;
	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	var _ELS = {
		H4_MESSAGE : F0( window.document, "h4-message-title" )
		, DIV_MESSAGE : F0( window.document, "message" )
		, DIV_MSG_COL : F0( window.document, "id-msg-col" )
		, ICON_MESSAGE : F0( window.document, "message-icon" )

			, DIV_MSG_COL : F0( window.document, "id-msg-col" )
	, DIV_MERGE_LIST : F0( window.document, "id-div-merge-list" )

	, DIV_DB_LIST  : F0( window.document, "id-div-db_list" )
	};

	//--------------------------------------------------;
	var _URLS = {};

	//
	_URLS.URL0 = window.b2link.url.getServerURL_APIServer_Self() + "/수집데이터머지/all/00_정제대상데일리수집컬렉션가져오기?data=<!=DATA=!>";
	//--------------------------------------------------;

	var PRODUCT_LINK_TEMPLATE = {
		  "KAOLA" : "https://goods.kaola.com/product/<!=PRODUCT_ID=!>.html"
		, "VIP" : "https://detail.vip.com/detail-<!=BRAND_ID=!>-<!=PRODUCT_ID=!>.html"
		, "TAOBAO-DAILY" : "https://item.taobao.com/item.htm?id=<!=PRODUCT_ID=!>"
		, "LAZADA" : "https://naver.com"
	}

	//----------------------------------------------------------------------------------------------------;

	/**
	 * Echarts Controller List
	 * @property {Array}
	 */
	var _LIST_ECHARTS_ = [];

	/**
	 * 로딩중 모달 화면 컨트롤러
	 * @property {Object}
	 */
	var _LOADER_SPINNER_;

	/**
	 * JD, KAOLA, TAOBAO, VIP, ...
	 * @property {String}
	 */
	var _TARGET_SITE_NAME_;
	var _TARGET_YEAR_;

	var _N_SET_TIMEOUT_ = 100;

	var CONTAINER_HEIGHT;

	var PRODUCT_DETAIL_INFO = "";
	var _PRODUCT_LINK_ = "";

	var _DATA_;

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE - FANCYGRID;

	//----------------------------------------------------------------------------------------------------;

	var _CTRLS = {};

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * initialize 시 부모객체의 함수를 넘겨 받아서 정의 된다.
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_mClick__URL_Button = function( e ){
		window.open( _PRODUCT_LINK_ );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _초기화면렌더링 = function()
	{

		window.SYS0037_UI_API.spinner.show();

		getData( UI_render );

		//화면 레이아웃 재배치;
		reset_layout();

		window.SYS0037_UI_API.spinner.hide();
	};

	var UI_render = function( data ){

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
					getStringCountAndSizeByTargetShop[ target_site ]( io, jo, colInfo );

					colList.push( colInfo );
				};
			};

			if( colList.length > 0 )
			{
				_ELS.DIV_MESSAGE.classList.add( "red" )
				_ELS.DIV_MESSAGE.innerText =  "정제대상존재함";

				var template  = '<div class="row"><div class="sixteen wide column">{{SITE}} - {{DB}} - {{COL}} - {{COUNT}} - {{SIZE}}</div></div>';

				var i = 0,iLen = colList.length,io,_ts = "";
				for(;i<iLen;++i){
					io = colList[ i ];
					_ts += template.replace("{{SITE}}",io.SITE)
						.replace("{{DB}}",io.DB)
						.replace("{{COL}}",io.COL)
						.replace("{{COUNT}}",io.COUNT)
						.replace("{{SIZE}}",io.SIZE);
				}

				var html = '<div class="id-msg-col ui celled aligned padded grid">' + _ts + '</div>';
				$el.appendChild( window.b2link.html.createHTMLElement( html ) )
			}
			else
			{
				_ELS.DIV_MESSAGE.classList.add( "green" )
				_ELS.DIV_MESSAGE.innerText =  "정제대상없음";
			}

			$('.ui.modal').modal({
				onHidden : function(){ dispose(); }
			}).modal('show');

	//		window.b2link.element.getElementByClassName( $el, "id-linkButton" ).addEventListener( "click", _evt_mClick__URL_Button );
	};

	var UI_render_Sync = function(){

			var data = getDataSync();

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
					getStringCountAndSizeByTargetShop[ target_site ]( io, jo, colInfo );

					colList.push( colInfo );
				};
			};

			if( colList.length > 0 )
			{
				_ELS.DIV_MESSAGE.classList.add( "red" )
				_ELS.ICON_MESSAGE.classList.add( "database" )
				_ELS.H4_MESSAGE.innerText =  "정제대상존재함";

//				var template  = '<div class="row"><div class="sixteen wide column">{{SITE}} - {{DB}} - {{COL}} - {{COUNT}} - {{SIZE}}</div></div>';
//
//				var i = 0,iLen = colList.length,io,_ts = "";
//				for(;i<iLen;++i){
//					io = colList[ i ];
//					_ts += template.replace("{{SITE}}",io.SITE)
//						.replace("{{DB}}",io.DB)
//						.replace("{{COL}}",io.COL)
//						.replace("{{COUNT}}",io.COUNT)
//						.replace("{{SIZE}}",io.SIZE);
//				}
//
//				var html = '<div class="id-msg-col ui celled aligned padded grid">' + _ts + '</div>';
//				$el.appendChild( window.b2link.html.createHTMLElement( html ) )
			}
			else
			{
				_ELS.DIV_MESSAGE.classList.add( "green" )
				_ELS.ICON_MESSAGE.classList.add( "check" )
				_ELS.H4_MESSAGE.innerText =  "정제대상없음";
			}

			//_ELS.DIV_MSG.style.display = "block";
			//delete data.data;
			var _t = ""
			var F = byteToMegabyte;
			var i = 0,iLen = data.length,io;
			for(;i<iLen;++i){

					var dbNm = data[ i ].DB

					var _template00 = '<div class="card"><div class="content"><div class="header">{{STATUS}}<div style="padding:10px 0px;"><h2>{{target_site}}</h2></div></div>'
							+ '<div class="description">{{targetDBinfo}}<div class="id-div-merge-list ui three column grid celled"><div class="row"><div class="sixteen wide column"> 정제대상목록 </div></div>	</div>'
							+ '<div class="id-div-merge-list ui three column grid celled" style="max-height:700px;overflow-y: auto;">{{detailInfo}}</div></div></div></div>'



					var _targetDBinfo ='<div class="id-div-merge-list ui column grid celled">'
								+ '<div class="row grey"><div class="eight wide column">DB Name</div><div class="eight wide column">정재대상갯수</div></div>'
								+ '<div class="row"><div class="eight wide column">' + dbNm + '</div><div class="eight wide column">' + data[ i ].totalCount + '</div></div>'
								+ '</div>'

					var targetDBinfo = "";
					if( data[ i ].totalCount > 0 ) targetDBinfo = _targetDBinfo;

					var mergeInfo = '';

					io = data[ i ].data;
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

					var STATUS;
					if( data[ i ].totalCount == 0 ) STATUS = '<div class="ui green label">정상</div>';
					else STATUS = '<div class="ui grey label" style="min-width:45px;">' + data[ i ].totalCount + '</div><div class="ui red label">정제요망</div>';

					var template00 = _template00.replace( "{{targetDBinfo}}",targetDBinfo).replace( "{{detailInfo}}",mergeInfo).replace( "{{STATUS}}",STATUS).replace('{{target_site}}', data[ i ].target_site );
					_t += template00
			}

			var _t00 = '<div class="ui equal width center aligned padded grid"><div class="row"><div class="column"><div class="id-div-db_list ui stackable one cards">{{ttt}}</div></div></div></div>'
			var kkk = _t00.replace('{{ttt}}', _t );
			var el00 = window.b2link.html.createHTMLElement( kkk );
			$el.appendChild( el00 );


			//_ELS.DIV_DB_LIST.innerHTML = _t;
			//window.b2link.html_div.apply_child( _ELS.DIV_DB_LIST, data );


			$('.ui.modal').modal({
				onHidden : function(){ dispose(); }
			}).modal('show');

	//		window.b2link.element.getElementByClassName( $el, "id-linkButton" ).addEventListener( "click", _evt_mClick__URL_Button );
	};

	var getData = function( cbFunction ){
		var requestParameters = {
			  //param0 : [ 2018, 2019 ]
			  param0 : [ 2019 ]

			//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
			, param1 : [ "KAOLA", "VIP", "TAOBAO-DAILY", "LAZADA", "SHOPEE" ]
		};

		//var result = window.b2link.xhr.reqSync_String( _URLS.URL0.replace( "<!=DATA=!>", JSON.stringify( requestParameters ) ) );
		SUtilXMLHttpReqGet.req_String( _URLS.URL0.replace( "<!=DATA=!>", JSON.stringify( requestParameters ) ), function( result ){

			var data;
			try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

			if( window.b2link.response.getResultStatus( data ) )
			{
				cbFunction( data )
			}
			else
			{
				//결과가 없음;
				window.TtwLog.log( "결과가 없음" );
			}
		});
	};

	var getDataSync = function(){
		var requestParameters = {
			  //param0 : [ 2018, 2019 ]
			  param0 : [ 2019 ]

			//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
			, param1 : [ "KAOLA", "VIP", "TAOBAO-DAILY", "LAZADA", "SHOPEE" ]
		};

		var result = window.b2link.xhr.reqSync_String( _URLS.URL0.replace( "<!=DATA=!>", JSON.stringify( requestParameters ) ) );

		try{ data = JSON.parse( result ); }catch( er ){ window.TtwLog.error( "[ ERROR ] - " + er ); }

		if( window.b2link.response.getResultStatus( data ) )
		{
			return data;
		}
		else
		{
			//결과가 없음;
			window.TtwLog.log( "결과가 없음" );
		}

	};

	//수정하기 - 20180302_1708 - 최석준 - 비교값을 왜 소문자로 해놓았는지 대문자로 변경하길 권장;
	var getStringCountAndSizeByTargetShop = {
		JD : function(){
		}

		, KAOLA : function( io, jo, colInfo ){

			var F = byteToMegabyte;

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
			var F = byteToMegabyte;

			var joc = jo.stats.count;
			var jos = jo.stats.size;

			colInfo.COUNT = joc;
			colInfo.SIZE = F( jos ).toFixed(3) + " MB";
		}

		, VIP : function( io, jo, colInfo ){

			var F = byteToMegabyte;

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

			var F = byteToMegabyte;

			var joc = jo.stats.count;
			var jos = jo.stats.size;

			var str_count = " - " + joc.LIST

			var str_size = " - " + F( jos.LIST ).toFixed( 2 )

			colInfo.COUNT = str_count;
			colInfo.SIZE = str_size;
		}
		, SHOPEE : function( io, jo, colInfo ){

			var F = byteToMegabyte;

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
	var byteToMegabyte = function( nByte ){ return nByte / 1024 / 1024; };


	var dispose = function(){
		$el.parentElement.parentElement.removeChild( $el.parentElement );
		return;
	};

	/**
	 * 화면 레이아웃 재배치
	 * @function
	 */
	var reset_layout = function(){};

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

	//----------------------------------------------------------------------------------------------------;

	//	RETURN;

	//----------------------------------------------------------------------------------------------------;

	window._ELS = _ELS;

	var _ = {};

		/**
		 * @property {Object}
		 * <code>
			{
			}
		 * </code>
		 */
		_._el = $el

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
		_.initialize = _초기화면렌더링;

		_.render_modal_sync = UI_render_Sync
		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

		_.dispose = dispose;

	return _;
});

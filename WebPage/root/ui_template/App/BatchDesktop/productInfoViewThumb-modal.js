//----------------------------------------------------------------------------------------------------;
var fileNm = "ui/App/BatchDesktop/productInfoViewThumb-modal.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function( url, $el ){

	//----------------------------------------------------------------------------------------------------;

	var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

	//----------------------------------------------------------------------------------------------------;
	//----------------------------------------------------------------------------------------------------;
	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;
	var _URLS = {};
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

	var _DATA_ = null;

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE - FANCYGRID;

	//----------------------------------------------------------------------------------------------------;

	var _CTRLS = {};
	var _ELS = {};

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

		UI_render( _DATA_ );

		//화면 레이아웃 재배치;
		reset_layout();

		window.SYS0037_UI_API.spinner.hide();
	};

	var UI_render = function( data ){
		PRODUCT_DETAIL_INFO = "";

		delete data.productInfo;
		delete data.style;

		var s,so;
		for( s in data ){
			so = data[ s ];
			if( s == "goodsImg" ) continue;

			if( typeof so == "object" )
			{
				var k,ko;
				for( k in so )
				{
					PRODUCT_DETAIL_INFO = PRODUCT_DETAIL_INFO + "<div class=\"row\"><div class=\"four wide column\">" + s + "</div>\n<div class=\"twelve wide column\">" + k + "</div></div>";
				}
			}
			else
			{
				PRODUCT_DETAIL_INFO = PRODUCT_DETAIL_INFO + "<div class=\"row\"><div class=\"four wide column\">" + s + "</div>\n<div class=\"twelve wide column\">" + so + "</div></div>";
			}

		}

		if( !data.url ) data.url = PRODUCT_LINK_TEMPLATE[ _TARGET_SITE_NAME_ ].replace("<!=BRAND_ID=!>",data.brandId).replace("<!=PRODUCT_ID=!>",data.goodsId );

		_PRODUCT_LINK_ = data.url;

		var img = document.createElement('img');
			img.setAttribute("class","ui centered image");
			img.setAttribute("src", data.goodsImg );
		var img_box = window.document.getElementsByClassName("imggs_box")[0];
			img_box.appendChild( img );


		//var imgUrl = '<img class="ui centered image" src="' + _PRODUCT_LINK_ + '">'
//		data.goodsImg = '<img class="ui centered image" src="' + data.goodsImg + '">';
		data.productInfo = PRODUCT_DETAIL_INFO;

		$el.innerHTML = window.b2link.string.applyBrace( $el.innerHTML,  data );
		//$el.outerHTML = window.b2link.string.applyBrace( $el.outerHTML,  data );

		$('.ui.modal').modal({
			onHidden : function(){ dispose(); }
		}).modal('show');

		window.b2link.element.getElementByClassName( $el, "id-linkButton" ).addEventListener( "click", _evt_mClick__URL_Button );
	};

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
		_.initialize = function( data ){

//			CONTAINER_HEIGHT = data.contatinerHeight;
			_LOADER_SPINNER_ = data.loader;
			_DATA_ = data.data
			_TARGET_SITE_NAME_ = data.siteName;

			//_evt_mClick__URL_Button = data.clickLinkButton;

			_초기화면렌더링();
		};

		/**
		 * 화면 레이아웃 재배치
		 * @function
		 */
		_.reset_layout = reset_layout;

		_.dispose = dispose;

	return _;
});

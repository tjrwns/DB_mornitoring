//----------------------------------------------------------------------------------------------------;
var fileNm = "js/SYS0037_UI_API/__define/200_define_window.SYS0037_UI_API.spinner.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.SYS0037_UI_API.spinner;

window.SYS0037_UI_API.spinner = window.SYS0037_UI_API.spinner || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.SYS0037_UI_API.spinner;

window.SYS0037_UI_API.spinner.CONST = window.SYS0037_UI_API.spinner.CONST || {};
window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT = 1000;

/**
 * Semantic-UI 기반의 Spinner API
 * Spinner 초키화
 * @function
 */
(function(){

	//window.b2link.util.importJS__Reuse();
	//window.b2link.util.importCSSToHead();

	var HTML = '<div class="ui dimmer"><div class="ui large text loader">Loading</div></div>';
	var el = window.b2link.html.createHTMLElement( HTML );
	var el_text = el.children[ 0 ];

	window.document.body.appendChild( el );

	//--------------------------------------------------;

	/**
	 * Spinner 숨기기
	 * @function
	 */
	window.SYS0037_UI_API.spinner.hide = function()
	{
		el.classList.remove( "active" );
		el_text.innerText = "";
	};


	/**
	 * Spinner 표출
	 * @function
	 * @param {String} msg
	 */
	window.SYS0037_UI_API.spinner.show = function( msg )
	{
		var msg = msg || "데이터를 불러오는 중입니다.";

		el.classList.add( "active" );
		el_text.innerText = msg;
	};

	/**
	 * Spinner callbackFunction
	 * @function
	 * @param {String} msg
	 * @param {Function} cbFunction
	 */
	window.SYS0037_UI_API.spinner.callBackFunction = function( msg, cbFunction )
	{
		var msg = msg || "데이터를 불러오는 중입니다.";

		window.SYS0037_UI_API.spinner.show( msg );
		setTimeout(function(){
			cbFunction();
			window.SYS0037_UI_API.spinner.hide();
		},window.SYS0037_UI_API.spinner.CONST.N_SET_TIMEOUT)

	};


})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
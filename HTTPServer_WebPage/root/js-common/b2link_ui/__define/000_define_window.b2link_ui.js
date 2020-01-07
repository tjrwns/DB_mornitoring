//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_uijs";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui

window.b2link_ui = window.b2link_ui || {};

window.b2link_ui.CONST = window.b2link_ui.CONST || {};

window.b2link_ui.CONST.PARAMETER = window.b2link_ui.CONST.PARAMETER || {};

window.b2link_ui.CONST.PARAMETER.UI_DISPLAY_FALSE = { display : false };

//----------------------------------------------------------------------------------------------------;

/**
 * window.b2link_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 Flase를 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.b2link_ui.isModal_DefaultFalse = function( data )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.isModal():{Boolean}----------" );

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return false;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.isModal():{Boolean}----------" );
};

/**
 * window.b2link_ui*** 함수가 호출 될시에 arguments[ 0 ]을 가져와서 modal 여부를 판단한다.
 * data(arguments[ 0 ])가 없을시엔 기본 True 반환한다.
 * @function
 * @param {Object} data
 * @return {Boolean}
 */
window.b2link_ui.isModal_DefaultTrue = function( data )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.isModal():{Boolean}----------" );

	if( data )
		if( data.hasOwnProperty( "modal" ) ) return data.modal;

	return true;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.isModal():{Boolean}----------" );
};

/**
 * @function
 * @param {Object} ui_data
 * @param {Object} ui_options
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.b2link_ui.addUI__DefaultModalFalse = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.addUI__DefaultModalFalse():{Array}----------" );

	var o;
	if( window.b2link_ui.isModal_DefaultFalse( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.addUI__DefaultModalFalse():{Array}----------return o;" );
	return o;
};

/**
 * @function
 * @param {Object} ui_data
 * @param {Object} ui_options
 * @return {Array} [{HTMLElement}, {Object:HTMLElement's Controller}]
 */
window.b2link_ui.addUI__DefaultModalTrue = function( ui_data, ui_options )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.addUI__DefaultModalTrue():{Array}----------" );

	//o[ 0 ] : element, o[ 1 ] : element controller;
	var o;
	if( window.b2link_ui.isModal_DefaultTrue( ui_options ) )
	{
		//o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( ui_data, ui_options );
		o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}
	else
	{
		//o = window.b2link.ui.add_HTML_JS( ui_data, ui_options );
		//o = window.b2link.ui.add_HTML_JS_CSS( ui_data, ui_options );
		o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( ui_data, ui_options );
	}

	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.addUI__DefaultModalTrue():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
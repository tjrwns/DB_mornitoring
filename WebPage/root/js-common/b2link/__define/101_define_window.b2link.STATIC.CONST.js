//----------------------------------------------------------------------------------------------------;
//var fileNm = "js-common/b2link/__define/101_define_window.b2link.STATIC.CONST.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONST;

window.b2link.STATIC.CONST = window.b2link.STATIC.CONST || {};




/*///공통 소스에서 구동됨;
window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONST.ROOT_DIV" );
window.b2link.STATIC.CONST.ROOT_DIV = window.b2link.STATIC.CONST.ROOT_DIV || {};
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
	_.ID_BACKGROUND = "div_0__Background";
	_.ID_APPLICATION = "div_0__Application";
	_.ID_UI_COMPONENT_FIXED = "div_0__UI_Component_Fixed";
	_.ID_UI_COMPONENT_PANEL = "div_0__UI_Component_Panel";
	_.ID_TOP = "div_0__Top";
	_.ID_TOP_MODAL = "div_0__Top_modal";

	_.EL_BACKGROUND = window.document.getElementById( "div_0__Background" );
	_.EL_APPLICATION = window.document.getElementById( "div_0__Application" );
	_.EL_UI_COMPONENT_FIXED = window.document.getElementById( "div_0__UI_Component_Fixed" );
	_.EL_UI_COMPONENT_PANEL = window.document.getElementById( "div_0__UI_Component_Panel" );
	_.EL_TOP = window.document.getElementById( "div_0__Top" );
	_.EL_TOP_MODAL = window.document.getElementById( "div_0__Top_modal" );
window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONST.ROOT_DIV" );
//*/

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONST;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

/*///공통 소스에서 구동됨;
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	_.EL_APPLICATION.style.width = _.EL_BACKGROUND.style.width = _.EL_TOP.style.width = _.EL_TOP_MODAL.style.width = _.EL_UI_COMPONENT_FIXED.style.width =
	_.EL_UI_COMPONENT_PANEL.style.width = window.document.body.clientWidth + "px";
	_.EL_APPLICATION.style.height = _.EL_BACKGROUND.style.height = _.EL_TOP.style.height = _.EL_TOP_MODAL.style.height = _.EL_UI_COMPONENT_FIXED.style.height =
	_.EL_UI_COMPONENT_PANEL.style.height = window.document.body.clientHeight + "px";
}, false, 0, true );
//*/

/*/
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	console.debug( "EL_APPLICATION : " + _.EL_APPLICATION.clientWidth + " * " + _.EL_APPLICATION.clientHeight );
	console.debug( "EL_BACKGROUND : " + _.EL_BACKGROUND.clientWidth + " * " + _.EL_BACKGROUND.clientHeight );
	console.debug( "EL_TOP : " + _.EL_TOP.clientWidth + " * " + _.EL_TOP.clientHeight );
	console.debug( "EL_TOP_MODAL : " + _.EL_TOP_MODAL.clientWidth + " * " + _.EL_TOP_MODAL.clientHeight );
	console.debug( "EL_UI_COMPONENT_FIXED : " + _.EL_UI_COMPONENT_FIXED.clientWidth + " * " + _.EL_UI_COMPONENT_FIXED.clientHeight );
	console.debug( "EL_UI_COMPONENT_PANEL : " + _.EL_UI_COMPONENT_PANEL.clientWidth + " * " + _.EL_UI_COMPONENT_PANEL.clientHeight );
}, false, 0, true );
//*/

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
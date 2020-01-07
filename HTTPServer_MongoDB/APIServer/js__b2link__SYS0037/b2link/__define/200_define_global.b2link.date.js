//----------------------------------------------------------------------------------------------------;
//var fileNm = "js__b2link__SYS0037/b2link/__define/200_define_global.b2link.date.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.url;

global.b2link.date = global.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.url;
/**
 * 
 * @param {*} n 
 * @param {*} width 
 */
global.b2link.date.pad = function( n, width ){
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

/**
 * 
 * @param {*} timeStamp 
 * @param {*} separator 
 */
global.b2link.date.timstampToformatedDate = function(timeStamp, separator = '') {
	global.CSJLog.timeStamp( "---- [ S ] - global.b2link.date.timstampToformatedDate():void----------" );

	timeStamp = timeStamp || Date.now();
	var date = new Date( timeStamp )
	var year = date.getFullYear();
	var month = global.b2link.date.pad( date.getMonth() + 1, 2 );
	var day = global.b2link.date.pad( date.getDate(), 2 );

	global.CSJLog.timeStamp( "---- [ E ] - global.b2link.date.timstampToformatedDate():void----------" );
	return [year, month, day].join(separator);
}

/**
 * 
 * @param {*} date 
 * @param {*} separator 
 */
global.b2link.date.dateToformatedDate = function(date, separator = '') {
	global.CSJLog.timeStamp( "---- [ S ] - global.b2link.date.dateToformatedDate():void----------" );

	date = date || new Date();
	var year = date.getFullYear();
	var month = global.b2link.date.pad( date.getMonth() + 1, 2 );
	var day = global.b2link.date.pad( date.getDate(), 2 );

	global.CSJLog.timeStamp( "---- [ E ] - global.b2link.date.dateToformatedDate():void----------" );
	return [year, month, day].join(separator);
}

/**
 * 
 * @param {*} timeStamp 
 * @param {*} separator 
 */
global.b2link.date.timstampToformatedDatetime = function(timeStamp, separator = '') {
	global.CSJLog.timeStamp( "---- [ S ] - global.b2link.date.timstampToformatedDatetime():void----------" );

	timeStamp = timeStamp || Date.now();
	var date = new Date( timeStamp )
	var year = date.getFullYear();
	var month = global.b2link.date.pad( date.getMonth() + 1, 2 );
	var day = global.b2link.date.pad( date.getDate(), 2 );
	var hour = global.b2link.date.pad( date.getHours(), 2 );
	var minutes = global.b2link.date.pad( date.getMinutes(), 2 );
	var seconds = global.b2link.date.pad( date.getSeconds(), 2 );
	var miliseconds = global.b2link.date.pad( date.getMilliseconds(), 2 );

	global.CSJLog.timeStamp( "---- [ E ] - global.b2link.date.timstampToformatedDatetime():void----------" );
	return [year, month, day].join(separator) + "_" + [hour,minutes,seconds,miliseconds].join(separator);
}

/**
 * 
 * @param {*} date 
 * @param {*} separator 
 */
global.b2link.date.dateToformatedDatetime = function(date, separator = '') {
	global.CSJLog.timeStamp( "---- [ S ] - global.b2link.date.dateToformatedDatetime():void----------" );

	date = date || new Date();
	var year = date.getFullYear();
	var month = global.b2link.date.pad( date.getMonth() + 1, 2 );
	var day = global.b2link.date.pad( date.getDate(), 2 );
	var hour = global.b2link.date.pad( date.getHours(), 2 );
	var minutes = global.b2link.date.pad( date.getMinutes(), 2 );
	var seconds = global.b2link.date.pad( date.getSeconds(), 2 );
	var miliseconds = global.b2link.date.pad( date.getMilliseconds(), 2 );

	global.CSJLog.timeStamp( "---- [ E ] - global.b2link.date.dateToformatedDatetime():void----------" );
	return [year, month, day].join(separator) + "_" + [hour,minutes,seconds,miliseconds].join(separator);
}

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
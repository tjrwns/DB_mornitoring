//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/000_define_window.b2link_service.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service;

window.b2link_service = window.b2link_service || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service;

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB = function( nm_db ){ return window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB__NPROXY = function( nm_db ){ return window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };

/**
 * @function
 * @param {String} nm_db
 * @return {String}
 */
window.b2link_service.getURL_DB__PROXY = function( nm_db ){ return window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( nm_db ) + nm_db + "/"; };

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
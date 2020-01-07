//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.url.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.url;

global.b2link.url = global.b2link.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.url;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
global.b2link.url.getQueryFromURL=function(r){try{return global.server.getQueryFromURL(r)}catch(e){return SUtilHttpServer.getQueryFromURL(r)}};

/**
 * encodeURIComponent된 url을 decodeURIComponent 한다. 는 기본적으로 진행함
 * encodeURIComponent를 사용하지 않고 자체 변환된 url도 풀어준다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//global.b2link.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+"),JSON.parse(l)};
global.b2link.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&").replace(/!MTg3!/gi,"+").replace(/!Mzc=!/gi,"%"),JSON.parse(l)};

//--------------------------------------------------;

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.b2link.url.getServerURL_APIServer_SCODE=function(e){return global.b2link.url.getServerURLByServers(e+"_APIServer")};

/**
 * @function
 * @return {String}
 */
global.b2link.url.getServerURL_APIServer_Self=function(){return global.b2link.url.getServerURLByServers(global.b2link.STATIC.CONFIG.URL.SCODE+"_APIServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.b2link.url.getServerURL_ScrapServer_SCODE=function(r){return global.b2link.url.getServerURLByServers(r+"_ScrapServer")};

/**
 * @function
 * @return {String}
 */
global.b2link.url.getServerURL_ScrapServer_Self=function(){return global.b2link.url.getServerURLByServers(global.b2link.STATIC.CONFIG.URL.SCODE+"_ScrapServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
global.b2link.url.getServerURL_WebServer_SCODE=function(e){return global.b2link.url.getServerURLByServers(e+"_WebServer")};

/**
 * @function
 * @return {String}
 */
global.b2link.url.getServerURL_WebServer_Self=function(){return global.b2link.url.getServerURLByServers(global.b2link.STATIC.CONFIG.URL.SCODE+"_WebServer")};

//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//var fileNm = "js__b2link__SYS0037/b2link/__define/200_define_global.b2link.response.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.response;

global.b2link.response = global.b2link.response || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.response;

/**
 * Client Browser에 JSON(String)- pretty된 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Array|Object} obj Array 또는 Object
 */
global.b2link.response.send_200_JSON_Pretty=function(e,s,n){s&&(global.b2link.response.setHeaders__b2ker(s),s.setHeader("Content-Type", "application/json; charset=utf-8" ),global.server.sendResponse_200_String(e,s,JSON.stringify(n,null,'\t')))};

/**
 *
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} str url
 */
global.b2link.response.send_301_Batch=function(e,s,n,p){s && (global.b2link.response.setHeaders__b2ker(s),s.writeHead(301, { Location: global.b2link.url.getServerURL_WebServer_Self() + "/index-batch.html?type=" + n + "&data=" + p }),s.end())};


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
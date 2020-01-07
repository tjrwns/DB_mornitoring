//----------------------------------------------------------------------------------------------------;
var fileNm = "database--100_Build_AddProcedure__DataBase.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./database--00_Config.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var path_db = "../database/member/";
/*/
var path_db = "../database/authority/";
var path_db = "../database/brand/";
var path_db = "../database/category/";
var path_db = "../database/contract/";
var path_db = "../database/information/";
var path_db = "../database/list_static/";
var path_db = "../database/member/";
var path_db = "../database/partner/";
var path_db = "../database/product/";
var path_db = "../database/stock/";
var path_db = "../database/transaction/";
var path_db = "../database/transaction_quote_purchase/";
var path_db = "../database/transaction_quote_sale/";
//*/

SUtilFsWriteStream_Extension_Dev__MongoDB.build__addProcedure__Database( path_db, "member" );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
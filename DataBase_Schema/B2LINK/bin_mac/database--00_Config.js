//----------------------------------------------------------------------------------------------------;
var fileNm = "database--00_Config.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

STtwUtilFsWriteStream_Extension_Dev__MongoDB.setData({
	  FILE_NM__DB_SYSTEM_JS_REMOVE : "_db.system.js.remove.js"
	, FILE_NM__CREATE_DB_AND_USER : "_create_DB_And_User"

	, PATH_BIN_ADMIN : "./execute_mongoclient_js__admin.sh "//BAT File;
	, PATH_BIN_DATABASE : "./execute_mongoclient_js__database.sh "//BAT File;

	, PASSWORD_R : "_r_qlxnfldzmdkfEjqmffb!"
	, PASSWORD_RW : "_rw_qlxnfldzmdkfEjqmffb!"
});

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
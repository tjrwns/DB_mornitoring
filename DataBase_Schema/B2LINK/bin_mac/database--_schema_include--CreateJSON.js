//----------------------------------------------------------------------------------------------------;
var fileNm = "database--_schema_include--CreateJSON.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------;

var path_root = "../database/"

var d = {
	/*/
	path_schema : path_root + "_schema/"
	, path_schema_include : path_root + "_schema_include/"
	, path_schema_template : path_root + "_schema_template/"
	, extension : ".json"
	, template_extension : ".tjson"
	/*/
	path_schema : path_root + "_schema_include/"
	, path_schema_include : path_root + "_schema_include/"
	, path_schema_template : path_root + "_schema_include/"
	, extension : ".json"
	, template_extension : ".tjson"
	//*/
};

//--------------------------------------------------;

console.log( "path_schema_template : " + d.path_schema_template );

SUtilFsWriteStream_Extension_Dev.create_JSONsFromTemplateJSONs__Folder( d, d.path_schema_template );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
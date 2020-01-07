(function(){var _CWD_=global.process.cwd()+"/";var s0="Development-NodeJS_Modules/Common-ConsoleBuild-000.js";try{require( _CWD_+s0 );}catch(er){}try{require( _CWD_+"../"+s0 );}catch(er){}try{require( _CWD_+"../../"+s0 );}catch(er){}try{require( _CWD_+"../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../"+s0 );}catch(er){}try{require( _CWD_+"../../../../../"+s0 );}catch(er){}})();
//----------------------------------------------------------------------------------------------------;
var fileNm = "css--createJSON.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var rootPath = "../css/";

//css 폴더에 __list.json, __listDir.json 파일을 생성한다.;
try{ SUtilFsWriteStream_Extension_Dev.create_DirectoryAndFileList_JSON__CSS( rootPath ); }
catch( er ){ console.error( "try catch Error : " + er ); }

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
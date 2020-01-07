require( "../../../Development-NodeJS_Modules/Common-ConsoleApplication-000-0.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "000 - Shopee - backup";
if( console ) console.log( "[ S ] - " + fileNm + ".js" + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.os = global.REQUIRES.os || require( "os" );
global.REQUIRES.fs = global.REQUIRES.fs || require( "fs" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - Development-NodeJS_Modules Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
require( "../../../Development-NodeJS_Modules/global.REQUIRES.mongodb.js" );

SUtilMongoDB.mongodb = SUtilMongoDBMongoClient.mongodb = global.REQUIRES.mongodb;

require( "../../../Development-NodeJS_Modules/js/mongodb/__define/000_define_global.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

var _CWD_ = global.process.cwd();
var _EXPORT_PATH_ = "D:\\GitHub_B2LiNK\\B2LiNK-OnSight-DB-Processing\\HTTPServer_MongoDB\\APIServer\\temp\\";
var _ARGV_ = global.process.argv;
var _ARGV_20 = _ARGV_[ 20 ];


try
{
	var CONFIG;

	if( _ARGV_20 ) var CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + _ARGV_20 + ".json" ).toString() );
	else CONFIG = JSON.parse( SUtilFsReadStream.getFile( _CWD_ + "/" + fileNm + ".json" ).toString() );
	//...;
}
catch( er )
{
	global.console.error( "[ CONFIG ] - " + er );
	global.process.exit();
}

var CONNECTION_INFO_IP	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.HOST || "127.0.0.1";
var CONNECTION_INFO_PORT = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.PORT || "55528";;
var CONNECTION_INFO_DB	 = CONFIG.PARAMETERS_NODEJS.MONGODB_CONNECTION_INFO.MERCHINE_LOCAL.NMDB;

var _BACKUP_PATH00_ = "G:\\내 드라이브\\최석준\\업무\\B2LiNK-MongoDB-OnSight--Shopee - Data\\";
var _BACKUP_PATH01_ = "E:\\GitHub_B2LiNK\\B2LiNK-MongoDB-OnSight--Shopee - Data\\";

var _BACKUP_PATH_BY_DBNAME_ = {

	google : {
		"Shopee_2018" : {"path" : _BACKUP_PATH00_ + "JSON - 머지\\2018\\", isBackup : 1},
		"Shopee_2018--비교" : {"path" : _BACKUP_PATH00_ + "JSON - 비교\\2018\\", isBackup : 1},
		"Shopee_2018-ERROR" : {"path" : _BACKUP_PATH00_ + "JSON - 머지 - ERROR\\2018\\", isBackup : 1},
		"Shopee_2019" : {"path" : _BACKUP_PATH00_ + "JSON - 머지\\2019\\", isBackup : 1},
		"Shopee_2019--비교" : {"path" : _BACKUP_PATH00_ + "JSON - 비교\\2019\\", isBackup : 1},
		"Shopee_2019-ERROR" : {"path" : _BACKUP_PATH00_ + "JSON - 머지 - ERROR\\2019\\", isBackup : 1},
	}
	, local : {
		"Shopee_2018" : {"path" : _BACKUP_PATH01_ + "JSON - 머지\\2018\\", isBackup : 1},
		"Shopee_2018--비교" : {"path" : _BACKUP_PATH01_ + "JSON - 비교\\2018\\", isBackup : 1},
		"Shopee_2018-ERROR" : {"path" : _BACKUP_PATH01_ + "JSON - 머지 - ERROR\\2018\\", isBackup : 1},
		"Shopee_2019" : {"path" : _BACKUP_PATH01_ + "JSON - 머지\\2019\\", isBackup : 1},
		"Shopee_2019--비교" : {"path" : _BACKUP_PATH01_ + "JSON - 비교\\2019\\", isBackup : 1},
		"Shopee_2019-ERROR" : {"path" : _BACKUP_PATH01_ + "JSON - 머지 - ERROR\\2019\\", isBackup : 1},
	}
};

//----------------------------------------------------------------------------------------------------;


var _CMDS = {
	//Export CMD;
	CMD000 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --out "<!=FILE_NM=!>" --jsonArray'

	//Import CMD;
	, CMD001 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --file "<!=FILE_NM=!>" --mode insert --numInsertionWorkers 1 --jsonArray'

	//Drop,Import CMD;
	, CMD002 : '..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB_NM=!>" --collection "<!=COL_NM=!>" --drop --file "<!=FILE_NM=!>" --mode insert --numInsertionWorkers 1 --jsonArray'

	//7z  Compress;
	, CMD003 : '..\\..\\..\\Development-Binary-Windows\\Binary\\7z\\7z.exe'

	//cmd copy
	, CMD004 : 'copy'

	//cmd mkdir
	, CMD005 : 'mkdir'

};

//----------------------------------------------------------------------------------------------------;

//변수선언;
var FUNCTIONS = [];
var FUNCTIONS_ERROR = [];
var CMD;

//----------------------------------------------------------------------------------------------------;

/*
 * Childprocess 실행함수;
 * @fucntion
 * @param{ String } str
 */
var FN000 = function( str ){

	global.console.log( "[ COMMAND ] - " + str );
	var result = SUtilCP.sExec( str ).toString()
	global.console.log( result )

	return;
};

var compressFileToZip = function( fileNm, option ){
	option = option || "a -mx3" ;

	var _t00 = fileNm.split(".");
		_t00.pop();

	var _fileNm = _t00.join(".");

	var RESULT_FILE = _EXPORT_PATH_ + _fileNm + ".zip";
	var TARGET_FILE = _EXPORT_PATH_ + _fileNm + ".json";

	return FN000( _CMDS[ "CMD003" ] + " " + option + " " + RESULT_FILE + " " + TARGET_FILE );

};

var checkFileSize = function( fileNm ){

	return STtwUtilFsReadStream.checkWhetherFile( _EXPORT_PATH_ + fileNm ).size;

};

var copyBackupFolder = function( fileNm, destination ){

	var checkFileNm = fileNm.replace( ".zip", ".json" );

	if( checkFileSize(checkFileNm) < 20 ){
		var _tArr = JSON.parse( STtwUtilFsReadStream.getFile( _EXPORT_PATH_ + checkFileNm ).toString( "utf8" ) )
		if( _tArr.length == 0 ) return;
	}

//	option = option || "\\Y" ;
	var _t00 = fileNm.split(".");
	var _t01;
	if( _t00[ 1 ] == "STATISTICS" ) _t01 = "STATISTICS\\";
	else if( -1 != _t00[ 0 ].indexOf( "-monthly" ) ) _t01 = "";
	else if( -1 != _t00[ 0 ].indexOf( "-weekly" ) ) _t01 = "";
	else _t01 = _t00[ 1 ].substr(0,6) + "\\";

	if( !_BACKUP_PATH_BY_DBNAME_[ destination ][ _t00[ 0 ] ] )
	{
		return;
	}

	if( !_BACKUP_PATH_BY_DBNAME_[ destination ][ _t00[ 0 ] ].isBackup )
	{
		return;
	}

	var TARGET_PATH = _BACKUP_PATH_BY_DBNAME_[ destination ][ _t00[ 0 ] ].path + _t01;
	var RESULT_FILE = _EXPORT_PATH_ + fileNm;

	//디렉토리생성;
	try
	{
		FN000( _CMDS[ "CMD005" ] + " \"" + TARGET_PATH + "\"" );
	}
	catch( er )
	{
		//er;
		console.log( er );
	}


	return FN000( _CMDS[ "CMD004" ] + " \"" + RESULT_FILE + "\" \"" + TARGET_PATH + "\"" );

};
//----------------------------------------------------------------------------------------------------goods_list 임포트;


//-------------------------------------------------------;

FUNCTIONS.push(function(){

	global.console.log( "[ S ] - Compress Files" )

	var arr_files  = STtwUtilFsReadStream.getList_File_Extension( _EXPORT_PATH_ ,".json");
	var i = 0,iLen = arr_files.length,io,fileNm;
	for(;i<iLen;++i){
		global.console.log( i + " / " + iLen );
		io = arr_files[ i ];
		compressFileToZip( io );
	}

	global.console.log( "[ E ] - Compress Files" )
});

//-------------------------------------------------------;
//FUNCTIONS.push(function(){
//
//	global.console.log( "[ S ] - Delete .json Files" );
//
//	FN000( "del " + _EXPORT_PATH_ + "*.json");
//
//	global.console.log( "[ E ] - Delete .json Files" );
//});

//-------------------------------------------------------;
FUNCTIONS.push(function(){

	global.console.log( "[ S ] - GoogleDrive Copy Files" );

	var arr_files  = STtwUtilFsReadStream.getList_File_Extension( _EXPORT_PATH_ ,".zip");
	var i = 0,iLen = arr_files.length,io,fileNm;
	for(;i<iLen;++i){
		global.console.log( i + " / " + iLen );
		io = arr_files[ i ];
		console.log( io )
		copyBackupFolder( io, 'google' );
	}

	global.console.log( "[ E ] - GoogleDrive Copy Files" );
});

//-------------------------------------------------------;

FUNCTIONS.push(function(){

	global.console.log( "[ S ] - LocalMachine Copy Files" );

	var arr_files  = STtwUtilFsReadStream.getList_File_Extension( _EXPORT_PATH_ ,".zip");
	var i = 0,iLen = arr_files.length,io,fileNm;
	for(;i<iLen;++i){
		global.console.log( i + " / " + iLen );
		io = arr_files[ i ];
		console.log( io )
		copyBackupFolder( io, 'local' );
	}

	global.console.log( "[ E ] - LocalMachine Copy Files" );
});

//-------------------------------------------------------;

//FUNCTIONS.push(function(){
//
//	global.console.log( "[ S ] - Delete .zip Files" );
//
//	FN000( "del " + _EXPORT_PATH_ + "*.zip");
//
//	global.console.log( "[ E ] - Delete .zip Files" );
//});

//-------------------------------------------------------;

var i = 0,iLen = FUNCTIONS.length,io;
for(;i<iLen;++i){
	io = FUNCTIONS[ i ];
	try
	{
		io();
	}
	catch( er )
	{
		//er;
		global.console.error( er )
		process.exit( 0 );
	}
}
process.exit( 0 );
//----------------------------------------------------------------------------------------------------;
var fileNm = "database--Setup.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

g.FILE_NM__DB_SYSTEM_JS_REMOVE = "_db.system.js.remove.js";
g.FILE_NM__CREATE_DB_AND_USER = "_create_DB_And_User";

//g.PATH_BIN = "E:/WorkSpace_B2LINK/DataBase_Schema/B2LINK/bin/";//Folder;
g.PATH_BIN_ADMIN = "./execute_mongoclient_js__admin.sh ";//BAT File;
g.PATH_BIN_DATABASE = "./execute_mongoclient_js__database.sh ";//BAT File;

g.PASSWORD_R = "_r_qlxnfldzmdkfEjqmffb!";
g.PASSWORD_RW = "_rw_qlxnfldzmdkfEjqmffb!";

//----------------------------------------------------------------------------------------------------;

g.execute_mongoclient__AddProcedure = function( dbNm, filePath )
{
	//////////global.TtwLog.timeStamp( "-- [ S ] - g.execute_mongoclient__AddProcedure():void----------" );
	var u1 = '"b2link_' + dbNm + '_rw"';
	var p1 = '"b2link_' + dbNm + g.PASSWORD_RW + '"';//비투링크알더블류;

	var sExec = g.PATH_BIN_DATABASE
		+ io + " "
		+ u1 + " "
		+ p1 + " "
		+ filePath
		+ " > " + filePath + ".result";
	//global.TtwLog.timeStamp( "sExec : " + sExec );
	try
	{
		var r = STtwUtilCP.sExec( sExec );
		//global.TtwLog.timeStamp( "r : " + r );

		var idError = r.indexOf( "error" );
		//global.TtwLog.timeStamp( "idError : " + idError );
		if( idError > -1 )
		{
			global.TtwLog.error( r );
			STtwUtilFsWriteStream.writeFile( filePath + ".errorResult", r );
		}
	}
	catch( er )
	{
		//console.error( "er : " + er );
	}

	//////////global.TtwLog.timeStamp( "-- [ E ] - g.execute_mongoclient__AddProcedure():void----------" );
};

g.execute_mongoclient__CreateDBAndUser = function( dbNm, path )
{
	global.TtwLog.timeStamp( "-- [ S ] - g.execute_mongoclient__CreateDBAndUser():void----------" );
	var fileNm = g.FILE_NM__CREATE_DB_AND_USER + ".dbjs";
	var filePath = path + fileNm;
	var sExec = g.PATH_BIN_ADMIN
		//.dbjs 확장자 주의;
		+ filePath
		+ " > " + filePath + ".result";
	global.TtwLog.timeStamp( "sExec : " + sExec );

	try
	{
		var r = STtwUtilCP.sExec( sExec );
		global.TtwLog.timeStamp( "r : " + r );
		var idError = r.indexOf( "error" );
		//global.TtwLog.timeStamp( "idError : " + idError );
		if( idError > -1 )
		{
			global.TtwLog.error( r );
			SUtilFsWriteStream.writeFile( filePath + ".errorResult", r );
		}
	}
	catch( er )
	{
		//console.error( er );
	}
	global.TtwLog.timeStamp( "-- [ E ] - g.execute_mongoclient__CreateDBAndUser():void----------" );
};

g.execute_mongoclient__DB_JS_Remove = function( dbNm, path )
{
	global.TtwLog.timeStamp( "-- [ S ] - g.execute_mongoclient__DB_JS_Remove():void----------" );
	var u1 = '"b2link_' + dbNm + '_rw"';
	var p1 = '"b2link_' + dbNm + g.PASSWORD_RW + '"';//비투링크알더블류;

	var sExec = g.PATH_BIN_DATABASE
		+ dbNm + " "
		+ u1 + " "
		+ p1 + " "
		//.dbjs 확장자 주의;
		+ path + g.FILE_NM__DB_SYSTEM_JS_REMOVE + ".dbjs"
		+ " > " + path + g.FILE_NM__DB_SYSTEM_JS_REMOVE + ".dbjs.result";
	try
	{
		var r = STtwUtilCP.sExec( sExec );
		global.TtwLog.timeStamp( "r : " + r );
	}
	catch( er )
	{
		//console.error( "execute_mongoclient__DB_JS_Remove Error : " + er );
	}
	global.TtwLog.timeStamp( "-- [ E ] - g.execute_mongoclient__DB_JS_Remove():void----------" );
};

g.fileSave__dbs = function( path, js )
{
	//////////global.TtwLog.timeStamp( "-- [ S ] - g.fileSave__dbs():void----------" );
	STtwUtilFsWriteStream.writeFile( path, js );
	//////////global.TtwLog.timeStamp( "-- [ E ] - g.fileSave__dbs():void----------" );
};

g.fileSave_dbjs_createDBAndUser = function( dbNm, path )
{
	global.TtwLog.timeStamp( "-- [ S ] - g.fileSave_dbjs_createDBAndUser():void----------" );
	var u0 = '"b2link_' + dbNm + '_r"';
	var u1 = '"b2link_' + dbNm + '_rw"';
	var p0 = '"b2link_' + dbNm + g.PASSWORD_R + '"';//비투링크알;
	var p1 = '"b2link_' + dbNm + PASSWORD_RW + '"';//비투링크알더블류;
	var s = ''
		+ '\nvar db0 = db.getSiblingDB( "' + dbNm + '" );'
		+ '\ndb0.createUser({ user : ' + u0 + ', pwd : ' + p0 + ', roles : [ "dbOwner", "read" ] });'
		+ '\ndb0.createUser({ user : ' + u1 + ', pwd : ' + p1 + ', roles : [ "dbOwner", "readWrite" ] });';
	global.TtwLog.timeStamp( "s : " + s );
	STtwUtilFsWriteStream.writeFile( path + dbNm + "/" + g.FILE_NM__CREATE_DB_AND_USER + ".dbjs", s );
	global.TtwLog.timeStamp( "-- [ S ] - g.fileSave_dbjs_createDBAndUser():void----------" );
};

g.fileSave_dbjs_removeAllProcesure = function( dbNm, path )
{
	global.TtwLog.timeStamp( "-- [ S ] - g.fileSave_dbjs_removeAllProcesure():void----------" );
	var s = 'try{ db.getSiblingDB( "' + dbNm + '" ).system.js.remove({}); }'
		+ '\ncatch( er ){ print( er ); }';
	STtwUtilFsWriteStream.writeFile( path + dbNm + "/" + g.FILE_NM__DB_SYSTEM_JS_REMOVE + ".dbjs", s );
	global.TtwLog.timeStamp( "-- [ E ] - g.fileSave_dbjs_removeAllProcesure():void----------" );
};

g.getScript_DB = function( dbNm, colNm, fNm, js )
{
	//////////global.TtwLog.timeStamp( "-- [ S ] - g.getScript_DB():{String}----------" );
	var r = 'db.getSiblingDB( "' + dbNm + '" ).addJSFunc( "';

	if( "_common_procedure" == colNm ){}
	else fNm = colNm + "$" + fNm;

	r = r + fNm + '", ' + js + ' );';

	return r;
	//////////global.TtwLog.timeStamp( "-- [ E ] - g.getScript_DB():{String}----------" );
};

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var path0 = "../database/";
var path1;
var path2;
var path3;
var path4;

var f0 = STtwUtilFsReadStream.getList_File_Extension;
var f1 = STtwUtilFsWriteStream.writeFile;
var f2 = STtwUtilFsReadStream.getFile;

var aCPath0 = STtwUtilFsReadStream.getList_Directory( path0 );
f1( path0 + "__list.json", JSON.stringify( aCPath0, null, "\t" ) );
var aCPath1;
var a;

var io;
var i=0, iLen=aCPath0.length;
for( ; i<iLen; ++i )
{
	io = aCPath0[ i ];
	global.TtwLog.timeStamp( "----------[ S ] - DataBase Name : " + i + " - " + io + "----------" );

	g.fileSave_dbjs_createDBAndUser( io, path0 );
	g.fileSave_dbjs_removeAllProcesure( io, path0 );

	path1 = path0 + io + "/";
	global.TtwLog.timeStamp( "path1 : " + path1 );

	g.execute_mongoclient__CreateDBAndUser( io, path1 );
	g.execute_mongoclient__DB_JS_Remove( io, path1 );

	aCPath1 = STtwUtilFsReadStream.getList_Directory( path1 );
	aCPath1.unshift( aCPath1.pop() );

	//*/
	var jo;
	var j=0, jLen=aCPath1.length;
	for( ; j<jLen; ++j )
	{
		jo = aCPath1[ j ];
		global.TtwLog.timeStamp( "--------------------[ S ] - Collection Name : " + j + " - " + jo + "--------------------" );
		path2 = path1 + jo + "/";
		global.TtwLog.timeStamp( "path2 : " + path2 );

		try{ a = f0( path2, ".js" ); }
		catch( er )
		{
			//console.error( "er : " + er );
			continue;
		}

		var ko;
		var k=0, kLen=a.length;global.TtwLog.timeStamp( "Procedure Length : " + kLen );
		for( ; k<kLen; ++k )
		{
			ko = a[ k ];
			global.TtwLog.timeStamp( "------------------------------Procedure Name : " + k + " - " + ko + "------------------------------" );
			//global.TtwLog.timeStamp( "------------------------------[ S ] - Procedure Name : " + ko + "------------------------------" );
			//global.TtwLog.timeStamp( "------------------------------[ E ] - Procedure Name : " + ko + "------------------------------" );
			path3 = path2 + ko;
			var sJS = f2( path3 ).toString( "utf8" );

			var nExt_ko = ko.replace( ".js", "" );
			var sJS = g.getScript_DB( io, jo, nExt_ko, sJS );

			path4 = path3 + ".dbs";
			g.fileSave__dbs( path4, sJS );
			g.execute_mongoclient__AddProcedure( io, ( path4 ) );
		}
		a.length = 0;
		global.TtwLog.timeStamp( "--------------------[ E ] - Collection Name : " + j + " - " + jo + "--------------------" );
		global.TtwLog.timeStamp( "" );global.TtwLog.timeStamp( "" );global.TtwLog.timeStamp( "" );
	}
	aCPath1.length = 0;
	global.TtwLog.timeStamp( "----------[ S ] - DataBase Name : " + i + " - " + io + "----------" );
	global.TtwLog.timeStamp( "" );global.TtwLog.timeStamp( "" );global.TtwLog.timeStamp( "" );
	//*/
}
aCPath0.length = 0;

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
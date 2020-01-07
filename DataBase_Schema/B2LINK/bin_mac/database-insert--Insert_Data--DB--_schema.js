//----------------------------------------------------------------------------------------------------;
var fileNm = "database-insert--Insert_Data--DB--_schema.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

//g.PATH_BIN = "E:/WorkSpace_B2LINK/DataBase_Schema/B2LINK/bin/";//Folder;
g.PATH_BIN_ADMIN = "./execute_mongoclient_js__admin.sh ";//BAT File;

g.PASSWORD_R = "_r_qlxnfldzmdkfEjqmffb!";
g.PASSWORD_RW = "_rw_qlxnfldzmdkfEjqmffb!";

var path0 = "../database-insert/";
var nm_db = "_schema";
var path1 = path0 + nm_db + "/";

g.execute_mongoclient=function(t,o){var a=g.PATH_BIN_ADMIN+o+" > "+o+".result";global.TtwLog.log("sExec : "+a);var l=STtwUtilCP.sExec(a),e=l.indexOf("error");e>-1&&(global.TtwLog.error(l),STtwUtilFsWriteStream.writeFile(o+".errorResult",l))};var path2,path3,path4,f0=STtwUtilFsReadStream.getList_File_Extension,f1=STtwUtilFsWriteStream.writeFile,f2=STtwUtilFsReadStream.getFile,aCPath0=STtwUtilFsReadStream.getList_Directory(path0);f1(path0+"__list.json",JSON.stringify(aCPath0,null,"	"));var aCPath1,a;global.TtwLog.log("path1 : "+path1),aCPath1=STtwUtilFsReadStream.getList_Directory(path1);for(var jo,j=0,jLen=aCPath1.length;jLen>j;++j){jo=aCPath1[j],global.TtwLog.log("--------------------[ S ] - Collection Name : "+j+" - "+jo+"--------------------"),path2=path1+jo+"/",global.TtwLog.log("path2 : "+path2);try{a=f0(path2,".js")}catch(er){global.TtwLog.error("er : "+er);continue}var ko,k=0,kLen=a.length;for(global.TtwLog.log("Procesure Length : "+kLen);kLen>k;++k){ko=a[k],global.TtwLog.log("------------------------------Procedure Name : "+k+" - "+ko+"------------------------------"),path3=path2+ko;try{g.execute_mongoclient(nm_db,path3)}catch(er){global.TtwLog.error(er)}}a.length=0,global.TtwLog.log("--------------------[ E ] - Collection Name : "+j+" - "+jo+"--------------------"),global.TtwLog.log(""),global.TtwLog.log(""),global.TtwLog.log("")}aCPath1.length=0,global.TtwLog.log(""),global.TtwLog.log(""),global.TtwLog.log(""),aCPath0.length=0,global.process.exit(),console;
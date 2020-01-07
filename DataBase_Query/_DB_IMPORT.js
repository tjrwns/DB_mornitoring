//-----------------------------------------------------------------------------------------------------------------------------;

// DEFINE;

//-----------------------------------------------------------------------------------------------------------------------------;

//var _TARGET_DB_ = "Kaola_2018";
//var _TARGET_SITE_ = "KAOLA"

var _TARGET_DB_PORT_ = {
	  SELF           : { "HOST" : "127.0.0.1", "PORT" : 55522, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, "JD-DAILY"     : { "HOST" : "127.0.0.1", "PORT" : 55523, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, "JD-LIST"      : { "HOST" : "127.0.0.1", "PORT" : 55524, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, KAOLA          : { "HOST" : "127.0.0.1", "PORT" : 55525, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, "TAOBAO-DAILY" : { "HOST" : "127.0.0.1", "PORT" : 55526, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, "TAOBAO-LIST"  : { "HOST" : "127.0.0.1", "PORT" : 55527, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, VIP            : { "HOST" : "127.0.0.1", "PORT" : 55528, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, LAZADA         : { "HOST" : "127.0.0.1", "PORT" : 55532, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, SHOPEE         : { "HOST" : "127.0.0.1", "PORT" : 55535, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT		 : { "HOST" : "222.239.10.122", "PORT" : 55320, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_BATCH  : { "HOST" : "192.168.1.230", "PORT" : 57321, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, SKUMAPPER      : { "HOST" : "222.239.10.122", "PORT" : 55421, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_TEST   : { "HOST" : "222.239.10.123", "PORT" : 55320, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_ADMIN  : { "HOST" : "222.239.10.123", "PORT" : 55540, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }

	, ONSIGHT_BATCH_VIP             : { "HOST" : "192.168.0.230", "PORT" : 55528, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_BATCH_KAOLA           : { "HOST" : "192.168.0.230", "PORT" : 55525, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, "ONSIGHT_BATCH_TAOBAO-DAILY"  : { "HOST" : "192.168.0.230", "PORT" : 55526, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_BATCH_LAZADA          : { "HOST" : "192.168.0.230", "PORT" : 55532, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_BATCH_SHOPEE          : { "HOST" : "192.168.0.230", "PORT" : 55535, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
};

var _COMMAND_TEMPLATE_ = '..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB=!>" --collection "<!=COL=!>" --drop --file "<!=FILE_NAME=!>" --mode insert --numInsertionWorkers 1 --jsonArray';
//var _COMMAND_TEMPLATE_ = '..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB=!>" --collection "<!=COL=!>" --file "<!=FILE_NAME=!>" --mode insert --numInsertionWorkers 1 --jsonArray';
//var _COMMAND_TEMPLATE_ = '..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB=!>" --collection "<!=COL=!>" --file "<!=FILE_NAME=!>" --mode insert --numInsertionWorkers 1';
var _DIR_PATH_ = "D:\\GitHub_B2LiNK\\B2LiNK-OnSight-DB-Processing\\HTTPServer_MongoDB\\APIServer\\temp\\";

//-----------------------------------------------------------------------------------------------------------------------------;

// FUNCTION;

//-----------------------------------------------------------------------------------------------------------------------------;



var FN = function( _TARGET_SITE_ ){

	var _TARGET_FILE_LIST_ = SUtilFsReadStream.getList_File_Extension( _DIR_PATH_, ".json")
	var commands = "";

	var i = 0,iLen = _TARGET_FILE_LIST_.length,io;
	console.log( _TARGET_FILE_LIST_ )
	for(;i<iLen;++i){
		var _t = _COMMAND_TEMPLATE_;
		//var r = _t.replace("<!=COL=!>",_TARGET_FILE_LIST_[ i ].split(".")[ 1 ] )
		var r = _t.replace("<!=COL=!>",_TARGET_FILE_LIST_[ i ].split(".")[ 1 ])
			.replace("<!=HOST=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].HOST )
			.replace("<!=FILE_NAME=!>", _DIR_PATH_ + _TARGET_FILE_LIST_[ i ])
			.replace("<!=PORT=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].PORT )
			.replace("<!=DB=!>", _TARGET_FILE_LIST_[ i ].split(".")[ 0 ] );
		commands = commands + r + "\n";
	}
	return commands;
};

//-----------------------------------------------------------------------------------------------------------------------------;

// LOGIC;

//-----------------------------------------------------------------------------------------------------------------------------;

FN( "SELF" );

//FN( "JD-DAILY" );
//FN( "JD-LIST" );

//FN( "KAOLA" );

//FN( "VIP" );

//FN( "TAOBAO-DAILY" );
//FN( "TAOBAO-LIST" );

//FN( "LAZADA" );
//FN( "SHOPEE" );

//FN( "ONSIGHT" );
//FN( "ONSIGHT_BATCH" );
//FN( "SKUMAPPER" );
//FN( "ONSIGHT_TEST" );
//FN( "ONSIGHT_ADMIN" );

//FN("ONSIGHT_BATCH_VIP")
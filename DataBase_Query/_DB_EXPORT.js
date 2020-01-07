//-----------------------------------------------------------------------------------------------------------------------------;

// DEFINE;

//-----------------------------------------------------------------------------------------------------------------------------;

//var _TARGET_DB_ = "Kaola_2018";
//var _TARGET_SITE_ = "KAOLA"


//222.239.10.123:55320 --> 테스트서버;
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

	, ONSIGHT        : { "HOST" : "222.239.10.122", "PORT" : 55320, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_BATCH  : { "HOST" : "192.168.1.230", "PORT" : 57321, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, SKUMAPPER      : { "HOST" : "222.239.10.122", "PORT" : 55421, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
	, ONSIGHT_TEST   : { "HOST" : "222.239.10.123", "PORT" : 55320, "DB" : "admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" }
};

var _COMMAND_TEMPLATE_ = '..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport --host <!=HOST=!> --port <!=PORT=!> --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "<!=DB=!>" --collection "<!=COL=!>" --out "D:\\GitHub_B2LiNK\\B2LiNK-OnSight-DB-Processing\\HTTPServer_MongoDB\\APIServer\\temp\\<!=FILE_NAME=!>.json" --jsonArray'

//-----------------------------------------------------------------------------------------------------------------------------;

// FUNCTION;

//-----------------------------------------------------------------------------------------------------------------------------;

var FN = function( _TARGET_DB_, _TARGET_SITE_ ){

	var db0 = db.getSiblingDB( _TARGET_DB_ );
	var cols = db0.getCollectionNames();

	var i = 0,iLen = cols.length,io;
    var cnt = 0;
	for(;i<iLen;++i){
		var _t = _COMMAND_TEMPLATE_;
		var r = _t.replace("<!=COL=!>",cols[ i ])
			.replace("<!=FILE_NAME=!>", _TARGET_DB_ + "." + cols[ i ])
			.replace("<!=PORT=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].PORT )
			.replace("<!=HOST=!>", _TARGET_DB_PORT_[ _TARGET_SITE_ ].HOST )
			.replace("<!=DB=!>", _TARGET_DB_ );


		print( r );
		if( cnt == 20 )
		{
			print( "\n" );
			cnt = 0
		}
		else
		{
			++cnt;
		}
	}

};

//-----------------------------------------------------------------------------------------------------------------------------;

// LOGIC;

//-----------------------------------------------------------------------------------------------------------------------------;

//KAOLA;
//FN( "Kaola_2018", "KAOLA" )
//FN( "Kaola_2019", "KAOLA" )
//FN( "Kaola_2018-ERROR", "KAOLA" )
//FN( "Kaola_2019-ERROR", "KAOLA" )
//FN( "Kaola_2019--비교", "KAOLA" )
//FN( "Kaola_2018-N", "KAOLA" )
//FN( "Kaola_2018--비교", "KAOLA" )
//FN( "Kaola_2019-collected_data", "KAOLA" )
//FN( "N-List", "KAOLA" )

//FN( "Kaola_2018-Lite--PIMS", "KAOLA" )
//FN( "Kaola_2019-Lite--PIMS", "KAOLA" )

//FN( "graph_data__kaola_2018-daily", "KAOLA" )
//FN( "graph_data__kaola_2018-monthly", "KAOLA" )
//FN( "graph_data__kaola_2018-weekly", "KAOLA" )
//FN( "graph_data__kaola_2019-daily", "KAOLA" )
//FN( "graph_data__kaola_2019-monthly", "KAOLA" )
//FN( "graph_data__kaola_2019-weekly", "KAOLA" )
//FN( "goods_list_2018", "KAOLA" )
//FN( "goods_list_2019", "KAOLA" )
//FN( "Kaola_2018-Lite", "KAOLA" )
//FN( "Kaola_2019-Lite", "KAOLA" )
//FN( "Kaola_2018-Lite-Mapping", "KAOLA" )
//FN( "Kaola_2019-Lite-Mapping", "KAOLA" )

//VIP;
FN( "VIP_2018", "VIP" )
//FN( "VIP_2019", "VIP" )
//FN( "VIP_2018-ERROR", "VIP" )
//FN( "VIP_2019-ERROR", "VIP" )
//FN( "graph_data__vip_2019", "VIP" )
//FN( "VIP_2019-collected_data", "VIP" )
//FN( "VIP_2018--비교", "VIP" )
//FN( "VIP_2019--비교", "VIP" )
//FN( "graph_data__vip_2018-daily", "VIP" )
//FN( "graph_data__vip_2018-monthly", "VIP" )
//FN( "graph_data__vip_2018-weekly", "VIP" )
//FN( "graph_data__vip_2019-daily", "VIP" )
//FN( "graph_data__vip_2019-monthly", "VIP" )
//FN( "graph_data__vip_2019-weekly", "VIP" )
//FN( "goods_list_2018", "VIP" )
//FN( "goods_list_2019", "VIP" )
//FN( "VIP_2018-Lite", "VIP" )
//FN( "VIP_2019-Lite", "VIP" )
//FN( "VIP_2018-Lite--PIMS", "VIP" )
//FN( "VIP_2019-Lite--PIMS", "VIP" )
//FN( "_STATISTICS--COMMON", "VIP" )

//FN( "검증", "VIP" )
//FN( "복구_3CE", "VIP" )

//TAOBAO-DAILY;
//FN( "Taobao_2018", "TAOBAO-DAILY" )
//FN( "Taobao_2019", "TAOBAO-DAILY" )
//FN( "brand", "TAOBAO-DAILY" )
//FN( "daily_master_h5", "TAOBAO-DAILY" )
//FN( "Taobao_2019--비교", "TAOBAO-DAILY" )
//FN( "Taobao_2018--비교", "TAOBAO-DAILY" )
//FN( "graph_data", "TAOBAO-DAILY" )
//FN( "Taobao_2019-collected_data", "TAOBAO-DAILY" )
//FN( "Taobao_2019-ERROR", "TAOBAO-DAILY" )
//FN( "goods_list_2018", "TAOBAO-DAILY" )
//FN( "goods_list_2019", "TAOBAO-DAILY" )
//FN( "daily_master_2019", "TAOBAO-DAILY" )
//FN( "daily_master_2018", "TAOBAO-DAILY" )
//FN( "Taobao_2018-Lite", "TAOBAO-DAILY" )
//FN( "Taobao_2019-Lite", "TAOBAO-DAILY" )

//FN( "Taobao_2019-ERROR", "TAOBAO-DAILY" )
//FN( "category", "TAOBAO-DAILY" )
//FN( "_CATEGORY-TAOBAO", "TAOBAO-DAILY" )

//FN( "Taobao_2019-Lite-PIMS", "TAOBAO-DAILY" )
//FN( "Taobao_2018-Lite-PIMS", "TAOBAO-DAILY" )

//FN( "_STATISTICS--COMMON", "TAOBAO-DAILY" )

//TAOBAO-LIST
//FN( "_CATEGORY-TAOBAO", "TAOBAO-LIST" )


//ONSIGHT_BATCH;
//FN( "graph_data", "TAOBAO-DAILY" )
//FN( "product", "TAOBAO-DAILY" )
//FN( "daily_master", "ONSIGHT_BATCH" )

//ONSIGHT;
//FN( "graph_data", "ONSIGHT" )
//FN( "Taobao_2018", "TAOBAO-DAILY" )


//SKUMAPPER;
//FN( "transaction_history", "SKUMAPPER" )
//FN( "goods_list__taobao", "SKUMAPPER" )


//JD-LIST
//FN( "transaction_history", "JD-LIST" )
//FN( "JD_2019", "JD-LIST" )


//SHOPEE
//FN( "Shopee_2019", "SHOPEE" )
//FN( "Shopee_2019-ERROR", "SHOPEE" )
//FN( "Shopee_2019--비교", "SHOPEE" )


//LAZADA
//FN( "Lazada_2019", "LAZADA" )
//FN( "Lazada_2019-ERROR", "LAZADA" )
//FN( "Lazada_2019--비교", "LAZADA" )



//ONSIGHT
//FN( "graph_data", "ONSIGHT" )
//FN( "brand", "ONSIGHT" )
//FN( "product", "ONSIGHT" )
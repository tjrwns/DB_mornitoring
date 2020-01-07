//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/000__common/000_define.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	SUtilMongoDB.mongoPathCreator( "4.0.0" );

	global.onsight = global.onsight || {};
	global.onsight.batchServer = global.onsight.batchServer || {};
	global.onsight.batchServer.DB = global.onsight.batchServer.DB || {};

	global.onsight.batchServer.DB.common = global.onsight.batchServer.DB.common || {};

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	global.onsight.batchServer.DB;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @const
	 * @property {Object}
	 */
	global.onsight.batchServer.DB.common.SITE_NAMES = {
		  "JD-DAILY"     : "JD"
		, "JD-LIST"      : "JD"
		, "TAOBAO-DAILY" : "Taobao"
		, "TAOBAO-LIST"  : "Taobao"

		, KAOLA  : "Kaola"
		, LAZADA : "Lazada"
		, SHOPEE : "Shopee"
		, VIP    : "VIP"

		//, ONSIGHT : "ONSIGHT"
		, ONSIGHT_BATCH : "ONSIGHT_BATCH"

		, MAPPER : "MAPPER"
	};

	//Local mongoDB;
	//global.onsight.batchServer.DB.common.connectionInfo = { "HOST" : "127.0.0.1", "PORT" : 55522, "DB":"admin", "ID" : "b2link", "PASS" : "qlxnfldzmdb2017_" };

	//B2LiNK-OnSight-ElectronCrawler-Storage-MongoDB;
	global.onsight.batchServer.DB.common.connectionInfo = {
		  SELF           : { "HOST" : "127.0.0.1", "PORT" : 55522 }

		/*/
		, KAOLA          : { "HOST" : "127.0.0.1", "PORT" : 55521 }
		, TAOBAO         : { "HOST" : "127.0.0.1", "PORT" : 48003 }
		, VIP            : { "HOST" : "127.0.0.1", "PORT" : 55521 }
		/*/
		, "JD-DAILY"     : { "HOST" : "127.0.0.1", "PORT" : 55523 }
		, "JD-LIST"      : { "HOST" : "127.0.0.1", "PORT" : 55524 }
		, KAOLA          : { "HOST" : "127.0.0.1", "PORT" : 55525 }
		, LAZADA         : { "HOST" : "127.0.0.1", "PORT" : 55532 }
		, "TAOBAO-DAILY" : { "HOST" : "127.0.0.1", "PORT" : 55526 }
		, "TAOBAO-LIST"  : { "HOST" : "127.0.0.1", "PORT" : 55527 }
		, VIP            : { "HOST" : "127.0.0.1", "PORT" : 55528 }
		, SHOPEE         : { "HOST" : "127.0.0.1", "PORT" : 55535 }
		//, ONSIGHT      : { "HOST" : "222.239.10.122", "PORT" : 55320 }
		, ONSIGHT_BATCH  : { "HOST" : "192.168.0.230", "PORT" : 57321 }

		, MAPPER         : { "HOST" : "222.239.10.122", "PORT" : 55421 }
		//*/
	};
	//*/
	(function(){
		var d = global.onsight.batchServer.DB.common.connectionInfo;
		for( var s in d ){
			if( "MAPPER" != s )
			{
				d[ s ].DB = "admin";
				d[ s ].ID = "b2link";
				d[ s ].PASS = "qlxnfldzmdb2017_";
				//d[ s ].HOST = "192.168.0.230";
			}
		}
	})();
	//*/

	/**
	 * @function
	 * @param {String} nm_db "SELF", "JD-DAILY", "JD-LIST", "KAOLA", "TAOBAO-DAILY", "TAOBAO-LIST", "VIP"...
	 * @return {Object}
	 * <code>
		{
			"HOST" : ""
			, "PORT" : NaN
			, "DB" : ""
			, "ID" : ""
			, "PASS" : ""
		}
	 * </code>
	 */
	global.onsight.batchServer.DB.common.getDBinfo = function( nm_db ){ return global.onsight.batchServer.DB.common.connectionInfo[ nm_db.toUpperCase() ]; };

	//----------------------------------------------------------------------------------------------------;

	//	global.onsight.batchServer.webhook;

	//----------------------------------------------------------------------------------------------------;

	global.onsight.batchServer.webhook = global.onsight.batchServer.webhook || {};

	//----------------------------------------------------------------------------------------------------;

	//	global.onsight.batchServer.webhook.common;

	//----------------------------------------------------------------------------------------------------;

	var t = global.onsight.batchServer.webhook.common = global.onsight.batchServer.webhook.common || {};

		//수정하기 - 최석준 - 20190228 - t.path -> t.URL로 변경하기;
		//최석준 개인 잔디;
		//t.path = "https://wh.jandi.com/connect-api/webhook/11320800/5a1c822932835a01f8ab3644dbfb2303";
		//t.URL = "https://wh.jandi.com/connect-api/webhook/11320800/5a1c822932835a01f8ab3644dbfb2303";

		//수정하기 - 최석준 - 20190228 - t.path -> t.URL로 변경하기;
		//공용 잔디;
		t.path = "https://wh.jandi.com" + global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_DB_Processing;
		t.URL = "https://wh.jandi.com" + global._$TATIC_CONST_WEBHOOK_SERVER__JANDI__OnSight_Electron_DB_Processing;

	//----------------------------------------------------------------------------------------------------;
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
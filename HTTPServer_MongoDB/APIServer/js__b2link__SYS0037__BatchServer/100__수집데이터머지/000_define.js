//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037__BatchServer/100__수집데이터머지/000_define.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

( function(){

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	global.onsight = global.onsight || {};
	global.onsight.batchServer = global.onsight.batchServer || {};
	global.onsight.batchServer.DB = global.onsight.batchServer.DB || {};

	//----------------------------------------------------------------------------------------------------;

	//	global.onsight.batchServer.webhook;

	//----------------------------------------------------------------------------------------------------;

	global.onsight.batchServer.webhook = global.onsight.batchServer.webhook || {};

	//----------------------------------------------------------------------------------------------------;

	//	global.onsight.batchServer.webhook[ "수집데이터머지" ];

	//----------------------------------------------------------------------------------------------------;

	var t = global.onsight.batchServer.webhook[ "수집데이터머지" ] = global.onsight.batchServer.webhook[ "수집데이터머지" ] || {};

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
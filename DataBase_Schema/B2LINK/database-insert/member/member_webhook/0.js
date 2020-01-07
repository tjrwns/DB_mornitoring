
var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_webhook.remove({});

var _col$member_basic = db0.member_basic;

a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a[ i ].mid
	};

	io.webhook = [
		{
			cd$messenger : "MSG014"
			, title : "알림1"
			, webhook_url : "wh.jandi.com/connect-api/webhook/11320800/a9e7cace9fe309afe9fc5759ea212e29"
			, use_check : NumberInt( 0 )
		}
		, {
			cd$messenger : "MSG014"
			, title : "알림2"
			, webhook_url : "wh.jandi.com/connect-api/webhook/11320800/a9e7cace9fe309afe9fc5759ea212e29"
			, use_check : NumberInt( 0 )
		}
	];

	db0.member_webhook.insert( io );
};
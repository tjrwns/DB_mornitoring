var a = [
	{
		"mid" : "SYS0030-Bot@b2link.co.kr",
		"d_ex" : "",
		"sid" : "asdasdasdasda"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_session.remove({});

var _col$member_basic = db0.member_basic;

var a0 = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a0.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a0[ i ].mid

		, d_ex : ""
		, sid : null
	};

	db0.member_session.insert( io );
};

//----------------------------------------------------------------------------------------------------;

var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];

	var _doc$member_session = db0.member_session.findOne({ mid : io.mid });

	printjson( _doc$member_session );

	db0.member_session.updateOne({ mid : io.mid }, { $set : io }, {
		upsert : false
		//, writeConcern :
		//, collation :
	});
}

//----------------------------------------------------------------------------------------------------;
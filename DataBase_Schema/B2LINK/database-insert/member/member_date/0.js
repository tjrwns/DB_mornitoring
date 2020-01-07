var a = [];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_date.remove({});

var _col$member_basic = db0.member_basic;

a = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a[ i ].mid

		, d_l_si : { y : NumberInt( 2016 ), m : NumberInt( 9 ), d : NumberInt( 21 ), ho : NumberInt( 13 ), mi : NumberInt( 2 ), se : NumberInt( 0 ) }
		, d_su : { y : NumberInt( 2016 ), m : NumberInt( 9 ), d : NumberInt( 21 ), ho : NumberInt( 13 ), mi : NumberInt( 2 ), se : NumberInt( 0 ) }
		, d_sec : { y : NumberInt( 0 ), m : NumberInt( 0 ), d : NumberInt( 0 ), ho : NumberInt( 0 ), mi : NumberInt( 0 ), se : NumberInt( 0 ) }
	};

	db0.member_date.insert( io );
};
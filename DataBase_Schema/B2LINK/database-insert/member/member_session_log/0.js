/**
 * member DB의 여러 콜렉션과 다른 로그 보관 콜렉션임.
 * member의 정보를 얻기위해 사용할 필요가 없는 콜렉션이다.
 */

//----------------------------------------------------------------------------------------------------;

var a = [
	//예제;
	{ sid : "", mid : "thdtjsdn@gmail.com", date : { y : 0, m : 0, d : 0, ho : 0, se : 0, mi : 0 } , d_ex : new Date() }
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_session_log.remove({});

var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );

	db0.member_session_log.insert( io );
};
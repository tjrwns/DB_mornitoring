/*/
SYS0010 : SessionServer
SYS0020 : B2Ker
SYS0030 : BrandPortal
//*/

var a = [
	{
		mid : "paparecipe@gmail.com"
		, _id$brand_basic : 154

		, SYS0030 : {//B2LiNK-BrandPortal;
			//Member의 소속 회사 정보;
			company : {
				address : { cd$country : "KR", cd$postal : "525353", cd_postal : "525353", addr1 : "", addr2 : "", addr3 : "", addr4 : "", addr5 : "", addr6 : "", f : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)" }
				, company_registration_number : "123-456-789"
				, email : "b2link@b2link.co.kr"
				, phone_tel : { f : "+82-10-1588-3366", c : "82", a : "10", n0 : "1234", n1 : "1234" }
				, nm : "비투링크"
				, nm_president : { a : "이소형", f : "소형", l : "이" }
			}

			//관심상품;
			, favorite_products_info : {
				another_products : [{ _id$brand_basic : 129, _id$product_basic : 523 } ]
				, own_products : [{ _id$product_basic : 3 }, { _id$product_basic : 52 } ]
			}

			//사용자 첫 로그인 상태. -1 : 미로그인 상태. 0 : 회사정보 입력 단계. 1 : 약관 및 관심 상품 등록 단계.;
			, first_login_status : 2

			//직원정보;
			, employee : {
				email : "emp@gmail.com"
				, messenger : { cd$messenger : "MSG010", id : "facebook@gamil.com" }
				, nm : { f : "길동", l : "홍", a : "홍길동" }
				, phone_tel : { c : "82", a : "2", n0 : "1234", n1 : "1234", f : " 82-2-1234-1234" }

			}

			//Member의 결제정보;
			, info_payment : { nm_bank : "국민은행", nm_account_owner : "홍길동", num_account : "123-456-789", issue_tax_bill : "발급" }

			//브랜드 명;
			 ,nm$brand_basic : "파파레시피"

			//약관 버전별 동의 이력;
			, terms_history : [{ _id$terms_of_service : 5, date_create : ISODate( "2017-08-24T10:37:59.122Z" ) }]

			//약관 동의 버전;
			, toc_agreed : 1
		}
	}

	/*/
	, {

	}
	//*/
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "member" );
	db0.member_option.remove({});

var _col$member_basic = db0.member_basic;
var a0 = _col$member_basic.find({}).toArray();
var io;
var i=0, iLen=a0.length;
for( ; i<iLen; ++i ){
	var io = {
		_id : NumberInt( i )
		, mid : a0[ i ].mid

		, _id$brand_basic : 154
	};

	io.SYS0010 = io.SYS0010 || {};//B2LiNK-SessionServer;
	io.SYS0020 = io.SYS0020 || {};//B2LiNK-B2Ker;
	io.SYS0030 = io.SYS0030 || {};//B2LiNK-BrandPortal;

	db0.member_option.insert( io );
}

//----------------------------------------------------------------------------------------------------;

var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];

	var _doc$member_option = db0.member_option.findOne({ mid : io.mid });

	printjson( _doc$member_option );

	db0.member_option.updateOne({ mid : io.mid }, { $set : io }, {
		upsert : false
		//, writeConcern :
		//, collation :
	});
}

//----------------------------------------------------------------------------------------------------;
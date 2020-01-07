//----------------------------------------------------------------------------------------------------;
// PROPERTIES;
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
// FUNCTION - CREATE;
//----------------------------------------------------------------------------------------------------;

/**
 * 문서 생성;
 * @function
 * @param {String} targetDBName
 * @param {String} targetColName
 */
var createDoc = function( targetDBName, targetColName )
{
	/*/
	var doc = {};
	/*/
	var doc = getSchemaCollectionProperties( targetDBName, targetColName );
	var p = null;
	for( p in doc )
	{
		doc[ p ] = null;
	}
	//*/
	return doc;
};

/**
 * 거래 생성
 * @function
 * @param {Object} d
 */
var create_transaction_entity = function( d )
{
	print( "------------------------------ [ S ] create_transaction_entity" );

	var date_o = getObjectDateFromNewDate( d.date );
	var date_due = getObjectDateFromNewDate( d.date );
		date_due.m = NumberInt( date_due.m + 1 );

	var doc = createDoc( "transaction", "transaction_entity" );
		doc = setObjectFromParameter( doc, d );
		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction", "transaction_entity", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : d._id$partner_buyer - 0 }); //Unique Key, Transaction CODE(PK); // string
		doc.cd$category_transaction_result = "CTR001"; //거래 상태 Category Transaction Result ID (FK); // string
		doc.cd$transaction_delivery_information = null; // transaction_delivery_information Code(FK) 거래 배송이력 식별코드(); // string
		doc.cd$category_fi_approbation = null; // FI Approbation type ID (FK) - 재무승인 여부 category 의 delivery type 컬랙션을 참조; // string
		doc.cd$category_fi_reject_reason = null; // Category (FK) - 재무승인  거절 사유; // string

		doc.date_create = date_o; //거래 생성 일자(가견적 요청서 작성시점); // object
		// 거래가 완료되든 취소되든 했을 때 종료일자 들어감;
		doc.date_end = null; //date_o_end; //거래 종료 일자(취소 포함); // object
		// 정산까지 완료되었을 때 리드타임 들어감;
		doc.date_leadTime = null; //해당 거래의 전체 수행 기간 ( date_end_transaction - date_create_transaction ); // object
		doc.date_due = date_due; //납기요청일 ( 물품이 납기되는 제한기간 ); // object

		doc.progress = []; //거래 진행 진행 과정; // array

	print( "------------------------------ [ E ] create_transaction_entity" );

	insertDoc( "transaction", "transaction_entity", doc );

	return doc;
};

/**
 * 판매 가견적 요청서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_entity 거래데이터
 */
var create_transaction_quote_sale_req = function( g_cd_transaction_entity, transaction_entity, d )
{
	print( "------------------------------ [ S ] create_transaction_quote_sale_req" );

	var date_expire = getObjectDateFromNewDate( d.create_date );
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	var doc = createDoc( "transaction_quote_sale", "transaction_quote_sale_req" );
		doc = setObjectFromParameter( doc, d );
		doc._id = NumberInt( db.getSiblingDB( "transaction_quote_sale" ).getCollection( "transaction_quote_sale_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction_quote_sale", "transaction_quote_sale_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 }); //가견적 요청서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : QSR YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드; // string

		doc.date_create = getArrayDateFromNewDate();
		doc.date_expire = date_expire;
		doc.date_due = transaction_entity.date_due;
		doc.items = [
		{
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			// , "price_supply_quantity" : {
			// 	"_id$currency" : NumberInt( 79 )
			// 	, "price" : 100
			// }
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
		, {
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			// , "price_supply_quantity" : {
			// 	"_id$currency" : NumberInt( 79 )
			// 	, "price" : 100
			// }
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
		, {
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			// , "price_supply_quantity" : {
			// 	"_id$currency" : NumberInt( 79 )
			// 	, "price" : 100
			// }
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
	];
	print( "------------------------------ [ E ] create_transaction_quote_sale_req" );

	insertDoc( "transaction_quote_sale", "transaction_quote_sale_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quote_sale_req", doc.cd, "transaction_quote_sale" );

	return doc;
};

/*
 * 구매가견적요청서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quote_sale_req 판매가견적서 Document
 * @param {Object} d
 */
var create_transaction_quote_purchase_req = function( g_cd_transaction_entity, transaction_quote_sale_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quote_purchase_req" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	// Schema로부터 Properties 가져오기;
	var doc = createDoc( "transaction_quote_purchase", "transaction_quote_purchase_req" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quote_purchase" ).getCollection( "transaction_quote_purchase_req" ).count() ); //Unique Key, Primary Key(PK);

		doc.cd = getCodeByCollection( "transaction_quote_purchase", "transaction_quote_purchase_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 }); //가견적 요청서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : QPR YYYYMMDD PARTNER_ID Number);
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드;

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // Array;
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // Object;
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // Object;
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // Object;

		doc.items = transaction_quote_sale_req.items; //가견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.;

	print( "------------------------------ [ E ] create_transaction_quote_purchase_req" );

	insertDoc( "transaction_quote_purchase", "transaction_quote_purchase_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quote_purchase_req", doc.cd, "transaction_quote_purchase" );

	return doc;
};

/**
 * 구매가견적회신서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Object} d
 */
var create_transaction_quote_purchase_res = function( g_cd_transaction_entity, transaction_quote_purchase_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quote_purchase_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	var doc = createDoc( "transaction_quote_purchase", "transaction_quote_purchase_res" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quote_purchase" ).getCollection( "transaction_quote_purchase_res" ).count() ); //Unique Key, Primary Key(PK);

		doc.cd$transaction_quote_purchase_req = transaction_quote_purchase_req.cd; //가견적 요청 문서번호 ;
		doc.cd = getCodeByCollection( "transaction_quote_purchase", "transaction_quote_purchase_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 }); //가견적 회신 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : QP YYYYMMDD PARTNER_ID Number);
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드;

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자);
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자);
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 ));
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 );
		doc.date_leadTime = getLeadTimeForArray( transaction_quote_purchase_req.date_create, doc.date_create); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction );

		doc.items = transaction_quote_purchase_req.items; //가견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.;
		doc.date_stock_wearing = date_expire;
		doc.transaction_quote_purchase_add_file = null; //가견적 회신의 원본문서 또는 첨부파일;

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].price_supply_per_item = { _id$currency : NumberInt( 79 ), price : 70 };
		doc.items[ i ].price_supply_quantity = { _id$currency : NumberInt( 79 ), price : 70 };
		doc.items[ i ].tax_per_quantity = { _id$currency : NumberInt( 79 ), price : 30 };
		doc.items[ i ].tax_per_item = { _id$currency : NumberInt( 79 ), price : 30 };
	}
	print( "------------------------------ [ E ] create_transaction_quote_purchase_res" );

	insertDoc( "transaction_quote_purchase", "transaction_quote_purchase_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quote_purchase_res", doc.cd, "transaction_quote_purchase" );

	return doc;
};

/*
 * 판매 가견적 회신서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quote_sale_req 판매가견적서 Document
 * @param {Object} d
 */
var create_transaction_quote_sale_res = function( g_cd_transaction_entity, transaction_quote_sale_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quote_sale_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	// Schema로부터 Properties 가져오기;
	var doc = createDoc( "transaction_quote_sale", "transaction_quote_sale_res" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quote_sale" ).getCollection( "transaction_quote_sale_res" ).count() ); // Unique Key, Primary Key(PK);
		doc.cd = getCodeByCollection( "transaction_quote_sale", "transaction_quote_sale_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 }); // 가견적서 문서번호;
		doc.cd$transaction_entity = g_cd_transaction_entity; // Transaction_entity Code(FK) 거래식별코드;
		doc.cd$transaction_quote_sale_req = transaction_quote_sale_req.cd;
		doc.date_create = getArrayDateFromNewDate(); // 문서 생성일 ( 해당 문서가 생성되는 일자); // Array;
		doc.date_cancel = null; // 문서 취소일 ( 해당 문서가 취소되는 일자); // Object;
		doc.date_expire = date_expire; // 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // Object;
		doc.date_due = date_expire; // 납기요청일 ( 물품이 납기되는 제한기간 ); // Object;
		doc.date_leadTime = getLeadTimeForArray( transaction_quote_sale_req.date_create, doc.date_create);
		doc.items = transaction_quote_sale_req.items;

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].price_supply_per_item = { _id$currency : NumberInt( 79 ), price : 70 };
		doc.items[ i ].price_supply_per_quantity = {
			cost_logistics_wearing : { // 입고물류 비용(상세 비용을 합한 가격) 세액 제외;
				_id$currency : NumberInt( 79 )
				, price : 10
			}
			, cost_logistics_wearing_tax : { // 입고 물류 비용 세액;
				_id$currency : NumberInt( 79 )
				, price : 10
			}
			, cost_logistics_release : { // 출고물류 비용(상세 비용을 합한 가격) 세액 제외;
				_id$currency : NumberInt( 79 )
				, price : 10
			}
			, cost_logistics_release_tax : { // 출고 물류 비용 세액;
				_id$currency : NumberInt( 79 )
				, price : 10
			}
			, cost_purchase : { // 상품 구매비용- 세액 제외;
				_id$currency : NumberInt( 79 )
				, price : 20
			}
			, cost_purchase_tax : { // 상품 구매 세액;
				_id$currency : NumberInt( 79 )
				, price : 10
			}
			, margin : 1.1
			, price : {
				_id$currency : NumberInt( 79 )
				, price : 70
			}
		};
		doc.items[ i ].tax_per_quantity = { _id$currency : NumberInt( 79 ), price : 30 };
		doc.items[ i ].tax_per_item = { _id$currency : NumberInt( 79 ), price : 30 };
	}
	print( "------------------------------ [ E ] create_transaction_quote_sale_res" );

	insertDoc( "transaction_quote_sale", "transaction_quote_sale_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quote_sale_res", doc.cd, "transaction_quote_sale" );

	return doc;
};

/**
 * 구매거래 진척사항 - 구매발주서 생성시마다 생성
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Object} d
 */
var create_transaction_purchase_status = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res, d )
{
	print( "------------------------------ [ S ] create_transaction_purchase_status" );

	var transaction_payment_information = create_transaction_payment_information( g_cd_transaction_entity, transaction_purchase_order_purchase_res, d );
	var transaction_cost_purchase = create_transaction_cost_purchase( g_cd_transaction_entity, transaction_purchase_order_purchase_res, d );

	var doc = createDoc( "transaction", "transaction_purchase_status" );
		doc = setObjectFromParameter( doc, d );
		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_purchase_status" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc.cd$category_transaction_result = "CTR020"; //거래 상태 Category Transaction Result ID (FK); // string
		doc.cd = getCodeByCollection( "transaction", "transaction_purchase_status", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 }); //Unique Key, 구매 상태(PK); // string

		doc.bRecieve_tax_bill = false; //세금계산서 수취 여부(세금계산서일련번호가 등록되면 true로 변경); // uint

		doc.cd$transaction_entity = g_cd_transaction_entity; //해당 구매 거래가 포함된 거래 식별 코드(FK); // string
		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd; //transaction_purchase_order_purchase(FK) 해당 구매 품목에 대한 구매발주 DB 식별코드; // string
		doc.cd$transaction_schedule_wearing = getCodeByCollection( "transaction", "transaction_schedule_wearing", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 }); //transaction_schedule_wearing Code(FK) 입고일정 식별코드; // string
		doc.cd$transaction_payment_information = transaction_payment_information.cd;
		doc.cd$transaction_cost_purchase = transaction_cost_purchase.cd;
		doc.cd$transaction_cost_logistics_wearing = null; // 입고증 이후에 알 수 있는 정보들;

		doc.date_recieve_tax_bill = null; //세금계산서 수취일; // object
		doc.sn_tax_bill = null; //세금계산서 일련번호; // string


	print( "------------------------------ [ E ] create_transaction_purchase_status" );

	insertDoc( "transaction", "transaction_purchase_status", doc );

	return doc;
};

/**
 * 해당 거래에서 구매 거래시 발생하는 지급(구매대금 지급 일정 포함) 정보를 관리한다.
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Object} d
 */
var create_transaction_payment_information = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res, d )
{
	print( "------------------------------ [ S ] create_transaction_payment_information" );

	var doc = createDoc( "transaction", "transaction_payment_information" );

		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_payment_information" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$trade_disposal = NumberInt( 1 );

		doc.cd = getCodeByCollection( "transaction", "transaction_payment_information", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : transaction_purchase_order_purchase_res._id$partner_supplier - 0 }); //Unique Key, 구매 상태(PK); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd;

		doc.deposit = d.payment_information.deposit;
		doc.info_bank = d.payment_information .info_bank;
		doc.payment_option = d.payment_information.payment_option;
		doc.tax_bill = d.payment_information.tax_bill;

	print( "------------------------------ [ S ] create_transaction_payment_information" );

	insertDoc( "transaction", "transaction_payment_information", doc );

	return doc;
};

/**
 * 하나의 구매거래시 발생하는 상품 구매(각 상품당) 비용과 세액을 포함한다.
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {String} transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Object} d
 */
var create_transaction_cost_purchase = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res )
{
	print( "------------------------------ [ S ] create_transaction_cost_purchase" );

	var doc = createDoc( "transaction", "transaction_cost_purchase" );
		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_cost_purchase" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc.cd = getCodeByCollection( "transaction", "transaction_cost_purchase", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : transaction_purchase_order_purchase_res._id$partner_supplier - 0 }); //Unique Key, 구매 상태(PK); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_purchase_res = cd$transaction_purchase_order_purchase_res.cd;

		doc.items = [];

		var i=0, iLen=transaction_purchase_order_purchase_res.items.length;
		for( ; i<iLen; ++i )
		{
			doc.items[ i ] = {
				_id$brand_basic : transaction_purchase_order_purchase_res.items[i]._id$brand_basic
				, _id$product_basic : transaction_purchase_order_purchase_res.items[i]._id$product_basic
				, quantity : transaction_purchase_order_purchase_res.items[i].quantity
				, price_per_quantity : transaction_purchase_order_purchase_res.items[i].price_per_quantity
				, price_per_item : transaction_purchase_order_purchase_res.items[i].quantity * transaction_purchase_order_purchase_res.items[i].price_per_quantity.price
				, tax_per_quantity : transaction_purchase_order_purchase_res.items[i].tax_per_quantity
				, tax_per_item : transaction_purchase_order_purchase_res.items[i].quantity * transaction_purchase_order_purchase_res.items[i].tax_per_quantity.price
				, UOM : transaction_purchase_order_purchase_res.items[i].UOM
			};
		}
		doc.price_total = transaction_purchase_order_purchase_res.price_total;
		doc.tax_total = transaction_purchase_order_purchase_res.tax_total;


	print( "------------------------------ [ E ] create_transaction_cost_purchase" );

	insertDoc( "transaction", "transaction_cost_purchase", doc );
	return doc;
};

/**
 * 거래에 해당 하는 입고 스케쥴
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_res 구매발주확정서
 */
var create_transaction_schedule_wearing = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res )
{
	print( "------------------------------ [ S ] create_transaction_schedule_wearing" );

	var doc = createDoc( "transaction", "transaction_schedule_wearing" );
		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_schedule_wearing" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc.cd = getCodeByCollection( "transaction", "transaction_schedule_wearing", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : transaction_purchase_order_purchase_res._id$partner_supplier - 0 }); //Unique Key, 구매 상태(PK); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_purchase_res = cd$transaction_purchase_order_purchase_res.cd; // 구매발주확정서 코드;

		doc.cd$transaction_stock_wearing_res = null; // 입고증 코드;

		doc.date_predict_wearing = null; // 입고 예정일자 (입고지시서); //object
		doc.date_wearing = null; // 입고 일자 (입고증 작성 일자); //object
		doc.date_leadtime_wearing = null; // 해당 입고의 수행기간 ( date_end_transaction - date_create_transaction ); //object

		doc.date_predict_inspection = null; // 검수 검품 작업 예정일자 (구매 발주 확정서상의 입고 일자); //object
		doc.date_inspection = null; // 실제 검수/검품 작업 시행일 (검수/검품 보고서 작성일); //object
		doc.date_leadtime_inspection = null; // 검수 검품 수행기간 ( date_end_transaction - date_create_transaction ); //object

		doc.date_predict_arrive = null; // 창고 도착 예정일자 (구매 발주 확정서상의 입고 일자); //object
		doc.date_arrive = null; // 창고 도착 일자 (입고예정리스트 상에서 도착 확인); //object
		doc.date_leadtime_arrive = null; // 창고 도착 수행기간 ( date_end_transaction - date_create_transaction ); //object

		doc.bResult = NumberInt( 0 ); // 입고결과; //uint

	print( "------------------------------ [ E ] create_transaction_schedule_wearing" );

	insertDoc( "transaction", "transaction_schedule_wearing", doc );
	return doc;
};

/**
 * 물류 상의 입고 비용을 저장하는 collection으로 하나의 구매거래시 발생하는 물류 입고비용 과 세액을 포함한다.
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Document} transaction_stock_wearing_res 입고증
 * @param {Object} d
 */
var create_transaction_cost_logistics_wearing = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res, transaction_stock_wearing_res, d )
{
	print( "------------------------------ [ S ] create_transaction_cost_logistics_wearing" );

	var doc = createDoc( "transaction", "transaction_cost_logistics_wearing" );
		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_cost_logistics_wearing" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction", "transaction_cost_logistics_wearing", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : transaction_purchase_order_purchase_res._id$partner_supplier - 0 }); //Unique Key, 구매 상태(PK); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd; // 구매발주확정서;
		doc.cd$transaction_stock_wearing_res = transaction_stock_wearing_res.cd; // 입고증;
		doc.cost_inspection_quality = { _id$currency : NumberInt( 79 ), price : 100 }; // 검품비;
		doc.cost_inspection_count = { _id$currency : NumberInt( 79 ), price : 0 };// 검수비;
		doc.cost_material = { _id$currency : NumberInt( 79 ), price : 200 }; // 부자재비;
		doc.cost_operation = { _id$currency : NumberInt( 79 ), price : 100 };// 작업비 (부자재비 제외);
		doc.tax_inspection_count = { _id$currency : NumberInt( 79 ), price : 0 };// 검수 세액;
		doc.tax_inspection_quality = { _id$currency : NumberInt( 79 ), price : 100 };// 검품 세액;
		doc.tax_material = { _id$currency : NumberInt( 79 ), price : 10 };// 부자재 세액;
		doc.tax_operation = { _id$currency : NumberInt( 79 ), price : 10 };// 작업비 세액;
		doc.cost_total = { _id$currency : NumberInt( 79 ), price : 400 }; // 입고비용전체;
		doc.tax_total = { _id$currency : NumberInt( 79 ), price : 130 };// 입고 세액 전체;

	print( "------------------------------ [ E ] create_transaction_cost_logistics_wearing" );

	insertDoc( "transaction", "transaction_cost_logistics_wearing", doc );
	return doc;
};

/**
 * 견적요청서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quote_sale_res 판매가견적회신서
 * @param {Object} d
 */
function create_transaction_quotation_sale_req( g_cd_transaction_entity, transaction_quote_sale_res, d )
{
	print( "------------------------------ [ S ] create_transaction_quotation_sale_req" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	var doc = createDoc( "transaction_quotation_sale", "transaction_quotation_sale_req" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quotation_sale" ).getCollection( "transaction_quotation_sale_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction_quotation_sale", "transaction_quotation_sale_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 }); //판매 견적 요청서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : RFQSR YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object

		doc.items = transaction_quote_sale_res.items; //견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		delete doc.items[ i ].price_supply_per_item;
		delete doc.items[ i ].price_supply_quantity;
		delete doc.items[ i ].tax_per_quantity;
		delete doc.items[ i ].tax_per_item;
	}

	print( "------------------------------ [ E ] create_transaction_quotation_sale_req" );

	insertDoc( "transaction_quotation_sale", "transaction_quotation_sale_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quotation_sale_req", doc.cd, "transaction_quotation_sale" );

	return doc;
};

/**
 * 판매견적서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quotation_sale_req 견적요청서
 * @param {Object} d
 */
var create_transaction_quotation_sale_res = function( g_cd_transaction_entity, transaction_quotation_sale_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quotation_sale_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

	var doc = createDoc( "transaction_quotation_sale", "transaction_quotation_sale_res" );

		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quotation_sale" ).getCollection( "transaction_quotation_sale_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd$transaction_quotation_sale_req = transaction_quotation_sale_req.cd; //판매 견적 요청서 문서번호; // string
		doc.cd = getCodeByCollection( "transaction_quotation_sale", "transaction_quotation_sale_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 }); //판매 견적서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : QTS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_leadTime = getLeadTimeForArray( transaction_quotation_sale_req.date_create, doc.date_create); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction ); // object

		doc.items = transaction_quotation_sale_req.items; //견적 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].price_supply_per_item = { _id$currency : NumberInt( 79 ), price : 70 };
		doc.items[ i ].price_supply_quantity = { _id$currency : NumberInt( 79 ), price : 70 };
		doc.items[ i ].tax_per_quantity = { _id$currency : NumberInt( 79 ), price : 30 };
		doc.items[ i ].tax_per_item = { _id$currency : NumberInt( 79 ), price : 30 };
		doc.items[ i ].cd$category_delivery_type = d.cd$category_delivery_type;
		doc.items[ i ].date_release = { cd$warehouse : d.cd$warehouse, date : date_expire };
		doc.items[ i ].date_warehousing = { cd$warehouse : d.cd$warehouse, date : date_expire };
	}

	print( "------------------------------ [ E ] create_transaction_quotation_sale_res" );

	insertDoc( "transaction_quotation_sale", "transaction_quotation_sale_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quotation_sale_res", doc.cd, "transaction_quotation_sale" );

	return doc;
};

/**
 * 판매발주서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quotation_sale_res 판매견적서
 * @param {Object} d
 */
var create_transaction_purchase_order_sale_req = function( g_cd_transaction_entity, transaction_quotation_sale_res, d )
{
	print( "------------------------------ [ S ] create_transaction_purchase_order_sale_req" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	var doc = createDoc( "transaction_purchase_order_sale", "transaction_purchase_order_sale_req" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_purchase_order_sale" ).getCollection( "transaction_purchase_order_sale_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction_purchase_order_sale", "transaction_purchase_order_sale_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //판매 발주서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : POS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드; // string

		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object

		doc.items = transaction_quotation_sale_res.items; //발주 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array
		doc.memo = d.memo ? d.memo : ""; //발주서상의 특이사항등을 적는 노트; // string

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		delete doc.items[ i ].date_release;
		doc.items[ i ].info_delivery = { cd$cateogry_delivery_type : d.cd$category_delivery_type, info_delivery_option : null };
	}

	print( "------------------------------ [ E ] create_transaction_purchase_order_sale_req" );

	insertDoc( "transaction_purchase_order_sale", "transaction_purchase_order_sale_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_purchase_order_sale_req", doc.cd, "transaction_purchase_order_sale" );

	return doc;
};

/**
 * 판매발주확정서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_sale_req 발주서
 * @param {Object} d
 */
var create_transaction_purchase_order_sale_res = function( g_cd_transaction_entity, transaction_purchase_order_sale_req, d )
{
	print( "------------------------------ [ S ] create_transaction_purchase_order_sale_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	var doc = createDoc( "transaction_purchase_order_sale", "transaction_purchase_order_sale_res" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction_purchase_order_sale" ).getCollection( "transaction_purchase_order_sale_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd$transaction_purchase_order_sale_req = transaction_purchase_order_sale_req.cd; //판매 발주서 문서번호; // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_entity Code(FK) 거래식별코드; // string

		doc.cd = getCodeByCollection( "transaction_purchase_order_sale", "transaction_purchase_order_sale_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //판매 발주확정서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : POCS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$category_delivery_type = transaction_purchase_order_sale_req.cd$category_delivery_type; //Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_leadTime = getLeadTimeForArray( transaction_purchase_order_sale_req.date_create, doc.date_create ); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction ); // object

		doc.items = transaction_purchase_order_sale_req.items; //발주 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array
		doc.memo = d.memo ? d.memo : ""; //발주확정서상의 특이사항등을 적는 노트; // string

	print( "------------------------------ [ E ] create_transaction_purchase_order_sale_res" );

	insertDoc( "transaction_purchase_order_sale", "transaction_purchase_order_sale_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_purchase_order_sale_res", doc.cd, "transaction_purchase_order_sale" );

	return doc;
};

/**
 * 판매거래 진척사항 저장
 * @function
 */
var create_transaction_sale_status = function( g_cd_transaction_entity, transaction_purchase_order_sale_res, d )
{
	print( "------------------------------ [ S ] create_transaction_sale_status" );

	var doc = createDoc( "transaction", "transaction_sale_status" );
		doc = setObjectFromParameter( doc, d );

		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_sale_status" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._id$partner_buyer = d._id$partner_buyer; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint

		doc.cd = getCodeByCollection( "transaction", "transaction_sale_status", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //Unique Key, 구매 상태(PK); // string

		doc.bIssue_tax_bill = false; //세금계산서 수취 여부(세금계산서일련번호가 등록되면 true로 변경); // uint
		doc.sn_tax_bill = null; //세금계산서 일련번호; // string
		doc.date_issue_tax_bill = null; //세금계산서 발행일; // object

		doc.cd$transaction_entity = g_cd_transaction_entity; //해당 판매 거래가 포함된 거래 식별 코드(FK); // string

		doc.cd$stock_entity = getCodeByCollection( "stock", "stock_entity", { cd$transaction_entity : g_cd_transaction_entity } ); //해당판매거래의 대상이 되는 재고 코드; // string

		doc.cd$transaction_purchase_order_sale_res = transaction_purchase_order_sale_res.cd; //transaction_purchase_order_sale(FK) 해당 구매 품목에 대한 판매발주 DB 식별코드; // string
		doc.cd$transaction_schedule_release = getCodeByCollection( "transaction", "transaction_schedule_release", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //transaction_schedule_release Code(FK) 출고일정 식별코드; // string
		doc.cd$transaction_deposit_information = getCodeByCollection( "transaction", "transaction_deposit_information", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //cd$transaction_deposit_information Code(FK) 해당 판매거래 지급일정 식별코드; // string
		doc.cd$transaction_cost_logistics_delivery = getCodeByCollection( "transaction", "transaction_cost_logistics_delivery", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //cd$transaction_cost_logistics_delivery(FK) 해당 판매거래 배송 식별코드; // string
		doc.cd$transaction_cost_logistics_release = getCodeByCollection( "transaction", "transaction_cost_logistics_release", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //cd$transaction_cost_logistics_release(FK) 해당 판매거래 출고 비용 식별코드; // string
		doc.cd$transaction_cost_logistics_operation = getCodeByCollection( "transaction", "transaction_cost_logistics_operation", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //cd$transaction_cost_logistics_operation(FK) 해당 판매거래 출고 물류 작업 비용 식별코드; // string
		doc.price_supply_total = d.price_supply_total; //해당 판매 거래의 판매 발주확정서상의 상품을 판매 하기 위한 총상품 공급가(공급가 = 비용 + 마진)으로 세액은 제외한다.; // object
		doc.tax_supply_total = d.tax_supply_total; //해당 판매 거래의 판매 발주확정서상의 상품을 판매 하기 위한 총상품 세액(해외 수출일 경우 영세율 적용, 한국 거래일경우 부가세); // object

	print( "------------------------------ [ E ] create_transaction_sale_status" );

	insertDoc( "transaction", "transaction_sale_status", doc );

	return doc;
};

/**
 * 구매견적요청서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quotation_sale_req 견적요청서
 * @param {Object} d
 */
var create_transaction_quotation_purchase_req = function( g_cd_transaction_entity, transaction_quotation_sale_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quotation_purchase_req" );

	var doc = createDoc( "transaction_quotation_purchase", "transaction_quotation_purchase_req" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 ) ;

		doc._id = NumberInt( db.getSiblingDB( "transaction_quotation_purchase" ).getCollection( "transaction_quotation_purchase_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._id$trade_terms = d._id$trade_terms; //trade_terms ID (FK) - trade_terms Collection 을 참조; // uint

		doc.addr_place_of_delivery = d.addr_place_of_delivery; //Address; // object

		doc.cd = getCodeByCollection( "transaction_quotation_purchase", "transaction_quotation_purchase_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //가견적 요청서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : QPR YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string
		doc.cd$category_delivery_type = d.cd$category_delivery_type; //Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string
		doc.cd$category_purchase_reason = d.cd$category_purchase_reason; //구매사유 코드 category_purchase_reason (FK); // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object

		doc.items = transaction_quotation_sale_req.items; //가견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array

		doc.info_delivery_option = d.info_delivery_option; //배송에 따라 필요한 정보를 추가 한다.; // array

		doc.payment_information = d.payment_information; //결제 정보 - 거래 조건, 지급 일정; // object

		doc.purchase_reason_etc_memo = d.purchase_reason_etc_memo; //구매 사유 기타 메모; // string

	print( "------------------------------ [ E ] create_transaction_quotation_purchase_req" );

	insertDoc( "transaction_quotation_purchase", "transaction_quotation_purchase_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quotation_purchase_req", doc.cd, "transaction_quotation_purchase" );

	return doc;
};

/**
 * 구매견적회신서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quotation_purchase_req 구매견적요청서
 * @param {Object} d
 */
var create_transaction_quotation_purchase_res = function( g_cd_transaction_entity, transaction_quotation_purchase_req, d )
{
	print( "------------------------------ [ S ] create_transaction_quotation_purchase_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	var doc = createDoc( "transaction_quotation_purchase", "transaction_quotation_purchase_res" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_quotation_purchase" ).getCollection( "transaction_quotation_purchase_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._id$trade_terms = d._id$trade_terms; //trade_terms ID (FK) - trade_terms Collection 을 참조; // uint

		doc.addr_place_of_delivery = d.addr_place_of_delivery; //Address; // object

		doc.cd = getCodeByCollection( "transaction_quotation_purchase", "transaction_quotation_purchase_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //구매 견적 회신 문서 번호 ( 외부에서 코드값으로 사용된다. 형식 : QTP YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string
		doc.cd$transaction_quotation_purchase_req = transaction_quotation_purchase_req.cd; //구매 견적 요청서 문서번호 ; // string
		doc.cd$category_delivery_type = d.cd$category_delivery_type; //Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_leadTime = getLeadTimeForArray( transaction_quotation_purchase_req.date_create, doc.date_create); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction ); // object
		doc.items = transaction_quotation_purchase_req.items; //구매 견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위, 상품가격정보, 물류스케쥴 등의 내용을 포함한다.; // array

		doc.info_delivery_option = d.info_delivery_option; //배송에 따라 필요한 정보를 추가 한다.; // array
		doc.payment_information = d.payment_information; //결제 정보 - 거래 조건, 지급 일정; // object
		doc.price_total = d.price_total; //총 견적 금액; // object
		doc.stock_wearing_date = date_expire; //물류스케쥴 - 입고일자 ( 공급자가 출고한 상품이 구매자에게 전달되는 날짜 ); // object
		doc.stock_wearing_address = d.stock_wearing_address; //물류스케쥴 - 입고창고주소 ( 공급자가 출고한 상품이 구매자에게 인도되는 장소 주소 ); // object

	print( "------------------------------ [ E ] create_transaction_quotation_purchase_res" );

	insertDoc( "transaction_quotation_purchase", "transaction_quotation_purchase_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_quotation_purchase_res", doc.cd, "transaction_quotation_purchase" );

	return doc;
};

/**
 * 구매발주서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_quotation_purchase_res 구매견적회신서
 * @param {Object} d
 */
var create_transaction_purchase_order_purchase_req = function( g_cd_transaction_entity, transaction_quotation_purchase_res, d )
{
	print( "------------------------------ [ S ] create_transaction_purchase_order_purchase_req" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	var doc = createDoc( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_req" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_purchase_order_purchase" ).getCollection( "transaction_purchase_order_purchase_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._id$trade_terms = d._id$trade_terms; //trade_terms ID (FK) - trade_terms Collection 을 참조; // uint

		doc.addr_place_of_delivery = d.addr_place_of_delivery; //Address; // object

		doc.cd = getCodeByCollection( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //구매 견적 요청서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : PO YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string
		doc.cd$category_delivery_type = d.cd$category_delivery_type; //Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string
		doc.cd$category_purchase_reason = "CPR001"; //구매사유; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_request = getObjectDateFromNewDate(); //Request Date 문서 생성일 ( 해당 문서가 생성되는 일자); // object

		doc.items = transaction_quotation_purchase_res.items; //구매 견적 요청 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위 등의 내용을 포함한다.; // array

		doc.info_delivery_option = d.info_delivery_option; //배송에 따라 필요한 정보를 추가 한다.; // array
		doc.memo = d.memo; //구매 발주에 대한 메모입력; // string

		doc.price_total = d.price_total; //구매 발주 총 금액; // object
		doc.payment_information = d.payment_information; //결제 정보 - 거래 조건, 지급 일정; // object
		doc.reason = d.reason ? d.reason : ""; //구매 발주에 대한 사유입력; // string

		doc.stock_wearing_date = d.stock_wearing_date; //물류스케쥴 - 입고일자자 ( 공급자가 출고한 상품이 구매자에게 전달되는 날짜 ); // object
		doc.stock_wearing_address = d.stock_wearing_address; //물류스케쥴 - 입고창고주소 ( 공급자가 출고한 상품이 구매자에게 인도되는 장소 주소 ); // object

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].price_supply_per_quantity = { // 공급하는 상품의 개당 공급가(세액제외) // object
			"_id$currency" : NumberInt( 79 )
			, "price" : 20

		};
		doc.items[ i ].price_supply_per_item = { // 품목당 공급가(세액제외) ( 수량 * 공급단가 ); // object
			"_id$currency" : NumberInt( 79 )
			, "price" : ( doc.items[ i ].price_supply_per_quantity.price *  doc.items[ i ].quantity )
		};

		doc.items[ i ].tax_per_quantity = { // 품목당 세액 tax_per_quantity * quantity // object
			"_id$currency" : NumberInt( 79 )
			, "price" : 35

		};

		doc.items[ i ].tax_per_item = { // 상품 개당 세액 // object
			"_id$currency" : NumberInt( 79 )
			, "price" : ( doc.items[ i ].tax_per_quantity.price *  doc.items[ i ].quantity )

		};
	}

	print( "------------------------------ [ E ] create_transaction_purchase_order_purchase_req" );

	insertDoc( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_purchase_order_purchase_req", doc.cd, "transaction_purchase_order_purchase" );

	return doc;
};

/**
 * 구매발주확정서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_req 구매발주서
 * @param {Object} d
 */
var create_transaction_purchase_order_purchase_res = function( g_cd_transaction_entity, transaction_purchase_order_purchase_req, d )
{
	print( "------------------------------ [ S ] create_transaction_purchase_order_purchase_res" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	var doc = createDoc( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_res" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_purchase_order_purchase" ).getCollection( "transaction_purchase_order_purchase_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._id$trade_terms = d._id$trade_terms; //trade_terms ID (FK) - trade_terms Collection 을 참조; // uint

		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string
		doc.cd$category_delivery_type = d.cd$category_delivery_type; //Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string

		doc.addr_place_of_delivery = d.addr_place_of_delivery; //Address; // object

		doc.cd$transaction_purchase_order_purchase_req = transaction_purchase_order_purchase_req.cd; //구매 견적 요청서 문서번호 ; // string

		doc.cd = getCodeByCollection( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //구매 발주 회신서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : POC YYYYMMDD PARTNER_ID Number); // string
		doc.date_due = date_expire; //납기요청일 ( 물품이 납기되는 제한기간 ); // object
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.date_leadTime = getLeadTimeForArray( transaction_purchase_order_purchase_req.date_create, doc.date_create ); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction ); // object
		doc.date_request = date_expire; //Request Date 문서 생성일 ( 해당 문서가 생성되는 일자); // object

		doc.items = transaction_purchase_order_purchase_req.items; //구매 발주 회신 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위, 세금정보, 물류스케쥴; // array
		doc.info_delivery_option = d.info_delivery_option; //배송에 따라 필요한 정보를 추가 한다.; // array

		doc.memo = d.memo ? d.memo : ""; //구매 발주 메모; // string
		doc.payment_information = d.payment_information; //결제 정보 - 거래 조건, 지급 일정; // object
		doc.reason = d.reason ? d.reason : ""; //구매 발주 사유; // string
		doc.stock_wearing_date = d.stock_wearing_date; //물류스케쥴 - 입고일자자 ( 공급자가 출고한 상품이 구매자에게 전달되는 날짜 ); // object
		doc.stock_wearing_address = d.stock_wearing_address; //물류스케쥴 - 입고창고주소 ( 공급자가 출고한 상품이 구매자에게 인도되는 장소 주소 ); // object

	var i=0, iLen=doc.items.length;
	var price_total = 0;
	var tax_total = 0;
	for( ; i<iLen; ++i )
	{
		price_total += doc.items[ i ].price_supply_per_item.price;
		tax_total += doc.items[ i ].tax_per_item.price;
	}

		doc.price_total = { //구매 발주 총 금액; // object
			_id$currency : NumberInt( 79 )
			, price : price_total
		}
		doc.tax_total = { //구매 발주 총 세액; // object
			_id$currency : NumberInt( 79 )
			, price : tax_total
		};


	print( "------------------------------ [ E ] create_transaction_purchase_order_purchase_res" );

	insertDoc( "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_purchase_order_purchase_res", doc.cd, "transaction_purchase_order_purchase" );

	// 구매거래진척사항 생성;
	//create_transaction_purchase_status( g_cd_transaction_entity, doc, d );

	return doc;
};

/**
 * 입고지시서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} create_transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Object} d
 */
var create_transaction_stock_wearing_req = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res, d )
{
	print( "------------------------------ [ S ] create_transaction_stock_wearing_req" );

	var predict_wearing_operation_date = getObjectDateFromNewDate();
		predict_wearing_operation_date.d = NumberInt( predict_wearing_operation_date.d + 3 );

	var doc = createDoc( "transaction_stock_wearing", "transaction_stock_wearing_req" );
		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_stock_wearing_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._ids$member = d._ids$member; //자사 member ID collection; // object
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint

		doc.cd = getCodeByCollection( "transaction_stock_wearing", "transaction_stock_wearing_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //입고지시 요청 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GWO YYYYMMDD PARTNER_ID Number); // string

		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd; //구매 발주 회신서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : POC YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string

		doc.date_request = getObjectDateFromNewDate(); //Request Date 문서 생성일 ( 해당 문서가 생성되는 일자); // object
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object

		doc.predict_wearing_operation_date = predict_wearing_operation_date; //입고작업 예정일자 - ( 다른화면에서 입력 )입고증 물류스케쥴에 사용된다;; // object
		doc.delivery_complete_date = predict_wearing_operation_date; //입고대기 완료일자 - 실제 오더한 상품이 창고에 도착한 일자 - 입고증 물류스케쥴에 사용된다;; // object
		doc.predict_inspection_date = predict_wearing_operation_date; ////검수검품 작업예정일자 - 입고증 물류스케쥴에 사용된다;; // object
		doc.stock_wearing_date = predict_wearing_operation_date; //물류스케쥴 - 입고대기 예정일일자 - 입고증 물류스케쥴에 사용된다; // object

		doc.items = transaction_purchase_order_purchase_res.items; //입고지시 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위; // array

		doc.memo = d.memo ? d.memo : "구매발주~"; //구매 발주 메모; // string
		doc.stock_wearing_address = d.stock_wearing_address; //물류스케쥴 - 입고창고주소; // object

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].cd$category_inspection_type = "CIT001";
		doc.items[ i ].cd$category_inspection_detail_type = "CID001";
		doc.items[ i ].predict_quantity = doc.items[ i ].quantity;
		doc.items[ i ].UOM = {};
		doc.items[ i ].UOM.nm = "pkg"
		doc.items[ i ].UOM.quantity = doc.items[ i ].quantity;
		doc.items[ i ].quantity_to_check = doc.items[ i ].quantity;
		doc.items[ i ].expiration_date_check_base_date = getObjectDateFromNewDate();
		doc.items[ i ].img_stock_wearing_req = null;

		delete doc.items[ i ].price_supply_per_item;
		delete doc.items[ i ].price_supply_quantity;
		delete doc.items[ i ].tax_per_quantity;
		delete doc.items[ i ].tax_per_item;
		delete doc.items[ i ].cd$category_delivery_type;
		delete doc.items[ i ].cd$date_warehousing;
		delete doc.items[ i ].info_delivery;
		delete doc.items[ i ].price_supply_per_quantity;
		delete doc.items[ i ].price_supply_per_quantity;
	}

	print( "------------------------------ [ E ] create_transaction_stock_wearing_req" );

	insertDoc( "transaction_stock_wearing", "transaction_stock_wearing_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_stock_wearing_req", doc.cd, "transaction_stock_wearing" );

	return doc;
};

/**
 * 입고패킹리스트
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Document} transaction_stock_wearing_req 입고지시서
 * @param {Object} d
 */
var create_transaction_packing_list_wearing = function( g_cd_transaction_entity, transaction_stock_wearing_req, d )
{
	print( "------------------------------ [ S ] create_transaction_packing_list_wearing" );

	var doc = createDoc( "transaction_stock_wearing", "transaction_packing_list_wearing" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_packing_list_wearing" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$member_public = d._id$member_public; //member_public ID(FK) - 해당 컬랙션에서 회사 구성원 정보(이름, 연락처, 부서) 를 참조한다.; // uint

		doc.cd = getCodeByCollection( "transaction_stock_wearing", "transaction_packing_list_wearing", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : d._id$partner_supplier - 0 } ); //입고 패킹리스트 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : OOO YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_stock_wearing_req = transaction_stock_wearing_req.cd; //transaction_stock_wearing_req ID(FK) - transaction_stock_wearing_req 컬랙션에서 ID를 참조한다.; // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object

		doc.items = transaction_stock_wearing_req.items; //패킹리스트 상의 아이템 정보 - 상품정보, UPC, 수량정보, 유통기한정보 등을 포함한다.; // array

		doc.memo = d.memo ? d.memo : "입고패킹리스트 작성완료"; //패킹리스트 메모; // string

		doc.total_quantity_pallet = d.total_quantity_pallet; //입고시 총 팔레트의 수량; // uint
		doc.total_quantity_package = d.total_quantity_package; //입고시 총 패키지(박스)의 수량; // uint
		doc.total_quantity_unit = d.total_quantity_unit; //입고시 총 상품의 수량; // uint

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].UPC = "8806334341688";
		doc.items[ i ].packing_info = [{
			pallet_no : NumberInt( 1 )
			, package_no : Number( i )
			, package_quantity_per_pallet : Number( 5 )
			, unit_quantity_per_package : Number( 5 )
			, quantity : Number( 10 )
		}];

		delete doc.items[ i ].quantity;
		delete doc.items[ i ].UOM;
		delete doc.items[ i ].date_warehousing;
		delete doc.items[ i ].cd$category_inspection_type;
		delete doc.items[ i ].cd$category_inspection_detail_type;
		delete doc.items[ i ].predict_quantity;
		delete doc.items[ i ].quantity_to_check;
		delete doc.items[ i ].expiration_date_check_base_date;
		delete doc.items[ i ].img_stock_wearing_req;
	}

	print( "------------------------------ [ E ] create_transaction_packing_list_wearing" );

	insertDoc( "transaction_stock_wearing", "transaction_packing_list_wearing", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_packing_list_wearing", doc.cd, "transaction_stock_wearing" );

	return doc;
};

/**
 * 입고 검수/검품 보고서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_purchase서_res 구매발주확정서
 * @param {Document} transaction_stock_wearing_req 입고지시서
 * @param {Object} d
 */
var create_transaction_inspection_report_wearing = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res, transaction_stock_wearing_req, d )
{
	print( "------------------------------ [ S ] create_transaction_inspection_report_wearing" );

	var transaction_packing_list_wearing = db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_packing_list_wearing" ).findOne({ cd$transaction_entity : g_cd_transaction_entity });
	var transaction_stock_wearing_req = db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_stock_wearing_req" ).findOne({ cd$transaction_entity : g_cd_transaction_entity });

	var doc = createDoc( "transaction_stock_wearing", "transaction_inspection_report_wearing" );
		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_inspection_report_wearing" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._ids$member = d._ids$member; //자사 member ID collection; // object

		doc.cd = getCodeByCollection( "transaction_stock_wearing", "transaction_inspection_report_wearing", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : d._id$partner_supplier - 0 } ); //입고 검수검품 보고서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : OOO YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd; //transaction_purchase_order_purchase_res ID(FK) - transaction_purchase_order_purchase_res 컬랙션에서 ID를 참조한다.; // string
		doc.cd$transaction_stock_wearing_req = transaction_stock_wearing_req.cd; //transaction_stock_wearing_res ID(FK) - transaction_stock_wearing_res 컬랙션에서 ID를 참조한다.; // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_inspection = getObjectDateFromNewDate() //검수검품 시행일자; // object
		doc.items = transaction_stock_wearing_req.items; //검품검수 보고서의 상품정보; // array
		doc.memo = d.memo ? d.memo : "입고 검수/검품완료"; //검수/검품 보고서 메모; // string

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].UPC = transaction_packing_list_wearing.items[ i ].UPC; // 패킹리스트의 UPC 설정;
		doc.items[ i ].inspection_quantity = NumberInt( transaction_stock_wearing_req.items[ i ].quantity_to_check ); // 입고지시서의 검수/검품수량;
		doc.items[ i ].faulty_info_total_quantity = NumberInt( 0 ); // 입고불량정보 - 총수량;
		doc.items[ i ].faulty_info_condition_quantity = NumberInt( 0 ); // 입고불량정보 - 상태불량;
		doc.items[ i ].faulty_info_img_quantity = NumberInt( 0 ); // 입고불량정보 - 품목확인불량;
		doc.items[ i ].faulty_info_upc_quantity = NumberInt( 0 ); // 입고불량정보 - 바코드 불일치;
		doc.items[ i ].expiration_date_check_quantity = NumberInt( transaction_stock_wearing_req.items[ i ].quantity_to_check ); // 검수검품수량;
		doc.items[ i ].expiration_date_check_base_date = transaction_stock_wearing_req.items[ i ].expiration_date_check_base_date; // 유통기한 확인 기준일;
		doc.items[ i ].expiration_date_basic_info = [{
			expiration_date : transaction_stock_wearing_req.items[ i ].expiration_date_check_base_date // 입고상품 유통기한 확인 기준일;
			, expiration_date_check : NumberInt( 1 ) // 입고상품 유통기한 통과 여부;
			, quantity : NumberInt( 1 ) // 입고예정수량;
		}];
		doc.items[ i ].inspection_pass_quantity = NumberInt( transaction_stock_wearing_req.items[ i ].quantity ); // 상품입고정보 - 정상;
		doc.items[ i ].inspection_faulty_quantity = NumberInt( 0 ); // 상품입고정보 - 정상;
		doc.items[ i ].cost_inspection = { // 해당 상품의 검수/검품비용;
			id$currency : NumberInt( 79 )
			, price : 10
		};

		delete doc.items[ i ].packing_info;
	}

	print( "------------------------------ [ E ] create_transaction_inspection_report_wearing" );

	insertDoc( "transaction_stock_wearing", "transaction_inspection_report_wearing", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_inspection_report_wearing", doc.cd, "transaction_stock_wearing" );

	return doc;
};

/**
 * 입고증
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_stock_wearing_req 입고지시서
 * @param {Document} transaction_packing_list_wearing 입고패킹리스트
 * @param {Object} d
 */
var create_transaction_stock_wearing_res = function( g_cd_transaction_entity, transaction_stock_wearing_req, transaction_packing_list_wearing, transaction_inspection_report_wearing, d )
{
	print( "------------------------------ [ S ] create_transaction_stock_wearing_res" );

	var doc = createDoc( "transaction_stock_wearing", "transaction_stock_wearing_res" );
		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_stock_wearing_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._id$partner_supplier = d._id$partner_supplier; //Partner Supplier ID(FK) - 파트너사 - 상품공급자의 정보를 저장하는 컬랙션으로 업체명, 주소, 전화번호, 팩스번호등을 참조한다.; // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint
		doc._ids$member = d._ids$member; //자사 member ID collection; // object

		doc.cd = getCodeByCollection( "transaction_stock_wearing", "transaction_stock_wearing_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : doc._id$partner_supplier - 0 } ); //입고증 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GWS YYYYMMDD PARTNER_ID Number); // string

		doc.cd$transaction_stock_wearing_req = transaction_stock_wearing_req.cd; //입고지시 요청 문서번호; // string
		doc.cd$transaction_inspection_report_wearing = transaction_inspection_report_wearing.cd; //transaction_report_wearing ID (FK) - transaction_report_wearing Collection 을 참조; // string
		doc.cd$transaction_packing_list_wearing = transaction_packing_list_wearing.cd; //packing_list_wearing ID (FK) - packing_list_wearing Collection 을 참조; // string
		doc.cd$transaction_entity = g_cd_transaction_entity; //Transaction_purchase_item Code(FK) 거래 아이템 식별코드(); // string

		doc.cost_logistics_stock_wearing = d.cost_logistics_stock_wearing; //undefined; // undefined

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_leadTime = getLeadTimeForArray( transaction_stock_wearing_req.date_create, doc.date_create ); //해당 판매 가견적 거래의 수행 기간 ( date_end_transaction - date_create_transaction ); // object

		doc.wearing_pendding_delay_reason = null; //입고대기 지연 사유; // string
		doc.inspection_delay_reason = null; //검수/검품 작업 지연 사유; // string
		doc.wearing_delay_reason = null; //입고 지연 사유; // string
		doc.items = transaction_stock_wearing_req.items; //입고증 품목 명세서 - 브랜드 명, 상품 명, 수량, 단위, 세금정보, 물류스케쥴 등의 내용을 포함한다; // array
		doc.memo = d.memo ? d.memo : "빠른 처리 부탁합니다"; //입고시 메모 ( 특이사항 및 기타내용 ); // string
		doc.img_stock_wearing_res = [
			{ _id : NumberInt( 0 ), url : "http://www.b2link.co.kr/images/logo@2x.png" }
		]; // 입고증 참고 이미지;

		doc.stock_wearing_date = getObjectDateFromNewDate();

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].expiration_dates = []; // 입고된 상품의 유통기한;
		doc.items[ i ].location_lot = "AB0000000000"; // 창고위치정보;
		doc.items[ i ].location_bin = "AB0000000000"; // 창고위치정보;

		delete doc.items[ i ].UPC;
		delete doc.items[ i ].packing_info;
		delete doc.items[ i ].inspection_quantity;
		delete doc.items[ i ].faulty_info_total_quantity;
		delete doc.items[ i ].faulty_info_condition_quantity;
		delete doc.items[ i ].faulty_info_img_quantity;
		delete doc.items[ i ].faulty_info_upc_quantity;
		delete doc.items[ i ].expiration_date_check_quantity;
		delete doc.items[ i ].expiration_date_check_base_date;
	}

	print( "------------------------------ [ E ] create_transaction_stock_wearing_res" );

	insertDoc( "transaction_stock_wearing", "transaction_stock_wearing_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_stock_wearing_res", doc.cd, "transaction_stock_wearing" );

	return doc;
};

/**
 * 재고처리 여러 건
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_stock_wearing_res 입고증
 * @param {Object} d
 */
var create_stock_entities = function( g_cd_transaction_entity, transaction_stock_wearing_res, d )
{
	print( "------------------------------ [ S ] create_stock_entities" );

	// 구매발주확정서;
	var transaction_purchase_order_purchase_res = db.getSiblingDB( "transaction_purchase_order_purchase" ).getCollection( "transaction_purchase_order_purchase_res" ).findOne({ cd$transaction_entity : g_cd_transaction_entity });
	// 검수검품보고서;
	var transaction_inspection_report_wearing = db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_inspection_report_wearing" ).findOne({ cd$transaction_entity : g_cd_transaction_entity });

	var items = transaction_stock_wearing_res.items;
	var i=0, iLen=items.length;
	var d_entity = null;
	var d_quantity = null;
	var item = null;
	for( ; i<iLen; ++i )
	{
		item = items[ i ];
		d_entity = {};
		d_entity._id$brand_basic = item._id$brand_basic;
		d_entity._id$product_basic = item._id$product_basic;
		d_entity.asset = {
			_id$currency : NumberInt( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"]._id$currency )
			, price : ( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"].price * transaction_purchase_order_purchase_res.items[ i ].quantity )
		};
		d_entity.date_expire = getObjectDateFromNewDate(); // object;
		d_entity.lot = item.location_lot;
		d_entity.price_per_unit = transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"];
		d_entity.cd$transaction_stock_wearing_res = transaction_stock_wearing_res.cd;

		var doc_entity = create_stock_entity( g_cd_transaction_entity, d_entity );

		d_quantity = {};
		d_quantity._id$brand_basic = item._id$brand_basic;
		d_quantity._id$product_basic = item._id$product_basic;
		d_quantity.asset = { // 현재 SKU(Stock Entity CODE) 의 총 재고 자산; //object;
			_id$currency : NumberInt( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"]._id$currency )
			, price : ( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"].price * transaction_purchase_order_purchase_res.items[ i ].quantity )
		};
		d_quantity.bin = item.location_bin; // 해당 상품이 위치한 위치 번호 소분류 - 물류창고의 lot 번호 (확보 불가능 시 창고코드로 대체); //string;

		d_quantity.cd$warehouse = d.cd$warehouse; // 해당 재고의 식별코드; //string;
		d_quantity.current_asset = { // 현재 재고 자산; //object;
			_id$currency : NumberInt( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"]._id$currency )
			, price : ( transaction_purchase_order_purchase_res.items[ i ]["price_supply_per_quantity"].price * transaction_purchase_order_purchase_res.items[ i ].quantity )
		};

		d_quantity.quantity_total = NumberInt( transaction_purchase_order_purchase_res.items[ i ].quantity ); // 입고 되어야 하는 수량 - 구매 발주확정서에서 확보; // uint;
		d_quantity.quantity_current = NumberInt( transaction_inspection_report_wearing.items[ i ].inspeciont_pass_quantity ); // 현재 수량-( 입고 수량 - 출고 예정 수량 - 출고 수량 ); // uint; // 최초 입력 시에는 검수/검품 보고서 정상수량;
		d_quantity.quantity_predict_release = []; // 출고 예정 수량; // array;
		d_quantity.quantity_predict_wearing = []; // 입고 예정 수량; // array 미정;
		d_quantity.quantity_wearing = NumberInt( transaction_inspection_report_wearing.items[ i ].inspeciont_pass_quantity ); // 실제 입고 수량  - 입고증; // uint;
		d_quantity.quantity_release = NumberInt( 0 ); // 실제 출고 수량 (출고가 이루어 질 때마다 합산); // uint;

		d_quantity.history_release = []; // 출고 이력 // array;
		d_quantity.history_wearing = []; // 입고 이력; // array;

		var doc_quantity = create_stock_quantity( g_cd_transaction_entity, doc_entity.cd, d_quantity );

		// 입고 이력 추가;
		var doc_history_wearing = create_history_wearing( g_cd_transaction_entity, doc_entity, doc_quantity, transaction_stock_wearing_res );

		// 입고 이력에 대해 stock_quantity update;
		updateDoc_stock_quantity_wearing( doc_quantity.cd, doc_history_wearing.cd, doc_history_wearing.quantity );
	}
	print( "------------------------------ [ E ] create_stock_entities" );
};

/**
 * 재고처리 1건 ( entity )
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Object} d
 */
var create_stock_entity = function( g_cd_transaction_entity, d )
{
	print( "------------------------------ [ S ] create_stock_entity" );

	var doc = createDoc( "stock", "stock_entity" );
		doc._id = NumberInt( db.getSiblingDB( "stock" ).getCollection( "stock_entity" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$brand_basic = d._id$brand_basic; // Brand ID (FK) - Brand Collection 을 참조( 브랜드명 등을 참조한다. ) // uint;
		doc._id$product_basic = d._id$product_basic; // Product ID (FK) - Product Collection 을 참조( 상품명 등을 참조한다. ) // uint;
		doc.asset = d.asset; // 현재 SKU(Stock Entity CODE) 의 총 재고 자산; // object;
		doc.cd = getCodeByCollection( "stock", "stock_entity", { cd$transaction_entity : g_cd_transaction_entity } ); // 해당 재고의 식별코드; // string;
		doc.date_expire = d.date_expire; // 해당 재고의 유통기한 날짜; // object;
		doc.lot = d.lot; // 해당 상품의 제조단위번호 - 확보 불가로 공급자(Patner.partner_supplier) 코드로 대체 한다.;  // string;
		doc.price_per_unit = d.price_per_unit; // 재고 상품의 개당 단가(세액제외) - 구매 발주확정서에서 확보;
		doc.cd$transaction_stock_wearing_res = d.cd$transaction_stock_wearing_res;

	print( "------------------------------ [ E ] create_stock_entity" );

	insertDoc( "stock", "stock_entity", doc );

	return doc;
};

/**
 * 재고처리 1건 ( entity에 해당하는 stock_quantity )
 * @function
 * @param {String} cd$stock_entity 재고코드
 * @param {Object} d
 */
var create_stock_quantity = function( g_cd_transaction_entity, cd$stock_entity, d )
{
	print( "------------------------------ [ S ] create_stock_quantity" );

	var doc = createDoc( "stock", "stock_quantity" );
		doc._id = NumberInt( db.getSiblingDB( "stock" ).getCollection( "stock_quantity" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$brand_basic = d._id$brand_basic; // Brand ID (FK) - Brand Collection 을 참조( 브랜드명 등을 참조한다. ) // uint;
		doc._id$product_basic = d._id$product_basic; // Product ID (FK) - Product Collection 을 참조( 상품명 등을 참조한다. ) // uint;

		doc.asset = d.asset; // 현재 SKU(Stock Entity CODE) 의 총 재고 자산; //object;
		doc.bin = d.bin; // 해당 상품이 위치한 위치 번호 소분류 - 물류창고의 lot 번호 (확보 불가능 시 창고코드로 대체); //string;

		doc.cd = getCodeByCollection( "stock", "stock_quantity", { cd$stock_entity : cd$stock_entity } ); // 해당 재고의 식별코드; // string;
		doc.cd$warehouse = d.cd$warehouse; // 해당 재고의 식별코드; //string;
		doc.cd$stock_entity = cd$stock_entity; // 해당 재고의 식별코드; //string;
		doc.current_asset = d.current_asset; // 현재 재고 자산; //object;

		doc.quantity_total = d.quantity_total; // 입고 되어야 하는 수량 - 구매 발주확정서에서 확보; // uint;
		doc.quantity_current = d.quantity_current; // 현재 수량-( 입고 수량 - 출고 예정 수량 - 출고 수량 ); // uint;
		doc.quantity_predict_release = d.quantity_predict_release; // 입고 예정 수량; // array;
		doc.quantity_predict_wearing = d.quantity_predict_wearing; // 입고 예정 수량; // array;
		doc.quantity_wearing = d.quantity_wearing; // 실제 입고 수량  - 입고증; // uint;

		doc.history_release = d.history_release; // 출고 이력 // array;
		doc.history_wearing = d.history_wearing; // 입고 이력; // array;

	print( "------------------------------ [ E ] create_stock_quantity" );

	insertDoc( "stock", "stock_quantity", doc );

	return doc;
};

/**
 * 입고이력
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {String} stock_entity 재고
 * @param {String} stock_quantity 재고코드
 * @param {String} transaction_stock_wearing_res 입고증
 */
var create_history_wearing = function( g_cd_transaction_entity, stock_entity, stock_quantity, transaction_stock_wearing_res )
{
	print( "------------------------------ [ S ] create_history_wearing" );

	var doc = createDoc( "stock", "history_wearing" );
		doc._id = NumberInt( db.getSiblingDB( "stock" ).getCollection( "history_wearing" ).count() );
		doc.cd = getCodeByCollection( "stock", "history_wearing", { cd$stock_quantity : stock_quantity.cd } );
		doc.cd$stock_entity = stock_entity.cd; // 재고코드;
		doc.cd$stock_quantity = stock_quantity.cd; // 재고코드;
		doc.cd$transaction_entity = g_cd_transaction_entity; // 거래식별코드;
		doc.cd$transaction_stock_wearing_res = transaction_stock_wearing_res.cd; // 입고증;
		doc.date_wearing = transaction_stock_wearing_res.date_create;// 입고일자;
		doc.quantity = stock_quantity.quantity_current; // 실제 입고된 상품의 갯수 ( 입고증 );
		doc.asset_wearing = stock_quantity.asset; // 입고된 재고 자산;

	print( "------------------------------ [ E ] create_history_wearing" );

	insertDoc( "stock", "history_wearing", doc );

	return doc;
};

/**
 * 출고지시서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_purchase_order_sale_res 판매발주확정서
 * @param {Object} d
 */
var create_transaction_stock_release_req = function( g_cd_transaction_entity, transaction_purchase_order_sale_res, d )
{
	print( "------------------------------ [ S ] create_transaction_stock_release_req" );

	// 입고지시서;
	var transaction_stock_wearing_req = db.getSiblingDB( "transaction_stock_wearing" ).getCollection( "transaction_stock_wearing_req" ).findOne({ cd$transaction_entity : g_cd_transaction_entity });

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );
	var date_inspection = getObjectDateFromNewDate();
		date_inspection.d = NumberInt( date_inspection.d + 2 );

	var doc = getSchemaCollectionProperties( "transaction_stock_release", "transaction_stock_release_req" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_release" ).getCollection( "transaction_stock_release_req" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._ids$member = d._ids$member; //자사 member ID collection; // object
		doc._id$partner_buyer = d._id$partner_buyer; //Partner Buyer ID(FK); // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint

		doc.cd = getCodeByCollection( "transaction_stock_release", "transaction_stock_release_req", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //출고지시 요청 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIO YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_purchase_order_sale_res = transaction_purchase_order_sale_res.cd; //transaction_purchase_order_purchase_res ID(FK) - transaction_purchase_order_sale_res 컬랙션에서 ID를 참조한다.; // string

		doc.cd$category_inspection_type = d.cd$category_inspection_type; //입고시 검수 및 검품을 요청하는 카테고리 컬렉션의 ID 값; // string
		doc.cd$category_inspection_detail_type = d.cd$category_inspection_detail_type; //입고시 검수 및 검품요청의 세부항목 카테고리 컬렉션의 ID 값 ( 전수/샘플링 ); // string
		doc.cd$category_release_operation_type = d.cd$category_release_operation_type; //category_release_operation_type ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_type 컬랙션을 참조; // string
		doc.cd$category_release_operation_range = d.cd$category_release_operation_range; //category_release_operation_range ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_range 컬랙션을 참조; // string
		doc.cd$category_release_operation_packaging_material = d.cd$category_release_operation_packaging_material; //category_release_operation_packaging_material ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_packaging_material 컬랙션을 참조; // string

		doc.date_request = getObjectDateFromNewDate(); //Request Date 문서 생성일 ( 해당 문서가 생성되는 일자); // object
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object

		doc.stock_release_date = getObjectDateFromNewDate(); //출고요청일자; // object

		doc.stock_release_address = d.stock_release_address; //출고창고주소; //object

		doc.items = transaction_purchase_order_sale_res.items; //출고지시 품목 명세서 - SKU, 수량, 단위; // array

		doc.memo = d.memo ? d.memo : ""; //출고지시 메모; // string

		doc.date_inspection = date_inspection;// 검수검품 시행예정일자; object;

		date_inspection.d = NumberInt( date_inspection.d + 1 );
		doc.date_packing = date_inspection;// 패킹작업 예정일자; object;

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].cd$stock_entity = "SKU-2017-03-07-PB0-1-1";
		doc.items[ i ].cd$stock_quantity = "SKU-2017-03-07-PB0-1-1-Q1";
		doc.items[ i ].release_operation_info = {
			cd$category_release_operation_type : "ROT002"
			, memo : "상품박스넘버링 철저히 부탁드립니다."
		};
		if( transaction_stock_wearing_req )
		{
			doc.items[ i ].cd$category_inspection_type = transaction_stock_wearing_req.items[ i ].cd$category_inspection_type;
			doc.items[ i ].cd$category_inspection_detail_type = transaction_stock_wearing_req.items[ i ].cd$category_inspection_detail_type;
			doc.items[ i ].quantity_to_check = transaction_stock_wearing_req.items[ i ].UOM.quantity_to_check;
			doc.items[ i ].quantity = transaction_stock_wearing_req.items[ i ].UOM.quantity;
		}
		else // 재고가 기존재하는 거래의 경우에는 입고지시서가 존재하지 않음;
		{
			doc.items[ i ].cd$category_inspection_type = "CIT001";
			doc.items[ i ].cd$category_inspection_detail_type = "CID001";
			doc.items[ i ].quantity_to_check = NumberInt( 100 );
			doc.items[ i ].quantity = NumberInt( 100 );
		}

		delete doc.items[ i ].UOM;
		delete doc.items[ i ].price_supply_per_item;
		delete doc.items[ i ].price_supply_quantity;
		delete doc.items[ i ].tax_per_quantity;
		delete doc.items[ i ].tax_per_item;
		delete doc.items[ i ].cd$category_delivery_type;
		delete doc.items[ i ].date_warehousing;
		delete doc.items[ i ].info_delivery;
		delete doc.items[ i ].expiration_dates;
		delete doc.items[ i ].location_lot;
		delete doc.items[ i ].location_bin;
	}

	print( "------------------------------ [ E ] create_transaction_stock_release_req" );

	insertDoc( "transaction_stock_release", "transaction_stock_release_req", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_stock_release_req", doc.cd, "transaction_stock_release" );

	return doc;
};

/**
 * 출고 검수/검품 보고서
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_stock_release_req 출고지시서
 * @param {Object} d
 */
var create_transaction_inspection_report_release = function( g_cd_transaction_entity, transaction_stock_release_req, d )
{
	print( "------------------------------ [ S ] create_transaction_inspection_report_release" );

	var doc = createDoc( "transaction_stock_release", "transaction_inspection_report_release" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_release" ).getCollection( "transaction_inspection_report_release" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._ids$member = d._ids$member; //자사 member ID collection; // object

		doc.cd = getCodeByCollection( "transaction_stock_release", "transaction_inspection_report_release", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : transaction_stock_release_req._id$partner_buyer - 0 } ); //출고 검수검품 보고서 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : OOO YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_purchase_order_sale_res = transaction_stock_release_req.cd$transaction_purchase_order_sale_res; //transaction_purchase_order_purchase_res ID(FK) - transaction_purchase_order_sale_res 컬랙션에서 ID를 참조한다.; // string
		doc.cd$transaction_stock_release_req = transaction_stock_release_req.cd; //transaction_stock_release_req ID(FK) - transaction_stock_release_req 컬랙션에서 ID를 참조한다.; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_inspection = getObjectDateFromNewDate(); //검수검품 시행일자; // object

		doc.total_expected_release_quantity = d.total_expected_release_quantity; //총 출고예정수량; // uint
		doc.total_actual_wearing_quantity = d.total_actual_wearing_quantity; //총 실제 출고된 수량중 검품불합격 상품을 뺀 나머지 수량; // uint
		doc.total_untrainde_wearing_quantity = d.total_untrainde_wearing_quantity; //총 미입고수량 및 입고불가수량( 총 미입고 수량 + 검품불합격 수량 ); // uint
		doc.total_cost_inspection_count = d.total_cost_inspection_count; //해당 검수/검품의 비용중 검수비용 총 합계 ( 검품비용 + 검수비용 ); // object
		doc.total_cost_inspection_quality = d.total_cost_inspection_quality; //해당 검수/검품의 비용중 검품비용  총 합계 ( 검품비용 + 검수비용 ); // object
		doc.total_cost_inspection = d.total_cost_inspection; //해당 검수/검품의 비용 총 합계 ( 검품비용 + 검수비용 ); // object

		doc.items = transaction_stock_release_req.items; //검품검수 보고서의 상품정보; // array
		doc.memo = d.memo ? d.memo : "검수/검품 보고서 메모"; //검수/검품 보고서 메모; // string

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].inspection_quantity_info = {
			actual_release_quantity : NumberInt( 100 )
			, cost_inspection_count : {
				_id$currency : NumberInt( 79 )
				, price : 10

			}
			, expected_release_quantity : NumberInt( 100 )
			, untrainde_release_quantity : NumberInt( 0 )
			, memo : "memo"
		};
		/*/
		doc.items[ i ].inspection_quality_info = {
			cost_inspection_quality : ""
			, inspection_quality_pass_quantity : ""
			, inspection_quality_fail_quantity_of_status : ""
			, inspection_quality_fail_quantity_of_expire_date : ""
			, total_inspection_quality_fail_quantity : ""
			, memo : "memo"
		};
		//*/
		doc.items[ i ].nm_product = "[holika holika] Pig-Nose Clear Black Head 3-Step Kit";
		doc.items[ i ].total_expected_release_quantity = NumberInt( 100 );
		doc.items[ i ].total_actual_release_quantity = NumberInt( 100 );
		doc.items[ i ].total_untrainde_release_quantity = NumberInt( 100 );
		doc.items[ i ].upc_check = NumberInt( 1 );
		doc.items[ i ].UPC = "8806334341688";

		delete doc.items[ i ]._id$brand_basic;
		delete doc.items[ i ]._id$product_basic;
		delete doc.items[ i ].release_operation_info;
		delete doc.items[ i ].cd$category_inspection_type;
		delete doc.items[ i ].cd$category_inspection_detail_type;
		delete doc.items[ i ].quantity;
		delete doc.items[ i ].quantity_to_check;
		delete doc.items[ i ].inspection_quantity_info;
	}

	print( "------------------------------ [ E ] create_transaction_inspection_report_release" );

	insertDoc( "transaction_stock_release", "transaction_inspection_report_release", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_inspection_report_release", doc.cd, "transaction_stock_release" );

	return doc;
};

/**
 * 출고패킹리스트
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_inspection_report_release 출고 검수/검품 보고서
 * @param {Object} d
 */
var create_transaction_packing_list_release = function( g_cd_transaction_entity, transaction_inspection_report_release, d )
{
	print( "------------------------------ [ S ] create_transaction_packing_list_release" );

	var date_expire = getObjectDateFromNewDate();
		date_expire.m = NumberInt( date_expire.m + 1 );

	// 발주서;
	var doc_transaction_purchase_order_sale_req = db.getSiblingDB( "transaction_purchase_order_sale" ).getCollection( "transaction_purchase_order_sale_req" ).find({ cd$transaction_entity : g_cd_transaction_entity });

	var doc = createDoc( "transaction_stock_release", "transaction_packing_list_release" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_release" ).getCollection( "transaction_packing_list_release" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._ids$member = d._ids$member; //자사 member ID collection; // object
		doc._id$partner_buyer = d._id$partner_buyer; //Partner Buyer ID(FK); // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint

		doc.cd = getCodeByCollection( "transaction_stock_release", "transaction_packing_list_release", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //출고지시 요청 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIO YYYYMMDD PARTNER_ID Number); // string

		doc.cd$category_inspection_type = d.cd$category_inspection_type; //출고시 검수 및 검품을 요청하는 카테고리 컬렉션의 ID 값; // string
		doc.cd$category_inspection_detail_type = d.cd$category_inspection_detail_type; //출고시 검수 및 검품요청의 세부항목 카테고리 컬렉션의 ID 값 ( 전수/샘플링 ); // string
		doc.cd$category_release_operation_type = d.cd$category_release_operation_type; //category_release_operation_type ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_type 컬랙션을 참조; // string
		doc.cd$category_release_operation_range = d.cd$category_release_operation_range; //category_release_operation_range ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_range 컬랙션을 참조; // string
		doc.cd$category_release_operation_packaging_material = d.cd$category_release_operation_packaging_material; //category_release_operation_packaging_material ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_packaging_material 컬랙션을 참조; // string

		doc.date_request = getObjectDateFromNewDate(); //Request Date 문서 생성일 ( 해당 문서가 생성되는 일자); // object
		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array
		doc.date_cancel = null; //Cancel Date 문서 취소일 ( 해당 문서가 취소되는 일자); // object
		doc.date_expire = date_expire; //Cancel Expire 문서 유효기간 ( 해당 문서의 유효기간( 해당 문서는 당 기간까지 유효함 )); // object
		doc.stock_release_address = d.stock_release_address; //출고창고주소; // object

		doc.items = transaction_inspection_report_release.items; //출고지시 품목 명세서 - SKU, 수량, 단위; // array
		doc.memo = d.memo ? d.memo : "출고지시 메모"; //출고지시 메모; // string

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		delete doc.items[ i ]._id$brand_basic;
		delete doc.items[ i ]._id$product_basic;
		delete doc.items[ i ].cd$stock_quantity;
		delete doc.items[ i ].release_operation_info;
		delete doc.items[ i ].cd$category_inspection_type;
		delete doc.items[ i ].cd$category_inspection_detail_type;
		delete doc.items[ i ].quantity_to_check;
		delete doc.items[ i ].quantity;
		delete doc.items[ i ].inspection_quantity_info;
		delete doc.items[ i ].nm_product;
		delete doc.items[ i ].total_expected_release_quantity;
		delete doc.items[ i ].total_actual_release_quantity;
		delete doc.items[ i ].total_untrainde_release_quantity;
		delete doc.items[ i ].upc_check;
		delete doc.items[ i ].UPC;
	}

	print( "------------------------------ [ E ] create_transaction_packing_list_release" );

	insertDoc( "transaction_stock_release", "transaction_packing_list_release", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_packing_list_release", doc.cd, "transaction_stock_release" );

	return doc;
};

/*
 * 출고증
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_packing_list_release 출고패킹리스트
 * @param {Document} transaction_purchase_order_sale_res 출고지시서
 * @param {Document} transaction_inspection_report_release 출고 검수/검품 보고서
 * @param {Object} d
 */
var create_transaction_stock_release_res = function( g_cd_transaction_entity, transaction_packing_list_release, transaction_purchase_order_sale_res, transaction_inspection_report_release, d )
{
	print( "------------------------------ [ S ] create_transaction_stock_release_res" );

	var doc = createDoc( "transaction_stock_release", "transaction_stock_release_res" );

		doc._id = NumberInt( db.getSiblingDB( "transaction_stock_release" ).getCollection( "transaction_stock_release_res" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc._id$company_info_basic = d._id$company_info_basic; //본사 정보를 저장하는 컬랙션으로 본사의 업체명, 주소, 전화번호, 팩스번호등을 참조한다; // uint
		doc._ids$member = d._ids$member; //자사 member ID collection; // object
		doc._id$partner_buyer = d._id$partner_buyer; //Partner Buyer ID(FK); // uint
		doc._id$partner_person = d._id$partner_person; //파트너사 담당자 ID(FK); // uint

		doc.cd = getCodeByCollection( "transaction_stock_release", "transaction_stock_release_res", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : doc._id$partner_buyer - 0 } ); //출고중 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_inspection_report_release = transaction_inspection_report_release.cd; //transaction_inspection_report_release ID (FK) - transaction_inspection_report_release Collection 을 참조; // string
		doc.cd$transaction_packing_list_release = transaction_packing_list_release.cd; //packing_list_release ID (FK) - packing_list_release Collection 을 참조; // string
		doc.cd$transaction_stock_release_req = transaction_purchase_order_sale_res.cd; //출고지시 요청 문서번호; // string

		doc.date_create = getArrayDateFromNewDate(); //Create Date 문서 생성일 ( 해당 문서가 생성되는 일자); // array

		doc.items = transaction_packing_list_release.items; //출고지시 품목 명세서 - SKU, 수량, 단위; // array
		doc.memo = d.memo ? d.memo : ""; //출고증 메모; // string

		doc.release_pendding_delay_reason = null; //출고대기 지연 사유; // string
		doc.inspection_delay_reason = null; // 검수/검품 지연 사유; // string
		doc.release_delay_reason = null; // 출고 지연 사유; // string

	var i=0, iLen=doc.items.length;
	for( ; i<iLen; ++i )
	{
		doc.items[ i ].UOM = {
			nm : "pkg"
			, quantity : NumberInt( 10 )
		};
		doc.items[ i ].quantity = NumberInt( 100 );
		doc.items[ i ].delivery_information = {
			cd$cateogry_delivery_type : d.cd$category_delivery_type
			, info_delivery_option : d.info_delivery_option
		};
	}

	print( "------------------------------ [ E ] create_transaction_stock_release_res" );

	insertDoc( "transaction_stock_release", "transaction_stock_release_res", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_stock_release_res", doc.cd, "transaction_stock_release" );

	return doc;
};

/**
 * 배송
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param {Document} transaction_stock_release_res 출고증
 */
var create_transaction_delivery_information = function( g_cd_transaction_entity, transaction_stock_release_res )
{
	print( "------------------------------ [ S ] create_transaction_delivery_information" );

	var date_end = getObjectDateFromNewDate();
		date_end.d = NumberInt( date_end.d + 3 );

	var doc = createDoc( "transaction", "transaction_delivery_information" );

		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_delivery_information" ).count() ); //Unique Key, Primary Key(PK); // uint

		doc.cd = getCodeByCollection( "transaction", "transaction_delivery_information", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : transaction_stock_release_res._id$partner_buyer - 0 } ); //배송 문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$category_delivery_type = "CDT001"; // Delivery_type ID (FK) - 배송 방식 category 의 delivery type 컬랙션을 참조; // string

		doc.date_delivery_start = getObjectDateFromNewDate(); // 배송시작일자; // object
		doc.date_delivery_end = date_end; // 배송완료일자; // object
		doc.delivery_history = null; // delivery_history; //array

		doc.cd$transaction_entity = g_cd_transaction_entity;

	print( "------------------------------ [ E ] create_transaction_delivery_information" );

	insertDoc( "transaction", "transaction_delivery_information", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_delivery_information", doc.cd, "transaction" );

	return doc;
};

/**
 * 구매정산
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param transaction_purchase_order_purchase_res 구매발주확정서
 */
var create_transaction_payment_information = function( g_cd_transaction_entity, transaction_purchase_order_purchase_res )
{
	print( "------------------------------ [ S ] create_transaction_payment_information" );

	var doc = createDoc( "transaction", "transaction_payment_information" );

		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_payment_information" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$trade_disposal = NumberInt( 1 ); //지급조건(무역대금 지급 조건 참조) - trade_disposal 컬랙션 참조 값; // uint

		doc.cd = getCodeByCollection( "transaction", "transaction_payment_information", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_supplier : transaction_purchase_order_purchase_res._id$partner_supplier - 0 } ); //문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_purchase_res = transaction_purchase_order_purchase_res.cd;
		doc.deposit = { // 보증금(계약금등); //object
			_id$currency : NumberInt( 79 )
			, price : 500
		};
		doc.info_bank = { // 결제 계좌 정보로 국가 코드, 은행정보(swift_code), 계좌정보, 소유자정보등을 저장한다.; //object
			cd$country : "US"
			, cd_swift : "BOFAKR2X"
			, num_account : "123-456-789"
			, nm_account_owner : "이소형"
		};
		doc.payment_option = { // 지급 방식; //object;
			payment_schedule : [
				{
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 2 )
						, "d" : NumberInt( 12 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 30 )
				}
				, {
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 2 )
						, "d" : NumberInt( 13 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 30 )
				}
				, {
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 2 )
						, "d" : NumberInt( 14 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 40 )
				}
			]
		};
		doc.tax_bill = NumberInt( 1 ); // 세금계산서 발급 여부;

	print( "------------------------------ [ E ] create_transaction_payment_information" );

	insertDoc( "transaction", "transaction_payment_information", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_payment_information", doc.cd, "transaction" );

	return doc;
};

/**
 * 판매정산
 * @function
 * @param {String} g_cd_transaction_entity 거래식별코드
 * @param transaction_purchase_order_sale_res 판매발주확정서
 */
var create_transaction_deposit_information = function( g_cd_transaction_entity, transaction_purchase_order_sale_res )
{
	print( "------------------------------ [ S ] create_transaction_deposit_information" );

	var doc = createDoc( "transaction", "transaction_deposit_information" );

		doc._id = NumberInt( db.getSiblingDB( "transaction" ).getCollection( "transaction_deposit_information" ).count() ); //Unique Key, Primary Key(PK); // uint
		doc._id$trade_disposal = NumberInt( 1 );

		doc.cd = getCodeByCollection( "transaction", "transaction_deposit_information", { date_create : getArrayDateFromNewDate_forCd(), _id$partner_buyer : transaction_purchase_order_sale_res._id$partner_buyer - 0 } ); //문서번호 ( 외부에서 코드값으로 사용된다. 형식 : GIS YYYYMMDD PARTNER_ID Number); // string
		doc.cd$transaction_entity = g_cd_transaction_entity;
		doc.cd$transaction_purchase_order_sale_res = transaction_purchase_order_sale_res.cd;

		doc.deposit = { // 보증금(계약금등); //object
			_id$currency : NumberInt( 79 )
			, price : 500
		};
		doc.info_bank = { // 결제 계좌 정보로 국가 코드, 은행정보(swift_code), 계좌정보, 소유자정보등을 저장한다.; //object
			cd$country : "US"
			, cd_swift : "BOFAKR2X"
			, num_account : "123-456-789"
			, nm_account_owner : "이소형"
		};
		doc.payment_option = { // 지급 방식; //object;
			payment_schedule : [
				{
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 4 )
						, "d" : NumberInt( 12 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 30 )
				}
				, {
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 4 )
						, "d" : NumberInt( 13 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 30 )
				}
				, {
					date : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 4 )
						, "d" : NumberInt( 14 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, percent : NumberInt( 40 )
				}
			]
		};
		doc.tax_bill = NumberInt( 1 ); // 세금계산서 발급 여부;

	print( "------------------------------ [ E ] create_transaction_deposit_information" );

	insertDoc( "transaction", "transaction_deposit_information", doc );
	updateDoc_transaction_entity_progress( g_cd_transaction_entity, "transaction_deposit_information", doc.cd, "transaction" );

	return doc;
};

//----------------------------------------------------------------------------------------------------;
// DB - INSERT;
//----------------------------------------------------------------------------------------------------;

/**
 * db name과 collection name을 받아 입력받은 정보를 반환
 * @function
 * @oaram {String} targetDBName
 * @oaram {String} targetColName
 * @oaram {Object} d
 */
var insertDoc = function( targetDBName, targetColName, d )
{
	var targetDB = db.getSiblingDB( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	targetCol.save( d );
};

//----------------------------------------------------------------------------------------------------;
// DB - UPDATE;
//----------------------------------------------------------------------------------------------------;

/**
 * transaction_entity Collection의 progress column update
 * @function
 * @param {String} entityCd
 * @param {String} targetColName
 * @param {String} cd
 * @param {String} targetDBName
 */
var updateDoc_transaction_entity_progress = function( entityCd, targetColName, cd, targetDBName )
{
	var o = {};
		//o[ "cd$" + targetColName ] = cd;
		o.no = null;
		o.cd = cd;
		o.col = targetColName;
		o.db = targetDBName;

	var prog = null;

	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" );
		targetCol.find({ cd : entityCd } ).forEach( function( doc ){
			prog = doc.progress;
		});

	if( !prog ) prog = [];
	o.no = NumberInt( prog.length );
	prog.push( o );

	targetCol.update(
		{ cd : entityCd }//search Object;
		, { $set : { progress : prog } }
	);
};

/**
 * transaction_entity Collection의 delivery_information column update
 * @function
 * @param {String} entityCd
 * @param {String} cd
 */
var updateDoc_transaction_entity_delivery_information = function( entityCd, cd )
{
	print( "------------------------------ [ S ] updateDoc_transaction_entity_delivery_information" );

	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" );
		targetCol.update(
			{ cd : entityCd }//search Object;
			, { $set : { cd$transaction_delivery_information : cd } }
		);

	print( "------------------------------ [ E ] updateDoc_transaction_entity_delivery_information" );
};

/**
 * transaction_entity Collection의 category_transaction_result column update
 * @function
 * @param {String} entityCd 거래식별코드
 * @param {String} targetColName
 * @param {String} cd
 * @param {String} targetDBName
 */
var updateDoc_transaction_entity_category_transaction_result = function( entityCd, targetColName, cd, targetDBName )
{
	print( "------------------------------ [ S ] updateDoc_transaction_entity_category_transaction_result" );

	var code = {
		transaction_entity : "CTR003" // 거래생성;
		, transaction_quote_sale_req : "CTR004" // 판매 가견적요청;
		, transaction_quote_purchase_req : "CTR018" // 구매 가견적 요청;
		, transaction_quote_purchase_res : "CTR019" // 구매 가견적 회신;
		, transaction_quote_sale_res : "CTR005" // 판매 가견적 회신;
		, transaction_quotation_sale_req : "CTR006" // 판매 견적 요청;
		, transaction_quotation_purchase_req : "CTR020" // 구매 견적 요청;
		, transaction_quotation_purchase_res : "CTR021" // 구매 견적 회신;
		, transaction_quotation_sale_res : "CTR007" // 판매 견적 회신;
		// 재무승인;
		, transaction_purchase_order_sale_req : "CTR008" // 판매 발주서;
		, transaction_purchase_order_purchase_req : "CTR022" // 구매 발주 요청서;
		, transaction_purchase_order_purchase_res : "CTR023" // 구매 발주 회신서;
		, transaction_stock_wearing_req : "CTR010" // 입고 지시서;
		, transaction_packing_list_wearing : "CTR011" // 입고 패킹리스트;
		, transaction_inspection_report_wearing : "CTR011" // 입고 검수/검품보고서;
		, transaction_inspection_report_check_wearing : "CTR011" // 입고지시확인서;
		, transaction_stock_wearing_res : "CTR010" // 입고증;
		, transaction_purchase_order_sale_res : "CTR009" // 판매 발주 확정;
		, transaction_stock_release_req : "CTR012" // 출고 지시서;
		, transaction_inspection_report_release : "CTR013" // 출고 검수/검품보고서;
		, transaction_packing_list_release : "CTR013" // 출고 패킹리스트;
		, transaction_stock_release_res : "CTR013" // 출고증;
		, transaction_delivery_information : "CTR014" // 배송;
		// "CTR015" // 배송완료;
		, transaction_payment_information : "CTR016" // 정산 - 구매정산;
		, transaction_deposit_information : "CTR016" // 정산 - 판매정산;
		// "CTR017" // 정산완료;
	};
	var resultcode = null;
		resultcode = code[ targetColName ];

	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" );
		targetCol.update(
			{ cd : entityCd }//search Object;
			, { $set : { cd$category_transaction_result : resultcode } }
		);

	print( "------------------------------ [ E ] updateDoc_transaction_entity_category_transaction_result" );
};

/**
 * 재무승인
 * @function
 */
var updateDoc_transaction_entity_fi_approbation = function( entityCd, date_req_obj, date_res_obj )
{
	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" );
		targetCol.update(
			{ cd : entityCd }//search Object;
			, { $set : {
				date_fi_approbation_req : date_req_obj
				, date_fi_approbation_res : date_res_obj
			} }
		);
};

/**
 * 재고 입고이력
 * @function
 */
var updateDoc_stock_quantity_wearing = function( cd$stock_quantity, cd$history_wearing, quantity )
{
	print( "------------------------------ [ S ] updateDoc_stock_quantity_wearing" );
	var o = {
		cd$history_wearing : cd$history_wearing
		, quantity : quantity
	};
	var history_wearing = db.getSiblingDB( "stock" ).getCollection( "stock_quantity" ).findOne({ cd : cd$stock_quantity }).history_wearing;
	history_wearing.push( o );

	var targetCol = db.getSiblingDB( "stock" ).getCollection( "stock_quantity" );
		targetCol.update(
			{ cd : cd$stock_quantity }//search Object;
			, { $set : { history_wearing : history_wearing } }
		);
	print( "------------------------------ [ E ] updateDoc_stock_quantity_wearing" );
};

/**
 * 구매거래진척사항 (입고 발생 시)
 * @function
 * @param {String} entityCd 거래식별코드
 * @param {Document} transaction_purchase_order_purchase_res 구매발주확정서
 * @param {Document} transaction_stock_wearing_res 입고증
 */
var update_transaction_purchase_status_wearing = function( entityCd, transaction_purchase_order_purchase_res, transaction_stock_wearing_res )
{
	print( "------------------------------ [ S ] update_transaction_purchase_status" );

	var transaction_cost_logistics_wearing = create_transaction_cost_logistics_wearing( entityCd, transactionf_purchase_order_purchase_res, transaction_stock_wearing_res );

	var o = {};
		o.cd$category_transaction_result = "CTR011"; // 입고;
		o.cd$transaction_cost_logistics_wearing = transaction_cost_logistics_wearing.cd;

	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_purchase_status" );
		targetCol.update(
			{
				cd$transaction_entity : entityCd
				, cd$transaction_purchase_order_purchase_res : transaction_purchase_order_purchase_res.cd
			}//search Object;
			, { $set : {
				//cd$transaction_stock_wearing_res : transaction_stock_wearing_res.cd
			} }
		);

	print( "------------------------------ [ E ] update_transaction_purchase_status" );
};

/**
 * 구매거래진척사항 (정산 시)
 * @function
 */
var update_transaction_purchase_status_cost = function( entityCd, cd$result )
{
	print( "------------------------------ [ S ] update_transaction_purchase_status_cost" );
	print( "------------------------------ [ E ] update_transaction_purchase_status_cost" );
};

var update_transaction_schedule_wearing = function( entityCd, transaction_purchase_order_purchase_res, transaction_stock_wearing_res )
{
	print( "------------------------------ [ S ] update_transaction_schedule_wearing" );

	var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_schedule_wearing" );
		targetCol.update(
			{
				cd$transaction_entity : entityCd
				, cd$transaction_purchase_order_purchase_res : transaction_purchase_order_purchase_res.cd
			}//search Object;
			, { $set : {
				//cd$transaction_stock_wearing_res : transaction_stock_wearing_res.cd
			} }
		);

	print( "------------------------------ [ E ] update_transaction_schedule_wearing" );

	return doc;
};

//----------------------------------------------------------------------------------------------------;
// GETTER;
//----------------------------------------------------------------------------------------------------;

/**
 * 날짜에 대하여 배열로 반환
 * @function
 * @param {Date} date 배열로 반환할 날짜 ( 없을 경우 현재 날짜 반환 )
 * @return {Array} r
 */
var getArrayDateFromNewDate_forCd = function( date )
{
	var d = null;
	if( date ) d = date;
	else d = new Date();

	var r = [
		d.getFullYear()
		, d.getMonth() + 1
		, d.getDate()
		, d.getHours()
		, d.getMinutes()
		, d.getSeconds()
	];

	d = null;

	return r;
};

/**
 * 날짜에 대하여 배열로 반환
 * @function
 * @param {Date} date 배열로 반환할 날짜 ( 없을 경우 현재 날짜 반환 )
 * @return {Array} r
 */
var getArrayDateFromNewDate = function( date )
{
	var d = null;
	if( date ) d = date;
	else d = new Date();

	var r = [
		NumberInt( d.getFullYear() )
		, NumberInt( d.getMonth() + 1 )
		, NumberInt( d.getDate() )
		, NumberInt( d.getHours() )
		, NumberInt( d.getMinutes() )
		, NumberInt( d.getSeconds() )
	];

	d = null;

	return r;
};

/*
 * 날짜를 Object로 반환
 * @function
 * @param {Number} day minus value
 */
var getObjectDateFromNewDate = function( date )
{
	var d = null;
	if( date ) d = date;
	else d = new Date();

	r = {
		y : NumberInt( d.getFullYear() )
		, m : NumberInt( d.getMonth() + 1 )
		, d : NumberInt( d.getDate() )
		, ho : NumberInt( d.getHours() )
		, mi : NumberInt( d.getMinutes() )
		, se : NumberInt( d.getSeconds() )
	};

	return r;
};

/**
 * Collection에 따른 code 가져오기
 * @function
 */
var getCodeByCollection = function( nm_db, nm_collection, o )
{
	var db0 = db.getSiblingDB( nm_db );
	var get_code = nm_collection + "$" +"get_code(" + JSON.stringify(o) + ")";
	return db0.eval(get_code);
}

/*
 * LeadTime 을 가져온다.
 * @function
 * @param {Object} start 시작 시간
 * @param {Object} end 종료 시간
 * @return {Object} r
 */
var getLeadTime = function ( start , end )
{
	var r = {};
	// Set the unit values in milliseconds.
	var msecPerMinute = 1000 * 60;
	var msecPerHour = msecPerMinute * 60;
	var msecPerDay = msecPerHour * 24;
	var msecPerMonth = msecPerDay * 30;
	var msecPerYear = msecPerYear * 12;


	// Set a date and get the millisecond;
	var date = new Date(start.y, start.m, start.d, start.ho, start.mi, start.se);
	var dateMsec = date.getTime();

	// Set the date to January 1, at midnight, of the specified year.
	date.setYear(end.y);
	date.setMonth(end.m - 1);
	date.setDate(end.d);
	date.setHours(end.ho, end.mi, end.se);
	// Get the difference in milliseconds.
	var interval = dateMsec - date.getTime();

	// Calculate how many days the interval contains. Subtract that
	// many days from the interval to determine the remainder.
	var year = Math.floor(interval / msecPerYear);
	interval = interval - ( year * msecPerYear );

	var month = Math.floor(interval / msecPerMonth);
	interval = interval - ( month * msecPerMonth );

	var days = Math.floor(interval / msecPerDay );
	interval = interval - (days * msecPerDay );

	// Calculate the hours, minutes, and seconds.
	var hours = Math.floor(interval / msecPerHour );
	interval = interval - (hours * msecPerHour );

	var minutes = Math.floor(interval / msecPerMinute );
	interval = interval - (minutes * msecPerMinute );

	var seconds = Math.floor(interval / 1000 );

	// Display the result.
	r.y = NumberInt( year );
	r.m = NumberInt( month );
	r.d = NumberInt( days );
	r.ho = NumberInt( hours );
	r.mi = NumberInt( minutes );
	r.se = NumberInt( seconds );

	return r;
};

/*
 * LeadTime 을 가져온다.
 * @function
 * @param {Array} start 시작 시간
 * @param {Array} end 종료 시간
 * @return {Object} r
 */
var getLeadTimeForArray = function ( start , end )
{
	var r = {};
	// Set the unit values in milliseconds.
	var msecPerMinute = 1000 * 60;
	var msecPerHour = msecPerMinute * 60;
	var msecPerDay = msecPerHour * 24;
	var msecPerMonth = msecPerDay * 30;
	var msecPerYear = msecPerMonth * 12;


	// Set a date and get the millisecond;
	var date = new Date(start[0], start[1], start[2], start[3], start[4], start[5]);
	var dateMsec = date.getTime();

	// Set the date to January 1, at midnight, of the specified year.
	date.setYear(end[0]);
	date.setMonth(end[1] - 1);
	date.setDate(end[2]);
	date.setHours(end[3], end[4], end[5]);
	// Get the difference in milliseconds.
	var interval = dateMsec - date.getTime();

	// Calculate how many days the interval contains. Subtract that
	// many days from the interval to determine the remainder.
	var year = Math.floor(interval / msecPerYear);
	interval = interval - ( year * msecPerYear );

	var month = Math.floor(interval / msecPerMonth);
	interval = interval - ( month * msecPerMonth );

	var days = Math.floor(interval / msecPerDay );
	interval = interval - (days * msecPerDay );

	// Calculate the hours, minutes, and seconds.
	var hours = Math.floor(interval / msecPerHour );
	interval = interval - (hours * msecPerHour );

	var minutes = Math.floor(interval / msecPerMinute );
	interval = interval - (minutes * msecPerMinute );

	var seconds = Math.floor(interval / 1000 );

	// Display the result.
	r.y = year;
	r.m = month;
	r.d = days;
	r.ho = hours;
	r.mi = minutes;
	r.se = seconds;

	return r;
};

/**
 * db name과 collection name을 받아 입력받은 정보를 반환
 * @function
 * @param {String} targetDBName
 * @param {String} targetColName
 * @param {String} value
 * @return {Object}
 */
var getRandomValueFromDoc = function( targetDBName, targetColName, value )
{
	print( "------------------------------ [ S ] getRandomValueFromDoc" );
	var targetDB = db.getSiblingDB( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	var a = [];
	targetCol.find().forEach(function( doc ){
		a.push( doc[ value ] );
	});
	print( "------------------------------ [ E ] getRandomValueFromDoc" );
	return a[ Math.random( 0, a.length - 1 ) ];
};

/**
 * db name과 collection name을 받아 random document 반환
 * @function
 * @param {String} targetDBName
 * @param {String} targetColName
 * @return {Document} doc
 */
var getRandomDocFromCollection = function( targetDBName, targetColName )
{
	print( "------------------------------ [ S ] getRandomDocFromCollection" );

	var targetDB = db.getSiblingDB( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	var n = targetDB.targetCol.count();
	var r = Math.floor(Math.random() * n);
	var doc = targetCol.find({}).limit(1).skip(r);

	print( "------------------------------ [ E ] getRandomDocFromCollection" );
	return doc;
};

/**
 * 배열을 입력받아 배열 중 랜덤 값 반환
 * @function
 * @param {Array} a
 * @return {Object}
 */
var getRandomValueFromArray = function( a )
{
	var r = a[ Math.floor(Math.random() * (( a.length-1 ) - 0 + 1) + 0) ];
	return r;
};

/*
 * properties object 가져오기
 * @function
 * @param {String} collection name
 * @return {Object} properties
 */
var getSchemaCollectionProperties = function( targetDBName, colName )
{
	print( "------------------------------ [ S ] getSchemaCollectionProperties" );
	var o = {};
	var schema_db = db.getSiblingDB( "_schema" );
	schema_db.getCollection( targetDBName ).find().forEach( function( doc )
	{
		if( doc._id == colName ) o = doc.properties;
	});
	print( "------------------------------ [ E ] getSchemaCollectionProperties" );
	return o;
};

var deleteCollection = function()
{
	var seq = [
		// 거래;
		{ num : "0", db : "transaction", col : "transaction_entity" }

		// 판매 가견적 요청;
		, { num : "1-1", db : "transaction_quote_sale", col : "transaction_quote_sale_req" }

		// 구매 가견적 요청;
		, { num : "1-1-1", db : "transaction_quote_purchase", col : "transaction_quote_purchase_req" }
		// 구매 가견적 회신;
		, { num : "1-1-2", db : "transaction_quote_purchase", col : "transaction_quote_purchase_res" }

		// 판매 가견적 회신;
		, { num : "1-2", db : "transaction_quote_sale", col : "transaction_quote_sale_res" }

		// 판매 견적 요청;
		, { num : "2-1", db : "transaction_quotation_sale", col : "transaction_quotation_sale_req" }

		// 구매 견적 요청;
		, { num : "2-1-1", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_req" }
		// 구매 견적 회신;
		, { num : "2-1-2", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_res" }

		// 판매 견적 회신;
		, { num : "2-2", db : "transaction_quotation_sale", col : "transaction_quotation_sale_res" }

		// 재무승인;

		// 판매 발주서;
		, { num : "3-1", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_req" }

		// 구매 발주 요청;
		, { num : "3-1-1", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_req" }
		// 구매 발주 회신;
		, { num : "3-1-2", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_res" }

		// 판매 발주 확정서;
		, { num : "3-2", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_res" }


		// 입고지시서;
		, { num : "4-1", db : "transaction_stock_wearing", col : "transaction_stock_wearing_req" }
		// 패킹리스트;
		, { num : "4-2", db : "transaction_stock_wearing", col : "transaction_packing_list_wearing" }
		// 입고 검수/검품보고서;
		, { num : "4-3", db : "transaction_stock_wearing", col : "transaction_inspection_report_wearing" }
		// 입고지시확인서;
		, { num : "4-4", db : "transaction_stock_wearing", col : "transaction_inspection_report_check_wearing" }
		// 입고증;
		, { num : "4-5", db : "transaction_stock_wearing", col : "transaction_stock_wearing_res" }

		// 재고;
		, { num : "5-1", db : "stock", col : "stock_entity" }
		, { num : "5-2", db : "stock", col : "stock_quantity" }
		, { num : "5-3", db : "stock", col : "history_release" }
		, { num : "5-4", db : "stock", col : "history_wearing" }

		// 출고;
		, { num : "6-1", db : "transaction_stock_release", col : "transaction_stock_release_req" }
		// 출고 검수/검품보고서;
		, { num : "6-2", db : "transaction_stock_release", col : "transaction_inspection_report_release" }
		// 패킹리스트;
		, { num : "6-3", db : "transaction_stock_release", col : "transaction_packing_list_release" }
		// 출고증;
		, { num : "6-4", db : "transaction_stock_release", col : "transaction_stock_release_res" }

		// 배송;
		, { num : "7-1", db : "transaction", col : "transaction_delivery_information" }

		// 정산;
		, { num : "8-1", db : "transaction", col : "transaction_deposit_information" } // 판매정산;
		, { num : "8-2", db : "transaction", col : "transaction_payment_information" } // 구매정산;
		, { num : "8-3", db : "transaction", col : "transaction_profit" } // 거래정산;

		//--------------------------------------------------;
		// 문서 외 collection;
		//--------------------------------------------------;
		, { num : "100-1", db : "transaction", col : "transaction_purchase_status" } // 구매 거래 진척사항;
		, { num : "100-2", db : "transaction", col : "transaction_sale_status" } // 판매 거래 진척사항;
		, { num : "100-3", db : "transaction", col : "transaction_purchase_order_sale_res" }
		, { num : "100-4", db : "transaction", col : "transaction_schedule_release" }
		, { num : "100-5", db : "transaction", col : "transaction_deposit_information" }
		, { num : "100-6", db : "transaction", col : "transaction_cost_logistics_delivery" }
		, { num : "100-7", db : "transaction", col : "transaction_cost_logistics_release" }
		, { num : "100-8", db : "transaction", col : "transaction_cost_logistics_operation" }
		, { num : "100-9", db : "transaction", col : "transaction_schedule_wearing" }
		, { num : "100-10", db : "transaction", col : "transaction_payment_information" }
		, { num : "100-11", db : "transaction", col : "transaction_cost_purchase" }
		, { num : "100-12", db : "transaction", col : "transaction_cost_logistics_wearing" }
	];

	var i=0, iLen=seq.length;
	for( ; i<iLen; ++i )
	{
		var targetDB = db.getSiblingDB( seq[i].db ).getCollection( seq[i].col ).drop();
	}
};

//----------------------------------------------------------------------------------------------------;
// SETTER;
//----------------------------------------------------------------------------------------------------;

/*
 * Object를 입력 받은 document 를 통해 완성한다.. document에 없는 값은 null로 치환한다.
 * @function
 * @param {Object} o 거래식별코드
 * @param {Object} d 판매가견적서 Document
 */
var setObjectFromParameter= function( o, d )
{
	print( "------------------------------ [ S ] setObjectFromParameter" );
	var prop;

	for ( prop in o )
	{
		if ( d.hasOwnProperty( prop ) == true )
		{
			o[prop] = d[prop];
		}
	}
	print( "------------------------------ [ E ] setObjectFromParameter" );
	return o;
};

var insert_value_transaction = {
	date : new Date()
	, _id$partner_buyer : NumberInt( 0 )
	, _id$partner_supplier : NumberInt( 1 )
	, _id$partner_person : NumberInt( 0 )
	, _id$member_public : NumberInt( 0 )
	, _id$trade_terms : NumberInt( 0 )
	, _id$company_info_basic : NumberInt( 0 )
	, _ids$member : {
		manager : NumberInt( 1 )
		, register : NumberInt( 2 )
	}
	, addr_place_of_delivery : {
		cd$country : "KR"
		, cd_postal : "16890"
		, cd$postal : "16890"
		, addr1 : "경기도 용인시 수지구"
		, addr2 : "죽전로"
		, addr3 : "152-0"
	}
	, cd$category_delivery_type : "CDT001"
	, cd$category_purchase_reason : "CPR001"
	, cost_predict_logistics_wearing : {
		"_id$currency" : NumberInt( 79 )
		, "price" : 100
	}
	, cost_predict_logistics_release : {
		"_id$currency" : NumberInt( 79 )
		, "price" : 100
	}
	, payment_information : {
		"_id$trade_disposal" : NumberInt( 0 )
		, "info_bank" : {
			"cd$country" : "KR"
			, "cd_swift" : "CITIKRSXWLS"
			, "num_account" : "123-456-789"
			, "nm_account_owner" : "이소형"
		}
		, "deposit" : {
			"_id$currency" : NumberInt( 79 )
			, "price" : 100
		}
		, "payment_option" : {
			payment_schedule : [
				{
					"date" : {
						"y" : NumberInt( 2017 )
						, "m" : NumberInt( 2 )
						, "d" : NumberInt( 12 )
						, "ho" : NumberInt( 0 )
						, "mi" : NumberInt( 0 )
						, "se" : NumberInt( 0 )
					}
					, "percent" : NumberInt( 100 )
				}
			]
		}
		, "price_total" : {
			"_id$currency" : NumberInt( 79 )
			, "price" : 10000
		}
		, "tax_bill" : NumberInt( 1 )
		, "tax_total" : {
			"_id$currency" : NumberInt( 79 )
			, "price" : 1000
		}
	}
	, items : [
		{
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			, "price_supply_quantity" : {
				"_id$currency" : NumberInt( 79 )
				, "price" : 100
			}
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
		, {
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			, "price_supply_quantity" : {
				"_id$currency" : NumberInt( 79 )
				, "price" : 100
			}
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
		, {
			"_id$brand_basic" : NumberInt( 0 )
			, "_id$product_basic": NumberInt( 0 )
			, "price_supply_quantity" : {
				"_id$currency" : NumberInt( 79 )
				, "price" : 100
			}
			, "quantity" : NumberInt( 100 )
			, "UOM" : { "nm" : "EA", "quantity" : NumberInt( 1 )
			}
		}
	]
	, info_delivery_option : [
		{
		"k" : "희망 사항"
		, "v" : "최대한 빨리"
		}
	]
	, purchase_reason_etc_memo : null
	, cost_predict_logistic_wearing_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, cost_predict_logistic_releasing_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, cost_predict_purchase_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, cost_purchase : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, tax_purchase : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, price_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, tax_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, info_delivery_option__reciever : {
		nm_person : "이소형"
		, phone_cell : "010-1234-5678"
	}
	, stock_wearing_address : {
		cd$country : "KR"
		, cd_postal : "16890"
		, cd$postal : "16890"
		, addr1 : "서울 냠냠구"
		, addr2 : "남부순환로"
		, addr3 : "2222"
	}
	, stock_release_address : {
		cd$country : "KR"
		, cd_postal : "16890"
		, cd$postal : "16890"
		, addr1 : "서울 깍깍구"
		, addr2 : "남부순환로"
		, addr3 : "2222"
	}
	, total_expected_release_quantity : NumberInt( 10 ) //총 출고예정수량; // uint
	, total_actual_wearing_quantity : NumberInt( 9 ) //총 실제 출고된 수량중 검품불합격 상품을 뺀 나머지 수량; // uint
	, total_untrainde_wearing_quantity : NumberInt( 1 ) //총 미입고수량 및 입고불가수량( 총 미입고 수량 + 검품불합격 수량 ); // uint
	, total_cost_inspection_count : { //해당 검수/검품의 비용중 검수비용 총 합계 ( 검품비용 + 검수비용 ); // object
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, total_cost_inspection_quality : { //해당 검수/검품의 비용중 검품비용  총 합계 ( 검품비용 + 검수비용 ); // object
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, total_cost_inspection : { //해당 검수/검품의 비용 총 합계 ( 검품비용 + 검수비용 ); // object
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, cd$category_inspection_type : "CIT002" //출고시 검수 및 검품을 요청하는 카테고리 컬렉션의 ID 값; // string
	, cd$category_inspection_detail_type : "CID001" //출고시 검수 및 검품요청의 세부항목 카테고리 컬렉션의 ID 값 ( 전수/샘플링 ); // string
	, cd$category_release_operation_type : "ROT001" //category_release_operation_type ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_type 컬랙션을 참조; // string
	, cd$category_release_operation_range : "ROR001" //category_release_operation_range ID (FK) - 출고시 작업지시 - 작업 종류 category 의 category_release_operation_range 컬랙션을 참조; // string
	, cd$category_release_operation_packaging_material : "CROPM002"
	, price_supply_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, tax_supply_total : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, stock_wearing_date : ""
	, total_quantity_pallet : NumberInt( 2 )
	, total_quantity_package : NumberInt( 9 )
	, total_quantity_unit : NumberInt( 60 )
	, cost_logistics_stock_wearing : {
		price : 100
		, _id$currency : NumberInt( 79 )
	}
	, cd$warehouse : "WH002"
};
var main = function()
{
	//*/
	main_depth1_1(); // 판매가견적요청서;
	main_depth1_1_1(); // 구매가견적요청서;
	main_depth1_1_2(); // 구매가견적회신서;
	main_depth1_2(); // 판매가견적회신서;
	main_depth2(); // 견적요청서;
	main_depth2_1(); // 구매견적요청서;
	main_depth2_2(); // 구매견적회신서;
	main_depth3(); // 판매견적서;
	main_depth4(); // 재무승인;
	main_depth5(); // 판매발주서;
	main_depth5_1(); // 구매발주서;
	main_depth5_2(); // 구매발주확정서;
	main_depth5_3(); // 판매발주확정서;
	// 정산;
	main_depth6_1(); // 입고지시서;
	main_depth6_2(); // 입고패킹리스트;
	main_depth6_3(); // 입고검수/검품보고서;
	// 입고확인지시서;
	main_depth6_5(); // 입고증;
	main_depth6_6(); // 재고처리;

	main_depth8_1(); // 출고지시서;
	main_depth8_2(); // 출고검수/검품보고서;
	main_depth8_3(); // 출고패킹리스트;
	main_depth8_4(); // 출고증;
	main_depth9_1(); // 배송;
	//main_depth10_1(); // 구매정산;
	//main_depth10_2(); // 판매정산;
	//------------------------------;
	main_exist_SKU_depth1_2(); // 재고가 있는, 판매가견적회신서;
	main_exist_SKU_depth2(); // 재고가 있는, 견적요청서;
	main_exist_SKU_depth3(); // 재고가 있는, 판매견적서;
	main_exist_SKU_depth4(); // 재고가 있는, 재무승인;
	main_exist_SKU_depth5(); // 재고가 있는, 발주서;
	main_exist_SKU_depth6(); // 재고가 있는, 판매발주확정서;
	main_exist_SKU_depth7_1(); // 재고가 있는, 출고지시서;
	main_exist_SKU_depth7_2(); // 재고가 있는, 출고검수/검품보고서;
	main_exist_SKU_depth7_3(); // 재고가 있는, 출고패킹리스트;
	main_exist_SKU_depth7_4(); // 재고가 있는, 출고증;
	/*/
	main_depth9_1();
	//*/
	//------------------------------;
};
//----------------------------------------------------------------------------------------------------;
// COMNMON;
//----------------------------------------------------------------------------------------------------;
/**
 * 판매가견적요청서
 * @function
 */
var main_depth1_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quote_sale_req", doc_transaction_quote_sale_req.cd, "transaction_quote_sale" );
};
//----------------------------------------------------------------------------------------------------;
// NOT EXIST SKU;
//----------------------------------------------------------------------------------------------------;
/**
 * 구매가견적요청서
 * @function
 */
var main_depth1_1_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quote_purchase_req", doc_transaction_quote_purchase_req.cd, "transaction_quote_purchase" );
};
/**
 * 구매가견적회신서
 * @function
 */
var main_depth1_1_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quote_purchase_res", doc_transaction_quote_purchase_res.cd, "transaction_quote_purchase" );
};
/**
 * 판매가견적회신서
 * @function
 */
var main_depth1_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quote_sale_res", doc_transaction_quote_sale_res.cd, "transaction_quote_sale" );
};
/**
 * 견적요청서
 * @function
 */
var main_depth2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2-1.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_req", doc_transaction_quotation_sale_req.cd, "transaction_quotation_sale" );
};
/**
 * 구매견적요청서
 * @function
 */
var main_depth2_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_purchase_req", doc_transaction_quotation_purchase_req.cd, "transaction_quotation_purchase" );
};
/**
 * 구매견적회신서
 * @function
 */
var main_depth2_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_purchase_res", doc_transaction_quotation_purchase_res.cd, "transaction_quotation_purchase" );
};
/**
 * 판매견적서
 * @function
 */
var main_depth3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_res", doc_transaction_quotation_sale_res.cd, "transaction_quotation_sale" );
};
/**
 * 재무승인
 * @function
 */
var main_depth4 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_res", doc_transaction_quotation_sale_res.cd, "transaction_quotation_sale" );
};
/**
 * 발주서
 * @function
 */
var main_depth5 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_sale_req", doc_transaction_purchase_order_sale_req.cd, "transaction_purchase_order_sale" );
};
/**
 * 구매발주서
 * @function
 */
var main_depth5_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_req", doc_transaction_purchase_order_purchase_req.cd, "transaction_purchase_order_purchase" );
};
/**
 * 구매발주확정서
 * @function
 */
var main_depth5_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );
};

/**
 * 판매발주확정서
 * @function
 */
var main_depth5_3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_sale_res", doc_transaction_purchase_order_sale_res.cd, "transaction_purchase_order_sale" );
};

/**
 * 입고지시서
 * @function
 */
var main_depth6_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_wearing_req", doc_transaction_stock_wearing_req.cd, "transaction_stock_wearing" );
};

/**
 * 입고패킹리스트
 * @function
 */
var main_depth6_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_packing_list_wearing", doc_transaction_packing_list_wearing.cd, "transaction_stock_wearing" );
};

/**
 * 입고 검수/검품보고서
 * @function
 */
var main_depth6_3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_inspection_report_wearing", doc_transaction_inspection_report_wearing.cd, "transaction_stock_wearing" );
};

/**
 * 입고증
 * @function
 */
var main_depth6_5 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_wearing_res", doc_transaction_stock_wearing_res.cd, "transaction_stock_wearing" );
};

/**
 * 재고처리
 * @function
 */
var main_depth6_6 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_wearing_res", doc_transaction_stock_wearing_res.cd, "transaction_stock_wearing" );
};

/**
 * 출고지시서
 * @function
 */
var main_depth8_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_release_req", doc_transaction_stock_release_req.cd, "transaction_stock_release" );
};

/**
 * 출고검수/검품보고서
 * @function
 */
var main_depth8_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_inspection_report_release", doc_transaction_inspection_report_release.cd, "transaction_stock_release" );
};

/**
 * 출고패킹리스트
 * @function
 */
var main_depth8_3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	// 8-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_packing_list_release", doc_transaction_packing_list_release.cd, "transaction_stock_release" );
};

/**
 * 출고증
 * @function
 */
var main_depth8_4 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	// 8-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	// 8-4. 출고증 --------------------------------------------------;
	var doc_transaction_stock_release_res = create_transaction_stock_release_res(
		doc_transaction_entity.cd
		, doc_transaction_packing_list_release
		, doc_transaction_purchase_order_sale_res
		, doc_transaction_inspection_report_release
		, insert_value_transaction
	);

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_release_res", doc_transaction_stock_release_res.cd, "transaction_stock_release" );
};

/**
 * 배송
 * @function
 */
var main_depth9_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	// 8-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	// 8-4. 출고증 --------------------------------------------------;
	var doc_transaction_stock_release_res = create_transaction_stock_release_res(
		doc_transaction_entity.cd
		, doc_transaction_packing_list_release
		, doc_transaction_purchase_order_sale_res
		, doc_transaction_inspection_report_release
		, insert_value_transaction
	);

	// 9-1. 배송 --------------------------------------------------;
	var doc_transaction_delivery_information = create_transaction_delivery_information( doc_transaction_entity.cd, doc_transaction_stock_release_res );
	// 배송정보 update;
	updateDoc_transaction_entity_delivery_information( doc_transaction_entity.cd, doc_transaction_delivery_information.cd );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_delivery_information", doc_transaction_delivery_information.cd, "transaction" );
};

/**
 * 구매정산
 * @function
 */
var main_depth10_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	// 8-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	// 8-4. 출고증 --------------------------------------------------;
	var doc_transaction_stock_release_res = create_transaction_stock_release_res(
		doc_transaction_entity.cd
		, doc_transaction_packing_list_release
		, doc_transaction_purchase_order_sale_res
		, doc_transaction_inspection_report_release
		, insert_value_transaction
	);

	// 9-1. 배송 --------------------------------------------------;
	var doc_transaction_delivery_information = create_transaction_delivery_information( doc_transaction_entity.cd, doc_transaction_stock_release_res );
	// 배송정보 update;
	updateDoc_transaction_entity_delivery_information( doc_transaction_entity.cd, doc_transaction_delivery_information.cd );

	// 10-1. 구매정산 --------------------------------------------------;
	var doc_transaction_payment_information = create_transaction_payment_information( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res );

	// result update;
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_payment_information", doc_transaction_payment_information.cd, "transaction" );
};

/**
 * 판매정산
 * @function
 */
var main_depth10_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );
	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );

	// 1-1-1. 구매가견적요청서 --------------------------------------------------;
	var doc_transaction_quote_purchase_req = create_transaction_quote_purchase_req( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 1-1-2. 구매가견적회신서 --------------------------------------------------;
	var doc_transaction_quote_purchase_res = create_transaction_quote_purchase_res( doc_transaction_entity.cd, doc_transaction_quote_purchase_req, insert_value_transaction );

	// 1-2. 판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	// 2. 견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	// 2-1. 구매견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_req = create_transaction_quotation_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 2-2. 구매견적회신서 --------------------------------------------------;
	var doc_transaction_quotation_purchase_res = create_transaction_quotation_purchase_res( doc_transaction_entity.cd, doc_transaction_quotation_purchase_req, insert_value_transaction );

	// 3. 판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	// 4. 재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	// 5. 발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	// 5-1. 구매발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_req = create_transaction_purchase_order_purchase_req( doc_transaction_entity.cd, doc_transaction_quotation_purchase_res, insert_value_transaction );

	// 5-2. 구매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_purchase_res = create_transaction_purchase_order_purchase_res( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_req, insert_value_transaction );

	// 5-3. 구매거래상태 --------------------------------------------------;
	//var doc_transaction_purchase_status = create_transaction_purchase_status( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );
	//updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_purchase_res", doc_transaction_purchase_order_purchase_res.cd, "transaction_purchase_order_purchase" );

	// 5-4. 판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );

	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);

	// 6-1. 입고지시서;
	var doc_transaction_stock_wearing_req = create_transaction_stock_wearing_req( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, insert_value_transaction );

	// 6-2. 입고패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_wearing = create_transaction_packing_list_wearing( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-3. 입고 검수/검품보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_wearing = create_transaction_inspection_report_wearing( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res, doc_transaction_stock_wearing_req, insert_value_transaction );

	// 6-4. 입고처리지시서 --------------------------------------------------;
	// 6-5. 입고증 --------------------------------------------------;
	var doc_transaction_stock_wearing_res = create_transaction_stock_wearing_res( doc_transaction_entity.cd, doc_transaction_stock_wearing_req, doc_transaction_packing_list_wearing, doc_transaction_inspection_report_wearing, insert_value_transaction );

	// 6-6. 재고처리 --------------------------------------------------;
	create_stock_entities( doc_transaction_entity.cd, doc_transaction_stock_wearing_res, insert_value_transaction );

	// 8-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	// 8-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	// 8-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	// 8-4. 출고증 --------------------------------------------------;
	var doc_transaction_stock_release_res = create_transaction_stock_release_res(
		doc_transaction_entity.cd
		, doc_transaction_packing_list_release
		, doc_transaction_purchase_order_sale_res
		, doc_transaction_inspection_report_release
		, insert_value_transaction
	);

	// 9-1. 배송 --------------------------------------------------;
	var doc_transaction_delivery_information = create_transaction_delivery_information( doc_transaction_entity.cd, doc_transaction_stock_release_res );
	// 배송정보 update;
	updateDoc_transaction_entity_delivery_information( doc_transaction_entity.cd, doc_transaction_delivery_information.cd );

	// 10-1. 구매정산 --------------------------------------------------;
	var doc_transaction_payment_information = create_transaction_payment_information( doc_transaction_entity.cd, doc_transaction_purchase_order_purchase_res );

	// 10-2. 판매정산 --------------------------------------------------;
	var doc_transaction_deposit_information = create_transaction_deposit_information( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res );

	// result update;
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_payment_information", doc_transaction_payment_information.cd, "transaction" );
};

//----------------------------------------------------------------------------------------------------;
// EXIST SKU;
//----------------------------------------------------------------------------------------------------;
/**
 * 판매가견적회신서
 * @function
 */
var main_exist_SKU_depth1_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quote_sale_res", doc_transaction_quote_sale_res.cd, "transaction_quote_sale" );
};
/**
 * 견적요청서
 * @function
 */
var main_exist_SKU_depth2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_req", doc_transaction_quotation_sale_req.cd, "transaction_quotation_sale" );
};
/**
 * 판매견적서
 * @function
 */
var main_exist_SKU_depth3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_res", doc_transaction_quotation_sale_res.cd, "transaction_quotation_sale" );
};
/**
 * 재무승인
 * @function
 */
var main_exist_SKU_depth4 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	updateDoc_transaction_entity_fi_approbation( doc_transaction_entity.cd, getObjectDateFromNewDate(), getObjectDateFromNewDate() );
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_quotation_sale_res", doc_transaction_quotation_sale_res.cd, "transaction_quotation_sale" );
};
/**
 * 발주서
 * @function
 */
var main_exist_SKU_depth5 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_sale_req", doc_transaction_purchase_order_sale_req.cd, "transaction_purchase_order_sale" );
};
/**
 * 판매발주확정서
 * @function
 */
var main_exist_SKU_depth6 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );


	// 6.판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );


	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);
	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_purchase_order_sale_res", doc_transaction_purchase_order_sale_res.cd, "transaction_purchase_order_sale" );
};
/**
 * 출고지시서
 * @function
 */
var main_exist_SKU_depth7_1 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );


	// 6.판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );


	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);
	// 7-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_release_req", doc_transaction_stock_release_req.cd, "transaction_stock_release" );
};
/**
 * 출고 검수/검품보고서
 * @function
 */
var main_exist_SKU_depth7_2 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );


	// 6.판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );


	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);
	// 7-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );


	// 7-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_inspection_report_release", doc_transaction_inspection_report_release.cd, "transaction_stock_release" );
};
/**
 * 출고패킹리스트
 * @function
 */
var main_exist_SKU_depth7_3 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;
	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );


	// 6.판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );


	// transaction_sale_status;
	//var doc_create_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);
	// 7-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );


	// 7-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );


	// 7-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_packing_list_release", doc_transaction_packing_list_release.cd, "transaction_stock_release" );
};
/**
 * 재고가 있는, 출고완료된 거래;
 * @function
 */
var main_exist_SKU_depth7_4 = function()
{
	// 0.거래 생성 --------------------------------------------------;
	var doc_transaction_entity = create_transaction_entity( insert_value_transaction );

	// 1-1. 판매 가견적 요청서 --------------------------------------------------;
	var doc_transaction_quote_sale_req = create_transaction_quote_sale_req( doc_transaction_entity.cd, doc_transaction_entity, insert_value_transaction );


	// 1-2.판매 가견적 회신서 --------------------------------------------------;
	var doc_transaction_quote_sale_res = create_transaction_quote_sale_res( doc_transaction_entity.cd, doc_transaction_quote_sale_req, insert_value_transaction );


	// 2.견적요청서 --------------------------------------------------;
	var doc_transaction_quotation_sale_req = create_transaction_quotation_sale_req( doc_transaction_entity.cd, doc_transaction_quote_sale_res, insert_value_transaction );


	// 3.판매견적서 --------------------------------------------------;
	var doc_transaction_quotation_sale_res = create_transaction_quotation_sale_res( doc_transaction_entity.cd, doc_transaction_quotation_sale_req, insert_value_transaction );


	// 4.재무승인 --------------------------------------------------;

	// 5.발주서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_req = create_transaction_purchase_order_sale_req( doc_transaction_entity.cd, doc_transaction_quotation_sale_res, insert_value_transaction );


	// 6.판매발주확정서 --------------------------------------------------;
	var doc_transaction_purchase_order_sale_res = create_transaction_purchase_order_sale_res( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_req, insert_value_transaction );


	// sale_status update;
	//var doc_transaction_sale_status = create_transaction_sale_status( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction);
	// 7-1.출고지시서 --------------------------------------------------;
	var doc_transaction_stock_release_req = create_transaction_stock_release_req( doc_transaction_entity.cd, doc_transaction_purchase_order_sale_res, insert_value_transaction );


	// 7-2.출고 검수/검품 보고서 --------------------------------------------------;
	var doc_transaction_inspection_report_release = create_transaction_inspection_report_release( doc_transaction_entity.cd, doc_transaction_stock_release_req, insert_value_transaction );


	// 7-3.출고 패킹리스트 --------------------------------------------------;
	var doc_transaction_packing_list_release = create_transaction_packing_list_release( doc_transaction_entity.cd, doc_transaction_inspection_report_release, insert_value_transaction );


	// 7-4. 출고증 --------------------------------------------------;
	var doc_transaction_stock_release_res = create_transaction_stock_release_res(
		doc_transaction_entity.cd
		, doc_transaction_packing_list_release
		, doc_transaction_purchase_order_sale_res
		, doc_transaction_inspection_report_release
		, insert_value_transaction
	);

	updateDoc_transaction_entity_category_transaction_result( doc_transaction_entity.cd, "transaction_stock_release_res", doc_transaction_stock_release_res.cd, "transaction_stock_release" );
};

deleteCollection();
main(); // 거래 리스트 추가;
var a = [
	{
		"cd": "CTR001",
		"nm": "거래완료",
		"nm_cn": "Complete",
		"nm_kr": "거래완료",
		"nm_us": "Complete",
		"description": "거래가 정상적으로 완료됨",
		"description_cn": "Complete",
		"description_kr": "거래가 정상적으로 완료됨",
		"description_us": "Complete",
		"_d": 1
	}, {
		"cd": "CTR002",
		"nm": "거래취소",
		"nm_cn": "",
		"nm_kr": "거래취소",
		"nm_us": "",
		"description": "거래취소",
		"description_cn": "",
		"description_kr": "거래취소",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR003",
		"nm": "거래생성",
		"nm_cn": "",
		"nm_kr": "거래생성",
		"nm_us": "",
		"description": "거래생성",
		"description_cn": "",
		"description_kr": "거래생성",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR004",
		"nm": "판매 가견적요청",
		"nm_cn": "",
		"nm_kr": "판매 가견적요청",
		"nm_us": "",
		"description": "판매 가견적요청",
		"description_cn": "",
		"description_kr": "판매 가견적요청",
		"description_us": "",
		"_d": 1
	}, {
		"_id": 4,
		"cd": "CTR005",
		"nm": "판매 가견적",
		"nm_cn": "",
		"nm_kr": "판매 가견적",
		"nm_us": "",
		"description": "판매 가견적",
		"description_cn": "",
		"description_kr": "판매 가견적",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR006",
		"nm": "판매 견적요청",
		"nm_cn": "",
		"nm_kr": "판매 견적요청",
		"nm_us": "",
		"description": "판매 견적요청",
		"description_cn": "",
		"description_kr": "판매 견적요청",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR007",
		"nm": "판매 견적",
		"nm_cn": "",
		"nm_kr": "판매 견적",
		"nm_us": "",
		"description": "판매 견적",
		"description_cn": "",
		"description_kr": "판매 견적",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR008",
		"nm": "판매 발주",
		"nm_cn": "",
		"nm_kr": "판매 발주",
		"nm_us": "",
		"description": "판매 발주",
		"description_cn": "",
		"description_kr": "판매 발주",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR018",
		"nm": "배송",
		"nm_cn": "",
		"nm_kr": "배송",
		"nm_us": "",
		"description": "배송",
		"description_cn": "",
		"description_kr": "배송",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR019",
		"nm": "배송완료",
		"nm_cn": "",
		"nm_kr": "배송완료",
		"nm_us": "",
		"description": "배송완료",
		"description_cn": "",
		"description_kr": "배송완료",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR020",
		"nm": "구매 가견적요청",
		"nm_cn": "",
		"nm_kr": "구매 가견적요청",
		"nm_us": "",
		"description": "구매 가견적요청",
		"description_cn": "",
		"description_kr": "구매 가견적요청",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR021",
		"nm": "구매 가견적",
		"nm_cn": "",
		"nm_kr": "구매 가견적",
		"nm_us": "",
		"description": "구매 가견적",
		"description_cn": "",
		"description_kr": "구매 가견적",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR022",
		"nm": "구매 견적요청",
		"nm_cn": "",
		"nm_kr": "구매 견적요청",
		"nm_us": "",
		"description": "구매 견적요청",
		"description_cn": "",
		"description_kr": "구매 견적요청",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR023",
		"nm": "구매 견적",
		"nm_cn": "",
		"nm_kr": "구매 견적",
		"nm_us": "",
		"description": "구매 견적",
		"description_cn": "",
		"description_kr": "구매 견적",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR024",
		"nm": "구매 발주",
		"nm_cn": "",
		"nm_kr": "구매 발주",
		"nm_us": "",
		"description": "구매 발주",
		"description_cn": "",
		"description_kr": "구매 발주",
		"description_us": "",
		"_d": 1
	}, {
		"cd": "CTR027",
		"nm": "재무 승인 완료",
		"nm_cn": "",
		"nm_kr": "재무 승인 완료",
		"nm_us": "",
		"description": "재무 승인 완료",
		"description_cn": "",
		"description_kr": "재무 승인 완료",
		"description_us": "",
		"_d": 1
	}

]
//-------------------------------------------------------------------------------------

var db0 = db.getSiblingDB('_schema');
var db1 = db.getSiblingDB('category');
var cols = db0.getCollectionNames();
var col0 = db1.getCollection('category_transaction_result');

cols.forEach(function(d){
	var nm_db = d;
	db0.getCollection(d).find({}).forEach(function(d){
		if (d.hasOwnProperty('category_transaction_result')){
			var o = d.category_transaction_result;
				o._d = 1;
				o.nm_db = nm_db;
				o.nm_col = d._id;
			a.push( o );
		}
	});
});

a.sort(function(a, b) { // 오름차순
	return a.cd < b.cd ? -1 : a.cd > b.cd ? 1 : 0;
});

col0.remove({});

var i = 0,
	iLen = a.length;
for (; i < iLen; i++) {

	var io = a[i];
	io._id = NumberInt(i);
	io._d = NumberInt(1);

	col0.insert(io);
}
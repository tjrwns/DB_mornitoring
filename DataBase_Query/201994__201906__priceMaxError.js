var _rootPath = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/DataBase_Query/";
var a = SUtilFsReadStream.getFile( _rootPath + "201994__201906__priceMaxError.json" )
var o = JSON.parse( a );

var i = 0,iLen = o.length,io;
var _tmp = ""
for(;i<iLen;++i){
	io = o[ i ];
	_tmp +=  '"' + io.date + '","'
		+ io.goods_id + '","'
		+ io.month_sold_quantity + '","'
		+ io.price_max + '","'
		+ io.seller_id + '","'
		+ io.shop_id + '","'
		+ io.shop_name + '","'
		+ io.shop_type + '","'
		+ "https://item.taobao.com/item.htm?id=" + io.goods_id + '"\n';
}
/*
		"date" : "2019-4-1",
		"goods_id" : "524181383596",
		"month_sold_quantity" : 38,
		"price_max" : 999,
		"seller_id" : 2601878065,
		"shop_id" : "127808127",
		"shop_name" : "爱睡觉的小佛爷",
		"shop_type" : "淘宝"
*/
SUtilFsWriteStream.writeFile( _rootPath + "201994__201906__priceMaxError.csv", _tmp )
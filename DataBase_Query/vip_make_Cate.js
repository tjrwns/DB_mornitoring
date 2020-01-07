var _rootPath = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/DataBase_Query/";

var a = [
	26594
	, 26595
	, 26596
	, 83774
	, 31333
	, 27916
	, 288532
	, 288533
	, 26598
	, 26602
	, 96552
	, 26600
	, 26599
	, 105274
	, 26601
	, 31553
	, 73140
	, 269646
]


var r = {}
var i = 0,iLen = a.length,io;
for(;i<iLen;++i){
	io = a[ i ];
	var o = JSON.parse( SUtilFsReadStream.getFile( _rootPath + io + ".json" ) )
	var s,so
	for( s in o.data ){
		so = o.data[ s ][ 0 ]
		r[ s ] = {
			"cate_id" : so.cate_id.toString()
			, "cate_name" : so.cate_name
			, depth : 1
		};
		if( !so.children ) continue;
		if( so.children.length == 0 ) continue;
		var z = 0,zLen = so.children.length,zo;
		for(;z < zLen;++z){

			zo = so.children[ z ]
			r[ zo.cate_id ] = {}
			r[ zo.cate_id ] = {
				"cate_id" : zo.cate_id.toString()
				, "cate_name" : zo.cate_name
				, depth : 2
			}
			if( !zo.children ) continue;
			if( zo.children.length == 0 ) continue;
			var k = 0,kLen = zo.children.length,ko;
			for(;k < kLen;++k){

				ko = zo.children[ k ]
				r[ ko.cate_id ] = {}
				r[ ko.cate_id ] = {
					"cate_id" : ko.cate_id.toString()
					, "cate_name" : ko.cate_name
					, depth : 3
				}

			}

		}

	}
}

global.test = r
console.log( global.test )


//SUtilFsWriteStream.writeFile( _rootPath + "cate.json", JSON.stringify( r ) )
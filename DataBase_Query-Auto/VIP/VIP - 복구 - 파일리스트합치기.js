var path = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/DataBase_Query-Auto/VIP/28개 복구 필요 목록 - 일자 삽입 - 23개 - 복구 해야하는 일자만 남김/";
var a_fileList = SUtilFsReadStream.getList_FileNm( path )

var r = {}
var i = 0,iLen = a_fileList.length,io;
for(;i<iLen;++i){

	io = a_fileList[ i ]
	var data = JSON.parse( SUtilFsReadStream.getFile( path + io ).toString() );
	var nm_file = io.split(".")[ 0 ];
	r[ nm_file ] = data;
}

SUtilFsWriteStream.writeFile( path + "all.json", JSON.stringify( r, null, 4 ) )

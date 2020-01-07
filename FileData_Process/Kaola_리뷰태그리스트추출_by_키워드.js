//----------------------------------------------------------------------------------------------------;

//	DEFINE;

//----------------------------------------------------------------------------------------------------;

var _DIR_PATH_ = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/FileData_Process/__Temp/Kaola/PRODUCT_DETAIL_COMMENT_INFO/";
var dirList = SUtilFsReadStream.getList_Directory( _DIR_PATH_ );
var outFileNm = SUtilDate.getDate__Seconds_Array().join("");

//----------------------------------------------------------------------------------------------------;

//	VARIABLE;

//----------------------------------------------------------------------------------------------------;

var dirList = SUtilFsReadStream.getList_Directory( _DIR_PATH_ )
var r = {};
var fileList = {};
var txt = "";

//----------------------------------------------------------------------------------------------------;

//	FUNCTION;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var i = 0, iLen = dirList.length, io;
for(;i<iLen;++i){
	io = dirList[ i ];
	var key = io.split("-")[0]
	if( !r[ key ] ) r[ key ] = [];
	if( !fileList[ io ] ) fileList[ io ] = []

	var _DIR_PATH1_ = _DIR_PATH_  + io + "/"
	var a = SUtilFsReadStream.getList_File( _DIR_PATH1_, ".json")
	fileList[ io ] = fileList[ io ].concat( a );
}

//--------------------------------------------------;

var s,so;
for( s in fileList ){

	var _DIR_PATH1_ = _DIR_PATH_  + s + "/";
	var key =  s.split("-")[0];

	var i = 0, iLen = fileList[ s ].length, filePath;
	for(;i<iLen;++i){

		filePath = _DIR_PATH1_ + fileList[ s ][ i ];
		var _to = JSON.parse( SUtilFsReadStream.getFile( filePath ) );

		var j = 0,jLen = _to.body.cmtTagList.length,jo;
		for(;j<jLen;++j){
			jo = _to.body.cmtTagList[ j ];
			if( r[ key ].indexOf( jo.name ) == -1 ) r[ key ].push( jo.name );
		}
	}
}

//--------------------------------------------------;

var s,so;
for( s in r ){ txt += s + "," + r[ s ].sort().join(",")+"\n" }

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

SUtilFsWriteStream.writeFile( _DIR_PATH_ + outFileNm + ".csv", txt );
SUtilFsWriteStream.writeFile( _DIR_PATH_ + outFileNm + ".json", JSON.stringify( r ) );
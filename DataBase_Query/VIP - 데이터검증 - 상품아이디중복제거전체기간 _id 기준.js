var dir00 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/DataBase_Query/";
var dir01 = "D:/GitHub_B2LiNK/B2LiNK-OnSight-DB-Processing/HTTPServer_MongoDB/APIServer/temp/";
var dir02 = "E:/";

var a = SUtilFsReadStream.getFile( dir00 + "VIP - 데이터검증 - 상품아이디중복제거전체기간 _id 기준 - 템플릿.json" ).toString()
console.log( a )

var b = SUtilFsReadStream.getList_File_Extension( dir01, ".json" );
console.log(b)
b.forEach(function(file){
	console.log(file)
	var _a = a;

	var c = SUtilFsReadStream.getFile( dir01 + file ).toString();
	var cArray = JSON.parse( c );
	var r = _a.replace( "<!=productsLength=!>", cArray.length ).replace( "<!=products=!>", c );
	STtwUtilFsWriteStream.writeFile( dir02 + file, r );
	STtwUtilFsWriteStream.writeFile( dir02 + file.split( " - " )[0] + ".json", r );

})
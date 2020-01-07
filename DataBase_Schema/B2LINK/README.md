**DataBase_Schema/B2LINK**
===================

* B2LINK Service를 위한 MongoDB Schema, Procesure, 기초 데이터 insert(js) 소스가 존재한다.

* 개발 환경
	* MongoDB

-------------
파일 설명
-------------

#### :file_folder: node_modules.zip
 * 압축을 해제.
 * Custom Node Binary
	* node_modules/exes/exes100.exe, node_modules/exes/exes100을 node.exe 대신 사용한다.

-------------
폴더 설명
-------------

#### :open_file_folder: _description
 * Project 폴더별 설명 파일


#### :open_file_folder: bin_mac
 * Mac용 Build Script가 존재한다.


#### :open_file_folder: bin_win
 * Windows용 Build Script가 존재한다.


#### :open_file_folder: database

 * Schema(*.json) 파일이 존재한다.
	* database/_schema : 최종 Schema JSON 파일
		* 아무런 파일이 존재하지 않는다.
		* batch 파일을 통해 _schema_template의 *.tjson을 참조하여 *.json이 생성된다.

	* database/_schema_include
		*.txt, *.tjson 파일이 존재한다.

	* database/_schema_template
		*.tjson 파일이 존재한다.

 * Procedure(*.js)
	* DatabaseName/CollectionName/procedure.js 형태로 구성된다.
	* MongoDB의 Database 별로 Procedure가 저장된다.

> **Note:**
> - CollectionName$ProcedureName 형태로 저장된다. ex) member_basic%getAllList
> - db.exec( "member_basic%getAllList()" ); 형태로 사용한다.


#### :open_file_folder: database-insert


#### :open_file_folder: node_modules
 * node_modules/exes/exes100 : NodeJS Binary
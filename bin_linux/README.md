**bin_mac**
===================

* Mac에서 필요한 Build Script

-------------
파일 설명
-------------


#### :page_facing_up: _파일 권한 주기.description
 - 아래 chmod.sh.command에 권한 주는 방법


#### :page_facing_up: chmod.sh.command
 * 아래 파일들에게 권한을 부여한다.
  * Database_Schema/\*\*\/\*\*\/bin_mac/\*.sh.command
  * HTTPServer_MongoDB/\*\*\/\*\*\/bin_mac/\*.sh.command
  * HTTPServer_WebPage/\*.sh.command
  * MongoDB/\*\*\/\*\*\/\*.sh.command
  * WebPage/\*\*\/\*\*\/bin_mac/\*.sh.command





#### :page_facing_up: __Build_All.***
 * 전체 프로젝트 빌드
 	* DB Build (Procedure, DataInsert)
 	* HTTPServer_MongoDB Build (Create JSON)
 	* WebPage Build (Create CSS, Create HTML, Create JSON)

#### :page_facing_up: __Build_All-exceptLESS.***
 * 전체 프로젝트 빌드 - LESS 변환 제외
	* DB Build (Procedure, DataInsert)
 	* HTTPServer_MongoDB Build (Create JSON)
 	* WebPage Build (Create HTML, Create JSON)


#### :page_facing_up: __Build_APIServer.***
 * ./HTTPServer_MongoDB/Projects/ 빌드


#### :page_facing_up: __Build_MongoDB.***
 * ./DataBase_Schema/ 빌드
	* /DataBase_Schema/B2LINK/database/ 의 Procedure를 구동된 MongoDB에 갱신한다.
	* /DataBase_Schema/B2LINK/database-insert/ 의 기본 데이터를 구동된 MongoDB에 갱신한다.
	* ./MongoDB/3.\*.\*/의 DB를 구동 시켜 놓아야한다.


#### :page_facing_up: __Build_WebPage.***
 * ./WebPage/root/ 빌드
	* ./less/\*.less -> ./css/\*.css로 변환
	* ./less_ui/\*.less -> ./css_ui/\*.css로 변환


#### :page_facing_up: __Build_WebPage-exceptLESS.***
 * ./WebPage/root/ 빌드
 * LESS를 CSS로 변환하는 건 제외


#### :page_facing_up: __Execute_Before_Commit.***, __Commit-하기-전-실행.***
 * GitHub에 Commit 하기전에 실행
 * 빌드로 생성된 없어져도 무방한 파일들을 제거한다.
 * Commit 하지 않아야 할 파일들을 정리해준다.
	* ./DataBase_Schema/\*\*\*/database/_schema\*\*\*
		* *.json 제거
	* ./DataBase_Schema/\*\*\*/database/
		* *.dbs, *.dbjs, *.result, *.resultError
	* ./DataBase_Schema/\*\*\*/database-insert/_schema\*\*\*
		* *.js, *.json 제거
	* ./DataBase_Schema/\*\*\*/database-insert/
		* *.dbs, *.dbjs, *.result, *.resultError

	* ./HTTPServer/
		* __list.json, __listDir.json, __listPackage.json 제거

	* ./WebPage/
		* __list.json, __listDir.json, __listPackage.json 제거
		* ./ui/ 폴더 전체 제거
		* tmp_\*\*\*_\*\*\*.less 제거


#### :page_facing_up: __Server_Start.***
 * ./MongoDB/3.\*.\*/ 의 MongoDB 구동
 * ./HTTPServer_MongoDB/\*\*\*/ 서버 구동
 * ./HTTPServer_WebPage/ 서버 구동


#### :page_facing_up: __UnZIP__node_modules.***
 * ./DataBase_Schema/\*\*\*/node_modules_\*\*\*.zip 압축 해제 후 node_mobules_\*\*\*_시간.zip 파일로 백업
 * ./HTTPServer_MongoDB/\*\*\*/node_modules_\*\*\*.zip 압축 해제 후 node_mobules_\*\*\*_시간.zip 파일로 백업
 * ./HTTPServer_WebPage/node_modules_\*\*\*.zip 압축 해제 후 node_mobules_\*\*\*_시간.zip 파일로 백업
 * ./WebPage/\*\*\*/node_modules_\*\*\*.zip 압축 해제 후 node_mobules_\*\*\*_시간.zip 파일로 백업


#### :page_facing_up: deleteZIP__node_modules__date.***
 * UnZIP__node_modules 후 생성된 node_mobules_\*\*\*_시간.zip 파일 삭제


-------------
폴더 설명
-------------

* 파일 없음
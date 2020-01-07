**HTTPServer_MongoDB**
===================

* B2LINK Service를 위한 Server Application
	* MongoDB와 연동하여 Service를 처리한다.
	* Client의 Request를 기반으로 MongoDB에 데이터를 요청하고 가공 및 정제하여 Response한다.

> **Note:**
> - View 소스는 존재하지 않는다.
> - API Service 전용 서버

* 개발 환경
	* MongoDB
	* NodeJS
		* npm install mongodb
		* HTTPServer_MongoDB_API - not express

-------------
파일 설명
-------------

#### :file_folder: node_modules.zip
 * 압축을 해제.
 * Custom Node Binary
	* node_modules/exes/exes100.exe, node_modules/exes/exes100을 node.exe 대신 사용한다.

#### :page_facing_up: APIServer.bat
 * Windows용 Server 구동 파일

#### :page_facing_up: APIServer.sh.command
 * Mac용 Server 구동 파일

-------------
폴더 설명
-------------

#### :open_file_folder: APIServer [- README.md](https://github.com/B2Labs/B2LiNK-BlankProject-Dev/blob/master/HTTPServer_MongoDB/APIServer/README.md)
 * Member 정보와 Session 정보를 관리하는 Server Application.
 * Client의 Request를 기반으로 MongoDB에 데이터를 요청하고 가공 및 정제하여 Response한다.

 * 현재는 전체 Business 기능이 전부 포함.
	* 차후 MSA를 지향하기 위해 기능별 분리가 용이하게 개발하는 것에 중점을 둔다.
	* 필요에 따라 Server Application 폴더가 여러개로 분리 될 수 있다.
:---------- APIServer;

call set file_name__api_server_original=..\HTTPServer_MongoDB\APIServer\js\b2link\url\global.b2link.url.getServerURLByServers.js
call set file_name__api_server_target=..\HTTPServer_MongoDB\APIServer\js\b2link\url\global.b2link.url.getServerURLByServers.js.localhost
:call set file_name__api_server_target=..\HTTPServer_MongoDB\APIServer\js\b2link\url\global.b2link.url.getServerURLByServers.js.server
:call set file_name__api_server_target=..\HTTPServer_MongoDB\APIServer\js\b2link\url\global.b2link.url.getServerURLByServers.js.server-122
:call set file_name__api_server_target=..\HTTPServer_MongoDB\APIServer\js\b2link\url\global.b2link.url.getServerURLByServers.js.server-123

call if exist %file_name__api_server_original% (
	call del %file_name__api_server_original%
	echo %file_name__api_server_original% 파일 제거
	call copy %file_name__api_server_target% %file_name__api_server_original%
	echo %file_name__api_server_target% 파일 복사
)

call set file_name__api_server_original=
call set file_name__api_server_target=

:---------- HTTPServer;

call set file_name__http_server_original=..\HTTPServer_WebPage\js\b2link\url\global.b2link.url.getServerURLByServers.js
call set file_name__http_server_target=..\HTTPServer_WebPage\js\b2link\url\global.b2link.url.getServerURLByServers.js.localhost
:call set file_name__http_server_target=..\HTTPServer_WebPage\js\b2link\url\global.b2link.url.getServerURLByServers.js.server
:call set file_name__http_server_target=..\HTTPServer_WebPage\js\b2link\url\global.b2link.url.getServerURLByServers.js.server-122
:call set file_name__http_server_target=..\HTTPServer_WebPage\js\b2link\url\global.b2link.url.getServerURLByServers.js.server-123

call if exist %file_name__http_server_original% (
	call del %file_name__http_server_original%
	echo %file_name__http_server_original% 파일 제거
	call copy %file_name__http_server_target% %file_name__http_server_original%
	echo %file_name__http_server_target% 파일 복사
)

call set file_name__http_server_original=
call set file_name__http_server_target=

:---------- WebPage DB;

call set file_name__web_db_original=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByDB.js
call set file_name__web_db_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByDB.js.localhost
:call set file_name__web_db_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByDB.js.server
:call set file_name__web_db_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByDB.js.server-122
:call set file_name__web_db_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByDB.js.server-123

call if exist %file_name__web_db_original% (
	call del %file_name__web_db_original%
	echo %file_name__web_db_original% 파일 제거
	call copy %file_name__web_db_target% %file_name__web_db_original%
	echo %file_name__web_db_target% 파일 복사
)

call set file_name__web_db_original=
call set file_name__web_db_target=

:---------- WebPage Server;

call set file_name__web_server_original=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByServers.js
call set file_name__web_server_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByServers.js.localhost
:call set file_name__web_server_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByServers.js.server
:call set file_name__web_server_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByServers.js.server-122
:call set file_name__web_server_target=..\WebPage\root\js-common\b2link\url\window.b2link.url.getServerURLByServers.js.server-123

call if exist %file_name__web_server_original% (
	call del %file_name__web_server_original%
	echo %file_name__web_server_original% 파일 제거
	call copy %file_name__web_server_target% %file_name__web_server_original%
	echo %file_name__web_server_target% 파일 복사
)

call set file_name__web_server_original=
call set file_name__web_server_target=

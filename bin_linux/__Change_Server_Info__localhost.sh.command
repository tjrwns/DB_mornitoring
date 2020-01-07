#!/bin/sh
cd $(dirname $0)

#---------- APIServer;

file_name__api_server_original="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js";
file_name__api_server_local="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.localhost";
#file_name__api_server_server="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server";
#file_name__api_server_122="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-122";
#file_name__api_server_123="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-123";

if test -e $file_name__api_server_original
then
{
	rm $file_name__api_server_original
	echo "$file_name__api_server_original 파일 제거"
	cp $file_name__api_server_local $file_name__api_server_original
	echo "$file_name__api_server_local 파일 복사"
}
fi

#---------- HTTPServer;

file_name__http_server_original="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js";
file_name__http_server_local="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.localhost";
#file_name__http_server_server="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server";
#file_name__http_server_122="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-122";
#file_name__http_server_123="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-123";

if test -e $file_name__http_server_original
then
{
	rm $file_name__http_server_original
	echo "$file_name__http_server_original 파일 제거"
	cp $file_name__http_server_local $file_name__http_server_original
	echo "$file_name__http_server_local 파일 복사"
}
fi

#---------- WebPage DB;

file_name__web_db_original="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js"
file_name__web_db_local="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.localhost"
#file_name__web_db_server="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server"
#file_name__web_db_122="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server-122"
#file_name__web_db_123="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server-123"

if test -e $file_name__web_db_original
then
{
	rm $file_name__web_db_original
	echo "$file_name__web_db_original 파일 제거"
	cp $file_name__web_db_local $file_name__web_db_original
	echo "$file_name__web_db_local 파일 복사"
}
fi

#---------- WebPage Server;

file_name__web_server_original="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js"
file_name__web_server_local="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.localhost"
#file_name__web_server_server="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server"
#file_name__web_server_122="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server-122"
#file_name__web_server_123="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server-123"

if test -e $file_name__web_server_original
then
{
	rm $file_name__web_server_original
	echo "$file_name__web_server_original 파일 제거"
	cp $file_name__web_server_local $file_name__web_server_original
	echo "$file_name__web_server_local 파일 복사"
}
fi

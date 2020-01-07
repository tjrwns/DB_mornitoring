#!/bin/sh
cd $(dirname $0)

#---------- APIServer;

file_name__api_server_original="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js";
file_name__api_server_target="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.localhost";
#file_name__api_server_target="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server";
#file_name__api_server_target="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-122";
#file_name__api_server_target="../HTTPServer_MongoDB/APIServer/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-123";

if test -e $file_name__api_server_original
then
{
	rm $file_name__api_server_original
	echo "$file_name__api_server_original 파일 제거"
	cp $file_name__api_server_target $file_name__api_server_original
	echo "$file_name__api_server_target 파일 복사"
}
fi

#---------- HTTPServer;

file_name__http_server_original="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js";
file_name__http_server_target="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.localhost";
#file_name__http_server_target="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server";
#file_name__http_server_target="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-122";
#file_name__http_server_target="../HTTPServer_WebPage/js/b2link/url/global.b2link.url.getServerURLByServers.js.server-123";

if test -e $file_name__http_server_original
then
{
	rm $file_name__http_server_original
	echo "$file_name__http_server_original 파일 제거"
	cp $file_name__http_server_target $file_name__http_server_original
	echo "$file_name__http_server_target 파일 복사"
}
fi

#---------- WebPage DB;

file_name__web_db_original="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js"
file_name__web_db_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.localhost"
#file_name__web_db_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server"
#file_name__web_db_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server-122"
#file_name__web_db_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByDB.js.server-123"

if test -e $file_name__web_db_original
then
{
	rm $file_name__web_db_original
	echo "$file_name__web_db_original 파일 제거"
	cp $file_name__web_db_target $file_name__web_db_original
	echo "$file_name__web_db_target 파일 복사"
}
fi

#---------- WebPage Server;

file_name__web_server_original="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js"
file_name__web_server_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.localhost"
#file_name__web_server_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server"
#file_name__web_server_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server-122"
#file_name__web_server_target="../WebPage/root/js-common/b2link/url/window.b2link.url.getServerURLByServers.js.server-123"

if test -e $file_name__web_server_original
then
{
	rm $file_name__web_server_original
	echo "$file_name__web_server_original 파일 제거"
	cp $file_name__web_server_target $file_name__web_server_original
	echo "$file_name__web_server_target 파일 복사"
}
fi

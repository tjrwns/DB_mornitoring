#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#APIServer;
#——————————————————————————————————————————————————;

#../HTTPServer_MongoDB/MemberSession/bin_linux/js--deleteJSON__JS_Package.sh.command
#../HTTPServer_MongoDB/MemberSession/bin_linux/js--createJSON__js_Package.sh.command
../HTTPServer_MongoDB/APIServer/bin_linux/js--deleteJSON__JS_Package.sh.command
../HTTPServer_MongoDB/APIServer/bin_linux/js--createJSON__js_Package.sh.command

../HTTPServer_MongoDB/APIServer/bin_linux/root-Build-All.sh.command



#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#APIServer;
#——————————————————————————————————————————————————;

#../HTTPServer_MongoDB/MemberSession/bin_mac/js--deleteJSON__JS_Package.sh.command
#../HTTPServer_MongoDB/MemberSession/bin_mac/js--createJSON__js_Package.sh.command
../HTTPServer_MongoDB/APIServer/bin_mac/js--deleteJSON__JS_Package.sh.command
../HTTPServer_MongoDB/APIServer/bin_mac/js--createJSON__js_Package.sh.command

../HTTPServer_MongoDB/APIServer/bin_mac/root-Build-All.sh.command



#!/bin/sh
cd $(dirname $0)


./__Build_APIServer.sh.command


../WebPage/root/bin_mac/js--deleteJSON__JS_Package.sh.command
../WebPage/root/bin_mac/js--createJSON__JS_Package.sh.command


#open ../HTTPServer_MongoDB/MemberSession/MemberSession.sh.command
#open ../HTTPServer_MongoDB/MemberSession/MemberSession-Electron.sh.command
#open ../HTTPServer_MongoDB/APIServer/APIServer.sh.command
open ../HTTPServer_MongoDB/APIServer/APIServer-Electron.sh.command


open ../MongoDB/Mac/MongoDB-Start-0-B2LINK.sh.command


#open ./__Watcher_WebPage-less_to_css.sh.command

#open ./__Watcher_WebPage-less_ui_to_css_ui.sh.command


# 현재창 타이틀 변경
title='B2LiNK-BlankProject-Dev--HTTPServer_WebPage.sh.command'
echo -n -e "\033]0;$title\007"

#../HTTPServer_WebPage/HTTPServer_WebPage.sh.command
../HTTPServer_WebPage/HTTPServer_WebPage-Electron.sh.command
#!/bin/sh
cd $(dirname $0)

./__Execute_Before_Commit.sh.command

./css--deleteJSON.sh.command

./less__less_ui__css--delete_tmp_LESS.sh.command

./ui_template--deleteHTML.sh.command

./ui--deleteAllFiles.sh.command



./less__less_ui--createCSS__LESS_To_CSS.sh.command

./css--createJSON.sh.command

./js--createJSON__JS_Package.sh.command


./ui_template__ui--createHTML__FromTemplateHTML.sh.command
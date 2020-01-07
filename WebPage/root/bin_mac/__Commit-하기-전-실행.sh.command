#!/bin/sh
cd $(dirname $0)

./less__less_ui__css--delete_tmp_LESS.sh.command

./ui_template--deleteHTML.sh.command

./ui--deleteAllFiles.sh.command


./css--deleteJSON.sh.command

./js--deleteJSON__JS_Package.sh.command

./js-delete_empty_define_file.sh.command

./js-delete_empty_folder.sh.command
#!/bin/sh
cd $(dirname $0)

../../../../Development-Binary-Mac/Binary/NodeJS/exes100 ./ui_template__ui--createHTML__FromTemplateHTML.js

./ui_template__ui--xcopy_all.sh.command

./ui_template--deleteHTML.sh.command
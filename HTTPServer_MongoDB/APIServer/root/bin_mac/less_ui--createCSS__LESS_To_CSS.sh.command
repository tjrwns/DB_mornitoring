#!/bin/sh
cd $(dirname $0)

sudo ../../../../../Development-Binary-Mac/Binary/NodeJS/exes100 ./less_ui--createCSS__LESS_To_CSS.js

./ui_template--deleteHTML.sh.command
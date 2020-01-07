#!/bin/sh
cd $(dirname $0)

find ../ui_template/ -name '*.html' -exec rm -f {} \;
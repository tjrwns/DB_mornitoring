#!/bin/sh
cd $(dirname $0)

find ../ui/ -name '*.html' -exec rm -f {} \;

find ../ui/ -name '*.js' -exec rm -f {} \;

find ../ui/ -name '*.json' -exec rm -f {} \;

find ../ui/ -name '*.thtml' -exec rm -f {} \;

rm -rf ../ui/
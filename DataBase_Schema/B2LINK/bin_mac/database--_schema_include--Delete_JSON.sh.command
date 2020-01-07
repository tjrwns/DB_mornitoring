#!/bin/sh
cd $(dirname $0)

find ../database/_schema_include -name *.json -exec rm -f {} \;
#!/bin/sh
cd $(dirname $0)

find ../database-insert/ -name *.dbjs -exec rm -f {} \;

#!/bin/sh
cd $(dirname $0)

find ../database-insert/ -name *.dbs -exec rm -f {} \;

find ../database-insert/ -name *.errorResult -exec rm -f {} \;

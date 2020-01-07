#!/bin/sh
cd $(dirname $0)

find ../database/ -name *.dbs -exec rm -f {} \;

find ../database/ -name *.result -exec rm -f {} \;
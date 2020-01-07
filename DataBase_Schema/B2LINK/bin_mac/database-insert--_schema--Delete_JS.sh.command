#!/bin/sh
cd $(dirname $0)

find ../database-insert/_schema/ -name '*.js' -exec rm -f {} \;

#!/bin/sh
cd $(dirname $0)

find ../database/ -name *.dbjs -exec rm -f {} \;
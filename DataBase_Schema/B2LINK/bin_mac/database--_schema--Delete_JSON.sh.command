#!/bin/sh
cd $(dirname $0)

find ../database/_schema -name '*.json' -exec rm -f {} \;

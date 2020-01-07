#!/bin/sh
cd $(dirname $0)

find ../database/_schema/ -name '__list.json' -exec rm -f {} \;
find ../database/_schema/ -name '__listDir.json' -exec rm -f {} \;
find ../database/_schema/ -name '__listPackage.json' -exec rm -f {} \;

find ../database-insert/_schema/ -name '__list.json' -exec rm -f {} \;
find ../database-insert/_schema/ -name '__listDir.json' -exec rm -f {} \;
find ../database-insert/_schema/ -name '__listPackage.json' -exec rm -f {} \;

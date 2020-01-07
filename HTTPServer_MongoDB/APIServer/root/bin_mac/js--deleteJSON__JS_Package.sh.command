#!/bin/sh
cd $(dirname $0)

find ../js/ -name '__list.json' -exec rm -f {} \;
find ../js/ -name '__listDir.json' -exec rm -f {} \;
find ../js/ -name '__listPackage.json' -exec rm -f {} \;

find ../js-common/ -name '__list.json' -exec rm -f {} \;
find ../js-common/ -name '__listDir.json' -exec rm -f {} \;
find ../js-common/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__b2ker/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__b2ker/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__b2ker/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__b2ker-excel/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__b2ker-excel/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__b2ker-excel/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__brandPortal/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__brandPortal/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__brandPortal/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__excelServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__excelServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__excelServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__excelServer__webServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__excelServer__webServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__excelServer__webServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__fileServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__fileServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__fileServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__sessionServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__sessionServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__sessionServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__webHookServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__webHookServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__webHookServer/ -name '__listPackage.json' -exec rm -f {} \;

find ../js__b2link__webSocketMessageServer/ -name '__list.json' -exec rm -f {} \;
find ../js__b2link__webSocketMessageServer/ -name '__listDir.json' -exec rm -f {} \;
find ../js__b2link__webSocketMessageServer/ -name '__listPackage.json' -exec rm -f {} \;

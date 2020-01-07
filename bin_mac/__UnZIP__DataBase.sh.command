#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#DataBase;
#——————————————————————————————————————————————————;

rm -rf ../DataBase/B2LINK/0

cd ../DataBase/B2LINK/

IFS=$'\n' zipFile=(`find . -xdev -name '0_[0-9]*_[0-9]*.zip' | sort -r`)

mkdir ./0

unzip -o $zipFile -d ./0

#——————————————————————————————————————————————————;
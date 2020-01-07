#!/bin/sh
cd $(dirname $0)


# 기존에 실행중인 프로세스 종료
pList=($(lsof -c sh | awk '/'$(basename $0)'/ {print $2}'))

killSize=$((${#pList[@]}-1))

lsof -c sh | awk '/'$(basename $0)'/ {print $2}' | head -n $killSize

if [ ${#pList[@]} -gt 1 ]
then
	kill -9 `lsof -c sh | awk '/'$(basename $0)'/ {print $2}' | head -n $killSize`
fi


sudo chown -R $USER: ../WebPage/root/css

less-watch-compiler ../WebPage/root/less ../WebPage/root/css

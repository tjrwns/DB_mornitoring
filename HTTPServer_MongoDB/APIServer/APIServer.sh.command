#!/bin/sh
cd $(dirname $0)

title='BlankProject APIServer'
echo -n -e "\033]0;$title\007"

echo "Kill process..."
pid=`lsof -i TCP:49320 | awk '/LISTEN/ {print $2}'`
if test -z "$pid"
then
	echo "Not running process!"
else
	echo "pid=$pid"
	kill -9 $pid
	echo "Kill process complete!"
fi

../../../Development-Binary-Mac/Binary/NodeJS/exes100 --expose-gc APIServer.js
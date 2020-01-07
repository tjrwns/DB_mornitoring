#!/bin/sh
cd $(dirname $0)

# '*.query' 파일 삭제
./js-delete_query_file.sh.command

# json package 삭제
./js--deleteJSON__JS_Package.sh.command

# 쓰레기파일, 빈폴더 삭제
./js-delete_empty_folder.sh.command
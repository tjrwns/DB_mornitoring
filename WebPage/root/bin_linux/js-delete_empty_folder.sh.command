#!/bin/sh
cd $(dirname $0)

find ../ -d -name .DS_Store -delete;
# 빈 폴더 삭제
find ../ -depth -type d -empty -delete;
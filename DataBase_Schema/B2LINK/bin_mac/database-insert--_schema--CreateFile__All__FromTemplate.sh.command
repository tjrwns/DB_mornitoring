#!/bin/sh
cd $(dirname $0)

./database-insert--_schema_include--CreateFile.sh.command

./database-insert--_schema--CreateFile__FromTemplate.sh.command

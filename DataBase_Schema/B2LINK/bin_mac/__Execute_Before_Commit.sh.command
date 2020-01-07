#!/bin/sh
cd $(dirname $0)

./database--_schema_include--Delete_JSON.sh.command

./database--_schema--Delete_JSON.sh.command


./database-insert--_schema_include--Delete_File.sh.command

./database-insert--_schema--Delete_JS.sh.command


./all--Delete_Log_Result_Files.sh.command


./database--deleteJSON__JS_Package.sh.command

./database-insert--deleteJSON__JS_Package.sh.command
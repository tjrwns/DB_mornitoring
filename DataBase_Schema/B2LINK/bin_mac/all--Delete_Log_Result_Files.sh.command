#!/bin/sh
cd $(dirname $0)

./database--Delete_dbjs.sh.command

./database--Delete_dbs_errorResult.sh.command

./database--Delete_dbs_result.sh.command


./database-insert--Delete_dbjs.sh.command

./database-insert--Delete_dbs_errorResult.sh.command

./database-insert--Delete_dbs_result.sh.command

#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#DataBase_Schema;
#——————————————————————————————————————————————————;
../DataBase_Schema/B2LINK/bin_linux/database--_schema--CreateJSON__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_linux/database--Setup.sh.command

../DataBase_Schema/B2LINK/bin_linux/database-insert--_schema--CreateFile__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_linux/database-insert--Insert_Data.sh.command

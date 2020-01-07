#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#DataBase_Schema;
#——————————————————————————————————————————————————;
../DataBase_Schema/B2LINK/bin_mac/database--_schema--CreateJSON__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_mac/database--Setup.sh.command

../DataBase_Schema/B2LINK/bin_mac/database-insert--_schema--CreateFile__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_mac/database-insert--Insert_Data.sh.command

#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#권한;
#——————————————————————————————————————————————————;
./chmod.sh.command

#——————————————————————————————————————————————————;
#DataBase_Schema;
#——————————————————————————————————————————————————;
../DataBase_Schema/B2LINK/bin_mac/database--_schema--CreateJSON__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_mac/database--Setup.sh.command

../DataBase_Schema/B2LINK/bin_mac/database-insert--_schema--CreateFile__All__FromTemplate.sh.command

../DataBase_Schema/B2LINK/bin_mac/database-insert--Insert_Data.sh.command

#——————————————————————————————————————————————————;
#APIServer;
#——————————————————————————————————————————————————;

#../HTTPServer_MongoDB/MemberSession/bin_mac/js--createJSON__js_Package.sh.command
../HTTPServer_MongoDB/APIServer/bin_mac/js--createJSON__js_Package.sh.command

#——————————————————————————————————————————————————;
#WebPage;
#——————————————————————————————————————————————————;

../WebPage/root/bin_mac/__BuildAll-Dev.sh.command

#——————————————————————————————————————————————————;
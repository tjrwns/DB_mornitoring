#!/bin/sh
cd $(dirname $0)

sudo chmod -R 755 ./*.command

sudo chmod -R 755 ../DataBase_Schema/B2LINK/bin_mac/*.command
sudo chmod -R 755 ../DataBase_Schema/B2LINK/bin_mac/*.sh

#sudo chmod -R 755 ../DataBase_Schema/B2LINK/database/*.command
#sudo chmod -R 755 ../DataBase_Schema/B2LINK/database-insert/*.command

sudo chmod -R 755 ../DataBase_Schema/B2LINK/node_modules/exes/exes100


sudo chmod -R 755 ../HTTPServer_MongoDB/MemberSession/*.command
sudo chmod -R 755 ../HTTPServer_MongoDB/MemberSession/bin_mac/*.command
#sudo chmod -R 755 ../HTTPServer_MongoDB/MemberSession/bin_mac/*.sh

sudo chmod -R 755 ../HTTPServer_MongoDB/MemberSession/node_modules/exes/exes100


sudo chmod -R 755 ../HTTPServer_WebPage/*.command


sudo chmod -R 755 ../MongoDB/3.4.4_x64__Mac/*.command
sudo chmod -R 755 ../MongoDB/3.4.4_x64__Mac/bin/*


sudo chmod -R 755 ../WebPage/root/bin_custom/*.command
sudo chmod -R 755 ../WebPage/root/bin_mac/*.command
#sudo chmod -R 755 ../WebPage/root/bin_mac/*.sh
sudo chmod -R 755 ../WebPage/root/ui_template/**/**/*.command

sudo chmod -R 755 ../WebPage/root/node_modules/exes/exes100
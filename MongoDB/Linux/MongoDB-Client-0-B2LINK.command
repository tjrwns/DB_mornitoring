#!/bin/sh
cd $(dirname $0)

:../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/4.0.0/mongo --port 55522 -u b2link -p qlxnfldzmdb2017_ --authenticationDatabase admin
../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/4.0.10/mongo --port 55522 -u b2link -p qlxnfldzmdb2017_ --authenticationDatabase admin

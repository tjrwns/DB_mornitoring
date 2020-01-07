#!/bin/sh
cd $(dirname $0)

../../../../Development-Binary-Mac/Binary/NodeJS/exes100 ./database-insert--_schema--CreateFile__FromTemplate.js

rm -f ../database-insert/_schema_template/*.js
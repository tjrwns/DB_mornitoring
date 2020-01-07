#!/bin/sh
cd $(dirname $0)

../../../../Development-Binary-Mac/Binary/NodeJS/exes100 ./database--_schema--CreateJSON__FromTemplate.js

rm -f ../database/_schema_template/*.json
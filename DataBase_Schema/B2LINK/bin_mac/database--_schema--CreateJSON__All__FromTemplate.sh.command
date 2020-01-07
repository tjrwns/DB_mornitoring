#!/bin/sh
cd $(dirname $0)

./database--_schema_include--CreateJSON.sh.command

./database--_schema--CreateJSON__FromTemplate.sh.command

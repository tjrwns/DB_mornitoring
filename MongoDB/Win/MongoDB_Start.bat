:del /q Log\B2LINK\0\.
mkdir Log
mkdir Log\B2LINK
mkdir Log\B2LINK\0

:..\..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongod --config Config\B2LINK\0.conf
..\..\..\Development-Binary-Windows\Binary\MongoDB\4.0.10\mongod --config Config\B2LINK\0.conf
SET _MONGO=..\..\..\..\Development-Binary-Windows\Binary\MongoDB\mongo
SET   _URL=127.0.0.1:59320

%_MONGO% %_URL%/%1 -u %2 -p %3 %4

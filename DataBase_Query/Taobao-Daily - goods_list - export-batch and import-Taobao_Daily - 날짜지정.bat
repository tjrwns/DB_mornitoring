@ECHO off
@echo ===================================================================================
@echo = Taobao-Daily - goods_list - export and import - 날짜지정 -- MongDB Query Excuter By SukJun Choi.
::@echo = excute_collection_name : %1
@echo ===================================================================================
SET STARTTIME=%TIME%
set /p date="Enter Target Date: "

call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.230 --port 57321 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "daily_master" --collection "goods_list__%date%_233001" --out "D:\GitHub_B2LiNK\B2LiNK-OnSight-DB-Processing\HTTPServer_MongoDB\APIServer\temp\daily_master.%date%.json"
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 192.168.1.2 --port 55526 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "goods_list" --collection "%date%" --file "D:\GitHub_B2LiNK\B2LiNK-OnSight-DB-Processing\HTTPServer_MongoDB\APIServer\temp\\daily_master.%date%.json" --mode insert --numInsertionWorkers 1

SET ENDTIME=%TIME%

FOR /F "tokens=1-4 delims=:.," %%a IN ("%STARTTIME%") DO (
   SET /A "start=(((%%a*60)+1%%b %% 100)*60+1%%c %% 100)*100+1%%d %% 100"
)

FOR /F "tokens=1-4 delims=:.," %%a IN ("%ENDTIME%") DO (
   SET /A "end=(((%%a*60)+1%%b %% 100)*60+1%%c %% 100)*100+1%%d %% 100"
)

SET /A elapsed=end-start

SET /A hh=elapsed/(60*60*100), rest=elapsed%%(60*60*100), mm=rest/(60*100), rest%%=60*100, ss=rest/100, cc=rest%%100
IF %hh% lss 10 SET hh=0%hh%
IF %mm% lss 10 SET mm=0%mm%
IF %ss% lss 10 SET ss=0%ss%
IF %cc% lss 10 SET cc=0%cc%

SET DURATION=%hh%:%mm%:%ss%.%cc%

@echo ===================================================================================
@echo = Start    : %STARTTIME%
@echo = Finish   : %ENDTIME%
@echo = ---------------------------------------------------------------------------------
@echo = Duration : %DURATION%
@echo ===================================================================================

set /p exitkey= "Press any key to continue..."

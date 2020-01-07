SET excuteFile="Kaola - makeDiffData -- 03_생성데이터전달 --Kaola_YYYY-비교 export_CSJ_Import_Skumapper"

@ECHO off
@echo ===================================================================================
@echo = %excuteFile% -- MongDB Query Excuter By SukJun Choi.
@echo ===================================================================================

SET STARTTIME=%TIME%
set /p date="Enter Target Date: "
set year=%date:~0,4%

::EXPORT
set _EXPORT_PATH_=D:\GitHub_B2LiNK\B2LiNK-OnSight-DB-Processing\HTTPServer_MongoDB\APIServer\temp\

set exportDb0=Kaola_%year%--비교

set exportCol0=%date%--new
set exportCol1=%date%--remove
set exportCol2=%date%--price
set exportCol3=%date%--title
set exportCol4=STATISTICS

set outFile0=%_EXPORT_PATH_%%exportDb0%.%exportCol0%.json
set outFile1=%_EXPORT_PATH_%%exportDb0%.%exportCol1%.json
set outFile2=%_EXPORT_PATH_%%exportDb0%.%exportCol2%.json
set outFile3=%_EXPORT_PATH_%%exportDb0%.%exportCol3%.json
set outFile4=%_EXPORT_PATH_%%exportDb0%.STATISTICS.json

::IMPORT
set importDb0=kaola_%year%_continuity

set importCol0=%date%--new
set importCol1=%date%--remove
set importCol2=%date%--price
set importCol3=%date%--title
set importCol4=STATISTICS

::COMMAND
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.2 --port 55525 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "%exportDb0%" --collection "%exportCol0%" --out "%outFile0%" --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.2 --port 55525 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "%exportDb0%" --collection "%exportCol1%" --out "%outFile1%" --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.2 --port 55525 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "%exportDb0%" --collection "%exportCol2%" --out "%outFile2%" --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.2 --port 55525 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "%exportDb0%" --collection "%exportCol3%" --out "%outFile3%" --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoexport --host 192.168.1.2 --port 55525 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db "%exportDb0%" --collection "%exportCol4%" --out "%outFile4%" --jsonArray

call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 222.239.10.123 --port 55540 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db %importDb0% --collection "%importCol0%" --file "%outFile0%" --mode insert --numInsertionWorkers 1 --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 222.239.10.123 --port 55540 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db %importDb0% --collection "%importCol1%" --file "%outFile1%" --mode insert --numInsertionWorkers 1 --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 222.239.10.123 --port 55540 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db %importDb0% --collection "%importCol2%" --file "%outFile2%" --mode insert --numInsertionWorkers 1 --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 222.239.10.123 --port 55540 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db %importDb0% --collection "%importCol3%" --file "%outFile3%" --mode insert --numInsertionWorkers 1 --jsonArray
call ..\..\Development-Binary-Windows\Binary\MongoDB\4.0.0\mongoimport --host 222.239.10.123 --port 55540 --username b2link --password qlxnfldzmdb2017_ --authenticationDatabase=admin --db %importDb0% --collection "%importCol4%" --file "%outFile4%" --mode insert --numInsertionWorkers 1 --jsonArray

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

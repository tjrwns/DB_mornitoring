:——————————————————————————————————————————————————;
:DataBase_Schema;
:——————————————————————————————————————————————————;

call cd__DataBase_Schema--bin_win.bat

call database--_schema--CreateJSON__All__FromTemplate.bat

call database--Setup.bat

call database-insert--_schema--CreateFile__All__FromTemplate.bat

call database-insert--Insert_Data.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:APIServer;
:——————————————————————————————————————————————————;

:call cd__MemberSession--bin_win.bat
call cd__APIServer--bin_win.bat

call js--createJSON__js_Package.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:WebPage;
:——————————————————————————————————————————————————;

call cd__WebPage--bin_win.bat

call __BuildAll-Dev-exceptLESS.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;

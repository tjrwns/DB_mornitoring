

:——————————————————————————————————————————————————;
:DataBase_Schema;
:——————————————————————————————————————————————————;

call cd__DataBase_Schema--bin_win.bat

call __Execute_Before_Commit.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:APIServer;
:——————————————————————————————————————————————————;

:call cd__MemberSession--bin_win.bat
call cd__APIServer--bin_win.bat

call __Execute_Before_Commit.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
:WebPage;
:——————————————————————————————————————————————————;

call cd__WebPage--bin_win.bat

call __Execute_Before_Commit.bat

call cd__Root__bin_win.bat

:——————————————————————————————————————————————————;
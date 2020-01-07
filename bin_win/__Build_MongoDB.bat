:——————————————————————————————————————————————————;
:DataBase_Schema;
:——————————————————————————————————————————————————;

call cd__DataBase_Schema--bin_win.bat

call database--_schema--CreateJSON__All__FromTemplate.bat

call database--Setup.bat

call database-insert--_schema--CreateFile__All__FromTemplate.bat

call database-insert--Insert_Data.bat

call cd__Root__bin_win.bat

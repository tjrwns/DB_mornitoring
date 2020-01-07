/*/
var a = [
	"category"
	, "list_static"
	, "member"
];
/*/
var a = db.adminCommand({ listDatabases : 1, nameOnly : 1 }).databases;
//*/

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "_instance" );
var col = db0.dbs;
	col.remove({});

var nm_db;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	nm_db = a[ i ].name;

	print( "nm_db : " + nm_db );

	if( "_instance" == nm_db
		|| "_schema" == nm_db
		|| "admin" == nm_db
		|| "local" == nm_db
	) continue;

	col.insert({ _id : nm_db });
};

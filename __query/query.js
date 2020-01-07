var db0 = db.getSiblingDB('VIP_2019')
var db1 = db.getSiblingDB('VIP_2019-monthly')
var col0 = db1.getCollection('VIP_201902')
var cols = db0.getCollectionNames();

var r = {};

cols.reverse().forEach(function(col){
	if( col.indexOf('All') != -1 ) return;
	if( col.indexOf('201902') == -1 ) return;
	if( col == "_TEMP" ) return;
	print(col)
	db0.getCollection( col ).find().forEach(function(doc){

		if( !r[ doc._id ] ) r[ doc._id ] = doc;
	});
});

var a = 0;
for(var s in r )
{
	col0.insertOne( r[ s ] );
	print(a);
	++a;
}

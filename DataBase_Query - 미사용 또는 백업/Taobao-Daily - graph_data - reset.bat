var db0 = db.getSiblingDB('graph_data');
var cols = db0.getCollectionNames();

cols.forEach(function(col){

	db0.getCollection( col ).remove({});

})

return;

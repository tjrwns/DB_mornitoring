
//---------------------------------------------------------------------------------;
//변수세팅;
//---------------------------------------------------------------------------------;
var db0 = db.getSiblingDB("_schema");
var col_arr = db0.getCollectionNames();
var r;
var deref_obj = {};
var obj = {};
var ref =[];
//---------------------------------------------------------------------------------;
//function;
//---------------------------------------------------------------------------------;

/**
 * _schema db의 컬렉명들을 dbName에 저장한다.
 * @function
 * @param {Array}
 * @return { 0 }
 */
var check_db_name = function(array){
	array.forEach(function(o){
		r = db0.getCollection(o).find({}).toArray();
		r.forEach(function(o1){

			deref_obj ={};
			deref_obj._id = o1._id
			deref_obj.db_name = o;
			deref_obj.col = o1._id;
			deref_obj.f_info = o+"."+o1._id;
			db0.dbName.insert( deref_obj );
		})
	})
	return 0;
};

/**
* _schema db의 컬렉명들들로 실제 필드정의부분의 데이터를 확인해 '$' 가 포함되어있다면 ref_name에 저장한다.;
* @function
* @param {Array}
* @return { 0 }
*/

var ref_make = function(array){
	array.forEach(function(o){
		if(o != "dbName"){
			r = db0.getCollection(o).find({}).toArray();
			r.forEach(function(o2){
				obj = {};
				ref =[];
				obj._id = o2._id;
				obj.db = o;

				for(key in o2.properties){

					if(o2.properties[ key ].type == 'array' && o2.properties[ key ].valueDetail){
						check_data( o2.properties[ key ].valueDetail );
					}else if(o2.properties[ key ].type == 'object' && o2.properties[ key ].properties){
						check_data( o2.properties[ key ].properties );
					}

					ref_check(key);
				}

				obj.ref = ref;
				obj.dref = [];
				db0.ref_name.insert(obj);
			})
		}
	})
	return 0;
}

/**
* _schema.properiesd의 object,array의 내용들을 파악해 저장할지 여부를 결정한다.;
* @function
* @param {Object}
* @return { 0 }
*/
var check_data = function(param){

	for(k in param){
		if( param[ k ].type == 'object' ){
			for( k1 in param[ k ].properties ){
				check_data( param[ k ].properties[ k1 ].properties );
			}
		}else if( param[ k ].type == 'array' ){
			for( k1 in param[ k ].valueDetail ){
				check_data( param[ k ].valueDetail[ k1 ].valueDetail );
			}
		}else{
			ref_check( k )
		}
	}
	return 0;
};

/**
* '$'문자가 포함되었는지 체크하는 함수
* @function
* @param { String }
* @return { 0 }
*/
var ref_check =  function(param) {

	var re = /\$/;
	if (re.test(param) == true) {

		param = param.split('$')[1]

		if(param == 'member'){
			param = "member_public";
		}else if(param == 'company_info'){
			param = 'company_info_basic';
		}

		var r = db0.getCollection('dbName').findOne({'_id' : param});

		if (r && ref.indexOf(r.f_info) < 0 ){
			ref.push(r.f_info);
		}
	}
	return 0;
};

/**
* ref_name의 참조내용을 토대로 dereference를 작성한다
* @function
* @param {  }
* @return { 0 }
*/
var make_ref_dref = function(){
db0.ref_name.find({}).forEach(function(o3){

	var t = o3.ref;
	for(var i = 0; t.length > i; i++){
		print(o3.db+"."+o3._id  );
		db0.ref_name.update( { '_id' : t[ i ].split('.')[1] }, { $push : { 'dref' : o3.db+"."+o3._id } } );
		}
	})
	return 0;
};

/**
* 작성된 참조관련 내용들을 db,collection으로 나누어 다시 업데이트 한다.
* @function
* @param {  }
* @return { 0 }
*/
var make_col_db = function(){
	db0.getCollection('ref_name').find({}).forEach( function( doc ){

	var tmpA = [];

	var ref_c = [];
	var ref_d = [];
	var i1=0, i1Len=doc.ref.length;
	for( ; i1<i1Len; ++i1 ){
		tmpA = doc.ref[ i1 ].split(".");

		if (tmpA[ 1 ] && ref_c.indexOf( tmpA[ 1 ] ) < 0 ){
			ref_c.push( tmpA[ 1 ] );
		}

		if (tmpA[ 0 ] && ref_d.indexOf( tmpA[ 0 ] ) < 0 ){
			ref_d.push( tmpA[ 0 ] );
		}
	}

	var dref_c = [];
	var dref_d = [];
	var j1=0, j1Len=doc.dref.length;
	for( ; j1<j1Len; ++j1 ){
		tmpA = doc.dref[ j1 ].split(".");

		if (tmpA[ 1 ] && dref_c.indexOf( tmpA[ 1 ] ) < 0 ){
			dref_c.push( tmpA[ 1 ] );
		}

		if (tmpA[ 0 ] && dref_d.indexOf( tmpA[ 0 ] ) < 0 ){
			dref_d.push( tmpA[ 0 ] );
		}
	}

	db0.getCollection( doc.db ).update({ '_id' : doc._id }
		,{
			$set : {
				'reference' : doc.ref
				, 'dereference' : doc.dref
				, 'reference_collection' : ref_c
				, 'reference_database' : ref_d
				, 'dereference_collection' : dref_c
				, 'dereference_database' : dref_d
			}
		})
	})
	return 0;
};

//---------------------------------------------------------------------------------;
//샐행로직;
//---------------------------------------------------------------------------------;

check_db_name( col_arr );
ref_make(col_arr);
make_ref_dref();
make_col_db();
db0.dbName.drop();
db0.ref_name.drop();

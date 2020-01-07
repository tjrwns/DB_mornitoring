var cd$reference = {};

//----------------------------------------------------------------------------------------------------;
// UTIL;
//----------------------------------------------------------------------------------------------------;

/*
 * 시간 배열로 반환
 * @function
 * @param {Number} day minus value
 */
var getArrayDateFromNewDate = function( dMinus )
{
	var d = new Date();

	var r = null;
	if( dMinus != null )
	{
		r = [
			d.getFullYear()
			, d.getMonth() + 1
			, d.getDate()
			, d.getHours()
			, d.getMinutes()
			, d.getSeconds()
		];
	}
	else
	{
		r = [
			d.getFullYear()
			, d.getMonth() + 1
			, d.getDate() - dMinus
			, d.getHours()
			, d.getMinutes()
			, d.getSeconds()
		];
	}

	d = null;

	return r;
};

/*
 * collection list 가져오기
 * @function
 * @param {String} database name
 * @return {Array} schema collection list
 */
var getSchemaCollectionNameList = function( dbName )
{
	var schema_db = db.getSiblingDB( "_schema" );
	var schema_cols = [];
	schema_db.getCollection( dbName ).find().forEach( function( doc ){
		schema_cols.push( doc._id );
	});
	return schema_cols;
};

/*
 * schema properties object 가져오기
 * @function
 * @param {String} collection name
 * @return {Object} properties
 */
var getSchemaCollectionProperties = function( targetDBName, colName )
{
	var o = {};
	var schema_db = db.getSiblingDB( "_schema" );
	schema_db.getCollection( targetDBName ).find().forEach( function( doc )
	{
		if( doc._id == colName ) o = doc.properties;
	});
	return o;
};

/*
 * 샘플데이터 설정해서 반환하기
 * @function
 * @param {Object} d
 * @return {Object} value object
 */
var getProperties_SampleValue = function( targetDBName, targetColName, d, nowDate, nonCheck )
{
	var targetDB = db.getSiblingDB( targetDBName );
	var schema_db = db.getSiblingDB( "_schema" );
	var schema_col = schema_db.getCollection( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	var o = {};
	for( var p in d )
	{
		try
		{
			if( p == "_id" ) // PK;
			{
				o[ p ] = NumberInt( createPropertyValue__id( targetCol ) );
			}
			else if( p == "cd" )
			{
				if( nonCheck ) o[ p ] = createPropertyValue_cd_nonCheck( targetDB, targetColName, nowDate );
				else o[ p ] = createPropertyValue_cd( targetDB, targetColName, nowDate );
			}
			else if( p.indexOf( "cd$" ) > -1 )
				o[ p ] = createPropertyValue_cds( p, db, targetDBName, targetColName, nowDate );
			else if( targetColName == "transaction_entity" && p == "progress" )
				o[ p ] = null;
			else
			{
				try
				{
					var type = d[p].type;
					if( type == "object" ) o[p] = createPropertyValue_typeObject( d[p].properties );
					else if( type == "array" ) o[p] = createPropertyValue_typeArray( d[p].valueDetail );
					else if( type == "string" ) o[p] = "ㅇㅇㅇㅇㅇㅇ";
					else if( type == "number" ) o[p] = NumberInt(1000);
					else if( type == "uint" ) o[p] = NumberInt(0);
				}
				catch( e )
				{
					print( e );
					print( targetDBName, targetColName, p, "type 없음" );
					printjson( d[p] );
				}
			}
		}
		catch( ex )
		{
			print( ex );
			print( targetDBName, targetColName );
		}

	}
	return o;
};

/**
 * @function
 * @param {String} targetCol
 * @return {Number} cnt
 */
var createPropertyValue__id = function( targetCol )
{
	return targetCol.find({}).count() + 1; // PK;
}

var createPropertyValue_cd_nonCheck = function( targetDB, targetColName, nowDate )
{
	var p = "cd$" + targetColName;

	var nm_procesure = targetColName + "$" + "get_code";
	var params = {};
		params.date_create = nowDate;
		params._id$partner_buyer = parseInt( 0 );
		params._id$partner_supplier = parseInt( 0 );
	var code = null;
		code = targetDB.eval( nm_procesure + "(" + JSON.stringify( params ) + ")" );
	cd$reference[ p ] = code;
	return code;
};

var createPropertyValue_cd = function( targetDB, targetColName, nowDate )
{
	var p = "cd$" + targetColName;
	// 레퍼런스 참조하여 기존재하는 코드인지 먼저 확인;
	if( cd$reference.hasOwnProperty( p ) )
	{
		return cd$reference[ p ];
	}

	var nm_procesure = targetColName + "$" + "get_code";
	var params = {};
		params.date_create = nowDate;
		params._id$partner_buyer = parseInt( 0 );
		params._id$partner_supplier = parseInt( 0 );
	var code = null;
		code = targetDB.eval( nm_procesure + "(" + JSON.stringify( params ) + ")" );
	cd$reference[ p ] = code;
	return code;
};

var createPropertyValue_cds = function( p, db, targetDBName, targetColName, nowDate )
{
	// 레퍼런스 참조하여 기존재하는 코드인지 먼저 확인;
	if( cd$reference.hasOwnProperty( p ) )
	{
		return cd$reference[ p ];
	}

	var last = p.substring( p.length-4, p.length );
	if( last == "_res" || last == "_req" )
	{
		cd$reference[ p ] = createPropertyValue_cds_fromProcedure( p, db, null, targetColName, nowDate );
		return cd$reference[ p ];
	}
	else if( p.indexOf( "cd$category" ) > -1 )
	{
		var colName = p.replace( "cd$", "" );
		return NumberInt( getRandomValueFromDoc( "category", colName, "cd" ) );
	}
	else if( p.indexOf( "_item" ) > -1 )
	{
		return NumberInt(0);
	}
	else if( p == "cd$stock_entity" )
	{
		return NumberInt(0);
	}
	else
	{
		return createPropertyValue_cds_fromProcedure( p, db, targetDBName, targetColName, nowDate );
	}
};

/**
 * db name과 collection name을 받아 입력받은 정보를 반환
 * @function
 * @param {String} targetDBName
 * @param {String} targetColName
 * @param {String} value
 * @return {Object}
 */
var getRandomValueFromDoc = function( targetDBName, targetColName, value )
{
	var targetDB = db.getSiblingDB( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	var a = [];
	targetCol.find().forEach(function( doc ){
		a.push( doc[ value ] );
	});
	return a[ Math.random( 0, a.length - 1 ) ];
};

/**
 * @function
 * @param {String} p
 */
var createPropertyValue_cds_fromProcedure = function( p, db, targetDBName, targetColName, nowDate )
{
	var targetDB = null;
	if( targetDBName ) targetDB = db.getSiblingDB( targetDBName );
	else targetDB = db.getSiblingDB( p.substring( p.indexOf( "$" )+1, p.lastIndexOf( "_" ) ) );

	var nm_procesure = p.substring( p.indexOf( "$" )+1, p.length ) + "$" + "get_code";
	var params = {};
		params.date_create = nowDate;
		params._id$partner_buyer = parseInt( 0 );
		params._id$partner_supplier = parseInt( 0 );
	return targetDB.eval( nm_procesure + "(" + JSON.stringify( params ) + ")" );
};

var createPropertyValue_typeObject = function( d )
{
	var o = {};
	var type = null;
	for( var p in d )
	{
		type = d[ p ].type;
		if( type == "string" ) o[p] = "ㅇㅇㅇㅇㅇㅇ";
		else if( type == "number" ) o[p] = 1000;
		else if( type == "uint" ) o[p] = NumberInt( 0 );
		else if( type == "object" ) o[p] = createPropertyValue_typeObject( d[ p ].properties );
		else if( type == "array" ) o[p] = createPropertyValue_typeArray( d[ p ].valueDetail );
	}
	return o;
};

var createPropertyValue_typeArray = function( d )
{
	var a = [];
	for ( var i = 0 ; i < 5 ; ++i )
	{
		var t = {};
		for( var p in d )
		{
			type = d[ p ].type;
			if( type == "string" ) t[ p ] = "ㅇㅇㅇㅇㅇㅇ";
			else if( type == "number" ) t[ p ] = 1000;
			else if( type == "uint" ) t[ p ] = NumberInt( 0 );
			else if( type == "object" ) t[ p ] = createPropertyValue_typeObject( d[ p ].properties );
			else if( type == "array" ) t[ p ] = createPropertyValue_typeArray( d[ p ].valueDetail );
		}
		a.push( t );
	}

	return a;
};

//--------------------------------------------------;
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
// LOGIC;
//----------------------------------------------------------------------------------------------------;

/*
 * @function
 * @param {Number} cnt 데이터 수
 * @param {Number} ppCnt_sale 판매가견적핑퐁횟수
 * @param {Number} ppCnt_purchase 구매가견적핑퐁횟수
 */
var createSampleData_Transaction = function( cnt, ppCnt_sale, ppCnt_purchase )
{
	var seq = [
		// 거래;
		{ num : "0", db : "transaction", col : "transaction_entity" }

		// 판매 가견적;
		, { num : "1-1", db : "transaction_quote_sale", col : "transaction_quote_sale_req" }

		// 구매 가견적;
		, { num : "1-1-1", db : "transaction_quote_purchase", col : "transaction_quote_purchase_req" }
		, { num : "1-1-2", db : "transaction_quote_purchase", col : "transaction_quote_purchase_res" }

		// 판매 가견적 회신;
		, { num : "1-2", db : "transaction_quote_sale", col : "transaction_quote_sale_res" }

		// 견적 요청;
		, { num : "2-1", db : "transaction_quotation_sale", col : "transaction_quotation_sale_req" }

		// 구매 견적;
		, { num : "2-1-1", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_req" }
		, { num : "2-1-2", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_res" }

		// 판매견적;
		, { num : "2-2", db : "transaction_quotation_sale", col : "transaction_quotation_sale_res" }

		// 재무승인;

		// 발주서;
		, { num : "3-1", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_req" }

		// 구매 발주;
		, { num : "3-1-1", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_req" }
		, { num : "3-1-2", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_res" }

		// 입고지시서;
		, { num : "4-1", db : "transaction_stock_wearing", col : "transaction_stock_wearing_req" }
		// 패킹리스트;
		, { num : "4-2", db : "transaction_stock_wearing", col : "transaction_packing_list_wearing" }
		// 입고 검수/검품보고서;
		, { num : "4-3", db : "transaction_stock_wearing", col : "transaction_inspection_report_wearing" }
		// 입고지시확인서;
		, { num : "4-4", db : "transaction_stock_wearing", col : "transaction_inspection_report_check_wearing" }
		// 입고증;
		, { num : "4-5", db : "transaction_stock_wearing", col : "transaction_stock_wearing_res" }

		// 구매발주확정서
		, { num : "4-6", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_res" }

		// 재고;

		// 출고;
		, { num : "6-1", db : "transaction_stock_release", col : "transaction_stock_release_req" }
		// 출고 검수/검품보고서;
		, { num : "6-2", db : "transaction_stock_release", col : "transaction_inspection_report_release" }
		// 패킹리스트;
		, { num : "6-3", db : "transaction_stock_release", col : "transaction_packing_list_release" }
		// 출고증;
		, { num : "6-4", db : "transaction_stock_release", col : "transaction_stock_release_res" }

		// 배송;

		// 정산;
	];

	var targetDB = null;
	var targetCol = null;
	var nowDate = null;

	var i=0, iLen=cnt;
	var j=0, jLen=seq.length;
	var k=0, kLen=ppCnt_purchase; //구매가견적핑퐁횟수;
	var l=0, lLen=ppCnt_sale; //판매가견적핑퐁횟수;

	var v = null;
	var p0 = null;
	var p1 = null;
	for( ; i<iLen; ++i )
	{
		j = 0;
		cd$reference = {};
		for( ; j<jLen; ++j )
		{
			p0 = null;
			p1 = null;
			k = 0;
			l = 0;
			nowDate = getArrayDateFromNewDate( cnt - i ); // 날짜가 같으면 헷갈리니까 매번 바꿔주는 걸로;
			targetDB = db.getSiblingDB( seq[j].db ); // target db 설정;
			targetCol = targetDB.getCollection( seq[ j ].col );
			if( seq[j].num == "0" )
			{
				cd$reference.cd$transaction_entity = createPropertyValue_cd( targetDB, seq[ j ].col, nowDate ); // 거래번호 생성;
			}

			//판매가견적;
			if( lLen && ( seq[j].num == "1-1" ) )
			{
				for( ; l<lLen; ++l )
				{
					p0 = null;
					p1 = null;

					p0 = createSampleData_Transaction_Collection( "transaction_quote_sale", "transaction_quote_sale_req", nowDate, true );
					targetDB = db.getSiblingDB( "transaction_quote_sale" );
					targetCol = targetDB.getCollection( "transaction_quote_sale_req" );
					// data insert;
					targetCol.save( p0 );
					// transaction_entity progress update;
					updateTransactionEntityProgress( "transaction_quote_sale_req", p0.cd, "transaction_quote_sale" );

					// 구매가견적;
					if( kLen && ( seq[j].num == "1-1-1" ) )
					{
						for( ; k<kLen; ++k )
						{
							p0 = null;
							p1 = null;

							p0 = createSampleData_Transaction_Collection( "transaction_quote_purchase", "transaction_quote_purchase_req", nowDate, true );
							targetDB = db.getSiblingDB( "transaction_quote_purchase" );
							targetCol = targetDB.getCollection( "transaction_quote_purchase_req" );
							// data insert;
							targetCol.save( p0 );
							// transaction_entity progress update;
							updateTransactionEntityProgress( "transaction_quote_purchase_req", p0.cd, "transaction_quote_purchase" );

							p1 = createSampleData_Transaction_Collection( "transaction_quote_purchase", "transaction_quote_purchase_res", nowDate, true );
							targetCol = targetDB.getCollection( "transaction_quote_purchase_res" );
							// data insert;
							targetCol.save( p1 );
							// transaction_entity progress update;
							updateTransactionEntityProgress( "transaction_quote_purchase_res", p1.cd, "transaction_quote_purchase" );
						}
					}
					else if( kLen && ( seq[j].num == "1-1-2" ) ){}

					p1 = createSampleData_Transaction_Collection( "transaction_quote_sale", "transaction_quote_sale_res", nowDate, true );
					targetDB = db.getSiblingDB( "transaction_quote_sale" );
					targetCol = targetDB.getCollection( "transaction_quote_sale_res" );
					// data insert;
					targetCol.save( p1 );
					// transaction_entity progress update;
					updateTransactionEntityProgress( "transaction_quote_sale_res", p1.cd, "transaction_quote_sale" );
				}
			}
			else if( lLen && ( seq[j].num == "1-2" ) ){}
			else
			{
				p0 = null;
				p1 = null;
				// 구매가견적;
				if( kLen && ( seq[j].num == "1-1-1" ) )
				{
					for( ; k<kLen; ++k )
					{
						p0 = createSampleData_Transaction_Collection( "transaction_quote_purchase", "transaction_quote_purchase_req", nowDate, true );
						targetDB = db.getSiblingDB( "transaction_quote_purchase" );
						targetCol = targetDB.getCollection( "transaction_quote_purchase_req" );
						// data insert;
						targetCol.save( p0 );
						// transaction_entity progress update;
						updateTransactionEntityProgress( "transaction_quote_purchase_req", p0.cd, "transaction_quote_purchase" );

						p1 = createSampleData_Transaction_Collection( "transaction_quote_purchase", "transaction_quote_purchase_res", nowDate, true );
						targetCol = targetDB.getCollection( "transaction_quote_purchase_res" );
						// data insert;
						targetCol.save( p1 );
						// transaction_entity progress update;
						updateTransactionEntityProgress( "transaction_quote_purchase_res", p1.cd, "transaction_quote_purchase" );
					}
				}
				else if( kLen && ( seq[j].num == "1-1-2" ) ){}
				else
				{
					p0 = createSampleData_Transaction_Collection( seq[j].db, seq[ j ].col, nowDate );
					targetDB = db.getSiblingDB( seq[j].db );
					targetCol = targetDB.getCollection( seq[ j ].col );
					// data insert;
					targetCol.save( p0 );
					// transaction_entity progress update;
					updateTransactionEntityProgress( seq[ j ].col, p0.cd, seq[j].db );
				}
			}
		}
	}
};

var updateTransactionEntityProgress = function( targetColName, cd, dbNm )
{
	if( targetColName ==  "transaction_entity" ) return;
	else if( !targetColName || !cd ) return;
	else
	{
		var prog = null;

		var targetCol = db.getSiblingDB( "transaction" ).getCollection( "transaction_entity" );
		var doc = targetCol.findOne({
			cd : cd$reference.cd$transaction_entity
		});
		if( doc )
		{
			var o = {};
				//o[ "cd$" + targetColName ] = cd;
				o.no = null;
				o.cd = cd;
				o.col = targetColName;
				o.db = dbNm;
			print( "cd$" + targetColName, " : " , cd);
			prog = doc.progress;
			if( prog == null ) prog = [];
			o.no = NumberInt( prog.length );
			prog.push( o );

			targetCol.update(
				{ cd : cd$reference.cd$transaction_entity }//search Object;
				, {
					$set : {
						progress : prog
					}
				}
			);
		}
	}

};

var createSampleData_Transaction_Collection = function( targetDBName, targetColName, nowDate, nonCheck )
{
	var p = null;
	var v = null;

	p = getSchemaCollectionProperties( targetDBName, targetColName, nonCheck ); // get schema properties;
	v = getProperties_SampleValue( targetDBName, targetColName, p, nowDate, nonCheck ); // get sample value;

	return v;
};

/**
 * db name과 collection name을 받아 입력받은 정보를 반환
 * @function
 * @return {Object}
 */
var getRandomValueFromDoc = function( targetDBName, targetColName, value )
{
	var targetDB = db.getSiblingDB( targetDBName );
	var targetCol = targetDB.getCollection( targetColName );
	var a = [];
	targetCol.find().forEach(function( doc ){
		a.push( doc[ value ] );
	});
	return a[ Math.floor(Math.random() * (( a.length-1 ) - 0 + 1) + 0) ];
};

var deleteCollection = function()
{
	var seq = [
		// 거래;
		{ num : "0", db : "transaction", col : "transaction_entity" }

		// 판매 가견적;
		, { num : "1-1", db : "transaction_quote_sale", col : "transaction_quote_sale_req" }

		// 구매 가견적;
		, { num : "1-1-1", db : "transaction_quote_purchase", col : "transaction_quote_purchase_req" }
		, { num : "1-1-2", db : "transaction_quote_purchase", col : "transaction_quote_purchase_res" }

		// 판매 가견적 회신;
		, { num : "1-2", db : "transaction_quote_sale", col : "transaction_quote_sale_res" }

		// 견적 요청;
		, { num : "2-1", db : "transaction_quotation_sale", col : "transaction_quotation_sale_req" }

		// 구매 견적;
		, { num : "2-1-1", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_req" }
		, { num : "2-1-2", db : "transaction_quotation_purchase", col : "transaction_quotation_purchase_res" }

		// 판매견적;
		, { num : "2-2", db : "transaction_quotation_sale", col : "transaction_quotation_sale_res" }

		// 재무승인;

		// 발주서;
		, { num : "3-1", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_req" }

		// 구매 발주;
		, { num : "3-1-1", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_req" }
		, { num : "3-1-2", db : "transaction_purchase_order_purchase", col : "transaction_purchase_order_purchase_res" }

		// 입고지시서;
		, { num : "4-1", db : "transaction_stock_wearing", col : "transaction_stock_wearing_req" }
		// 패킹리스트;
		, { num : "4-2", db : "transaction_stock_wearing", col : "transaction_packing_list_wearing" }
		// 입고 검수/검품보고서;
		, { num : "4-3", db : "transaction_stock_wearing", col : "transaction_inspection_report_wearing" }
		// 입고지시확인서;
		, { num : "4-4", db : "transaction_stock_wearing", col : "transaction_inspection_report_check_wearing" }
		// 입고증;
		, { num : "4-5", db : "transaction_stock_wearing", col : "transaction_stock_wearing_res" }

		// 구매발주확정서
		, { num : "4-6", db : "transaction_purchase_order_sale", col : "transaction_purchase_order_sale_res" }

		// 재고;

		// 출고;
		, { num : "6-1", db : "transaction_stock_release", col : "transaction_stock_release_req" }
		// 출고 검수/검품보고서;
		, { num : "6-2", db : "transaction_stock_release", col : "transaction_inspection_report_release" }
		// 패킹리스트;
		, { num : "6-3", db : "transaction_stock_release", col : "transaction_packing_list_release" }
		// 출고증;
		, { num : "6-4", db : "transaction_stock_release", col : "transaction_stock_release_res" }

		// 배송;

		// 정산;
	];

	var i=0, iLen=seq.length;
	for( ; i<iLen; ++i )
	{
		var targetDB = db.getSiblingDB( seq[i].db ).getCollection( seq[i].col ).drop();
	}
}

deleteCollection();

createSampleData_Transaction( 5, 2, 3 );

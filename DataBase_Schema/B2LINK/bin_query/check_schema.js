/*
 * 스키마와 실데이터 비교 (실데이터 기준)
 * @function
 * @param {String} dbName
 * @param {String} colName
 * @param {Collection} schema_col 비교할 collection schema
 * @param {Collection} temp_col 비교대상이 될 data collection
 */
var compare_collection_baseData = function( dbName, colName, schema_col, temp_col )
{
	if( schema_col == null )
	{
		print( dbName, colName, "존재안함");
		return false;
	}

	var schemaProperties = schema_col.properties; // collection schema;
	var i = -1;
	var p = null;
	temp_col.find().forEach( function( doc )
	{
		++i;
		for( p in doc )
		{
			// property 존재 여부 비교;
			if( !schemaProperties.hasOwnProperty( p ) )
			{
				print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, " << 왜 있음?????" );
			}

			if( typeof( doc[p] ) === "Object" )
			{
				var pp = null;
				for( pp in doc[p] )
				{
					// property 존재 여부 비교 -- 2depth;
					if( !schemaProperties[p].hasOwnProperty( pp ) )
					{
						print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, pp, " << 왜 있음?????" );
					}

					//*/
					// type 비교;
					if( schemaProperties[ p ][ pp ] && !schemaProperties[ p ][ pp ].hasOwnProperty( "type" ) )
					{
						print( dbName, colName, "schema에", p, pp, "type 없음");
					}
					else if( schemaProperties[ p ][ pp ] && schemaProperties[ p ][ pp ].type != "uint" && typeof( doc[ p ][ pp ] ).toString().toLowerCase() != schemaProperties[ p ][ pp ].type.toLowerCase() )
					{
						print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, pp, " << type 다름!!!" );
					}
					//*/
				}
			}

			//*/
			// type 비교;
			if( schemaProperties[ p ] && !schemaProperties[ p ].hasOwnProperty( "type" ) )
			{
				print( dbName, colName, "schema에", p, "type 없음");
			}
			else if( schemaProperties[ p ] && schemaProperties[ p ].type != "uint" && ( typeof( doc[ p ] ) ).toString().toLowerCase() != schemaProperties[ p ].type.toLowerCase() )
			{
				print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, " << type 다름!!!" );
			}
			//*/
		}
	});
};

/*
 * 스키마와 실데이터 비교 (스키마 기준)
 * @function
 * @param {String} dbName
 * @param {String} colName
 * @param {Collection} schema_col 비교할 collection schema
 * @param {Collection} temp_col 비교대상이 될 data collection
 */
var compare_collection_baseSchema = function( dbName, colName, schema_col, temp_col )
{
	if( schema_col == null )
	{
		print( dbName, colName, "존재안함");
		return false;
	}

	var schemaProperties = schema_col.properties; // collection schema;
	var i = -1;
	var p = null;
	temp_col.find().forEach( function( doc )
	{
		++i;
		for( p in schemaProperties )
		{
			// property 존재 여부 비교;
			if( !doc.hasOwnProperty( p ) )
			{
				print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, " << 없음!!!!!!!!" );
			}

			if( typeof( schemaProperties[p] ) === "Object" )
			{
				var pp = null;
				for( pp in schemaProperties[p] )
				{
					// property 존재 여부 비교 -- 2depth;
					if( !doc[p].hasOwnProperty( pp ) )
					{
						print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, pp, " << 없음!!!!!!!!" );
					}

					//*/
					// type 비교;
					if( schemaProperties[ p ][ pp ] && !schemaProperties[ p ][ pp ].hasOwnProperty( "type" ) )
					{
						print( dbName, colName, "schema에", p, pp, "type 없음");
					}
					else if( schemaProperties[ p ][ pp ] && schemaProperties[ p ][ pp ].type != "uint" && typeof( doc[ p ][ pp ] ).toString().toLowerCase() != schemaProperties[ p ][ pp ].type.toLowerCase() )
					{
						print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, pp, " << type 다름!!!" );
					}
					//*/
				}
			}

			//*/
			// type 비교;
			if( schemaProperties[ p ] && !schemaProperties[ p ].hasOwnProperty( "type" ) )
			{
				print( dbName, colName, "schema에", p, "type 없음");
			}
			else if( schemaProperties[ p ] && schemaProperties[ p ].type != "uint" && ( typeof( doc[ p ] ) ).toString().toLowerCase() != schemaProperties[ p ].type.toLowerCase() )
			{
				print( dbName, colName, i, "번째 데이터에 ", "property name : ", p, " << type 다름!!!" );
			}
			//*/

		}
	});
};

/*
 * @function
 * @param schema_db
 * @param dbName
 * @param colName
 * @return {Document}
 */
var getSchemaCollection_Single = function( schema_db, dbName, colName )
{
	var schema_col = null;
	schema_db.getCollection( dbName ).find().forEach( function( doc ){
		if( doc._id == colName )
		{
			schema_col = doc;
		}
	});
	return schema_col;
};

var checkFunction = function( baseType, dbName, colName )
{
	var f = null;
	if( baseType == "Schema" ) f = compare_collection_baseSchema;
	else if( baseType == "Data" ) f = compare_collection_baseData;

	var schema_db = db.getSiblingDB( "_schema" );
	var schema_colName = schema_db.getCollectionNames();
	var schema_cols = null;
	var schema_col = null;

	if( dbName && colName )
	{
		print( dbName, colName, "입력받음", "=========================");
		var temp_db = db.getSiblingDB( dbName );
		var temp_col = temp_db.getCollection( colName );

		schema_col = getSchemaCollection_Single( schema_db, dbName, colName );

		f( dbName, colName, schema_col, temp_col ); // 비교;
	}
	else if( dbName )
	{
		print( dbName, "입력받음", "=========================");
		var temp_db = db.getSiblingDB( dbName );
		schema_cols = [];
		schema_db.getCollection( dbName ).find().forEach( function( doc ){
			schema_cols.push( doc._id );
		});

		var i=0, iLen=schema_cols.length;
		for( ; i<iLen; ++i )
		{
			colName = schema_cols[ i ];
			temp_col = temp_db.getCollection( colName );
			schema_col = getSchemaCollection_Single( schema_db, dbName, colName );

			f( dbName, colName, schema_col, temp_col ); // 비교;
		}
	}
	else
	{
		schema_colName.forEach(function( database ){
			dbName = database;
			var temp_db = db.getSiblingDB( dbName );
			schema_cols = [];
			schema_db.getCollection( dbName ).find().forEach( function( doc ){
				schema_cols.push( doc._id );
			});

			var i=0, iLen=schema_cols.length;
			for( ; i<iLen; ++i )
			{
				colName = schema_cols[ i ];
				temp_col = temp_db.getCollection( colName );
				schema_col = getSchemaCollection_Single( schema_db, dbName, colName );

				f( dbName, colName, schema_col, temp_col ); // 비교;
			}
		});
	}
};

//checkFunction( "Schema", "brand", "brand_basic" );
//checkFunction( "Data", "brand", "brand_basic" );

//checkFunction( "Schema", "brand" );
//checkFunction( "Data", "brand" );

checkFunction( "Schema" );
//checkFunction( "Data" );

//checkFunction( "Schema", "transaction" );

//거래 문서 순;
//checkFunction( "Schema", "transaction_quote_sale", "transaction_quote_sale_req" );
//checkFunction( "Schema", "transaction_quote_purchase", "transaction_quote_purchase_req" );
//checkFunction( "Schema", "transaction_quote_purchase", "transaction_quote_purchase_res" );
//checkFunction( "Schema", "transaction_quote_sale", "transaction_quote_sale_res" );
//checkFunction( "Schema", "transaction_quotation_sale", "transaction_quotation_sale_req" );
//checkFunction( "Schema", "transaction_quotation_purchase", "transaction_quotation_purchase_req" );
//checkFunction( "Schema", "transaction_quotation_purchase", "transaction_quotation_purchase_res" );
//checkFunction( "Schema", "transaction_quotation_sale", "transaction_quotation_sale_res" );
//checkFunction( "Schema", "transaction_purchase_order_sale", "transaction_purchase_order_sale_req" );
//checkFunction( "Schema", "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_req" );
//checkFunction( "Schema", "transaction_purchase_order_purchase", "transaction_purchase_order_purchase_res" );
//checkFunction( "Schema", "transaction_stock_wearing", "transaction_stock_wearing_req" );
//checkFunction( "Schema", "transaction_stock_wearing", "transaction_packing_list_wearing" );
//checkFunction( "Schema", "transaction_stock_wearing", "transaction_inspection_report_wearing" );
//checkFunction( "Schema", "transaction_stock_wearing", "transaction_inspection_report_check_wearing" );
//checkFunction( "Schema", "transaction_stock_wearing", "transaction_stock_wearing_res" );
//checkFunction( "Schema", "transaction_purchase_order_sale", "transaction_purchase_order_sale_res" );
//checkFunction( "Schema", "transaction_stock_release", "transaction_stock_release_req" );
//checkFunction( "Schema", "transaction_stock_release", "transaction_inspection_report_release" );
//checkFunction( "Schema", "transaction_stock_release", "transaction_packing_list_release" );
//checkFunction( "Schema", "transaction_stock_release", "transaction_stock_release_res" );
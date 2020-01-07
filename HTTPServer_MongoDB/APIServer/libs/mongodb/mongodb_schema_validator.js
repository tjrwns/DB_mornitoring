//----------------------------------------------------------------------------------------------------;
var fileNm = "./libs/mongodb/mongodb_schema_validator.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

global._$TATIC_CONST_DATABASE = {};
global._$TATIC_CONST_DATABASE.SCHEMA;
global._$TATIC_CONST_DATABASE.VALIDATOR;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} pathSchemaFile
 */
global._$TATIC_CONST_DATABASE.LOAD_DATABASE_SCHEMA = function( pathSchemaFile )
{
	global._$TATIC_CONST_DATABASE.SCHEMA = JSON.parse( STtwUtilFsReadStream.getFile( pathSchemaFile ).toString( "utf8" ) );
};
global._$TATIC_CONST_DATABASE.LOAD_DATABASE_SCHEMA( "./json/mongodb/schema.json" );

//----------------------------------------------------------------------------------------------------;

/**
 * VALIDATOR
 * @property {Object}
 * <code>
 * {
 * }
 * </code>
 */
global._$TATIC_CONST_DATABASE.VALIDATOR = (function( _schema ){

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRE;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	var _this = {};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"nm_db" : ""
	 *	 , "nm_col" : ""
	 *	 , "doc" : {}
	 * }
	 * </code>
	 * @return {unit}
	 */
	var _validation__Document_HasOwnAllProps = function( d )
	{
		global.TtwLog.timeStamp( "---- [ S ] - validation__Document_HasOwnAllProps():{uint}----------" );

		global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
		global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );

		d.db = _schema[ d.nm_db ];
		d.col = d.db[ d.nm_col ];
		d.props = d.col.properties;

		for( var s in d.props )
		{
			if( !d.doc.hasOwnProperty( s ) )
			{
				global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
				global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );
				global.TtwLog.timeStamp( "d.nm_prop : " + d.nm_prop );
				global.TtwLog.timeStamp( "---- [ E ] - validation__Document_HasOwnAllProps():{uint}----------return 0;" );
				return 0;
			}
		}

		global.TtwLog.timeStamp( "---- [ E ] - validation__Document_HasOwnAllProps():{uint}----------return 1;" );
		return 1;
	}

	//--------------------------------------------------;
	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"nm_db" : ""
	 *	 , "nm_col" : ""
	 *	 , "doc" : {}
	 * }
	 * </code>
	 * @return {unit}
	 */
	var _validation__Document_props = function( d )
	{
		global.TtwLog.timeStamp( "---- [ S ] - validation__Document_props():{uint}----------" );

		global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
		global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );

		d.db = _schema[ d.nm_db ];
		d.col = d.db[ d.nm_col ];
		d.props = d.col.properties;

		for( var s in d.doc )
		{
			d.nm_prop = s;
			d.value = d.doc[ s ];
			if( !_validation__Document_prop( d ) )
			{
				global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
				global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );
				global.TtwLog.timeStamp( "d.nm_prop : " + d.nm_prop );
				global.TtwLog.timeStamp( "---- [ E ] - validation__Document_props():{uint}----------return 0;" );
				return 0;
			}
		}

		global.TtwLog.timeStamp( "---- [ E ] - validation__Document_props():{uint}----------return 1;" );
		return 1;
	}

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"nm_db" : ""
	 *	 , "nm_col" : ""
	 *	 , "nm_prop" : ""
	 *	 , "value" : {}
	 * }
	 * </code>
	 * @return {unit}
	 */
	var _validation__Document_prop = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - validation__Document_prop():{uint}----------" );

		d.prop = d.col.properties[ d.nm_prop ];

		//global.TtwLog.timeStamp( "---- [ E ] - validation__Document_prop():{uint}----------return validation__Document_prop[ '_' + prop.type ]( d );" );
		return _validation__Document_prop[ "_" + d.prop.type ]( d );
	}
	_validation__Document_prop._array = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - validation__Document_prop._array():{uint}----------" );

		if( !d.value.length )
		{
			//global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
			//global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );
			//global.TtwLog.timeStamp( "d.nm_prop : " + d.nm_prop );
			//global.TtwLog.timeStamp( "---- [ E ] - validation__Document_prop._array():{uint}----------return 0;" );
			return 0;
		}

		if( "object" == typeof( d.value[ 0 ] ) )
		{
			console.log( "_validation__Document_prop._array object" );
		}

		//global.TtwLog.timeStamp( "---- [ E ] - validation__Document_prop._array():{uint}----------return 1;" );
		return 1;
	};
	_validation__Document_prop._boolean = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - validation__Document_prop._boolean():{uint}----------" );

		if( d.prop.type != typeof( d.value ) )
		{
			//global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
			//global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );
			//global.TtwLog.timeStamp( "d.nm_prop : " + d.nm_prop );
			//global.TtwLog.timeStamp( "---- [ E ] - validation__Document_prop._boolean():{uint}----------return 0;" );
			return 0;
		}

		//global.TtwLog.timeStamp( "---- [ E ] - validation__Document_prop._boolean():{uint}----------return 1;" );
		return 1;
	};
	_validation__Document_prop._int = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - _validation__Document_prop._int():{uint}----------" );

		if( d.prop.valuesMap )
		{
			return d.prop.valuesMap[ d.value ];
		}

		if( d.prop.hasOwnProperty( "length" ) )
		{
			var len = d.value.toString().length;

			if( d.prop.hasOwnProperty( "maxLength" ) )
			{
				if( d.prop.minLength > len || d.prop.maxLength < len )
				{
					return 0;
				}
			}
			else
			{
				if( d.prop.length != len )
				{
					return 0;
				}
			}
		}

		if( d.prop.hasOwnProperty( "minValue" ) )
		{
			if( d.prop.minValue > d.value || d.prop.maxValue < d.value )
			{
				return 0;
			}
		}

		//global.TtwLog.timeStamp( "---- [ E ] - _validation__Document_prop._int():{uint}----------return 1;" );
		return 1;
	};
	_validation__Document_prop._number = function( d )
	{
		if( d.prop.type != typeof( d.value ) )
		{
			return 0;
		}

		if( d.prop.valuesMap )
		{
			return d.prop.valuesMap[ d.value ];
		}

		return 1;
	};
	_validation__Document_prop._string = function( d )
	{
		if( d.prop.type != typeof( d.value ) )
		{
			return 0;
		}

		if( d.prop.valuesMap )
		{
			return d.prop.valuesMap[ d.value ];
		}

		return 1;
	};
	_validation__Document_prop._uint = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - _validation__Document_prop._uint():{uint}----------" );

		if( -1 > d.value )
		{
			return 0;
		}

		if( d.prop.valuesMap )
		{
			return d.prop.valuesMap[ d.value ];
		}

		if( d.prop.hasOwnProperty( "length" ) )
		{
			var len = d.value.toString().length;

			if( d.prop.hasOwnProperty( "maxLength" ) )
			{
				if(d.prop.maxLength < len )
				{
					return 0;
				}
			}
			if( d.prop.hasOwnProperty( "minLength" ) )
			{
				if( d.prop.minLength > len)
				{
					return 0;
				}
			}
			if ( d.prop.length != 0 && d.prop.length != len )
			{
				return 0;
			}
		}

		if( d.prop.hasOwnProperty( "maxValue" ) )
		{
			if( d.prop.maxValue < d.value )
			{
				return 0;
			}
		}
		if( d.prop.hasOwnProperty( "minValue" ) )
		{
			if( d.prop.minValue > d.value)
			{
				return 0;
			}
		}

		//global.TtwLog.timeStamp( "---- [ E ] - _validation__Document_prop._uint():{uint}----------return 1;" );
		return 1;
	};
	//--------------------------------------------------;
	_validation__Document_prop._object = function( d )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - _validation__Document_prop._object():{uint}----------" );

		if( d.prop.type != typeof( d.value ) )
		{
			return 0;
		}

		var io;//value's properties's property;
		var pio;//schema' properties's property
		for( var s in d.value )
		{
			io = d.d.value[ s ];
			pio = d.prop.properties[ s ];
			var r = _validation__Document_prop._object[ "_" + pio.type ]( d, key, vProp, pProp );
			if( !r )
			{
				global.TtwLog.timeStamp( "d.nm_db : " + d.nm_db );
				global.TtwLog.timeStamp( "d.nm_col : " + d.nm_col );
				global.TtwLog.timeStamp( "d.nm_prop : " + d.nm_prop );
				global.TtwLog.timeStamp( "d.nm_prop properties[ name ] : " + s );
				global.TtwLog.timeStamp( "---- [ E ] - _validation__Document_prop._object():{uint}----------return 0;" );
				return 0;
			}
		}

		//global.TtwLog.timeStamp( "---- [ E ] - _validation__Document_prop._object():{uint}----------return 1;" );
		return 1;
	};
	_validation__Document_prop._object._array = function( d, key, vProp, pProp )
	{
		if( !vProp.length )
		{
			return 0;
		}

		if( "object" == typeof( vProp[ 0 ] ) )
		{
			console.log( "_validation__Document_prop._object._array object" );
		}

		return 1;
	};
	_validation__Document_prop._object._boolean = function( d, key, vProp, pProp )
	{
		if( pProp.type != typeof( vProp ) )
		{
			return 0;
		}
		return 1;
	};
	_validation__Document_prop._object._int = function( d, key, vProp, pProp )
	{
		if( pProp.valuesMap )
		{
			return pProp.valuesMap[ vProp ];
		}

		if( pProp.hasOwnProperty( "length" ) )
		{
			var len = vProp.toString().length;
			if( pProp.hasOwnProperty( "maxLength" ) )
			{
				if( pProp.minLength > len || pProp.maxLength < len )
				{
					return 0;
				}
			}
			else
			{
				if( pProp.length != len )
				{
					return 0;
				}
			}
		}
		if( pProp.hasOwnProperty( "minValue" ) )
		{
			if( pProp.minValue > vProp || pProp.maxValue < vProp )
			{
				return 0;
			}
		}
		return 1;
	};
	_validation__Document_prop._object._number = function( d, key, vProp, pProp )
	{
		if( pProp.type != typeof( vProp ) )
		{
			return 0;
		}

		if( pProp.valuesMap )
		{
			return pProp.valuesMap[ vProp ];
		}
	};
	_validation__Document_prop._object._object = function( d, key, vProp, pProp )
	{

	};
	_validation__Document_prop._object._string = function( d, key, vProp, pProp )
	{
		if( pProp.type != typeof( vProp ) ) 
		{
			return 0;
		}

		if( pProp.valuesMap )
		{
			return pProp.valuesMap[ vProp ];
		}
	};
	_validation__Document_prop._object._uint = function( d, key, vProp, pProp )
	{
		if( -1 > vProp )
		{
			return 0;
		}

		if( pProp.valuesMap )
		{
			return pProp.valuesMap[ vProp ];
		}

		if( pProp.hasOwnProperty( "length" ) )
		{
			var len = vProp.toString().length;

			if( pProp.hasOwnProperty( "maxLength" ) )
			{
				if( pProp.minLength > len || pProp.maxLength < len )
				{
					return 0;
				}
			}
			else
			{
				if( pProp.length != len )
				{
					return 0;
				}
			}
		}

		if( pProp.hasOwnProperty( "minValue" ) )
		{
			if( pProp.minValue > vProp || pProp.maxValue < vProp )
			{
				return 0;
			}
		}

		return 1;
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------this;
	var _ = _this;

		/*/
		_.valid__Doc_HasOwnAllProps = _validation__Document_HasOwnAllProps;
		_.valid__Doc_props = _validation__Document_props;
		/*/
		_.DOC_HasOwnAllProps = _validation__Document_HasOwnAllProps;
		_.DOC_props = _validation__Document_props;
		//*/

	return _this;
	//--------------------------------------------------this;

})( global._$TATIC_CONST_DATABASE.SCHEMA );

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
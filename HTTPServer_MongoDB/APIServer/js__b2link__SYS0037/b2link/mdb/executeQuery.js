//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/mdb/executeQuery.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link.mdb.executeQuery = function( _query_path, _param ) {
	let query = global.b2link.fs.getDBJS__require( _query_path );
	for ( let key in _param ) {
		if ( typeof _param[ key ] === "object" ) {
			query = query.replace( `<!=${key}=!>`, JSON.stringify( _param[ key ] ) );
		} else {
			query = query.replace( `<!=${key}=!>`, _param[ key ] );
		}
	}

    let result = global.mongodb.execSync( global._$TATIC_CONST_MONGO.CRAWL_CHA.IP, global._$TATIC_CONST_MONGO.CRAWL_CHA.PORT, "admin", query );

    return JSON.parse( result );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
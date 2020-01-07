//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/mdb/executeQuery_remote.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {string} _query_path - "./dbjs/graph/getData.dbjs"
 * @param {object}_param - { start_date : "", end_date : "" }
 * @param {string} ip - 222.239.10.120
 * @param {integer} port - 55520
 * @param {string} id - admin
 * @param {string} password - (mongodb password)
 */
global.b2link.mdb.executeQuery_remote = function( _query_path, _param, ip, port, id, password ) {
    let query = global.b2link.fs.getDBJS__require( _query_path );

    query = global.b2link.util.replaceTemplate( query, _param );

    if ( id && password ) {
    	ip = id + ":" + password + "@" + ip;
 	}
    let result = global.mongodb.execSync( ip, port, "admin", query );

    if (result === "") {
        result = [];
    }

    //*
    if ( typeof result === "object" ) {
		return result;
	} else {
		return JSON.parse( result );
	}
    /*/
    return JSON.parse( result );
    //*/
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.util.replaceTemplate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} str
 * @param {Object} object
 */
global.b2link.util.replaceTemplate = function( str, object )
{
	var keys = Object.keys( object );
	if( !keys || keys.length === 0 ) return str;

	//기본값 세팅;
	if( keys.findIndex( key => key === "separatorId" ) === -1 )
		str = str.split( `<!=separatorId=!>` ).join( "" );


	/*/
	keys.forEach( templateKey => {
		var val = null;
		if( object[ templateKey ] instanceof Object ) val = JSON.stringify( object[ templateKey ] );
		else val = object[ templateKey ];

		//replaceAll;
		str = str.split( `<!=${templateKey}=!>` ).join( val );
	});
	/*/
	keys.forEach( function( templateKey ) {
		var val = null;
		var template = object[ templateKey ];
		if( "object" == typeof( template ) ) val = JSON.stringify( template );
		else val = template;

		//replaceAll;
		str = str.split( `<!=${templateKey}=!>` ).join( val );
	});
	//*/

	return str;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__brandPortal/b2link/util/global.b2link.util.getDBJSAndReplace";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * DBJS 파일을 가져오고 필요한 변수를 replace 하여 사용가능한 쿼리문을 리턴한다.
 * 최종 쿼리는 동일 Path 에 .query 확장자로 저장된다.
 * 
 * @function
 * @param {Object} 쿼리에서 교체할 대상
 * @param {String} DBJS 경로
 * @return {String}
 * @example
 * <code>
 	"3003"
 * </code>
 */
global.b2link.util.getDBJSAndReplace = function( param, file ) {

	let replaceAll = function( str, org, dest ) {
	    return str.split(org).join(dest);
	};

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - chat data 조회 쿼리;
	let _query = global.b2link.fs.getDBJS__require( `${file}.dbjs` );

	// 변수 replace;
	let query = _query;
	for ( let key in param ) {
		query = replaceAll( query, `<!=${key}=!>`, param[ key ] );
	}

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( `${file}.query`, query );

	return query;
}

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
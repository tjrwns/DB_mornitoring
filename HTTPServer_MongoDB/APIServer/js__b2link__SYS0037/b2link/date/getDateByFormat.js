//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/getDateByFormat";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link.date.getDateByFormat = ( format, d, when ) => {

    when = when | 0;
    var date = global.b2link.date.getDateString( d, when );

    switch ( format ) {
        case "YYYY-MM-DD HH:MM:SS":
            return date;
        case "YYYY-MM-DD":
            return date.substr( 0, 10 );
        case "YYYYMMDD":
            return date.substr( 0, 10 ).replace( /-/gi, "" );
        case "YYYYMMDD_HHMMSS":
            return date.replace( /-/gi, "" ).replace( /:/gi, "" ).replace( " ", "_" );
        default: // "YYYYMMDD"
            return date.substr( 0, 10 );
    }
};
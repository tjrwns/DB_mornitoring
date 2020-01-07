//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/getDateString";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Get date string from date string
 * Must be the right date string format for Date object
 * YYYY-MM-DD or YYYY-MM-DD HH:MM:SS
 *
 * d : date string
 * when : days to calculate
 *
 * return : YYYY-MM-DD HH:MM:SS
 */
global.b2link.date.getDateString = ( d, when ) => {

	let date;
    if ( d ) {
        date = new Date( d );
    } else {
        date = new Date();
    }

    if ( when && !isNaN( when ) ) {
        date = new Date( date.setDate( date.getDate() + ( when ) ) );
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    	month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
        day = day < 10 ? `0${day}` : day;
    let hours = date.getHours();
        hours = hours < 10 ? `0${hours}` : hours;
    let minutes = date.getMinutes();
        minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = date.getSeconds();
        seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
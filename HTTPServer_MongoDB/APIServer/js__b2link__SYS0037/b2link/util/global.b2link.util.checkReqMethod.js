//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.util.checkReqMethod.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link.util.checkReqMethod = function (req, res, requiredMethods) {
    if(!requiredMethods.includes(req.method)){
        console.log("Wrong method called");
        global.b2link.response.send_405(req, res);
        return false;
    }
    return true;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
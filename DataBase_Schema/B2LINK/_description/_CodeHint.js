

//----------------------------------------------------------------------------------------------------;

//	administrator.administrator_brand_regist_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 		_id : 1
 * 		, _id$member_public : 1
 * 		, items : [item1, item2, ... ]
 * 		, date_create : [2017,2,14,0,0,0]
 * }
 * </code>
 */
var administrator_brand_regist_req$addDoc = function( d ){};

/**
 * administrator_brand_regist_req Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var administrator_brand_regist_req$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var administrator_brand_regist_req$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {administrator_brand_regist_req}, {administrator_brand_regist_req}, ... ]
 */

var administrator_brand_regist_req$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var administrator_brand_regist_req$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { administrator_brand_regist_req }, { administrator_brand_regist_req }, ... ]
 */

var administrator_brand_regist_req$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var administrator_brand_regist_req$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var administrator_brand_regist_req$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "item_idx" : 0
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var administrator_brand_regist_req$updateRegistCheck = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, _id$member_public : 0
 *	, items : [
 *		{ _id$brand_basic : 0, nm : "brand", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *		, { _id$brand_basic : 0, nm : "brand", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *	]
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var administrator_brand_regist_req$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *		{ _id$brand_basic : 0, nm : "brand", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *		, { _id$brand_basic : 0, nm : "brand", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *	]
 * </code>
 * @return {Object}
 */
var administrator_brand_regist_req$validation__addDoc__items = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var administrator_brand_regist_req$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "item_idx" : 1
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var administrator_brand_regist_req$validation__updateRegistCheck = function( d ){};

/**
 * @function
 * @param {Document} d
 */
var administrator_brand_regist_req$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var administrator_brand_regist_req$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { administrator_brand_regist_req }, { administrator_brand_regist_req }, ... ]
 */

var administrator_brand_regist_req$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { administrator_brand_regist_req }, { administrator_brand_regist_req }, ... ]
 */

var administrator_brand_regist_req$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var administrator_brand_regist_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	administrator.administrator_product_regist_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 		_id : 1
 * 		, _id$member_public : 1
 * 		, items : [item1, item2, ... ]
 * 		, date_create : [2017,2,14,0,0,0]
 * }
 * </code>
 */
var administrator_product_regist_req$addDoc = function( d ){};

/**
 * administrator_product_regist_req Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var administrator_product_regist_req$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var administrator_product_regist_req$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {administrator_product_regist_req}, {administrator_product_regist_req}, ... ]
 */

var administrator_product_regist_req$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var administrator_product_regist_req$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { administrator_product_regist_req }, { administrator_product_regist_req }, ... ]
 */

var administrator_product_regist_req$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var administrator_product_regist_req$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var administrator_product_regist_req$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "item_idx" : 0
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var administrator_product_regist_req$updateRegistCheck = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, _id$member_public : 0
 *	, items : [
 *		{ _id$brand_basic : 0, nm : "product", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *		, { _id$brand_basic : 0, nm : "product", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *	]
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var administrator_product_regist_req$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *		{ _id$brand_basic : 0, nm : "product", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *		, { _id$brand_basic : 0, nm : "product", "ref_url" : "www.google.com", "ref_file_img" : "/aaa/bbb/img.jpg", "memo" : "memo" }
 *	]
 * </code>
 * @return {Object}
 */
var administrator_product_regist_req$validation__addDoc__items = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var administrator_product_regist_req$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "item_idx" : 1
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var administrator_product_regist_req$validation__updateRegistCheck = function( d ){};

/**
 * @function
 * @param {Document} d
 */
var administrator_product_regist_req$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var administrator_product_regist_req$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { administrator_product_regist_req }, { administrator_product_regist_req }, ... ]
 */

var administrator_product_regist_req$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { administrator_product_regist_req }, { administrator_product_regist_req }, ... ]
 */

var administrator_product_regist_req$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var administrator_product_regist_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	administrator._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_col;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_col$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_col$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_col$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_col$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_col$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_col$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_col$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_col$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_col$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_col$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_col_c;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_col_c$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_col_c$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_col_c$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_c$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_c$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_col_c$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_c$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_c$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_c$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_col_c$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_col_c$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_c$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_c$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_col_c$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_col_c$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_col_c$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_col_c$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_col_d;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_col_d$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_col_d$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_col_d$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_d$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_d$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_col_d$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_d$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_d$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_d$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_col_d$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_col_d$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_d$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_d$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_col_d$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_col_d$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_col_d$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_col_d$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_col_r;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_col_r$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_col_r$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_col_r$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_r$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_r$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_col_r$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_r$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_r$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_r$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_col_r$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_col_r$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_r$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_r$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_col_r$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_col_r$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_col_r$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_col_r$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_col_u;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_col_u$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_col_u$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_col_u$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_u$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_col_u$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_col_u$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_u$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_u$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_col_u$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_col_u$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_col_u$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_u$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_col_u$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_col_u$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_col_u$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_col_u$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_col_u$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_db;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_db$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_db$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_db$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_db$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_db$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_db$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_db$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_db$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_db$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_db$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_db_c;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_db_c$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_db_c$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_db_c$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_c$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_c$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_db_c$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_c$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_c$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_c$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_db_c$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_db_c$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_c$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_c$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_db_c$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_db_c$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_db_c$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_db_c$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_db_d;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_db_d$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_db_d$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_db_d$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_d$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_d$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_db_d$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_d$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_d$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_d$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_db_d$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_db_d$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_d$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_d$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_db_d$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_db_d$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_db_d$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_db_d$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_db_r;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_db_r$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_db_r$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_db_r$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_r$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_r$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_db_r$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_r$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_r$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_r$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_db_r$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_db_r$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_r$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_r$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_db_r$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_db_r$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_db_r$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_db_r$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority.auth_db_u;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var auth_db_u$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var auth_db_u$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var auth_db_u$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_u$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var auth_db_u$getAllList_basic = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var auth_db_u$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_u$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_u$update_id = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var auth_db_u$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var auth_db_u$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var auth_db_u$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_u$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var auth_db_u$validation__update_ids = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var auth_db_u$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var auth_db_u$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var auth_db_u$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */

var auth_db_u$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	authority._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	brand.brand_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : [ y, m, d, ho, mi, se ]
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * <code>
 * brand$addDoc({
 *
 *	, "description" : ""
 *
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * });
 * </code>
 */
var brand_basic$addDoc = function( d ){};

/**
 * brand_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *	, "url" : "http://paparecipe.com/"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var brand_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var brand_basic$findOne = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var brand_basic$findOne0 = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$findOneById = function( d ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$getAllList = function(){};

/**
 * @return 'CN' brand name list
 * @function
 * @return {Array} [ {nm_cn}, {nm_cn}, ... ]
 */

var brand_basic$getAllList_basic = function(){};

/**
 * @return 'KR' brand name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */

var brand_basic$getAllList_nm_cn = function(){};

/**
 * @return 'US' brand name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */

var brand_basic$getAllList_nm_kr = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$getAllList_nm_us = function(){};

/**
 * id (_id) 로 브랜드의 이름을 가져 온다.
 * @function
 * @param {uint} id brand id
 * @return {String}
 */

var brand_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$getProp_NameFrom_id = function( id ){};

/**
 * @return 'status == 1' brand name list
 * @function
 * @return {Array} [ {brand_basic}, {brand_basic}, ... ]
 */

var brand_basic$getSearchList = function( d ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var brand_basic$getValidList = function ( ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var brand_basic$remove_id = function( _id ){};

/**
 * @function
 * @param
 * _id : number
 * _id$member_public : number
 * date_update : array
 * alias : string
 * nm_cn :string
 * nm_kr :string
 * nm_us :string
 * description_cn : string
 * description_kr : string
 * description_us : string
 * url : string
 * url_logo : string
 * cd$country : string
 * @return {uint} _id
 */
var brand_basic$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$update_detail = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var brand_basic$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 *
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 *
 *	, "nm" : "파파레서피"
 *	, "nm_kr" : "파파레서피"
 *	, "nm_cn" : "爸爸的礼物"
 *	, "nm_us" : "papa recipe"
 *
 *	, "date_regist" : ""
 *	, "nm_register" : ""
 *
 *	, "url" : "http://paparecipe.com/"
 *	, "url_logo" : ""
 *	, "url_trademark" : ""
 * }
 * </code>
 * @return {Object}
 */

var brand_basic$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */

var brand_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d
 * @return {Object} r
 */

var brand_basic$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$validation__update_detail = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var brand_basic$validation__update_id = function(){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var brand_basic$validation__update_ids = function(){};

/**
 * @function
 * @return {Array}
 */

var brand_basic$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { brand_basic }, { brand_basic }, ... ]
 */
var brand_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Collection}
 */

var brand_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Array}
 */

var brand_basic$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	brand._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_delivery_status;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "상품 준비중"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "상품 준비중"
 *	, "nm_us" : "Prepare Stock"
 *	, "description" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_cn" : ""
 *	, "description_kr" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_us" : "Prepare to Delivery"
 * }
 * </code>
 */

var category_delivery_status$addDoc = function( d ){};

/**
 * category_delivery_status Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "택배"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_delivery_status$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_delivery_status$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_delivery_status}, {category_delivery_status}, ... ]
 */

var category_delivery_status$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var category_delivery_status$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_delivery_status }, { category_delivery_status }, ... ]
 */

var category_delivery_status$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_delivery_status$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_delivery_status$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "상품 준비중"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "상품 준비중"
 *	, "nm_us" : "Prepare Stock"
 *	, "description" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_cn" : ""
 *	, "description_kr" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_us" : "Prepare to Delivery"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_status$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "상품 준비중"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "상품 준비중"
 *	, "nm_us" : "Prepare Stock"
 *	, "description" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_cn" : ""
 *	, "description_kr" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_us" : "Prepare to Delivery"
 * }
 * </code>
 * @return {Object}
 */

var category_delivery_status$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_delivery_status$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "상품 준비중"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "상품 준비중"
 *	, "nm_us" : "Prepare Stock"
 *	, "description" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_cn" : ""
 *	, "description_kr" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_us" : "Prepare to Delivery"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_status$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "상품 준비중"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "상품 준비중"
 *	, "nm_us" : "Prepare Stock"
 *	, "description" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_cn" : ""
 *	, "description_kr" : "상품을 배송하기 위해 준비하는 단계"
 *	, "description_us" : "Prepare to Delivery"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_status$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_delivery_status$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_delivery_status$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_delivery_status }, { category_delivery_status }, ... ]
 */

var category_delivery_status$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_delivery_status }, { category_delivery_status }, ... ]
 */

var category_delivery_status$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_delivery_status$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_delivery_type;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "택배"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "택배"
 *	, "nm_us" : "parcel"
 *	, "description" : "택배"
 *	, "description_cn" : ""
 *	, "description_kr" : "택배"
 *	, "description_us" : "parcel"
 * }
 * </code>
 */

var category_delivery_type$addDoc = function( d ){};

/**
 * category_delivery_type Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "택배"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_delivery_type$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_delivery_type$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_delivery_type}, {category_delivery_type}, ... ]
 */

var category_delivery_type$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var category_delivery_type$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_delivery_type }, { category_delivery_type }, ... ]
 */

var category_delivery_type$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_delivery_type$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_delivery_type$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "택배"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "택배"
 *	, "nm_us" : "parcel"
 *	, "description" : "택배"
 *	, "description_cn" : ""
 *	, "description_kr" : "택배"
 *	, "description_us" : "parcel"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_type$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "택배"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "택배"
 *	, "nm_us" : "parcel"
 *	, "description" : "택배"
 *	, "description_cn" : ""
 *	, "description_kr" : "택배"
 *	, "description_us" : "parcel"
 * }
 * </code>
 * @return {Object}
 */

var category_delivery_type$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_delivery_type$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "택배"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "택배"
 *	, "nm_us" : "parcel"
 *	, "description" : "택배"
 *	, "description_cn" : ""
 *	, "description_kr" : "택배"
 *	, "description_us" : "parcel"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_type$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "택배"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "택배"
 *	, "nm_us" : "parcel"
 *	, "description" : "택배"
 *	, "description_cn" : ""
 *	, "description_kr" : "택배"
 *	, "description_us" : "parcel"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_delivery_type$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_delivery_type$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_delivery_type$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_delivery_type }, { category_delivery_type }, ... ]
 */

var category_delivery_type$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_delivery_type }, { category_delivery_type }, ... ]
 */

var category_delivery_type$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_delivery_type$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_division;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "nm" : ""
 *	, "items" : []
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 */

var category_division$addDoc = function( d ){};

/**
 * category_division Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd_div" : "B2Labs"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_division$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_division$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_division}, {category_division}, ... ]
 */

var category_division$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_division }, { category_division }, ... ]
 */

var category_division$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_division$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_division$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "nm" : ""
 *	, "items" : []
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "nm" : ""
 *	, "items" : []
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {Object}
 */

var category_division$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_division$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "nm" : ""
 *	, "items" : []
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "nm" : ""
 *	, "items" : []
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_division$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_division$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_division }, { category_division }, ... ]
 */

var category_division$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_division }, { category_division }, ... ]
 */

var category_division$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_division$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_division_team;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *   "_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "cd_div_team" : "DEV"
 *	, "nm" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 */

var category_division_team$addDoc = function( d ){};

/**
 * category_division_team Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd_div" : ""
 *	, "cd_div_team" : ""
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_division_team$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_division_team$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_division_team}, {category_division_team}, ... ]
 */

var category_division_team$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_division_team }, { category_division_team }, ... ]
 */

var category_division_team$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_division_team$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_division_team$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *   "_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "cd_div_team" : "DEV"
 *	, "nm" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division_team$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *   "_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "cd_div_team" : "DEV"
 *	, "nm" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {Object}
 */

var category_division_team$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_division_team$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *   "_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "cd_div_team" : "DEV"
 *	, "nm" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division_team$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *   "_id" : 0
 *	, "cd_div" : "B2Labs"
 *	, "cd_div_team" : "DEV"
 *	, "nm" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_division_team$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_division_team$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_division_team$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_division_team }, { category_division_team }, ... ]
 */

var category_division_team$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_division_team }, { category_division_team }, ... ]
 */

var category_division_team$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_division_team$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_inspection_detail_type;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "전수"
 *	, "nm_cn" : "所有"
 *	, "nm_kr" : "전수"
 *	, "nm_us" : "All"
 *	, "description" : "전체물량을 검사한다."
 *	, "description_cn" : "检查整个数量"
 *	, "description_kr" : "전체물량을 검사한다."
 *	, "description_us" : "Check the entire quantity."
 * }
 * </code>
 */

var category_inspection_detail_type$addDoc = function( d ){};

/**
 * category_inspection_detail_type Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "전수"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_inspection_detail_type$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_inspection_detail_type$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_inspection_detail_type}, {category_inspection_detail_type}, ... ]
 */

var category_inspection_detail_type$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_inspection_detail_type }, { category_inspection_detail_type }, ... ]
 */

var category_inspection_detail_type$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_inspection_detail_type$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_inspection_detail_type$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "전수"
 *	, "nm_cn" : "所有"
 *	, "nm_kr" : "전수"
 *	, "nm_us" : "All"
 *	, "description" : "전체물량을 검사한다."
 *	, "description_cn" : "检查整个数量"
 *	, "description_kr" : "전체물량을 검사한다."
 *	, "description_us" : "Check the entire quantity."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_detail_type$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "전수"
 *	, "nm_cn" : "所有"
 *	, "nm_kr" : "전수"
 *	, "nm_us" : "All"
 *	, "description" : "전체물량을 검사한다."
 *	, "description_cn" : "检查整个数量"
 *	, "description_kr" : "전체물량을 검사한다."
 *	, "description_us" : "Check the entire quantity."
 * }
 * </code>
 * @return {Object}
 */

var category_inspection_detail_type$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_inspection_detail_type$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "전수"
 *	, "nm_cn" : "所有"
 *	, "nm_kr" : "전수"
 *	, "nm_us" : "All"
 *	, "description" : "전체물량을 검사한다."
 *	, "description_cn" : "检查整个数量"
 *	, "description_kr" : "전체물량을 검사한다."
 *	, "description_us" : "Check the entire quantity."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_detail_type$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "전수"
 *	, "nm_cn" : "所有"
 *	, "nm_kr" : "전수"
 *	, "nm_us" : "All"
 *	, "description" : "전체물량을 검사한다."
 *	, "description_cn" : "检查整个数量"
 *	, "description_kr" : "전체물량을 검사한다."
 *	, "description_us" : "Check the entire quantity."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_detail_type$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_inspection_detail_type$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_inspection_detail_type$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_inspection_detail_type }, { category_inspection_detail_type }, ... ]
 */

var category_inspection_detail_type$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_inspection_detail_type }, { category_inspection_detail_type }, ... ]
 */

var category_inspection_detail_type$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_inspection_detail_type$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_inspection_type;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 * 	, "nm" : "검수"
 *	, "nm_cn" : "检查"
 *	, "nm_kr" : "검수"
 *	, "nm_us" : "checking quantity"
 *	, "description" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_cn" : "检查"
 *	, "description_kr" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_us" : "checking the quantity"
 * }
 * </code>
 */

var category_inspection_type$addDoc = function( d ){};

/**
 * category_inspection_type Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "검수"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var category_inspection_type$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_inspection_type$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_inspection_type}, {category_inspection_type}, ... ]
 */

var category_inspection_type$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_inspection_type }, { category_inspection_type }, ... ]
 */

var category_inspection_type$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_inspection_type$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_inspection_type$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 * 	, "nm" : "검수"
 *	, "nm_cn" : "检查"
 *	, "nm_kr" : "검수"
 *	, "nm_us" : "checking quantity"
 *	, "description" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_cn" : "检查"
 *	, "description_kr" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_us" : "checking the quantity"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_type$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 * 	, "nm" : "검수"
 *	, "nm_cn" : "检查"
 *	, "nm_kr" : "검수"
 *	, "nm_us" : "checking quantity"
 *	, "description" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_cn" : "检查"
 *	, "description_kr" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_us" : "checking the quantity"
 * }
 * </code>
 * @return {Object}
 */

var category_inspection_type$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_inspection_type$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 * 	, "nm" : "검수"
 *	, "nm_cn" : "检查"
 *	, "nm_kr" : "검수"
 *	, "nm_us" : "checking quantity"
 *	, "description" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_cn" : "检查"
 *	, "description_kr" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_us" : "checking the quantity"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_type$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 * 	, "nm" : "검수"
 *	, "nm_cn" : "检查"
 *	, "nm_kr" : "검수"
 *	, "nm_us" : "checking quantity"
 *	, "description" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_cn" : "检查"
 *	, "description_kr" : "인도된 화물의 수량을 확인하는 작업"
 *	, "description_us" : "checking the quantity"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_inspection_type$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_inspection_type$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_inspection_type$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_inspection_type }, { category_inspection_type }, ... ]
 */

var category_inspection_type$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { \category_inspection_type }, { \category_inspection_type }, ... ]
 */

var category_inspection_type$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_inspection_type$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_packaging_material_unit;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, nm" : "개"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "개"
 *	, "nm_us" : "pcs"
 *	, "description" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_cn" : "可用于替换另一个单元的通用单元"
 *	, "description_kr" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_us" : "A general unit that can be used in place of another unit"
 *	}
 * </code>
 */

var category_packaging_material_unit$addDoc = function( d ){};

/**
 * category_packaging_material_unit Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "개"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_packaging_material_unit$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_packaging_material_unit$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_packaging_material_unit}, {category_packaging_material_unit}, ... ]
 */

var category_packaging_material_unit$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_packaging_material_unit }, { category_packaging_material_unit }, ... ]
 */

var category_packaging_material_unit$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_packaging_material_unit$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_packaging_material_unit$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, nm" : "개"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "개"
 *	, "nm_us" : "pcs"
 *	, "description" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_cn" : "可用于替换另一个单元的通用单元"
 *	, "description_kr" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_us" : "A general unit that can be used in place of another unit"
 *	}
 * </code>
 * @return {uint} 0 or 1
 */

var category_packaging_material_unit$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, nm" : "개"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "개"
 *	, "nm_us" : "pcs"
 *	, "description" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_cn" : "可用于替换另一个单元的通用单元"
 *	, "description_kr" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_us" : "A general unit that can be used in place of another unit"
 *	}
 * </code>
 * @return {uint} 0, 1
 */
var category_packaging_material_unit$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_packaging_material_unit$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, nm" : "개"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "개"
 *	, "nm_us" : "pcs"
 *	, "description" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_cn" : "可用于替换另一个单元的通用单元"
 *	, "description_kr" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_us" : "A general unit that can be used in place of another unit"
 *	}
 * </code>
 * @return {uint} 0 or 1
 */

var category_packaging_material_unit$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, nm" : "개"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "개"
 *	, "nm_us" : "pcs"
 *	, "description" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_cn" : "可用于替换另一个单元的通用单元"
 *	, "description_kr" : "어떤 것을 세는 단위로 다른 단위 대신 쓸 수 있는 범용적 단위"
 *	, "description_us" : "A general unit that can be used in place of another unit"
 *	}
 * </code>
 * @return {uint} 0 or 1
 */

var category_packaging_material_unit$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_packaging_material_unit$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_packaging_material_unit$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_packaging_material_unit }, { category_packaging_material_unit }, ... ]
 */
var category_packaging_material_unit$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_packaging_material_unit }, { category_packaging_material_unit }, ... ]
 */
var category_packaging_material_unit$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_packaging_material_unit$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_partner;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 */
var category_partner$addDoc = function( d ){};

/**
 * category_partner_buyer Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : "112233445566"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var category_partner$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_partner$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_partner_buyer}, {category_partner_buyer}, ... ]
 */

var category_partner$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_partner$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_partner$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 *
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {Object}
 */
var category_partner$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_partner$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner$validation__update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var category_partner$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_partner$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_partner$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_partner$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_partner_buyer;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 */
var category_partner_buyer$addDoc = function( d ){};

/**
 * category_partner_buyer Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : "112233445566"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var category_partner_buyer$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_partner_buyer$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_partner_buyer}, {category_partner_buyer}, ... ]
 */

var category_partner_buyer$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner_buyer$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_partner_buyer$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_partner_buyer$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_buyer$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 *
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {Object}
 */
var category_partner_buyer$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_partner_buyer$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"cd" : "012345678901"
 *	, "description" : "이커머스"
 *	, "description_cn" : "이커머스"
 *	, "description_kr" : "이커머스"
 *	, "description_us" : "e-commerce"
 *	, "nm" : "이커머스"
 *	, "nm_kr" : "이커머스"
 *	, "nm_cn" : "이커머스"
 *	, "nm_us" : "e-commerce"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_buyer$validation__update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var category_partner_buyer$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_partner_buyer$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_partner_buyer$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner_buyer$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_partner_buyer }, { category_partner_buyer }, ... ]
 */

var category_partner_buyer$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_partner_buyer$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_partner_logistics;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "112345678901"
 *	, "description" : "항공사"
 *	, "description_cn" : "항공사"
 *	, "description_kr" : "항공사"
 *	, "description_us" : "항공사"
 *	, "nm" : "항공사"
 *	, "nm_kr" : "항공사"
 *	, "nm_cn" : "항공사"
 *	, "nm_us" : "항공사"
 * }
 * </code>
 */
var category_partner_logistics$addDoc = function( d ){};

/**
 * category_partner_logistics Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : "112233445566"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var category_partner_logistics$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_partner_logistics$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_partner_logistics}, {category_partner_logistics}, ... ]
 */

var category_partner_logistics$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_logistics }, { category_partner_logistics }, ... ]
 */

var category_partner_logistics$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_partner_logistics$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_partner_logistics$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "012345678901"
 *	, "description" : "항공사"
 *	, "description_cn" : "항공사"
 *	, "description_kr" : "항공사"
 *	, "description_us" : "항공사"
 *	, "nm" : "항공사"
 *	, "nm_kr" : "항공사"
 *	, "nm_cn" : "항공사"
 *	, "nm_us" : "항공사"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_logistics$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "112345678901"
 *	, "description" : "항공사"
 *	, "description_cn" : "항공사"
 *	, "description_kr" : "항공사"
 *	, "description_us" : "항공사"
 *	, "nm" : "항공사"
 *	, "nm_kr" : "항공사"
 *	, "nm_cn" : "항공사"
 *	, "nm_us" : "항공사"
 * }
 * </code>
 * @return {Object}
 */
var category_partner_logistics$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_partner_logistics$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"cd" : "112345678901"
 *	, "description" : "항공사"
 *	, "description_cn" : "항공사"
 *	, "description_kr" : "항공사"
 *	, "description_us" : "항공사"
 *	, "nm" : "항공사"
 *	, "nm_kr" : "항공사"
 *	, "nm_cn" : "항공사"
 *	, "nm_us" : "항공사"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_logistics$validation__update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var category_partner_logistics$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_partner_logistics$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_partner_logistics$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_logistics }, { category_partner_logistics }, ... ]
 */

var category_partner_logistics$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_partner_logistics }, { category_partner_logistics }, ... ]
 */

var category_partner_logistics$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_partner_logistics$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_partner_supplier;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "112345678901"
 *	, "description" : "항공사"
 *	, "description_cn" : "항공사"
 *	, "description_kr" : "항공사"
 *	, "description_us" : "항공사"
 *	, "nm" : "항공사"
 *	, "nm_kr" : "항공사"
 *	, "nm_cn" : "항공사"
 *	, "nm_us" : "항공사"
 * }
 * </code>
 */
var category_partner_supplier$addDoc = function( d ){};

/**
 * category_partner_supplier Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : "112233445566"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var category_partner_supplier$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_partner_supplier$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_partner_supplier}, {category_partner_supplier}, ... ]
 */

var category_partner_supplier$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_supplier }, { category_partner_supplier }, ... ]
 */

var category_partner_supplier$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_partner_supplier$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_partner_supplier$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "012345678901"
 *	, "description" : "재조판매업자"
 *	, "description_cn" : "재조판매업자"
 *	, "description_kr" : "재조판매업자"
 *	, "description_us" : "재조판매업자"
 *	, "nm" : "재조판매업자"
 *	, "nm_kr" : "재조판매업자"
 *	, "nm_cn" : "재조판매업자"
 *	, "nm_us" : "재조판매업자"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_supplier$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "112345678901"
 *	, "description" : "재조판매업자"
 *	, "description_cn" : "재조판매업자"
 *	, "description_kr" : "재조판매업자"
 *	, "description_us" : "재조판매업자"
 *	, "nm" : "재조판매업자"
 *	, "nm_kr" : "재조판매업자"
 *	, "nm_cn" : "재조판매업자"
 *	, "nm_us" : "재조판매업자"
 * }
 * </code>
 * @return {Object}
 */
var category_partner_supplier$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_partner_supplier$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0

 *	, "cd" : "112345678901"

 *	, "description" : "재조판매업자"
 *	, "description_cn" : "재조판매업자"
 *	, "description_kr" : "재조판매업자"
 *	, "description_us" : "재조판매업자"

 *	, "nm" : "재조판매업자"
 *	, "nm_kr" : "재조판매업자"
 *	, "nm_cn" : "재조판매업자"
 *	, "nm_us" : "재조판매업자"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_partner_supplier$validation__update_id = function( d ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var category_partner_supplier$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_partner_supplier$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_partner_supplier$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_partner_supplier }, { category_partner_supplier }, ... ]
 */

var category_partner_supplier$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_partner_supplier }, { category_partner_supplier }, ... ]
 */

var category_partner_supplier$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_partner_supplier$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_product;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 * 	, "description" : "화장품"
 *	, "description_cn" : "화장품"
 *	, "description_kr" : "화장품"
 *	, "description_us" : "cosmetic"
 *	, "nm" : "화장품", "nm_kr" : "화장품", "nm_cn" : "화장품", "nm_us" : "cosmetic"
 * }
 * </code>
 */
var category_product$addDoc = function( d ){};

/**
 * category_product Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : "112233445566"
 * }
 * </code>
 * @return {int} 0 or 1
 */
var category_product$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_product$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_product}, {category_product}, ... ]
 */

var category_product$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_product }, { category_product }, ... ]
 */

var category_product$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_product$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_product$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "223456789012"
 *	, "description" : "화장품"
 *	, "description_kr" : "화장품"
 *	, "description_cn" : "화장품"
 *	, "description_us" : "화장품"
 *	, "nm" : "화장품"
 *	, "nm_kr" : "화장품"
 *	, "nm_cn" : "화장품""
 *	, "nm_us" : "cosmetic
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_product$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd" : "012345678901"
 * 	, "description" : "화장품"
 *	, "description_cn" : "화장품"
 *	, "description_kr" : "화장품"
 *	, "description_us" : "cosmetic"
 *	, "nm" : "화장품", "nm_kr" : "화장품", "nm_cn" : "화장품", "nm_us" : "cosmetic"
 * }
 * </code>
 * @return {Object}
 */
var category_product$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_product$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "223456789012"
 *	, "description" : "화장품"
 *	, "description_kr" : "화장품"
 *	, "description_cn" : "화장품"
 *	, "description_us" : "화장품"
 *	, "nm" : "화장품"
 *	, "nm_kr" : "화장품"
 *	, "nm_cn" : "화장품""
 *	, "nm_us" : "cosmetic
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_product$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var category_product$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var category_product$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_product$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_product }, { category_product }, ... ]
 */

var category_product$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_product }, { category_product }, ... ]
 */

var category_product$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_product$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_purchase_reason;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	,"nm" : "샘플"
 *	, "nm_cn" : "Sample"
 *	, "nm_kr" : "샘플"
 *	, "nm_us" : "Sample"
 *	, "description" : "상품을 샘플용도로 구매함"
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 */
var category_purchase_reason$addDoc = function( d ){};

/**
 * category_purchase_reason Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "샘플"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_purchase_reason$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_purchase_reason$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_purchase_reason}, {category_purchase_reason}, ... ]
 */

var category_purchase_reason$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var category_purchase_reason$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_purchase_reason }, { category_purchase_reason }, ... ]
 */

var category_purchase_reason$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_purchase_reason$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_purchase_reason$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "샘플"
 *	, "nm_cn" : "샘플"
 *	, "nm_kr" : "샘플"
 *	, "nm_us" : "Sampel"
 *	, "description" : "상품을 샘플 용도로 구매함."
 *	, "description_cn" : "상품을 샘플 용도로 구매함."
 *	, "description_kr" : "상품을 샘플 용도로 구매함."
 *	, "description_us" : "상품을 샘플 용도로 구매함."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_purchase_reason$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "샘플"
 *	, "nm_cn" : "샘플"
 *	, "nm_kr" : "샘플"
 *	, "nm_us" : "Sampel"
 *	, "description" : "상품을 샘플 용도로 구매함."
 *	, "description_cn" : "상품을 샘플 용도로 구매함."
 *	, "description_kr" : "상품을 샘플 용도로 구매함."
 *	, "description_us" : "상품을 샘플 용도로 구매함."
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_purchase_reason$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_purchase_reason$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "샘플"
 *	, "nm_cn" : "샘플"
 *	, "nm_kr" : "샘플"
 *	, "nm_us" : "Sampel"
 *	, "description" : "상품을 샘플 용도로 구매함."
 *	, "description_cn" : "상품을 샘플 용도로 구매함."
 *	, "description_kr" : "상품을 샘플 용도로 구매함."
 *	, "description_us" : "상품을 샘플 용도로 구매함."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_purchase_reason$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "샘플"
 *	, "nm_cn" : "샘플"
 *	, "nm_kr" : "샘플"
 *	, "nm_us" : "Sampel"
 *	, "description" : "상품을 샘플 용도로 구매함."
 *	, "description_cn" : "상품을 샘플 용도로 구매함."
 *	, "description_kr" : "상품을 샘플 용도로 구매함."
 *	, "description_us" : "상품을 샘플 용도로 구매함."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_purchase_reason$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_purchase_reason$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_purchase_reason$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_purchase_reason }, { category_purchase_reason }, ... ]
 */

var category_purchase_reason$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_purchase_reason }, { category_purchase_reason }, ... ]
 */

var category_purchase_reason$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_purchase_reason$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_release_operation_packaging_material;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 */
var category_release_operation_packaging_material$addDoc = function( d ){};

/**
 * category_release_operation_packaging_material Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "name"
 *	,"cd" : "123456789012"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_packaging_material$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_release_operation_packaging_material$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_release_operation_packaging_material}, {category_release_operation_packaging_material}, ... ]
 */

var category_release_operation_packaging_material$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_packaging_material }, { category_release_operation_packaging_material }, ... ]
 */

var category_release_operation_packaging_material$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_release_operation_packaging_material$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_release_operation_packaging_material$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : ""
 *	, "nm_cn" : ""
 *	, "nm_kr" : ""
 *	, "nm_us" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_packaging_material$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "description" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_packaging_material$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_release_operation_packaging_material$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_packaging_material$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_packaging_material$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_release_operation_packaging_material$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_release_operation_packaging_material$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_packaging_material }, { category_release_operation_packaging_material }, ... ]
 */

var category_release_operation_packaging_material$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_release_operation_packaging_material }, { category_release_operation_packaging_material }, ... ]
 */

var category_release_operation_packaging_material$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_release_operation_packaging_material$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_release_operation_range;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 */
var category_release_operation_range$addDoc = function( d ){};

/**
 * category_release_operation_range Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "name"
 *	,"cd" : "123456789012"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_range$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_release_operation_range$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_release_operation_range}, {category_release_operation_range}, ... ]
 */

var category_release_operation_range$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_range }, { category_release_operation_range }, ... ]
 */

var category_release_operation_range$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_release_operation_range$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_release_operation_range$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : ""
 *	, "nm_cn" : ""
 *	, "nm_kr" : ""
 *	, "nm_us" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_range$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "description" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_range$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_release_operation_range$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_range$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_range$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_release_operation_range$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_release_operation_range$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_range }, { category_release_operation_range }, ... ]
 */

var category_release_operation_range$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_release_operation_range }, { category_release_operation_range }, ... ]
 */

var category_release_operation_range$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_release_operation_range$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_release_operation_type;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 */
var category_release_operation_type$addDoc = function( d ){};

/**
 * category_release_operation_type Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "name"
 *	,"cd" : "123456789012"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_type$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_release_operation_type$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_release_operation_type}, {category_release_operation_type}, ... ]
 */

var category_release_operation_type$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_type }, { category_release_operation_type }, ... ]
 */

var category_release_operation_type$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_release_operation_type$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_release_operation_type$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : ""
 *	, "nm_cn" : ""
 *	, "nm_kr" : ""
 *	, "nm_us" : ""
 *	, "description" : ""
 *	, "description_cn" : ""
 *	, "description_kr" : ""
 *	, "description_us" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_type$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "description" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_release_operation_type$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_release_operation_type$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_type$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "cd" : "123456789012"
 *	, "nm" : "BOX"
 *	, "nm_cn" : "BOX"
 *	, "nm_kr" : "BOX"
 *	, "nm_us" : "BOX"
 *	, "description" : "BOX"
 *	, "description_cn" : "BOX"
 *	, "description_kr" : "BOX"
 *	, "description_us" : "BOX"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_release_operation_type$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_release_operation_type$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_release_operation_type$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_release_operation_type }, { category_release_operation_type }, ... ]
 */

var category_release_operation_type$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_release_operation_type }, { category_release_operation_type }, ... ]
 */

var category_release_operation_type$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_release_operation_type$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category.category_transaction_result;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	,"nm" : "정상완료"
 *	, "nm_cn" : "Complete"
 *	, "nm_kr" : "정상완료"
 *	, "nm_us" : "Complete"
 *	, "description" : "거래가 정상적으로 완료됨"
 *	, "description_cn" : "Complete"
 *	, "description_kr" : "거래가 정상적으로 완료됨"
 *	, "description_us" : "Complete"
 * }
 * </code>
 */
var category_transaction_result$addDoc = function( d ){};

/**
 * category_transaction_result Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "정상완료"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_transaction_result$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var category_transaction_result$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {category_transaction_result}, {category_transaction_result}, ... ]
 */

var category_transaction_result$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_transaction_result }, { category_transaction_result }, ... ]
 */

var category_transaction_result$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var category_transaction_result$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var category_transaction_result$remove_ids = function( ids ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "정상완료"
 *	, "nm_cn" : "Complete"
 *	, "nm_kr" : "정상완료"
 *	, "nm_us" : "Complete"
 *	, "description" : "거래가 정상적으로 완료됨"
 *	, "description_cn" : "Complete"
 *	, "description_kr" : "거래가 정상적으로 완료됨"
 *	, "description_us" : "Complete"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_transaction_result$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "정상완료"
 *	, "nm_cn" : "Complete"
 *	, "nm_kr" : "정상완료"
 *	, "nm_us" : "Complete"
 *	, "description" : "거래가 정상적으로 완료됨"
 *	, "description_cn" : "Complete"
 *	, "description_kr" : "거래가 정상적으로 완료됨"
 *	, "description_us" : "Complete"
 * }
 * </code>
 * @return {uint} 0 or 1
 */
var category_transaction_result$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var category_transaction_result$validation__remove_id = function( n ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "정상완료"
 *	, "nm_cn" : "Complete"
 *	, "nm_kr" : "정상완료"
 *	, "nm_us" : "Complete"
 *	, "description" : "거래가 정상적으로 완료됨"
 *	, "description_cn" : "Complete"
 *	, "description_kr" : "거래가 정상적으로 완료됨"
 *	, "description_us" : "Complete"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_transaction_result$validation__update_id = function( d ){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "정상완료"
 *	, "nm_cn" : "Complete"
 *	, "nm_kr" : "정상완료"
 *	, "nm_us" : "Complete"
 *	, "description" : "거래가 정상적으로 완료됨"
 *	, "description_cn" : "Complete"
 *	, "description_kr" : "거래가 정상적으로 완료됨"
 *	, "description_us" : "Complete"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var category_transaction_result$validation__update_ids = function(){};

/**
 * @function
 * @param {Document} d
 */
var category_transaction_result$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var category_transaction_result$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { category_transaction_result }, { category_transaction_result }, ... ]
 */

var category_transaction_result$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { category_transaction_result }, { category_transaction_result }, ... ]
 */

var category_transaction_result$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var category_transaction_result$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	category._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	company.company_info_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "_id$member_public" : 0
 *	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 *	, "email" : "123456@b2link.co.kr"
 *	, "nm" : "(주)비투링크"
 *	, "nm_cn" : "(주)비투링크"
 *	, "nm_kr" : "(주)비투링크"
 *	, "nm_us" : "(주)비투링크"
 *	, "nm_ceo" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_us" : { "a" : "이소형", "f" : "소형", "l" : "이", "m" : ""}
 *	, "phone_fax" : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, "phone_tel" : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, "url" : "www.b2link.co.kr"
 *	, "address" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_cn" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_kr" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_us" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "company_registration_number " : "1234586789"
 *	, "mail_order_registration_number " : "1234586789"
 * }
 * </code>
 */
var company_info_basic$addDoc = function( d ){};

/**
 * company_info_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : d.nm
 * }
 * </code>
 * @return {int} 0 or 1
 */

var company_info_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var company_info_basic$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {company_info_basic}, {company_info_basic}, ... ]
 */

var company_info_basic$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { company_info_basic }, { company_info_basic }, ... ]
 */

var company_info_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var company_info_basic$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var company_info_basic$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "_id$member_public" : 0
 *	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 *	, "email" : "123456@b2link.co.kr"
 *	, "nm" : "(주)비투링크"
 *	, "nm_cn" : "(주)비투링크"
 *	, "nm_kr" : "(주)비투링크"
 *	, "nm_us" : "(주)비투링크"
 *	, "nm_ceo" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_ceo_us" : { "a" : "이소형", "f" : "소형", "l" : "이", "m" : ""}
 *	, "phone_fax" : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, "phone_tel" : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, "url" : "www.b2link.co.kr"
 *	, "address" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_cn" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_kr" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "address_us" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, "company_registration_number " : "1234586789"
 *	, "mail_order_registration_number " : "1234586789"
 * }
 * </code>
 * @return {Object}
 */
var company_info_basic$update_id = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var company_info_basic$update_ids = function( d ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var company_info_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var company_info_basic$validation__remove_id = function( n ){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var company_info_basic$validation__update_id = function(){};

/**
 * @function
 * @return {Array}
 */

var company_info_basic$validation__update_ids = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { company_info_basic }, { company_info_basic }, ... ]
 */

var company_info_basic$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { company_info_basic }, { company_info_basic }, ... ]
 */

var company_info_basic$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var company_info_basic$_findRange = function( _id_gt, _id_lt ){};

//----------------------------------------------------------------------------------------------------;

//	information._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.bank_swift_cn;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"nm" : "中国銀行", "nm_kr" : "중국은행", "nm_cn" : "中国銀行", "nm_us" : "BANK OF CHINA", "city" : "BEIJING", "branch" : "(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)", "cd_swift" : "BKCHCNBJBPS"}
 * @return {uint} 0 or 1
 *
 * @example
 * bank_swift_cn$addDoc( {"nm" : "中国銀行", "nm_kr" : "중국은행", "nm_cn" : "中国銀行", "nm_us" : "BANK OF CHINA", "city" : "BEIJING", "branch" : "(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)", "cd_swift" : "BKCHCNBJBPS"} );
 */

var bank_swift_cn$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"nm" : "中国銀行", "nm_kr" : "중국은행", "nm_cn" : "中国銀行", "nm_us" : "BANK OF CHINA", "city" : "BEIJING", "branch" : "(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)", "cd_swift" : "BKCHCNBJBPS"}
 * @return {int} 0 or 1
 */
var bank_swift_cn$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var bank_swift_cn$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { bank_swift_cn }, { bank_swift_cn }, ... ]
 */
var bank_swift_cn$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var bank_swift_cn$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_cn }, { bank_swift_cn }, ... ]
 */
var bank_swift_cn$getCountByText = function(d){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var bank_swift_cn$getList_For_Paging = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var bank_swift_cn$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} bank_swift_cn
 * @return {uint} 0 or 1
 */

var bank_swift_cn$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d [ {bank_swift_cn}, {bank_swift_cn}, ... ]
 * @return {uint} 0 or 1
 */

var bank_swift_cn$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {"nm" : "中国銀行", "nm_kr" : "중국은행", "nm_cn" : "中国銀行", "nm_us" : "BANK OF CHINA", "city" : "BEIJING", "branch" : "(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)", "cd_swift" : "BKCHCNBJBPS"}
 * @return {Object}
 */
var bank_swift_cn$update_id = function( d ){};

/**
 * @function
 * @param {Object} d {"nm" : "中国銀行", "nm_kr" : "중국은행", "nm_cn" : "中国銀行", "nm_us" : "BANK OF CHINA", "city" : "BEIJING", "branch" : "(BANK OF CHINA HEAD OFFICE BATCH PAYMENT SERVICE)", "cd_swift" : "BKCHCNBJBPS"}
 * @return {Object}
 */
var bank_swift_cn$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var bank_swift_cn$validation__addDoc = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var bank_swift_cn$validation__Document = function( d ){};

/**
 * @function
 * @return {Array}
 */
var bank_swift_cn$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_cn }, { bank_swift_cn }, ... ]
 */
var bank_swift_cn$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { bank_swift_cn }, { bank_swift_cn }, ... ]
 */
var bank_swift_cn$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var bank_swift_cn$_findByText = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	list_static.bank_swift_kr;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"nm" : "국민은행", "nm_kr" : "국민은행", "nm_cn" : "國民銀行", "nm_us" : "KookMin Bank", "city" : "SEOUL", "branch" : "", "cd_swift" : "CZNBKRSE"}
 * @return {uint} 0 or 1
 *
 * @example
 * bank_swift_kr$addDoc( {"nm" : "국민은행", "nm_kr" : "국민은행", "nm_cn" : "國民銀行", "nm_us" : "KookMin Bank", "city" : "SEOUL", "branch" : "", "cd_swift" : "CZNBKRSE"} );
 */

var bank_swift_kr$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"nm" : "국민은행", "nm_kr" : "국민은행", "nm_cn" : "國民銀行", "nm_us" : "KookMin Bank", "city" : "SEOUL", "branch" : "", "cd_swift" : "CZNBKRSE"}
 * @return {int} 0 or 1
 */
var bank_swift_kr$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var bank_swift_kr$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { bank_swift_kr }, { bank_swift_kr }, ... ]
 */
var bank_swift_kr$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var bank_swift_kr$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_kr }, { bank_swift_kr }, ... ]
 */
var bank_swift_kr$getCountByText = function(d){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var bank_swift_kr$getList_For_Paging = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var bank_swift_kr$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} bank_swift_kr
 * @return {uint} 0 or 1
 */

var bank_swift_kr$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d [ {bank_swift_kr}, {bank_swift_kr}, ... ]
 * @return {uint} 0 or 1
 */

var bank_swift_kr$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {"nm" : "국민은행", "nm_kr" : "국민은행", "nm_cn" : "國民銀行", "nm_us" : "KookMin Bank", "city" : "SEOUL", "branch" : "", "cd_swift" : "CZNBKRSE"}
 * @return {Object}
 */
var bank_swift_kr$update_id = function( d ){};

/**
 * @function
 * @param {Object} d {"nm" : "국민은행", "nm_kr" : "국민은행", "nm_cn" : "國民銀行", "nm_us" : "KookMin Bank", "city" : "SEOUL", "branch" : "", "cd_swift" : "CZNBKRSE"}
 * @return {Object}
 */
var bank_swift_kr$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var bank_swift_kr$validation__addDoc = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var bank_swift_kr$validation__Document = function( d ){};

/**
 * @function
 * @return {Array}
 */
var bank_swift_kr$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_kr }, { bank_swift_kr }, ... ]
 */
var bank_swift_kr$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { bank_swift_kr }, { bank_swift_kr }, ... ]
 */
var bank_swift_kr$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var bank_swift_kr$_findByText = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	list_static.bank_swift_us;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"nm" : "AMERICAN FIRST NATIONAL BANK", "nm_kr" : "AMERICAN FIRST NATIONAL BANK", "nm_cn" : "恆豐銀行", "nm_us" : "AMERICAN FIRST NATIONAL BANK", "city" : "HOUSTON,TX", "branch" : "", "cd_swift" : "AFNBUS4H"}
 * @return {uint} 0 or 1
 *
 * @example
 * bank_swift_us$addDoc( {"nm" : "AMERICAN FIRST NATIONAL BANK", "nm_kr" : "AMERICAN FIRST NATIONAL BANK", "nm_cn" : "恆豐銀行", "nm_us" : "AMERICAN FIRST NATIONAL BANK", "city" : "HOUSTON,TX", "branch" : "", "cd_swift" : "AFNBUS4H"} );
 */

var bank_swift_us$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"nm" : "AMERICAN FIRST NATIONAL BANK", "nm_kr" : "AMERICAN FIRST NATIONAL BANK", "nm_cn" : "恆豐銀行", "nm_us" : "AMERICAN FIRST NATIONAL BANK", "city" : "HOUSTON,TX", "branch" : "", "cd_swift" : "AFNBUS4H"}
 * @return {int} 0 or 1
 */
var bank_swift_us$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var bank_swift_us$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { bank_swift_us }, { bank_swift_us }, ... ]
 */
var bank_swift_us$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var bank_swift_us$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_us }, { bank_swift_us }, ... ]
 */
var bank_swift_us$getCountByText = function(d){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var bank_swift_us$getList_For_Paging = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var bank_swift_us$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} bank_swift_us
 * @return {uint} 0 or 1
 */

var bank_swift_us$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d [ {bank_swift_us}, {bank_swift_us}, ... ]
 * @return {uint} 0 or 1
 */

var bank_swift_us$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {"nm" : "AMERICAN FIRST NATIONAL BANK", "nm_kr" : "AMERICAN FIRST NATIONAL BANK", "nm_cn" : "恆豐銀行", "nm_us" : "AMERICAN FIRST NATIONAL BANK", "city" : "HOUSTON,TX", "branch" : "", "cd_swift" : "AFNBUS4H"}
 * @return {Object}
 */
var bank_swift_us$update_id = function( d ){};

/**
 * @function
 * @param {Object} d {"nm" : "AMERICAN FIRST NATIONAL BANK", "nm_kr" : "AMERICAN FIRST NATIONAL BANK", "nm_cn" : "恆豐銀行", "nm_us" : "AMERICAN FIRST NATIONAL BANK", "city" : "HOUSTON,TX", "branch" : "", "cd_swift" : "AFNBUS4H"}
 * @return {Object}
 */
var bank_swift_us$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var bank_swift_us$validation__addDoc = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var bank_swift_us$validation__Document = function( d ){};

/**
 * @function
 * @return {Array}
 */
var bank_swift_us$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { bank_swift_us }, { bank_swift_us }, ... ]
 */
var bank_swift_us$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { bank_swift_us }, { bank_swift_us }, ... ]
 */
var bank_swift_us$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var bank_swift_us$_findByText = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	list_static.country;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {uint} 0 or 1
 *
 * @example
 * email$addDoc( { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" } );
 */

var country$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {int} 0 or 1
 */
var country$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var country$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var country$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var country$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var country$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var country$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} country
 * @return {uint} 0 or 1
 */

var country$update_id = function( d ){};

/**
 * @function
 * @param {Array} d [ {country}, {country}, ... ]
 * @return {uint} 0 or 1
 */

var country$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__check_Overlap = function( d ){};

/**
 * @function
 * @param {Object} d { "cd_n" : 840, "cd_us2" : "US", "cd_us3" : "USA", "nm_cn" : "", "nm_kr" : "미국", "nm_us" : "America" }
 * @return {Object}
 */
var country$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var country$validation__remove_id = function( n ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var country$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var country$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { country }, { country }, ... ]
 */
var country$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var country$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.currency;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd_n" : 840
 *	, "cd_us3" : "USD"
 *	, "nm_currency" : "United States dollar"
 *	, "e" : 2
 * 	, "locations" : [ 0 ]
 * }
 * </code>
 */

var currency$addDoc = function( d ){};

/**
 * currency Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"company_registration_number" : d.company_registration_number
 * }
 * </code>
 * @return {int} 0 or 1
 */

var currency$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var currency$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {currency}, {currency}, ... ]
 */

var currency$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { currency }, { currency }, ... ]
 */

var currency$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var currency$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var currency$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	cd_n : "840"
 *	, cd_us3 : "USD"
 *	, currency : "United States dollar"
 *	, e : 2
 * 	, locations : [ 0 ]
 * }
 * </code>
 * @return {Object}
 */

var currency$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var currency$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var currency$validation__update_id = function(){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var currency$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var currency$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var currency$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { currency }, { currency }, ... ]
 */

var currency$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { currency }, { currency }, ... ]
 */

var currency$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var currency$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.email;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	list_static.email_detail;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 *
 * @example
 * email$addDoc( { "SLD" : "b2link", "TLD" : "co.kr", "ccTLD" : "kr", "gTLD" : "", "c" : "kr" } );
 */

var email_detail$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object { "SLD" : "b2link", "TLD" : "co.kr", "ccTLD" : "kr", "gTLD" : "", "c" : "kr" }
 * @return {int} 0 or 1
 */
var email_detail$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var email_detail$findOne = function( d ){};

/**
 * @function
 * @param {String} SLD Second Level Domain
 * @return {Document}
 *
 * @example
 * email$findOne__SLD( "naver" );
 */
var email_detail$findOne__SLD = function( SLD ){};

/**
 * @function
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var email_detail$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var email_detail$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} email_detail
 * @return {uint} 0 or 1
 */

var email_detail$update_id = function( d ){};

/**
 * @function
 * @param {Array} d [ {email_detail}, {email_detail}, ... ]
 * @return {uint} 0 or 1
 */

var email_detail$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link", "TLD" : "co.kr", "ccTLD" : "kr", "gTLD" : "", "c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link", "TLD" : "co.kr", "ccTLD" : "kr", "gTLD" : "", "c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d { "SLD" : "b2link", "TLD" : "co.kr", "ccTLD" : "kr", "gTLD" : "", "c" : "kr" }
 * @return {Object}
 */
var email_detail$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var email_detail$validation__remove_id = function( n ){};

/**
 * delete rank, upw
 * @function
 * @param {Document} d
 */
var email_detail$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var email_detail$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { email_detail }, { email_detail }, ... ]
 */
var email_detail$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var email_detail$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.job_title;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CEO"
 *	, "nm_cn" : "대표이사"
 *	, "nm_kr" : "대표이사"
 *	, "nm_us" : "CEO"
 *	, "description" : "대표이사"
 *	, "description_cn" : "대표이사"
 *	, "description_kr" : "대표이사"
 *	, "description_us" : "CEO"
 * }
 * </code>
 */

var job_title$addDoc = function( d ){};

/**
 * job_title Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "CEO"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var job_title$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var job_title$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {job_title}, {job_title}, ... ]
 */

var job_title$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { job_title }, { job_title }, ... ]
 */

var job_title$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var job_title$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var job_title$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "CEO"
 *	, "nm_cn" : "대표이사"
 *	, "nm_kr" : "대표이사"
 *	, "nm_us" : "CEO"
 *	, "description" : "대표이사"
 *	, "description_cn" : "대표이사"
 *	, "description_kr" : "대표이사"
 *	, "description_us" : "CEO"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var job_title$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CEO"
 *	, "nm_cn" : "대표이사"
 *	, "nm_kr" : "대표이사"
 *	, "nm_us" : "CEO"
 *	, "description" : "대표이사"
 *	, "description_cn" : "대표이사"
 *	, "description_kr" : "대표이사"
 *	, "description_us" : "CEO"
 * }
 * </code>
 * @return {Object}
 */

var job_title$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var job_title$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "CEO"
 *	, "nm_cn" : "대표이사"
 *	, "nm_kr" : "대표이사"
 *	, "nm_us" : "CEO"
 *	, "description" : "대표이사"
 *	, "description_cn" : "대표이사"
 *	, "description_kr" : "대표이사"
 *	, "description_us" : "CEO"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var job_title$validation__update_id = function(){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "CEO"
 *	, "nm_cn" : "대표이사"
 *	, "nm_kr" : "대표이사"
 *	, "nm_us" : "CEO"
 *	, "description" : "대표이사"
 *	, "description_cn" : "대표이사"
 *	, "description_kr" : "대표이사"
 *	, "description_us" : "CEO"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var job_title$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var job_title$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var job_title$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { job_title }, { job_title }, ... ]
 */

var job_title$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { job_title }, { job_title }, ... ]
 */

var job_title$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var job_title$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.messenger;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "카카오톡"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "카카오톡"
 *	, "nm_us" : "kakaotalk"
 *	, "description" : "www.kakaotalk.co.kr"
 *	, "description_cn" : "www.kakaotalk.co.kr"
 *	, "description_kr" : "www.kakaotalk.co.kr"
 *	, "description_us" : "www.kakaotalk.co.kr"
 * }
 * </code>
 */

var messenger$addDoc = function( d ){};

/**
 * messenger Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "카카오톡"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var messenger$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var messenger$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {messenger}, {messenger}, ... ]
 */

var messenger$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { messenger }, { messenger }, ... ]
 */

var messenger$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var messenger$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var messenger$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "카카오톡"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "카카오톡"
 *	, "nm_us" : "kakaotalk"
 *	, "description" : "www.kakaotalk.co.kr"
 *	, "description_cn" : "www.kakaotalk.co.kr"
 *	, "description_kr" : "www.kakaotalk.co.kr"
 *	, "description_us" : "www.kakaotalk.co.kr"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var messenger$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "카카오톡"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "카카오톡"
 *	, "nm_us" : "kakaotalk"
 *	, "description" : "www.kakaotalk.co.kr"
 *	, "description_cn" : "www.kakaotalk.co.kr"
 *	, "description_kr" : "www.kakaotalk.co.kr"
 *	, "description_us" : "www.kakaotalk.co.kr"
 * }
 * </code>
 * @return {Object}
 */

var messenger$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var messenger$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "카카오톡"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "카카오톡"
 *	, "nm_us" : "kakaotalk"
 *	, "description" : "www.kakaotalk.co.kr"
 *	, "description_cn" : "www.kakaotalk.co.kr"
 *	, "description_kr" : "www.kakaotalk.co.kr"
 *	, "description_us" : "www.kakaotalk.co.kr"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var messenger$validation__update_id = function(){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "카카오톡"
 *	, "nm_cn" : ""
 *	, "nm_kr" : "카카오톡"
 *	, "nm_us" : "kakaotalk"
 *	, "description" : "www.kakaotalk.co.kr"
 *	, "description_cn" : "www.kakaotalk.co.kr"
 *	, "description_kr" : "www.kakaotalk.co.kr"
 *	, "description_us" : "www.kakaotalk.co.kr"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var messenger$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var messenger$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var messenger$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { messenger }, { messenger }, ... ]
 */

var messenger$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { messenger }, { messenger }, ... ]
 */

var messenger$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var messenger$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.postalcode_cn;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"cd_postal" : "101200", "addr0" : "北京市", "addr1" : "北京市", "addr2" : "东城区", "addr" : "北京市东城区"}
 * @return {uint} 0 or 1
 *
 * @example
 * postalcode_cn$addDoc( {"cd_postal" : "101200", "addr0" : "北京市", "addr1" : "北京市", "addr2" : "东城区", "addr" : "北京市东城区"} );
 */

var postalcode_cn$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"cd_postal" : "101200", "addr0" : "北京市", "addr1" : "北京市", "addr2" : "东城区", "addr" : "北京市东城区"}
 * @return {int} 0 or 1
 */
var postalcode_cn$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var postalcode_cn$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { postalcode_cn }, { postalcode_cn }, ... ]
 */
var postalcode_cn$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var postalcode_cn$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { postalcode_cn }, { postalcode_cn }, ... ]
 */
var postalcode_cn$getCountByText = function(d){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var postalcode_cn$getList_For_Paging = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var postalcode_cn$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} postalcode_cn
 * @return {uint} 0 or 1
 */

var postalcode_cn$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d [ {postalcode_cn}, {postalcode_cn}, ... ]
 * @return {uint} 0 or 1
 */

var postalcode_cn$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {"cd_postal" : "101200", "addr0" : "北京市", "addr1" : "北京市", "addr2" : "东城区", "addr" : "北京市东城区"}
 * @return {Object}
 */
var postalcode_cn$update_id = function( d ){};

/**
 * @function
 * @param {Object} d {"cd_postal" : "101200", "addr0" : "北京市", "addr1" : "北京市", "addr2" : "东城区", "addr" : "北京市东城区"}
 * @return {Object}
 */
var postalcode_cn$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var postalcode_cn$validation__addDoc = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var postalcode_cn$validation__Document = function( d ){};

/**
 * @function
 * @return {Array}
 */
var postalcode_cn$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { postalcode_cn }, { postalcode_cn }, ... ]
 */
var postalcode_cn$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { postalcode_cn }, { postalcode_cn }, ... ]
 */
var postalcode_cn$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var postalcode_cn$_findByText = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	list_static.postalcode_kr;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"cd_postal" : "06596", "addr0" : "서울시", "addr1" : "서초구", "addr2" : "서초동", "addr" : "서울시 서초구 서초동"}
 * @return {uint} 0 or 1
 *
 * @example
 * postalcode_kr$addDoc( {"cd_postal" : "06596", "addr0" : "서울시", "addr1" : "서초구", "addr2" : "서초동", "addr" : "서울시 서초구 서초동"} );
 */

var postalcode_kr$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"cd_postal" : "06596", "addr0" : "서울시", "addr1" : "서초구", "addr2" : "서초동", "addr" : "서울시 서초구 서초동"}
 * @return {int} 0 or 1
 */
var postalcode_kr$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var postalcode_kr$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { postalcode_kr }, { postalcode_kr }, ... ]
 */
var postalcode_kr$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var postalcode_kr$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { postalcode_kr }, { postalcode_kr }, ... ]
 */
var postalcode_kr$getCountByText = function(d){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var postalcode_kr$getList_For_Paging = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var postalcode_kr$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Object} postalcode_kr
 * @return {uint} 0 or 1
 */

var postalcode_kr$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d [ {postalcode_kr}, {postalcode_kr}, ... ]
 * @return {uint} 0 or 1
 */

var postalcode_kr$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {"cd_postal" : "06596", "addr0" : "서울시", "addr1" : "서초구", "addr2" : "서초동", "addr" : "서울시 서초구 서초동"}
 * @return {Object}
 */
var postalcode_kr$update_id = function( d ){};

/**
 * @function
 * @param {Object} d {"cd_postal" : "06596", "addr0" : "서울시", "addr1" : "서초구", "addr2" : "서초동", "addr" : "서울시 서초구 서초동"}
 * @return {Object}
 */
var postalcode_kr$update_ids = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var postalcode_kr$validation__addDoc = function( d ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var postalcode_kr$validation__Document = function( d ){};

/**
 * @function
 * @return {Array}
 */
var postalcode_kr$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { postalcode_kr }, { postalcode_kr }, ... ]
 */
var postalcode_kr$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { postalcode_kr }, { postalcode_kr }, ... ]
 */
var postalcode_kr$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var postalcode_kr$_findByText = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	list_static.trade_disposal;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 */

var trade_disposal$addDoc = function( d ){};

/**
 * trade_disposal Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "CIF"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var trade_disposal$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var trade_disposal$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {trade_disposal}, {trade_disposal}, ... ]
 */

var trade_disposal$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { trade_disposal }, { trade_disposal }, ... ]
 */

var trade_disposal$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var trade_disposal$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var trade_disposal$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 * 	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_disposal$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {Object}
 */

var trade_disposal$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var trade_disposal$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 * 	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_disposal$validation__update_id = function(){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_disposal$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var trade_disposal$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var trade_disposal$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { trade_disposal }, { trade_disposal }, ... ]
 */

var trade_disposal$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { trade_disposal }, { trade_disposal }, ... ]
 */

var trade_disposal$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var trade_disposal$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.trade_terms;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 */

var trade_terms$addDoc = function( d ){};

/**
 * trade_terms Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm" : "CIF"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var trade_terms$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var trade_terms$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {trade_terms}, {trade_terms}, ... ]
 */

var trade_terms$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var trade_terms$getCount = function (){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { trade_terms }, { trade_terms }, ... ]
 */

var trade_terms$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var trade_terms$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var trade_terms$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 * 	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_terms$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {Object}
 */

var trade_terms$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var trade_terms$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 * 	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_terms$validation__update_id = function(){};

/**
 * @function
 * <code>
 * {
 *	"_id" : 0
 *	, "nm" : "CIF"
 *	, "nm_f" : "Cost, Insurance & Freight"
 *	, "nm_f_cn" : "運保費在內條件"
 *	, "nm_f_kr" : "운임, 보험료 포함인도"
 *	, "nm_f_us" : "Cost, Insurance & Freight"
 *	, "description" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_cn" : "賣方須負擔貨物運至指定目的港為止所需的費用、運費及海上保險費用，但貨物滅失或毀損的風險及貨物在船上交付後由於事故而生的任額外費用，則自貨物在裝船港越過船舷時起，由賣方移轉予買方負擔。本條件與上述CFR條件比較，多出 Insurance一字。這個字是說賣方有義務投保貨物運至目的港為止的海上運輸保險，並且負擔保險費，故又稱至目的港運保費在內條件。"
 *	, "description_kr" : "매도인이 매수인을 위해 보험계약을 체결하고 보험료를 부담하는 것을 제외하고는 CFR 조건과 동일하다. 해상운송에만 적합한 거래조건이다."
 *	, "description_us" : "This arrangement similar to CFR, but instead of the buyer insuring the goods for the maritime phase of the voyage, the shipper/seller will insure the merchandise. In this arrangement, the seller usually chooses the forwarder. Delivery as above, is accomplished at the port of destination."
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var trade_terms$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var trade_terms$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var trade_terms$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { trade_terms }, { trade_terms }, ... ]
 */

var trade_terms$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { trade_terms }, { trade_terms }, ... ]
 */

var trade_terms$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var trade_terms$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static.zipcode_kr;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d {"cd_zip" : "KS013", "addr" : "서초구", "addr_kr" : "서초구", "addr_us" : "Seocho", "addr_cn" : "瑞草区"}
 * @return {uint} 0 or 1
 *
 * @example
 * zipcode_kr$addDoc( {"cd_zip" : "KS013", "addr" : "서초구", "addr_kr" : "서초구", "addr_us" : "Seocho", "addr_cn" : "瑞草区"} );
 */

var zipcode_kr$addDoc = function( d ){};

/**
 * email Overlap check
 * @function
 * @param {Object} d Request Object {"cd_zip" : "KS013", "addr" : "서초구", "addr_kr" : "서초구", "addr_en" : "Seocho", "addr_cn" : "瑞草区"}
 * @return {int} 0 or 1
 */
var zipcode_kr$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var zipcode_kr$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ { zipcode_kr }, { zipcode_kr }, ... ]
 */
var zipcode_kr$getAllList = function(){};

/**
 * @function
 * @return {uint}
 */
var zipcode_kr$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { zipcode_kr }, { zipcode_kr }, ... ]
 */
var zipcode_kr$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint} 0 or 1
 */
var zipcode_kr$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var zipcode_kr$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} zipcode_kr
 * @return {uint} 0 or 1
 */

var zipcode_kr$update_id = function( d ){};

/**
 * @function
 * @param {Array} d [ {zipcode_kr}, {zipcode_kr}, ... ]
 * @return {uint} 0 or 1
 */

var zipcode_kr$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d {"cd_zip" : "KS013", "addr" : "서초구", "addr_kr" : "서초구", "addr_us" : "Seocho", "addr_cn" : "瑞草区"}
 * @return {Object}
 */
var zipcode_kr$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d {"cd_zip" : "KS013", "addr" : "서초구", "addr_kr" : "서초구", "addr_en" : "Seocho", "addr_cn" : "瑞草区"}
 * @return {Object}
 */
var zipcode_kr$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0 or 1
 */
var zipcode_kr$validation__remove_id = function( n ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */
var zipcode_kr$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */
var zipcode_kr$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { zipcode_kr }, { zipcode_kr }, ... ]
 */
var zipcode_kr$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { zipcode_kr }, { zipcode_kr }, ... ]
 */
var zipcode_kr$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */
var zipcode_kr$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	list_static__bank_swift._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0 or 1
 *
 * @example
 * member_basic$addDoc( {"nm_us" :{"f" : "SunWoo", "l" : "Song", "a" : "SunWoo Song"},"email" : "thdtjsdn@gmail.com", "nm_kr" :{"f" : "선우", "l" : "송", "a" : "송선우"},"mid" : "thdtjsdn@gmail.com", "nm_cn" :{"f" : "", "l" : "", "a" : ""},"nm" :{"f" : "선우", "l" : "송", "a" : "송선우"},"mpw" : "123qweasd"} );
 */
var member_basic$addDoc = function( d ){};

/**
 * member_basic Overlap check
 * @function
 * @param {Object} d Request Object {}
 * @return {int} 0 or 1
 */
var member_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */
var member_basic$findOne = function( d ){};

/**
 * @function
 * @param {String} mid user ID
 * @return {Document}
 *
 * @example
 * member_basic$findOne__mid( "thdtjsdn@gmail.com" )' );
 */
var member_basic$findOne__mid = function ( mid ){};

/**
 * @function
 * @param {String} sid session id
 * @return {Object}
 */
var member_basic$findOne__sid = function( sid ){};

/**
 * @function
 * @param {uint} _id
 * @return {Document}
 *
 * @example
 * member_basic$findOne___id( 0 );
 */
var member_basic$findOne___id = function( _id ){};

/**
 * @function
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$getAllList = function(){};

/**
 * @return email list
 * @function
 * @return {Array} [ email, email, ... ]
 */
var member_basic$getAllList__email = function(){};

/**
 * @return name list
 * @function
 * @return {Array} [ {nm}, {nm}, ... ]
 */
var member_basic$getAllList__nm = function(){};

/**
 * @return 'CH' name list
 * @function
 * @return {Array} [ {nm_ch}, {nm_ch}, ... ]
 */
var member_basic$getAllList__nm_ch = function(){};

/**
 * @return 'KR' name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */
var member_basic$getAllList__nm_kr = function(){};

/**
 * @return 'US' name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */
var member_basic$getAllList__nm_us = function(){};

/**
 * @function
 * @return {uint}
 */
var member_basic$getCount = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {uint}
 */
var member_basic$getSearchCount = function ( _searchDivision, _searchTeam, _searchType, _searchKeyword ){};

/**
 * @function
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$getSearchList = function ( _skip, _limit, _searchDivision, _searchTeam, _searchType, _searchKeyword ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_basic$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_basic$remove_ids = function( ids ){};

/**
 * @function
 * @param {Array} ids
 */
var member_basic$remove_ids__AllCols = function( ids ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_basic$remove_id__AllCols = function( _id ){};

/**
 * @function
 * @param {Object} d { mid : "", mpw : "" }
 * @return {uint} 0, 1
 *
 * @example
 * member_basic$sign_in({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" });
 */
var member_basic$sign_in = function( d ){};

/**
 * @function
 * @param {Object} d { mid : "", mpw : "" }
 * @return {uint} 0, 1
 *
 * @example
 * member_basic$sign_up({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" });
 */
var member_basic$sign_up = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_basic$update = function( d ){};

/**
 * @function
 * @param {Object} d { "email" : "", ... }
 * @return {uint} 0, 1
 */
var member_basic$updateList = function ( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 */
var member_basic$validation__email = function( d ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 * @return {uint} 0 or 1
 */
var member_basic$validation__remove_id = function( n ){};

/**
 * @function
 * @param {Document} d { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @return {uint} 0 or 1
 */
var member_basic$validation__sign_in = function( d ){};

/**
 * @function
 * @param {Document} o Collection' Object { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @param {String} mpw
 * @return {uint} 0 or 1
 */
var member_basic$validation__sign_up = function( d ){};

/**
 * @function
 * @param {Document} o Collection' Object { _"id" : NaN, "mid" : "", "mpw" : "", "nSignInFail" : NaN, ... }
 * @param {String} mpw
 * @return {uint} 0 or 1
 */
var member_basic$_check__nSignInFail = function( d ){};

/**
 * delete cd_rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_confirm__Password = function( o, mpw ){};

/**
 * delete cd_rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_confirm__Password___update__nSignInFail = function( o, mpw ){};

/**
 * delete cd_rank, mpw
 * @function
 * @param {Document} d
 */
var member_basic$_delete__findOne_Common = function( d ){};

/**
 * @function
 * @return {Array}
 */
var member_basic$_delete__findOne__sid = function( d ){};

/**
 * @function
 * @param {String} mid
 * @return {Document}
 */
var member_basic$_delete__getAllList = function( d ){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_basic$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$_findOne__mid = function( mid ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { member_basic }, { member_basic }, ... ]
 */
var member_basic$_findOne___id = function( _id ){};

/**
 * @function
 * @return {Collection}
 */
var member_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Array}
 */
var member_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @param {uint} _id
 * @param {uint} nSignInFail
 * @return {uint} 1
 */
var member_basic$_getCol = function(){};

/**
 * update cd_rank -1000, 0, 1000, 2000, 3000, 4000, 10000
 * @function
 * @return {uint} 1
 */
var member_basic$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_date;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * member_date$addDoc({ "mid" : "thdtjsdn@gmail.com" });
 */
var member_date$addDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Object}
 */
var member_date$findOne = function( d ){};

/**
 * @function
 * @param {String} mid member ID
 * @return {Document}
 *
 * @example
 * member_date$findOne__mid( "thdtjsdn@gmail.com" )' );
 */
var member_date$findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} uid user ID
 * @return {Document}
 *
 * @example
 * member_date$findOne__uid( "thdtjsdn@gmail.com" )' );
 */
var member_date$findOne__uid = function( uid ){};

/**
 * @function
 * @return {Array} [ { member_date }, { member_date }, ... ]
 */
var member_date$getAllList = function(){};

/**
 * @return d_l_si(date_last_signin)
 * @function
 * @return {Array} [ d_l_si, d_l_si, ... ]
 */
var member_date$getAllList__d_l_si = function(){};

/**
 * @return d_sec(date_secession)
 * @function
 * @return {Array} [ d_sec, d_sec, ... ]
 */
var member_date$getAllList__d_sec = function(){};

/**
 * @return d_su(date_signup)
 * @function
 * @return {Array} [ d_su, d_su, ... ]
 */
var member_date$getAllList__d_su = function(){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_date$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_date$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * { mid : "", mpw : "" }
 * </code>
 * @return {uint} 0, 1
 *
 * @example
 * member_date$sign_up({ "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd" })' );
 */
var member_date$sign_up = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_date$update_lastSignIn = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_date$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d { member_basic... }
 */
var member_date$validation__remove_id = function( n ){};

/**
 * delete d_l_si, d_su, d_sec + member_basic$_delete__getAllList
 * @function
 * @param {Document} d
 */
var member_date$validation__sign_up = function( d ){};

/**
 * @function
 * @return {Array}
 */
var member_date$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Collection}
 */
var member_date$_findAll = function(){};

/**
 * @function
 * @return {Array}
 */
var member_date$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_public;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$addDoc = function( d ){};

/**
 * @return email list
 * @function
 * @return {Array} [ email, email, ... ]
 */
var member_public$findById = function ( _id ){};

/**
 * @return name list
 * @function
 * @return {Array} [ {nm}, {nm}, ... ]
 */
var member_public$getAllList = function(){};

/**
 * @return 'CH' name list
 * @function
 * @return {Array} [ {nm_ch}, {nm_ch}, ... ]
 */
var member_public$getAllList__email = function(){};

/**
 * @return 'KR' name list
 * @function
 * @return {Array} [ {nm_kr}, {nm_kr}, ... ]
 */
var member_public$getAllList__nm = function(){};

/**
 * @return 'US' name list
 * @function
 * @return {Array} [ {nm_us}, {nm_us}, ... ]
 */
var member_public$getAllList__nm_ch = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$getAllList__nm_kr = function(){};

/**
 * _id(member_public code)로 member_public의 nm.a를 얻어온다.
 * @function
 * @param {uint} _id member_public code
 * @return {String}
 */
var member_public$getAllList__nm_us = function(){};

/**
 * @function
 * @return {Array}
 */
var member_public$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_public$getProp_NameFrom_id = function( _id ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$getSearchCount = function ( _searchDivision, _searchTeam, _searchType, _searchKeyword ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { member_public }, { member_public }, ... ]
 */
var member_public$getSearchList = function ( _skip, _limit, _searchDivision, _searchTeam, _searchType, _searchKeyword ){};

/**
 * @function
 * @return {Collection}
 */
var member_public$validation__addDoc = function( d ){};

/**
 * @function
 * @return {Array}
 */
var member_public$_findAll = function(){};

//----------------------------------------------------------------------------------------------------;

//	member.member_session;

//----------------------------------------------------------------------------------------------------;

/**
 * Session Object 추가
 * @function
 * @param {Object} d
 * @return {uint} 0 or 1
 *
 * @example
 * member_session$addDoc({ "mid" : "thdtjsdn@gmail.com" });
 */
var member_session$addDoc = function( d ){};

/**
 * Session Object의 Check
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @param {Object} so Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired = function( sid, so ){};

/**
 * 'mid'를 가지고 Session Object를 검색 후 Session Check.
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired__mid = function( d ){};

/**
 * 'sid'를 가지고 Session Object를 검색 후 Session Check.
 * @function
 * @param {Object} d Request Object { "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Expired__sid = function( sid ){};

/**
 * Session과 함께 Sign In을 진행.
 * Client에서 Request시 'mid'와 'mpw'를 같이 보냄.
 * Session을 체크 후 저장 또는 파기.
 * @function
 * @param {Object} d Request Object { "mid" : "", "mpw" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$checkSession__Sign_In = function( d ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} 0, or 1
 */
var member_session$destroySession__sid = function( sid ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Object}
 */
var member_session$findOne = function( d ){};

/**
 * @function
 * @param {String} sid session id
 * @return {Object}
 */
var member_session$findOne__sid = function( sid ){};

/**
 * @function
 * @return {Array} [ { member_session }, { member_session }, ... ]
 */
var member_session$getAllList = function(){};

/**
 * sid(session id)로 member_session의 _id를 얻어온다.
 * @function
 * @param {String} sid session id
 * @return {uint}
 */
var member_session$getProp__idFromsid = function( sid ){};

/**
 * @function
 * @param {Object} d { "mid" : "" }
 * @return {uint|Object} 0 or 1, { "mid" : "", "d_ex" : "", "sid" : "" }
 */
var member_session$getSession = function( d ){};

/**
 * remove document by _id
 * @function
 * @param {String} _id
 * @return {uint}
 */
var member_session$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 */
var member_session$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_session$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d {}
 * @return {Object}
 */
var member_session$validation__Document = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var member_session$validation__remove_id = function( n ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} 0 or 1
 */
var member_session$validation__sid = function( sid ){};

/**
 * @function
 * @param {String} sid
 * @return {uint} -1, 0. 1
 */
var member_session$_confirm__sessionID = function( sid ){};

/**
 * delete d_ex(date_expires), sid(session id)
 * @function
 * @param {Document} d
 */
var member_session$_delete__findOne__sid = function( d ){};

/**
 * @function
 * @param {Object} d Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 0 or 1
 */
var member_session$_destroySession = function( o ){};

/**
 * @function
 * @return {Array}
 */
var member_session$_findAll = function(){};

/**
 * @function
 * @param {String} mid
 * @return {Document}
 */
var member_session$_findOne__mid = function( mid ){};

/**
 * @function
 * @param {String} sid
 * @return {Document}
 */
var member_session$_findOne__sid = function( sid ){};

/**
 * @function
 * @param {String} uid
 * @return {Document}
 */
var member_session$_findOne__uid = function( uid ){};

/**
 * @function
 * @param {String} _id
 * @return {Document}
 */
var member_session$_findOne___id = function( _id ){};

/**
 * @function
 * @return {Collection}
 */
var member_session$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session$_getProperties = function(){};

/**
 * update
 * @function
 * @param {Object} d Collection's Session Object { "_id" : NaN, "mid" : "", "sid" : "", "d_ex" : "" }
 * @return {uint} 1
 */
var member_session$_update__Session = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	member.member_session_log;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {uint} 0, 1
 *
 * @example
 * member_session_log$addDoc({ "mid" : "thdtjsdn@gmail.com" });
 */
var member_session_log$addDoc = function( d ){};

/**
 * @function
 * @return {Array} [ { member_session }, { member_session }, ... ]
 */
var member_session_log$getAllList = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session_log$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */
var member_session_log$_getCol = function(){};

/**
 * @function
 * @return {Array}
 */
var member_session_log$_getProperties = function(){};

//----------------------------------------------------------------------------------------------------;

//	member._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @return {Object} { "year" : 0, "month" : 0, "date" : 0 }
 */
var _common_procedure$getDate__YearMonthDate = function(){};

/**
 * @function
 * @return {Object} { "y" : 0, "m" : 0, "d" : 0 }
 */
var _common_procedure$getDate__YMD = function(){};

/**
 * @function
 * @return {Object} { "y" : 0, "m" : 0, "d" : 0, "ho" : 0, "mi" : 0, "se" : 0 }
 */
var _common_procedure$getDate__YMD_HoMiSeMil = function(){};

/**
 * @function
 * @return {Array} [ year, month, day, hours, minutes, seconds, milliseconds ]
 */
var _common_procedure$getDate__YMD_HoMiSeMil__Array = function(){};

/**
 * @function
 * @return {Array} [ year, month, day ]
 */
var _common_procedure$getDate__YMD__Array = function(){};

/**
 * @function
 * @param {Object} { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 */
var _common_procedure$setDate__YMD_HoMiSe = function( d ){};

/**
 * @function
 * @param {Object} d { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 * @return {Object} { y : 0, m : 0, d : 0, ho : 0, mi : 0, se : 0 }
 */
var _common_procedure$validation_Date__YMD_HoMiSe = function( d ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	partner.partner_buyer;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$category_partner_buyer : 0
 * 	, cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, phone_fax : "+82215588888"
 *	, phone_tel : "+82215883333"
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 */

var partner_buyer$addDoc = function( d ){};

/**
 * partner_buyer Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"company_registration_number" : d.company_registration_number
 * }
 * </code>
 * @return {int} 0 or 1
 */

var partner_buyer$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var partner_buyer$findById = function ( _id ){};

/**
 * @function
 * @return {Array} [ {partner_buyer}, {partner_buyer}, ... ]
 */

var partner_buyer$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {partner_buyer}, {partner_buyer}, ... ]
 */

var partner_buyer$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_buyer }, { partner_buyer }, ... ]
 */

var partner_buyer$getAllListSearch = function( d ){};

/**
 * @function
 * @return {Array} [ {partner_buyer}, {partner_buyer}, ... ]
 */

var partner_buyer$getAllList_Join_member_public$nm_All = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var partner_buyer$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var partner_buyer$getSearchList = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$category_partner_buyer : 0
 * 	, cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, num_fax : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, num_telephone : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 * @return {Object}
 */

var partner_buyer$remove_id = function( _id ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var partner_buyer$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_buyer$update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_buyer$update_ids = function( d ){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var partner_buyer$validation__addDoc = function( d ){};

/**
 * @function
 * @return {Array}
 */

var partner_buyer$validation__remove_id = function( n ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_buyer }, { partner_buyer }, ... ]
 */

var partner_buyer$validation__update_id = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { partner_buyer }, { partner_buyer }, ... ]
 */

var partner_buyer$validation__update_ids = function(){};

/**
 * @function
 * @return {Collection}
 */

var partner_buyer$_delete__getAllList = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	partner.partner_logistics;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$category_partner_logistics : 0
 * 	, cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, phone_fax : "+82215588888"
 *	, phone_tel : "+82215883333"
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 */

var partner_logistics$addDoc = function( d ){};

/**
 * partner_logistics Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"company_registration_number" : d.company_registration_number
 * }
 * </code>
 * @return {int} 0 or 1
 */

var partner_logistics$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var partner_logistics$findById = function ( _id ){};

/**
 * @function
 * @return {Array} [ {partner_logistics}, {partner_logistics}, ... ]
 */

var partner_logistics$findOne = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_logistics }, { partner_logistics }, ... ]
 */

var partner_logistics$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {partner_buyer}, {partner_buyer}, ... ]
 */

var partner_logistics$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var partner_logistics$getSearchList = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var partner_logistics$remove_id = function( _id ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$category_partner_logistics : 0
 * 	, cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, num_fax : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, num_telephone : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 * @return {Object}
 */

var partner_logistics$remove_ids = function( ids ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var partner_logistics$update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_logistics$update_ids = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_logistics$validation__addDoc = function( d ){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var partner_logistics$validation__remove_id = function( n ){};

/**
 * @function
 * @return {Array}
 */

var partner_logistics$validation__update_id = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_logistics }, { partner_logistics }, ... ]
 */

var partner_logistics$validation__update_ids = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { partner_logistics }, { partner_logistics }, ... ]
 */

var partner_logistics$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var partner_logistics$_findAll = function(){};

//----------------------------------------------------------------------------------------------------;

//	partner.partner_person;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$member : 0
 *	cd$country : "KR"
 *	, _id$title : 0
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "대표"
 *	, description_kr : "대표"
 *	, description_cn : "대표"
 *	, description_us : "대표"
 *	, divison : "구매부"
 *	, email : "b2link@b2link.co.kr"
 *	, messenger : { _id$messenger : 0, id : "b2link@b2link.co.kr" }
 *	, nm : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, phone_cell : "111111111"
 *	, phone_fax : "111111111"
 *	, phone_tel : "111111111"
 * }
 * </code>
 */

var partner_person$addDoc = function( d ){};

/**
 * partner_person Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"phone_cell" : d.phone_cell
 * }
 * </code>
 * @return {int} 0 or 1
 */

var partner_person$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var partner_person$findById = function ( _id ){};

/**
 * @function
 * @return {Array} [ {partner_person}, {partner_person}, ... ]
 */

var partner_person$findOne = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_person }, { partner_person }, ... ]
 */

var partner_person$getAllList = function(){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var partner_person$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var partner_person$remove_id = function( _id ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id" : 0
 *	"_id$member_public" : 0
 *	, "_id$job_title" : 0
 *	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 *	, "description" : "대표"
 *	, "description_kr" : "대표"
 *	, "description_cn" : "대표"
 *	, "description_us" : "대표"
 *	, "divison" : "구매부"
 *	, "email" : "b2link@b2link.co.kr"
 *	, "messenger" : { "_id$messenger" : 0, "id" : "b2link@b2link.co.kr" }
 *	, "nm" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, "nm_us" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, "phone_cell" : "111111111"
 *	, "phone_fax" : "111111111"
 *	, "phone_tel" : "111111111"
 * }
 * </code>
 * @return {Object}
 */

var partner_person$remove_ids = function( ids ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var partner_person$validation__addDoc = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_person$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_person$validation__update_id = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var partner_person$validation__update_ids = function(){};

/**
 * @function
 * @return {Array}
 */

var partner_person$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_person }, { partner_person }, ... ]
 */

var partner_person$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { partner_person }, { partner_person }, ... ]
 */

var partner_person$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Collection}
 */

var partner_person$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

//----------------------------------------------------------------------------------------------------;

//	partner.partner_supplier;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id$category_partner_supplier : NumberInt( r._id$category_partner_supplier )
 *	, cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, phone_fax : "+82215588888"
 *	, phone_tel : "+82215883333"
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 */
var partner_supplier$addDoc = function( d ){};

/**
 * partner_supplier Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 * 	"company_registration_number" : d.company_registration_number
 * }
 * </code>
 * @return {int} 0 or 1
 */

var partner_supplier$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var partner_supplier$findById = function ( _id ){};

/**
 * @function
 * @return {Array} [ {partner_supplier}, {partner_supplier}, ... ]
 */

var partner_supplier$findOne = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_supplier }, { partner_supplier }, ... ]
 */

var partner_supplier$getAllList = function(){};

/**
 * @function
 * @return {Array} [ {partner_buyer}, {partner_buyer}, ... ]
 */

var partner_supplier$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var partner_supplier$getSearchList = function( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var partner_supplier$remove_id = function( _id ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 	cd$country : "KR"
 *	, _ids$member : { manager : 0, register : 0 }
 *	, _id$partner_person : 0
 *	, address : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_kr : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_cn : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, address_us : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
 *	, company_registration_number : "1234586789"
 *	, date_regist : [ 2016, 10, 27, 12, 20, 30 ]
 *	, description : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_kr : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_cn : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, description_us : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
 *	, email : "b2lin@b2link.co.kr"
 *	, nm : "비투링크"
 *	, nm_cn : "비투링크"
 *	, nm_kr : "비투링크"
 *	, nm_us : "b2link"
 *	, nm_ceo : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_cn : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_kr : { "a" : "이소형", "f" : "소형", "l" : "이"}
 *	, nm_ceo_us : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee", "m" : ""}
 *	, num_fax : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, num_telephone : { "a" : "820215883366", "area_code", "c" : "82" : "02", "f" : "1588", "l" : "3366"}
 *	, url : "www.b2link.co.kr"
 * }
 * </code>
 * @return {Object}
 */

var partner_supplier$remove_ids = function( ids ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var partner_supplier$update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_supplier$update_ids = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var partner_supplier$validation__addDoc = function( d ){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var partner_supplier$validation__remove_id = function( n ){};

/**
 * @function
 * @return {Array}
 */

var partner_supplier$validation__update_id = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { partner_supplier }, { partner_supplier }, ... ]
 */

var partner_supplier$validation__update_ids = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { partner_supplier }, { partner_supplier }, ... ]
 */

var partner_supplier$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var partner_supplier$_findAll = function(){};

//----------------------------------------------------------------------------------------------------;

//	partner._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

/**
 * @function
 * @param {array} array
 * @return {array}
 */

var _common_procedure$_getIntArray = function( a ){};

//----------------------------------------------------------------------------------------------------;

//	product.product_basic;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
	_id$brand_basic : r._id$brand_basic,
	_id$member_public : r._id$member_public,

	cd$category_product_depth_000 : r.cd$category_product_depth_000,
	cd$category_product_depth_001 : r.cd$category_product_depth_001,
	cd$category_product_depth_002 : r.cd$category_product_depth_002,
	cd$category_product_depth_003 : r.cd$category_product_depth_003,

	date_regist : r.date_regist,

	nm : r.nm_kr,
	nm_kr : r.nm_kr,
	alias : r.alias,

	url : r.url,
	url_file_product : r.url_file_product,

	retail_price : r.retail_price,
	product_standard : r.product_standard,

	_d : 1
 * }
 * </code>
 */

var product_basic$addDoc = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 	nm : r.nm_kr,
	nm_kr : r.nm_kr,
	date_regist : r.date_regist,
	_id$brand_basic : r._id$brand_basic,
	_id$member_public : r._id$member_public,

	cd$category_product_depth_000 : r.cd$category_product_depth_000,
	cd$category_product_depth_001 : r.cd$category_product_depth_001,
	cd$category_product_depth_002 : r.cd$category_product_depth_002,
	cd$category_product_depth_003 : r.cd$category_product_depth_003,

	items : r.items,
	unified : 1,
	_d : 1
 * }
 * </code>
 */

var product_basic$add_merged = function( d ){};

/**
 * product_basic Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
	nm_kr : d.nm_kr,
	alias : d.alias,
	_id$brand_basic : NumberInt(d._id$brand_basic),
	cd$category_product_depth_000 : d.cd$category_product_depth_000,
	cd$category_product_depth_001 : d.cd$category_product_depth_001,
	cd$category_product_depth_002 : d.cd$category_product_depth_002,
	cd$category_product_depth_003 : d.cd$category_product_depth_003
 * }
 * </code>
 * @return {int} 0 or 1
 */

var product_basic$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var product_basic$find = function ( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var product_basic$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {product_basic}, {product_basic}, ... ]
 */

var product_basic$findOneById = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$getAllList = function(){};

/**
 * @function product_basic 상의 연관 collection 값을 의미있는 값으로 치환하여 전송 한다. (Join)
 * @return {Array} [ {}, {}, ... ]
 */

var product_basic$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var product_basic$joinCol__getAllList = function(){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var product_basic$remove_id = function( _id ){};

/**
 * @function
 * @param
 * _id : number
 * _id$member_public : number
 * actual_origin_cn : string
 * actual_origin_kr : string
 * actual_origin_us : string
 * alias : string
 * bBarcode : boolean
 * bSanitation_permit : boolean
 * barcode : string
 * cbm : string
 * consumer_counseling_phone_tel : object
 * date_manufacture : object
 * date_update : object
 * date_use : object
 * description_cn : string
 * description_kr : string
 * description_us : string
 * how_to_keep_cn : string
 * how_to_keep_kr : string
 * how_to_keep_us : string
 * how_to_use_cn : string
 * how_to_use_kr : string
 * how_to_use_us : string
 * ingredient_cn : string
 * ingredient_kr : string
 * ingredient_us : string
 * manufacturer_address_cn : object
 * manufacturer_kr : string
 * manufacturer_us : string
 * msds : boolean
 * nm_cn : string
 * nm_us : string
 * packing_outbox : string
 * packing_package : string
 * packing_piece : string
 * packing_unit : string
 * product_standard : string
 * retail_price : object
 * url : string
 * url_file_barcode : object
 * url_file_bian : object
 * url_file_msds : object
 * url_file_product : object
 * url_file_sanitation_permit : object
 * weight_except_package : number
 * weight_with_package : number
 * @return {uint} 0 or 1
 */
var product_basic$remove_ids = function( ids ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$update_detail = function( d ){};

/**
 * @function
 * @param {Array} product_basic
 * @return {uint} 0 or 1
 */

var product_basic$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * "_id$member_public" : NumberInt( 0 )
 *, "_id$brand_basic" : NumberInt( 0 )
 *, "cd$category_product" : "0"
 *
 *, "barcode" : "12345678"
 *
 *, "date_regist" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
 *
 *, "description" : "핸드크림"
 *, "description_cn" : "핸드크림"
 *, "description_kr" : "핸드크림"
 *, "description_us" : "Hand Cream"
 *
 *, "msds" : false
 *
 *, "nm" : "시어버터 핸드크림_로즈", "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
 *
 *, "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
 *, "url_file_product" : "", "url_file_barcode" : "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
 * }
 * </code>
 */

var product_basic$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 	nm : r.nm_kr,
	nm_kr : r.nm_kr,
	date_regist : r.date_regist,
	_id$brand_basic : r._id$brand_basic,
	_id$member_public : r._id$member_public,

	cd$category_product_depth_000 : r.cd$category_product_depth_000,
	cd$category_product_depth_001 : r.cd$category_product_depth_001,
	cd$category_product_depth_002 : r.cd$category_product_depth_002,
	cd$category_product_depth_003 : r.cd$category_product_depth_003,

	items : r.items,
	unified : 1,
	_d : 1
 * }
 * </code>
 */

var product_basic$validation__addDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var product_basic$validation__add_merged = function( d ){};

/**
 * @function
 * @param {Object} d
 * @return {Object} r
 */

var product_basic$validation__remove_id = function( n ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$validation__update_detail = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var product_basic$validation__update_id = function(){};


var product_basic$validation__update_ids = function(){};

/**
 * @function
 * @return {Array}
 */

var product_basic$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { product_basic }, { product_basic }, ... ]
 */
var product_basic$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Collection}
 */

var product_basic$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * 명시된 특정 필드에서 일치하는 조건이 있는 모든 문서를 리턴
 * TODO : 쿼리를 function 내부에서 또는 라우터나 서비스 내에서 생성할것인가?
 * @return {Collection}
 */

var product_basic$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	product.product_type;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
	_id$brand_basic : r._id$brand_basic,
	_id$member_public : r._id$member_public,

	cd$category_product_depth_000 : r.cd$category_product_depth_000,
	cd$category_product_depth_001 : r.cd$category_product_depth_001,
	cd$category_product_depth_002 : r.cd$category_product_depth_002,
	cd$category_product_depth_003 : r.cd$category_product_depth_003,

	date_regist : r.date_regist,

	nm : r.nm_kr,
	nm_kr : r.nm_kr,
	alias : r.alias,

	url : r.url,
	url_file_product : r.url_file_product,

	retail_price : r.retail_price,
	product_standard : r.product_standard,

	_d : 1
 * }
 * </code>
 */

var product_type$addDoc = function( d ){};

/**
 * product_type Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"nm_kr" : "시어버터 핸드크림_로즈"
	,"nm_cn" : "护手霜_玫瑰"
	,"nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
	,"url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm",
 * }
 * </code>
 * @return {int} 0 or 1
 */

var product_type$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var product_type$find = function ( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var product_type$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {product_type}, {product_type}, ... ]
 */

var product_type$findOneById = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_type }, { product_type }, ... ]
 */
var product_type$getAllList = function(){};

/**
 * @function product_type 상의 연관 collection 값을 의미있는 값으로 치환하여 전송 한다. (Join)
 * @return {Array} [ {}, {}, ... ]
 */

var product_type$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var product_type$joinCol__getAllList = function(){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var product_type$remove_id = function( _id ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * "_id$member_public" : NumberInt( 0 )
 *, "_id$brand_basic" : NumberInt( 0 )
 *, "cd$category_product" : "0"
 *
 *, "barcode" : "12345678"
 *
 *, "date_regist" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
 *
 *, "description" : "핸드크림"
 *, "description_cn" : "핸드크림"
 *, "description_kr" : "핸드크림"
 *, "description_us" : "Hand Cream"
 *
 *, "msds" : false
 *
 *, "nm" : "시어버터 핸드크림_로즈", "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
 *
 *, "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
 *, "url_file_product" : "", "url_file_barcode" : "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
 * }
 * </code>
 */

var product_type$remove_ids = function( ids ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var product_type$validation__addDoc = function( d ){};


var product_type$validation__remove_id = function( n ){};

/**
 * @function
 * @return {Array}
 */

var product_type$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { product_type }, { product_type }, ... ]
 */
var product_type$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { product_type }, { product_type }, ... ]
 */
var product_type$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Collection}
 */

var product_type$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * 명시된 특정 필드에서 일치하는 조건이 있는 모든 문서를 리턴
 * TODO : 쿼리를 function 내부에서 또는 라우터나 서비스 내에서 생성할것인가?
 * @return {Collection}
 */

var product_type$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	product._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	server_file.file_batch_log;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	server_file.file_entity;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	server_file.file_log;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	server_file.file_orphan;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	server_file._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.history_release;

//----------------------------------------------------------------------------------------------------;

/**
 * @function history_release code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$stocy_quantity" : "SKU-2017-02-10-PB0-2-1-Q-1"
 * }
 * </code>
 * @return {String} code
 */

var history_release$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var history_release$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.history_wearing;

//----------------------------------------------------------------------------------------------------;

/**
 * @function history_wearingy code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$stocy_quantity" : "SKU-2017-02-10-PB0-2-1-Q-1"
 * }
 * </code>
 * @return {String} code
 */

var history_wearing$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var history_wearing$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_distribution_history;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.stock_distribution_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function stock_transfer_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$warehouse" : "WH001"
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var stock_distribution_req$approval = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_distribution_req$check_stock_quantity = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_entity;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_cost_logistics_delivery code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$transaction_entity" : "TRAN-2017-02-10-PB0-2"
 * }
 * </code>
 * @return {String} code
 */

var stock_entity$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_entity$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_merge_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function stock_merge_req confirm
 * @param {Object} d
 * <code>
 * {
	 cd,
	 cd$category_stock_merge_status,
	 confirmedby,
	 cd$stock_entity,
	 cd$stock_quantity,
	 date_complete
 * }
 * </code>
 * @return {String} code
 */

var stock_merge_req$confirm = function( d ){};

/**
 * @function stock_merge_req find with d
 * @param {Object} d
 * @return {Array} r
 */

var stock_merge_req$find = function ( d ){};

/**
 * @function stock_merge_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$warehouse" : "WH001"
 *	, "date_create" : [2017,01,31,00,00,00]
 *	, "_id$member_basic" : 0
 * }
 * </code>
 * @return {String} code
 */

var stock_merge_req$get_code = function ( d ){};

/**
 * @function stock_merge_req add
 * @param {Object} d
 * <code>
 * {
	 _id$brand_basic,
	 _id$product_basic,
	 _ids$member,
	 cd$warehouse,
	 date_create,
	 date_predict_complete,
	 items,
	 quantity
 * }
 * </code>
 * @return {String} code
 */

var stock_merge_req$save = function( d ){};

/**
 * @function stock_merge_req update
 * @param {Object} d
 * <code>
 * {
	 cd,
	 date_predict_release,
	 date_predict_wearing,
	 cd$category_stock_merge_status
 * }
 * </code>
 * @return {String} code
 */

var stock_merge_req$update = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_merge_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_quantity;

//----------------------------------------------------------------------------------------------------;

/**
 * @function stock_quantity code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$stock_entity" : "SKU-2017-02-10-PB0-2-1"
 * }
 * </code>
 * @return {String} code
 */

var stock_quantity$find = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_quantity$get_code = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_split_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function stock_split_req confirm
 * @param {Object} d
 * <code>
 * {
	 cd,
	 cd$category_stock_merge_status,
	 confirmedby,
	 cd$stock_entity,
	 cd$stock_quantity,
	 date_complete
 * }
 * </code>
 * @return {String} code
 */

var stock_split_req$confirm = function( d ){};

/**
 * @function stock_split_req find with d
 * @param {Object} d
 * @return {Array} r
 */

var stock_split_req$find = function ( d ){};

/**
 * @function stock_split_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$warehouse" : "WH001"
 *	, "date_create" : [2017,01,31,00,00,00]
 *	, "_id$member_basic" : 0
 * }
 * </code>
 * @return {String} code
 */

var stock_split_req$get_code = function ( d ){};

/**
 * @function stock_split_req add
 * @param {Object} d
 * <code>
 * {
	 _id$brand_basic,
	 _id$product_basic,
	 _ids$member,
	 cd$warehouse,
	 date_create,
	 date_predict_complete,
	 items,
	 quantity
 * }
 * </code>
 * @return {String} code
 */

var stock_split_req$save = function( d ){};

/**
 * @function stock_split_req update
 * @param {Object} d
 * <code>
 * {
	 cd,
	 date_predict_release,
	 date_predict_wearing,
	 cd$category_stock_merge_status
 * }
 * </code>
 * @return {String} code
 */

var stock_split_req$update = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_split_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	stock.stock_transfer_history;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	stock.stock_transfer_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function stock_transfer_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$warehouse" : "WH001"
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var stock_transfer_req$find = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var stock_transfer_req$get_code = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	stock.warehouse;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 	"_ids$member" : { "manager" : 0, "register" : 0 }
 *	, "address_warehouse" : {
 *		"cd$country" : "KR"
 *		, "cd_postal" : "12345"
 *		, "add1" : "서울시"
 *		, "add2" : "강남구"
 *		, "add3" : "테헤란로 4길 14"
 *		, "add4" : "(825-22번지 미림타워) 12층 (주)비투링크"
 *		, "add5" : ""
 *		, "add6" : ""
 *		}
 * 	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 * 	, "description" : "비투링크 사내 물류 창고"
 * 	, "description_cn" : "비투링크 사내 물류 창고"
 * 	, "description_kr" : "비투링크 사내 물류 창고"
 * 	, "description_us" : "B2Link Warehouse"
 *	, "nm" : "비투링크물류창고_서울"
 *	, "nm_kr" : "비투링크물류창고_서울"
 *	, "nm_cn" : "비투링크물류창고_서울"
 *	, "nm_us" : "비투링크물류창고_서울"
 *	, "phone_tel" : "+82123456789"
 *	, "phone_fax" : "+82123456781"
 *	, "update_history" : [{ "_id$member_basic" : 0, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}
 *				, { "_id$member_basic" : 1, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}]
 * }
 * </code>
 */

var warehouse$addDoc = function( d ){};

/**
 * warehouse Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"phone_tel" : "82123456780"
	,"phone_fax" : "82123456789"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var warehouse$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var warehouse$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {warehouse}, {warehouse}, ... ]
 */

var warehouse$findOneByStockQuantity = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { warehouse }, { warehouse }, ... ]
 */
var warehouse$getAllList = function(){};

/**
 * @function 창고 code 생성
 * @return {String} code
 */

var warehouse$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var warehouse$get_code = function ( d ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var warehouse$remove_id = function( _id ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_id$member_public" : 0
 * 	"_ids$member" : { "manager" : 0, "register" : 0 }
 *	, "address_warehouse" : {
 *		"cd$country" : "KR"
 *		, "cd_postal" : "12345"
 *		, "add1" : "서울시"
 *		, "add2" : "강남구"
 *		, "add3" : "테헤란로 4길 14"
 *		, "add4" : "(825-22번지 미림타워) 12층 (주)비투링크"
 *		, "add5" : ""
 *		, "add6" : ""
 *		}
 * 	, "date_update" : [ 2016, 10, 27, 12, 20, 30 ]
 * 	, "description" : "비투링크 사내 물류 창고"
 * 	, "description_cn" : "비투링크 사내 물류 창고"
 * 	, "description_kr" : "비투링크 사내 물류 창고"
 * 	, "description_us" : "B2Link Warehouse"
 *	, "nm" : "비투링크물류창고_서울"
 *	, "nm_kr" : "비투링크물류창고_서울"
 *	, "nm_cn" : "비투링크물류창고_서울"
 *	, "nm_us" : "비투링크물류창고_서울"
 *	, "phone_tel" : "+82123456789"
 *	, "phone_fax" : "+82123456781"
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var warehouse$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 * 	"_ids$member" : { "manager" : 0, "register" : 0 }
 *	, "address_warehouse" : {
 *		, "cd_postal" : "12345"
 *		, "add1" : "서울시"
 *		, "add2" : "강남구"
 *		, "add3" : "테헤란로 4길 14"
 *		, "add4" : "(825-22번지 미림타워) 12층 (주)비투링크"
 *		, "add5" : ""
 *		, "add6" : ""
 *		}
 * 	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 * 	, "description" : "비투링크 사내 물류 창고"
 * 	, "description_cn" : "비투링크 사내 물류 창고"
 * 	, "description_kr" : "비투링크 사내 물류 창고"
 * 	, "description_us" : "B2Link Warehouse"
 *	, "nm" : "비투링크물류창고_서울"
 *	, "nm_kr" : "비투링크물류창고_서울"
 *	, "nm_cn" : "비투링크물류창고_서울"
 *	, "nm_us" : "비투링크물류창고_서울"
 *	, "phone_tel" : "+82123456789"
 *	, "phone_fax" : "+82123456781"
 *	, "update_history" : [{ "_id$member_basic" : 0, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}
 *				, { "_id$member_basic" : 1, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}]s
 * }
 * </code>
 */

var warehouse$update_id = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"cd$country" : "KR"
 *	, "cd_postal" : "12345"
 *	, "add1" : "서울시"
 *	, "add2" : "강남구"
 *	, "add3" : "테헤란로 4길 14"
 *	, "add4" : "(825-22번지 미림타워) 12층 (주)비투링크"
 *	, "add5" : ""
 *	, "add6" : ""
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var warehouse$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"_ids$member" : { "manager" : 0, "register" : 0 }
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var warehouse$validation__address = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var warehouse$validation__members = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * <code>
 * {
 * 	"_ids$member" : { "manager" : 0, "register" : 0 }
 *	, "address_warehouse" : {
 *		"cd$country" : "KR"
 *		, "cd_postal" : "12345"
 *		, "add1" : "서울시"
 *		, "add2" : "강남구"
 *		, "add3" : "테헤란로 4길 14"
 *		, "add4" : "(825-22번지 미림타워) 12층 (주)비투링크"
 *		, "add5" : ""
 *		, "add6" : ""
 *		}
 * 	, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]
 * 	, "description" : "비투링크 사내 물류 창고"
 * 	, "description_cn" : "비투링크 사내 물류 창고"
 * 	, "description_kr" : "비투링크 사내 물류 창고"
 * 	, "description_us" : "B2Link Warehouse"
 *	, "nm" : "비투링크물류창고_서울"
 *	, "nm_kr" : "비투링크물류창고_서울"
 *	, "nm_cn" : "비투링크물류창고_서울"
 *	, "nm_us" : "비투링크물류창고_서울"
 *	, "phone_tel" : "+82123456789"
 *	, "phone_fax" : "+82123456781"
 *	, "update_history" : [{ "_id$member_basic" : 0, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}
 *				, { "_id$member_basic" : 1, "date_update" : [ NumberInt( 2015 ), NumberInt( 8 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]}]s
 * }
 * </code>
 * @return {uint} 0 or 1
 */

var warehouse$validation__remove_id = function( n ){};

/**
 * delete ...
 * @function
 * @param {Document} d
 */

var warehouse$validation__update_id = function(){};

/**
 * @function
 * @return {Array}
 */

var warehouse$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { warehouse }, { warehouse }, ... ]
 */
var warehouse$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { warehouse }, { warehouse }, ... ]
 */
var warehouse$_findRange = function( _id_gt, _id_lt ){};

/**
 * @function
 * @return {Collection}
 */

var warehouse$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

//----------------------------------------------------------------------------------------------------;

//	stock._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	transaction.transaction_approval;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_approval code 생성
 * @param {Object} d
 * <code>
 * {
 *	"cd$transaction_entity" : "TRAN-2017-02-10-PB0-2"
 * }
 * </code>
 * @return {String} code
 */

var transaction_approval$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_approval$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction.transaction_delivery_information;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *		"cd$category_delivery_type" : "0"
 *		, "cd$transaction_sale_item" : "0"
 *		, "date_delivery_start" : [2016,10,10,10,10,10]
 *		, "date_delivery_end" : [2016,12,10,10,10,10]
 *		, "delivery_history" :
 * 			[
 *				{
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,10,10,10,10]
 *					, "nm_location" : "서울"
 *					, "_id$member_public" : 0
 *				}, {
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,11,10,10,10]
 *					, "nm_location" : "인천"
 *					, "_id$member_public" : 0
 *				}
 *			]
 *		, "cd$transaction_entity" : "TRA-2016-10-10-P10-1"
 * }
 * </code>
 */

var transaction_delivery_information$addDoc = function( d ){};

/**
 * transaction_delivery_information Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 *		"cd$transaction_sale_item" : 0
 *		, "cd$transaction_entity" : "TRA20161010P101"
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_delivery_information$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_delivery_information$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {transaction_delivery_information}, {transaction_delivery_information}, ... ]
 */

var transaction_delivery_information$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_delivery_information }, { transaction_delivery_information }, ... ]
 */
var transaction_delivery_information$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function transaction_cost_logistics_wearing code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_delivery_information$get_code = function ( d ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var transaction_delivery_information$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var transaction_delivery_information$remove_ids = function( ids ){};

/**
 * @function
 * {
 *		"_id" : 0
 *		, "cd$category_delivery_type" : "0"
 *		, "cd$transaction_sale_item" : "0"
 *		, "date_delivery_start" : [2016,10,10,10,10,10]
 *		, "date_delivery_end" : [2016,12,10,10,10,10]
 *		, "delivery_history" :
 * 			[
 *				{
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,10,10,10,10]
 *					, "nm_location" : "서울"
 *					, "_id$member_public" : 0
 *				}, {
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,11,10,10,10]
 *					, "nm_location" : "인천"
 *					, "_id$member_public" : 0
 *				}
 *			]
 *		, "cd$transaction_entity" : "TRA-2016-10-10-P1-1"
 * }
 * @return {uint} 0 or 1
 */

var transaction_delivery_information$update_id = function( d ){};

/**
 * @function
 * @param {Array} transaction_delivery_information
 * @return {uint} 0 or 1
 */

var transaction_delivery_information$update_ids = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *		"cd$category_delivery_type" : "0"
 *		, "cd$transaction_sale_item" : "0"
 *		, "date_delivery_start" : [2016,10,10,10,10,10]
 *		, "date_delivery_end" : [2016,12,10,10,10,10]
 *		, "delivery_history" :
 * 			[
 *				{
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,10,10,10,10]
 *					, "nm_location" : "서울"
 *					, "_id$member_public" : 0
 *				}, {
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,11,10,10,10]
 *					, "nm_location" : "인천"
 *					, "_id$member_public" : 0
 *				}
 *			]
 *		, "cd$transaction_entity" : "TRA-2016-10-10-PB10-1"
 * }
 * </code>
 */

var transaction_delivery_information$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 *	[
 *		{
 *			"cd$category_delivery_status" : 0
 *			, "date_arrive_location" : [2016,11,10,10,10,10]
 *			, "nm_location" : "서울"
 *			, "_id$member_public" : 0
 *		}, {
 *			"cd$category_delivery_status" : 0
 *			, "date_arrive_location" : [2016,11,11,10,10,10]
 *			, "nm_location" : "인천"
 *			, "_id$member_public" : 0
 *		}
 *	]
 * </code>
 */

var transaction_delivery_information$validation__delivery_history = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var transaction_delivery_information$validation__remove_id = function( n ){};

/**
 * @function
 * {
 *		"_id" : 0
 *		, "cd$category_delivery_type" : "0"
 *		, "cd$transaction_sale_item" : "0"
 *		, "date_delivery_start" : [2016,10,10,10,10,10]
 *		, "date_delivery_end" : [2016,12,10,10,10,10]
 *		, "delivery_history" :
 * 			[
 *				{
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,10,10,10,10]
 *					, "nm_location" : "서울"
 *					, "_id$member_public" : 0
 *				}, {
 *					"cd$category_delivery_status" : "0"
 *					, "date_arrive_location" : [2016,11,11,10,10,10]
 *					, "nm_location" : "인천"
 *					, "_id$member_public" : 0
 *				}
 *			]
 *		, "cd$transaction_entity" : "TRA-2016-10-10-P10-1"
 * }
 * @return {uint} 0 or 1
 */

var transaction_delivery_information$validation__update_id = function( d ){};

/**
 * //작성하기 - 박종하 - 20161110
 * @function
 * @return {uint} 0 or 1
 */
var transaction_delivery_information$validation__update_ids = function(){};

/**
 * @function
 */

var transaction_delivery_information$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var transaction_delivery_information$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_delivery_information }, { transaction_delivery_information }, ... ]
 */
var transaction_delivery_information$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { transaction_delivery_information }, { transaction_delivery_information }, ... ]
 */
var transaction_delivery_information$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_delivery_information$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction.transaction_entity;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_entity code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_entity$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_entity$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction.transaction_schedule_release;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_schedule_release code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_schedule_release$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_schedule_release$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction.transaction_schedule_wearing;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_schedule_wearing code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_schedule_wearing$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_schedule_wearing$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

/**
 * @function Array형태의 날짜를 String으로 변환해준다. ([2017, 01, 31] --> "20170131")
 * @param {Array} a Array형태의 날짜
 * @return {String}
 */

var _common_procedure$_getStringFromDateArray = function( a ){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_purchase.transaction_purchase_order_purchase_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_purchase_order_purchase_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_purchase_order_purchase_req$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_purchase_order_purchase_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_purchase.transaction_purchase_order_purchase_res;

//----------------------------------------------------------------------------------------------------;

/**
 * transaction_packing_list_wearing Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : d.cd
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_purchase_order_purchase_res$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	 "_id" : 0,
 *	 "cd$transaction_stock_wearing_req" : "GWO-2016-11-11-PS1-1",
 *	 "_id$member_public" : 0.0,
 *	 "cd" : "OOO-2016-11-11-PB1-1",
 *	 "total_quantity_pallet" : 0,
 *	 "total_quantity_package" : 4,
 *	 "total_quantity_unit" : 10,
 *	 "items" : [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 *	 ],
 *	 "date_create" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "date_cancel" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "memo" : "최대한 빨리 보내주세요",
 *	 "_id$member" : 0
 * }
 * </code>
 */
var transaction_purchase_order_purchase_res$createDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_purchase_order_purchase_res$findOne = function ( d ){};

/**
 * @function transaction_purchase_order_purchase_res code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_purchase_order_purchase_res$getResItemList = function(d){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 * ]
 * </code>
 * @return {Object}
 */
var transaction_purchase_order_purchase_res$get_code = function ( d ){};

/**
 * @function
 * @return {Array}
 */

var transaction_purchase_order_purchase_res$validation__addDoc__items = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_purchase_order_purchase_res$validation__createDoc = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_purchase._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

/**
 * @function
 * @param {array} array
 * @return {array}
 */

var _common_procedure$_getIntArray = function( a ){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_sale.transaction_purchase_order_sale_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_purchase_order_sale_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_purchase_order_sale_req$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_purchase_order_sale_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_sale.transaction_purchase_order_sale_res;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_purchase_order_sale_res code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_purchase_order_sale_res$findOne = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_purchase_order_sale_res$get_code = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_purchase_order_sale._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};

/**
 * @function
 * @param {array} array
 * @return {array}
 */

var _common_procedure$_getIntArray = function( a ){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_release.transaction_inspection_report_release;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_inspection_report_release code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_inspection_report_release$findByStockReleaseReqCd = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_inspection_report_release$get_code = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_release.transaction_packing_list_release;

//----------------------------------------------------------------------------------------------------;

/**
 * transaction_packing_list_release Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : d.cd
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_packing_list_release$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	 "_id" : 0,
 *	 "cd$transaction_stock_release_req" : "GWO-2016-11-11-PS1-1",
 *	 "_id$member_public" : 0.0,
 *	 "cd" : "OOO-2016-11-11-PB1-1",
 *	 "total_quantity_pallet" : 0,
 *	 "total_quantity_package" : 4,
 *	 "total_quantity_unit" : 10,
 *	 "items" : [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 *	 ],
 *	 "date_create" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "date_cancel" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "memo" : "최대한 빨리 보내주세요",
 *	 "_id$member" : 0
 * }
 * </code>
 */
var transaction_packing_list_release$createDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_packing_list_release$findByStockReleaseReqCd = function ( d ){};

/**
 * @function transaction_packing_list_release code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_packing_list_release$findOne = function( d ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 * ]
 * </code>
 * @return {Object}
 */
var transaction_packing_list_release$get_code = function ( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	 "_id" : 0,
 *	 "cd$transaction_stock_release_req" : "GWO-2016-11-11-PS1-1",
 *	 "_id$member_public" : 0.0,
 *	 "cd" : "OOO-2016-11-11-PB1-1",
 *	 "total_quantity_pallet" : 0,
 *	 "total_quantity_package" : 4,
 *	 "total_quantity_unit" : 10,
 *	 "items" : [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 },
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 3.0,
 *					 "package_no" : "11,12,13,14",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 20.0,
 *					 "quantity" : 200.0
 *				 },
 *				 {
 *					 "pallet_no" : 4.0,
 *					 "package_no" : "15,16,17,18",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 10.0,
 *					 "quantity" : 100.0
 *				 }
 *			 ]
 *		 }
 *	 ],
 *	 "date_create" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "date_cancel" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "memo" : "최대한 빨리 보내주세요",
 *	 "_id$member" : 0
 * }
 * </code>
 * @return {Object}
 */
var transaction_packing_list_release$validation__addDoc__items = function( d ){};

/**
 * @function
 * @return {Array}
 */

var transaction_packing_list_release$validation__createDoc = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_packing_list_release$_findAll = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_release.transaction_stock_release_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_release_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 */
var transaction_stock_release_req$addDoc = function( d ){};

/**
 * transaction_stock_release_req Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : d.cd
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_stock_release_req$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_stock_release_req$findOne = function( d ){};

/**
 * @function
 * @return {Array} [ {transaction_stock_release_req}, {transaction_stock_release_req}, ... ]
 */

var transaction_stock_release_req$findOneByCd = function( d ){};

/**
 * @function
 * @param {str}
 * @return {object}
 */

var transaction_stock_release_req$getAllList = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_stock_release_req }, { transaction_stock_release_req }, ... ]
 */

var transaction_stock_release_req$getBasicInfo = function( cd ){};

/**
 * @function transaction_stock_release_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_stock_release_req$getLastInfoByPurchaseOrderSaleRes = function ( d ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var transaction_stock_release_req$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var transaction_stock_release_req$get_code = function ( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_release_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 * @return {Object}
 */
var transaction_stock_release_req$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *	{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *	, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 * ]
 * </code>
 * @return {Object}
 */
var transaction_stock_release_req$remove_ids = function( ids ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var transaction_stock_release_req$validation__addDoc = function ( d ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var transaction_stock_release_req$validation__addDoc__items = function( d ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var transaction_stock_release_req$validation__remove_id = function( n ){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var transaction_stock_release_req$validation__update_id = function(){};

/**
 * @function
 * @return {Array}
 */

var transaction_stock_release_req$validation__update_ids = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_stock_release_req }, { transaction_stock_release_req }, ... ]
 */

var transaction_stock_release_req$_delete__getAllList = function( d ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { transaction_stock_release_req }, { transaction_stock_release_req }, ... ]
 */

var transaction_stock_release_req$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var transaction_stock_release_req$_findRange = function( _id_gt, _id_lt ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_release.transaction_stock_release_res;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_stock_release_res code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_buyer" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_stock_release_res$check__Overlap = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_stock_release_res$createDoc = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_release._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_wearing.transaction_inspection_report_wearing;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {string} {cd$transaction_stock_wearing_req}
 * @return {Collection}
 */

var transaction_inspection_report_wearing$findByStockWearingReqCd = function ( d ){};

/**
 * @function transaction_inspection_report_wearing code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_inspection_report_wearing$get_code = function ( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_inspection_report_wearing$save = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_wearing.transaction_packing_list_wearing;

//----------------------------------------------------------------------------------------------------;

/**
 * transaction_packing_list_wearing Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : d.cd
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_packing_list_wearing$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	 "_id" : 0,
 *	 "cd$transaction_stock_wearing_req" : "GWO-2016-11-11-PS1-1",
 *	 "_id$member_public" : 0.0,
 *	 "cd" : "OOO-2016-11-11-PB1-1",
 *	 "total_quantity_pallet" : 0,
 *	 "total_quantity_package" : 4,
 *	 "total_quantity_unit" : 10,
 *	 "items" : [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 *	 ],
 *	 "date_create" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "date_cancel" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "memo" : "최대한 빨리 보내주세요",
 *	 "_id$member" : 0
 * }
 * </code>
 */
var transaction_packing_list_wearing$createDoc = function( d ){};

/**
 * @function
 * @param {string} {cd$transaction_stock_wearing_req}
 * @return {Collection}
 */

var transaction_packing_list_wearing$findByStockWearingReqCd = function ( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_packing_list_wearing$findOne = function( d ){};

/**
 * @function transaction_packing_list_wearing code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_packing_list_wearing$get_code = function ( d ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 }
 * ]
 * </code>
 * @return {Object}
 */
var transaction_packing_list_wearing$validation__addDoc__items = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	 "_id" : 0,
 *	 "cd$transaction_stock_wearing_req" : "GWO-2016-11-11-PS1-1",
 *	 "_id$member_public" : 0.0,
 *	 "cd" : "OOO-2016-11-11-PB1-1",
 *	 "total_quantity_pallet" : 0,
 *	 "total_quantity_package" : 4,
 *	 "total_quantity_unit" : 10,
 *	 "items" : [
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "1,2,3,4",
 *					 "package_quantity_per_pallet" : 100.0,
 *					 "unit_quantity_per_package" : 100.0,
 *					 "quantity" : 10000.0
 *				 },
 *				 {
 *					 "pallet_no" : 1.0,
 *					 "package_no" : "5,6,7,8",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 11.0,
 *					 "quantity" : 110.0
 *				 }
 *			 ]
 *		 },
 *		 {
 *			 "_id$product_basic" : 0,
 *			 "_id$brand_basic" : 0,
 *			 "upc_no" : "8806334341688",
 *			 "packing_info" : [
 *				 {
 *					 "pallet_no" : 3.0,
 *					 "package_no" : "11,12,13,14",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 20.0,
 *					 "quantity" : 200.0
 *				 },
 *				 {
 *					 "pallet_no" : 4.0,
 *					 "package_no" : "15,16,17,18",
 *					 "package_quantity_per_pallet" : 10.0,
 *					 "unit_quantity_per_package" : 10.0,
 *					 "quantity" : 100.0
 *				 }
 *			 ]
 *		 }
 *	 ],
 *	 "date_create" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "date_cancel" : [
 *		 2016,
 *		 11,
 *		 30,
 *		 0,
 *		 0,
 *		 0
 *	 ],
 *	 "memo" : "최대한 빨리 보내주세요",
 *	 "_id$member" : 0
 * }
 * </code>
 * @return {Object}
 */
var transaction_packing_list_wearing$validation__createDoc = function( d ){};

/**
 * @function
 * @return {Array}
 */

var transaction_packing_list_wearing$_findAll = function(){};

/**
 * @function
 * @return {Collection}
 */

var transaction_packing_list_wearing$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_wearing.transaction_stock_wearing_req;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_wearing_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 */
var transaction_stock_wearing_req$addDoc = function( d ){};

/**
 * transaction_stock_wearing_req Overlap check
 * @function
 * @param {Object} d
 * <code>
 * {
 	"cd" : d.cd
 * }
 * </code>
 * @return {int} 0 or 1
 */

var transaction_stock_wearing_req$check__Overlap = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_wearing_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 */
var transaction_stock_wearing_req$createDoc = function( d ){};

/**
 * @function
 * @param {Object} { key : value }
 * @return {Document}
 */

var transaction_stock_wearing_req$findOne = function( d ){};

/**
 * @function
 * @param {string} cd
 * @return {Document}
 */

var transaction_stock_wearing_req$findOneByCd = function ( d ){};

/**
 * @function
 * @return {Array} [ {transaction_stock_wearing_req}, {transaction_stock_wearing_req}, ... ]
 */

var transaction_stock_wearing_req$getAllList = function(){};

/**
 * @function
 * @param {str}
 * @return {object}
 */

var transaction_stock_wearing_req$getBasicInfo = function ( cd ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_stock_wearing_req }, { transaction_stock_wearing_req }, ... ]
 */

var transaction_stock_wearing_req$getList_Range__id = function( _id_gt, _id_lt ){};

/**
 * cd$transaction_purchase_order_purchase_res 값으로 {Document}를 가져온다.
 * @function
 * @param {String} cd 문서번호
 * @return {Array} [ { transaction_stock_wearing_req }, { transaction_stock_wearing_req }, ... ]
 */
var transaction_stock_wearing_req$getList___cd$transaction_purchase_order_purchase_res = function( cd$transaction_purchase_order_purchase_res ){};

/**
 * @function transaction_stock_wearing_req code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_stock_wearing_req$get_code = function ( d ){};

/**
 * remove document by _id
 * @function
 * @param {uint} _id
 * @return {uint} 0 or 1
 */
var transaction_stock_wearing_req$remove_id = function( _id ){};

/**
 * @function
 * @param {Array} ids
 * @return {uint} 0 or 1
 */
var transaction_stock_wearing_req$remove_ids = function( ids ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_wearing_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 * @return {Object}
 */
var transaction_stock_wearing_req$validation__addDoc = function( d ){};

/**
 * @function
 * @param {Array} d
 * <code>
 * [
 *	{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *	, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 * ]
 * </code>
 * @return {Object}
 */
var transaction_stock_wearing_req$validation__addDoc__items = function( d ){};

/**
 * @function
 * @param {Object} d
 * <code>
 * {
 *	_id : 0
 *	, _id$company_info_basic : 0
 *	, _ids$member : {
 *		manager : 0
 *		, register : 0
 *	}
 *	, _id$partner_supplier : 0
 *	, _id$partner_person : 0
 *	, cd_transaction_stock_wearing_req : "GWO2016111110101"
 *	, date_create : [2016, 11, 30, 0, 0, 0]
 *	, date_cancel : [0, 0, 0, 0, 0, 0]
 *	, date_request : [0, 0, 0, 0, 0, 0]
 *	, _id$category_inspection_type : 0
 *	, _id$category_inspection_detail_type : 0
 *	, items : [
 *		{ _id$brand_basic : 0, _id$product_basic : 0, quantity : 100, UOM : { "nm" : "pkg", quantity : 10 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *		, { _id$brand_basic : 1, _id$product_basic : 1, quantity : 100, UOM : { "nm" : "pkg", quantity : 20 } }
 *	]
 *	, memo : "최대한 빨리 받아주세요"
 *	, stock_wearing_date : [2016, 12, 7, 0, 0, 0]
 *	, stock_wearing_address : {
 *		cd$country : "KR"
 *		, cd_postal : "12345"
 *		, add1 : "서울시"
 *		, add2 : "강남구"
 *		, add3 : "미림타워12층 비투링크"
 *		, add4 : ""
 *		, add5 : ""
 *		, add6 : ""
 *	}
 *	, _id$stock_wearing_member : 0
 * }
 * </code>
 * @return {Object}
 */
var transaction_stock_wearing_req$validation__createDoc = function( d ){};

/**
 * @function
 * @param {uint} n
 * @return {uint} 0, 1
 */
var transaction_stock_wearing_req$validation__remove_id = function( n ){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var transaction_stock_wearing_req$validation__update_id = function(){};

/**
 * @function
 * @return {uint} 0 or 1
 */
var transaction_stock_wearing_req$validation__update_ids = function(){};

/**
 * delete _id 를 제거하고 반환한다...
 * @function
 * @param {Document} d
 */

var transaction_stock_wearing_req$_delete__getAllList = function( d ){};

/**
 * @function
 * @return {Array}
 */

var transaction_stock_wearing_req$_findAll = function(){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @return {Array} [ { transaction_stock_wearing_req }, { transaction_stock_wearing_req }, ... ]
 */

var transaction_stock_wearing_req$_findRange = function( _id_gt, _id_lt ){};

/**
 * _id_gt ~ _id_lt 사이의 _id 값을 가진 {Document}를 가져온다.
 * _id_gt와 _id_lt의 값은 포함하지 않는다.
 * @function
 * @param {uint} _id_gt start index
 * @param {uint} _id_lt end index
 * @param {uint} nLimit
 * @return {Array} [ { transaction_stock_wearing_req }, { transaction_stock_wearing_req }, ... ]
 */

var transaction_stock_wearing_req$_findRangeLimit = function( _id_gt, _id_lt, nLimit ){};

/**
 * cd$transaction_purchase_order_purchase_res 값으로 {Document}를 가져온다.
 * @function
 * @param {String} cd$transaction_purchase_order_purchase_res 구매발주확정 회신 문서번호
 * @return {Array} [ { transaction_stock_wearing_req }, { transaction_stock_wearing_req }, ... ]
 */
var transaction_stock_wearing_req$_find___cd$transaction_purchase_order_purchase_res = function( cd$transaction_purchase_order_purchase_res ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_stock_wearing_req$_getCol = function(){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_wearing.transaction_stock_wearing_res;

//----------------------------------------------------------------------------------------------------;

/**
 * @function transaction_stock_wearing_res code 생성
 * @param {Object} d
 * <code>
 * {
 *	"_id$partner_supplier" : 0
 *	, "date_create" : [2017,01,31,00,00,00]
 * }
 * </code>
 * @return {String} code
 */

var transaction_stock_wearing_res$check__Overlap = function( d ){};

/**
 * @function
 * @return {Collection}
 */

var transaction_stock_wearing_res$createDoc = function ( d ){};

//----------------------------------------------------------------------------------------------------;

//	transaction_stock_wearing._common_procedure;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @param {Object} oSearch search Object
 * @return {Document}
 */
var _common_procedure$findOne = function( nmCol, oSearch ){};

/**
 * @function
 * @param {String} nmCol Collection's Name
 * @return {Array}
 */
var _common_procedure$_findAll = function( nmCol ){};

/**
 * @function
 * @param {String} dbNm
 * @param {String} colNma
 * @return {Collection}
 */
var _common_procedure$_getCol = function( dbNm, colNm ){};

/**
 * @function
 * @return {Database}
 */
var _common_procedure$_getDB = function(){};


var _common_procedure$_pad = function pad(n, width){};

//----------------------------------------------------------------------------------------------------;

//	_common.search;

//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {Document}, {Document}, ... ]
 */

var search$getAllList = function( d ){};

/**
 * @function
 * @return {Array} [ {Document}, {Document}, ... ]
 */

var search$getSearchList = function( d ){};

/**
 * @function
 * @return {Array} [ {Document}, {Document}, ... ]
 */

var search$getSearchList2 = function( d ){};

/**
 * @function
 * @return {Array} [ {Document}, {Document}, ... ]
 */

var search$getSelectorList2Cnt = function( d ){};

//----------------------------------------------------------------------------------------------------;

//	_instance.cols;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_instance.dbs;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.administrator;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.authority;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.brand;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.category;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.company;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.information;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.list_static;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.member;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.partner;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.product;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.server_file;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.settlement;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.stock;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.transaction;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.transaction_purchase_order_purchase;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.transaction_purchase_order_sale;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.transaction_stock_release;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema.transaction_stock_wearing;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema._common;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.000_common_txt;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.100_common_json;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.103_contract_information;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.110_date_txt;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.110_price_json;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.120_date_json;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.150_delivery_json;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.160_payment_json;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.500_common_keyValue;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.501_stock_release_operation_type;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.600_file;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.address;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.brand;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.category_division;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.category_division_part;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.category_division_team;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.category_inspection_type;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.company_info;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.cost;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.inspection;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.list_static;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.member;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.merchandise_item;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.partner;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.payment;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.product;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.stock;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.transaction;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_include.warehouse;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.administrator;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.authority;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.brand;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.category;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.company;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.information;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.list_static;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.member;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.partner;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.product;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.server_file;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.settlement;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.stock;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.transaction;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.transaction_purchase_order_purchase;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.transaction_purchase_order_sale;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.transaction_stock_release;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.transaction_stock_wearing;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template._common;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	_schema_template.__Backup;

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
var fileNm = "database--200_Build_AddProcedure__Collection.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./database--00_Config.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var path_col = "../database/member/member_basic/";
/*/
var path_col = "../database/authority/auth_col/";
var path_col = "../database/authority/auth_col_c/";
var path_col = "../database/authority/auth_col_d/";
var path_col = "../database/authority/auth_col_r/";
var path_col = "../database/authority/auth_col_u/";
var path_col = "../database/authority/auth_db/";
var path_col = "../database/authority/auth_db_c/";
var path_col = "../database/authority/auth_db_d/";
var path_col = "../database/authority/auth_db_r/";
var path_col = "../database/authority/auth_db_u/";
var path_col = "../database/brand/brand_basic/";
var path_col = "../database/category/category_delivery_status/";
var path_col = "../database/category/category_delivery_type/";
var path_col = "../database/category/category_division_b2link/";
var path_col = "../database/category/category_partner_buyer/";
var path_col = "../database/category/category_partner_logistics/";
var path_col = "../database/category/category_partner_supplier/";
var path_col = "../database/category/category_product/";
var path_col = "../database/category/category_transaction_result/";
var path_col = "../database/category/partner_buyer_category/";
var path_col = "../database/category/partner_logistics_category/";
var path_col = "../database/category/partner_supplier_category/";
var path_col = "../database/category/product_category/";
var path_col = "../database/list_static/bank_swift_cn/";
var path_col = "../database/list_static/bank_swift_kr/";
var path_col = "../database/list_static/bank_swift_us/";
var path_col = "../database/list_static/common_code/";
var path_col = "../database/list_static/company_delivery/";
var path_col = "../database/list_static/country/";
var path_col = "../database/list_static/currency/";
var path_col = "../database/list_static/email_detail/";
var path_col = "../database/list_static/job_title/";
var path_col = "../database/list_static/messenger/";
var path_col = "../database/list_static/postalcode_cn/";
var path_col = "../database/list_static/postalcode_kr/";
var path_col = "../database/list_static/trade_terms/";
var path_col = "../database/list_static/transaction/";
var path_col = "../database/list_static/zipcode_kr/";
var path_col = "../database/member/member_basic/";
var path_col = "../database/member/member_date/";
var path_col = "../database/member/member_public/";
var path_col = "../database/member/member_session/";
var path_col = "../database/member/member_session_log/";
var path_col = "../database/partner/partner_buyer/";
var path_col = "../database/partner/partner_logistics/";
var path_col = "../database/partner/partner_person/";
var path_col = "../database/partner/partner_supplier/";
var path_col = "../database/product/product_basic/";
var path_col = "../database/transaction/transaction_delivery_information/";
var path_col = "../database/transaction_quote_purchase/transaction_quote_purchase_req/";
var path_col = "../database/transaction_quote_purchase/transaction_quote_purchase_res/";
var path_col = "../database/transaction_quote_sale/transaction_quote_sale_req/";
var path_col = "../database/transaction_quote_sale/transaction_quote_sale_res/";
//*/

SUtilFsWriteStream_Extension_Dev__MongoDB.build__addProcedure__Collection( path_col, "member", "member_basic" );

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
// var fileNm = "js/b2link_router/__define/200_define_global.b2link_router.diffData.js";
// if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_router.diffData;
	
global.b2link_router.diffData = global.b2link_router.diffData || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_router.diffData;

//----------------------------------------------------------------------------------------------------;
// Constant
//----------------------------------------------------------------------------------------------------;
let style_reporting_table =
`<style>
	.table_header { text-align: left; font-weight: bold; font-size: 20px; margin: 0; padding: 25px 0 0 0; }
	.reporting_table { width: 100%; border: 1px #E2E2E2 solid; border-collapse: collapse; border-left: none; border-right: none; margin-top: 10px; }
	.reporting_table tr { background : #FFF; }
	.reporting_table tr.odd { background : #F2F2F2; }
	.reporting_table tr:hover { background : #A9CDE8; }
	.reporting_table th { font-weight: normal; font-size: 13px; height: 35px; background-color: #cce2ff; }
	.reporting_table td { padding: 10px; font-weight: normal; font-size: 13px; }
</style>`;


let table_colgroup_continuity = `<colgroup><col width="10%"><col width="10%"><col width="10%"><col width="20%"><col width="30%"><col width="8%"><col width="6%"><col width="6%"></colgroup>`;


global.b2link_router.diffData.makeHTML__continuity = function( context, d ) {

		context += style_reporting_table;

		let targetDate = d.date;
		let sourceDate = new Date( targetDate );
			sourceDate.setDate( sourceDate.getDate() - 1 );
			sourceDate = sourceDate.toISOString().substr( 0, 10 );

		// Label
		context += `<p class="table_header">연속성 체크</p>`;
		context += `<table class="reporting_table">`;
		context += table_colgroup_continuity;
		context += `<tbody>`;
		context += "<tr>";

		// Table Header
		context += `<th>CHANNEL</th>`;
		context += `<th>${sourceDate}<br/>TOTAL</th>`;
		context += `<th>${targetDate}<br/>TOTAL</th>`;
		context += `<th>NAME VALIDATION<br />SUCCESS (FAIL)</th>`;
		context += `<th>PRICE VALIDATION<br />SUCCESS (FAIL) (OVER 20%)</th>`;
		context += `<th>BOTH FAILED</th>`;
		context += `<th>SKIP</th>`;
		context += `<th>NEW</th>`;
		context += `</tr>`;

		// Table Body VIP
		try {
			let ln_report_vip = `http://222.239.10.122:45325/collected_data/collected_data/differentDataDownLoadExcelFile?date=${targetDate}&channel=vip`;
			let html = `
			<tr>
				<td> VIP </td>
				<td>${d.continuityVip_list[ 0 ].result.total_source}</td>
				<td>${d.continuityVip_list[ 0 ].result.total_target}</td>
				<td>${d.continuityVip_list[ 0 ].result.count.title_pass} (<a href='${ln_report_vip}&type=title' target='_blank'>${d.continuityVip_list[ 0 ].result.count.title_fail}</a>)</td>
				<td>${d.continuityVip_list[ 0 ].result.count.price_pass} (<a href='${ln_report_vip}&type=price' target='_blank'>${d.continuityVip_list[ 0 ].result.count.price_fail}</a>) (<a href='${ln_report_vip}&type=over' target='_blank' style="color:red;">${d.continuityVip_list[ 0 ].result.count.ratio_violate}</a>)</td>
				<td><a href='${ln_report_vip}&type=both' target='_blank' style="color:red;">${d.continuityVip_list[ 0 ].result.count.both_fail}</a></td>
				<td><a href='${ln_report_vip}&type=remove' target='_blank'>${d.continuityVip_list[ 0 ].result.count.skip}</a></td>
				<td><a href='${ln_report_vip}&type=new' target='_blank'>${d.continuityVip_list[ 0 ].result.count.new}</a></td>
			</tr>
			`;
			context += html;
		} catch ( e ) {
			console.log( e.message );
			// 수집 상품 정보 체크
			context += `<tr>`;
			context += `<td>VIP</td>`;
			context += '<td colspan="7">검증 데이터 없음</td>';
			context += `</tr>`;
		}

		// Table Body KAOLA
		try {

			let ln_report_kaola = `http://222.239.10.122:45325/collected_data/collected_data/differentDataDownLoadExcelFile?date=${targetDate}&channel=kaola`;
			let html = `
			<tr class="odd">
				<td> KAOLA </td>
				<td>${d.continuityKaola_list[ 0 ].result.total_source}</td>
				<td>${d.continuityKaola_list[ 0 ].result.total_target}</td>
				<td>${d.continuityKaola_list[ 0 ].result.count.title_pass} (<a href='${ln_report_kaola}&type=title' target='_blank'>${d.continuityKaola_list[ 0 ].result.count.title_fail}</a>)</td>
				<td>${d.continuityKaola_list[ 0 ].result.count.price_pass} (<a href='${ln_report_kaola}&type=price' target='_blank'>${d.continuityKaola_list[ 0 ].result.count.price_fail}</a>) (<a href='${ln_report_kaola}&type=over' target='_blank' style="color:red;">${d.continuityKaola_list[ 0 ].result.count.ratio_violate}</a>)</td>
				<td><a href='${ln_report_kaola}&type=both' target='_blank' style="color:red;">${d.continuityKaola_list[ 0 ].result.count.both_fail}</a></td>
				<td><a href='${ln_report_kaola}&type=remove' target='_blank'>${d.continuityKaola_list[ 0 ].result.count.skip}</a></td>
				<td><a href='${ln_report_kaola}&type=new' target='_blank'>${d.continuityKaola_list[ 0 ].result.count.new}</a></td>
			</tr>
			`;
			context += html;

		} catch ( e ) {

			console.log( e.message );
			// 수집 상품 정보 체크
			context += `<tr>`;
			context += `<td>KAOLA</td>`;
			context += `<td colspan="7">검증 데이터 없음</td>`;
			context += `</tr>`;
		}

		// Table Body Taobao
		try {
			let ln_report_taobao = `http://222.239.10.122:45325/collected_data/collected_data/differentDataDownLoadExcelFile?date=${targetDate}&channel=taobao`;
			let html = `
			<tr>
				<td> TAOBAO </td>
				<td>${d.continuity_list[ 0 ].result.total_source}</td>
				<td>${d.continuity_list[ 0 ].result.total_target}</td>
				<td>${d.continuity_list[ 0 ].result.count.title_pass} (<a href='${ln_report_taobao}&type=title' target='_blank'>${d.continuity_list[ 0 ].result.count.title_fail}</a>)</td>
				<td>${d.continuity_list[ 0 ].result.count.price_pass} (<a href='${ln_report_taobao}&type=price' target='_blank'>${d.continuity_list[ 0 ].result.count.price_fail}</a>) (<a href='${ln_report_taobao}&type=over' target='_blank' style="color:red;">${d.continuity_list[ 0 ].result.count.ratio_violate}</a>)</td>
				<td><a href='${ln_report_taobao}&type=both' target='_blank' style="color:red;">${d.continuity_list[ 0 ].result.count.both_fail}</a></td>
				<td><a href='${ln_report_taobao}&type=remove' target='_blank'>${d.continuity_list[ 0 ].result.count.skip}</a></td>
				<td><a href='${ln_report_taobao}&_type=new' target='_blank'>${d.continuity_list[ 0 ].result.count.new}</a></td>
			</tr>
			`;

			context += html;

		} catch ( e ) {
			console.log( e.message );
			// 수집 상품 정보 체크
			context += `<tr>`;
			context += `<td>TAOBAO</td>`;
			context += `<td colspan="7">검증 데이터 없음</td>`;
			context += `</tr>`;
		}

		// 수집 상품정보 테이블 닫기
		context += `</table><br />`;
		context += "<u style='color:red'>* 수집 실패량 클릭시 상세보기 페이지로 이동합니다.</u><br/>";
		context += "<u style='color:red'>* 검증 성공량 + 검증 실패량 + 신규상품 추가량 = 하루전 총수량 </u><br/>";
		context += "<u style='color:red'>* 검증 성공량 + 검증 실패량 + 기존상품 삭제량 = 이틀전 총수량 </u><br/>";
		context += `<br /><div style="font-size: 13px; text-align: right;"><a href="http://skumapper.b2link.co.kr" target="_blank" style="color: blue;">go to SKU Mapper</a></div>`;

	return context;
};


//----------------------------------------------------------------------------------------------------;
// if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
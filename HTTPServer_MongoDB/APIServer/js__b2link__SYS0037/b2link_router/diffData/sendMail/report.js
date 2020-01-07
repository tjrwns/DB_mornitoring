//----------------------------------------------------------------------------------------------------;
var fileNm = "js__b2link__SYS0037/b2link_router/diffData/sendMail/report.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
let CONFIG_EMAIL_INFO = {
    url: 'http://api.b2link.co.kr/mailer/send', // [BL] B2LiNK-China-Crawler 모니터링
    headers: {
        'Content-Type': 'application/json'
    },
    default_data: {
        sender  : `"B2LABS DEV" <dev@b2link.co.kr>`,
        to : `문원준 <moon@b2link.co.kr>`,
        //*/
		cc : `"김현요" <hykim@b2link.co.kr>, "박종하" <ray@b2link.co.kr>, "유선아" <sayoo@b2link.co.kr>, "차오야추" <yachu@b2link.co.kr>, "양방이" <fangyi@b2link.co.kr>, "최석준" <jun@b2link.co.kr>, "나정훈" <jhna@b2link.co.kr>`,
        /*/
		cc : ``,
		//*/
		receiver: `"이재현" <jaehyun@b2link.co.kr>, "송선우" <ssw@b2link.co.kr>`
    }
};

(function( req, res ) {
	// Start log
	global.HykLog.timeStamp( `- [ S ][${new Date().toISOString()}] --- diffData/sendMail/report():void----------` );

	let start = new Date().getTime();

	// URL Parameters to Object
	let q = global.b2link.url.getQueryFromURL_Decode( req.url );


	/*
	 * Get Continuity Data
	 */
	let continuityKaola_list = getContinuityKaolaNewList( q );
	let continuityVip_list = getContinuityVipNewList( q );
	let continuity_list = getContinuityNewList( q );


	let data = {
		continuity_list : continuity_list,
		continuityKaola_list : continuityKaola_list,
		continuityVip_list : continuityVip_list,
		date : q.date
	};

	if ( continuity_list.length > 0 || continuityVip_list.length > 0 || continuityKaola_list.length > 0 ) {
		// 이메일 내용 만들기
		let email_info = makeContext__Email( data );

		// Notification : Email
		notification_email( email_info );
	}

	// Response
	let _response = {
		"status" : 200,
		"msg" : "success",
		"exe_time" : new Date().getTime() - start
		// "data" : data
	};
	global.b2link.response.send_200_JSON( req, res, _response );

	// End log
	global.HykLog.timeStamp( `- [ E ][${new Date().toISOString()}] --- diffData/sendMail/report():void----------` );

	//----------------------------------------------------------------------------------------------------;
    // Functions
    //----------------------------------------------------------------------------------------------------;
	/**
	 *	Function
	 *	validation - Continuity 데이터 가져오기 ( 어제 날짜 )
	 *	@Param { Object } _q
	 <code>
	 	{
			date : "2018-10-11"
	 	}
	 </code>
     */
    function getContinuityNewList( _q ) {
    	let query_path = "./js__b2link__SYS0037/b2link_router/diffData/sendMail/getValidation__continuity_new.dbjs";

        let param = {
            start_date : _q.date,
            end_date : _q.date
        };
        let data = global.b2link.mdb.executeQuery_remote( query_path, param, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).HOST, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).PORT );
        return data;
    };

	/**
	 *	Function
	 *	validation - Continuity 데이터 가져오기 ( 어제 날짜 )
	 *	@Param { Object } _q
	 <code>
	 	{
			date : "2018-10-11"
	 	}
	 </code>
     */
    function getContinuityKaolaNewList( _q ) {
    	let query_path = "./js__b2link__SYS0037/b2link_router/diffData/sendMail/getValidation__continuity_kaola_new.dbjs";
        let param = {
            start_date : _q.date,
            end_date : _q.date
        };
        let data = global.b2link.mdb.executeQuery_remote( query_path, param, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).HOST, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).PORT );
        return data;
    };

	/**
	 *	Function
	 *	validation - Continuity 데이터 가져오기 ( 어제 날짜 )
	 *	@Param { Object } _q
	 <code>
	 	{
			date : "2018-10-11"
	 	}
	 </code>
     */
    function getContinuityVipNewList( _q ) {
    	let query_path = "./js__b2link__SYS0037/b2link_router/diffData/sendMail/getValidation__continuity_vip_new.dbjs";
        let param = {
            start_date : _q.date,
            end_date : _q.date
        };
        let data = global.b2link.mdb.executeQuery_remote( query_path, param, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).HOST, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).PORT );
        return data;
    };

	/**
	 *	Function
	 *	validation - Continuity 데이터 가져오기 ( 어제 날짜 )
	 *	@Param { Object } _q
	 <code>
	 	{
			date : "2018-10-11"
	 	}
	 </code>
     */
    function getSchemaList( _q ) {
    	let query_path = "./dbjs/diffData/schema/getValidation__schema.dbjs";
        let param = {
            start_date : _q.date,
            end_date : _q.date
        };
        let data = global.b2link.mdb.executeQuery_remote( query_path, param, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).HOST, global.onsight.batchServer.DB.common.getDBinfo( "MAPPER" ).PORT );
        return data;
    };

    /**
     * Function
     * 이메일 내용 만들기
     * @Param {Object} d
     <code>
	{
		collect_kaola_list : []
		, collect_red_list : []
		, collect_vip_list : []
		, continuity_list : []
		, schema_list : []
	}
     </code>
     */
    function makeContext__Email( d ) {
    	let title = "수집데이터 검증 내역";
    	let context = "";
    	let o = {
    		  from : ""//"B2LABS DEV" <dev@b2link.co.kr>
			, to : `"김현요" <hykim@b2link.co.kr>`
			, cc : ""
			, bcc : ""
			, subject : "[ OnSight-Admin ] - " + title
			, text : "TEST-TEXT"
			, html : "TEST-HTML"
    	};

    	// TODO :: 받는 사람 지정하기
		o.to = CONFIG_EMAIL_INFO.default_data.to;
    	// TODO :: 참조 지정하기
		o.cc = CONFIG_EMAIL_INFO.default_data.cc;
    	// TODO :: 숨은 참조 지정하기
		if( false ) o.bcc = "";

		context = makeContext__Html( d );


		// 메일폼 HTML;
		let mail_form_path = "./thtml/diffData-sendMail-mail_form.thtml";
		let form_html = global.b2link.fs.getFile_UTF8( mail_form_path );
			form_html = form_html.replace( "<!=title=!>", d.date + " " + title )
								 .replace( "<!=context=!>", context );

		//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
		global.b2link.fs.writeQuery( "./thtml/diffData-sendMail-mail_form.html", form_html );

		o.html = form_html;
    	return o;
    };

    /**
     * Function
     * 이메일 발송
	 * @param {Object} opt
	 * <code>
	 {
		from: config.email.sender, // sender address
		to: config.email.receiver, // list of receivers
		cc: '', // (optional)
		bcc: '', // (optional)
		subject: 'Subject', // Subject line
		text: '', // plaintext body
		html: 'content' // html body
	 }
	 * </code>
     */
    function notification_email( opt ) {
		let cbObject = {
	        "end" : function( res ) {
	            console.log( "send notification success" );
	            // return resolve("send notification success");
	        },
	        "error" : function( err ) {
	            console.error( "send notification error" );
	            // return resolve("send notification error");
	        }
	    };

	    try {
	    	sendEmail( opt, cbObject );
	    } catch ( e ) {
	    	console.error( e.message );
	    	console.log( "Email Notification Failed" );
	    }
	};

    /**
     * Function
     * 이메일 내용 HTML만들기
     * @Param {Object} d
     <code>
	{
		collect_kaola_list : []
		, collect_red_list : []
		, collect_vip_list : []
		, continuity_list : []
		, schema_list : []
	}
     </code>
     */
    function makeContext__Html( d ) {
		console.log( "-------------------- start makeContext__Html --------------------" );
    	let context = "";

		// 수집 상품정보 헤더 정의
		console.log( "-------------------- product info --------------------" );
		context = global.b2link_router.diffData.makeHTML__continuity( context, d );

		console.log( "-------------------- end makeContext__Html --------------------" );
    	return context;
    };

	/**
	 * 이메일 발송
	 * @param {object} reqObject
	 * <code>
	 {
				from: config.email.sender, // sender address
				to: config.email.receiver, // list of receivers
				cc: '', // (optional)
				bcc: '', // (optional)
				subject: 'Subject', // Subject line
				text: '', // plaintext body
				html: 'content' // html body
			}
	 * </code>
	 * @param {object} cbObject
	 * <code>
	 {
				"abort" : function(){}//request;
				, "connect" : function( response, socket, head ){}//request;
				, "continue" : function(){}//request;
				, "data" : function( chunk ){ console.log( chunk ); }//res;
				, "end" : function( data ){ console.log( data ); }//res; -> primary success callback
				, "error" : function( error ){ console.log( error ); }//request, res;
				, "response" : function( response ){ console.log( response ); }//request;
				, "socket" : function( socket ){ console.log( socket ); }//request;
				, "upgrade" : function( response, socket, head ){}//request;
				, "timeout" : function(){}//reqeust;
			}
	 * </code>
	 */
	function sendEmail(reqObject, cbObject) {
		var config = CONFIG_EMAIL_INFO;
	    reqObject.from = reqObject.from || config.default_data.sender;
	    /*/
		reqObject.to = `"최석준" <jun@b2link.co.kr>`;
		/*/
		reqObject.to = reqObject.to || config.default_data.receiver;
	    //*/
		global.b2link.request.post(config.url, cbObject, config.headers, JSON.stringify(reqObject));
	};

	//----------------------------------------------------------------------------------------------------;
    // Functions
    //----------------------------------------------------------------------------------------------------;
});
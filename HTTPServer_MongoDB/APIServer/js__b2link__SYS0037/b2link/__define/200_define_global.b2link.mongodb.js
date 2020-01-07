//----------------------------------------------------------------------------------------------------;
//var fileNm = "js__b2link__SYS0037/b2link/__define/200_define_global.b2link.mongodb.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.url;

global.b2link.mongodb = global.b2link.mongodb || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.url;

(function(){
	var CWD = global.process.cwd();
	var commandOption = {
		  connection : "--host <!=HOST=!> --port <!=PORT=!> --username <!=username=!> --password <!=password=!> --authenticationDatabase=admin "
		, export : '--db "<!=db=!>" --collection "<!=collection=!>" --out "<!=out=!>"'
		, import : '--db "<!=db=!>" --collection "<!=collection=!>" --file "<!=file=!>"'
	};

	var _COMMAND_TYPES = {
		//linux;
		LINUX : {
			  mongoexport : CWD + "/../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/4.0.0/mongoexport " + commandOption.connection + commandOption.export
			, mongoimport : CWD + "/../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/4.0.0/mongoimport " + commandOption.connection + commandOption.import
		}
		//mac;
		, DARWIN : {
			  mongoexport : CWD + "/../../../Development-Binary-Mac/Binary/MongoDB/4.0.0/mongoexport " + commandOption.connection + commandOption.export
			, mongoimport : CWD + "/../../../Development-Binary-Mac/Binary/MongoDB/4.0.0/mongoimport " + commandOption.connection + commandOption.import
		}
		//windows;
		, WIN32 : {
			  mongoexport : CWD + "\\..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoexport " + commandOption.connection + commandOption.export
			, mongoimport : CWD + "\\..\\..\\..\\Development-Binary-Windows\\Binary\\MongoDB\\4.0.0\\mongoimport " + commandOption.connection + commandOption.import
		}
	};

	//os check;
	var os_type = global.b2link.os.NAME;
	var _COMMAND = _COMMAND_TYPES[ os_type ];

	/**
	 * MongoDB executeQuery용;
	 * (호스트를 변경해가면서 사용가능하다.);
	 * @param {Object} conectionInfo
	 <code>
	 {
		"HOST" : "222.239.10.120"
		, "PORT" : 55521
		, "DB":"admin"
		, "ID" : "b2link"
		, "PASS" : "qlxnfldzmdb2017_"
	}
	 </code>
	 * @param {String} query  //"printJSON(show dbs);"
	 * @param {Function} cbComplete
	 */
	global.b2link.mongodb.executeQuery = function( conectionInfo, query, cbComplete ){
		global.CSJLog.timeStamp( "---- [ S ] - global.b2link.mongodb.executeQuery():void----------" );

		var t = conectionInfo;
		global.mongodb.exec({ host : t.HOST, port : t.PORT, dbNm : t.DB, query : query
			, cbComplete : cbComplete
		});

		global.CSJLog.timeStamp( "---- [ E ] - global.b2link.mongodb.executeQuery():void----------" );
	};

	/**
	 * @function
	 * @param {Object} conectionInfo
	 <code>
	 {
		"HOST" : "222.239.10.120"
		, "PORT" : 55521
		, "DB":"admin"
		, "ID" : "b2link"
		, "PASS" : "qlxnfldzmdb2017_"
	 }
	 * @param {String} query
	 * @return {String} print(), printjson() 등을 사용한 문자열을 줄을 나누어 반환해준다.
	 * @example
	 * <code>
		global.mongodb.execSync( "127.0.0.1", 59322, "admin", "printjson(db);" )

		var result = global.mongodb.execSync( "127.0.0.1", 59322, "admin", `
			var r = [];
			db.getSiblingDB( "member" ).getCollection( "member_basic" ).find({}).forEach(function( doc ){
				r.push( doc );
			});
			print( JSON.stringify( r ) );
		`);
	* </code>
	*/
	global.b2link.mongodb.executeQuerySync = function( conectionInfo, query ){
		global.CSJLog.timeStamp( "---- [ S ] - global.b2link.mongodb.executeQuerySync():void----------" );

		var t = conectionInfo;

		global.CSJLog.timeStamp( "---- [ E ] - global.b2link.mongodb.executeQuerySync():void----------" );
		return SUtilMongoDB.execSync( t.HOST, t.PORT, t.DB, query );
	};

	/**
	 * Mongoexport를 옵션파라미터 기반으로 실행하는 함수;
	 * @param {Object} conectionInfo
	 <code>
	 {
		"HOST" : "123.123.123.123"
		, "PORT" : 12345
		, "DB":"aaaa"
		, "ID" : "aaaaa"
		, "PASS" : "aaaaa"
	 }
	 * @param {Object} option
	 <code>
	{
		db : db
		, collection : collection
		, out : out
	}
	</code>
	*/
	global.b2link.mongodb.exportDb = function( conectionInfo, option ){
		global.CSJLog.timeStamp( "---- [ S ] - global.b2link.mongodb.exportDb():void----------" );
		var t = conectionInfo;
		var o = option;
		//Childprocess Commands;
	  	var _command = _COMMAND.mongoexport;
		var command = _command.replace( '<!=HOST=!>', t.HOST )
			.replace( '<!=PORT=!>', t.PORT )
			.replace( '<!=username=!>', t.ID )
			.replace( '<!=password=!>',t.PASS )
			.replace( '<!=db=!>', o.db )
			.replace( '<!=collection=!>', o.collection )
			.replace( '<!=out=!>', o.out );

		global.CSJLog.timeStamp( '------[ CP_Command ] - ' + command );

		//Mongoexport를 실행한다.;
		global.CSJLog.timeStamp( "---- [ E ] - global.b2link.mongodb.exportDb():void----------" );
		return command;
	};

	/**
	 * Mongoexport를 옵션파라미터 기반으로 실행하는 함수;
	 * @param {Object} conectionInfo
	 <code>
	 {
		"HOST" : "222.239.10.120"
		, "PORT" : 55521
		, "DB":"admin"
		, "ID" : "b2link"
		, "PASS" : "qlxnfldzmdb2017_"
	 }
	 * @param {Object} option
	 <code>
	{
		db : db
		, collection : collection
		, file : file
	}
	</code>
	*/
	global.b2link.mongodb.importDb = function( conectionInfo, option ){
		global.CSJLog.timeStamp( "---- [ S ] - global.b2link.mongodb.importDb():void----------" );
		var t = conectionInfo;
		var o = option;
		//Childprocess Commands;
	  	var _command = _COMMAND.mongoimport;
		var command = _command.replace( '<!=HOST=!>', t.HOST )
			.replace( '<!=PORT=!>', t.PORT )
			.replace( '<!=username=!>', t.ID )
			.replace( '<!=password=!>', t.PASS )
			.replace( '<!=db=!>', o.db )
			.replace( '<!=collection=!>', o.collection )
			.replace( '<!=file=!>', o.file );

		global.CSJLog.timeStamp( '------[ CP_Command ] - ' + command );

		//Mongoexport를 실행한다.;
		global.CSJLog.timeStamp( "---- [ E ] - global.b2link.mongodb.importDb():void----------" );
		return command;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
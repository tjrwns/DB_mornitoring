//----------------------------------------------------------------------------------------------------;
var fileNm = "js/index.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.initialize = function(){

	window.TtwLog.timeStamp( "-- [ S ] - window.initialize():void----------" );

	//----------------------------------------------------------------------------------------------------;

	//	REQUIRE;

	//----------------------------------------------------------------------------------------------------;

	//Create Console;
	require( "../../../Development-NodeJS_Modules/Create-Console-Developers.js" );

	//----------------------------------------------------------------------------------------------------;

	var cwd=global.process.cwd()+"/";var p0="../../Development-NodeJS_Modules/";var p1=cwd+p0+"native_modules/";
	global.Lib.Ttw.importTll(p1+"SyncRequest.tll");

	//----------------------------------------------------------------------------------------------------;

	//	STATIC VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	MEMBER VARIABLES - 알파벳 순 정렬;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT - addEvent***, removeEvent*** 셋트 배치 후 알파벳 순 정렬;
	//	- Callback를 정의하는 곳이 아님.
	//	- dispatchEvent로 인하여 EventType에 의거해서 구동될 EventListenr만 정의 하는 구역임
	//	- Common Interface
	//	_addEvent : 이 객체에서 addEventListener를 정의 한다.
	//	_removeEvent : 이 객체에서 removeEventListener를 정의 한다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * window.onload 함수
	 * 화면 공통 라이브러리를 불러들인 후 Application 별 필요 패키지를 설치하는 window.__INITIALIZE-PACKAGE__ 를 호출한다.
	 * @function
	 */
	window.onload = function( evt ){window.TtwLog.timeStamp( "-- [ S ] - window.onload():void----------" );if(window.onload._B_EXECUTABLED)return;(function(){var el=document.head.appendChild(document.createElement("SCRIPT"));
	var host = "http://" +
		//"resource.b2link.co.kr/view"
		  "222.239.10.122:49323"
		//"localhost:49323"
	;
	el.src = host + "/js-common/" +
		  "lib.common.js"
		//"lib.common.editor.js"
		//"lib.common.extjs.js"
	;
	return el;})().onload = function(){ window.console.log( "Initialize Libraries Complete." );

		//----------[ S ] - Application 특성에 따른 전역 레이아웃 컨테이너의 마우스 인식 설정;
		var f0 = window.b2link.element.mouseDisable__ID;
		var f1 = window.b2link.element.mouseEnable__ID;
		f0("div_0__Background");
		f1("div_0__Application");
		f0("div_0__UI_Component_Fixed");
		f1("div_0__UI_Component_Fixed");
		f0("div_0__UI_Component_Panel");
		f0("div_0__Top");
		f0("div_0__Top_modal");
		//----------[ E ] - Application 특성에 따른 전역 레이아웃 컨테이너의 마우스 인식 설정;


		//add UI 류 API 사용시 기본적으로 appendChild를 시킬 대상 컨테이너 설정;
		window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( "div_0__UI_Component_Fixed" );

		//----------[ S ] - HTML, JavaScript UI;
		(function(){
			var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
			//var host = ".";
			window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI(
				"/ui/App/ApplicationList/index"
				, host + "/ui/App/ApplicationList/index.html"
				, host + "/ui/App/ApplicationList/index.js"
				, window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID
			);
		})();
		//----------[ E ] - HTML, JavaScript UI;


		//----------[ S ] - B2LiNK-SessionServer-Dev - SessionServer의 권한 인증 기능 작동 소스;
		/*/
		window.b2link_service.common._fn_res = window.b2link_service.common._fn_authRes;
		window.b2link_service.common._fn_res__locale_label = window.b2link_service.common._fn_authRes__locale_label;
		window.b2link_service.common._fn_res_for_string_result = window.b2link_service.common._fn_authRes_for_string_result;
		window.b2link_service.common._fn_res_for_string_result__locale_label = window.b2link_service.common._fn_authRes_for_string_result__locale_label;
		window.b2link_service.common._fn_res_POST = window.b2link_service.common._fn_authRes_POST;
		//*/
		//----------[ E ] - B2LiNK-SessionServer-Dev - SessionServer의 권한 인증 기능 작동 소스;

		window.onload._B_EXECUTABLED = 1;
	};window.TtwLog.timeStamp( "-- [ E ] - window.onload():void----------" );};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION - 알파벳 순 정렬;
	//	- Common Interface
	//	_dispose : 이 객체의 removeEvent를 실행하고 이 객체가 보유한 dispose가 있는 인스턴스들의 dispose를 호출해준다.

	//----------------------------------------------------------------------------------------------------;

	/**
	 * Application 별 필요한 패키지를 추가한다.
	 * @function
	 */
	window[ "__INITIALIZE-PACKAGE__" ] = function( e, t )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.__INITIALIZE-PACKAGE__():void----------" );

		//----------;
		var f0 = SUtilTemplateHTML.addJS__URL, f1 = Lib.Ttw.abt;
		  window._$TATIC_CONST_DEBUG = false;
		//window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTFacFRURndUbHBYZEhOT1ZsSllZWHBDYkZaVVJUSlpWRTVYVkd4YVJsSnFSbFZXYkVwTFdsWlZOV05XVmxWV2F6VnNZVEozTWxaRlVrdGtNbFp6VjI1U2FsSllVazlWYlhoelRsWldjMkZJVGxkU2JWSkpXbFZhVTFZd01VaFZWRUpYWVd0YWVsWnNXazlrUlRsWVkwWmthVkpzYkRaV01WcFhWakZSZVZKclpGUmlhelZaV1ZkMFlWbFdVbFpYYm1ScVlrZDRXVnBWWkVkV01rWnlZak5rVjJGcmNFZGFWbHBQVjFkS1IxUnNhRk5OTW1oWlZqRmFVMU15U1hsVWJHUlhWMGRTYjFWc1ZURmlNVlowWlVkR1RsWnRkRE5XTWpFd1lVZEtSMVp0Y0V0TlJsbDVVbGhzVkZkSGVGUldNR1EwVmpGc1ZWTnRPV3BXYkZZeldWVldUMkZHU25OWGFrWmFUVVp3Y2xsWGVHRldha293VmpKRmVWTlliRk5YUjNoWFdWUktiMk5XVlhkaFJVNW9VbXhhTVZrd1dtdGhiRlZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1wMFpVWnNWV0pHVlRGV1IzTjRZMjFKZW1OR1dsTmlSVmw2VmxWYVJrOVdRbEpRVkRBOVpFZFdSMkpHVm1sU2JGVjRWbXRrZW1WSFRuUlRXSEJxVW14d1ZGbHJWbHBsYkZwV1YydGFVRlpyU2xOVlJsRjNVRmhCZDFkc1ZtRmpNVnBZVTJ0a1YxWkZXbGhWYWs1UFRrWnJlVTFWY0d4aVZUVklWako0VDJGV1NsZGlSRnBYWWtaYWFGVnRjelZXTVVaelUyeEdWMUpGUlRWWGExWnJWakZKZVZOclpGZGlWM2hVV1d0YVYwNUdXblJrUjNSc1lsWmFTVlpITlZOV1JtUkpVVzVHVm1KWWFETldhMXB6WTJ4YWMyTkhlR2xTYmtKWVZtcEtNRmxXVmtkWGJrcFVZa1UxVjFWdGVFZE5NVlpIVjFSV1lXSkdTbGxXYlRWeldWVXhjMVpxU2xoU1JWVXhWMjB4UzFkR1duVmlSMFpPWWtad2RGZFhlR3RqTWxKWFdqTnNVMkpyTlhCVmJYQnZUa1prU1dORlNtdFdNRm94VmtaUmQxQlJQVDA9",5));//122-http;
		//window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTJ4VlZrWndUbHBXVW05T1ZsSllZMFZ3YTFaVVJuaFdSbEpYVkZkR2NsWnFUbFZTTTBKSFdsWlZlR05YU2paUmJFSlhVbFJGTVZaSGVFNU9WMDVZVkZob1dHSnJXbFZaVjNSTFYwWlNXR1JHWkU5V2JGWTBXVlZvVDFack1WaFZhMnhoVmxad2NsWXllR0ZTYlU1SlYyeHdUbFp1UWxoWGExSkxVakZLYzFWdVVtaFNhelZ3Vlcwd05VNUdXWGhWYTA1YVZqQldOVlZ0TlU5V01rWnlZak5rVjJGcmNFZGFWbHBQVjFkS1IxUnNhRk5OTW1oWlZqRmFVMU15U1hsVWJHUlhWMGRTYjFWc1ZURmlNVlowWlVkR1RsWnRkRE5XTWpFd1lVZEtSMVp0Y0V0TlJsbDVVbGhzVkZkSGVGUldNR1EwVmpGc1ZWTnRPV3BXYkZZeldWVldUMkZHU25OWGFrWmFUVVp3Y2xsWGVHRldha293VmpKRmVWTlliRk5YUjNoWFdWUktiMk5XVlhkaFJVNW9VbXhhTVZrd1dtdGhiRlZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1wMFpVWnNWV0pHVlRGV1IzTjRZMjFKZW1OR1dsTmlSVmw2VmxWYVJrOVdRbEpRVkRBOVpFZFdSMkpHVm1sU2JGVjRWbXRrZW1WSFRuUlRXSEJxVW14d1ZGbHJWbHBsYkZwV1YydGFVRlpyU2xOVlJsRjNVRmhCZDFkc1ZtRmpNVnBZVTJ0a1YxWkZXbGhWYWs1UFRrWnJlVTFWY0d4aVZUVklWako0VDJGV1NsZGlSRnBYWWtaYWFGVnRjelZXTVVaelUyeEdWMUpGUlRWV2Fra3hWVEpLUjFOdVVteFNiSEJoV1ZSR2QxWXhVbGRYYlVaVVVqQXhObGxWWkhkaFZscFlaSHBLV0ZaRlNtaFhWbHBXWlZaT2NsZHNhRmhUUlVwWlZtMTRZV1F4U1hoVldHaFlZVEExVjFsclZrdFdiRkpXVlZob1lXSkhaRE5VVm1RMFlXMUtXRlZ1VGxWU1JWVXhWMjE0Ym1WVk1WaGxSM0JwVmpGS2VsWXdVa3BsUjA1SVUyNU9VRll5YUhCVmFrNXZZbFpTVjFkVVVtdE5TR2d3V1RCb2RsQlJQVDA9",5));//122-https;
		//window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTFacFRURndUbHBYZEhOT1ZsSllZWHBDYkZaVVJUSlpWRTVYVkd4YVJsSnFSbFZXYkVwTFdsZHpOV05XVmxWV2F6VnNZVEozTWxaRlVrdGtNbFp6VjI1U2FsSllVazlWYlhoelRsWldjMkZJVGxkU2JWSkpXbFZhVTFZd01VaFZWRUpYWVd0YWVsWnNXazlrUlRsWVkwWmthVkpzYkRaV01WcFhWakZSZVZKclpGUmlhelZaV1ZkMFlWbFdVbFpYYm1ScVlrZDRXVnBWWkVkV01rWnlZak5rVjJGcmNFZGFWbHBQVjFkS1IxUnNhRk5OTW1oWlZqRmFVMU15U1hsVWJHUlhWMGRTYjFWc1ZURmlNVlowWlVkR1RsWnRkRE5XTWpFd1lVZEtSMVp0Y0V0TlJsbDVVbGhzVkZkSGVGUldNR1EwVmpGc1ZWTnRPV3BXYkZZeldWVldUMkZHU25OWGFrWmFUVVp3Y2xsWGVHRldha293VmpKRmVWTlliRk5YUjNoWFdWUktiMk5XVlhkaFJVNW9VbXhhTVZrd1dtdGhiRlZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1wMFpVWnNWV0pHVlRGV1IzTjRZMjFKZW1OR1dsTmlSVmw2VmxWYVJrOVdRbEpRVkRBOVpFZFdSMkpHVm1sU2JGVjRWbXRrZW1WSFRuUlRXSEJxVW14d1ZGbHJWbHBsYkZwV1YydGFVRlpyU2xOVlJsRjNVRmhCZDFkc1ZtRmpNVnBZVTJ0a1YxWkZXbGhWYWs1UFRrWnJlVTFWY0d4aVZUVklWako0VDJGV1NsZGlSRnBYWWtaYWFGVnRjelZXTVVaelUyeEdWMUpGUlRWWGExWnJWakZKZVZOclpGZGlWM2hVV1d0YVYwNUdXblJrUjNSc1lsWmFTVlpITlZOV1JtUkpVVzVHVm1KWWFETldhMXB6WTJ4YWMyTkhlR2xTYmtKWVZtcEtNRmxXVmtkWGJrcFVZa1UxVjFWdGVFZE5NVlpIVjFSV1lXSkdTbGxXYlRWeldWVXhjMVpxU2xoU1JWVXhWMjB4UzFkR1duVmlSMFpPWWtad2RGZFhlR3RqTWxKWFdqTnNVMkpyTlhCVmJYQnZUa1prU1dORlNtdFdNRm94VmtaUmQxQlJQVDA9",5));//123-http;
		  window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTJ4VlZrWndUbHBXVW5OT1ZtUnpZVVU1YTJKV1NscFZNakYzV1ZaV05sWnVRbFZXZWtVd1dUQmtTMlJIVFhwV2JIQk9ZVzFuZUZkV1VrOVRiVkowVlc1U2FWSXphSEpVVmxwM1pVWlZlV05GVGxkTlJFWjVWbTF3VjFack1WaGhTSEJYVmtWYWNsVXdaRmRTTVhCSFkwWmtVMWRGU1hsV01WSkhXVlphZEZWWWJGTmhNWEJXV1d4a2IxWkdiSEpYYmxwc1VtMVNWbFZYTVVkaFJURnlWMjV3VjJKWVFreFVWVnBhWlZaS1dXSkdVbGhTTTJoVlZtcENhMDVHV1hoaVJsWlVZbFJzY1ZadGVGZE5NV3hXVm1zNWFGSnJjSHBXTW5CSFYyc3hSMk5JU2xwV00yaG9WbTF3UzAxR1dYbFNXR3hVVjBkNFZGWXdaRFJXTVd4VlUyMDVhbFpzVmpOWlZWWlBZVVpLYzFkcVJscE5SbkJ5V1ZkNFlWWnFTakJXTWtWNVUxaHNVMWRIZUZkWlZFcHZZMVpWZDJGRlRtaFNiRm94V1RCYWEyRnNWakowVjJFeVNYbFNXR3hXWVRKb2NWVXdhRU5oUmxaMVkwWmthbFp0ZUZsVWJGVTFWR3N4Y21JemNGWlNiRVl6VlVaRk9WQlJQVDA9V25SbFJteFZZa1pWTVZaSGMzaGpiVWw2WTBaYVUySkZXWHBXVlZwR1QxWkNVbEJVTUQxa1IxWkhZa1pXYVZKc1ZYaFdhMlI2WlVkT2RGTlljR3BTYkhCVVdXdFdXbVZzV2xaWGExcFFWbXRLVTFWR1VYZFFWMUpJVm10a2FWSnNXbkJWYlhoV1pVWmFjbHBJY0d4U01EVXdWVEZvZDJGc1NuTmpSbEphWVRGYVlWcFhlR0ZXYkdSeVYyeENWMkV3Y0ZSV1ZWcFNaREZDVjFwSVZsWmlXR2hVV1d4b2IxWXhaRmhrUjBaWFlYcEdXRll5ZEc5aGF6QjVZVWhHV21KR1ducFViWGh5WkRGa2RGSnNXazVoTTBKSVZtcEdiMlF4V1hoWGJHUnFVbGRTVmxSV1duZFNSbHBZWlVWT1YxWlVSa1pVVldoaFlVZEtjazVYTVZoU1JVWTBXV3RrVDJSR2NFaGxSVEZPVmtkNGRGWXdVa3BsUjBwSVZHNVNZVkl6YUZwVVYzQkhaREZzZEdSNlZtaFNNSEJKV2xWa1lWUnNXbkZoUkU1VlVucEdNMXBYWXpsUVVUMDk=",5));//domain-https;
		//window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTFacFRURndUbFJYTlc5TmJHUlZVMnRrYWsxcldrbFVNV2gzWVRGS1NFOUlaRlZOVmtwUFdsWlZlRTVWT1ZsU2JYQk9Wa2Q0ZEZacldtRlpWMDVYVkc1R1VtSkhVazlaVkVaYVRWWmFWVkp0T1dwTlZsWTBWMnRXYjJKR1NuUlZiVVpYWVRGYU0xcEhlSEpsUm1SelYyMTBUbUV4Y0VoV2EyTjRZakZWZVZOclpHbE5NbWhaVm10V1MyRkdiRlZUYTJScVRWWndlRlV5Y0VOV01ERnlWbXBXVmsxWGFIcFdWRVpyVTBkV1IxcEdjRmRTV0VJeVYxUkdZVlp0VVhsU2ExcFZZbGRvVkZsclduWmxSbVJWVVcxR2FFMXJXbnBXYlhCTFRVWlplVkpZYkZSWFIzaFVWakJrTkZZeGJGVlRiVGxxVm14V00xbFZWazloUmtwelYycEdXazFHY0hKWlYzaGhWbXBLTUZZeVJYbFRXR3hUVjBkNFYxbFVTbTlqVmxWM1lVVk9hRkpzV2pGWk1GcHJZV3hhVmpKMFYyRXlTWGxTV0d4V1lUSm9jVlV3YUVOaFJsWjFZMFprYWxadGVGbFViRlUxVkdzeGNtSXpjRlpTYkVZelZVWkZPVkJSUFQwPWRHVkdiRlZpUmxVeFZrZHplR050U1hwalJscFRZa1ZaZWxaVldrWlBWa0pTVUZRd1BXUkhWa2RpUmxacFVteFZlRlpyWkhwbFIwNTBVMWh3YWxKc2NGUlphMVphWld4YVZsZHJXbEJXYTBwVFZVWlJkMUJXWkhWVmJYaFRZbGhvVjFkWGRHRldhekZYVjJ0b2FrMHlhSEZaYkZaelRteHJkMWR0UmxaTmEzQkhWakZvZDFZeFdsZGpSV1JWVFZad1JGWlhlRU5XVlRGRlRWWm9hV0pGY0hwV1Z6QjRUa1phYzJKSVNsaGlSbkJQVm0xNGQxTldiRFpVYlRsb1lsVndWMWxyVW1GWGF6RkhZMGRvVjFaRmNFeFZiWGhyVjFkT1IxcEdaRmRpYTBwSlZtdFNSMWxXUlhoV2JrNVNZa1phVDFWclVrZGpNV3Q1VFZkMGFWSllaRFJVTVdSaFYxVXhjVkp1VGxwTmFrWnlXV3RhYm1WVk1WbFJiV3hwVWtkNGRsZFhkR3RPUm5CeVRWWmtVRk5IVWs1WmJHaERUbWM5UFE9PQ==",5));//local-http;
		//window._$TATIC_CONST_DEBUG ? e( "./js/" ) : f0(f1("VjFaV2IxVXdNVWhVYTJ4VlZrWndUbHBXVW5ObGJHeHhVMnM1YUZJd2NFbFpWV2hoWVdzd2VGSlVTbFZoTVVwNVdsZHplR05XV2xsWGJXaHBZWHBXZEZZd1VrZFpWMDVYVkc1R1VtSkhVazlaVkVaYVRWWmFWVkp0T1dwTlZsWTBWMnRXYjJKR1NuUlZiVVpYWVRGYU0xcEhlSEpsUm1SelYyMTBUbUV4Y0VoV2EyTjRZakZWZVZOclpHbE5NbWhaVm10V1MyRkdiRlZUYTJScVRWZFNNVlp0TVhkVE1ERkhWMWhzVTFkSGVGVldNR1EwVmtaWmQxcEVVbGROVjNoV1ZUSXdOV0ZzV25OV2FrNWFWbFphVUZsVldrdGpNV1J4VW14d1RsSnVRbmxYVm1RMFdWWmFjVk5xUWxkTmExWTFWVEZvYzFVeFpFaGxSbVJhVmtWd2Rsa3hXbFprTWtaR1ZHMW9VMkpHYjNoWFZFSmhZVEpHYzFacVNqQldNa1Y1VTFoc1UxZEhlRmRaVkVwdlkxWlZkMkZGVG1oU2JGb3hXVEJhYTJGc1ZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1XblJsUm14VllrWlZNVlpIYzNoamJVbDZZMFphVTJKRldYcFdWVnBHVDFaQ1VsQlVNRDFYYmxKc1VtMTRWbGxyV2xaTlZscElZek5vYW1KVmJEWlpNRnBoVlRKS1JsZFljRmRXVm5CSFZERmFRMVZzUWxWTlJERnJVakZhU0ZscldsZGhWa3B6Vmxob1YyRXlValphVldSUFpFWk9XV05IY0ZOaVNFSlZWMWQwVjFkdFZuTlhiRnBZWVRGd1VWWnRkRXRWTVZaSFZWaGtVVlpyY0hwV1Z6QjRUa1phYzJKSVNsaGlSbkJQVm0xNGQxTldiRFpVYlRsb1lsVndWMWxyVW1GWGF6RkhZMGRvVjFaRmNFeFZiWGhyVjFkT1IxcEdaRmRpYTBwSlZtdFNSMWxXUlhoV2JrNVNZa1phVDFWclVrZFVNV1J6WVVWMGFXSklRbFZVTVdSaFYxVXhWV0pFUWxoaVIyaE1XVzE0ZDFZd09WbFZiV2hYWld4YWRGWXhXbXRPUjAxNFlVUmFVMkpXY0U5VldIQlhaVVpyZWxsNmJGRlZWREE1",5));//local-https;
		//----------;


		//----------;
		e( "./js-common/" );
		/*///SCODE Host localhost로 강제 적용;
		(function(){ var _fn = window.b2link.url.getServerURL_WebServer_SCODE; window.b2link.url.getServerURL_WebServer_SCODE = function( SCODE ){
			if( "SYS0015" === SCODE ) return "http://localhost:49323";
			return _fn( SCODE );
		};})();//*/
		//----------;


		var host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );

		var f = window.b2link.util.importJS__Reuse;
			f( host + "/libs/Semantic-UI/import-js.js");

		  window._$TATIC_CONST_DEBUG = false;
		//window._$TATIC_CONST_DEBUG ? e( "./js--File/" )       : f( host + "/js--File/___merge_min_all_1_0.js" );
		  window._$TATIC_CONST_DEBUG ? e( "./js--Semantic-UI/" ): f( host + "/js--Semantic-UI/___merge_min_all_1_0.js" );
		//window._$TATIC_CONST_DEBUG ? e( "./js--GIS/" )        : f( host + "/js--GIS/___merge_min_all_1_0.js" );
		//window._$TATIC_CONST_DEBUG ? e( "./js--Source/" )     : f( host + "/js--Source/___merge_min_all_1_0.js" );

		//window._$TATIC_CONST_DEBUG ? e( "./js__b2link__sessionServer/" ): f( "./js__b2link__sessionServer/___merge_min_all_1_0.js" );

		  window._$TATIC_CONST_DEBUG = false;
		//window._$TATIC_CONST_DEBUG ? e( "./js__b2link__SYS0015/" ) : f( "./js__b2link__SYS0015/___merge_min_all_1_0.js" );

		//window._$TATIC_CONST_DEBUG ? e( "./js-libs/" ): f( "./js-libs/___merge_min_all_1_0.js" );
		//window._$TATIC_CONST_DEBUG ? e( "./ui_js/" )  : f( "./ui_js/___merge_min_all_1_0.js" );

		//t("./css/");//./css/*.css 자동 로드 - 사전에 __list.json 빌드가 되어 있어야한다;

		//window.service_member.session.destroy_session(function(e){window.TtwLog.log(e)});
		window.b2link.event.__initialize_Events();

		window.TtwLog.timeStamp( "---- [ E ] - window.__INITIALIZE-PACKAGE__():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER - GET METHOD, SET METHOD, GET/SET set METHOD, GETTER Property, SETTER Property, GETTER/SETTER Property, 구간 안에서 알파벳 정렬;
	//	- Common Interface
	//	_setData : 이 객체가 정상적으로 작동되기 위한 값들을 주입 받는 다.

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	window.onload();

	window.TtwLog.timeStamp( "-- [ E ] - window.initialize():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
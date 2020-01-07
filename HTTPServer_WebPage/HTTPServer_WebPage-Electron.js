require( "../../Development-NodeJS_Modules/Common-Electron-020-WebServer-root-index.html.js" );

/**
 * Initialized 함수
 * @function
 */
global.initialized = function()
{
	//HTTPServer_MongoDB - 49320 - MemberSession 서버;
	global.win.webContents.executeJavaScript( 'require( global.process.cwd() + "/HTTPServer_WebPage.js" );' );
	//HTTPServer_MongoDB - 49320 - MemberSession 서버 Override;
	global.win.webContents.executeJavaScript( 'require( global.process.cwd() + "/HTTPServer_WebPage-Electron-Override.js" );' );

	global.win.webContents.executeJavaScript( 'window.initialize();' );
};
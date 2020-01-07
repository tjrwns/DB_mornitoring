require( "../../../Development-NodeJS_Modules/Common-Electron-010-APIServer-root-index.html" );

/**
 * Initialized 함수
 * @function
 */
global.initialized = function()
{
	//HTTPServer_MongoDB - 49320 - APIServer 서버;
	global.win.webContents.executeJavaScript( 'require( global.process.cwd() + "/APIServer.js" );' );
	//HTTPServer_MongoDB - 49320 - APIServer 서버 Override;
	global.win.webContents.executeJavaScript( 'require( global.process.cwd() + "/APIServer-Electron-Override.js" );' );

	global.win.webContents.executeJavaScript( 'window.initialize();' );
};
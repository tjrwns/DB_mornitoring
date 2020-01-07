var saveJSON = function(data, filename){

	if( !data ) return;
	if( !filename ) filename = 'console.json'

	if( typeof data === "object" ) data = JSON.stringify(data, undefined, 4)

	var blob = new Blob([data], {type: 'text/json'});
	var e = document.createEvent('MouseEvents');
	var a = document.createElement('a');

		a.download = filename;
		a.href = window.URL.createObjectURL( blob );
		a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		a.dispatchEvent(e)

	return;
}

var a = window.document.getElementsByClassName("brandList")
var _BASE_URL = "https://www.totalbeauty.com/";
var r = {}
var i = 0,iLen = a[0].children.length,io;
for(;i<iLen;++i){
	io = a[0].children[ i ];
	//debugger;
	if( -1 != io.innerHTML.indexOf('<p class="brand"><a href="/reviews/brands/'))
	{
		console.log( io.children[0].innerText )

		r[ io.children[0].innerText ] = {
			nm : io.children[0].innerText
			, url : _BASE_URL + io.children[0].children[0].getAttribute("href")
			, total : Number( io.children[ 1 ].children[ 0 ].innerText.replace( "View all ","").replace(" products","") )
			, rate :  io.children[ 2 ].innerText
		}
	}
}


saveJSON( r , "saved_data.json");
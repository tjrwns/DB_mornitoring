function( d )
{
	print( "- [ S ] - setDate__YMD_HoMiSe():void----------" );

	var a = getDate__YMD_HoMiSeMil__Array();
	d.y = a[ 0 ];
	d.m = a[ 1 ];
	d.d = a[ 2 ];
	d.ho = a[ 3 ];
	d.mi = a[ 4 ];
	d.se = a[ 5 ];

	print( "- [ E ] - setDate__YMD_HoMiSe():void----------" );
}
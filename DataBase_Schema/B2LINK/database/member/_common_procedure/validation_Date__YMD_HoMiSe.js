function( d ){
	print( "- [ S ] - validation_Date__YMD_HoMiSe():void----------" );
	d.y = NumberInt( d.y ) || 0;
	d.m = NumberInt( d.m ) || 0;
	d.d = NumberInt( d.d ) || 0;
	d.ho = NumberInt( d.ho ) || 0;
	d.mi = NumberInt( d.mi ) || 0;
	d.se = NumberInt( d.se ) || 0;
	print( "- [ E ] - validation_Date__YMD_HoMiSe():void----------" );
	return d;
}
function()
{
	print( "- [ S ] - getDate__YMD_HoMiSeMil__Array():void----------" );

	var d = new Date();

	print( "- [ E ] - getDate__YMD_HoMiSeMil__Array():void----------" );

	return [
		NumberInt( d.getFullYear() )
		, NumberInt( d.getMonth() + 1 )
		, NumberInt( d.getDate() )
		, NumberInt( d.getHours() )
		, NumberInt( d.getMinutes() )
		, NumberInt( d.getSeconds() )
		, NumberLong( d.getMilliseconds() )
	];
}
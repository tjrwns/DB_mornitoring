function()
{
	var d = new Date();
	return [
		NumberInt( d.getFullYear() )
		, NumberInt( d.getMonth() + 1 )
		, NumberInt( d.getDate() )
	];
}
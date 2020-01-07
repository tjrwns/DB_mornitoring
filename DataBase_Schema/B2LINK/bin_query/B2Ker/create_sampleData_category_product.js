
var a = [
	["BABY", "Baby Shampoo"]
	, ["BABY", "Baby Lotions"]
	, ["BABY", "Oils"]
	, ["BABY", "Powders "]
	, ["BABY", "Creams"]
	, ["BABY", "Bath Oils"]
	, ["BABY", "Tablets"]
	, ["BABY", "Salts"]
	, ["BABY", "Bubble Baths"]
	, ["BABY", "ETC"]
	, ["BATH", "Bath Capsules"]
	, ["BATH", "Bath Oils"]
	, ["BATH", "Tablets"]
	, ["BATH", "Salts"]
	, ["BATH", "Bubble Baths"]
	, ["BATH", "ETC"]
	, ["EYE MAKEUP", "Eyebrow Pencil"]
	, ["EYE MAKEUP", "Eyeliner"]
	, ["EYE MAKEUP", "Eye Color"]
	, ["EYE MAKEUP", "Eye Makeup Remover"]
	, ["EYE MAKEUP", "Mascara"]
	, ["EYE MAKEUP", "etc"]
	, ["FACIAL MAKEUP", "Cheek Color"]
	, ["FACIAL MAKEUP", "Face Powders"]
	, ["FACIAL MAKEUP", "Foundations"]
	, ["FACIAL MAKEUP", "Lip Color"]
	, ["FACIAL MAKEUP", "Lead in Lipstick"]
	, ["FACIAL MAKEUP", "Concealers"]
	, ["FACIAL MAKEUP", "ETC"]
	, ["FRAGRANCE", "Dusting Powders(Body Powders)"]
	, ["FRAGRANCE", "Colognes"]
	, ["FRAGRANCE", "Perfumes"]
	, ["FRAGRANCE", "Fragrance Mists"]
	, ["FRAGRANCE", "ETC"]
	, ["HAIR CARE", "Hair Conditioners"]
	, ["HAIR CARE", "Hair Sprays"]
	, ["HAIR CARE", "Hair Straighteners"]
	, ["HAIR CARE", "Hair Relaxers"]
	, ["HAIR CARE", "Permanent Waves"]
	, ["HAIR CARE", "Shampoos"]
	, ["HAIR CARE", "Rinses"]
	, ["HAIR CARE", "Tonics"]
	, ["HAIR CARE", "Dressings"]
	, ["HAIR CARE", "ETC"]
	, ["HAIR DYE AND HAIR COLORING", "Hair Dyes"]
	, ["HAIR DYE AND HAIR COLORING", "Hair Colors"]
	, ["HAIR DYE AND HAIR COLORING", "Hair Tints"]
	, ["HAIR DYE AND HAIR COLORING", "Shampoos"]
	, ["HAIR DYE AND HAIR COLORING", "Rinses"]
	, ["HAIR DYE AND HAIR COLORING", "Hair Bleaches"]
	, ["HAIR DYE AND HAIR COLORING", "ETC"]
	, ["NAIL", "Nail Polish"]
	, ["NAIL", "Enamel"]
	, ["NAIL", "Removers"]
	, ["NAIL", "Artificial Nail Extension"]
	, ["NAIL", "Manicure"]
	, ["NAIL", "Pedicure"]
	, ["NAIL", "Cuticle Oils"]
	, ["NAIL", "Creams and Lotions"]
	, ["NAIL", "ETC"]
	, ["ORAL CARE", "Toothpastes"]
	, ["ORAL CARE", "Mouthwashes"]
	, ["ORAL CARE", "Breath Fresheners"]
	, ["ORAL CARE", "ETC"]
	, ["PERSONAL CLEANLINESS", "Feminine Deodorants"]
	, ["PERSONAL CLEANLINESS", "Douches"]
	, ["PERSONAL CLEANLINESS", "Antiperspirants"]
	, ["PERSONAL CLEANLINESS", "Deodorants"]
	, ["PERSONAL CLEANLINESS", "Soap"]
	, ["PERSONAL CLEANLINESS", "ETC"]
	, ["SHAVING", "Aftershave Lotion"]
	, ["SHAVING", "Preshave Lotions (all types)"]
	, ["SHAVING", "Shaving Creams"]
	, ["SHAVING", "ETC"]
	, ["SKIN CARE", "Body and Hand Creams and Lotions"]
	, ["SKIN CARE", "Cleansers"]
	, ["SKIN CARE", "Face and Neck Creams/Lotions"]
	, ["SKIN CARE", "Foot Powders and Sprays"]
	, ["SKIN CARE", "Moisturizers"]
	, ["SKIN CARE", "ETC"]
	, ["SUNSCREEN AND SUNTAIN", "Sunless Tanners"]
	, ["SUNSCREEN AND SUNTAIN", "Sunblock"]
	, ["SUNSCREEN AND SUNTAIN", "Sunscreen Gels"]
	, ["SUNSCREEN AND SUNTAIN", "Creams"]
	, ["SUNSCREEN AND SUNTAIN", "Liquids"]
	, ["SUNSCREEN AND SUNTAIN", "ETC"]
];

/**
 * LPAD
 * @param {String} s 주어진 텍스트
 * @param {String} c 채울 문자
 * @param {Number} n 문자열 길이
 */
var LPAD = function(s, c, n)
{
	s = s + "";
	if (! s || ! c || s.length >= n) return s;

	var max = ( n - s.length ) / c.length;
	var i=0;
	for ( ; i<max; i++) s = c + s;
	return s;
};

var getCd = function( s )
{
	return LPAD( s, "0", 3 );
};

var getItems = function( s, pad )
{
	var i=0, iLen=a.length;
	var r = [];
	for( ; i<iLen; ++i )
	{
		if( a[i][0] == s )
	 		r.push( "CPD" + LPAD(i.toString(),"0",3) );
	}
	r = r.getUnique();
	return r;
}

/**
* Array Class에 getUnique 함수 설정 :: 중복 제거
* @returns {Array}
*/
Array.prototype.getUnique = function()
{
	var u = {}, a = [];
	var i = 0, l = this.length;
	for( ; i < l; ++i )
	{
		if(u.hasOwnProperty(this[i])) continue;
		a.push(this[i]);
		u[this[i]] = 1;
	}
	return a;
};

var main_class = function()
{
	var i=0, iLen=a.length;
	var r = [];
	for( ; i<iLen; ++i )
	{
	 	r.push( a[i][0] );
	}
	r = r.getUnique();

	// code값이 들어가야함.
	var j=0, jLen=r.length;
	var r1 = [];
	for( ; j<jLen; ++j )
	{
	 	r1.push( "CPT" + getCd( j ) );
	}

	var o = {};
		o.cd = "CPC" + getCd( 1 );
		o._d = NumberInt( 1 );
		o.description = "화장품";
		o.description_cn = "화장품";
		o.description_kr = "화장품";
		o.description_us = "Cosmetics";
		o.nm = "화장품";
		o.nm_cn = "화장품";
		o.nm_kr = "화장품";
		o.nm_us = "Cosmetics";
		o.items = r1; //r

	return [ o ];
};

var main_type = function()
{
	var i=0, iLen=a.length;
	var r = [];
	var r_type = [];

	for( ; i<iLen; ++i )
	{
		r.push( a[i][0] );
	}
	r = r.getUnique();

	i = 0;
	iLen = r.length;
	for( ; i<iLen; ++i )
	{
		var o = {};
			o._id = NumberInt( i );
			o.cd = "CPT" + getCd( i+1 );
			o._d = NumberInt( 1 );
			o.cd$category_product_class = "CPC001";
			o.description = r[i];
			o.description_cn = r[i];
			o.description_kr = r[i];
			o.description_us = r[i];
			o.nm = r[i];
			o.nm_cn = r[i];
			o.nm_kr = r[i];
			o.nm_us = r[i];
			o.items = getItems(r[i]);
		r_type.push( o );
	}

	return r_type;
};

var main_detail = function( r_type )
{
	var r_detail = [];
	var i=0, iLen=a.length;
	var j=0, jLen=r_type.length;
	var cnt = 0;
	for( ; i<iLen; ++i )
	{
		j = 0;
		for( ; j<jLen; ++j )
		{
			if( a[i][0] == r_type[j].nm )
			{
				var o = {};
					o._id = NumberInt( r_type[ j ].cnt++ );
					o.cd = "CPD" + getCd( cnt++ );
					o.cd$category_product_type = r_type[j].cd;
					o._d = NumberInt( 1 );
					o.description = a[i][1];
					o.description_cn = a[i][1];
					o.description_kr = a[i][1];
					o.description_us = a[i][1];
					o.nm = a[i][1];
					o.nm_cn = a[i][1];
					o.nm_kr = a[i][1];
					o.nm_us = a[i][1];
				r_detail.push( o );
			}
		}
	}
	return r_detail;
};

var main = function()
{
	var targetDB = db.getSiblingDB( "category" );
	var targetCol = targetDB.getCollection( "category_product_class" );
	var r_class = main_class();
	var i=0, iLen=r_class.length;
	for( ; i<iLen; ++i )
	{
		r_class[ i ]._id = NumberInt( i );
		targetCol.save( r_class[ i ] );
	}

	var r_type = main_type();
	i=0, iLen=r_type.length;
	for( ; i<iLen; ++i )
	{
		targetCol = targetDB.getCollection( "category_product_type_" + r_type[ i ].cd$category_product_class );
		//r_type[ i ]._id = NumberInt( i );
		r_type[ i ].cnt = 0;
		targetCol.save( r_type[ i ] );
	}
	targetCol.update({}, { $unset: { cnt : 1 } },{ multi: true });

	var r_detail = main_detail( r_type );
	i=0, iLen=r_detail.length;
	for( ; i<iLen; ++i )
	{
		targetCol = targetDB.getCollection( "category_product_detail_" + r_detail[ i ].cd$category_product_type );
		//r_detail[ i ]._id = NumberInt( i );
		targetCol.save( r_detail[ i ] );
	}
};

var deleteCollection = function()
{
	var targetDB = db.getSiblingDB( "category" );
		targetDB.getCollection( "category_product_class" ).drop();
		targetDB.getCollection( "category_product_type" ).drop();
		targetDB.getCollection( "category_product_detail" ).drop();

	var cols = targetDB.getCollectionNames();
	var i=0, iLen=cols.length;
	for( ; i<iLen; ++i )
	{
		var colNm = cols[ i ];
		if( -1 != colNm.indexOf( "category_product_" ) ) targetDB.getCollection( colNm ).drop();
	}
}

deleteCollection();
main();
//// store... @ www.sitesworld.com/common/x/str/s/store.js

// ====== ::WESBITE:: ONLY ============

// -------- SW ONLY VARS ---------

thsBlg_dom = "store.sitesworld.com";
thsBlg_amz = {
	'com': 'stswrld-20',
	'ca': 'sitesworld-20',
	'co.uk': 'sitesworld-21',
	'de': 'sitesworldde-21',
	'fr': 'sitesworldfr04-21',
	'def_kw': 'time',
	'def_kw_2': 'time',
	'def_cat': 'Watches',
	'def_cat_2': 'All',
	'def_node': '',
	'def_node_2': '',
};
thsBlg_cse = "\x30\x30\x32\x34\x31\x31\x38\x3496\x31\x34\x34\x38024\x37\x37\x34\x31\x3A\x6E\x31\x65\x6Ef\x68\x36\x77\x61\x75\x67";
thsBlg_cse_adchannel = "";
thsBlg_epn = "5337983353";
thsBlg_epn_epnSmPl = "605f12b36c98752d0e2ac45f";
thsBlg_zzl = "";
thsBlg_dyn_catcher = "www.sitesworld.com/common/x/str/c/";
thsBlg_img_cdn = "www.sitesworld.com/common/x/str/i/";
thsBlg_gasJsnPrx = "AKfycbxlgCraLy0Gg6SffuTNQ4F_hrs9duFuw_e1QNfU5jZAWUYqD_IY";
thsBlg_reportProductForm = "1FAIpQLSeRVM6S7BJwvaNHECffT3YatkVR0Q9263C7aAzVvka9eRuM2Q";
thsBlg_menulinks = [];

// -------- /SW ONLY VARS ---------

// -------- SW ONLY FUNCS ---------

function defunctAffRedir() {
	try {
		$('.postbody a').each(function(index) {
			if ($(this).attr('href').match(/(.*arsmundi.*|.*saatchiart.*|.*society6.*)/)) {
				if (thsBlg_pg == 'itempage') {
					var sqry = $('h1').text().replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "%20");
				} else {
					var sqry = "hot stuff";
				}
				$(this).attr(
					"href",
					"https://www.amazon.com/gp/search?ie=UTF8&tag=" + thsBlg_amz.com + "&keywords=" + sqry
				);
			}
		});
	} catch (e) {
		//
	}
}
defunctAffRedir();

// -------- /SW ONLY FUNCS ---------

// ====== ::WESBITE:: ONLY  ============

// 
// 

// ======= ALL COMMON FROM BELOW ==============

// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
//
// 

// 
// 
// 
// ========== FUNCTIONS ==========

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function showLabels(json) {
	var label = json.feed.category;
	var list = $('<ul class="list-unstyled"></ul>');

	for (var i = 0; i < label.length; i++) {
		var listItem = $('<li></li>');
		var link = $('<a></a>')
			.attr('href', "https://" + thsBlg_dom + '/search/label/' + encodeURIComponent(label[i].term))
			.text(label[i].term);
		listItem.append(link);
		list.append(listItem);
	}
	$('#allLabels').append(list);
}

function allBloggerLabels() {
	// req jquery, showLabels()
	try {
		$.getScript("https://" + thsBlg_dom + '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels');
	} catch (e) {}
}

function handleBrokenImages() {
	///// HNDLE BRKN IMGS - v2
	// req: epnSrchURL()
	$('.postbody a img').each(function(index) {
		if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
			var imgSrc = $(this).attr('src') || '';
			var redirURL = '';
			var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();

			if (imgSrc.match(/amazon/)) {
				redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
			} else {
				redirURL = epnSrchURL(thsBlg_epn, redirQuery);
			}
			// 
			$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
			// 
			$("#mssngImgRedir_" + index).click(function() {

			});

			// 

		}
	});
	/// HNDLE BRKN IMGS
}

// -------- AMZ/EPN FUNCS ----------

function epn_rover2newURL(url, campid) {
	//// v1 
	var url = url.toString();
	return "https://www.ebay.com/itm/" + url.match(/item\=([0-9]+)/im)[1] + "?mkrid=711-53200-19255-0&siteid=0&mkcid=1&campid=" + campid + "&toolid=10044&customid=&mkevt=1";
}

function amzSrchURL(affId, srchQry, categ) {
	// v1
	// optional categ: amz index
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	var b = (typeof categ === 'undefined') ? '' : categ;
	return 'https://www.amazon.com/gp/search?ie=UTF8&tag=' + affId + '&index=' + b + '&keywords=' + srchQry;
}

function epnSrchURL(campId, srchQry) {
	// v2 
	var a = srchQry.trim().replace(/\s+/igm, "+").trim();
	return 'https://www.ebay.com/sch/i.html?_ex_kw=&_mPrRngCbx=1&_nkw=' + a + '&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=' + campId + '&customid=&toolid=10001&mkevt=1';
}

function amazonCleanUrl(strURL, strTLD, strAffId) {
	// v4 
	if (strURL.match("/(?!/e|st)../([A-Z0-9]{10})") === null) {
		return strURL;
	} else {
		var strAsin = strURL.match("/(?!/e|st)../([A-Z0-9]{10})")[1] || strURL;
		//    return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + strAsin + "/" + strAffId; /// old style
		// return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId; /// clean no params    
		return "https://www.amazon." + strTLD + "/dp/" + strAsin + "?tag=" + strAffId + '&linkCode=osi&th=1&psc=1'; /// api v5 url
	}
}

function affLocalize(objAmAffIds, strEPNId, strZzlId) {
	// v6
	// req: jq
	function zzlLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'UK':
				case 'JP':
				case 'NZ':
					strTLD = 'co.' + strTLD;
					break;
				case 'AU':
				case 'BR':
					strTLD = 'com.' + strTLD;
					break;
				case 'CA':
				case 'DE':
				case 'ES':
				case 'FR':
				case 'PT':
				case 'SE':
				case 'NL':
				case 'AT':
				case 'CH':
				case 'BE':
					strTLD = strTLD;
					break;
				default:
					strTLD = 'com';
			}
		}
		var affUrl, zProd, zAffTag;
		zProd = parseURL(url.replace(/[\?\&]rf\=[0-9]+/, ""));
		affUrl = 'https://www.zazzle.' + strTLD + zProd.path + zProd.querystring;
		zAffTag = (affUrl.match(/\?/) ? '&rf=' : '?rf=') + strZzlId;
		affUrl = affUrl + zAffTag;
		return affUrl;
	}

	function ebLocalize(strTLD, url) {
		if (strTLD) {
			switch (strTLD) {
				case 'AT':
					cntry = "5221-53469-19255-0";
					icep = "229473";
					break;
				case 'AU':
					cntry = "705-53470-19255-0";
					icep = "229515";
					break;
				case 'BE':
					cntry = "1553-53471-19255-0";
					icep = "229522";
					break;
				case 'CA':
					cntry = "706-53473-19255-0";
					icep = "229529";
					break;
				case 'CH':
					cntry = "5222-53480-19255-0";
					icep = "229536";
					break;
				case 'DE':
					cntry = "707-53477-19255-0";
					icep = "229487";
					break;
				case 'ES':
					cntry = "1185-53479-19255-0";
					icep = "229501";
					break;
				case 'FR':
					cntry = "709-53476-19255-0";
					icep = "229480";
					break;
				case 'IE':
					cntry = "5282-53468-19255-0";
					icep = "229543";
					break;
				case 'IN':
					cntry = "4686-53472-19255-0";
					icep = "229550";
					break;
				case 'IT':
					cntry = "724-53478-19255-0";
					icep = "229494";
					break;
				case 'NL':
					cntry = "1346-53482-19255-0";
					icep = "229557";
					break;
				case 'UK':
					cntry = "710-53481-19255-0";
					icep = "229508";
					break;
				default:
					cntry = "711-53200-19255-0";
					icep = "229466";
			}
		}
		var affUrl = url;
		affUrl = affUrl.replace(/\/[0-9]+\-[0-9]+\-19255\-0\//, '/' + cntry + '/');
		affUrl = affUrl.replace(/vectorid\=[0-9]+/, 'icep_vectorid=' + icep);
		// console.log(affUrl)
		return affUrl;
	}
	// 
	function amLocalize(itmId, strTLD) {
		if (strTLD) {
			switch (strTLD) {
				case 'JP':
					strTLD = 'co.jp';
					break;
				case 'GB':
				case 'JE':
				case 'GG':
				case 'IM':
				case 'IE':
				case 'UK':
					strTLD = 'co.uk';
					break;
				case 'CH':
				case 'AT':
					strTLD = 'de';
					break;
				case 'PT':
					strTLD = 'es';
					break;
				default:
					strTLD = (objAmAffIds[strTLD.toLowerCase()] != null ? strTLD.toLowerCase() : 'com');
					break;
			}
			affId = objAmAffIds[strTLD.toLowerCase()];
		}
		// OneLink Mod  DEL IF NOT USING OneLink <script> in html
		strTLD = (strTLD == 'ca' || strTLD == 'co.uk') ? "com" : strTLD;
		affId = thsBlg_amz.com; ///// default US tag for this site
		// /OneLink Mod
		return "https://www.amazon." + strTLD + "/exec/obidos/ASIN/" + itmId + "/" + affId;
	}
	// 
	function parseURL(href) {
		// v1 returns url parths as given. works with relative ones too.
		var match = href.match(/^(?:(https?\:)\/\/)?(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
		return match && {
			href: href,
			protocol: match[1],
			host: match[2],
			hostname: match[3],
			port: match[4],
			path: match[5],
			querystring: match[6],
			hash: match[7]
		}
	}
	// 
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		///// geoip chunk 3/4
		// url: "https://freegeoip.app/json/" // new 11/18
		url: "https://ipapi.co/json/" // new 11/18
	}).done(function(json) {
		try {
			///// geoip chunk 4/4
			var strTLD = json.country || ''; // for freegeoip.app

			// console.log(strTLD);

			var zzlUrlReg = /zazzle\./;
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				// AMZ
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// console.log(itmId)
					// amLocalize is OFF (USING ONELINK) (uncommnt to enable)
					// $(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
				// ZZL
				if (url.match(zzlUrlReg)) {
					$(this).attr('href', zzlLocalize(strTLD, url));
				}
			});
			// 
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
}

// -------- /AMZ/EPN FUNCS ----------

function gCSE(cx, ch) {

	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;

	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);

	$('#cse_searchbox').append("<gcse:searchbox adchannel='" + ch + "' queryParameterName='s'></gcse:searchbox>");
	$('#cse_searchresults').append("<gcse:searchresults></gcse:searchresults>");
}

function menulinks() {
	try {
		var menulinks = thsBlg_menulinks.flat(Infinity).join(' ');
		$('#logoheader').append('<div id="lh1">' + menulinks + '</div>');
	} catch (e) {}
}

// ========== /FUNCTIONS ==========

// 
// 

// ============================
// ============================
// ============================
// ============================
// ============================
// ============================
// ========== EXEC ============
// ============================
// ============================
// ============================
// ============================
// ============================
// ============================

$(function() {
	// ========= ALL =========

	menulinks();

	gCSE(thsBlg_cse, thsBlg_cse_adchannel);

	// 
	/// amz url clean
	// *** CLEAN ALL AMZ API URLS to .com/dp/xxx?tag=yyy ***
	try {
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href').trim();
			if (aurl.match(/(amazon\.|amzn\.)/igm)) {
				var a = amazonCleanUrl(aurl, "com", thsBlg_amz.com);
				$(this).attr('href', a);
				// console.log(a);
			}
		});
	} catch (e) {}
	////
	//// epn new "track urls" instead of rover
	try {
		$('.postbody a').each(function(index) {
			var aurl = $(this).attr('href').trim();
			if (aurl.match(/rover\.ebay/im)) {
				// console.log(aurl);
				var a = epn_rover2newURL(aurl, thsBlg_epn)
				$(this).attr('href', a);
				// console.log(a);
			}
		});
	} catch (e) {}
	/////
	// 
	try {
		$('.postbody h3').each(function(index) {
			// $(this).html(' More Details &amp; Prices ');
			$(this).remove();
			// $(this).addClass('btn btn-info');
		});
		$('.postbody a:nth-child(5)').each(function(index) {
			$(this).html(' Price &amp; details &#9658; ');
			$(this).addClass('btn btn-success');
			$(this).attr({
				'target': '_blank'
			});
		});
	} catch (e) {}
	// 

	$('.blogger-labels').before(`

			<div style="clear:both;"></div>

			<div style="text-align:right;">

			<a class="reportthis" rel="nofollow" href="https://docs.google.com/forms/d/e/${thsBlg_reportProductForm}/viewform?usp=sf_link">

			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report Item
			</a>
			</div>


			`);
	// 
	allBloggerLabels();
	// 
});

// ============== ALL LAST --- WINDOW ON LOAD ===================

$(window).on("load", function() {

	if (thsBlg_pg == "itempage") {
		// amLocalize is off using onelink through amz dashboard, no js req
		affLocalize(thsBlg_amz, thsBlg_epn, thsBlg_zzl);
	}

	handleBrokenImages();

}); /// window onload
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
// 
// 
//
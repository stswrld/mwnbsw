//// store... @ www.sitesworld.com/common/x/str/s/store.js
// -------------------------------------
// ---- FIRS EXEC ALL ----
// -------------------------------------
// 
// -------------------------------------
// ---- /FIRS EXEC ALL ----
// -------------------------------------
// -------------------------------------
// ---- GLOBAL VARS ----
// -------------------------------------
thsBlg_amz = {
	// no empties!
	'com': 'stswrld-20',
	'ca': 'sitesworld-20',
	'co.uk': 'sitesworld-21',
	'de': 'sitesworldde-21',
	'fr': 'sitesworldfr04-21',
	'def_kw': 'time',
	'def_kw_2': 'time',
	'def_cat': 'Watches',
	'def_cat_2': 'All',
	'def_node': '', //'9003130011',
	'def_node_2': '', //'9003130011',
};
thsBlg_as = '\x63' + 'a' + '-\x70\x75b-' + (567810827969404 + 1516760576722639 + 3605631708667678);
var ad_Id_resp = '6312455445';
var ad_Id_fixed = '0693467584';
var lu_Id_resp = '4928296247';
thsBlg_epn = "5337983353";
thsBlg_epn_epnSmPl = "605f12b36c98752d0e2ac45f"; //// ad id of epn smrt plcmnt
thsBlg_dyn_catcher = "www.sitesworld.com/common/x/str/c/";
ThsBlg_aT_cd = '';
thsBlg_img_cdn = "www.sitesworld.com/common/x/str/i/";
thsBlg_gasJsnPrx = "AKfycbxlgCraLy0Gg6SffuTNQ4F_hrs9duFuw_e1QNfU5jZAWUYqD_IY";
thsBlg_reportProductForm = '1FAIpQLSeRVM6S7BJwvaNHECffT3YatkVR0Q9263C7aAzVvka9eRuM2Q'; // gd form

// 
// 
// 
// ldng_16_3x for asad style
document.getElementsByTagName('head')[0].insertAdjacentHTML("beforeend", '<style> .ldng_16_3x {display:block;background-image:url(//' + thsBlg_img_cdn + 'ldng_16_3x.gif);background-repeat:no-repeat;background-position:center center;vertical-align: middle;} </style>');
// 
// 
winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
winHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// 
// 
// 
// 
if (typeof thsSiteTyp == 'undefined') {
	thsSiteTyp = "www";
}
// 
if (typeof bnndQry === 'undefined') {
	bnndQry = 'no';
}
// 
// 
//// ----------<pagelevelIfNotHardcoded>---------- //
//// v2
function pagelevelIfNotHardcoded() {}

function _pagelevelIfNotHardcoded() {
	try {
		var plTag = document.getElementsByTagName("head")[0].getElementsByTagName("script") || 0;
		for (var i = 0; i < plTag.length; i++) {
			if (plTag[i].textContent.match(/enable_page_level_ads/im)) {
				return;
			}
		}
		(adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: thsBlg_as,
			enable_page_level_ads: true
		});
	} catch (e) {}
}
if (bnndQry != "yes") { //////////// if bnndQry  ///////////
	// pagelevelIfNotHardcoded();
}
////
//// ----------</pagelevelIfNotHardcoded>---------- //
// -------------------------------------
// ---- /GLOBAL VARS ----
// -------------------------------------
// -------------------------------------
// ---- FUNC ----
// -------------------------------------
function epn_rover2newURL(url, campid) {
	//// v1 
	var url = url.toString();
	return "https://www.ebay.com/itm/" + url.match(/item\=([0-9]+)/im)[1] + "?mkrid=711-53200-19255-0&siteid=0&mkcid=1&campid=" + campid + "&toolid=10044&customid=&mkevt=1";
}

function viewport(percentage, property) {
	// v2 (vmax) - returns viewport % in pixels
	// property='vw','vh','vmax', usage: viewport(40, "vh")+'px';
	var w = Math.round((Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) * percentage / 100);
	var h = Math.round((Math.max(document.documentElement.clientHeight, window.innerHeight || 0)) * percentage / 100);
	if (property == "vw") {
		return w;
	}
	if (property == "vh") {
		return h;
	}
	if (property == "vmax") {
		if (w > h) {
			return w;
		}
		if (h > w) {
			return h;
		}
		if (w == h) {
			return w;
		}
	}
}

function ldngPrgssBar() {
	///// v1 
	//// req bootstrap
	return '<div id="ldngPrgssBar"><div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}

function detectmob() {
	if (window.innerWidth <= 800) {
		return true;
	} else {
		return false;
	}
}

function detectmob_500() {
	if (window.innerWidth <= 500) {
		return true;
	} else {
		return false;
	}
}
// --- NO GO FOR SCRIPTS ON LOC CONTAINING ---
// usage: if ( OK2Go("asad") ){  }
function OK2Go(what) {
	if (what == "asad") {
		// asad spcfc
	}
	if (arrayItemMatchesString(["blgutpg"], window.location.pathname)) {
		return false;
	}
	return true;
}

function ga_evCatVal(evCat, evVal) {
	// v2
	// console.log(evCat + ' ' + evVal);  // KEEP!
	try {
		ga('send', 'event', evCat, evVal, {
			'nonInteraction': 1
		});
	} catch (a) {
		//
	}
}

function arrayItemMatchesString(arr, stringText) {
	// v1 - arrayItemMatchesString True if in array matches stringText
	if ((new RegExp('\\b' + arr.join('\\b|\\b') + '\\b')).test(stringText)) {
		return true;
	} else {
		return false;
	}
}

function forumMenu() {
	var a = "";
	var current = " ";
	// depending on useAllInOneTopPage, top forum will be forum 0 or forum# 1...
	var topForum = (useAllInOneTopPage == "yes") ? 0 : 1;
	for (var i = topForum; i < subForum.length; i++) {
		if (i == forumId) {
			current = ' class= "active" ';
		} else {
			current = "";
		}
		if (i == 0) {
			a += '<li ' + current + '><a href="/">' + subForum[0][0] + '</a></li>';
		} else {
			a += '<li ' + current + '><a href="/f' + i + '_p1.html">' + subForum[i][0] + '</a></li>';
		}
	}
	return '' +
		'<ul class="nav nav-tabs">' +
		'<li role="presentation"><a href="/"> Home </a></li>' +
		'<li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false">All Forums<span class="caret"></span></a><ul class="dropdown-menu" role="menu">' + a + '</ul></li>' +
		'<li role="presentation"><a href="#">' + subForum[forumId][0] + ' </a></li>' +
		'</ul>';
}

function writeInnerHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = html;
	}
}

function prependHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function writeInnerHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].innerHTML = html;
	}
}

function prependHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterbegin", html);
	}
}

function insertBeforeHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByTag(firstTag, html) {
	if (!document.getElementsByTagName(firstTag)[0]) {
		// 
	} else {
		document.getElementsByTagName(firstTag)[0].insertAdjacentHTML("afterend", html);
	}
}

function prependHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterbegin", html);
	}
}

function appendHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforeend", html);
	}
}

function appendHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforeend", html);
	}
}

function insertBeforeHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function insertBeforeHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("beforebegin", html);
	}
}

function insertAfterHTMLByClass(divClass, html) {
	if (!document.getElementsByClassName(divClass)[0]) {
		// 
	} else {
		document.getElementsByClassName(divClass)[0].insertAdjacentHTML("afterend", html);
	}
}

function insertAfterHTML(divId, html) {
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).insertAdjacentHTML("afterend", html);
	}
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}


//  2023-10-15 all local AS off

function asadRespId() {}

function _asadRespId(prefix, postfix, divId, idTxt, slot, channel, orient, divWidth, divHeight) {
	if (bnndQry == "yes") {
		return;
	}
	// v11 - adFormat var
	if (!document.getElementById(divId)) {
		// 
	} else {
		if (typeof orient === 'undefined' || orient == "") {
			var orient = "";
		}
		var a = "";
		if (orient == "link") {
			a = "link"
		};
		if (orient == "matched") {
			a = "autorelaxed"
		};
		if (orient == "a") {
			a = "auto"
		};
		if (orient == "h") {
			a = "horizontal"
		};
		if (orient == "v") {
			a = "vertical"
		};
		if (orient == "r") {
			a = "rectangle"
		};
		if (orient == "rh") {
			a = "rectangle, horizontal"
		};
		if (orient == "rv") {
			a = "rectangle, vertical"
		};
		var adFormat = (a == "") ? '' : 'data-ad-format="' + a + '"';
		var divWidth = typeof divWidth !== 'undefined' ? 'width:' + divWidth + ';' : '';
		var divHeight = typeof divHeight !== 'undefined' ? 'height:' + divHeight + ';' : '';
		try {
			document.getElementById(divId).innerHTML = '' +
				'<style type="text/css">' +
				'.adslot_' + idTxt + ' { ' + divWidth + ' ' + divHeight + ' }' +
				'</style>' +
				prefix +
				' <ins class="adsbygoogle adslot_' + idTxt + '" ' +
				' data-ad-client="' + thsBlg_as + '" ' +
				' data-ad-slot="' + slot + '" ' +
				' ' + adFormat + ' ></ins> ' +
				postfix +
				'';
			(adsbygoogle = window.adsbygoogle || []).push({
					params: {
						google_ad_channel: channel
					}
				});
		} catch (e) {
			return true;
		}
	}
}

function addthisN(divId, url, title, template) {
	/*
	- V4 - 
 
	*/
	/// vars to set ///
	var svgWH = 'width="16" height="16"'; // to prvnt ovrsize splsh b4 load
	var emailPostfix = ""; // eg " - via mysite"
	var pageImgUrl = "";
	try {
		pageImgUrl = document.querySelector('link[rel*="image_src"]').getAttribute('href'); // eg. for pinterest etc http://a.com/a.jpg
	} catch (e) {}
	/// current page's url and title if not passed
	var url = (typeof url !== 'undefined') ? url : window.location.href;
	var title = (typeof title !== 'undefined') ? title : document.title;
	var template = (typeof template !== 'undefined') ? template : "~<email>~~<facebook>~~<twitter>~~<pinterest>~~<whatsapp>~";
	url = encodeURIComponent(url);
	title = encodeURIComponent(title);
	//// add css and js if not there
	if (document.querySelector('link[href*="rrssb.css"]') === null) {
		var all_css = document.createElement('link');
		all_css.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/css/rrssb.css");
		all_css.setAttribute("rel", "stylesheet");
		all_css.setAttribute("type", "text/css");
		document.getElementsByTagName("head")[0].appendChild(all_css);
		if (document.getElementById('addthis_RRSSBScript')) {
			/////////////////////
		} else {
			var addthisScript = document.createElement('script');
			addthisScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/rrssb/1.14.0/js/rrssb.min.js');
			addthisScript.setAttribute('id', 'addthis_RRSSBScript');
			document.body.appendChild(addthisScript);
		}
	}
	///// more buttons at bit.ly/2XbypkQ
	///// MODIFY VARIOUS VARS & CODE ABOVE AND BELOW IF ADDING!
	var R_email_R = '  <li class="rrssb-email">' +
		'    <a href="mailto:?Subject=' + title + ' ' + emailPostfix + '&body=' + url + '">' +
		'      <span class="rrssb-icon"><svg ' + svgWH + ' ' + svgWH + ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .28 4.96L.27 19.04a2.353 2.353 0 0 0 2.345 2.346h18.77a2.354 2.354 0 0 0 2.348-2.347V4.96a2.356 2.356 0 0 0-2.347-2.346zm0 4.694L12 13.174 2.614 7.308V4.96L12 10.828l9.386-5.866V7.31z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_facebook_R = '  <li class="rrssb-facebook">' +
		'    <a href="https://www.facebook.com/sharer/sharer.php?u=' + url + '" class="popup">' +
		'      <span class="rrssb-icon"><svg ' + svgWH + ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_twitter_R = '  <li class="rrssb-twitter">' +
		'    <a href="https://twitter.com/intent/tweet?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg ' + svgWH + ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_pinterest_R = '  <li class="rrssb-pinterest">' +
		'    <a href="https://pinterest.com/pin/create/button/?url=' + url + '&media=' + pageImgUrl + '&description=' + title + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg ' + svgWH + ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M14.021 1.57C6.96 1.57 1.236 7.293 1.236 14.355S6.96 27.14 14.021 27.14s12.785-5.725 12.785-12.785C26.807 7.294 21.082 1.57 14.021 1.57zm1.24 17.085c-1.161-.09-1.649-.666-2.559-1.219-.501 2.626-1.113 5.145-2.925 6.458-.559-3.971.822-6.951 1.462-10.116-1.093-1.84.132-5.545 2.438-4.632 2.837 1.123-2.458 6.842 1.099 7.557 3.711.744 5.227-6.439 2.925-8.775-3.325-3.374-9.678-.077-8.897 4.754.19 1.178 1.408 1.538.489 3.168-2.128-.472-2.763-2.15-2.682-4.388.131-3.662 3.291-6.227 6.46-6.582 4.007-.448 7.771 1.474 8.29 5.239.579 4.255-1.816 8.865-6.102 8.533l.002.003z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	var R_whatsapp_R = '  <li class="rrssb-whatsapp">' +
		'    <a href="whatsapp://send?text=' + title + ' ' + url + '"' +
		'    class="popup">' +
		'      <span class="rrssb-icon"><svg ' + svgWH + ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><path d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 0 1-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 0 1-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0 0 45.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"/></svg></span>' +
		// '      <span class="rrssb-text"></span>' +
		'    </a>' +
		'  </li>';
	//// 1ST REPLACE **THEN** REMOVE ALSO!
	var final_buttons = template.replace("~<email>~", R_email_R).replace("~<facebook>~", R_facebook_R).replace("~<twitter>~", R_twitter_R).replace("~<pinterest>~", R_pinterest_R).replace("~<whatsapp>~", R_whatsapp_R);
	//// 2ND NOW REMOVE UNNEEDED ONES!
	final_buttons = final_buttons.replace("~<email>~", "").replace("~<facebook>~", "").replace("~<twitter>~", "").replace("~<pinterest>~", "").replace("~<whatsapp>~", "");
	var rrssbHTML = '<ul class="rrssb-buttons clearfix">' + final_buttons + '</ul>';
	try {
		document.getElementById(divId).insertAdjacentHTML("beforeend", rrssbHTML);
	} catch (e) {}
}

function disqusAsync(disqusId, divId) {
	// REQ JQRY
	// v3
	var ds_loaded = false;
	try {
		var top = $("#" + divId).offset().top;
	} catch (e) {};

	function check() {
		if (!ds_loaded && $(window).scrollTop() + $(window).height() > top) {
			$.ajax({
				type: "GET",
				url: "https://" + disqusId + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			ds_loaded = true;
		}
	}
	$(window).scroll(check);
	check();
}
// --- GooFeeAPI
// v1 - REQ JQR
function jqFetchRSS(url, callback) {
	// REQ JQR
	$.ajax({
		url: '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
		dataType: 'json',
		success: function(data) {
			callback(data.responseData.feed);
		}
	});
}

function tablify(html_array, rows, cols, bord) {
	// v2 -
	// html_array e.g. ['<a><h3></h3><img/></a>', ''<a><h3></h3><img/></a>'']
	// rows,cols,bord='yes'
	var d = (bord == "yes") ? 'border:solid 1px #ccc!important;padding:0.5%!important;' : '';
	var a = '',
		b = '',
		c = '',
		counter = 0;
	a = '' +
		'<style type="text/css">' +
		'.axaffdtbl,.axaffdtbl a,.axaffdtbl img' +
		'{margin:0!important;background:#fff!important;box-shadow:none!important;border:none!important;}' +
		'.axaffdtbl {display:table;width:95%!important;border-collapse:collapse!important;}' +
		'.axaffdtbl_tr {display:table-row} ' +
		'.axaffdtbl_td {display:table-cell;vertical-align:top!important;' + d + '} ' +
		'.axaffdtbl a {text-decoration:none;display:block!important;width:100%!important;height:auto!important;}' +
		'.axaffdtbl img {width:100%!important;}' +
		'</style>' +
		'<span class="axaffdtbl">';
	for (i = 0; i < rows; i++) {
		b += '<span class="axaffdtbl_tr">';
		for (j = 0; j < cols; j++) {
			var item = html_array[counter] || ''; //TODO placeholder for empties
			b += '<span class="axaffdtbl_td">' + item + '</span>';
			counter++;
		}
		b += '</span>';
	}
	c = '</span>';
	return a + b + c;
}

function epnSmPl(divId, adID, kw = "", categ = "", divWidth = 300, divHeight = 250) {
	// v2
	// categ : "1234 | 4567" or "" for default set at epn pg
	// kw or "" - do -
	//
	// prevent too tall
	divHeight = ($(window).width() >= $(window).height()) ? 300 : divHeight;
	if (document.getElementById(divId)) {
		try {
			$.getScript("https://epnt.ebay.com/static/epn-smart-tools.js").done(function() {
				// make width always container's or ATLEAST 300!
				var desiredWidth = $('#' + divId).width() - 12;
				var usableWidth = (desiredWidth < 300 || divWidth < 300) ? 300 : desiredWidth;
				// console.log ( usableWidth + ' ' + divHeight)
				$('#' + divId).html(
					'<div style="outline:solid 1px #aaa;max-width:99%;overflow:hidden;">' + // epn won't show if less than 300px! only way to crop for smaller widths
					'<div id="epncont_' + divId + '" style="width:' + usableWidth + 'px;height:' + divHeight + 'px;">' +
					'<ins data-keyword="' + kw + '" data-category-id="' + categ + '" class="epn-placement" data-config-id="' + adID + '"></ins>' +
					'</div> </div>' +
					'');
			});
		} catch (e) {
			console.log('no epnSmPl');
		}
	}
}

function epnFromLbls(keywords, div) {
	// v7 -  epnSmPl now (epn rss kaput)
	epnSmPl(div, thsBlg_epn_epnSmPl, keywords);
}

function epnRs(gasID, country, kw, divId, cmpId, rand, numItems, rows, cols, itemTemplate) {
	// epn rss (GAS)
	// v8 
	// gasID = our GAS prx ID
	// country = 'CA' etc or '';
	// rand = "rand" to randomize, intNumItems = numOfitmes 
	// req tablify(), jquery 
	if (document.getElementById(divId)) {
		console.log(country);
		var div = document.getElementById(divId);
		var geo = (country == "") ? '' : '&availableTo=' + country;
		try {
			var prxJsn = '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x63\x72\x69\x70\x74\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x6D\x61\x63\x72\x6F\x73\x2F\x73\x2F' + gasID + '/exec';
			//////////// json prx jp plugin by mcpher /////////////
			if (!jQuery().ajaxOrig) {
				jQuery.ajaxOrig = jQuery.ajax;
				jQuery.ajax = function(a, b) {
					function d(a) {
						a = encodeURI(a).replace(/&/g, "%26");
						return prxJsn + "?url=" + a + "&callback=?"
					}
					var c = "object" === typeof a ? a : b || {};
					c.url = c.url || ("string" === typeof a ? a : "");
					var c = jQuery.ajaxSetup({}, c),
						e = function(a, c) {
							var b = document.createElement("a");
							b.href = a;
							return c.crossOrigin && "http" == a.substr(0, 4).toLowerCase() && "localhost" != b.hostname && "127.0.0.1" != b.hostname && b.hostname != window.location.hostname
						}(c.url, c);
					c.proxy && 0 < c.proxy.length && (prxJsn = c.proxy, "object" === typeof a ?
						a.crossDomain = !0 : "object" === typeof b && (b.crossDomain = !0));
					e && ("object" === typeof a ? a.url && (a.url = d(a.url), a.charset && (a.url += "&charset=" + a.charset), a.dataType = "json") : "string" === typeof a && "object" === typeof b && (a = d(a), b.charset && (a += "&charset=" + b.charset), b.dataType = "json"));
					return jQuery.ajaxOrig.apply(this, arguments)
				};
				jQuery.ajax.prototype = new jQuery.ajaxOrig;
				jQuery.ajax.prototype.constructor = jQuery.ajax;
				//////////// json prx jp plugin by mcpher /////////////
			}
			//////////// /json prx jp plugin by mcpher /////////////
			$.ajax({
				crossOrigin: true,
				url: 'https://rest.ebay.com/epn/v1/find/item.rss?keyword=' + kw.replace(/\s+/igm, "%20") + '&sortOrder=BestMatch&programid=1&campaignid=' + cmpId + '&toolid=10039&listingType1=AuctionWithBIN&listingType2=FixedPrice&lgeo=1&condition1=New' + geo + '&feedType=rss',
				success: function(data) {
					var xml = $.parseXML(data.result.trim());
					// console.log(xml);
					var html = '  ';
					var items = [];
					var counter;
					$(xml).find("item").each(function(index) {
						// console.log(index);
						counter = index + 1;
						var el = $(this);
						// 
						var title = el.find("title").text();
						// console.log(title);
						var desc = el.find("description").text();
						var link = el.find("link").text().replace(/http\:/, 'https\:') || '';
						// 
						try {
							var thumbnail = desc.match(/src\=['"](htt[^"]*\.jpg)['"]/)[1].replace(/http\:/, 'https\:');
						} catch (e) {
							var thumbnail = "";
						}
						//// prevent items with no images:
						if (thumbnail.match(/04040_0\.jpg/)) {
							return true; // no continue for jq .each()!!
						}
						// 
						var item = itemTemplate.replace("___LINK___", link).replace("___TITLE___", title).replace("___THUMBNAIL___", thumbnail);
						// 
						items.push([item]);
					});
					if (rand == "rand") {
						shuffle(items);
					}
					html = tablify(items, rows, cols, 'yes');
					div.innerHTML = html;
				}
			});
		} catch (e) {
			console.log('no feed');
		}
	}
	///// helper func ////
	function shuffle(sourceArray) {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));
			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	}
	//////
}
// -- amzAdKW 1/3 (in main script)
function amzAdKW(div, arr_amzNtv_sync_options) {
	// v4
	// req /c/ dynamic catcher, amzNtv_sync(), jq, iframeResizer.min.js
	var arr_amzNtv_sync_options = encodeURIComponent(JSON.stringify(arr_amzNtv_sync_options));
	$('#' + div).html(
		'<iframe onload="iFrameResize()" class="iframeresize_class" style="display:block;width:99%" src="https://' + thsBlg_dyn_catcher + '?s=amz&a=' + arr_amzNtv_sync_options + '"  scrolling="no" frameborder="0" border="0" ></iframe>' +
		''
	);
	$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
		$('.iframeresize_class').iFrameResize();
	});
}
// -- amzAdKW 2/3 (in main script)
function amzNtv_sync(ad_mode, design, numRows, search_phrase, tracking_id, linkid, title, default_category, browseNode) {
	// v5
	// ad_mode: "search"||"";
	// design: "text_links"||"grid";
	// 
	var adMode = (ad_mode === '') ? 'search' : ad_mode;
	var numRows = (numRows === '') ? "5" : numRows;
	var adDesign = (design == 'text_links') ? 'amzn_assoc_rows = "' + numRows + '"; amzn_assoc_design = "text_links";' : 'amzn_assoc_enable_interest_ads = "true";';
	var adCategory = (default_category === '') ? 'All' : default_category;
	var def_browseNode = (browseNode === '') ? '' : 'amzn_assoc_default_browse_node = "' + browseNode + '";';
	// 
	document.write(
		'<script>' +
		'amzn_assoc_ad_type = "smart";' + // *
		'amzn_assoc_marketplace = "amazon";' + // *
		'amzn_assoc_region = "US";' + // *
		'amzn_assoc_placement = "adunit0";' + // *
		'amzn_assoc_search_bar = "false";' + // *
		'amzn_assoc_tracking_id = "' + tracking_id + '";' + // *
		'amzn_assoc_linkid = "' + linkid + '";' + // *
		'amzn_assoc_title = "' + title + '";' + // *
		'amzn_assoc_ad_mode = "' + adMode + '";' +
		'amzn_assoc_default_category = "' + adCategory + '";' + // *
		'amzn_assoc_default_search_phrase = "' + search_phrase + '";' +
		def_browseNode +
		adDesign + // for text_links only
		'</script>' +
		'<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>' +
		'');
}

function amzFromLbls(keywords, cat, type, div) {
	// v4 
	amzAdKW(div, [
		"search",
		type, // "text_links"||"grid"
		"3", // num of rows if text_links above, eg "3" (def:"5")
		keywords, // keywords, // search phrase
		thsBlg_amz.com, // aff id
		'064830' + '62a' + '172ded549d69' + 'e' + '1886790a34', // link id (def or create new in dashboard)
		"", // title (def: blank)
		cat, // category (def: All)
		thsBlg_amz.def_node, // browseNode (opt, if category given)
	]);
}

function affLocalize(objAmAffIds, strEPNId) {
	// v3
	// req: jq
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
	$.ajax({
		method: "GET",
		dataType: "json",
		cache: true,
		url: "https://freegeoip.app/json/" // new 11/18
	}).done(function(json) {
		try {
			var strTLD = json.country_code;
			var epnUrlReg = /vectorid/;
			var amzUrlReg = RegExp("/([a-zA-Z0-9]{10})(?:[/?]|$)");
			// var amzUrlReg = RegExp("/(?!/e|st)../([A-Z0-9]{10})");
			// "/(?!/e|st)../([A-Z0-9]{10})"
			$('a').each(function(index) {
				var url = unescape($(this).attr('href'));
				if (url.match(amzUrlReg)) {
					var itmId = url.match(amzUrlReg)[1];
					// amLocalize is OFF (USING ONELINK) (uncommnt to enable)
					// $(this).attr('href', amLocalize(itmId, strTLD));
				}
				// EPN
				if (url.match(epnUrlReg)) {
					$(this).attr('href', ebLocalize(strTLD, url));
				}
			});
		} catch (e) {}
	}).fail(function(error) {
		// console.log(error);
	});
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

function aead(divId, aid, akey, asize) {
	// v3
	// aid,akey,asize from ae code
	if (!document.getElementById(divId)) {
		// 
	} else {
		document.getElementById(divId).innerHTML = '<span style="display:table;margin:0 auto"><a style="display:none!important" id="' + aid + '"></a></span>';
		if (window.AED_SHOW) {
			window.AED_SHOW({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
		} else {
			window.AED_ONLOAD = window.AED_ONLOAD || [];
			window.AED_ONLOAD.push({
				wid: aid,
				shortkey: akey,
				size: asize,
				custom: {}
			});
			if (!document.getElementById("ae-ad-script-$")) {
				var s = document.createElement("script"),
					h = document.getElementsByTagName("head")[0];
				s.id = 'ae-ad-script-$';
				s.charset = "utf-8";
				s.async = !0;
				s.src = "https://i.alicdn.com/ae-game/thirdparty/show-window/index.js";
				h.insertBefore(s, h.firstChild)
			}
		}
	}
}
/// use as amazonLocalize()
function writeRSS(url, objElement) {
	// objElement e.g. document.getElementById("feBu_right").getElementsByTagName("ul")[0]
	jqFetchRSS(url, function(feedResponse) {
		var html = '';
		for (i = 0; i < feedResponse.entries.length; i++) {
			html += ' <a href="' + feedResponse.entries[i].link + '">' + feedResponse.entries[i].title + '</a> ';
		}
		html += ' ';
		objElement.innerHTML = html;
	});
}
// --- /GooFeeAPI
function gettags_main(str) {
	// RTRNS-1-TAG-ONLY
	var text = str.replace(/\./g, " ");
	text = text.replace(/tagged|under|tagged under|topics|@t|www|\scom\s|sitesworld|\s\,\s/ig, ""); // : WWW.sitesworld.COM : //
	if (text.match(/[A-Za-z]/)) {
		//
	} else {
		text = "world, time"; // : WWW.sitesworld.COM : //
	}
	texts = text.split(",");
	return texts[0];
}

function loadingDoneBar() {
	///// v2 
	//// req bootstrap
	return '<div id="loadingDoneBar"> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> </div> </div> </div>';
}
// 
// 
// 
// 
// 
// 
// -------------------------------------
// -------------------------------------
// --- EXEC 
// -------------------------------------
// -------------------------------------
// ---- EXEC:AS ----
// CRC ad 8967036449, link 0744487852
// 
// 
// 
// ///////////////// / WWW. ///////////////// 
// 
// 
// /////////////////  STORE. /////////////////
// 
if (thsSiteTyp == "store") {
	insertAfterHTML('jadeHeader', loadingDoneBar());
	// --- AS
	//   resp ad: , resp lu: 
	//// STORE BOTH MAINPAGE+ITEMPAGE BOTH DTP+MOB
	//// STORE CHANNELS
	var ad_Channel = (ThsBlg_pg == 'mainpage') ? '2715870640' : '2715870640';
	var lu_Channel = (ThsBlg_pg == 'mainpage') ? '3757221042' : '3757221042';
	//// STORE BOTH MAINPAGE+ITEMPAGE
	// insertAfterHTML('cse_container', '<div id="asOnTop"></div>');
	// asadRespId(
	// 	'', // prefix
	// 	'', // postfix
	// 	"asOnTop", // div id
	// 	"xyz_asOnTop", // xyz_ + div id
	// 	ad_Id_resp, // slot
	// 	ad_Channel, // channel
	// 	'', // orient OR ""
	// 	'320px',
	// 	'100px'
	// );
	// 
	//////////////////
	//////////////////
	////////////////
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
	///// store jq /////
	$(function() {
		// ========= ALL =========
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
			$('.postbody h3 a').each(function(index) {
				$(this).html(' More Details &amp; Prices ');
				$(this).addClass('btn btn-info');
			});
			$('.postbody a:nth-child(6)').each(function(index) {
				$(this).html(' Buy Now ');
				$(this).addClass('btn btn-success');
			});
		} catch (e) {}
		// 
		$('#loadingDoneBar').remove();
		// 
	});
}
// 
// 
// ///////////////// /STORE /////////////////
// 
//
/////////////////    DYN_CATCHER   ///////////////////
// 
if (thsSiteTyp == "dyn_catcher") {
	// -- amzAdKW 1/3 (in main script)
	if (qs.get("s") == "amz") {
		$('head').append('<style>body a {color:blue!important;} .amzn-native-product-text {border-bottom:dotted 1px #aaa!important; margin-bottom:10px!important} .amzn-native-content li a {font-size:16px; line-height:1em} .amzn-native-product-offer-price{display:none!important}</style>');
		var a = JSON.parse(decodeURIComponent(qs.get("a")));
		amzNtv_sync(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
		$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.contentWindow.min.js")
			.done(function() {});
	}
}
// 
/////////////////    /DYN_CATCHER   ///////////////////
// 
//
// ============== ALL LAST --- WINDOW ON LOAD ===================
// LAST --- WINDOW ON LOAD 
$(window).on("load", function() {
	// 
	///// STORE /////
	// 
	if (thsSiteTyp == "store") {
		// 
		if (ThsBlg_pg == 'itempage') {
			// --- AFF IN SIDEBAR
			// DTP STR AFF SB
			// if (!detectmob()) {
			$('#rightbar').prepend('<div  class="ldng_16_3x" id="amzSB_T"></div>');
			amzFromLbls(thsBlg_amz.def_kw, thsBlg_amz.def_cat, ((!detectmob()) ? "grid" : "text_links"),
				"amzSB_T");
			// }
			// ---AFF FROM LABLES
			$('.blogger-labels').before('<hr/><div style="text-align:right;margin: -18px 0;"><a style="font: normal 12px/1em Arial;" rel="nofollow" href="https://docs.google.com/forms/d/e/' + thsBlg_reportProductForm + '/viewform?usp=sf_link"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Report this item</a></div><div style="clear:both;"></div><hr/><h4>If you liked it, ALSO TRY:</h4><hr/><div  class="ldng_16_3x"  id="ebRSBtm_1"></div><hr/><div class="ldng_16_3x"  id="ebRSBtm_2"></div><hr/>');
			var kw = $('.blogger-labels').text().replace(/\s+/igm, " ").trim().replace(/(labels\:)/igm, "").trim();
			// console.log(kw);
			try {
				if ($('.postbody h3 a').attr('href').match(/amazon\./)) {
					epnFromLbls(kw, "ebRSBtm_1"); // kaput
					amzFromLbls(kw, thsBlg_amz.def_cat_2, "grid", "ebRSBtm_2");
				} else {
					amzFromLbls(kw, thsBlg_amz.def_cat_2, "grid", "ebRSBtm_1");
					epnFromLbls(kw, "ebRSBtm_2"); // kaput
				}
			} catch (e) {}
			// ---/AFF FROM LABLES
			$.getScript("https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js").done(function() {
				$('.iframeresize_class').iFrameResize();
			});
		}
		// 
		///// HNDLE BRKN IMGS - v2
		// req: epnSrchURL()
		$('.postbody a img').each(function(index) {
			if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth < 100) { // < 100 (ebay fallbck is 80px w) (default is 0 )
				var imgSrc = $(this).attr('src') || '';
				var redirURL = '';
				var redirQuery = $('h1').text().replace(/\s+/igm, " ").replace(/^[^\:]*\:(.*)/igm, "$1").replace(/[^A-Za-z\s]/igm, "").trim().replace(/\s+/igm, "+").trim();
				ga_evCatVal('store', 'err_NoAffImg:U: ' + imgSrc);
				if (imgSrc.match(/amazon/)) {
					redirURL = amzSrchURL(thsBlg_amz.com, redirQuery);
				} else {
					redirURL = epnSrchURL(thsBlg_epn, redirQuery);
				}
				// 
				$(this).parent().replaceWith('<div style="margin:20px auto"><div class="panel panel-warning">   <div class="panel-heading"> <span class="glyphicon glyphicon-info-sign"></span> Oops! It seems this item got moved or re-categorized... <br/><a id="mssngImgRedir_' + index + '" class="btn btn-warning" href="' + redirURL + '" role="button"><b style="font-size:120%">Locate Item Now</b> &#x25B6; </a> </div>     </div></div> ');
				// 
				$("#mssngImgRedir_" + index).click(function() {
					ga_evCatVal('store', 'inf_btnLocItmNw:U: ' + redirURL);
				});
			}
		});
		/// HNDLE BRKN IMGS
		// 
		// 
		// ** ebay ebLocalize IS >>ON<< in affLocalize() **
		// ** amazon amLocalize IS >>OFF<< in affLocalize() **
		affLocalize(thsBlg_amz, thsBlg_epn);
		// 
		if (ThsBlg_pg == 'itempage') {
			insertAfterHTMLByClass('postbody', '<div style="display:table;margin:10px auto;" id="addths_rec"></div>');
			addthisN('addths_rec');
		}
	}
	//
	///// /STORE /////
	// 
});
//
// 
// ============== /ALL LAST --- WINDOW ON LOAD ===================
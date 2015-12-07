
// --- FUNCTIONS
// ---
function getParameterByName(name) {
    //Usage: var prodId = getParameterByName('prodId');
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function html_SearchForm(hiddenParams, paramName, placeholder) {
    return '' +
        '<form method="get" action="index.html" id="search_form" > ' +
        '<div class="form-group ">' +
        '<div class="row">' +
        // ' <div class="col-xs-1"> '+
        //     '<label> <span class="glyphicon glyphicon-filter"></span>   </label> '+
        // ' </div> '+
        ' <div class="col-xs-10"> ' +
        '<input id="filter" name="' + paramName + '" type="text" class="form-control" placeholder="' + placeholder + '"> ' +
        ' </div> ' +
        ' <div  > ' +
        hiddenParams +
        '<button id="searchbutton" type="submit" class="btn btn-default "><span class="glyphicon glyphicon-search"></span></button> ' +
        ' </div> ' +
        '</div>  ' +
        '</div>  ' +
        '</form>' +
        '';
}

function loadingDone() {
    $('#loading').remove();
    $('.appName_placeholder').replaceWith(appName);
    $('.appDesc_placeholder').replaceWith(appDesc);
    $('#footer').append(footerHtml);
    $('#helpbutton').replaceWith(' <a class="navbar-brand" data-target="#myModal" data-toggle="modal" href="#"><span class="glyphicon glyphicon-question-sign"></span></a> ');
}

function bsShowModal(id, title, buttonText, text  ) {
    // v2 : added buttontext
    var a = '<div id="' + id + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body"> ' + text + ' </div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">'+buttonText+'</button></div></div></div></div>';
    $('body').append(a);
    $("#" + id).modal();
    $('body').remove(a);
} 

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function uniquifyArrayIntoString(list) {
    // REQ JQUERY
    // v1 - receives an single dim array, uniques it and returns results as a string. 
    // usage : listitems = uniquifyArrayIntoString(stopRoutes);
    var string = "";
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    // return result;
    for (var i = 0; i < result.length; i++) {
        string += result[i];
    }
    return string;
}

function routeNameCleanup(id, name) {
    // THIS IS FOR MIWAY - MODIFY FOR  TRANSIT AGNECY
    var a = name.replace(/(bound|orth|outh|ast|est|ockwise)/gi, "");
    return id + ' ' + a;
}

function listItemHtml_stop(stopId, name, routeHtml) {
    return '' +
        '<a class="list-group-item" href="' +
        rUrl + '?p=stop_details&stop=' +
        stopId +
        '" id="' +
        stopId + '">' +
        iconHtml_stop + ' ' +
        toTitleCase(name) + ' ' +
        '<small><small>' + stopId + ' </small></small> ' +
        routeHtml +
        '</a> ' +
        '';
}

function listItemHtml_route(routeId, direction) {
    return '' +
        '<small> <span class="label label-default" style="display:inline-block;">' + iconHtml_route + ' ' + routeNameCleanup(routeId, direction) + '   </span> </small> ' +
        '';
}

function buttonHtml_route(routeId, direction) {
    return '' +
        ' <a class="btn btn-default" href="' +
        rUrl + '?p=route_details&route=' +
        routeId +
        '" id="" >' +
        iconHtml_route + routeNameCleanup(routeId, direction) +
        '</a> ' +
        '';
}

function loadingHtml() {
    return '' +
        '<div style="margin:0 auto;width:75px;padding:5px;background:#ddd;" id="loading"><div  style="background-image:url(loading.gif);background-repeat:no-repeat;height:64px;background-position:center"></div> </div>' +
        '';
}
// --- /FUNCTIONS

// --- /VARS
// QS
if (!getParameterByName('p') || typeof getParameterByName('p') == 'undefined') {
    thisPage = "index";
}
if (getParameterByName('p') == 'stops') {
    thisPage = "stops";
}
if (getParameterByName('p') == 'stop_details') {
    thisPage = "stop_details";
}
if (getParameterByName('p') == 'route_details') {
    thisPage = "route_details";
}
if (!getParameterByName('sf') || typeof getParameterByName('sf') == 'undefined') {
    stop_filter = "";
    stop_filtered = "no";
} else {
    stop_filter = getParameterByName('sf');
    stop_filtered = "yes";
}
if (!getParameterByName('rf') || typeof getParameterByName('rf') == 'undefined') {
    route_filter = "";
    route_filtered = "no";
} else {
    route_filter = getParameterByName('rf');
    route_filtered = "yes";
}
// /QS
var iconHtml_stop = ' <small><span class="glyphicon glyphicon-map-marker"></span></small> ';
var iconHtml_route = ' <img src="icon_bus_grey.png" style="height:1em;display:inline-block;" />  ';
// var iconHtml_stop = ' &#128655; '; // does not show in webview... until then use above.
// var iconHtml_route = ' &#128653; ';
// for android/prod
var appName = 'NearbyStops';
var orgName = 'Sitesworld.com';
var orgDomain = 'apps.sitesworld.com';
var appDesc = ' <p>Get nearby stops and routes for any Mississauga bus stop.</p> <p><small>Thanks for using. More apps at <a href=\"http://' + orgDomain + '\">' + orgDomain + '</a> </small></p>';
var footerHtml =
    ' <div style="height:50px;"></div> ' +
    ' <p class="text-center" style="line-height:1em">  <small> &copy; ' +
    ' <a href="http://' + orgDomain + '">' + orgName + '</a> All Rights Reserved.    </small>  </p>      ' +
    ' <div style="height:100px;"></div>';
var rUrl = "index.html";
// --- KEEP ---
// for localhost/dev
//var rUrl = "/www/"
// --- /VARS


$('.container').append( loadingHtml() );


// // --- JQUERY FORCE AJAX CACHE -- 
// // http://stackoverflow.com/a/17104536
// // ** IMP: cache: true, MUST IN @.ajax param!!
// var localCache = {
//     /**
//      * timeout for cache in millis
//      * @type {number}
//      */
//     timeout: 86400000, // 24 hours in milli
//     /** 
//      * @type {{_: number, data: {}}}
//      **/
//     data: {},
//     remove: function(url) {
//         delete localCache.data[url];
//     },
//     exist: function(url) {
//         return !!localCache.data[url] && ((new Date().getTime() - localCache.data[url]._) < localCache.timeout);
//     },
//     get: function(url) {
//         console.log('Getting in cache for url' + url);
//         return localCache.data[url].data;
//     },
//     set: function(url, cachedData, callback) {
//         localCache.remove(url);
//         localCache.data[url] = {
//             _: new Date().getTime(),
//             data: cachedData
//         };
//         if ($.isFunction(callback)) callback(cachedData);
//     }
// };
// $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
//     if (options.cache) {
//         var complete = originalOptions.complete || $.noop,
//             url = originalOptions.url;
//         //remove jQuery cache as we have our own localCache
//         options.cache = false;
//         options.beforeSend = function() {
//             if (localCache.exist(url)) {
//                 complete(localCache.get(url));
//                 return false;
//             }
//             return true;
//         };
//         options.complete = function(data, textStatus) {
//             localCache.set(url, data, complete);
//         };
//     }
// });
// // --- JQUERY FORCE AJAX CACHE -- 




// ---
// --- INDEX
// ---
if (thisPage == "index") {
    $("#search_form_placeholder").before(
        ' <h1> <img src="app_icon.png" style="height:1em;display:inline-block;" /> ' + appName + ' </h1>' +
        ' <h2> Get nearby stops and routes for any Mississauga transit stop.   </h2> ' +
        '');
    $("#search_form_placeholder").after(
        '<div style="text-align:center"> or </div> ' +
        '  <a  ' +
        ' onclick="bsShowModal(\'modal_allstopswarn\',\'List all Stops?\',\'Cancel\',\' <p> Heads up: Showing *ALL* stops will take some time... continue? <a class=btn btn-primary btn-lg btn-block role=button href=?p=stops > Yes, Show all Stops </a> </p>    \');"  ' +
        'style="cursor:pointer;display:block;text-align:center;text-decoration:underline;"  >  ' + iconHtml_stop + ' See All Stops </a>  ' +
        // '   <h3 class="text-center"> GET A STOP </h3>  ' +
        '');
    $('#search_form_placeholder').replaceWith(html_SearchForm(
        '<input name="p" type="hidden" value="stops"> ' +
        '', 'sf', "Street name, Stop #, Station etc"));
    loadingDone();
}

// ---
// --- STOPS
// ---
if (thisPage == "stops") {
    $.ajax({
        method: "GET",
        dataType: "json", // THIS IS MUST for Anndroid! skipping it works in FF or PC, *NOT* android!
        cache: true,
        ifModified: true, // only fetch if modified else use cache ver, 'guarantees' caching
        url: "1.json"
    }).done(function(mpFile) {
         
        // json_data = mp2json(mpFile);
        json_data = mpFile;
        
        //// bootstrap
        var stop_filteredText = (stop_filtered == "yes") ? ' <small> ' + stop_filter + ' </small>' : " <small> All </small> ";
        $(".container").append(
            '<h1>   ' + iconHtml_stop + ' Bus Stops ' + stop_filteredText + '</h1><div class="list-group">' +
            '</div>' +
            '');
        //// bootstrap
        var totalItems = Object.keys(json_data).length; // total items, needed below!
        // delete json_file[key];
        var listitem_a = "";
        $('#search_form_placeholder').replaceWith(html_SearchForm(
            '<input name="p" type="hidden" value="stops"> ' +
            '', 'sf', "Stop #, Street etc"));
        // stop_filtered
        if (stop_filtered == "yes") {
            $('#filter').val(stop_filter);
            var filter = stop_filter;
            $.each(json_data, function(i, value) {
                // !KEEP for 1_array, use value.name 
                if (value['name']) { // to skip last json empty json result
                    var stopTextToSearch = value['name'] + '' + value['stop'];
                    if (stopTextToSearch.search(new RegExp(filter, "i")) >= 0) {
                        listitem_a += listItemHtml_stop(value['stop'], value['name'], "");
                    }
                }
            });
        } else {
            $.each(json_data, function(i, value) {
                // !KEEP for 1_array, use value.name 
                if (value['name']) { // to skip last json empty json result
                    listitem_a += listItemHtml_stop(value['stop'], value['name'], "");
                }
            });
        }
        $(".container .list-group").append(listitem_a);
        // $('#loading').remove();
        loadingDone();
    });
}

// ---
// --- stop_details
// ---
if (thisPage == "stop_details") {
    $.ajax({
        method: "GET",
        dataType: "json", // THIS IS MUST for Anndroid! skipping it works in FF or PC, *NOT* android!
        cache: true,
        ifModified: true, // only fetch if modified else use cache ver, 'guarantees' caching
        url: "1.json"
    }).done(function(mpFile) {
        // json_data = mp2json(mpFile);
        json_data = mpFile;
        // bootstrap
        $(".container").append(
            '<div class="list-group">' +
            '</div>' +
            '');
        var listitem_a = "";
        var thisStopNumber = getParameterByName('stop');
        var thisStop = json_data[thisStopNumber];
        $(".container").prepend(
            '<h1> <span style="font-size:120%">' + iconHtml_stop + '</span>' + thisStop['name'] + ' <small><small> ' + thisStopNumber + ' </small></small> </h1>' +
            '' +
            '');
        var listitem_a = '  <h3>  Nearby ' + iconHtml_stop + 'Stops</h3>';
        $.each(thisStop.nearby, function(i, value) {
            // alert ( JSON.stringify( json_data[value['stop']].routes ) )
            var stopRoutes = [];
            if (typeof json_data[value['stop']] !== "undefined") {
                $.each(json_data[value['stop']].routes, function(i2, value_b) {
                    // prevent dupes 
                    stopRoutes.push(listItemHtml_route(value_b.route_id, value_b.trip_headsign));
                });
                // remove dupes (why are they in json??)
                var listitem_a_1 = uniquifyArrayIntoString(stopRoutes);
            }
            if (value['stop'] == thisStopNumber) {
                // don't take the master stop
            } else {
                listitem_a += listItemHtml_stop(value['stop'], value['name'], listitem_a_1);
            }
        });
        $(".container .list-group").append(listitem_a);
        var listitem_b = '<h3>Stop Routes</h3>';
        var stopRoutes = [];
        $.each(thisStop.routes, function(i, value) {
            stopRoutes.push(buttonHtml_route(value.route_id, value.trip_headsign));
        });
        // remove i
        $("h1").after(uniquifyArrayIntoString(stopRoutes));
        // $('#loading').remove();
        loadingDone();
    });
}

// ---
// --- route_details
// ---
if (thisPage == "route_details") {
    $.ajax({
        method: "GET",
        dataType: "json", // THIS IS MUST for Anndroid! skipping it works in FF or PC, *NOT* android!
        cache: true,
        ifModified: true, // only fetch if modified else use cache ver, 'guarantees' caching
        url: "2.json"
    }).done(function(mpFile) {
        // json_data = mp2json(mpFile);
        json_data = mpFile;
        // bootstrap
        $(".container").append(
            '<div class="list-group">' +
            '</div>' +
            '');
        var listitem_a = "";
        var thisRouteNumber = getParameterByName('route');
        var thisRoute = json_data[thisRouteNumber];
        $('#search_form_placeholder').replaceWith(html_SearchForm(
            '<input name="p" type="hidden" value="' + thisPage + '"> ' +
            '<input name="route" type="hidden" value="' + thisRouteNumber + '"> ' +
            '', 'rf', " St, Rd, Intxn etc"));
        $(".container").prepend(
            '<h1> ' + iconHtml_route + thisRoute['short'] + ' ' + thisRoute['long'] + ' </h1>' +
            '' +
            '');
        $(".container").append('<div id="routes_row" class="row"></div>');
        // two columns, dir 0, dir 1
        for (dir_i = 1; dir_i > -1; dir_i--) {
            $("#routes_row").append(
                '<div id="routes_' + dir_i + '" class="col-xs-6">  </div>'
            );
            var listitem_a = "";
            var listitem_a = '<h3> ' + thisRoute[dir_i]['dir'] + ' stops </h3>';
            // route_filtered
            if (route_filtered == "yes") {
                $('#filter').val(route_filter);
                var filter = route_filter;
                $.each(thisRoute[dir_i]['stops'], function(i, value) {
                    var routeTextToSearch = value['n'];
                    if (routeTextToSearch.search(new RegExp(filter, "i")) >= 0) {
                        listitem_a += listItemHtml_stop(value['i'], value['n'], "");
                    }
                });
            } else {
                $.each(thisRoute[dir_i]['stops'], function(i, value) {
                    if (value['n'].match(/.{3,}/)) { // only those which are not empty (and not the last empty one)
                        listitem_a += listItemHtml_stop(value['i'], value['n'], "");
                    }
                });
            }
            $('#routes_' + dir_i).append(listitem_a);
        }
        $('#search_form_placeholder').replaceWith(html_SearchForm(
            '<input name="p" type="hidden" value="' + thisPage + '"> ' +
            '<input name="route" type="hidden" value="' + thisRouteNumber + '"> ' +
            '', 'rf', "Stop #, Street etc"));
        // $('#loading').remove();
        loadingDone();
    });
}

 
// LAST ONES
$(function() {
    // FOR NOT ON APP, BUT WEBSITE
    // if (window.location.href.match(/localhost/)) {
    if (window.location.href.match(/nearbystops\.sitesworld\.com/)) {
        $('.container').before(
            '<table style="width:90%;margin:0 auto"><tr>' +
            '<td> <a style="" href="https://play.google.com/store/apps/details?id=com.sitesworld.nearbystops" target="_top"><img style="height:50px" src="icon_googleplay.png" /></a> </td>' +
            '<td>   </td>' +
            '</tr></table>' +
            '');
        // --- GOOGLE ANALYTICS
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', sw_ga_cd, 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
        // --- /GOOGLE ANALYTICS
    }
});



 










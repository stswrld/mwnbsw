
// --- FUNCTIONS
// ---
function getParameterByName(name) {
    //Usage: var prodId = getParameterByName('prodId');
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function html_SearchForm(hiddenParams,paramName,placeholder) {
    return  ''+
        '<form method="get" action="index.html" id="search_form" > '+
        '<div class="form-group ">'+
            '<div class="row">'+

                // ' <div class="col-xs-1"> '+
                //     '<label> <span class="glyphicon glyphicon-filter"></span>   </label> '+
                // ' </div> '+

                ' <div class="col-xs-10"> '+
                    '<input id="filter" name="'+paramName+'" type="text" class="form-control" placeholder="'+placeholder+'"> ' +
                ' </div> '+

                ' <div  > '+
                    hiddenParams + 
                    '<button id="searchbutton" type="submit" class="btn btn-default "><span class="glyphicon glyphicon-search"></span></button> '+
                ' </div> '+

            '</div>  '+
        '</div>  '+
        '</form>' +
        '';
}

function loadingDone(){
     $('#loading').remove();
             $('.appName_placeholder').replaceWith( appName );
        $('.appDesc_placeholder').replaceWith( appDesc );
        $('#footer').append(
            ' <div style="height:50px;"></div> '+
            ' <p class="text-center" style="line-height:1em"><small> &copy; '+ appName +' All Rights Reserved.    </small>  </p>      '+
            ' <div style="height:100px;"></div>');
        $('#helpbutton').replaceWith(' <a class="navbar-brand" data-target="#myModal" data-toggle="modal" href="#"><span class="glyphicon glyphicon-question-sign"></span></a> ');

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
var iconHtml_route = ' <small><span class="glyphicon glyphicon-bed"></span> </small>  ';
// var iconHtml_stop = ' &#128655; '; // does not show in webview... until then use above.
// var iconHtml_route = ' &#128653; ';

// for android/prod
var appName = 'NearbyStops';
var appDesc = ' Get nearby stops and routes for any Mississauga bus stop ';
var rUrl = "index.html";
    // --- KEEP ---
    // for localhost/dev
    //var rUrl = "/www/"
// --- /VARS


$('.container').append('<div id="loading" style="background-image:url(loading.gif);background-repeat:no-repeat;height:64px;background-position:center"></div>');


// ---
// --- INDEX
// ---
if (thisPage == "index") {
    $("#search_form_placeholder").before(
        ' <h1> <img src="nearbystops.png" style="height:1em;display:inline-block;" /> '+appName+' </h1>' +
        ' <h2>  '+ appDesc +' </h2> ' + 
 
        ' <a href="'+ rUrl +'?p=stops" class="btn btn-primary btn-lg btn-block " role="button"> '+ iconHtml_stop+' All Stops </a>  ' +
        '   <h3 class="text-center"> or find one </h3>  ' +
        '');

    $('#search_form_placeholder').replaceWith(html_SearchForm(
    '<input name="p" type="hidden" value="stops"> ' + 
    '','sf',"Stop #, Street etc"));

    // $('#loading').remove();
    loadingDone();
}

// ---
// --- STOPS
// ---

if (thisPage == "stops") {
    $.getJSON("1.json", function(json_file) {
        // bootstrap
        var stop_filteredText = (stop_filtered == "yes") ? ' <small> ' + stop_filter + ' </small>' : " <small> All </small> ";
        $(".container").append(
            '<h1>   '+iconHtml_stop+' Bus Stops ' + stop_filteredText + '</h1><div class="list-group">' +
            '</div>' +
            '');
        // json_file['0001']['name']
        json_data = json_file;
        var totalItems = Object.keys(json_data).length; // total items, needed below!
        // delete json_file[key];
        var listitem_a = "";
         $('#search_form_placeholder').replaceWith(html_SearchForm(
    '<input name="p" type="hidden" value="stops"> ' + 
    '','sf',"Stop #, Street etc"));

        // stop_filtered
        
        if (stop_filtered == "yes") {
            $('#filter').val(stop_filter);
            var filter = stop_filter;
            $.each(json_data, function(i, value) {
                // !KEEP for 1_array, use value.name 
                if (i < totalItems) { // to skip last json empty json result
                    var stopTextToSearch = value['name'] + '' + value['stop'];
                    if (stopTextToSearch.search(new RegExp(filter, "i")) >= 0) {
                        listitem_a += '<a class="list-group-item" href="' + rUrl + '?p=stop_details&stop=' + value['stop'] + '" id="' + value['stop'] + '"> ' +
                            iconHtml_stop +
                            value['name'] + ' <small><small>' + value['stop'] + '</small></small> ' +
                            '</a> ';
                    }
                }
            });
        } else {
            $.each(json_data, function(i, value) {
                // !KEEP for 1_array, use value.name 
                if (i < totalItems) { // to skip last json empty json result
                    listitem_a += '<a class="list-group-item" href="' + rUrl + '?p=stop_details&stop=' + value['stop'] + '" id="' + value['stop'] + '"> ' +
                        iconHtml_stop +
                        value['name'] + ' <small><small>' + value['stop'] + '</small></small> ' +
                        '</a> ';
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
     
    $.getJSON("1.json", function(json_file) {
        // bootstrap
        $(".container").append(
            '<div class="list-group">' +
            '</div>' +
            '');
        json_data = json_file;
        var listitem_a = "";
        var thisStopNumber = getParameterByName('stop');
        var thisStop = json_data[thisStopNumber];
        $(".container").prepend(
            '<h1> <span style="font-size:120%">' + iconHtml_stop + '</span>' + thisStop['name'] + ' <small><small> ' + thisStopNumber + ' </small></small> </h1>' +
            '' +
            '');
        var listitem_a = '  <h3>  Nearby ' + iconHtml_stop + 'Stops</h3>';
        $.each(thisStop.nearby, function(i, value) {
            var listitem_a_1 = '';
            // alert ( JSON.stringify( json_data[value['stop']].routes ) )
            if (typeof json_data[value['stop']] !== "undefined") {
                $.each(json_data[value['stop']].routes, function(i2, value_b) {
                    listitem_a_1 += '<small> <span class="label label-default" style="display:inline-block;">' + iconHtml_route + ' ' + value_b.route_id + ' ' + value_b.trip_headsign.replace(/(bound|orth|outh|ast|est|ockwise)/gi, "") + '   </span> </small> ';
                });
            }
            if (value['stop'] == thisStopNumber) {
                // don't take the master stop
            } else {
                listitem_a += '<a class="list-group-item" href="' +
                    rUrl + '?p=stop_details&stop=' +
                    value['stop'] +
                    '" id="' +
                    value['stop'] + '">' +
                    iconHtml_stop + ' ' +
                    value['name'] + ' ' +
                    '<small><small>' + value['stop'] + ' </small></small> ' +
                    listitem_a_1 +
                    '</a> ';
            }
        });
        $(".container .list-group").append(listitem_a);
        var listitem_b = '<h3>Stop Routes</h3>';
        $.each(thisStop.routes, function(i, value) {
            listitem_b += ' <a class="btn btn-default" href="' +
                rUrl + '?p=route_details&route=' +
                value.route_id +
                '" id="' + i + '" >' +
                iconHtml_route +
                ' ' + value.route_id + ' ' + value.trip_headsign.replace(/(bound|orth|outh|ast|est)/gi, "") + ' ' +
                '</a> ';
        });
        $("h1").after(listitem_b);
        // $('#loading').remove();
        loadingDone();
    });
}


// ---
// --- route_details
// ---
if (thisPage == "route_details") {
    // TODO remove last empty one in the list
    $.getJSON("2.json", function(json_file) {
        // bootstrap
        $(".container").append(
            '<div class="list-group">' +
            '</div>' +
            '');
        json_data = json_file;
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
                        listitem_a += '<a class="list-group-item " href="' + rUrl + '?p=stop_details&stop=' + value['i'] + '" id="dir_' + dir_i + '_' + value['i'] + '"> ' +
                            iconHtml_stop +
                            value['n'] + ' ' +
                            '</a> ';
                    }
                });
            } else {
                $.each(thisRoute[dir_i]['stops'], function(i, value) {
                    if (value['n'].match(/.{3,}/)) { // only those which are not empty (and not the last empty one)
                        listitem_a += '<a class="list-group-item " href="' + rUrl + '?p=stop_details&stop=' + value['i'] + '" id="dir_' + dir_i + '_' + value['i'] + '"> ' +
                            iconHtml_stop +
                            value['n'] + ' ' +
                            '</a> ';
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
            '<td> <a style="" href="https://play.google.com/store/apps/details?id=com.sitesworld.nearbystops" target="_top"><img style="height:50px" src="android_app.png" /></a> </td>' +
            '<td>   </td>' +
            '</tr></table>' +
            '');
        // --- GOOGLE ANALYTICS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', sw_ga_cd , 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
        // --- /GOOGLE ANALYTICS
    }
});



 










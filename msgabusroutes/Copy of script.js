
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

function loadingDone() {
    $('#loading').remove();
    $('.appName_placeholder').replaceWith(appName);
    $('.appDesc_placeholder').replaceWith(appDesc);
    $('.iconHtml_route_placeholder').replaceWith(iconHtml_route);
    $('#footer').append(
        ' <div style="height:50px;"></div> ' +
        ' <p class="text-center" style="line-height:1em">  <small> &copy; ' + appName + ' All Rights Reserved.    </small>  </p>      ' +
        ' <div style="height:100px;"></div>');
    $('#helpbutton').replaceWith(' <a class="navbar-brand" data-target="#myModal" data-toggle="modal" href="#"><span class="glyphicon glyphicon-question-sign"></span></a> ');
}

function bsShowModal(id, title, text) {
    var a = '<div id="' + id + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body"><p>' + text + '</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">OK</button></div></div></div></div>';
    $('body').append(a);
    $("#" + id).modal();
    $('body').remove(a);
}

// --- /FUNCTIONS

// --- /VARS
// QS
if (!getParameterByName('p') || typeof getParameterByName('p') == 'undefined') {
    thisPage = "index";
}
if (getParameterByName('p') == 'allroutes') {
    thisPage = "allroutes";
}
if (getParameterByName('p') == 'stop_details') {
    thisPage = "stop_details";
}
if (getParameterByName('p') == 'route_details') {
    thisPage = "route_details";
}
if (!getParameterByName('sf') || typeof getParameterByName('sf') == 'undefined') {
    allroutes_filter = "";
    allroutes_filtered = "no";
} else {
    allroutes_filter = getParameterByName('sf');
    allroutes_filtered = "yes";
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
// var iconHtml_route = ' <small><span class="glyphicon glyphicon-bed"></span> </small>  ';
// var iconHtml_stop = ' &#128655; '; // does not show in webview... until then use above.
// var iconHtml_route = ' &#128653; ';

// for android/prod
var appName = 'MississaugaBusRoutes';
var appDesc = ' Get all Mississauga bus routes and the stops they make. ';
var rUrl = "index.html";
    // --- KEEP ---
    // for localhost/dev
    //var rUrl = "/www/"
// --- /VARS


$('.container').append('<div id="loading" style="background-image:url(loading.gif);background-repeat:no-repeat;height:64px;background-position:center"></div>');


// ---
// --- INDEX
// ---
// if (thisPage == "index") {
//     $("#search_form_placeholder").before(
//         ' <h1> <img src="msgabusroutes.png" style="height:1em;display:inline-block;" /> '+appName+' </h1>' +
//         ' <h2>  '+ appDesc +' </h2> ' + 
 
//         ' <a href="'+ rUrl +'?p=allroutes" class="btn btn-primary btn-lg btn-block " role="button"> '+ iconHtml_stop+' All allroutes </a>  ' +
//         '   <h3 class="text-center"> or find one </h3>  ' +
//         '');

//     $('#search_form_placeholder').replaceWith(html_SearchForm(
//     '<input name="p" type="hidden" value="allroutes"> ' + 
//     '','sf',"Stop #, Street etc"));

//     // $('#loading').remove();
//     loadingDone();
// }

// ---
// --- allroutes
// ---

if (thisPage == "index") {
    $.getJSON("2.json", function(json_file) {
        // bootstrap
        var allroutes_filteredText = (allroutes_filtered == "yes") ? ' <small> ' + allroutes_filter + ' </small>' : " <small> All </small> ";
        $(".container").append(
            '<h1>   '+iconHtml_stop+' Bus Routes ' + allroutes_filteredText + '</h1><div class="list-group">' +
            '</div>' +
            '');
        // json_file['0001']['name']
        json_data = json_file;

        // delete json_file[key];
        var listitem_a = "";
         $('#search_form_placeholder').replaceWith(html_SearchForm(
    // '<input name="p" type="hidden" value="allroutes"> ' + 
    '','sf',"Street or Route #"));

        // allroutes_filtered
        
        if (allroutes_filtered == "yes") {
            $('#filter').val(allroutes_filter);
            var filter = allroutes_filter;
            $.each(json_data, function(i, value) {
                var allroutesTextToSearch = value['short'] + '' + value['long'];
                if (allroutesTextToSearch.search(new RegExp(filter, "i")) >= 0) {
                    listitem_a += '<a class="list-group-item" ' +
                        ' href="' + rUrl + '?p=route_details&route=' + value['short'] + '" ' +
                        'id="' + value['id'] + '" ' +
                        '> ' +
                        iconHtml_route + ' ' + value['short'] + ' ' + value['long'] + '</a> ';
                }
            });
        } else {
            $.each(json_data, function(i, value) {
                // listitem_a +=  value['long'] ;
                listitem_a += '<a class="list-group-item" ' +
                    ' href="' + rUrl + '?p=route_details&route=' + value['short'] + '" ' +
                    'id="' + value['id'] + '" ' +
                    '> ' +
                    iconHtml_route + ' ' + value['short'] + ' ' + value['long'] + '</a> ';
            });
        }
        $(".container .list-group").append(listitem_a);
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
            var listitem_a = '<h4> ' + thisRoute[dir_i]['dir'] + '  </h4>';
            // route_filtered
            var a_onclick = ' onclick="bsShowModal(\'modal_stopdetail\',\'Stop Details\',\' For full stop details, their routes, their closest nearby stops, and more, just install our other absolutely FREE app called <b>Nearby Stops Mississauga</b>. Look for it now on Google Play!   \');"  ' ;
                      

            if (route_filtered == "yes") {
                $('#filter').val(route_filter);
                var filter = route_filter;
                $.each(thisRoute[dir_i]['stops'], function(i, value) {
                    var routeTextToSearch = value['n'];
                    if (routeTextToSearch.search(new RegExp(filter, "i")) >= 0) {
                        listitem_a += '<a '+ a_onclick +' class="list-group-item " href="#" id="dir_' + dir_i + '_' + value['i'] + '"> ' +
                            iconHtml_stop +
                            value['n'] + ' ' +
                            '</a> ';
                    }
                });
            } else {
                // TODO: undefined erros.
                $.each(thisRoute[dir_i]['stops'], function(i, value) {
                    if (value['n'].match(/.{3,}/)) { // only those which are not empty (and not the last empty one)
                        listitem_a += '<a  '+ a_onclick +' class="list-group-item " href="#" id="dir_' + dir_i + '_' + value['i'] + '"> ' +
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


// TODO : COUNTERCLOCKWISE , undefined lasts
 
// LAST ONES
$(function() {
    // FOR NOT ON APP, BUT WEBSITE
    // if (window.location.href.match(/localhost/)) {
    if (window.location.href.match(/\.sitesworld\.com/)) {
        $('.container').before(
            '<table style="width:90%;margin:0 auto"><tr>' +
            '<td> <a style="" href="https://play.google.com/store/apps/details?id=com.sitesworld.msgabusroutes" target="_top"><img style="height:50px" src="android_app.png" /></a> </td>' +
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



 










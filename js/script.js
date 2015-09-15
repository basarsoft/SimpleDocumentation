var documentHistory;

function setStyles() {
    $("table").addClass("table");
}

function fillVersionSelect() {
    var versionSelector = $("#version-selector");
    var versions = Object.keys(documentHistory);

    var cookieControl = getCookie('LangCookie');
    var cookie;

    if (cookieControl != undefined) {
        cookie = JSON.parse(cookieControl);
    }

    for (var i = 0; i < versions.length; i++) {
        if (cookieControl != undefined) {

            var selected = "";

            if (cookie.version == versions[i]) {
                selected = "selected";
            }

            versionSelector.append('<option value=' + versions[i] + ' ' + selected + '>' + versions[i] + '</option>');
        }
        else {
            versionSelector.append('<option value=' + versions[i] + '>' + versions[i] + '</option>');
        }
    }
}

function fillLangSelect() {
    // Mutlaka birisi seçili olmalı.
    var selectedVersion = $("#version-selector").val();
    var Langs = documentHistory[selectedVersion];
    var getLangs = Object.keys(Langs);
    var langSelector = $("#language-selector");
    langSelector.empty();

    var cookieControl = getCookie('LangCookie');
    var cookie;

    if (cookieControl != undefined) {
        cookie = JSON.parse(cookieControl);
    }

    for (var i = 0; i < getLangs.length; i++) {
        if (cookieControl != undefined) {

            var selected = "";

            if (cookie.path == Langs[getLangs[i]]) {
                selected = "selected";
            }

            langSelector.append('<option value=' + Langs[getLangs[i]] + ' ' + selected + '>' + getLangs[i] + '</option>');
        }
        else {
            langSelector.append('<option value=' + Langs[getLangs[i]] + '>' + getLangs[i] + '</option>');
        }
    }
}

function loadPage() {
    var controlCookie = Cookies.get('LangCookie');
    var cookie;
    var path;

    if (controlCookie != undefined) {
        cookie = JSON.parse(controlCookie);
        path = 'docs/' + cookie.path + '/';
    }
    else {
        path = 'docs/' + $("#language-selector").val() + '/';
    }

    $.get(path + 'index.md', function (data) {
        $('.content').html(marked(data));
        setStyles();
    });

    $.get(path + 'toc.md', function (data) {
        $('#menu-wrapper').html(marked(data));
        // Sol menü aktif ediliyor..
        $('#menu-wrapper').ntm();

        $("#menu-wrapper a").on("click", function () {
            var url = $(this).attr("href").replace('#', '')

            if (url == "") {
              } else {
                  $('.content').html('').addClass('loading');

                  $.get(path + url + '.md', function (data) {
                      $('.content').removeClass('loading').html(marked(data));
                      setStyles();
                  });
            }
        });
    });
}

function setCookie() {
    var Obj = {
        version: $("#version-selector").val(),
        lang: $("#language-selector option:selected").text(),
        path: $("#language-selector").val()
    }

    Cookies.set('LangCookie', Obj);
}

function getCookie(CookieName) {
    return Cookies.get(CookieName);
}

$(document).ready(function () {
    var getWidth = $(window).width();

    if (getWidth < 768) {
        $("#menu-toggle").toggleClass('trigger-toggled');
        $("#menu-toggle").find('i').addClass('fa-chevron-right');
    }

    $("#menu-toggle").click(function (e) {

        e.preventDefault();

        $(this).toggleClass('trigger-toggled');

        $(this).find('i').toggleClass('fa-chevron-right');

        $("#wrapper").toggleClass("toggled");
    });

    $.getJSON('docs.json', function (data) {
        documentHistory = data;
        fillVersionSelect();
        fillLangSelect();
        loadPage();
    });

    $("#version-selector").on("change", function () {
        fillLangSelect();
        setCookie();
        location.reload();
    });

    $("#language-selector").on("change", function () {
        setCookie();
        location.reload();
    });

});

$(window).resize(function () {
    var getWidth = $(window).width();

    if (getWidth < 768) {
        $("#menu-toggle").toggleClass('trigger-toggled');
        $("#menu-toggle").find('i').addClass('fa-chevron-right');
    }
    else {
        $("#menu-toggle").find('i').removeClass('fa-chevron-right');
    }

});

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

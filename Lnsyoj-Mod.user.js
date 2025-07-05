// ==UserScript==
// @name         Lnsyoj Mod
// @namespace    https://hshidianlu.site/article/100000013
// @version      1.0
// @description  Lnsyzx Online Judge appearance modification.
// @author       HShiDianLu
// @match        lnsyoj.com.cn/*
// @icon         https://hydro.ac/favicon-32x32.png
// @grant        GM_addStyle
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var cssStyle = ".section{border-radius:10px !important}.section,#menu,.footer{background:rgba(0,0,0,0.5) !important;backdrop-filter:blur(10px);transition:0.7s ease all !important}.section:hover,#menu:hover,.footer:hover{background:rgba(0,0,0,0.7) !important;backdrop-filter:blur(0px)}.section *,#menu *,.footer *{}img{border-radius:5px !important}pre{background:rgba(0,0,0,0.2) !important;border-radius:5px !important}pre:hover{background:rgba(0,0,0,0.1) !important}#panel{background-color:rgba(255,255,255,0) !important}body{background:url(https://img.loliapi.com/i/pe/img1606.webp) !important;background-size:cover !important;background-repeat:no-repeat !important;background-position:center 0px !important}*{transition:0.3s ease all}.hide-problem-tag td span{padding:3px;padding-left:5px;padding-right:5px}.data-table tr:nth-child(2n){background:rgba(0,0,0,0.3) !important}a:not(.nav__item,.menu__link){text-decoration:none !important;border-bottom:1px solid transparent;color:rgba(255,255,255,0.8) !important}a:not(.nav__item,.menu__link):hover{border-bottom:1px solid white;color:rgba(255,255,255,1) !important}*{overflow:hidden}.dropdown-target{background:rgba(0,0,0,0.7) !important;backdrop-filter:blur(10px);border-bottom-left-radius:5px;border-bottom-right-radius:5px}";

    GM_addStyle(cssStyle);

    $('*').filter(function () {
        var color = $(this).css('color');
        var r, g, b;
        if (color.match(/^rgb(a?)\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)$/)) {
            r = parseInt(RegExp.$2);
            g = parseInt(RegExp.$3);
            b = parseInt(RegExp.$4);
            return r === g && g === b;
        }
        if (color.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) {
            var hex = color.substring(1);
            if (hex.length === 3) {
                hex = hex.split('').map(function (c) {
                    return c + c;
                }).join('')
            }
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
            return r === g && g === b;
        }
        var kw = ['gray', 'grey', 'darkgray', 'darkgrey', 'dimgray', 'dimgrey', 'lightgray', 'lightgrey', 'silver'];
        return kw.includes(color.toLowerCase())
    }).css("color", "white");
})();
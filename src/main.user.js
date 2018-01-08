// ==UserScript==
// @name         No Scroll for Tampermonkey
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  No Scroll
// @author       You
// @match        https://mail.google.com/mail/u/0/*
// @require      file:///C:/Users/Win_7/Desktop/no_focus/crx_1.1_monkey/jquery-1.10.2.min.js
// @require      file:///C:/Users/Win_7/Desktop/no_focus/crx_1.1_monkey/gmail.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var gmail;

    function refresh(f) {
        if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
            setTimeout(refresh, 10, f);
        } else {
            f();
        }
    }

    function noScroll(event){
        var div = document.getElementById(':4');
        div.scrollTo(0,180);
        div.removeEventListener('scroll', noScroll);
    }

    var main = function(){
        // NOTE: Always use the latest version of gmail.js from
        // https://github.com/KartikTalwar/gmail.js
        gmail = new Gmail();
        gmail.observe.on('open_email', function(){
            var div = document.getElementById(':4');
            div.addEventListener('scroll', noScroll);
        });
    };

    refresh(main);

})();

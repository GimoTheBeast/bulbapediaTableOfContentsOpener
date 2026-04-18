// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-04-15
// @description  try to take over the world!
// @author       You
// @match        https://bulbapedia.bulbagarden.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bulbagarden.net
// @grant        none
// ==/UserScript==

(function() {
    let ele = document.querySelector('#bvTOC a[href="#Game_data"] ~ ul')
    ele.setAttribute('aria-expanded', 'true')
    ele.setAttribute('aria-hidden', 'false')
    let button = document.querySelector('#bvTOC a[href="#Game_data"] ~ button')
    button.setAttribute('aria-expanded', 'true')
})();

// ==UserScript==
// @name         Bulbapedia ToC Omni-Opener
// @namespace    http://tampermonkey.net/
// @version      2026-04-18
// @description  try to take over the world!
// @author       You
// @match        https://bulbapedia.bulbagarden.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bulbagarden.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let elements = document.querySelectorAll('#bvTOC ul')
    console.log(elements)
    elements.forEach((ele) => {
        ele.setAttribute('aria-expanded', 'true')
        ele.setAttribute('aria-hidden', 'false')
    });
    // Your code here...
})();

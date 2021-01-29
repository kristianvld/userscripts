// ==UserScript==
// @name         Fix Zoom Footer
// @namespace    https://github.com/kristianvld
// @version      1.0
// @description  Fix the footer of zoom video calls in browser to not go above video
// @author       kristianvld
// @match        https://ntnu.zoom.us/wc/*/join*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        document.querySelector('footer').style.opacity = 0.7;
    }, 10*1000);

})();

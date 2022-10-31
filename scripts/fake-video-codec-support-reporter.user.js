// ==UserScript==
// @name         Fake Video Codec Support Report
// @namespace    https://github.com/kristianvld
// @version      1.0
// @description  Fake report support for different video codecs for the HTMLVideoElement.prototype.canPlayType function. On some hardware this might improve performance if some codecs are hardware decoded.
// @author       kristianvld
// @match        https://lab.html5test.com/codecs/
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?domain=html5test.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function fake(orig) {
        return function fake(name) {
            if (name.includes('vp9')) {
                return '';
            }
            return orig.apply(this, [name]);
        }
    }
    HTMLVideoElement.prototype.canPlayType = fake(HTMLVideoElement.prototype.canPlayType);
    window.MediaSource.isTypeSupported = fake(window.MediaSource.isTypeSupported);
})();
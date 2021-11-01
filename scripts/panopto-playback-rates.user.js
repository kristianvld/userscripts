// ==UserScript==
// @name         Panopto Playback Rates
// @namespace    https://github.com/kristianvld
// @version      1.2
// @description  Add shortcuts for more fine controlled playback rates
// @author       kristianvld
// @match        https://*.panopto.eu/Panopto/Pages/Viewer.aspx*
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener("keydown", (e) => {
        const video = document.querySelector("video");
        const feedback = document.querySelector("#playSpeedMultiplier");

        if (e.key == "+") {
            video.playbackRate += 0.1;
        } else if (e.key == "-") {
            video.playbackRate -= 0.1;
        } else if (e.key == "0") {
            video.playbackRate = 1;
        } else if (e.key == "f") {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                const doubleClickEvent = document.createEvent('MouseEvents');
                doubleClickEvent.initEvent('dblclick', true, true);
                document.querySelector('.secondaryPlayer').dispatchEvent(doubleClickEvent); // inside method
            }
        } else {
            return;
        }
        video.playbackRate = video.playbackRate.toFixed(2);
        document.querySelectorAll('video').forEach(v => (v.playbackRate = video.playbackRate));
        feedback.textContent = video.playbackRate + "x";
    });
})();

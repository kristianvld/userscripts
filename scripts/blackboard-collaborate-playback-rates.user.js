// ==UserScript==
// @name         BB Collab PB Rate
// @namespace    https://github.com/kristianvld
// @version      1.0
// @description  Edit video playback speed on blackboard collaborate playback with keyboard shortcuts.
// @author       kristianvld
// @match        https://*.bbcollab.com/collab/ui/session/playback*
// @match        https://*.bbcollab.com/recording/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Use the + (pluss) and - (minus) keys to adjust playback speed.
    // Hold shift to take bigger steps when chaning speed.
    // Use the 0 (zero) key to reset speed to normal (1x).
    // The keys might need adjusting to your os/keyboard layout.
    document.addEventListener("keydown", (e) => {
        const vid = document.getElementsByTagName("video")[0];

        if (e.key == "+") {
            vid.playbackRate += 0.1;
        } else if (e.key == "-") {
            vid.playbackRate -= 0.1;
        } else if (e.key == "?") {
            vid.playbackRate += 0.5;
        } else if (e.key == "_") {
            vid.playbackRate -= 0.5;
        } else if (e.key == "0") {
            vid.playbackRate = 1;
        } else {
            return;
        }
        vid.playbackRate = vid.playbackRate.toFixed(2); // Round to two decimal places for prettier display


        // Inject a small label displaying the current playback speed next to the play controllers
        let span = document.getElementById("pb-rate-info");
        if (span == null) {
            span = document.createElement("span");
            span.classList.add("playback-controls__recording-time");
            span.id = "pb-rate-info";
            const time = document.querySelectorAll("span.playback-controls__recording-time.-current-time.ng-binding")[0];
            time.parentNode.insertBefore(span, time.nextSibling);
        }
        span.textContent = "Speed: " + vid.playbackRate + "x";
    });
})();

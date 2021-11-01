// ==UserScript==
// @name         Better Youtube Player
// @namespace    https://github.com/kristianvld
// @version      1.1
// @description  Automatically confirm the "continue watching" popup, along with adding reliable prev/next support from media keys from other applications.
// @author       kristianvld
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	let registerPrevNext = () => {
		console.log("registering prev/next listeners...");
		navigator.mediaSession.setActionHandler('previoustrack', () => window.history.back());
		navigator.mediaSession.setActionHandler('nexttrack', () => document.querySelector('.ytp-next-button').click());
	};


	const run = () => {
		console.log("play/pause video pressed");
		const textValues = ['Videoen er satt på pause. Vil du fortsette å se?', 'Video paused. Continue watching?'];
		const node = document.querySelector('yt-confirm-dialog-renderer');
		if (node && node.parentNode.style.display != "none") {
			console.log("found popup dialog");
			for (const text of textValues) {
				if (node.textContent.indexOf(text) > 0) {
					console.log("should press button here");
					document.querySelector('#confirm-button').click();
					console.log("pressed button");
					return;
				}
			}
		}
	};
	const runDelay = () => {
		setTimeout(registerPrevNext, 1000); // delay is to fix the listeners not registering properly when autoplaying video, e.g. playing a playlist, 1000 seems to work reliably for me, might work less reliable with slow internet? Not tested.
		setTimeout(run, 0);
		setTimeout(run, 10);
		setTimeout(run, 100);
		setTimeout(run, 1000);
		setTimeout(run, 5000);
	};
	document.querySelector('video').addEventListener('play', runDelay);
	document.querySelector('video').addEventListener('pause', runDelay);
	window.addEventListener('load', runDelay);
	if (document.readyState == 'complete') runDelay();
	console.log("registered play/pause listeners");
})();
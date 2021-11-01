// ==UserScript==
// @name         Fix Imgur Bar
// @namespace    https://github.com/kristianvld
// @version      2.0
// @description  Fix imgur bar, increase screen realestate, auto load more images and better fullsceen with 'f' button
// @author       kristianvld
// @match        https://imgur.com/*
// ==/UserScript==

(function () {
    'use strict';

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
.App-cover.NewCover.isFixed.GalleryCover {
    opacity: 0;
}
.Gallery-EngagementBar, .Footer-wrapper, .Gallery-Sidebar {
    display: none;
}

.Gallery {
    width: 100% !important;
    max-width: 100% !important;
}

.imageContainer.zoomable img {
    max-height: 100% !important;
}
`;
    document.getElementsByTagName('head')[0].appendChild(style);

    const fix = () => {
        document.querySelectorAll(".post-header").forEach((node) => { node[0].style = "position: unset" });
    };
    fix();

    setTimeout(() => {
        let el = document.querySelector('.Wall-Button.Button.btn-wall--yes');
        if (el) {
            el.click();
        }
        el = document.querySelector('button.loadMore');
        if (el) {
            el.click();
        }
    }, 1000);

    document.addEventListener('keypress', e => {
        if (e.key == 'f') {
            document.documentElement.requestFullscreen();
            document.querySelector('meta[name="viewport"]').content = 'width=device-width, minimum-scale=1.7, maximum-scale=1.7, initial-scale=1.7';
        }
    });
})();
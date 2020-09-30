// ==UserScript==
// @name         Mediasite Playback Speeds
// @namespace    https://github.com/kristianvld
// @version      1.0
// @description  Add more speed options for Mediasite player
// @author       kristianvld
// @match        https://mediasite.ntnu.no/Mediasite/Play/*
// ==/UserScript==

(function() {
    'use strict';

    // This script is kind of hach-ish, but was the only working solution I could find.
    //
    // Mediasite loads some default playback speeds that you can choose between. The defaults are 0.5, 1.0, 1.4, 1.6 and 2.0
    // Mediasite loads most of the player into memory only trigger on events, with no accessible references that I could find.
    // We solve this by loading the Mediasite library before mediasite itself, and injecting our playback rates into the config that will be used
    //   to setup the player afterwards.

    Mediasite.loadScripts(['Javascript/Scripts/3rdParty/jquery.js',
    'Javascript/Scripts/3rdParty/modernizr.js',
    'Javascript/Scripts/3rdParty/jquery-ui.js'], function () {
      Mediasite.loadScripts([
        'Javascript/Scripts/3rdParty/dash.all.debug.js',
        'Javascript/Scripts/3rdParty/hls.js',
        'Javascript/Scripts/3rdParty/Silverlight.js',
        'Javascript/Scripts/jquery.whenAll.js',
        'Javascript/Scripts/SFMP.Basics.js',
        'Javascript/Scripts/Mediasite.Core.js',
        'Javascript/Scripts/Mediasite.Geometry.js',
        'Javascript/Scripts/ImageSizeProvider.js',
        'Javascript/Scripts/Mediasite.Css.js',
        'Javascript/Scripts/Mediasite.Player.Core.js',
        'Javascript/Scripts/Mediasite.LogViewer.js',
        'Javascript/Scripts/Mediasite.Player.API.js',
        'Javascript/Scripts/Mediasite.Player.Reporting.js',
        'Javascript/Scripts/Mediasite.Player.APIBroker.js',
        'Javascript/Scripts/Mediasite.Player.Model.js',
        'Javascript/Scripts/Mediasite.Player.BookmarkStorage.js',
        'Javascript/Scripts/Mediasite.Player.UserActivation.js',
        'Javascript/Scripts/Mediasite.MediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/Html5MediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/HlsDotJsMediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/Html5DashMediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/Html5RampMediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/SilverlightMediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/FlashMediaPlayer.js',
        'Javascript/Scripts/MediaPlayers/WindowsMediaPlayer.js',
        'Javascript/Scripts/jquery.ui.messagedisplay.js',
        'Javascript/Scripts/Mediasite.Player.StreamViewer.js',
        'Javascript/Scripts/Mediasite.Player.DataProvider.js',
        'Javascript/Scripts/MediasitePlayer.js',
        'Javascript/Scripts/Mediasite.Player.AriaMessageFactory.js',
        'Javascript/Scripts/3rdParty/swfobject.js',
        'Javascript/Scripts/Mediasite.Player.ConvivaConfigurator.js',
        'Javascript/Scripts/Mediasite.Player.Configurations.js'
      ], ()=>{
          Mediasite.MediaPlayer.ViewOptions.playbackRates = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0]
      })});
})();

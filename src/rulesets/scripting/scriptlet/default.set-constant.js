/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"ytInitialPlayerResponse.adPlacements\",\"undefined\"]","[\"playerResponse.adPlacements\",\"undefined\"]","[\"abp\",\"false\"]","[\"oeo\",\"noopFunc\"]","[\"nsShowMaxCount\",\"0\"]","[\"objVc.interstitial_web\",\"''\"]","[\"console.clear\",\"trueFunc\"]","[\"_ml_ads_ns\",\"null\"]","[\"_sp_.config\",\"undefined\"]","[\"isAdBlockActive\",\"false\"]","[\"AdController\",\"noopFunc\"]","[\"check_adblock\",\"true\"]","[\"initials.yld-mdpopunder\",\"''\"]","[\"xRds\",\"false\"]","[\"tRds\",\"true\"]","[\"console.clear\",\"noopFunc\"]","[\"String.fromCharCode\",\"noopFunc\"]","[\"console.log\",\"noopFunc\"]","[\"String.prototype.charCodeAt\",\"trueFunc\"]","[\"console.clear\",\"undefined\"]","[\"attachEvent\",\"trueFunc\"]","[\"hasAdBlocker\",\"false\"]","[\"Object.prototype._getSalesHouseConfigurations\",\"noopFunc\"]","[\"sadbl\",\"false\"]","[\"blurred\",\"false\"]","[\"flashvars.adv_pre_src\",\"''\"]","[\"showPopunder\",\"false\"]","[\"page_params.holiday_promo\",\"true\"]","[\"adsEnabled\",\"true\"]","[\"String.prototype.charAt\",\"trueFunc\"]","[\"ad_blocker\",\"false\"]","[\"blockAdBlock\",\"true\"]","[\"is_adblocked\",\"false\"]","[\"showPopunder\",\"noopFunc\"]","[\"VikiPlayer.prototype.pingAbFactor\",\"noopFunc\"]","[\"player.options.disableAds\",\"true\"]","[\"flashvars.adv_pre_vast\",\"''\"]","[\"flashvars.adv_pre_vast_alt\",\"''\"]","[\"x_width\",\"1\"]","[\"_site_ads_ns\",\"true\"]","[\"luxuretv.config\",\"''\"]","[\"$.adblock\",\"0\"]","[\"Object.prototype.AdOverlay\",\"noopFunc\"]","[\"tkn_popunder\",\"null\"]","[\"can_run_ads\",\"true\"]","[\"adsBlockerDetector\",\"noopFunc\"]","[\"globalThis\",\"null\"]","[\"adblock\",\"false\"]","[\"__ads\",\"true\"]","[\"FlixPop.isPopGloballyEnabled\",\"falseFunc\"]","[\"fuckAdBlock\",\"false\"]","[\"$.magnificPopup.open\",\"noopFunc\"]","[\"adsenseadBlock\",\"noopFunc\"]","[\"flashvars.adv_pause_html\",\"''\"]","[\"adblockSuspected\",\"false\"]","[\"disasterpingu\",\"false\"]","[\"CnnXt.Event.fire\",\"noopFunc\"]","[\"App.views.adsView.adblock\",\"false\"]","[\"$.fx.off\",\"true\"]","[\"adsClasses\",\"undefined\"]","[\"gsecs\",\"0\"]","[\"isAdb\",\"false\"]","[\"adBlockEnabled\",\"false\"]","[\"puShown\",\"true\"]","[\"ads_b_test\",\"true\"]","[\"showAds\",\"true\"]","[\"clicked\",\"true\"]","[\"eClicked\",\"true\"]","[\"number\",\"0\"]","[\"sync\",\"true\"]","[\"detectAdBlock\",\"noopFunc\"]","[\"attr\",\"{}\"]","[\"scriptSrc\",\"''\"]","[\"Object.prototype.adReinsertion\",\"noopFunc\"]","[\"Object.prototype.disableAds\",\"true\"]","[\"cxStartDetectionProcess\",\"noopFunc\"]","[\"isAdBlocked\",\"false\"]","[\"adblock\",\"noopFunc\"]","[\"path\",\"''\"]","[\"adBlock\",\"false\"]","[\"_ctrl_vt.blocked.ad_script\",\"false\"]","[\"blockAdBlock\",\"noopFunc\"]","[\"publd.noads\",\"true\"]","[\"caca\",\"noopFunc\"]","[\"Ok\",\"true\"]","[\"isBlocked\",\"false\"]","[\"safelink.adblock\",\"false\"]","[\"ClickUnder\",\"noopFunc\"]","[\"flashvars.adv_pre_url\",\"''\"]","[\"flashvars.protect_block\",\"''\"]","[\"flashvars.video_click_url\",\"''\"]","[\"ifmax\",\"true\"]","[\"spoof\",\"noopFunc\"]","[\"btoa\",\"null\"]","[\"sp_ad\",\"true\"]","[\"adsBlocked\",\"false\"]","[\"_sp_.msg.displayMessage\",\"noopFunc\"]","[\"isAdblock\",\"false\"]","[\"atob\",\"noopFunc\"]","[\"CaptchmeState.adb\",\"undefined\"]","[\"indexedDB.open\",\"trueFunc\"]","[\"UhasAB\",\"false\"]","[\"google_ad_status\",\"1\"]","[\"Object.prototype.adBlockDetected\",\"false\"]","[\"flashvars.popunder_url\",\"''\"]","[\"_pop\",\"noopFunc\"]","[\"_ti_update_user\",\"noopFunc\"]","[\"valid\",\"1\"]","[\"vastAds\",\"[]\"]","[\"isAdsDisplayed\",\"true\"]","[\"adblock\",\"1\"]","[\"frg\",\"1\"]","[\"time\",\"0\"]","[\"vpPrerollVideo\",\"undefined\"]","[\"ads\",\"true\"]","[\"GNCA_Ad_Support\",\"true\"]","[\"ad_permission\",\"true\"]","[\"Date.now\",\"noopFunc\"]","[\"jQuery.adblock\",\"1\"]","[\"ads_js_was_loaded\",\"true\"]","[\"VMG.Components.Adblock\",\"false\"]","[\"wlm.adsNotBlocked\",\"true\"]","[\"_n_app.popunder\",\"null\"]","[\"adblockDetector\",\"trueFunc\"]","[\"hasPoped\",\"true\"]","[\"flashvars.video_click_url\",\"undefined\"]","[\"flashvars.adv_start_html\",\"''\"]","[\"jQuery.adblock\",\"false\"]","[\"google_jobrunner\",\"true\"]","[\"buttonLink\",\"noopFunc\"]","[\"clientSide.adbDetect\",\"noopFunc\"]","[\"sec\",\"0\"]","[\"gadb\",\"false\"]","[\"checkadBlock\",\"noopFunc\"]","[\"di.VAST.XHRURLHandler\",\"noopFunc\"]","[\"cmnnrunads\",\"true\"]","[\"adBlocker\",\"false\"]","[\"adBlockDetected\",\"noopFunc\"]","[\"StileApp.somecontrols.adBlockDetected\",\"noopFunc\"]","[\"checkdom\",\"0\"]","[\"MDCore.adblock\",\"0\"]","[\"google_tag_data\",\"noopFunc\"]","[\"noAdBlock\",\"true\"]","[\"counter\",\"0\"]","[\"window_focus\",\"true\"]","[\"adsOk\",\"true\"]","[\"Object.prototype._parseVAST\",\"noopFunc\"]","[\"Object.prototype.createAdBlocker\",\"noopFunc\"]","[\"Object.prototype.isAdPeriod\",\"falseFunc\"]","[\"popup\",\"noopFunc\"]","[\"check\",\"true\"]","[\"daganKwarta\",\"true\"]","[\"dvsize\",\"51\"]","[\"isal\",\"true\"]","[\"count\",\"0\"]","[\"document.hidden\",\"true\"]","[\"lck\",\"true\"]","[\"awm\",\"true\"]","[\"adblockEnabled\",\"false\"]","[\"Global.adv\",\"undefined\"]","[\"ABLK\",\"false\"]","[\"pogo.intermission.staticAdIntermissionPeriod\",\"0\"]","[\"SubmitDownload1\",\"noopFunc\"]","[\"t\",\"0\"]","[\"ckaduMobilePop\",\"noopFunc\"]","[\"tieneAdblock\",\"0\"]","[\"adsAreBlocked\",\"false\"]","[\"cmgpbjs\",\"false\"]","[\"displayAdblockOverlay\",\"false\"]","[\"google\",\"false\"]","[\"Math.pow\",\"noopFunc\"]","[\"openInNewTab\",\"noopFunc\"]","[\"adblockDetector\",\"noopFunc\"]","[\"loadingAds\",\"true\"]","[\"ads_blocked\",\"0\"]","[\"runAdBlocker\",\"false\"]","[\"td_ad_background_click_link\",\"undefined\"]","[\"Adblock\",\"false\"]","[\"flashvars.logo_url\",\"''\"]","[\"flashvars.logo_text\",\"''\"]","[\"nlf.custom.userCapabilities\",\"false\"]","[\"nozNoAdBlock\",\"true\"]","[\"decodeURIComponent\",\"trueFunc\"]","[\"process\",\"noopFunc\"]","[\"LoadThisScript\",\"true\"]","[\"showPremLite\",\"true\"]","[\"closeBlockerModal\",\"false\"]","[\"adBlockDetector.isEnabled\",\"falseFunc\"]","[\"testerli\",\"false\"]","[\"areAdsDisplayed\",\"true\"]","[\"gkAdsWerbung\",\"true\"]","[\"document.bridCanRunAds\",\"true\"]","[\"pop_target\",\"null\"]","[\"is_banner\",\"true\"]","[\"$easyadvtblock\",\"false\"]","[\"fuckAdBlock._options.baitClass\",\"null\"]","[\"iExist\",\"true\"]","[\"show_dfp_preroll\",\"false\"]","[\"show_youtube_preroll\",\"false\"]","[\"show_ads_gr8_lite\",\"true\"]","[\"doads\",\"true\"]","[\"jsUnda\",\"noopFunc\"]","[\"abp\",\"noopFunc\"]","[\"AlobaidiDetectAdBlock\",\"true\"]","[\"Advertisement\",\"1\"]","[\"adBlockDetected\",\"false\"]","[\"HTMLElement.prototype.attachShadow\",\"null\"]","[\"abp1\",\"1\"]","[\"pr_okvalida\",\"true\"]","[\"$.ajax\",\"trueFunc\"]","[\"getHomadConfig\",\"noopFunc\"]","[\"adsbygoogle.loaded\",\"true\"]","[\"cnbc.canShowAds\",\"true\"]","[\"Adv_ab\",\"false\"]","[\"chrome\",\"undefined\"]","[\"firefaucet\",\"true\"]","[\"app.addonIsInstalled\",\"trueFunc\"]","[\"flashvars.popunder_url\",\"undefined\"]","[\"adv\",\"true\"]","[\"pqdxwidthqt\",\"false\"]","[\"canRunAds\",\"true\"]","[\"Fingerprint2\",\"true\"]","[\"load_pop_power\",\"noopFunc\"]","[\"adBlockDetected\",\"true\"]","[\"Time_Start\",\"0\"]","[\"blockAdBlock\",\"trueFunc\"]","[\"ezstandalone.enabled\",\"true\"]","[\"CustomEvent\",\"noopFunc\"]","[\"ab\",\"false\"]","[\"go_popup\",\"{}\"]","[\"noBlocker\",\"true\"]","[\"adsbygoogle\",\"null\"]","[\"killads\",\"true\"]","[\"cRAds\",\"null\"]","[\"fabActive\",\"false\"]","[\"gWkbAdVert\",\"true\"]","[\"noblock\",\"true\"]","[\"ai_dummy\",\"true\"]","[\"ulp_noadb\",\"true\"]","[\"wgAffiliateEnabled\",\"false\"]","[\"ads\",\"null\"]","[\"checkAdsBlocked\",\"noopFunc\"]","[\"adsLoadable\",\"true\"]","[\"ASSetCookieAds\",\"null\"]","[\"AdBlockerDetected\",\"noopFunc\"]","[\"letShowAds\",\"true\"]","[\"tidakAdaPenghalangAds\",\"true\"]","[\"timeSec\",\"0\"]","[\"ads_unblocked\",\"true\"]","[\"xxSetting.adBlockerDetection\",\"false\"]","[\"better_ads_adblock\",\"null\"]","[\"open\",\"undefined\"]","[\"importFAB\",\"undefined\"]","[\"Drupal.behaviors.adBlockerPopup\",\"null\"]","[\"fake_ad\",\"true\"]","[\"flashvars.mlogo\",\"''\"]","[\"koddostu_com_adblock_yok\",\"null\"]","[\"adsbygoogle\",\"trueFunc\"]","[\"player.ads.cuePoints\",\"undefined\"]","[\"adBlockDetected\",\"null\"]","[\"fouty\",\"true\"]","[\"detectAdblock\",\"noopFunc\"]","[\"better_ads_adblock\",\"1\"]","[\"hold_click\",\"false\"]","[\"sgpbCanRunAds\",\"true\"]","[\"config.pauseInspect\",\"false\"]","[\"D4zz\",\"noopFunc\"]","[\"appContext.adManager.context.current.adFriendly\",\"false\"]","[\"blockAdBlock._options.baitClass\",\"null\"]","[\"document.blocked_var\",\"1\"]","[\"____ads_js_blocked\",\"false\"]","[\"wIsAdBlocked\",\"false\"]","[\"WebSite.plsDisableAdBlock\",\"null\"]","[\"ads_blocked\",\"false\"]","[\"samDetected\",\"false\"]","[\"sems\",\"noopFunc\"]","[\"countClicks\",\"0\"]","[\"settings.adBlockerDetection\",\"false\"]","[\"mixpanel.get_distinct_id\",\"true\"]","[\"bannersLoaded\",\"4\"]","[\"notEmptyBanners\",\"4\"]","[\"bscheck.adblocker\",\"noopFunc\"]","[\"qpcheck.ads\",\"noopFunc\"]","[\"CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain\",\"undefined\"]","[\"detectAB1\",\"noopFunc\"]","[\"paywallGateway.truncateContent\",\"noopFunc\"]","[\"adBlockDisabled\",\"true\"]","[\"blockedElement\",\"noopFunc\"]","[\"popit\",\"false\"]","[\"adBlockerDetected\",\"false\"]","[\"countdown\",\"0\"]","[\"decodeURI\",\"noopFunc\"]","[\"flashvars.adv_postpause_vast\",\"''\"]","[\"univresalP\",\"noopFunc\"]","[\"runAdblock\",\"noopFunc\"]","[\"$tieE3\",\"true\"]","[\"xv_ad_block\",\"0\"]","[\"vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads\",\"''\"]","[\"adsProvider.init\",\"noopFunc\"]","[\"SDKLoaded\",\"true\"]","[\"blockAdBlock._creatBait\",\"null\"]","[\"adblockcheck\",\"false\"]","[\"POPUNDER_ENABLED\",\"false\"]","[\"plugins.preroll\",\"noopFunc\"]","[\"errcode\",\"0\"]","[\"DHAntiAdBlocker\",\"true\"]","[\"adblock\",\"0\"]","[\"db.onerror\",\"noopFunc\"]","[\"p18\",\"undefined\"]","[\"asc\",\"1\"]","[\"ADBLOCKED\",\"false\"]","[\"adb\",\"0\"]","[\"String.fromCharCode\",\"trueFunc\"]","[\"adblock_use\",\"false\"]","[\"nitroAds.loaded\",\"true\"]","[\"createCanvas\",\"noopFunc\"]","[\"playerAdSettings.adLink\",\"''\"]","[\"playerAdSettings.waitTime\",\"0\"]","[\"AdHandler.adblocked\",\"0\"]","[\"adsHeight\",\"11\"]","[\"checkCap\",\"0\"]","[\"waitTime\",\"0\"]","[\"isAdsLoaded\",\"true\"]","[\"adblockerAlert\",\"noopFunc\"]","[\"Object.prototype.parseXML\",\"noopFunc\"]","[\"Object.prototype.blackscreenDuration\",\"1\"]","[\"Object.prototype.adPlayerId\",\"''\"]","[\"isadb\",\"false\"]","[\"adblockDetect\",\"noopFunc\"]","[\"descendant.counter.isStopped\",\"false\"]","[\"style\",\"noopFunc\"]","[\"history.pushState\",\"noopFunc\"]","[\"google_unique_id\",\"6\"]","[\"new_config.timedown\",\"0\"]","[\"timedisplay\",\"0\"]","[\"Object.prototype.isAdDisabled\",\"true\"]","[\"hiddenProxyDetected\",\"false\"]","[\"SteadyWidgetSettings.adblockActive\",\"false\"]","[\"proclayer\",\"noopFunc\"]","[\"load_ads\",\"trueFunc\"]","[\"dclm_ajax_var.disclaimer_redirect_url\",\"''\"]","[\"starPop\",\"1\"]","[\"Object.prototype.ads\",\"noopFunc\"]","[\"detectBlockAds\",\"noopFunc\"]","[\"ga\",\"trueFunc\"]","[\"enable_dl_after_countdown\",\"true\"]","[\"isGGSurvey\",\"true\"]","[\"ad_link\",\"''\"]","[\"App.AdblockDetected\",\"false\"]","[\"SF.adblock\",\"true\"]","[\"startfrom\",\"0\"]","[\"Object.prototype.nopreroll_\",\"true\"]","[\"adblocked\",\"false\"]","[\"ublocked\",\"false\"]","[\"ads_setted\",\"0\"]","[\"ads_updated\",\"0\"]","[\"HP_Scout.adBlocked\",\"false\"]","[\"SD_IS_BLOCKING\",\"false\"]","[\"__BACKPLANE_API__.renderOptions.showAdBlock\",\"''\"]","[\"Object.prototype.isNoAds\",\"{}\"]","[\"countDownDate\",\"0\"]","[\"setupSkin\",\"noopFunc\"]","[\"adSettings\",\"[]\"]","[\"count\",\"1\"]","[\"Object.prototype.enableInterstitial\",\"false\"]","[\"check\",\"noopFunc\"]","[\"ads\",\"undefined\"]","[\"ADBLOCK\",\"false\"]","[\"POSTPART_prototype.ADKEY\",\"noopFunc\"]","[\"adBlockDetected\",\"falseFunc\"]","[\"noAdBlock\",\"noopFunc\"]","[\"AdService.info.abd\",\"noopFunc\"]","[\"adBlockDetectionResult\",\"undefined\"]","[\"popped\",\"true\"]","[\"tiPopAction\",\"noopFunc\"]","[\"google.ima.OmidVerificationVendor\",\"{}\"]","[\"Object.prototype.omidAccessModeRules\",\"{}\"]","[\"puShown1\",\"true\"]","[\"passthetest\",\"true\"]","[\"timeset\",\"0\"]","[\"pandaAdviewValidate\",\"true\"]","[\"verifica_adblock\",\"noopFunc\"]","[\"canGetAds\",\"true\"]","[\"ad_blocker_active\",\"false\"]","[\"init_welcome_ad\",\"noopFunc\"]","[\"moneyAbovePrivacyByvCDN\",\"true\"]","[\"dable\",\"{}\"]","[\"aLoad\",\"noopFunc\"]","[\"mtCanRunAdsSoItCanStillBeOnTheWeb\",\"true\"]","[\"document.body.contains\",\"trueFunc\"]","[\"popunder\",\"undefined\"]","[\"distance\",\"0\"]","[\"document.onclick\",\"''\"]","[\"adEnable\",\"true\"]","[\"currentAd\",\"3\"]","[\"document.hasFocus\",\"trueFunc\"]","[\"displayAds\",\"0\"]","[\"Overlayer\",\"{}\"]","[\"pop3getcookie\",\"undefined\"]","[\"pop3setcookie1\",\"undefined\"]","[\"pop3setCookie2\",\"undefined\"]","[\"_adshrink.skiptime\",\"0\"]","[\"AbleToRunAds\",\"true\"]","[\"TextEncoder\",\"undefined\"]","[\"abpblocked\",\"undefined\"]","[\"app.showModalAd\",\"noopFunc\"]","[\"adt\",\"0\"]","[\"test_adblock\",\"noopFunc\"]","[\"Object.prototype.adBlockerDetected\",\"falseFunc\"]","[\"vastEnabled\",\"false\"]","[\"detectadsbocker\",\"false\"]","[\"two_worker_data_js.js\",\"[]\"]","[\"FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY\",\"true\"]","[\"questpassGuard\",\"noopFunc\"]","[\"admiral\",\"noopFunc\"]","[\"timeLeft\",\"0\"]","[\"Cookiebot\",\"noopFunc\"]","[\"navigator.brave\",\"undefined\"]","[\"feature_flags.interstitial_ads_flag\",\"false\"]","[\"feature_flags.interstitials_every_four_slides\",\"false\"]","[\"waldoSlotIds\",\"true\"]","[\"adblockstatus\",\"false\"]","[\"adblockEnabled\",\"noopFunc\"]","[\"banner_is_blocked\",\"false\"]","[\"Object.prototype.adBlocked\",\"false\"]","[\"makeMoney\",\"true\"]","[\"chp_adblock_browser\",\"noopFunc\"]","[\"Brid.A9.prototype.backfillAdUnits\",\"[]\"]","[\"slideShow.displayInterstitial\",\"true\"]","[\"S_Popup\",\"2\"]","[\"__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf\",\"trueFunc\"]","[\"navigator.standalone\",\"true\"]","[\"showAdss\",\"true\"]","[\"window.showAds\",\"true\"]","[\"$.tstracker\",\"noopFunc\"]","[\"bmak.js_post\",\"false\"]","[\"ccsrv\",\"''\"]","[\"lcs_SerName\",\"''\"]","[\"flashvars.event_reporting\",\"''\"]","[\"firebase.analytics\",\"noopFunc\"]","[\"akamaiDisableServerIpLookup\",\"noopFunc\"]","[\"nads.createAd\",\"trueFunc\"]","[\"ga\",\"noopFunc\"]","[\"huecosPBS.nstdX\",\"null\"]","[\"DTM.trackAsyncPV\",\"noopFunc\"]","[\"newPageViewSpeedtest\",\"noopFunc\"]","[\"pubg.unload\",\"noopFunc\"]","[\"generateGalleryAd\",\"noopFunc\"]","[\"mediator\",\"noopFunc\"]","[\"Object.prototype.subscribe\",\"noopFunc\"]","[\"Object.prototype.vjsPlayer.ads\",\"noopFunc\"]","[\"network_user_id\",\"''\"]","[\"window.pbjsChunk\",\"noopFunc\"]","[\"Object.prototype.setDisableFlashAds\",\"noopFunc\"]","[\"DD_RUM.addTiming\",\"noopFunc\"]","[\"chameleonVideo.adDisabledRequested\",\"true\"]","[\"datalayer\",\"[]\"]","[\"Object.prototype.isInitialLoadDisabled\",\"noopFunc\"]","[\"listingGoogleEETracking\",\"noopFunc\"]","[\"dcsMultiTrack\",\"noopFunc\"]","[\"urlStrArray\",\"noopFunc\"]","[\"pa\",\"{}\"]","[\"Object.prototype.setConfigurations\",\"noopFunc\"]","[\"Object.prototype.bk_addPageCtx\",\"noopFunc\"]","[\"Object.prototype.bk_doJSTag\",\"noopFunc\"]","[\"passFingerPrint\",\"noopFunc\"]","[\"DD_LOGS\",\"noopFunc\"]","[\"_hmt.id\",\"1\"]","[\"googletag._vars_\",\"{}\"]","[\"googletag._loadStarted_\",\"true\"]","[\"googletag._loaded_\",\"true\"]","[\"google_unique_id\",\"1\"]","[\"google.javascript\",\"{}\"]","[\"google.javascript.ads\",\"{}\"]","[\"google_global_correlator\",\"1\"]"];

const hostnamesMap = new Map([["youtube.com",[0,1]],["youtubekids.com",[0,1]],["youtube-nocookie.com",[0,1]],["t-online.de",2],["whatfinger.com",3],["timesofindia.indiatimes.com",4],["economictimes.indiatimes.com",5],["userscloud.com",6],["motherless.com",7],["sueddeutsche.de",8],["watson.de",8],["watchanimesub.net",9],["wco.tv",9],["wcoanimesub.tv",9],["wcoforever.net",9],["filehorse.com",9],["guidetnt.com",9],["sp-today.com",9],["linkvertise.com",9],["textbin.net",9],["eropaste.com",9],["pastebr.xyz",9],["getpaste.link",9],["sharetext.me",9],["note.sieuthuthuat.com",9],["elcriticodelatele.com",[9,305]],["gadgets.es",[9,305]],["wiwo.de",10],["masteranime.es",11],["9anime.vip",11],["fullxh.com",12],["megaxh.com",12],["unlockxh4.com",12],["xhadult2.com",12],["xhadult3.com",12],["xhamster46.com",12],["xhday.com",12],["xhday1.com",12],["xhmoon5.com",12],["xhplanet1.com",12],["xhplanet2.com",12],["xhreal2.com",12],["xhtab2.com",12],["xhvictory.com",12],["xhwebsite.com",12],["xhwebsite2.com",12],["xhwide1.com",12],["xhwide8.com",12],["alphaporno.com",[15,409]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,107]],["familyporn.tv",15],["cloudemb.com",[15,327]],["sbplay1.com",15],["swatchseries.ru",15],["id45.cyou",15],["85tube.com",[15,89]],["findjav.com",15],["pobre.tv",15],["k1nk.co",15],["watchasians.cc",15],["photopea.com",15],["imsdb.pw",[15,301]],["soltoshindo.com",15],["techtimes.com",16],["dronedj.com",18],["freeplayervideo.com",19],["nazarickol.com",19],["player-cdn.com",19],["voe.sx",19],["housecardsummerbutton.com",19],["bigclatterhomesguideservice.com",19],["uptodatefinishconference.com",19],["uptodatefinishconferenceroom.com",19],["tinycat-voe-fashion.com",19],["motphimtv.com",19],["rabbitstream.net",19],["streamlare.com",19],["projectfreetv.one",19],["nolive.me",20],["cbs.com",21],["paramountplus.com",21],["player.glomex.com",22],["merkur.de",22],["tz.de",22],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,131]],["stfly.me",24],["oncehelp.com",24],["bit-url.com",24],["rgl.vn",24],["reqlinks.net",24],["wu8.in",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["slink.bid",[24,70]],["earnwithshortlink.com",24],["7r6.com",24],["enrt.eu",24],["oko.sh",24],["shortpaid.com",24],["ckk.ai",24],["fc.lc",24],["fcc.lc",[24,195]],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["srek.net",24],["skincarie.com",24],["exeo.app",24],["clk.ink",24],["birdurls.com",24],["coinlyhub.com",[24,221]],["adsafelink.com",24],["aii.sh",24],["shrinkurl.org",24],["adsh.cc",24],["cybertechng.com",[24,229]],["owllink.net",24],["fir3.net",24],["cutdl.xyz",24],["gplinks.co",24],["loan2host.com",24],["tei.ai",24],["tii.ai",24],["iir.ai",24],["shorteet.com",[24,251]],["sekilastekno.com",24],["promo-visits.site",24],["satoshi-win.xyz",[24,260]],["shorterall.com",24],["smoner.com",24],["bitlinks.pw",24],["linkad.in",24],["linkshrnk.com",24],["popimed.com",24],["linksly.co",24],["ur-ly.xyz",24],["shrinkme.in",24],["rodjulian.com",24],["pkr.pw",24],["shrinke.me",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["cashurl.in",24],["4cash.me",24],["namaidani.com",24],["bitfly.io",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["fxlap.com",24],["earnfasts.com",24],["short-cash2.xyz",24],["absolutesmmpanel.com",24],["myhiddentech.com",24],["tawiia.com",24],["droplink.co",24],["recipestutorials.com",24],["ashort1a.xyz",24],["2shrt.com",24],["apkshrt.com",24],["genpassword.top",24],["srts.me",24],["cuturl.in",24],["lyricsbot.pw",24],["short88.com",24],["cashearn.cc",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["shrinkforearn.in",24],["1shorten.com",24],["shortlinkpay.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["gonety.com",24],["viraloc.com",24],["clickscoin.com",24],["forex-trnd.com",24],["kiiw.icu",24],["vshort.link",24],["link.ltc24.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["linkcc.pro",24],["haonguyen.top",24],["jameeltips.us",24],["shrlink.top",24],["claimfreebits.com",24],["mfk-shorter.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["jp88.xyz",24],["short.palmeratv.com",24],["filezipa.com",24],["arab-chat.club",24],["dz-linkk.com",24],["xfiles.io",24],["linkadshield.xyz",24],["download.freestudyweb.com",24],["theblissempire.com",24],["shortlink.prz.pw",24],["zipurls.com",24],["finanzas-vida.com",24],["go.zolomix.in",24],["skiplink.org",24],["bharaturl.com",24],["techmyhub.com",24],["adsmoker.com",24],["adurly.cc",24],["clikern.com",24],["cashathome.online",24],["shrinkin.xyz",24],["pix4link.com",24],["paid4.link",24],["ez4short.com",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["go.mozlink.net",24],["enagato.com",24],["linkres.in",24],["webo.one",24],["automotur.club",24],["pandarticles.com",24],["beingtek.com",24],["katflys.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["toptap.website",[24,334]],["za.gl",[24,155]],["newsalret.com",24],["download.baominh.tech",24],["bblink.com",24],["abre.click",24],["linkbr.xyz",24],["myad.biz",24],["go.netfile.cc",24],["try2link.com",24],["swzz.xyz",24],["vrlinks.xyz",24],["sakastau.com",24],["vevioz.com",24],["gos.insuranceblog.xyz",24],["charexempire.com",24],["clk.asia",24],["rancah.com",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["upshrink.com",24],["go.adinsurance.xyz",24],["tecnologiapp.site",24],["adslink.programasfulltaf16.com",24],["aylink.info",24],["dash-free.com",[24,229]],["rainurl.com",[24,229]],["snowurl.com",[24,229]],["netfile.cc",24],["link.insurance-space.xyz",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rajsayt.xyz",24],["rocklink.in",24],["linkshortify.site",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["cutx.me",24],["btcwalk.com",24],["cryptoon.xyz",24],["easysky.in",24],["veganab.co",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["post.nites-tv.xyz",24],["sh2rt.com",24],["up-load.one",24],["zuba.link",24],["pandaznetwork.com",24],["du-link.in",24],["linksfy.co",24],["adrinolinks.in",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["cut-y.net",24],["allcryptoz.net",24],["ultraten.net",24],["hoxiin.com",24],["technemo.xyz",24],["baicho.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["enit.in",[24,247]],["oii.io",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["cookdov.com",24],["xpshort.com",24],["bdnewsx.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["cutty.app",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["tii.la",24],["celinks.net",24],["c2g.at",24],["atglinks.com",24],["shortzu.icu",24],["bitcosite.com",24],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["gainl.ink",24],["windowslite.net",[24,229]],["watchmygf.me",[25,51]],["fpo.xxx",[25,53]],["sexemix.com",25],["heavyfetish.com",[25,438]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",29],["tune.pk",30],["noticias.gospelmais.com.br",31],["techperiod.com",31],["jacquieetmicheltv.net",[32,33]],["illicoporno.com",32],["lavoixdux.com",32],["tonpornodujour.com",32],["jacquieetmichel.net",32],["swame.com",32],["vosfemmes.com",32],["voyeurfrance.net",32],["viki.com",[34,35]],["sleazyneasy.com",[36,37,38]],["smutr.com",[36,217]],["yourporngod.com",[36,37]],["javbangers.com",[36,292]],["camfox.com",36],["camthots.tv",[36,124]],["shegotass.info",36],["amateur8.com",36],["bigtitslust.com",36],["ebony8.com",36],["freeporn8.com",36],["lesbian8.com",36],["maturetubehere.com",36],["sortporn.com",36],["webcamvau.com",36],["motherporno.com",[36,37,53,126]],["theporngod.com",[36,37]],["pornsocket.com",39],["luxuretv.com",40],["flashx.net",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["katfile.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["rbxleaks.com",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["filespace.com",50],["transparentcalifornia.com",51],["deepbrid.com",52],["submityourflicks.com",53],["3movs.com",53],["cambay.tv",[53,104,124,126]],["bravoerotica.net",[53,126]],["youx.xxx",53],["camclips.tv",[53,217]],["camflow.tv",[53,104,126,179,255]],["camhoes.tv",[53,104,124,126,179,255]],["xmegadrive.com",53],["xxxymovies.com",53],["xxxshake.com",53],["gayck.com",53],["xhand.com",[53,126]],["analdin.com",[53,126]],["webnovel.com",54],["schwaebische.de",55],["mercurynews.com",56],["chicoer.com",56],["dailybreeze.com",56],["dailybulletin.com",56],["dailynews.com",56],["delcotimes.com",56],["eastbaytimes.com",56],["macombdaily.com",56],["ocregister.com",56],["pasadenastarnews.com",56],["pe.com",56],["presstelegram.com",56],["redlandsdailyfacts.com",56],["reviewjournal.com",56],["santacruzsentinel.com",56],["saratogian.com",56],["sentinelandenterprise.com",56],["sgvtribune.com",56],["tampabay.com",56],["times-standard.com",56],["theoaklandpress.com",56],["trentonian.com",56],["twincities.com",56],["whittierdailynews.com",56],["bostonherald.com",56],["dailycamera.com",56],["sbsun.com",56],["dailydemocrat.com",56],["montereyherald.com",56],["orovillemr.com",56],["record-bee.com",56],["redbluffdailynews.com",56],["reporterherald.com",56],["thereporter.com",56],["timescall.com",56],["timesheraldonline.com",56],["ukiahdailyjournal.com",56],["dailylocal.com",56],["8tracks.com",57],["revealname.com",58],["fcportables.com",[59,60]],["golfchannel.com",62],["telemundodeportes.com",62],["stream.nbcsports.com",62],["gamcore.com",63],["porcore.com",63],["69games.xxx",63],["javmix.app",63],["tecknity.com",64],["haaretz.com",65],["hungama.com",65],["a-o.ninja",65],["anime-odcinki.pl",65],["kumpulmanga.org",65],["shortgoo.blogspot.com",65],["megadescarga.net",[66,67,68,69]],["megadescargas.net",[66,67,68,69]],["audioz.cc",70],["audioz.es",70],["luckydice.net",70],["adarima.org",70],["tieutietkiem.com",70],["weatherwx.com",70],["sattaguess.com",70],["winshell.de",70],["rosasidan.ws",70],["modmakers.xyz",70],["gamepure.in",70],["warrenrahul.in",70],["austiblox.net",70],["upiapi.in",70],["myownguess.in",70],["watchhentai.net",70],["thichcode.net",70],["vikistream.com",71],["eplayer.click",[71,72]],["mega4upload.com",[72,78]],["ennovelas.com",[72,78]],["n-tv.de",73],["brigitte.de",74],["stern.de",74],["foxsports.com.au",75],["canberratimes.com.au",75],["thesimsresource.com",76],["bdnewszh.com",78],["streamservicehd.click",78],["timeforbitco.in",79],["worldofbitco.in",[79,92]],["weatherx.co.in",[79,92]],["getyourbitco.in",79],["sunbtc.space",79],["ctrl.blog",80],["sportlife.es",81],["tubitv.com",81],["libertaddigital.com",82],["finofilipino.org",83],["acortarm.xyz",84],["acortame.xyz",84],["speedtest.net",85],["mysflink.blogspot.com",86],["assia.tv",87],["assia4.com",87],["assia24.com",87],["cwtvembeds.com",[89,125]],["camlovers.tv",89],["porntn.com",89],["pornissimo.org",89],["sexcams-24.com",[89,104]],["watchporn.to",89],["camwhorez.video",89],["ojogos.com.br",94],["powforums.com",95],["supforums.com",95],["studybullet.com",95],["usgamer.net",96],["recordonline.com",96],["123tvseries.co",98],["freebitcoin.win",99],["e-monsite.com",99],["coindice.win",99],["temp-mails.com",100],["freiepresse.de",101],["investing.com",[102,103]],["camhub.cc",104],["love4porn.com",104],["thotvids.com",104],["celebwhore.com",104],["cluset.com",104],["4kporn.xxx",104],["xhomealone.com",104],["lusttaboo.com",[104,373]],["mp3fiber.com",105],["suedkurier.de",106],["anysex.com",108],["gomiblog.com",109],["iptvtools.net",109],["vlist.se",110],["pornve.com",111],["coolrom.com.au",112],["bitcotasks.com",112],["pornohirsch.net",113],["marie-claire.es",114],["gamezhero.com",114],["flashgirlgames.com",114],["onlinesudoku.games",114],["mpg.football",114],["sssam.com",114],["globalnews.ca",115],["videotekaime.net",116],["drinksmixer.com",117],["leitesculinaria.com",117],["fupa.net",118],["ge-map-overlays.appspot.com",119],["browardpalmbeach.com",120],["dallasobserver.com",120],["houstonpress.com",120],["miaminewtimes.com",120],["phoenixnewtimes.com",120],["westword.com",120],["wilmaa.com",121],["nhentai.net",122],["fox.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["mac-torrent-download.net",129],["videogreen.xyz",130],["sypl.xyz",130],["tvonlinex.com",130],["playembed.xyz",130],["javhdporn.net",130],["redanimedatabase.cloud",130],["javstream.top",130],["flashplayer.fullstacks.net",132],["cloudapps.herokuapp.com",132],["youfiles.herokuapp.com",132],["temp-mail.org",133],["di.fm",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hpav.tv",139],["hpjav.tv",139],["hqtv.biz",141],["liveuamap.com",142],["filmiseriali.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["siriusfiles.com",149],["shush.se",150],["aniwatcher.com",151],["emurom.net",152],["allkpop.com",153],["azmath.info",154],["downfile.site",154],["downphanmem.com",154],["expertvn.com",154],["memangbau.com",154],["scratch247.info",154],["trangchu.news",154],["adfoc.us",154],["mynewsmedia.co",[154,244]],["sptfy.be",154],["streamcheck.link",154],["momomesh.tv",156],["kfrfansub.com",158],["thuglink.com",158],["voipreview.org",158],["audiotag.info",159],["hanime.tv",160],["pogo.com",161],["cloudvideo.tv",162],["legionjuegos.org",163],["legionpeliculas.org",163],["legionprogramas.org",163],["16honeys.com",164],["elespanol.com",165],["remodelista.com",166],["coolmathgames.com",[167,168,169,451]],["audiofanzine.com",170],["noweconomy.live",172],["howifx.com",172],["vavada5com.com",172],["hitokin.net",173],["elil.cc",174],["developerinsider.co",175],["ilprimatonazionale.it",176],["hotabis.com",176],["root-nation.com",176],["italpress.com",176],["airsoftmilsimnews.com",176],["artribune.com",176],["thehindu.com",177],["cambro.tv",[178,179]],["nibelungen-kurier.de",180],["noz.de",181],["earthgarage.com",183],["pianetamountainbike.it",184],["barchart.com",185],["modelisme.com",186],["parasportontario.ca",186],["prescottenews.com",186],["nrj-play.fr",187],["oeffentlicher-dienst.info",188],["hackingwithreact.com",189],["gutekueche.at",190],["eplfootballmatch.com",191],["peekvids.com",192],["playvids.com",192],["pornflip.com",192],["redensarten-index.de",193],["vw-page.com",194],["wwwfotografgotlin.blogspot.com",195],["freelistenonline.com",195],["securenetsystems.net",196],["viz.com",[197,198]],["queenfaucet.website",199],["0rechner.de",200],["configspc.com",201],["xopenload.me",201],["uptobox.com",201],["uptostream.com",201],["onepiece-tube.com",202],["japgay.com",203],["mega-debrid.eu",204],["dreamdth.com",205],["pijanitvor.com",205],["diaridegirona.cat",208],["diariodeibiza.es",208],["diariodemallorca.es",208],["diarioinformacion.com",208],["eldia.es",208],["emporda.info",208],["farodevigo.es",208],["laopinioncoruna.es",208],["laopiniondemalaga.es",208],["laopiniondemurcia.es",208],["laopiniondezamora.es",208],["laprovincia.es",208],["levante-emv.com",208],["mallorcazeitung.es",208],["regio7.cat",208],["superdeporte.es",208],["playpaste.com",209],["player.rtl2.de",210],["freetutorialsus.com",211],["vidlii.com",[211,225]],["iammagnus.com",211],["dailyvideoreports.net",211],["unityassets4free.com",211],["cnbc.com",212],["puzzles.msn.com",213],["metro.us",213],["newsobserver.com",213],["arkadiumhosted.com",213],["spankbang.com",214],["firefaucet.win",215],["direct-link.net",216],["direkt-wissen.com",216],["link-to.net",216],["fullhdxxx.com",218],["getintopc.com",219],["unique-tutorials.info",219],["etonline.com",220],["creatur.io",220],["drphil.com",220],["urbanmilwaukee.com",220],["ontiva.com",220],["hideandseek.world",220],["myabandonware.com",220],["mangaalarab.com",220],["kendam.com",220],["wttw.com",220],["synonyms.com",220],["definitions.net",220],["hostmath.com",220],["camvideoshub.com",220],["minhaconexao.com.br",220],["bravedown.com",220],["produsat.com",223],["12thman.com",225],["acusports.com",225],["atlantic10.com",225],["auburntigers.com",225],["baylorbears.com",225],["bceagles.com",225],["bgsufalcons.com",225],["big12sports.com",225],["bigten.org",225],["bradleybraves.com",225],["butlersports.com",225],["cmumavericks.com",225],["conferenceusa.com",225],["cyclones.com",225],["dartmouthsports.com",225],["daytonflyers.com",225],["dbupatriots.com",225],["dbusports.com",225],["denverpioneers.com",225],["fduknights.com",225],["fgcuathletics.com",225],["fightinghawks.com",225],["fightingillini.com",225],["floridagators.com",225],["friars.com",225],["friscofighters.com",225],["gamecocksonline.com",225],["goarmywestpoint.com",225],["gobison.com",225],["goblueraiders.com",225],["gobobcats.com",225],["gocards.com",225],["gocreighton.com",225],["godeacs.com",225],["goexplorers.com",225],["goetbutigers.com",225],["gofrogs.com",225],["gogriffs.com",225],["gogriz.com",225],["golobos.com",225],["gomarquette.com",225],["gopack.com",225],["gophersports.com",225],["goprincetontigers.com",225],["gopsusports.com",225],["goracers.com",225],["goshockers.com",225],["goterriers.com",225],["gotigersgo.com",225],["gousfbulls.com",225],["govandals.com",225],["gowyo.com",225],["goxavier.com",225],["gozags.com",225],["gozips.com",225],["griffinathletics.com",225],["guhoyas.com",225],["gwusports.com",225],["hailstate.com",225],["hamptonpirates.com",225],["hawaiiathletics.com",225],["hokiesports.com",225],["huskers.com",225],["icgaels.com",225],["iuhoosiers.com",225],["jsugamecocksports.com",225],["longbeachstate.com",225],["loyolaramblers.com",225],["lrtrojans.com",225],["lsusports.net",225],["morrisvillemustangs.com",225],["msuspartans.com",225],["muleriderathletics.com",225],["mutigers.com",225],["navysports.com",225],["nevadawolfpack.com",225],["niuhuskies.com",225],["nkunorse.com",225],["nuhuskies.com",225],["nusports.com",225],["okstate.com",225],["olemisssports.com",225],["omavs.com",225],["ovcsports.com",225],["owlsports.com",225],["purduesports.com",225],["redstormsports.com",225],["richmondspiders.com",225],["sfajacks.com",225],["shupirates.com",225],["siusalukis.com",225],["smcgaels.com",225],["smumustangs.com",225],["soconsports.com",225],["soonersports.com",225],["themw.com",225],["tulsahurricane.com",225],["txst.com",225],["txstatebobcats.com",225],["ubbulls.com",225],["ucfknights.com",225],["ucirvinesports.com",225],["uconnhuskies.com",225],["uhcougars.com",225],["uicflames.com",225],["umterps.com",225],["uncwsports.com",225],["unipanthers.com",225],["unlvrebels.com",225],["uoflsports.com",225],["usdtoreros.com",225],["utahstateaggies.com",225],["utepathletics.com",225],["utrockets.com",225],["uvmathletics.com",225],["uwbadgers.com",225],["villanova.com",225],["wkusports.com",225],["wmubroncos.com",225],["woffordterriers.com",225],["1pack1goal.com",225],["bcuathletics.com",225],["bubraves.com",225],["goblackbears.com",225],["golightsgo.com",225],["gomcpanthers.com",225],["goutsa.com",225],["mercerbears.com",225],["pirateblue.com",225],["pirateblue.net",225],["pirateblue.org",225],["quinnipiacbobcats.com",225],["towsontigers.com",225],["tribeathletics.com",225],["tribeclub.com",225],["utepminermaniacs.com",225],["utepminers.com",225],["wkutickets.com",225],["aopathletics.org",225],["atlantichockeyonline.com",225],["bigsouthnetwork.com",225],["bigsouthsports.com",225],["chawomenshockey.com",225],["dbupatriots.org",225],["drakerelays.org",225],["ecac.org",225],["ecacsports.com",225],["emueagles.com",225],["emugameday.com",225],["gculopes.com",225],["godrakebulldog.com",225],["godrakebulldogs.com",225],["godrakebulldogs.net",225],["goeags.com",225],["goislander.com",225],["goislanders.com",225],["gojacks.com",225],["gomacsports.com",225],["gseagles.com",225],["hubison.com",225],["iowaconference.com",225],["ksuowls.com",225],["lonestarconference.org",225],["mascac.org",225],["midwestconference.org",225],["mountaineast.org",225],["niu-pack.com",225],["nulakers.ca",225],["oswegolakers.com",225],["ovcdigitalnetwork.com",225],["pacersports.com",225],["rmacsports.org",225],["rollrivers.com",225],["samfordsports.com",225],["uncpbraves.com",225],["usfdons.com",225],["wiacsports.com",225],["alaskananooks.com",225],["broncathleticfund.com",225],["cameronaggies.com",225],["columbiacougars.com",225],["etownbluejays.com",225],["gobadgers.ca",225],["golancers.ca",225],["gometrostate.com",225],["gothunderbirds.ca",225],["kentstatesports.com",225],["lehighsports.com",225],["lopers.com",225],["lycoathletics.com",225],["lycomingathletics.com",225],["maraudersports.com",225],["mauiinvitational.com",225],["msumavericks.com",225],["nauathletics.com",225],["nueagles.com",225],["nwusports.com",225],["oceanbreezenyc.org",225],["patriotathleticfund.com",225],["pittband.com",225],["principiaathletics.com",225],["roadrunnersathletics.com",225],["sidearmsocial.com",225],["snhupenmen.com",225],["stablerarena.com",225],["stoutbluedevils.com",225],["uwlathletics.com",225],["yumacs.com",225],["collegefootballplayoff.com",225],["csurams.com",225],["cubuffs.com",225],["gobearcats.com",225],["gohuskies.com",225],["mgoblue.com",225],["osubeavers.com",225],["pittsburghpanthers.com",225],["rolltide.com",225],["texassports.com",225],["thesundevils.com",225],["uclabruins.com",225],["wvuathletics.com",225],["wvusports.com",225],["arizonawildcats.com",225],["calbears.com",225],["cuse.com",225],["georgiadogs.com",225],["goducks.com",225],["goheels.com",225],["gostanford.com",225],["insidekstatesports.com",225],["insidekstatesports.info",225],["insidekstatesports.net",225],["insidekstatesports.org",225],["k-stateathletics.com",225],["k-statefootball.net",225],["k-statefootball.org",225],["k-statesports.com",225],["k-statesports.net",225],["k-statesports.org",225],["k-statewomenshoops.com",225],["k-statewomenshoops.net",225],["k-statewomenshoops.org",225],["kstateathletics.com",225],["kstatefootball.net",225],["kstatefootball.org",225],["kstatesports.com",225],["kstatewomenshoops.com",225],["kstatewomenshoops.net",225],["kstatewomenshoops.org",225],["ksuathletics.com",225],["ksusports.com",225],["scarletknights.com",225],["showdownforrelief.com",225],["syracusecrunch.com",225],["texastech.com",225],["theacc.com",225],["ukathletics.com",225],["usctrojans.com",225],["utahutes.com",225],["utsports.com",225],["wsucougars.com",225],["mangadods.com",225],["tricksplit.io",225],["litecoinads.com",225],["template.city",225],["fangraphs.com",226],["4players.de",[227,289]],["buffed.de",227],["gamesaktuell.de",227],["gamezone.de",227],["pcgames.de",227],["player.pcgameshardware.de",227],["videogameszone.de",227],["spieletipps.de",227],["planetaminecraft.com",228],["flyad.vip",229],["lapresse.ca",230],["kolyoom.com",231],["ilovephd.com",231],["kseriesubthai.com",232],["upstream.to",233],["negumo.com",234],["games.wkb.jp",[235,236]],["channelmyanmar.org",[237,238]],["u-s-news.com",238],["fandom.com",239],["kenshi.fandom.com",240],["hausbau-forum.de",241],["fake-it.ws",242],["laksa19.github.io",243],["revadvert.com",244],["1shortlink.com",245],["nesia.my.id",246],["makemoneywithurl.com",247],["resetoff.pl",248],["sexodi.com",248],["cdn77.org",249],["howtofixwindows.com",250],["3sexporn.com",251],["momxxxsex.com",251],["myfreevintageporn.com",251],["penisbuyutucum.net",251],["lightnovelworld.com",252],["ujszo.com",253],["newsmax.com",254],["bobs-tube.com",255],["nadidetarifler.com",256],["siz.tv",256],["suzylu.co.uk",[257,258]],["onworks.net",259],["yabiladi.com",259],["homeairquality.org",261],["downloadsoft.net",262],["imgair.net",263],["imgblaze.net",263],["imgfrost.net",263],["pixsera.net",263],["vestimage.site",263],["imgwia.buzz",263],["testlanguages.com",264],["newsinlevels.com",264],["videosinlevels.com",264],["my-code4you.blogspot.com",265],["vlxxs.net",266],["rapelust.com",266],["vtube.to",266],["vtplay.net",266],["desitelugusex.com",266],["xvideos-downloader.net",266],["xxxvideotube.net",266],["sdefx.cloud",266],["nozomi.la",266],["moviesonlinefree.net",266],["flickr.com",267],["firefile.cc",268],["pestleanalysis.com",268],["kochamjp.pl",268],["tutorialforlinux.com",268],["724indir.com",268],["whatsaero.com",268],["animeblkom.net",[268,283]],["blkom.com",268],["globes.co.il",[269,270]],["jardiner-malin.fr",271],["tw-calc.net",272],["ohmybrush.com",273],["talkceltic.net",274],["zdam.xyz",275],["mentalfloss.com",276],["uprafa.com",277],["cube365.net",278],["nightfallnews.com",[279,280]],["badassdownloader.com",281],["quickporn.net",282],["aosmark.com",284],["theappstore.org",284],["newyorker.com",285],["brighteon.com",286],["more.tv",287],["video1tube.com",288],["alohatube.xyz",288],["link.cgtips.org",290],["hentaicloud.com",291],["netfapx.com",293],["androidtvbox.eu",295],["madeinvilnius.lt",295],["paperzonevn.com",296],["hentaienglish.com",297],["hentaiporno.xxx",297],["venge.io",[298,299]],["btcbux.io",300],["chillicams.net",301],["rpdrlatino.live",301],["its.porn",[302,303]],["atv.at",304],["2ndrun.tv",305],["rackusreads.com",305],["exerror.com",305],["toppixxx.com",306],["temp-phone-number.com",307],["jetpunk.com",309],["imgur.com",310],["hentai-party.com",311],["hentaicomics.pro",311],["xxx-comics.pro",311],["genshinimpactcalculator.com",314],["mysexgames.com",315],["embed.indavideo.hu",318],["coinurl.net",[319,320]],["mdn.rest",321],["gdr-online.com",322],["mmm.dk",323],["iqiyi.com",[324,325]],["m.iqiyi.com",326],["japopav.tv",327],["lvturbo.com",327],["nbcolympics.com",328],["downloads.descendant.me",329],["apkhex.com",330],["indiansexstories2.net",331],["issstories.xyz",331],["1340kbbr.com",332],["gorgeradio.com",332],["kduk.com",332],["kedoam.com",332],["kejoam.com",332],["kelaam.com",332],["khsn1230.com",332],["kjmx.rocks",332],["kloo.com",332],["klooam.com",332],["klykradio.com",332],["kmed.com",332],["kmnt.com",332],["kool991.com",332],["kpnw.com",332],["kppk983.com",332],["krktcountry.com",332],["ktee.com",332],["kwro.com",332],["kxbxfm.com",332],["thevalley.fm",332],["dsocker1234.blogspot.com",333],["blick.ch",335],["mgnet.xyz",336],["designtagebuch.de",337],["pixroute.com",338],["calculator-online.net",339],["pxrnxx.xyz",340],["amateur-couples.com",340],["slutdump.com",340],["porngames.club",341],["sexgames.xxx",341],["111.90.159.132",342],["battleplan.news",342],["mobile-tracker-free.com",343],["pfps.gg",344],["ac-illust.com",[345,346]],["photo-ac.com",[345,346]],["social-unlock.com",347],["ninja.io",348],["sourceforge.net",349],["samfirms.com",350],["banned.video",351],["freeworldnews.tv",351],["h-flash.com",[352,353,354,355]],["huffpost.com",356],["ingles.com",357],["surfline.com",358],["play.tv3.ee",359],["trendyoum.com",360],["bulbagarden.net",361],["doomovie-hd.com",362],["madoohd.com",362],["moviestars.to",363],["hollywoodlife.com",364],["searchresults.cc",365],["mat6tube.com",366],["textstudio.co",367],["newtumbl.com",368],["nevcoins.club",370],["mail.com",371],["erome.com",374],["oggi.it",[375,376]],["video.gazzetta.it",[375,376]],["mangakita.net",377],["avpgalaxy.net",378],["mhma12.tech",379],["panda-novel.com",380],["zebranovel.com",380],["lightsnovel.com",380],["eaglesnovel.com",380],["zadfaucet.com",381],["ewrc-results.com",382],["kizi.com",383],["cyberscoop.com",384],["fedscoop.com",384],["canale.live",385],["loawa.com",386],["ygosu.com",386],["sportalkorea.com",386],["algumon.com",386],["hancinema.net",386],["enetnews.co.kr",386],["edaily.co.kr",386],["mafiatown.pl",[387,388]],["jeep-cj.com",389],["sponsorhunter.com",390],["cloudcomputingtopics.net",391],["likecs.com",392],["tiscali.it",393],["serialy.io",394],["mdn.lol",395],["btcbitco.in",395],["btcsatoshi.net",395],["cempakajaya.com",395],["crypto4yu.com",395],["readbitcoin.org",395],["wiour.com",395],["linkspy.cc",396],["tutelehd3.xyz",397],["dirty.pink",[398,399,400]],["adshnk.com",401],["chattanoogan.com",402],["socialmediagirls.com",403],["windowspro.de",404],["snapinsta.app",405],["mydaddy.cc",406],["roadtrippin.fr",407],["redketchup.io",408],["anyporn.com",[409,423]],["bravoporn.com",409],["bravoteens.com",409],["crocotube.com",409],["hellmoms.com",409],["hellporno.com",409],["sex3.com",409],["tubewolf.com",409],["xbabe.com",409],["xcum.com",409],["zedporn.com",409],["imagetotext.info",410],["infokik.com",411],["freepik.com",412],["ddwloclawek.pl",413],["videogamer.com",414],["wrestlinginc.com",414],["my-subs.co",415],["plaion.com",416],["rapid-cloud.co",417],["slideshare.net",[418,419]],["ustreasuryyieldcurve.com",420],["goo.st",421],["freevpshere.com",421],["softwaresolutionshere.com",421],["staige.tv",424],["bondagevalley.cc",425],["androidadult.com",426],["watchtv24.com",427],["medscape.com",428],["bestx.stream",429],["arkadium.com",430],["app.blubank.com",431],["lifesurance.info",432],["doroni.me",433],["egao.in",433],["kusonime.com",433],["teamskeet.com",434],["tacobell.com",435],["webtoons.com",[436,437]],["zefoy.com",439],["br.de",440],["pasteboard.co",441],["avclub.com",442],["clickhole.com",442],["deadspin.com",442],["gizmodo.com",442],["jalopnik.com",442],["jezebel.com",442],["kotaku.com",442],["lifehacker.com",442],["splinternews.com",442],["theinventory.com",442],["theonion.com",442],["theroot.com",442],["thetakeout.com",442],["pewresearch.org",442],["los40.com",[443,444]],["verizon.com",445],["humanbenchmark.com",446],["politico.com",447],["officedepot.co.cr",[448,449]],["usnews.com",450],["warscrap.io",452],["zee5.com",453],["gala.fr",454],["geo.fr",454],["voici.fr",454],["gloucestershirelive.co.uk",455],["scandichotels.com",456],["stylist.co.uk",457],["nettiauto.com",458],["thaiairways.com",[459,460]],["cerbahealthcare.it",[461,462]],["tiendaenlinea.claro.com.ni",[463,464]],["tieba.baidu.com",465],["linktr.ee",466],["rjno1.com",467],["atozmath.com",[468,469,470,471,472,473,474]]]);

const entitiesMap = new Map([["vidsrc",6],["watch-series",6],["watchseries",6],["vev",6],["vidop",6],["vidup",6],["starmusiq",9],["wcofun",9],["kissasian",11],["gogoanime",[11,19]],["1movies",[11,18]],["xmovies8",11],["animeheaven",11],["0123movies",11],["gostream",11],["gomovies",11],["hamsterix",12],["xhamster",12],["xhamster1",12],["xhamster10",12],["xhamster11",12],["xhamster12",12],["xhamster13",12],["xhamster14",12],["xhamster15",12],["xhamster16",12],["xhamster17",12],["xhamster18",12],["xhamster19",12],["xhamster20",12],["xhamster2",12],["xhamster3",12],["xhamster4",12],["xhamster5",12],["xhamster7",12],["xhamster8",12],["vidlox",[13,14]],["primewire",15],["streanplay",[15,17]],["sbplay",15],["milfnut",15],["fmovies",19],["9anime",19],["hqq",23],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["urlty",24],["seulink",24],["shrink",24],["tmearn",24],["megalink",24],["linkviet",24],["miniurl",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,220]],["lite-link",24],["pureshort",24],["adcorto",24],["dulinks",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["financerites",24],["camwhores",[25,36,88,89,90]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,206,207]],["xtits",[53,126]],["pouvideo",61],["povvideo",61],["povw1deo",61],["povwideo",61],["powv1deo",61],["powvibeo",61],["powvideo",61],["powvldeo",61],["acortalo",[66,67,68,69]],["acortar",[66,67,68,69]],["plyjam",[71,72]],["fxporn69",77],["vipbox",78],["viprow",78],["desbloqueador",84],["xberuang",86],["teknorizen",86],["linkberuang",86],["kickassanime",91],["subtorrents",93],["subtorrents1",93],["newpelis",93],["pelix",93],["allcalidad",93],["infomaniakos",93],["filecrypt",97],["tornadomovies",98],["sexwebvideo",104],["mangovideo",104],["icdrama",110],["mangasail",110],["file4go",112],["asianclub",130],["anitube",137],["mixdrop",140],["azsoft",154],["pickcrackpasswords",157],["uploadev",171],["ver-pelis-online",182],["ancient-origins",191],["lookcam",220],["lootlinks",220],["dpstream",222],["bluemediafiles",224],["docer",248],["pixlev",263],["skymovieshd",266],["dvdplay",266],["crackstreams",294],["123movieshd",308],["uproxy",312],["animesa",313],["cinecalidad",[316,317]],["apkmaven",369],["gmx",372],["gamereactor",422]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    arg1 = '',
    arg2 = '',
    arg3 = ''
) {
    const details = typeof arg1 !== 'object'
        ? { prop: arg1, value: arg2 }
        : arg1;
    if ( arg3 !== '' ) {
        if ( /^\d$/.test(arg3) ) {
            details.options = [ arg3 ];
        } else {
            details.options = Array.from(arguments).slice(3);
        }
    }
    const { prop: chain = '', value: cValue = '' } = details;
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const options = details.options || [];
    const safe = safeSelf();
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" ) {
            cValue = '';
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = JSON.parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( options.includes('asFunction') ) {
            cValue = ( ) => cValue;
        } else if ( options.includes('asCallback') ) {
            cValue = ( ) => (( ) => cValue);
        } else if ( options.includes('asResolved') ) {
            cValue = Promise.resolve(cValue);
        } else if ( options.includes('asRejected') ) {
            cValue = Promise.reject(cValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, options);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const safe = {
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'log': console.log.bind(console),
        'uboLog': function(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

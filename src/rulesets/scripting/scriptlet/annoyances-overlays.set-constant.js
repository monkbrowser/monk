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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"Object.prototype.renderTo\",\"undefined\"]","[\"Object.prototype.blockId\",\"undefined\"]","[\"Object.prototype.hasShadowDomSupport\",\"undefined\"]","[\"Object.prototype.BannerDirect\",\"undefined\"]","[\"Object.prototype.isAdblockEnable\",\"noopFunc\"]","[\"admiral\",\"noopFunc\"]","[\"ezAardvarkDetected\",\"false\"]","[\"hasAdblock\",\"false\"]","[\"ads.adBlockDetected\",\"false\"]","[\"penci_adlbock\",\"undefined\"]","[\"blockingAds\",\"false\"]","[\"an_chk\",\"0\"]","[\"nerverblock_callback\",\"noopFunc\"]","[\"showAds\",\"true\"]","[\"isAdblockEnabled\",\"false\"]","[\"popUpInfo\",\"noopFunc\"]","[\"jsData.adsEnabled\",\"false\"]","[\"brighteonSpecial\",\"true\"]","[\"adblockV1\",\"true\"]","[\"adblocker_is_off\",\"true\"]","[\"TfmediaExtFolEngineLoaded\",\"true\"]","[\"Object.prototype.rellect_adblock_detector\",\"false\"]","[\"cmnnrunads\",\"true\"]","[\"isAdblockEnable\",\"false\"]","[\"canRunAds\",\"true\"]","[\"adsAllowed2\",\"true\"]","[\"cwAdblockDisabled1\",\"true\"]","[\"cwAdblockDisabled2\",\"true\"]","[\"adsbygoogle.loaded\",\"true\"]","[\"VMG.Components.Adblock\",\"false\"]","[\"detect\",\"undefined\"]","[\"google_jobrunner\",\"noopFunc\"]","[\"isAdBlockActive\",\"false\"]","[\"adBlockerDetected\",\"false\"]","[\"google_ad_block\",\"false\"]","[\"googlefc\",\"null\"]","[\"adblock\",\"false\"]","[\"adv_openx_oas_ads\",\"true\"]","[\"icy_veins_blocked\",\"false\"]","[\"inxBX.failed\",\"false\"]","[\"cr\",\"0\"]","[\"gn\",\"true\"]","[\"window.google_ad_status\",\"1\"]","[\"alert\",\"undefined\"]","[\"niceAdsCheck\",\"true\"]","[\"google_ad_status\",\"1\"]","[\"adning_no_adblock\",\"true\"]","[\"jQuery.adblock\",\"false\"]","[\"AdBlocker\",\"false\"]","[\"mb.advertisingShouldBeEnabled\",\"false\"]","[\"checkAdblockBait\",\"noopFunc\"]","[\"MP.lib.adBlockEnabled\",\"noopFunc\"]","[\"adBlockEnabled\",\"false\"]","[\"adblockDetector\",\"noopFunc\"]","[\"isAdBlockEnabled\",\"false\"]","[\"pqdxwidthqt\",\"false\"]","[\"googlefc.getAdBlockerStatus\",\"noopFunc\"]","[\"adsOk\",\"true\"]","[\"flatPM_adbDetect\",\"noopFunc\"]","[\"XenForo.rellect.AdBlockDetector\",\"noopFunc\"]","[\"ab\",\"false\"]","[\"data.ad_free\",\"true\"]","[\"use_adblock\",\"false\"]","[\"adBlockDetected\",\"false\"]","[\"sugabuAdsLoaded\",\"true\"]","[\"SD_IS_BLOCKING\",\"false\"]","[\"sd_adBlockDetector\",\"{}\"]","[\"SD_BLOCKTHROUGH\",\"true\"]","[\"ConcertAds\",\"true\"]","[\"window.adsEnabled\",\"true\"]","[\"_ABE\",\"undefined\"]","[\"Adblock\",\"false\"]","[\"foolish_script_is_here\",\"noopFunc\"]","[\"showBanner600\",\"true\"]","[\"window.canRunAds\",\"true\"]","[\"ab.isTrig\",\"false\"]","[\"adsbygoogle.push.length\",\"1\"]","[\"_ads\",\"true\"]","[\"__tnt.advertisements\",\"noopFunc\"]","[\"advanced_ads_pro.adblocker_active\",\"false\"]","[\"ads\",\"true\"]","[\"AdBlockSELECTOR\",\"undefined\"]","[\"adBlockerReady\",\"false\"]","[\"adFilters\",\"undefined\"]","[\"Object.prototype.cABNoCheck\",\"undefined\"]","[\"WO.adblock.useAdblocker\",\"false\"]","[\"window.abc\",\"false\"]","[\"__NUXT__.state.services.features.shoppingExtensionPopupArticle\",\"undefined\"]","[\"openOverlaySignup\",\"noopFunc\"]","[\"GEMG.ConversionModule\",\"noopFunc\"]","[\"mainBottomBanner\",\"noopFunc\"]","[\"app.enablePopup\",\"false\"]","[\"wp_subscribe_popup\",\"noopFunc\"]","[\"initExitIntent\",\"noopFunc\"]","[\"window.Unauthorized2\",\"undefined\"]","[\"window.PageBottomBanners.initUnauthBanner\",\"noopFunc\"]","[\"_sharedData.is_whitelisted_crawl_bot\",\"true\"]","[\"Notification.requestPermission\",\"noopFunc\"]","[\"firebase.messaging\",\"noopFunc\"]","[\"Object.prototype.PushSubscription\",\"''\"]","[\"PushSubscription\",\"undefined\"]","[\"PushManager\",\"undefined\"]","[\"navigator.geolocation\",\"{}\"]","[\"arrJsConfig.enablePushNotification\",\"0\"]","[\"smartech\",\"noopFunc\"]","[\"WSI.contentPersonalization.hideEmailCaptureOverlay\",\"true\"]","[\"show_dimissable_registration\",\"false\"]","[\"PASSER_videoPAS_apres\",\"0\"]","[\"warning_widget.check_ad_block_status\",\"noopFunc\"]","[\"alb\",\"false\"]","[\"killads\",\"true\"]","[\"adsAreBlocked\",\"false\"]","[\"displayed\",\"false\"]","[\"nebula.session.flags.adblock\",\"undefined\"]","[\"_adBlockCheck\",\"true\"]","[\"navigator.storage.estimate\",\"undefined\"]","[\"valid_user\",\"true\"]","[\"is_adblocker_in_use\",\"false\"]","[\"Drupal.behaviors.detectAdblockers\",\"noopFunc\"]","[\"disableSelection\",\"noopFunc\"]","[\"ADBdetected\",\"noopFunc\"]","[\"BIA.ADBLOCKER\",\"false\"]","[\"samDetected\",\"true\"]","[\"adBlockFunction\",\"trueFunc\"]","[\"checkAds\",\"trueFunc\"]","[\"google_jobrunner\",\"true\"]","[\"isAdblockDisabled\",\"true\"]","[\"checkPrivacyWall\",\"noopFunc\"]","[\"document.oncontextmenu\",\"null\"]","[\"nocontext\",\"noopFunc\"]","[\"adsAreShown\",\"true\"]","[\"abd\",\"false\"]","[\"detector_active\",\"true\"]","[\"aoezone_adchecker\",\"true\"]","[\"pageService.initDownloadProtection\",\"noopFunc\"]","[\"detectPrivateMode\",\"noopFunc\"]","[\"webkitRequestFileSystem\",\"undefined\"]","[\"adsbygoogle\",\"null\"]","[\"ads_not_blocked\",\"true\"]","[\"hideBannerBlockedMessage\",\"true\"]","[\"bAdBlocker\",\"false\"]","[\"blurred\",\"false\"]","[\"document.oncontextmenu\",\"undefined\"]","[\"alert\",\"trueFunc\"]","[\"TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount\",\"trueFunc\"]","[\"better_ads_adblock\",\"0\"]","[\"console.clear\",\"trueFunc\"]","[\"console.debug\",\"trueFunc\"]","[\"adBlock\",\"false\"]","[\"adsEnabled\",\"true\"]","[\"ads_enabled\",\"true\"]","[\"better_ads_adblock\",\"null\"]","[\"f12lock\",\"false\"]","[\"document.onselectstart\",\"null\"]","[\"document.onkeyup\",\"null\"]","[\"document.ondragstart\",\"null\"]","[\"commonUtil.openToast\",\"null\"]","[\"NS_TVER_EQ.checkEndEQ\",\"trueFunc\"]","[\"mps._queue.abdetect\",\"null\"]","[\"fuckAdBlock\",\"trueFunc\"]","[\"abp\",\"false\"]","[\"document.onselectstart\",\"noopFunc\"]","[\"document.onkeydown\",\"noopFunc\"]","[\"rwt\",\"noopFunc\"]","[\"getSelection\",\"undefined\"]","[\"document.onkeydown\",\"null\"]","[\"console.clear\",\"noopFunc\"]","[\"document.oncontextmenu\",\"noopFunc\"]","[\"x5engine.utils.imCodeProtection\",\"null\"]","[\"pbi_analytics\",\"true\"]","[\"ansFrontendGlobals.settings.signupWallType\",\"undefined\"]","[\"onload\",\"null\"]","[\"document.documentElement.AdBlockDetection\",\"noopFunc\"]","[\"adblock\",\"0\"]","[\"document.ondragstart\",\"noopFunc\"]","[\"document.onmousedown\",\"noopFunc\"]","[\"disableselect\",\"trueFunc\"]","[\"document.onkeypress\",\"null\"]","[\"document.oncontextmenu\",\"''\"]","[\"document.onselectstart\",\"''\"]","[\"document.onkeydown\",\"''\"]","[\"document.onmousedown\",\"''\"]","[\"document.onclick\",\"''\"]","[\"document.body.onmouseup\",\"null\"]","[\"document.oncopy\",\"null\"]","[\"document.onkeydown\",\"trueFunc\"]","[\"document.body.oncut\",\"null\"]","[\"document.body.oncopy\",\"null\"]","[\"console.log\",\"noopFunc\"]","[\"document.ondragstart\",\"trueFunc\"]","[\"document.onselectstart\",\"trueFunc\"]","[\"jsData.hasVideoMeteringUnlogEnabled\",\"undefined\"]","[\"lepopup_abd_enabled\",\"''\"]","[\"console.clear\",\"undefined\"]","[\"Object.prototype.preroll\",\"[]\"]","[\"document.oncontextmenu\",\"trueFunc\"]","[\"devtoolsDetector\",\"undefined\"]","[\"Object.prototype.bgOverlay\",\"noopFunc\"]","[\"Object.prototype.fixedContentPos\",\"noopFunc\"]","[\"console.dir\",\"noopFunc\"]","[\"navigator.userAgent\",\"''\"]","[\"devtoolIsOpening\",\"noopFunc\"]","[\"devtoolIsOpening\",\"undefined\"]","[\"securityTool.disableRightClick\",\"noopFunc\"]","[\"securityTool.disableF12\",\"noopFunc\"]","[\"securityTool.disableCtrlP\",\"noopFunc\"]","[\"securityTool.disableCtrlS\",\"noopFunc\"]","[\"securityTool.disablePrintScreen\",\"noopFunc\"]","[\"securityTool.disablePrintThisPage\",\"noopFunc\"]","[\"securityTool.disableElementForPrintThisPage\",\"noopFunc\"]","[\"mousehandler\",\"noopFunc\"]","[\"checkAds\",\"noopFunc\"]","[\"stopPrntScr\",\"noopFunc\"]","[\"disableSelection\",\"undefined\"]","[\"traffective\",\"true\"]","[\"devtoolsDetector\",\"1\"]","[\"flashvars.autoplay\",\"''\"]","[\"document.body.oncopy\",\"null\",\"3\"]","[\"document.body.onselectstart\",\"null\",\"3\"]","[\"document.body.oncontextmenu\",\"null\",\"3\"]","[\"Time_Start\",\"0\"]","[\"ytInitialPlayerResponse.auxiliaryUi.messageRenderers.enforcementMessageViewModel\",\"undefined\"]","[\"DD\",\"trueFunc\"]","[\"document.oncontextmenu\",\"null\",\"3\"]","[\"Object.prototype._detectLoop\",\"noopFunc\"]","[\"forbiddenList\",\"[]\"]"];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,97]],["24smi.org",1],["echo.msk.ru",[2,3,99]],["my.mail.ru",4],["citizen-times.com",5],["tennessean.com",5],["clarionledger.com",5],["phillyburbs.com",5],["usatoday.com",[5,8]],["wrestlinginc.com",5],["videogamer.com",5],["motorbiscuit.com",5],["grandprix247.com",5],["familyminded.com",5],["xcalibrscans.com",5],["cbsnews.com",5],["finviz.com",5],["ign.com",5],["workandmoney.com",5],["today.com",5],["rottentomatoes.com",[5,158]],["walterfootball.com",5],["dotesports.com",5],["boredpanda.com",5],["cleveland.com",5],["thewindowsclub.com",6],["android.com.pl",7],["fosslinux.com",9],["nexusmods.com",10],["pixwox.com",11],["1001tracklists.com",13],["autogaleria.pl",14],["basicweb.ru",15],["brainly.com",16],["brighteon.com",17],["cda.pl",18],["chefkoch.de",19],["chip.de",20],["civicx.com",21],["comnuan.com",22],["corriere.it",23],["creatur.io",24],["drnasserelbatal.com",24],["file.fm",24],["files.fm",24],["gamehag.com",24],["onlinehashcrack.com",24],["scantrad.net",24],["timebucks.com",24],["uderent.com",24],["ctrlv.cz",25],["cx30-forum.de",[26,27]],["telefon-treff.de",[26,27]],["cyberpedia.su",28],["kukuo.tw",28],["studopedia.info",28],["infopedia.su",28],["studopedia.net",28],["studopedia.su",28],["studopedia.org",28],["studopedia.ru",28],["studopedia.com.ua",28],["lektsii.org",28],["mydocx.ru",28],["dallasobserver.com",29],["digilibraries.com",30],["dniwolne.eu",31],["jeshoots.com",31],["webcamtaxi.com",31],["doodlr.io",32],["evades.io",33],["everyeye.it",34],["foxnews.com",35],["gameblog.fr",36],["lapumia.org",36],["gazzetta.it",37],["icy-veins.com",38],["inbox.lv",39],["inoreader.com",[40,41]],["investing.com",42],["it-actual.ru",43],["lowcygier.pl",44],["malaysiastock.biz",45],["marriedgames.com.br",46],["megagames.com",47],["metasrc.com",48],["meteoblue.com",49],["mgsm.pl",50],["minijuegos.com",51],["miniwebtool.com",52],["mrexcel.com",53],["nu.nl",[54,117]],["easy-learn-tech.info",55],["one-click-tutorials.info",55],["solvetube.site",55],["getintopc.com",55],["preguntandroid.com",56],["iteramos.com",56],["pyrogram.org",57],["qiwihelp.net",58],["r3owners.net",59],["remont-aud.net",60],["salon.com",[61,62]],["satelliteguys.us",63],["turkmmo.com",63],["signupgenius.com",64],["ingles.com",[65,66,67]],["spanishdict.com",[65,66,67]],["starsandstripesfc.com",68],["polygon.com",68],["strangermeetup.com",[69,149]],["thec64community.online",70],["thehindu.com",71],["titulky.com",[72,73]],["ucoin.net",74],["venea.net",75],["vimm.net",76],["wikihow.com",77],["wvnews.com",78],["xgp.pl",79],["yorumbudur.com",80],["yusepjaelani.blogspot.com",81],["weather.com",82],["m.rp5.ru",83],["m.rp5.by",83],["m.rp5.kz",83],["m.rp5.co.uk",83],["m.rp5.md",83],["rp5.ru",84],["rp5.ua",84],["rp5.by",84],["rp5.kz",84],["rp5.co.uk",84],["rp5.md",84],["wetteronline.de",85],["hdrezkahs920s.org",86],["hdrezka.in",86],["hdrezkat5ee2w.org",86],["hdrezkagdvv2b.net",86],["hdrezka66yhfg.net",86],["hdrezka77ftyy.net",86],["hdrezka.rest",86],["hdrezkaffsg67.net",86],["hdrezkafjk2he.net",86],["hdrezkahf22hh.net",86],["hdrezkahdg24s.net",86],["hdrezkabbdh4d.net",86],["hdrezkajjfhr5.net",86],["27p6qp79zyr1.net",86],["hdrezka19139.org",86],["hdrezkap3g.org",86],["hdrezkapez.org",86],["hdrezkapoi.org",86],["hdrezkarty.org",86],["hdrezkacvb.org",86],["hdrezka.ag",86],["upivi.com",86],["hdrezka.me",86],["ikinopoisk.com",86],["kinopub.me",86],["3ivi.com",86],["rezkify.com",86],["aghdrezka.com",86],["hdrezka.re",86],["bestofkinopoisk.com",86],["rezkance.com",86],["rezkery.com",86],["rezkily.com",86],["ezhdrezka.com",86],["akinopoisk.com",86],["hdrezkaonline.com",86],["drhdrezka.com",86],["mrhdrezka.com",86],["hdrezka.sh",86],["ehdrezka.com",86],["nukinopoisk.com",86],["livekinopoisk.com",86],["betahdrezka.com",86],["cokinopoisk.com",86],["hdrezka-ag.com",86],["hdrezka.club",86],["hdrezka.cm",86],["hdrezka.co",86],["hdrezka.name",86],["hdrezka.site",86],["hdrezka.today",86],["hdrezka.tv",86],["hdrezka.website",86],["hdrezkaag.net",86],["hdrezkaweb.com",86],["hdrezkayou.com",86],["instahdrezka.com",86],["myhdrezka.com",86],["freehdrezka.com",86],["rezka.ag",86],["tryhdrezka.com",86],["cnet.com",87],["edurev.in",88],["defenseone.com",89],["govexec.com",89],["nextgov.com",89],["route-fifty.com",89],["ktmmobile.com",90],["startech.com.bd",91],["onlinecourses.ooo",92],["juracademy.de",93],["vk.com",[94,95]],["instagram.com",96],["offidocs.com",97],["onedio.com",97],["hpplus.jp",97],["fullfilmcibaba1.com",97],["joom.com",97],["nbc.com",97],["sport-express.ru",97],["maximum.ru",97],["ch3plus.com",97],["dropmefiles.com",97],["reddit.com",97],["life.ru",97],["macwelt.de",98],["pcwelt.de",98],["itemsatis.com",100],["dailymail.co.uk",101],["auchan.ua",102],["quizangel.com",103],["binge.buzz",104],["pbteen.com",105],["potterybarn.com",105],["potterybarnkids.com",105],["westelm.com",105],["williams-sonoma.com",105],["magicvalley.com",106],["brutal.io",7],["impots.gouv.fr",107],["realcleardefense.com",108],["readcomiconline.to",109],["xclient.info",110],["bejson.com",110],["gardenista.com",111],["opensubtitles.org",112],["gearside.com",113],["nytimes.com",[114,115]],["tvtropes.org",116],["justtrucks.com.au",118],["cittadinanza.biz",119],["glistranieri.it",119],["viralinindia.net",[119,129]],["ideapod.com",[119,129]],["ieltsliz.com",119],["privivkainfo.ru",119],["awebstories.com",[119,212]],["ancient.eu",120],["intramed.net",36],["protest.eu",121],["northwestfirearms.com",122],["techkings.org",122],["spookshow.net",123],["fosshub.com",124],["pokemonforever.com",125],["carsguide.com.au",126],["humo.be",127],["apksecured.com",128],["intergate.info",128],["alphapolis.co.jp",[128,153]],["chronologia.pl",[128,153]],["reportergazeta.pl",[128,153,155]],["odiarioonline.com.br",[128,165]],["nordkorea-info.de",128],["geotips.net",[128,171]],["sporizle1.pw",128],["televisiongratishd.com",[128,165,177]],["noweconomy.live",128],["naaree.com",[128,165]],["cda-hd.cc",128],["hqq.to",[128,166,185]],["tv-tokyo.co.jp",128],["arti-definisi-pengertian.info",128],["webwereld.nl",130],["palemoon.org",131],["wheel-size.com",132],["aoezone.net",133],["radioony.fm",134],["mexiconewsdaily.com",135],["technologyreview.com",136],["bdcraft.net",137],["wired.co.uk",138],["gq-magazine.co.uk",138],["glamourmagazine.co.uk",138],["buienradar.nl",139],["watson.de",140],["clk.ink",141],["zerodot1.gitlab.io",[142,143]],["1009thecat.com",144],["1013katy.com",144],["1013themix.com",144],["1015jackfm.com",144],["1015khits.com",144],["1015thefox.com",144],["1017thebeach.com",144],["1017theteam.com",144],["1019hot.com",144],["1019online.com",144],["1019thekeg.com",144],["101thefox.net",144],["101wkqx.com",144],["1021nashicon.com",144],["1021thefox.com",144],["1023thewolf.com",144],["1025jackfm.com",144],["1027thevibe.com",144],["1029nashicon.com",144],["102thebear.com",144],["1031nowfm.com",144],["1031radiom.com",144],["1035memphis.com",144],["1035thegame.com",144],["1035wrbo.com",144],["1037nash.com",144],["1039bobfm.com",144],["1039wvbo.com",144],["1041wdlt.com",144],["1043thebridge.com",144],["1043thebridge.net",144],["1043thevibe.com",144],["1045thedan.com",144],["1045thezone.com",144],["1045wjjk.com",144],["1047krez.com",144],["1049nashicon.com",144],["1049thehits.com",144],["104thehawk.com",144],["1050talk.com",144],["1053classichits.com",144],["1053hotfm.com",144],["1053thebear.com",144],["1053thepoint.com",144],["1053thepoint.net",144],["1053wow.com",144],["1055kbuck.com",144],["1055thecat.com",144],["1057kokz.com",144],["1057nowfm.com",144],["1057thebear.com",144],["1057thex.com",144],["1057thexrocks.com",144],["1061theunderground.com",144],["1063spinfm.com",144],["1063thevibe.com",144],["1063wovo.com",144],["1065theticket.com",144],["1067thekrewe.com",144],["106x.com",144],["1070wnct.com",144],["1071bobfm.com",144],["1071thepeak.com",144],["1071thepoint.com",144],["1073wsjy.com",144],["1075nowfm.com",144],["1075thegame.com",144],["1077lakefm.com",144],["1077thebone.com",144],["1077theisland.com",144],["1079nashicon.com",144],["107countrypsk.com",144],["107nashicon.com",144],["1090kaay.com",144],["1220wkrs.com",144],["1230espnsports.com",144],["1230theteam.com",144],["1280wnam.com",144],["1290wlby.com",144],["1320thefan.com",144],["1340wmsa.com",144],["1430wcmy.com",144],["1450kven.com",144],["1480kyos.com",144],["1490wosh.com",144],["1510kga.com",144],["1590walg.com",144],["1620thezone.com",144],["1700thechamp.com",144],["2hoursmattpinfield.com",144],["600wrqx.com",144],["600wsom.com",144],["610knml.com",144],["630wpro.com",144],["640wxsm.com",144],["660wxqw.com",144],["680thefan.com",144],["770kkob.com",144],["790business.com",144],["790wpic.com",144],["810whb.com",144],["860kkat.com",144],["860utahsbigtalker.com",144],["900theticket.com",144],["921theticket.com",144],["923krst.com",144],["923thewolf.com",144],["925nashicon.com",144],["925thebear.com",144],["925thewolf.com",144],["927bobfm.com",144],["929peakfm.com",144],["929thewave.com",144],["929wbpm.com",144],["92kqrs.com",144],["92profm.com",144],["92qnashville.com",144],["931nashicon.com",144],["931thebeat.com",144],["933nashicon.com",144],["935nashfm.com",144],["935wrqn.com",144],["937nashicon.com",144],["937nowfm.com",144],["937themountain.com",144],["939northpoleradio.com",144],["939thehippo.com",144],["939theville.com",144],["939xindy.com",144],["93q.com",144],["93wkct.com",144],["93x.com",144],["940wfaw.com",144],["941ksky.com",144],["941thebear.com",144],["941thehits.com",144],["945thedrive.com",144],["945thehawkradio.com",144],["947qdr.com",144],["947wls.com",144],["949kcmo.com",144],["949radiojondeek.com",144],["949starcountry.com",144],["949theoutlaw.com",144],["94rockradio.net",144],["951nashfm.com",144],["951kbby.com",144],["953hlf.com",144],["953thebeach.com",144],["953thescore.com",144],["955bobfm.com",144],["955glo.com",144],["955nashicon.com",144],["955thefan.com",144],["955thevibe.com",144],["957kboy.com",144],["957kpur.com",144],["957nashicon.com",144],["957thevibe.com",144],["957thewolfonline.com",144],["959therocket.com",144],["95sx.com",144],["95wiil.com",144],["95x.com",144],["961bbb.com",144],["961jamz.com",144],["961sox.com",144],["961wsox.com",144],["963nashicon.com",144],["963thezone.com",144],["963wdvd.com",144],["967shinefm.com",144],["969lacaliente.com",144],["969thewolf.com",144],["96key.com",144],["96kzel.com",144],["973eagle.com",144],["973nashfm.com",144],["975kabx.com",144],["975thevibe.com",144],["975wabd.com",144],["979nashfm.com",144],["979espnradio.com",144],["979nashicon.com",144],["979wvok.com",144],["979x.com",144],["97bht.com",144],["97rock.com",144],["980waav.com",144],["980wxlm.com",144],["981thebeat.com",144],["981themax.com",144],["981thevalley.com",144],["983nashicon.com",144],["983thekeg.com",144],["983vibe.com",144],["983wlcs.com",144],["985kissfm.net",144],["989magicfm.com",144],["989thebridge.com",144],["98theticket.com",144],["993kjoy.com",144],["995thejock.com",144],["995thewolf.com",144],["997cyk.com",144],["997cyk.org",144],["997kmjj.com",144],["997themix.com",144],["997wpro.com",144],["997wtn.com",144],["999thebuzz.com",144],["999thefoxrocks.com",144],["999thehawk.com",144],["99x.com",144],["kjmo.com",144],["nashfm100.com",144],["nashfm923krst.com",144],["nashfm1033.com",144],["nashfm1055.com",144],["nashfm929.com",144],["nashfm931.com",144],["nashfm941.com",144],["nashfm949.com",144],["nashfm981.com",144],["nashfmwisconsin.com",144],["nashicon989.com",144],["v100rocks.com",144],["albanymagic.com",144],["alice1077.com",144],["allthehitsb951.com",144],["alt1019.com",144],["alt1049albany.com",144],["alt2k.com",144],["alt923.com",144],["alt98.com",144],["am630.net",144],["amarillosrockstation.com",144],["americanpatriotmedia.com",144],["annarbors107one.com",144],["atlantasrockstation.com",144],["atlsportsx.com",144],["b106fm.com",144],["b1073.com",144],["b95.com",144],["b979.net",144],["b98.com",144],["b985slo.com",144],["b987.com",144],["bakersfieldespn.com",144],["bakersfieldespnsports.com",144],["beach985.com",144],["beachboogieandblues.com",144],["bear104.com",144],["big1013.com",144],["bigcheese1079.com",144],["bigcountry1073.com",144],["bigdawg985.com",144],["bigdog1067.com",144],["bigfrog101.com",144],["bigfroggy1053.com",144],["bigtalk1490.com",144],["blairgarner.com",144],["blazin1023.com",144],["blazin923.com",144],["bloomingtonhits.com",144],["bobfmspringfield.com",144],["bowlinggreensam.com",144],["bull973.com",144],["bxr.com",144],["caperadio1550.com",144],["catcountry.com",144],["catcountry96.com",144],["catcountryvermont.com",144],["cbssports1430.com",144],["cbssportserie.com",144],["cbssportsharrisburg.com",144],["cbssportsradio1430.com",144],["chicothunderheads.com",144],["christmas989.com",144],["ckrv.com",144],["classicfox.com",144],["classichits1033.com",144],["classichitsmy1059.com",144],["classichitswnyq.com",144],["classy100.com",144],["coast1013.com",144],["coast973.com",144],["country105fm.net",144],["countrycountdownusa.com",144],["countrylegends1059.com",144],["countrymi.com",144],["coyote1025.com",144],["cumulusdigital.com",144],["digitalsolutions201.com",144],["e93fm.com",144],["eagle97.com",144],["eagle993.com",144],["easy991.com",144],["ed.fm",144],["elizabethtownradio.com",144],["energy939indy.com",144],["espn1320columbia.com",144],["espn910.com",144],["espnhonolulu.com",144],["espnlouisville.com",144],["espnlv.com",144],["espnradio1280.com",144],["espnradio927.com",144],["espnradio941.com",144],["espnsyracuse.com",144],["espnur.com",144],["espnwestpalm.com",144],["espnwilmington.com",144],["fly92.com",144],["fly923.com",144],["fm102milwaukee.com",144],["fm102one.com",144],["fonzfm.com",144],["forevereaston.com",144],["forevermediayork.com",144],["fox969.com",144],["foxcincinnati.com",144],["foxsportsredding.com",144],["froggy1003.com",144],["froggy101fm.com",144],["froggy981.com",144],["froggy99.net",144],["froggycountry.net",144],["froggyland.com",144],["fuego1029.com",144],["fun1013.com",144],["fun969fm.com",144],["generations1023.com",144],["glory985.com",144],["go106.com",144],["goradioheartland.com",144],["gospel900.com",144],["gulf104.com",144],["heaven1460.com",144],["heaven983.com",144],["hitkicker997.com",144],["hitpage.com",144],["hits931fm.com",144],["hits96.com",144],["hits965.com",144],["hot1005.com",144],["hot100blono.com",144],["hot100nrv.com",144],["hot101.com",144],["hot102.net",144],["hot1033.com",144],["hot1039.com",144],["hot1047fm.com",144],["hot1057.com",144],["hot1063.com",144],["hot1067fm.com",144],["hot1067pa.com",144],["hot1077radio.com",144],["hot92and100.com",144],["hot933hits.com",144],["hot941.com",144],["hot967fm.com",144],["hvradionet.com",144],["i973hits.com",144],["ilovethehits.com",144],["indysmix.com",144],["jammin999fm.com",144],["jamz963.com",144],["jox2fm.com",144],["joxfm.com",144],["k100country.com",144],["k104online.com",144],["k105country.com",144],["k92radio.com",144],["k983.com",144],["kabc.com",144],["kaok.com",144],["kaperadio1550.com",144],["katm.com",144],["katt.com",144],["kbcy.com",144],["kber.com",144],["kboi.com",144],["kbul.com",144],["kbull93.com",144],["kcchiefsradio.com",144],["kcheradio.com",144],["kcmotalkradio.com",144],["kcmxam.com",144],["kennradio.com",144],["kernradio.com",144],["kesn1033.com",144],["key101fm.com",144],["kfru.com",144],["kftx.com",144],["kgfm.com",144],["kgfw.com",144],["kggo.com",144],["kgmo.com",144],["kgoradio.com",144],["khay.com",144],["khfm.com",144],["khfm.org",144],["khit1075.com",144],["khop.com",144],["khvl.com",144],["kiimfm.com",144],["kiss-1031.com",144],["kix1029.com",144],["kix106.com",144],["kix96.com",144],["kizn.com",144],["kjjy.com",144],["kjoy.com",144],["kkcy.com",144],["kkfm.com",144],["kkgb.com",144],["kkgl.com",144],["kkoh.com",144],["klif.com",144],["klik1240.com",144],["klin.com",144],["klur.com",144],["kmaj.com",144],["kmaj1440.com",144],["kmez1029.com",144],["kmjnow.com",144],["knbr.com",144],["knek.com",144],["kobfm.com",144],["kpla.com",144],["kpur107.com",144],["kqfc.com",144],["kqky.com",144],["kqms.com",144],["kqxy.com",144],["krbe.com",144],["krmd.com",144],["krny.com",144],["krrq.com",144],["krush925.com",144],["kruz1033.com",144],["ksam1017.com",144],["kscrhits.com",144],["kscs.com",144],["ksfo.com",144],["kshasta.com",144],["ksks.com",144],["ksmb.com",144],["ktcx.com",144],["ktik.com",144],["ktop1490.com",144],["ktucam.com",144],["kubaradio.com",144],["kubb.com",144],["kugn.com",144],["kuzz.com",144],["kuzzradio.com",144],["kvor.com",144],["kwin.com",144],["kwwr.com",144],["kxel.com",144],["kxzz1580am.com",144],["kyis.com",144],["kykz.com",144],["kzwafm.com",144],["la103.com",144],["laindomable.com",144],["laleync.com",144],["lanuevaomaha.com",144],["lite102.com",144],["literock105fm.com",144],["love105fm.com",144],["lvfoxsports.com",144],["magic1029fm.com",144],["magic1039fm.com",144],["magic1069.com",144],["magic1073.com",144],["magic1073fm.com",144],["magic93fm.com",144],["magic943fm.com",144],["magic979wtrg.com",144],["magic995abq.com",144],["majic97monroe.com",144],["majicspace.com",144],["maverick1023.com",144],["max94one.com",144],["maxrocks.net",144],["mega979.com",144],["mgeradio.com",144],["milwaukeesparty.com",144],["mix103.com",144],["mix1077albany.com",144],["mix965.net",144],["modernrock987.com",144],["montanassuperstation.com",144],["movin993.com",144],["muskegonnashicon.com",144],["my1059.com",144],["my961.com",144],["myblono.com",144],["mycolumbiabasin.com",144],["myfroggy95.com",144],["mykiss973.com",144],["mymagic106.com",144],["mymix1051.com",144],["mymix1061.com",144],["mymix961.com",144],["mystar98.com",144],["nashcountrydaily.com",144],["nashdetroit.com",144],["nashfm1007.com",144],["nashfm1011.com",144],["nashfm1017.com",144],["nashfm1025.com",144],["nashfm1027.com",144],["nashfm1061.com",144],["nashfm1065.com",144],["nashfm923.com",144],["nashfm937.com",144],["nashfm943.com",144],["nashfm951.com",144],["nashfm973.com",144],["nashfm991.com",144],["nashfmgreenbay.com",144],["nashfmsjo.com",144],["nashnightslive.net",144],["nashpensacola.com",144],["ncsportsradio.com",144],["nepasespnradio.com",144],["neuhoffmedia.com",144],["neuhoffmedialafayette.com",144],["newcountry963.com",144],["newsradio1029.com",144],["newsradio1440.com",144],["newsradioflorida.com",144],["newsradiokkob.com",144],["newsserver1.com",144],["newsserver2.com",144],["newsserver3.com",144],["newstalk1030.com",144],["newstalk1290koil.com",144],["newstalk730.com",144],["newstalk987.com",144],["newstalkwsba.com",144],["newswebradiocompany.net",144],["now937.com",144],["nrgmedia.com",144],["nrq.com",144],["og979.com",144],["okiecountry1017.com",144],["oldiesz104.com",144],["ottawaradio.net",144],["pensacolasjet.com",144],["peorias923.com",144],["picklefm.com",144],["pikefm.com",144],["planet1067.com",144],["pmbbroadcasting.com",144],["pmbradio.com",144],["power1021.com",144],["power103.com",144],["power1057.com",144],["power1069fm.com",144],["power923.com",144],["power94radio.com",144],["power955.com",144],["powerhits95.com",144],["powerslc.com",144],["praise1025fm.com",144],["purerock96.com",144],["q1005.com",144],["q1031fm.com",144],["q105.fm",144],["q1055.com",144],["q1061.com",144],["q106dot5.com",144],["q973radio.com",144],["q97country.com",144],["q98fm.com",144],["q997atlanta.com",144],["q99fm.com",144],["radio1039ny.com",144],["radiorockriver.com",144],["radiowoodstock.com",144],["radiowoodstocktv.biz",144],["realcountry1280whvr.com",144],["realcountryhv.com",144],["red1031.com",144],["red945.com",144],["rewind1019.com",144],["rickandsasha.com",144],["rock101.net",144],["rock1015.com",144],["rock103albany.com",144],["rock103rocks.com",144],["rock106.net",144],["rock107fm.com",144],["rock108.com",144],["rock945vt.com",144],["rockdaily.com",144],["rocknews.com",144],["rockofsavannah.com",144],["rockofsavannah.net",144],["softrock941.com",144],["southernillinoisnow.com",144],["southernsportstoday.com",144],["sportsanimal920.com",144],["sportsanimalabq.com",144],["sportscapitoldc.com",144],["sportshubtriad.com",144],["sportsradio1270.com",144],["sportsradio1440.com",144],["sportsradio1560.com",144],["sportsradio590am.com",144],["sportsradio740.com",144],["sportsradio967.com",144],["sportsradio970.com",144],["sportsradiobeaumont.com",144],["sportsradioberks.com",144],["sportsradiownml.com",144],["star98.net",144],["starfm1023.com",144],["starsplash.com",144],["stevegormanrocks.com",144],["sunny1031.com",144],["sunny1069fm.com",144],["sunny923.com",144],["sunny983.com",144],["sunnymuskegon.com",144],["supertalk1570.com",144],["sweet985.com",144],["talk104fm.com",144],["talk995.com",144],["talkradio1007.com",144],["tbhpod.com",144],["teammyrtlebeach.com",144],["test107.com",144],["thebear925.com",144],["thebigjab.com",144],["thebigstation93blx.com",144],["theblairgarnershow.com",144],["theconclave.com",144],["thefan1075.com",144],["thefanfm.com",144],["thegame541.com",144],["thehippo.com",144],["thehot1039.com",144],["thenewhotfm.com",144],["thenewpulsefm.com",144],["thepointontheweb.com",144],["therebelrocks.com",144],["therocket951.com",144],["therockstationz93.com",144],["thescore1260.com",144],["thesportsanimal.com",144],["theticket.com",144],["theticket1007.com",144],["theticket102.com",144],["theticket1590.com",144],["theticketmi.com",144],["thetybentlishow.com",144],["thevalley981.com",144],["thewolf1051.com",144],["thewolf951.com",144],["thisisqmusic.com",144],["thunder1073.com",144],["triadsports.com",144],["tuligaradio.com",144],["umpsports.com",144],["v100fm.com",144],["v1033.com",144],["vermilioncountyfirst.com",144],["vermillioncountyfirst.com",144],["w3dcountry.com",144],["w4country.com",144],["wa1a.com",144],["wabcradio.com",144],["walk975.com",144],["walkradio.com",144],["warm1033.com",144],["warm98.com",144],["waysam.com",144],["wbap.com",144],["wbbw.com",144],["wbmq.net",144],["wbnq.com",144],["wbpm929.com",144],["wbpmfm.com",144],["wbwn.com",144],["wcbm.com",144],["wceiradio.com",144],["wcfx.com",144],["wchv.com",144],["wclg.com",144],["wcoapensacola.com",144],["wcpqfm.com",144],["wcpt820.com",144],["wcpt820.net",144],["wcpt820am.com",144],["wcpt820am.net",144],["wcptam.com",144],["wcptam.net",144],["wcptamfm.com",144],["wcptamfm.net",144],["wcptamfm.org",144],["wcpyfm.com",144],["wctk.com",144],["wddoam.com",144],["wden.com",144],["wdml.com",144],["wdst.com",144],["wdst.org",144],["wdzz.com",144],["wedg.com",144],["werkfm.net",144],["werkradio.com",144],["wfasam.com",144],["wfav951.com",144],["wfmd.com",144],["wfms.com",144],["wfnc640am.com",144],["wfre.com",144],["wftw.com",144],["wgh1310.com",144],["wghsolidgold.com",144],["wglx.com",144],["wgni.com",144],["wgow.com",144],["wgowam.com",144],["wgrr.com",144],["whdg.com",144],["wheelz1045.com",144],["whli.com",144],["whrpfm.com",144],["whtt.com",144],["whud.com",144],["wild1029.com",144],["wild1049hd.com",144],["wild1061.com",144],["wild993fm.com",144],["wildcatsradio1290.com",144],["wink104.com",144],["winxfm.com",144],["wiog.com",144],["wiov.com",144],["wiov985.com",144],["wivk.com",144],["wivr1017.com",144],["wizn.com",144],["wjbc.com",144],["wjcw.com",144],["wjez.com",144],["wjjr.net",144],["wjoxam.com",144],["wjr.com",144],["wkav.com",144],["wkbethepoint.com",144],["wkga975.com",144],["wkhx.com",144],["wkmoradio.com",144],["wkol.com",144],["wkrs.com",144],["wkrufm.com",144],["wksm.com",144],["wkydeportes.com",144],["wlaq1410.com",144],["wlav.com",144],["wlbc.com",144],["wlevradio.com",144],["wlkwradio.com",144],["wlok.com",144],["wlsam.com",144],["wlum.com",144],["wlup.com",144],["wlwi.com",144],["wmac-am.com",144],["wmal.com",144],["wmqa.com",144],["wncv.com",144],["wogb.fm",144],["woko.com",144],["womg.com",144],["woodstockbroadcasting.com",144],["woodstockcommunication.com",144],["woodstockradio.net",144],["woodstocktv.net",144],["wovo1063.com",144],["wovofm.com",144],["wqut.com",144],["wqvealbany.com",144],["wrganews.com",144],["wrgm.com",144],["wrlo.com",144],["wrr101.com",144],["wrul.com",144],["wsba910.com",144],["wsfl.com",144],["wsjssports.com",144],["wskz.com",144],["wsyb1380am.com",144],["wtka.com",144],["wtma.com",144],["wtrxsports.com",144],["wttlradio.com",144],["wuuqradio.com",144],["wvel.com",144],["wvli927.com",144],["wvlkam.com",144],["wvnn.com",144],["wwck.com",144],["wwki.com",144],["wwqq101.com",144],["wxfx.com",144],["wxkr.com",144],["wxpkfm.com",144],["wynn1063.com",144],["wzpl.com",144],["wzyp.com",144],["wzzl.com",144],["x1051kc.com",144],["x95radio.com",144],["xs961.com",144],["xtrasports1300.com",144],["y-103.com",144],["y101hits.com",144],["y102montgomery.com",144],["y1065.com",144],["yesfm.net",144],["z1023online.com",144],["z1029.com",144],["z1075.com",144],["z937.com",144],["z93jamz.com",144],["z96.com",144],["z971.com",144],["zone1150.com",144],["zrock103.com",144],["zrockfm.com",144],["windows101tricks.com",145],["waaw.tv",146],["hqq.tv",[146,147]],["fontsfree.pro",148],["radarbox.com",150],["papo18.com",46],["adslayuda.com",151],["avdelphi.com",152],["4x4earth.com",63],["jootc.com",[154,155]],["photobank.mainichi.co.jp",156],["tbs.co.jp",157],["sovetromantica.com",159],["longecity.org",160],["magnet-novels.com",161],["torrentlawyer.com",[161,167,174,175]],["fruit01.xyz",162],["lyricstranslate.com",164],["hardcoregames.ca",165],["allsmo.com",165],["themosvagas.com.br",165],["urbharat.xyz",165],["sportnews.to",[165,177]],["2embed.ru",166],["miraculous.to",[166,188]],["vtplayer.net",166],["pepperlive.info",166],["unbiasedsenseevent.com",166],["maxt.church",166],["cool-etv.net",166],["vgembed.com",[166,222]],["szkolawohyn.pl",167],["virpe.cc",167],["gmarket.co.kr",[167,175]],["paesifantasma.it",168],["talpo.it",168],["pbinfo.ro",169],["quora.com",170],["gmx.net",172],["girlscene.nl",173],["youmath.it",176],["renditepassive.net",[178,179,180,181,182]],["360doc.com",183],["logonews.cn",184],["thetodaypost.com",[185,190,195]],["cloudcomputingtopics.net",185],["epn.bz",60],["affbank.com",24],["gardenia.net",[186,187]],["novelpia.com",[189,190]],["blueraindrops.com",192],["vidembed.me",193],["mzzcloud.life",193],["videobot.stream",193],["player.tabooporns.com",193],["justswallows.net",193],["onscreensvideo.com",193],["katerionews.com",193],["telenovelas-turcas.com.es",193],["animecruzers.com",194],["descargatepelis.com",195],["news.ntv.co.jp",195],["bestjavporn.com",196],["mm9841.cc",196],["ggwash.org",[197,198]],["cinegrabber.com",201],["layarkacaxxi.icu",202],["readawrite.com",[203,204,205,206,207,208,209]],["dropgalaxy.com",210],["morosedog.gitlab.io",211],["indianhealthyrecipes.com",213],["tarnkappe.info",214],["phimz.org",215],["heavyfetish.com",216],["joysound.com",[217,218,219]],["colors.sonicthehedgehog.com",[219,223]],["youtube.com",221],["youtubekids.com",221],["youtube-nocookie.com",221],["leakedzone.com",224],["mehoathinh2.com",225]]);

const entitiesMap = new Map([["18comic",12],["earnload",141],["hindipix",[146,147]],["www.google",163],["123movies",166],["brainly",191],["videovard",193],["ask4movie",[199,200]],["bluemediafile",220]]);

const exceptionsMap = new Map([["m.rp5.ru",[84]],["m.rp5.by",[84]],["m.rp5.kz",[84]],["m.rp5.co.uk",[84]],["m.rp5.md",[84]]]);

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

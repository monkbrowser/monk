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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body > div[tabindex=\\\"-1\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > div > div.modal > div.modal-dialog p\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}]]}"],["{\"selector\":\"div[id=\\\"block$data_privacy_layer\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#root > div:not([class]) > div\",\"tasks\":[[\"has-text\",\"PRIVACIDADE\"]]}"],["{\"selector\":\"button[onclick^=\\\"onClickCookiesBannerWeb\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div > div[style]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > div[class^=\\\"_\\\"] > button\",\"tasks\":[[\"has-text\",\"cookies\"]]}]]}"],["{\"selector\":\"div[class^=\\\"StyledLayout\\\"] > div[data-testid=\\\"banner\\\"] > div[class] > button[data-context=\\\"cookiebanner-cta-button-accepted\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#__next > div[class^=\\\"styles_wrapper__\\\"]\",\"tasks\":[[\"has-text\",\"Политика обработки cookie\"]]}","{\"selector\":\"#rtb-house ~ div > div > div\",\"tasks\":[[\"has\",{\"selector\":\" > button[type=\\\"button\\\"]\",\"tasks\":[[\"has-text\",\"Понятно\"]]}]]}"],["{\"selector\":\".privacy-open > div > div[class] a[href$=\\\"/legal#Cookies\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"div[class*=\\\"CookieBanner__\\\"]:only-child\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#root > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > button\",\"tasks\":[[\"has-text\",\"Accept Cookies\"]]}]]}"],["{\"selector\":\"#cookie-bar\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".colorbox-cookiepolicy\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#root div[elevation] ~ div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > span[class*=\\\"-\\\"]\",\"tasks\":[[\"has-text\",\"cookies to improve user\"]]}]]}"],["{\"selector\":\"body > style\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"main ~ div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div.flex > div.inline-block > button\",\"tasks\":[[\"has-text\",\"Cookies\"]]}]]}"],["{\"selector\":\"div[class^=\\\"container_\\\"] > div[data-test-id=\\\"cookie-banner\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#root ~ div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > p[class]\",\"tasks\":[[\"has-text\",\"cookies\"]]}]]}"],["{\"selector\":\"#__next > footer + div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > div[class] > div[class]\",\"tasks\":[[\"has-text\",\"/^Çerez Politikası$/\"]]}]]}"],["{\"selector\":\".toast.ng-trigger-enterLeave\",\"tasks\":[[\"has\",{\"selector\":\" > article[role=\\\"alert\\\"] > p\",\"tasks\":[[\"has-text\",\"We use cookies to improve your experience\"]]}]]}"],["{\"selector\":\"div[class] > div[class$=\\\"_in\\\"] > div[class$=\\\"_bt\\\"] > button[name=\\\"gdpr_agree_btn\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".container > div[style^=\\\"height:\\\"] > .alert-dismissible > a[type=\\\"cookie\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > div[class] > div[id=\\\"cookieconsent-description\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#content-container > div[class] > div[class]\",\"tasks\":[[\"matches-css\",{\"name\":\"z-index\",\"value\":\"^10$\"}],[\"spath\",\" > div[class] > div[class] > h4\"],[\"has-text\",\"cookies\"],[\"upward\",4]]}"],["{\"selector\":\".banner-box-wrap.left\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[data-testid=\\\"Over18NotificationContainer\\\"] p > a[href$=\\\"/cookies-policy\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > style + div[id][class]\",\"tasks\":[[\"has-text\",\"Uso de cookies\"]]}"],["{\"selector\":\"#root > div\",\"tasks\":[[\"has\",{\"selector\":\" > div > p + div\",\"tasks\":[[\"has-text\",\"allow all\"]]}]]}"],["{\"selector\":\".container-component > div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > p > a[href^=\\\"//www.mydress.com/MyAccount/Privacy?\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".MuiSnackbar-root > div > div.MuiSnackbarContent-message > div > p > a.MuiTypography-root[href$=\\\"/data-usage\\\"]\",\"tasks\":[[\"upward\",5]]}","{\"selector\":\"footer + div[class^=\\\"jss\\\"] > button.MuiButtonBase-root[aria-label=\\\"close\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"footer + div > span[data-gtm-trigger=\\\"cookie_banner_dismiss\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sitewide-alert\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class*=\\\"FullPageModal__StyledFullPageModal\\\"] > div.ReactModal__Overlay > div[role=\\\"dialog\\\"] > div[class^=\\\"CCPAModal__CCPAPromptArea\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"#SHORTCUT_FOCUSABLE_DIV span > a[href$=\\\"/policies/cookie-notice\\\"]\",\"tasks\":[[\"upward\",\"section > div[style^=\\\"opacity\\\"]\"]]}"],["{\"selector\":\"#root > div[role=\\\"dialog\\\"] > div[class*=\\\"styled__CookieConsentModalBase-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > div.__reakit-portal\",\"tasks\":[[\"has\",{\"selector\":\" > div[data-dialog-ref=\\\"modal\\\"] > div#modal h2\",\"tasks\":[[\"has-text\",\"Cookie Settings\"]]}]]}"],["{\"selector\":\".modal-container > div.modal-content > div.modal-card > div.modal-body > div.sx-consent-to-cookies\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"body > div.notifications > div.notification\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\"#main-wrapper + div:not([id]):not([class])\",\"tasks\":[[\"has\",{\"selector\":\"div:not([class]) > span\",\"tasks\":[[\"has-text\",\"/\\\\sCookies$/\"]]}]]}"],["{\"selector\":\"div[data-area=\\\"main\\\"] > footer ~ div[class]:not([id])\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > p\",\"tasks\":[[\"has-text\",\"/^Tines uses cookies to/\"]]}]]}"],["{\"selector\":\"#layers > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > div[data-testid=\\\"BottomBar\\\"] > div[class] > div[class] > div[dir=\\\"ltr\\\"] > span\",\"tasks\":[[\"has-text\",\"ookie\"]]}]]}","{\"selector\":\"#layers > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] div[role=\\\"button\\\"] > div[dir=\\\"auto\\\"] > span > span\",\"tasks\":[[\"has-text\",\"ookie\"]]}]]}"],["{\"selector\":\"#wrapper > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > h1\",\"tasks\":[[\"has-text\",\"Cookie\"]]}]]}"],["{\"selector\":\".blog-p-card--muted\",\"tasks\":[[\"has\",{\"selector\":\" > header.blog-p-card__header > h5\",\"tasks\":[[\"has-text\",\"Newsletter signup\"]]}]]}"],["{\"selector\":\"#cookieConsentBanner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#gatsby-focus-wrapper > div[class^=\\\"index-module--wrapper\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"/^Wir verwenden Cookies!$/\"]]}]]}"],["{\"selector\":\"header ~ .cookie-banner + div[class]:empty\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#gatsby-focus-wrapper > div > div[class*=\\\"css-\\\"] > footer + div[class*=\\\"css-\\\"] > div[class*=\\\"css-\\\"] > div[class*=\\\"css-\\\"] > p[class*=\\\"css-\\\"] > a[href=\\\"/datenschutz\\\"]\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"body > div.alert\",\"tasks\":[[\"has\",{\"selector\":\" > p > a\",\"tasks\":[[\"has-text\",\"Cookies\"]]}]]}"],["{\"selector\":\".UPM__PrivacyModal\",\"tasks\":[[\"upward\",\"div.ReactModal__Overlay\"]]}"],["{\"selector\":\".reveal-overlay > #dsgvoLayer\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"ion-modal\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#placeholder > div.modal\",\"tasks\":[[\"has\",{\"selector\":\"div.modal-header > h5\",\"tasks\":[[\"has-text\",\"Cookies\"]]}]]}"],["{\"selector\":\"div[data-reactroot] > div > div.Lightbox\",\"tasks\":[[\"has\",{\"selector\":\"p.TextHeadline\",\"tasks\":[[\"has-text\",\"/^Cookies/\"]]}]]}"],["{\"selector\":\"#__layout > div.flex > div[role=\\\"dialog\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > div.flex > div.modal-container > header > h1\",\"tasks\":[[\"has-text\",\"/^Cookies!/\"]]}]]}"],["{\"selector\":\"#cc_info\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body > #hp-app ~ script + div\",\"tasks\":[[\"has\",{\"selector\":\" > div > div > div > button[mode=\\\"function\\\"]\",\"tasks\":[[\"has-text\",\"akzeptieren\"]]}]]}"],["{\"selector\":\".cookies-ribbon\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#CybotCookiebotDialog\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#app > div > div\",\"tasks\":[[\"has\",{\"selector\":\" > div\",\"tasks\":[[\"has-text\",\"Utilisation des cookies\"]]}]]}"],["{\"selector\":\"ion-app ~ div[class] > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > h2\",\"tasks\":[[\"has-text\",\"Gestion des cookies\"]]}]]}"],["{\"selector\":\"div[data-layer-id-3] > div > span\",\"tasks\":[[\"has-text\",\"Got it\"],[\"upward\",1]]}"],["{\"selector\":\"div[class^=\\\"elements__ToastContainer\\\"] > a[href=\\\"/legal/privacy\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#root > footer + div[class] > .container > p > a[href=\\\"/privacy-policy\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"#app > div[class^=\\\"_\\\"] > div[class*=\\\"-\\\"] > div[class] > div:not([class]):not([id]) > a[href=\\\"https://cookiesandyou.com/\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"#__next > div\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\"body > script + div > div[class^=\\\"_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > button\",\"tasks\":[[\"has-text\",\"I agree\"]]}]]}"],["{\"selector\":\"#__next > div.Layout_default + div > div\",\"tasks\":[[\"has-text\",\"We need your consent\"]]}"],["{\"selector\":\"#portal > div[class^=\\\"ezil-\\\"] > button\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".App > div\",\"tasks\":[[\"has\",{\"selector\":\" > div\",\"tasks\":[[\"has-text\",\"Privacy policy\"],[\"spath\",\" + button\"]]}]]}"],["{\"selector\":\"#__next > div > div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > span[class^=\\\"sc-\\\"] > a[href=\\\"https://policies.pixiv.net/#privacy\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"main > div\",\"tasks\":[[\"has\",{\"selector\":\" > div > p\",\"tasks\":[[\"has-text\",\"cookies\"]]}]]}"],["{\"selector\":\"body > div[class^=\\\"hp__sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"p > button\",\"tasks\":[[\"has-text\",\"Privacybeleid\"]]}]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > h1\",\"tasks\":[[\"has-text\",\"Vi bryr oss om ditt personvern\"]]}]]}"],["{\"selector\":\".osg-koltron > div[class^=\\\"c0\\\"] > button[data-ga-btn-click=\\\"cookies-button\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > div[id][class] > div > div > div > a#postpone-targeting-disclaimer-button\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"#root > div[class] > div[class] > div[class] > h4\",\"tasks\":[[\"has-text\",\"/^Zdecyduj o swojej prywatności$/\"],[\"upward\",3]]}"],["{\"selector\":\".cookie-modal\",\"tasks\":[[\"upward\",\"div.gl-modal\"]]}"],["{\"selector\":\"#__next > div[class^=\\\"sc-\\\"]:first-child\",\"tasks\":[[\"has\",{\"selector\":\" > div[class^=\\\"sc-\\\"] > h2 + p\",\"tasks\":[[\"has-text\",\"/^Potrzebujemy Twojej zgody/\"]]}]]}"],["{\"selector\":\"body > div[class]\",\"tasks\":[[\"has\",{\"selector\":\" > div[class] > div[class] > div[class] > div[class] > button\",\"tasks\":[[\"has-text\",\"/^AKCEPTUJĘ I PRZECHODZĘ DO SERWISU$/\"]]}]]}"],["{\"selector\":\"body > div[id][class] > div > div > div > a[href=\\\"/ciinfoclick/?rejected\\\"]\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"#age_popup_container > div.popup_bottom_bl > div.popup_bottom_bl__text\",\"tasks\":[[\"has-text\",\"файлы cookie\"]]}"],["{\"selector\":\"footer p.cookie-text\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"footer div + div\",\"tasks\":[[\"has-text\",\"Cookies\"]]}"],["{\"selector\":\"body > div[id^=\\\"comp_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > div.meta-message > div.meta-message__text\",\"tasks\":[[\"has-text\",\"cookies\"]]}]]}"],["{\"selector\":\"#__next > div[class^=\\\"jss\\\"] > div.MuiGrid-root > p.MuiTypography-root > a[style][href=\\\"/privacy\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"body > div.ReactModalPortal\",\"tasks\":[[\"has\",{\"selector\":\" > div.ReactModal__Overlay section > p\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}]]}"]];

const hostnamesMap = new Map([["character.ai",0],["redzac.at",1],["compass.jeep.com.br",2],["minhaconexao.com.br",3],["shopee.com.br",4],["telecine.com.br",5],["kufar.by",6],["walmart.ca",7],["jobs.ch",8],["moment.co",9],["ac-illust.com",10],["obi-de.app.baqend.com",11],["obi.de",11],["campfirewriting.com",12],["christianbook.com",13],["curiositystream.com",14],["debenhams.com",15],["cloud.digitalocean.com",16],["encazip.com",17],["fantrax.com",18],["fc2.com",19],["finanswebde.com",20],["glosbe.com",21],["kjell.com",22],["livecoinwatch.com",23],["livejasmin.com",24],["mforos.com",25],["twitch.mortalshell.com",26],["mydress.com",27],["myfitnesspal.com",28],["nytimes.com",29],["plantemoran.com",30],["ratemyprofessors.com",31],["reddit.com",32],["reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion",32],["app.revolut.com",33],["console.scaleway.com",34],["sex.com",35],["web.skype.com",36],["studocu.com",37],["tines.com",38],["twitter.com",39],["twitter3e4tixl4xyajtrzo62zg5vztmjuricljdp2c5kshju4avyoid.onion",39],["ubereats.com",40],["ubuntu.com",41],["waitomo.com",42],["zuckerjagdwurst.com",43],["autohaus24.de",44],["dunckelfeld.de",45],["fotocommunity.de",46],["hosteurope.de",47],["jokers.de",48],["weltbild.de",48],["puzzle-by.krupion.de",49],["navigium.de",50],["otelo.de",51],["reimsuche.de",52],["smdv.de",53],["urlaubspiraten.de",54],["epl.delfi.ee",55],["empleo.lidl.es",56],["lelivrescolaire.fr",57],["libmanuels.fr",58],["coda.io",59],["codesandbox.io",60],["stealthex.io",61],["tricksplit.io",62],["wifimap.io",63],["yubo.live",64],["80.lv",65],["ezil.me",66],["iobroker.net",67],["pixiv.net",68],["thetruestory.news",69],["vakantiepiraten.nl",70],["kk.no",71],["inkabet.pe",72],["budujmase.pl",73],["mamazone.pl",73],["vitashop.pl",73],["wylecz.to",73],["erli.pl",74],["goldenline.pl",75],["go.netia.pl",76],["polsatboxgo.pl",76],["polsatgo.pl",76],["nocowanie.pl",77],["trec.pl",78],["krasnoeibeloe.ru",79],["perekrestok.ru",80],["online.sberbank.ru",81],["xiacom.ru",82],["hotscope.tv",83],["123-reg.co.uk",84]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
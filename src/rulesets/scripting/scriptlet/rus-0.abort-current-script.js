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

// ruleset: rus-0

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_abortCurrentScript() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"$\",\"1xbet\"]","[\"$\",\"append\"]","[\"$\",\"contextmenu\"]","[\"$\",\"divWrapper\"]","[\"$\",\"get\"]","[\"$\",\"init_x_place\"]","[\"$\",\"mainContainer\"]","[\"$\",\"showPopupextra\"]","[\"JSON.parse\"]","[\"JSON.parse\",\"atob\"]","[\"Math.floor\",\"adregain_wall\"]","[\"Math.random\"]","[\"Object.defineProperty\",\"rcBuf\"]","[\"String.fromCharCode\",\"var _0x\"]","[\"XMLHttpRequest\",\"document.querySelectorAll\"]","[\"XMLHttpRequest\",\"llasalbbubrrl\"]","[\"__require\",\"/clickunder/\"]","[\"addEventListener\",\"DOMContentLoaded\"]","[\"atob\",\"void\"]","[\"clickExplorer\"]","[\"decodeURIComponent\",\"/63cc63/\"]","[\"decodeURIComponent\",\"fromCharCode\"]","[\"decodeURIComponent\",\"getAdBlockStatus\"]","[\"disableSelection\",\"reEnable\"]","[\"document.addEventListener\",\"adsBlocked\"]","[\"document.createElement\"]","[\"document.createElement\",\"/ru-n4p|ua-n4p|загрузка.../\"]","[\"document.createElement\",\"ExternalChromePop\"]","[\"document.createElement\",\"Math.random\"]","[\"document.createElement\",\"atob\"]","[\"document.createElement\",\"delete window\"]","[\"document.getElementsByTagName\",\"unselectable\"]","[\"document.oncontextmenu\"]","[\"document.onkeydown\"]","[\"document.querySelector\",\"/banner/\"]","[\"encodeURIComponent\",\"rcBuf\"]","[\"fetch\"]","[\"fuckAdBlock\",\"undefined\"]","[\"jQuery\",\"backgroundImage\"]","[\"redram\",\"/загрузка.../\"]","[\"setInterval\",\"Math.random\"]","[\"setInterval\",\"reload\"]","[\"setTimeout\",\"adblockwarn\"]","[\"window.onload\",\"_uWnd\"]","[\"Math.floor\",\"AdSense\"]","[\"document.getElementById\",\"composedPath\"]","[\"document.getElementsByTagName\",\"AMSP.loadAsset\"]","[\"document.querySelectorAll\",\"popMagic\"]","[\"$\",\"blockWarnClass\"]","[\"$\",\"mimicTopClass\"]","[\"dispatchEvent\",\"zoomdecorate\"]"];

const hostnamesMap = new Map([["shaiba.kz",0],["budport.com.ua",1],["asn.in.ua",2],["penzainform.ru",3],["l2top.ru",4],["tut.by",5],["conversion.im",6],["bez-smenki.ru",7],["freescreens.ru",8],["imgbase.ru",8],["imgcach.ru",8],["imgclick.ru",8],["payforpic.ru",8],["picclick.ru",8],["picclock.ru",8],["picforall.ru",8],["fenglish.site",9],["mp3spy.cc",9],["electric-house.ru",10],["euro-football.ru",10],["forums.rusmedserv.com",10],["liveresult.ru",10],["smolensk-auto.ru",10],["smolensk-auto.site",10],["stroi-help.ru",10],["tenews.org.ua",[11,26]],["agroreview.com",[12,35]],["dc-marvel.org",13],["gidonline.eu",13],["filmisub.com",[14,21]],["kinofen.net",[14,21]],["pikabu.ru",15],["gdespaces.com",16],["gdespaces.net",16],["google-cloud.services",16],["spac.me",16],["spac.run",16],["spac.wtf",16],["spac1.com",16],["spac1.info",16],["spac1.me",16],["spac1.net",16],["spac1.org",16],["spac1.ru",16],["spaces-blogs.com",16],["spaces.im",16],["spcs-files.xyz",16],["spcs.bio",16],["spcs.global",16],["spcs.life",16],["spcs.me",16],["spcs.network",16],["spcs.news",16],["spcs.pro",16],["spcs.pub",16],["spcs.reviews",16],["spcs.social",16],["strip2.in",16],["strip2.xxx",16],["usersporn.com",16],["fastpic.org",[17,28]],["allboxing.ru",18],["pravvest.ru",19],["daz3d.ru",20],["dynamo.kiev.ua",[22,34]],["epravda.com.ua",[22,34]],["football.ua",[22,34]],["isport.ua",[22,34]],["liga.net",[22,26,34]],["pravda.com.ua",[22,34]],["www.i.ua",[22,34]],["my-expert.ru",[23,31,32]],["mod-wot.ru",24],["krolik.biz",25],["1news.com.ua",26],["365news.biz",26],["4mama.ua",26],["4studio.com.ua",26],["7days-ua.com",26],["agroter.com.ua",26],["alter-science.info",26],["apnews.com.ua",26],["argumentiru.com",26],["asiaplustj.info",26],["autotema.org.ua",26],["autotheme.info",26],["avtodream.org",26],["beauty.ua",26],["begemot-media.com",26],["begemot.media",26],["chas.cv.ua",26],["cheline.com.ua",26],["cikavosti.com",26],["ck.ua",26],["cn.ua",26],["comments.ua",26],["cvnews.cv.ua",26],["day.kyiv.ua",26],["depo.ua",26],["dv-gazeta.info",26],["dyvys.info",26],["economistua.com",26],["edinstvennaya.ua",26],["ekovolga.com",26],["expert.in.ua",26],["fedpress.ru",26],["firtka.if.ua",26],["forpost.media",26],["fraza.com",26],["gazeta1.com",26],["glavnoe.ua",26],["glavnoe24.ru",26],["glavpost.ua",26],["golosinfo.com.ua",26],["gorodkiev.com.ua",26],["gov.ua",26],["grad.ua",26],["greenpost.ua",26],["ifnews.org.ua",26],["inforpost.com",26],["inkorr.com",26],["itechua.com",26],["kh.ua",26],["khersonline.net",26],["kolizhanka.com.ua",26],["kop.net.ua",26],["kr.ua",26],["krymr.com",26],["kurskcity.ru",26],["lvnews.org.ua",26],["mega-music.pro",26],["mi100.info",26],["mind.ua",26],["moirebenok.ua",26],["mycompplus.ru",26],["nakanune.ru",26],["narodna-pravda.ua",26],["nashbryansk.ru",26],["news24today.info",26],["newsua.one",26],["ngp-ua.info",26],["nnews.com.ua",26],["novavlada.info",26],["novynarnia.com",26],["np.pl.ua",26],["odessa-life.od.ua",26],["ogo.ua",26],["oukr.info",26],["panoptikon.org",26],["pg11.ru",26],["pik.net.ua",26],["pingvin.pro",26],["pl.com.ua",26],["planetanovosti.com",26],["podpricelom.com.ua",26],["politnavigator.net",26],["poltava365.com",26],["portal.lviv.ua",26],["prm.ua",26],["procherk.info",26],["profootball.ua",26],["promin.cv.ua",26],["radiosvoboda.org",26],["ratel.kz",26],["real-vin.com",26],["reporter.ua",26],["risu.ua",26],["rivne.media",26],["rivnenews.com.ua",26],["rusjev.net",26],["russianshowbiz.info",26],["rv.ua",26],["rvnews.rv.ua",26],["showdream.org",26],["sport-kr.com.ua",26],["strana.news",26],["strana.today",26],["sud.ua",26],["te.ua",26],["telekritika.ua",26],["theageoffootball.com",26],["treebuna.info",26],["tverigrad.ru",26],["tverisport.ru",26],["tvoymalysh.com.ua",26],["uainfo.org",26],["uanews.org.ua",26],["uatv.ua",26],["ukranews.com",26],["ukrrain.com",26],["unn.com.ua",26],["vchaspik.ua",26],["versii.if.ua",26],["viva.ua",26],["vlast.kz",26],["vnn24.ru",26],["volnorez.com.ua",26],["volyninfa.com.ua",26],["volyninfo.com",26],["volynpost.com",26],["volynua.com",26],["vsviti.com.ua",26],["westnews.info",26],["womo.ua",26],["wworld.com.ua",26],["zbirna.com",26],["zp.ua",26],["rutor.in",27],["kaztorka.org",28],["kg-portal.ru",28],["nnm-club.lib",[28,40]],["nnm-club.me",[28,40]],["nnmclub.ro",[28,40]],["nnmclub.to",[28,40]],["shanson320.ru",29],["vesti.ua",29],["lrepacks.net",30],["brigadtv.ru",32],["castle-serial.ru",32],["ehlita.ru",32],["gameout.ru",32],["itevonklass.ru",32],["izmailovtv.xyz",32],["karateltv.ru",32],["lyucifer.tv",32],["m-z.tv",32],["pokazuha.ru",32],["samomdele.tv",32],["saske.tv",32],["sorvigolovatv.ru",32],["taynyeistiny.ru",32],["transformator220.ru",32],["stalker-mods.clan.su",33],["stalker-mods.su",33],["ritsatv.ru",36],["gwss.ru",37],["hardwareluxx.ru",38],["marieclaire.ua",39],["24boxing.com.ua",41],["bilshe.com",41],["businessua.com",41],["f1analytic.com",41],["football-ukraine.com",41],["footballgazeta.com",41],["footballtransfer.com.ua",41],["glianec.com",41],["nashamama.com",41],["sportanalytic.com",41],["stravy.net",41],["zdorovia.com.ua",41],["livesport.ws",42],["techmusic.ru",43],["dmod.cc",44],["draug.ru",44],["modsforwot.ru",44],["skam.online",45],["pornopuk.com",47],["huyamba.tv",47],["piratam.net",47],["piratca.net",47],["porn720.biz",47],["sexitorrent.com",47],["sextor.org",47],["domahatv.com",47],["torrent-pirat.com",47],["xtorrent.net",47],["rapidzona.tv",47],["xxxrip.net",47],["xxxtor.com",47],["hentai-share.one",47],["minigames.mail.ru",48],["mmminigames.mail.ru",49],["afisha.ru",50],["autorambler.ru",50],["championat.com",50],["eda.ru",50],["gazeta.ru",50],["lenta.ru",50],["letidor.ru",50],["moslenta.ru",50],["motor.ru",50],["passion.ru",50],["quto.ru",50],["rambler.ru",50],["wmj.ru",50]]);

const entitiesMap = new Map([["hdrezka",46],["rezka",46],["pornoakt",47]]);

const exceptionsMap = new Map([["new.fastpic.org",[17,28]]]);

/******************************************************************************/

function abortCurrentScript(
    arg1,
    arg2,
    arg3
) {
    runAtHtmlElement(( ) => {
        abortCurrentScriptCore(arg1, arg2, arg3);
    });
}

function abortCurrentScriptCore(
    arg1 = '',
    arg2 = '',
    arg3 = ''
) {
    const details = typeof arg1 !== 'object'
        ? { target: arg1, needle: arg2, context: arg3 }
        : arg1;
    const { target = '', needle = '', context = '' } = details;
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const reNeedle = patternToRegex(needle);
    const reContext = patternToRegex(context);
    const thisScript = document.currentScript;
    const chain = target.split('.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const log = shouldLog(details);
    const debug = shouldDebug(details);
    const exceptionToken = getExceptionToken();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch(ex) {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        if ( debug ) { debugger; }  // jshint ignore: line
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( reContext.test(e.src) === false ) { return; }
        if ( log && e.src !== '' ) { safe.uboLog(`matched src: ${e.src}`); }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) { return; }
        if ( log ) { safe.uboLog(`matched script text: ${scriptText}`); }
        throw new ReferenceError(exceptionToken);
    };
    if ( debug ) { debugger; }  // jshint ignore: line
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        if ( log ) { safe.uboLog(ex); }
    }
}

function runAtHtmlElement(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
}

function getExceptionToken() {
    const token =
        String.fromCharCode(Date.now() % 26 + 97) +
        Math.floor(Math.random() * 982451653 + 982451653).toString(36);
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { abortCurrentScript(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

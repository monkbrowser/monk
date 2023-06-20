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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_abortCurrentScript() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"shortcut\"]","[\"DADrcv3s1\"]","[\"stopPrntScr\"]","[\"document.createElement\",\"player.gliacloud.com\"]","[\"jQuery\",\"#sidebar-ad\"]","[\"document.createElement\",\"counter.toString\"]","[\"document.getElementById\",\"lock_content\"]","[\"document.oncontextmenu\"]","[\"document.ondragstart\"]","[\"tjQuery\",\"body\"]","[\"document.onselectstart\"]","[\"$\",\"contextmenu\"]","[\"validateKey\"]","[\"addEventListener\",\"blockEvent\"]","[\"disable_keystrokes\"]","[\"document.addEventListener\",\"copyWithSource\"]","[\"jQuery\",\"onselectstart\"]","[\"add_message_to_copied_text\"]","[\"document.onkeypress\"]","[\"window.oncontextmenu\"]","[\"window.addEventListener\",\"copy\"]","[\"_HWIO.readyjs\",\"stopPrntScr\"]","[\"nocontextmenu\"]","[\"document.addEventListener\",\"contextmenu\"]","[\"document.onkeydown\"]","[\"document.oncopy\"]","[\"disableEnterKey\",\"Content is protected\"]","[\"document.onmousedown\"]","[\"jQuery\",\"contextmenu\"]","[\"document.keypress\"]","[\"EventTarget.prototype.addEventListener\",\"keydown\"]","[\"jQuery\",\"document.oncontextmenu\"]","[\"document.onkeyup\"]","[\"disableSelection\"]","[\"addEvent\",\"document.body.oncopy\"]","[\"document.addEventListener\",\"addLink\"]","[\"jQuery\",\"fp_mouse_right_click_restriction\"]","[\"jQuery\",\"oncopy\"]"];

const hostnamesMap = new Map([["darkcrew.org",[0,1]],["sudya-dredd.ru",2],["moviesrush.in",[2,8,24]],["charbelnemnom.com",2],["moneysave.info",3],["rkb.jp",4],["fmmods.com",5],["blogchiasekienthuc.com",6],["senpaiediciones.com",7],["descopera.ro",7],["amantecod.it",7],["truelovejapan.com",7],["volt-index.ru",[7,37]],["universaladbdriver.com",7],["firmwarefile.com",7],["bg-gledai.co",7],["victorytale.com",7],["clujust.ro",[7,8]],["mysports.to",7],["mi-faq.ru",[7,14,33]],["mathbang.net",[7,9]],["seriesgratis.biz",7],["mangacrab.com",7],["metalnaveia66.com",7],["bollywoodhindi.in",7],["legionscans.com",7],["footy.to",7],["kdramasurdu.net",7],["osomatsusan.hatenablog.com",7],["flinsetyadi.com",7],["bingotingo.com",7],["carfixer.co.kr",7],["urbanbrush.net",7],["now.rememberapp.co.kr",[7,10]],["untitle.org",[7,9]],["tecnoprogramas.com",7],["animeactua.com",[7,26]],["creativestudio.kr",7],["onna.kr",[7,15]],["info-beihilfe.de",7],["audiobookcup.com",7],["funfunhan.com",[7,9]],["blofinder.com",7],["bookpost.kr",[7,9]],["ex-nihil0.com",7],["donghun.kr",[7,9]],["zoommastory.com",[7,9]],["deutschaj.com",7],["kokone.co.kr",[7,9]],["stevenh.net",[7,9]],["ideas0419.com",[7,9]],["raycat.net",[7,9]],["hosii.info",[7,9]],["blahblah.pe.kr",[7,9]],["geniusjw.com",[7,9]],["blog.esherloon.com",[7,9]],["centrair.kr",[7,9]],["softwarebits.net",7],["tunovelaligera.com",7],["krtopic.com",7],["healthfeed.co.kr",7],["my-expert.ru",[7,8,24]],["bimiacg.net",7],["solidfile.net",7],["promocode99.in",7],["downloadtutorials.net",7],["nawalakarsa.id",7],["tecnomusic-evolution.com",7],["jpopsingles.eu",7],["wartaterkini.news",7],["pcprogramasymas.net",7],["tistory.com",[7,9,15]],["ghostspectre.the-ninja.jp",7],["slothjuns.net",7],["eduardo-monica.com",7],["apkspurefile.com",7],["foxaholic.com",7],["koreanaddict.net",7],["omgkpop.top",7],["gamegame.kr",[7,9]],["eoreuni.com",7],["jstranslations1.com",7],["animeuniverse.it",7],["baltasar5010purohentai.com",7],["securitypcsoluciones.blogspot.com",7],["unisinav.com",7],["aihristdreamtranslations.com",[7,33]],["tipslab.info",7],["indcit.com",7],["semi168.net",7],["semi168.club",7],["audio-sound-premium.com",7],["filmboxoffice.web.id",7],["kakpishem.ru",[7,25,33]],["teepr.com",[7,31]],["texte.work",7],["sysnettechsolutions.com",7],["reinodekovel.com",7],["elektrikmen.com",7],["world4.eu",7],["activationkeys.co",7],["secondlifetranslations.com",7],["samuraiscan.com",7],["globaledu.jp",7],["lazytranslations.com",7],["allaboutshaving.kr",8],["javsubtitle.co",8],["neo-blood.co.jp",8],["machow2.com",8],["rawneix.in",8],["theturtleislandnews.com",8],["audiotools.in",8],["moviesrush.one",[8,24]],["lapandilladelarejilla.es",8],["7misr4day.com",8],["michaelemad.com",8],["toonvideos.net.in",[8,24]],["onepiece-online-manga.com",8],["clockks.com",8],["iptv4best.com",8],["teus.me",9],["archwin.net",9],["onpc.kr",9],["blog.hangyeong.com",9],["tokyodomin.com",9],["modoobrisbane.com",9],["genuineactivator.com",10],["melodelaa.link",10],["asus-zenfone.com",10],["techieway.blogspot.com",10],["chronologia.pl",10],["kpopjjang.com",11],["hinfomax.co.kr",11],["britg.kr",11],["japanxxxmovie.com",11],["sexpox.com",11],["47news.jp",11],["learn-from-homey.blogspot.com",11],["belajarbro.id",11],["mangaku.cc",11],["tezgoal.com",12],["comeinsidebox.com",13],["ezms.link",13],["ladyblog.me",16],["denizlihaber.com",[17,18]],["acritica.com",18],["toptoon.com",19],["pressian.com",20],["bestxiaomiproducts.com",21],["appofmirror.com",22],["knightnoscanlation.com",23],["hunterfansub.com",24],["bloombergquint.com",25],["procrackerz.org",26],["hataphim.com",27],["japan-fans.com",27],["nubng.com",28],["ifdreamscametrue.com",28],["kkpmh.vip",28],["jucagototranslations.fukou-da.net",28],["kusonime.com",[29,30]],["utorrentgamesps2.blogspot.com",32],["portalwrc.pl",34],["ktk.kz",35],["linkerpt.com",36]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

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

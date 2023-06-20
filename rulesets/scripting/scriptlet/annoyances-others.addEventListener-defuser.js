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

(function uBOL_addEventListenerDefuser() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"scroll\",\"#sticky-video\"]","[\"openFloatingPlayer\",\"FloatingPlayer\"]","[\"wheel\",\"preventDefault\"]","[\"scroll\",\"floatingPlayerEventHandler\"]","[\"resize\",\"floatingPlayerEventHandler\"]","[\"scroll\",\"getBoundingClientRect\"]","[\"scroll\",\"window.history.pushState\"]","[\"blur\",\"counter\"]","[\"scroll\",\"return\\\"undefined\\\"!=typeof\"]","[\"scroll\",\"/function\\\\([a-z]?\\\\){return\\\"undefined\\\"/\"]","[\"contextmenu\",\"preventDefault\"]","[\"contextmenu\"]","[\"dragstart\"]","[\"copy\",\"event.dispatch.apply\"]","[\"mousedown\"]","[\"selectstart\"]","[\"contextmenu\",\"[native code]\"]","[\"copy\",\"pagelink\"]","[\"copy\",\"nocopas\"]","[\"/^(?:contextmenu|copy|cut)$/\",\"nrWrapper\"]","[\"/keydown|contextmenu/\"]","[\"copy\",\"event\"]","[\"copy\",\"bypassEventsInProxies\"]","[\"copy\",\"event.clipboardData.setData\"]","[\"/contextmenu|copy/\"]","[\"/^(?:contextmenu|copy|cut)$/\",\"preventDefault\"]","[\"/^(?:contextmenu|copy)$/\",\"event.dispatch.apply\"]","[\"/^(?:contextmenu|copy)$/\"]","[\"keydown\",\"metaKey\"]","[\"/contextmenu|selectstart/\",\"event.dispatch.apply\"]","[\"copy\",\"window.alert\"]","[\"/^key/\",\"wpccpDisable\"]","[\"contextmenu\",\"event.dispatch.apply\"]","[\"/copy|selectstart|contextmenu/\",\"preventDefault\"]","[\"/contextmenu|selectstart|dragstart|copy|cut|keydown|keyup/\",\"preventDefault\"]","[\"/keydown|cut|copy|paste/\",\"event.dispatch.apply\"]","[\"copy\",\"clipboardData\"]","[\"/contextmenu|copy|selectionchange|mousedown/\",\"native code\"]","[\"load\",\"addEvent(\"]","[\"copy\",\"addLink\"]","[\"/contextmenu|dragstart|keydown|keyup|keypress/\",\"/event\\\\.dispatch\\\\.apply|trackEvent/\"]","[\"/selectstart|dragstart|keydown/\",\"preventDefault\"]"];

const hostnamesMap = new Map([["reuters.com",0],["abczdrowie.pl",1],["dobreprogramy.pl",1],["wp.pl",1],["pudelek.pl",1],["pysznosci.pl",1],["www.wp.pl",2],["m.interia.pl",[3,4]],["m.lenta.ru",5],["lenta.ru",6],["vebma.com",7],["pinloker.com",7],["sekilastekno.com",7],["mein-schoener-garten.de",8],["me.fo",9],["dizipal546.com",10],["dizipal547.com",10],["dizipal548.com",10],["dizipal549.com",10],["dizipal550.com",10],["dizipal551.com",10],["dizipal552.com",10],["dizipal553.com",10],["dizipal554.com",10],["dizipal555.com",10],["dizipal556.com",10],["dizipal557.com",10],["dizipal558.com",10],["dizipal559.com",10],["dizipal560.com",10],["dizipal561.com",10],["dizipal562.com",10],["dizipal563.com",10],["dizipal564.com",10],["dizipal565.com",10],["dizipal566.com",10],["dizipal567.com",10],["dizipal568.com",10],["dizipal569.com",10],["dizipal570.com",10],["dizipal571.com",10],["dizipal572.com",10],["dizipal573.com",10],["dizipal574.com",10],["dizipal575.com",10],["dizipal576.com",10],["dizipal577.com",10],["dizipal578.com",10],["dizipal579.com",10],["dizipal580.com",10],["dizipal581.com",10],["dizipal582.com",10],["dizipal583.com",10],["dizipal584.com",10],["dizipal585.com",10],["dizipal586.com",10],["dizipal587.com",10],["dizipal588.com",10],["dizipal589.com",10],["dizipal590.com",10],["dizipal591.com",10],["dizipal592.com",10],["dizipal593.com",10],["dizipal594.com",10],["dizipal595.com",10],["dizipal596.com",10],["dizipal597.com",10],["dizipal598.com",10],["dizipal599.com",10],["dizipal600.com",10],["dizipal601.com",10],["dizipal602.com",10],["dizipal603.com",10],["dizipal604.com",10],["dizipal605.com",10],["dizipal606.com",10],["dizipal607.com",10],["dizipal608.com",10],["dizipal609.com",10],["dizipal610.com",10],["dizipal611.com",10],["dizipal612.com",10],["dizipal613.com",10],["dizipal614.com",10],["dizipal615.com",10],["dizipal616.com",10],["dizipal617.com",10],["dizipal618.com",10],["dizipal619.com",10],["dizipal620.com",10],["dizipal621.com",10],["dizipal622.com",10],["dizipal623.com",10],["dizipal624.com",10],["dizipal625.com",10],["dizipal626.com",10],["dizipal627.com",10],["dizipal628.com",10],["dizipal629.com",10],["dizipal630.com",10],["dizipal631.com",10],["dizipal632.com",10],["dizipal633.com",10],["dizipal634.com",10],["dizipal635.com",10],["dizipal636.com",10],["dizipal637.com",10],["dizipal638.com",10],["dizipal639.com",10],["dizipal640.com",10],["dizipal641.com",10],["dizipal642.com",10],["dizipal643.com",10],["dizipal644.com",10],["dizipal645.com",10],["dizipal646.com",10],["dizipal647.com",10],["dizipal648.com",10],["dizipal649.com",10],["dizipal650.com",10],["dizipal651.com",10],["dizipal652.com",10],["dizipal653.com",10],["dizipal654.com",10],["dizipal655.com",10],["dizipal656.com",10],["dizipal657.com",10],["dizipal658.com",10],["dizipal659.com",10],["dizipal660.com",10],["dizipal661.com",10],["dizipal662.com",10],["dizipal663.com",10],["dizipal664.com",10],["dizipal665.com",10],["dizipal666.com",10],["dizipal667.com",10],["dizipal668.com",10],["dizipal669.com",10],["dizipal670.com",10],["dizipal671.com",10],["dizipal672.com",10],["dizipal673.com",10],["dizipal674.com",10],["dizipal675.com",10],["dizipal676.com",10],["dizipal677.com",10],["dizipal678.com",10],["dizipal679.com",10],["dizipal680.com",10],["dizipal681.com",10],["dizipal682.com",10],["dizipal683.com",10],["dizipal684.com",10],["dizipal685.com",10],["dizipal686.com",10],["dizipal687.com",10],["dizipal688.com",10],["dizipal689.com",10],["dizipal690.com",10],["dizipal691.com",10],["dizipal692.com",10],["dizipal693.com",10],["dizipal694.com",10],["dizipal695.com",10],["dizipal696.com",10],["dizipal697.com",10],["dizipal698.com",10],["dizipal699.com",10],["dizipal700.com",10],["my.pcloud.com",10],["blisseyhusband.in",10],["kapiert.de",10],["verdragonball.online",10],["mangabtt.com",11],["careet.net",11],["contents.premium.naver.com",[11,14]],["r114.com",[11,12,15]],["app.kartra.com",11],["box-manga.com",11],["lover91.net",11],["leouve.com.br",11],["novelpia.com",11],["comico.jp",11],["tappytoon.com",11],["toonnbook.nate.com",11],["tapas.io",11],["kakaowebtoon.com",[11,12]],["lapandilladelarejilla.es",11],["lezhinus.com",11],["lezhin.com",11],["grafolio.naver.com",11],["webtoon.kakao.com",11],["page.kakao.com",[11,12]],["economia.uol.com.br",13],["123pan.com",16],["mi-faq.ru",17],["top10mais.org",18],["recantodasletras.com.br",19],["readcomiconline.li",20],["nusantararom.org",20],["estadao.com.br",21],["atribuna.com.br",21],["braziljournal.com",21],["revistapesquisa.fapesp.br",21],["migalhas.com.br",21],["tweaktown.com",22],["opovo.com.br",23],["brasilescola.uol.com.br",23],["forbes.com.br",23],["abril.com.br",23],["noticiasdlb.com",24],["melodelaa.link",25],["invado.pl",26],["ogznet.com",27],["solidfile.net",28],["downloadtutorials.net",28],["moboreader.net",29],["leg.br",30],["gamefinity.id",31],["pashplus.jp",32],["digitalfernsehen.de",32],["mundodonghua.com",32],["ukrainianwall.com",33],["osomatsusan.hatenablog.com",34],["kutub3lpdf.com",34],["nullslide.com",34],["ifdreamscametrue.com",35],["cq.ru",36],["reinodekovel.com",36],["babelnovel.com",37],["cafe.daum.net",38],["ohmygirl.ml",38],["emailfake.com",39],["omgkpop.top",40],["software-on.com",41]]);

const entitiesMap = new Map([["streamtape",32],["strcloud",32]]);

const exceptionsMap = new Map([["1login.wp.pl",[1]],["pilot.wp.pl",[1]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const extraArgs = getExtraArgs(Array.from(arguments), 2);
    const safe = safeSelf();
    const reType = patternToRegex(type);
    const rePattern = patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
}

function getExtraArgs(args, offset = 0) {
    return Object.fromEntries(getExtraArgsEntries(args, offset));
}

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
}

function getExtraArgsEntries(args, offset) {
    return args.slice(offset).reduce((out, v, i, a) => {
        if ( (i & 1) === 0 ) {
            const rawValue = a[i+1];
            const value = /^\d+$/.test(rawValue)
                ? parseInt(rawValue, 10)
                : rawValue;
            out.push([ a[i], value ]);
        }
        return out;
    }, []);
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
    try { addEventListenerDefuser(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

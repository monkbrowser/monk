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

(function uBOL_removeClass() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"videoScrollClass\",\".video-box.videoScrollClass\"]","[\"jw-flag-floating\",\"#jw-video-js\"]","[\"LEmbedVideo--floating\",\".LEmbedVideo.LEmbedVideo--floating\"]","[\"floating\",\".embed__content--draggable\"]","[\"glimmer-sticky\",\".content-lede-video.glimmer-sticky-container .glimmerPlayer.glimmer-sticky\"]","[\"Header__siteHeaderBanner\",\"header.Header__siteHeaderBanner\"]","[\"cnx-float\",\".cnx-content-wrapper.cnx-float\"]","[\"videoContent_player_fixed\",\".videoContent_player_fixed\"]","[\"isPinned\",\".videoPlayer.isPinned\"]","[\"jw-flag-floating\",\".news-article-body .jwplayer.jw-flag-floating\"]","[\"stuck\",\".placeholder > .sticky-container.stuck\"]","[\"is-collapsed\",\".Body--Mobile .ContentItem .is-collapsed.RichContent--unescapable\"]","[\"jw-flag-floating\",\".m-video-player--frame-container .jwplayer.jw-flag-floating\"]","[\"has-ads-free-promo-header\",\"body\"]","[\"blocked\",\".left-content > section#examples-content > .example.blocked\"]","[\"async-hide\",\"html\"]","[\"isBranding\",\"body\"]","[\"with-branding\",\".main-layout\"]","[\"app-banner-parent\",\"body\"]","[\"with-promo-bar\",\"body\"]","[\"disable-scroll\",\"body\"]","[\"is-promobar-active\",\"body\"]","[\"floating\",\"video-livebox > div[data-endscreen=\\\"plus1_endscreen\\\"]\"]","[\"sticky\",\".video-top-container\"]","[\"disabled\",\".body-page .card-body button.btn-primary.btn-block\"]","[\"disabled\",\"#wait1button\"]","[\"is--persistent\",\".videoPlayer\"]","[\"hidden\",\"#wcGetLink\"]","[\"disabled\",\"a[id^=\\\"newskip-\\\"].disabled\"]","[\"has-dealbar\"]","[\"withRightBar\",\"#vidPlayer > div\"]","[\"with-sidebar-ads\",\".video-player-area\"]","[\"hidden\",\"#getlink\"]","[\"zsj-act\"]","[\"disable-selection\",\"body\"]","[\"no-select\",\"div\"]","[\"unselectable\",\"p\"]"];

const hostnamesMap = new Map([["infor.pl",0],["tv.lrytas.lt",1],["lrytas.lt",2],["cbsnews.com",3],["elle.com",4],["goodreads.com",5],["accuweather.com",6],["danas.hr",7],["filmweb.pl",8],["theweathernetwork.com",9],["is.fi",10],["zhihu.com",11],["owlcation.com",12],["investing.com",13],["context.reverso.net",14],["leagueoflegends.com",15],["oeko-planet.com",15],["zombie-film.club",16],["lalafo.kg",17],["similarweb.com",18],["eyeondesign.aiga.org",19],["coub.com",20],["artstation.com",21],["pluska.sk",22],["standard.co.uk",23],["independent.co.uk",23],["bstlar.com",24],["examtadka.com",25],["djxmaza.in",25],["polsatnews.pl",26],["polsatsport.pl",26],["teknopaid.xyz",27],["streamcheck.link",28],["tinyurl.so",28],["tinyurl.is",28],["androidauthority.com",29],["tnaflix.com",30],["ebonyo.com",31],["bestopbook.info",32],["wenku.baidu.com",33],["postype.com",34],["jovenesweb.com",35],["wneen.com",36]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = '.' + tokens.map(a => CSS.escape(a)).join(',.');
    }
    let timer;
    const rmclass = function() {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmclass, { timeout: 67 });
    };
    const start = ( ) => {
        rmclass();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
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
    try { removeClass(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

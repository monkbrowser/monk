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

(function uBOL_removeClass() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"cookie-not-accepted\",\"#app\"]","[\"cookies-shown\",\"body\"]","[\"cookie--not-set\",\"body\"]","[\"cookies-modal-open\",\"body\"]","[\"noscroll\",\"body\"]","[\"modal-open\",\"body.modal-open\"]","[\"cookie--blur\",\"body\"]","[\"cc-scrolling-disabled\",\"body\"]","[\"hasCookieBanner\",\"body\"]","[\"fixedPage\",\"#__next\"]","[\"overlayopen\",\"html\"]","[\"no-scroll\",\"body\"]","[\"minddnd-wa-announcement-padding-top\",\"body\"]","[\"xh-thumb-disabled\",\"html\"]","[\"_31e\",\"body > ._li\"]","[\"cookie\",\"body.cookie\"]","[\"cookie-not-accepted\",\"body\"]","[\"dp--cookie-consent\",\"body.dp--cookie-consent\"]","[\"didomi-popup-open\",\"body\"]","[\"show--consent\",\"html.show--consent\"]","[\"cookie\",\"body > .root.fixed-padding.cookie\"]","[\"has-banner\",\"body.has-banner\",\"stay\"]","[\"cookies-policy\",\"body.cookies-policy\"]","[\"popup-disclaimer-show\",\"body.popup-disclaimer-show\"]","[\"sp-message-open\",\"html\"]","[\"gdpr\",\"body.gdpr\"]","[\"is-blurred-cookiebox\",\"html.is-blurred-cookiebox\"]","[\"sp-message-open\",\"html.sp-message-open\"]","[\"has-cookie-consent\",\"body\"]","[\"cookie-popup-visible\",\"body\"]","[\"disable-scroll\",\"body.disable-scroll\"]","[\"noScroll\",\"html\"]","[\"noScroll\",\"html.noScroll\"]","[\"cookie-hint\",\"body.cookie-hint\"]","[\"intro\",\"body.intro\"]","[\"cookies-requested\",\"body\"]","[\"hidden\",\".content-overlay + div.w-estimated-total\"]","[\"cookiewall-active\",\"body.cookiewall-active\"]","[\"v--modal-block-scroll\",\"body.v--modal-block-scroll\"]","[\"noscroll\",\"body.noscroll\"]","[\"gdpr\",\"body > div.overlay\"]","[\"borlabs-position-fix\",\"body\"]","[\"ccm-blocked\",\"body\\\\,html\"]","[\"rodo\",\"body.rodo\"]","[\"ckPp\",\"body\"]","[\"accept-cookies\",\"html\"]","[\"modal-open\",\"body\"]","[\"cookie-panel-enabled\",\".cookie-panel-enabled[data-module=\\\"header\\\"]\"]","[\"fixed-body\",\"body\\\\,html\"]"];

const hostnamesMap = new Map([["quantamagazine.org",0],["superwatchman.com",1],["shop.tecsafe.de",2],["lta.org.uk",3],["strato-hosting.co.uk",4],["clickdoc.fr",5],["immohal.de",6],["loopearplugs.com",7],["whatsapp.com",8],["tedbaker.com",9],["petcity.lt",10],["perkinelmerinformatics.com",12],["xhamster20.desi",13],["xhamster19.desi",13],["xhwebsite2.com",13],["xhamster18.desi",13],["xhadult3.com",13],["xhadult2.com",13],["xhmoon5.com",13],["xhwide1.com",13],["xhwide8.com",13],["xhplanet2.com",13],["megaxh.com",13],["messenger.com",14],["facebook.com",14],["share-your-photo.com",15],["tradersunion.com",16],["swffm.de",17],["ghacks.net",18],["readspeaker.com",19],["abcya.com",20],["flightradar24.com",21],["lazienkaplus.pl",22],["bca.co.id",23],["gentside.com",24],["bold.dk",24],["saechsische.de",24],["schwarzwaelder-bote.de",24],["digikey.com",25],["futterhaus.de",26],["nehnutelnosti.sk",27],["szbz.de",27],["avclub.com",27],["clickhole.com",27],["deadspin.com",27],["gizmodo.com",27],["jalopnik.com",27],["jezebel.com",27],["kotaku.com",27],["lifehacker.com",27],["splinternews.com",27],["theinventory.com",27],["theonion.com",27],["theroot.com",27],["thetakeout.com",27],["bunte.de",27],["theguardian.com",27],["fitforfun.de",27],["goettinger-tageblatt.de",27],["waz-online.de",27],["maz-online.de",27],["ostsee-zeitung.de",27],["dnn.de",27],["sportbuzzer.de",27],["rnd.de",27],["haz.de",27],["golem.de",27],["taschenhirn.de",28],["lichfieldcommunitylottery.co.uk",29],["oberstdorf.de",30],["breitachklamm.com",30],["ok-bergbahnen.com",30],["daenischesbettenlager.de",31],["ipaper.io",32],["mdv-group.com",33],["rumbletalk.com",34],["pacesuite.com",35],["oriflame.com",36],["pathe.nl",37],["hallebessermachen.de",38],["lawrievetgroup.co.uk",39],["vin-info.com",40],["ergo-impulse.de",41],["dlr.de",42],["clickbaits.de",42],["gesundheitswissen.de",42],["filmweb.pl",43],["teb.com.tr",44],["gelia.fi",45],["gelia.no",45],["gelia.se",45],["autokino-duesseldorf.ticket.io",46],["mazda.com.tr",47],["freeyou.ag",48]]);

const entitiesMap = new Map([["chrono24",11],["xhamster16",13],["hamsterix",13],["xhamster13",13],["xhamster18",13],["xhamster19",13],["xhamster11",13],["xhamster5",13],["xhamster10",13],["xhamster4",13],["xhamster3",13],["xhamster2",13],["xhamster",13]]);

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

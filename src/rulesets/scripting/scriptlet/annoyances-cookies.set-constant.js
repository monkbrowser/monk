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

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"realCookieBanner\",\"undefined\"]","[\"realCookieBanner.others.isPreventPreDecision\",\"true\"]","[\"CookieConsentManager\",\"noopFunc\"]","[\"cookieConsentConfig\",\"{}\"]","[\"__tcfapi\",\"noopFunc\"]","[\"hiCookieLaw\",\"{}\"]","[\"runads\",\"false\"]","[\"_sp_.addEventListener\",\"noopFunc\"]","[\"HB.CookieSettings.init\",\"noopFunc\"]","[\"initCookieConsent\",\"noopFunc\"]","[\"cookieChoices.showCookieConsent\",\"noopFunc\"]","[\"rodo.validateStoragePurpose\",\"noopPromiseResolve\"]","[\"consentManagerIsOn\",\"false\"]","[\"rodo.checkIsDidomiConsent\",\"noopFunc\"]","[\"openCookieModal\",\"false\"]","[\"_PRELOADED_STATE__.cookieDashboard.hasSavedCookieSettings\",\"true\"]","[\"COOKIES_NON_GDPR\",\"true\"]","[\"cookieselectionOverlay.load\",\"noopFunc\"]","[\"consentIsActive\",\"false\"]","[\"consentUrl\",\"undefined\"]","[\"cookieLayer\",\"undefined\"]","[\"dgpConsentType\",\"undefined\"]","[\"fourSq.cookies.CookieBanner\",\"noopFunc\"]","[\"Object.prototype.cookiewarning\",\"noopFunc\"]","[\"Object.prototype.cookieConsentState\",\"true\"]","[\"window.cmpmngr.setConsentViaBtn\",\"noopFunc\"]","[\"tarteaucitron.cookie\",\"undefined\"]","[\"__wpjslib__\",\"{}\"]","[\"WHT.ShowConsentForm\",\"trueFunc\"]","[\"getCookie\",\"trueFunc\"]"];

const hostnamesMap = new Map([["geekguide.de",0],["androjungle.com",0],["vampster.com",0],["noobguides.de",0],["fcportables.com",0],["wagenheber24.de",0],["emojiszumkopieren.de",0],["technikshavo.de",0],["indibit.de",0],["audiovision.de",0],["ratgeber-umschulung.de",0],["viel-unterwegs.de",0],["ahorn-camp.de",0],["mmo-sankar.de",0],["der-windows-papst.de",0],["europassitalian.com",1],["philosophia-perennis.com",1],["radio8.de",2],["berlinerfestspiele.de",3],["sportdeutschland.tv",4],["idowa.de",4],["eurogrow.es",5],["mapcarta.com",6],["upday.com",7],["stewes.de",8],["allmusicitalia.it",9],["nonsolocap.it",10],["filmweb.pl",[11,12,13]],["world-of-pizza.de",14],["hey.car",15],["foxchannels.com.tr",16],["erlangen-hoechstadt.de",17],["desired.de",18],["ga.de",19],["constantin-film.de",20],["pushsquare.com",21],["foursquare.com",22],["vaillant.be",23],["raiba-ke-oa.de",24],["sourceforge.net",25],["nacongaming.com",26],["homebook.pl",27],["abczdrowie.pl",27],["autokult.pl",27],["dobramama.pl",27],["dobreprogramy.pl",27],["echirurgia.pl",27],["fotoblogia.pl",27],["gadzetomania.pl",27],["jejswiat.pl",27],["kafeteria.pl",27],["komorkomania.pl",27],["luxlux.pl",27],["medycyna24.pl",27],["mixer.pl",27],["money.pl",27],["nocowanie.pl",27],["open.fm",27],["parenting.pl",27],["pinger.pl",27],["pogodnie.pl",27],["samosia.pl",27],["testwiedzy.pl",27],["gadgethacks.com",28],["ivoox.com",29]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

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

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

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"adManagerBlocked\",\"undefined\"]","[\"$MICROSITE_INFO.blockAdBlock\",\"false\"]","[\"adblock.check\",\"noopFunc\"]","[\"adBlockerActive\",\"false\"]","[\"cdo\",\"1\"]","[\"canRunAds\",\"true\"]","[\"eazy_ad_unblocker_msg_var\",\"''\"]","[\"antiAdBlockerStyle\",\"noopFunc\"]","[\"Object.prototype.adblockerEnabled\",\"false\"]","[\"adsbygoogle.loaded\",\"true\"]","[\"adBlockCheck\",\"true\"]","[\"pp_show_popupmessage\",\"noopFunc\"]","[\"easySettings.adblock\",\"0\"]","[\"onload\",\"null\"]","[\"adblockDetector.init\",\"noopFunc\"]","[\"adsbygoogle.length\",\"undefined\"]","[\"WSL2.config.enableAdblockEcommerce\",\"0\"]","[\"ads_unblocked\",\"true\"]","[\"adblock\",\"true\"]","[\"better_ads_adblock\",\"true\"]","[\"adBlockDetected\",\"false\"]","[\"isAdsDisplayed\",\"true\"]","[\"ATESTADO\",\"1\"]","[\"Lata\",\"1\"]","[\"loadingAds\",\"true\"]","[\"goog_pvsid\",\"1\"]","[\"Goog_Osd_UnloadAdBlock\",\"1\"]","[\"google_osd_loaded\",\"1\"]","[\"stopMan\",\"false\"]","[\"google_unique_id\",\"1\"]","[\"googleIMState\",\"{}\"]","[\"Object.prototype.adSlot\",\"''\"]","[\"google.ima.OmidVerificationVendor\",\"{}\"]","[\"ads\",\"false\"]","[\"acdl\",\"undefined\"]","[\"global.noobMaxTry\",\"0\"]","[\"player.preroll\",\"noopFunc\"]","[\"anunciotag\",\"noopFunc\"]","[\"_mvnxp\",\"noopFunc\"]","[\"loadingAds\",\"undefined\"]","[\"click\",\"1\"]","[\"clickd\",\"1\"]","[\"xxxStore\",\"undefined\"]","[\"vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads\",\"''\"]","[\"clicked\",\"true\"]","[\"eClicked\",\"true\"]","[\"number\",\"0\"]","[\"sync\",\"true\"]","[\"a_consola\",\"noopFunc\"]"];

const hostnamesMap = new Map([["fichajes.com",0],["niusdiario.es",[1,32]],["xerifetech.com",2],["pobre.wtf",[3,33]],["suaurl.com",[4,34]],["impactoespananoticias.com",5],["skynovels.net",5],["botinnifit.com",5],["minhasdelicias.com",5],["luchaonline.com",5],["legendei.net",6],["mangacrab.com",7],["cadenaser.com",8],["texto.kom.gt",9],["infojobs.com.br",10],["maringapost.com.br",11],["bandab.com.br",11],["ouniversodatv.com",12],["tribunaavila.com",13],["deportealdia.live",14],["elquintobeatle.com",15],["empregoestagios.com",15],["satcesc.com",15],["applesfera.com",16],["bebesymas.com",16],["compradiccion.com",16],["diariodelviajero.com",16],["directoalpaladar.com",16],["elblogsalmon.com",16],["espinof.com",16],["genbeta.com",16],["motorpasion.com",16],["motorpasionmoto.com",16],["pymesyautonomos.com",16],["trendencias.com",16],["trendenciashombre.com",16],["vidaextra.com",16],["vitonica.com",16],["xataka.com",16],["xatakaciencia.com",16],["xatakafoto.com",16],["xatakahome.com",16],["xatakamovil.com",16],["xatakandroid.com",16],["xatakawindows.com",16],["doceru.com",17],["docero.com.br",17],["comandotorrents.org",18],["adslayuda.com",19],["outerspace.com.br",20],["doramasmp4.com",21],["file4go.net",23],["seriesdonghua.com",24],["mundodonghua.com",24],["mangahost4.com",[25,26,27,28,29,30]],["mangahosted.com",[25,26,27,28,29,30]],["mangahost2.com",[25,26,27,28,29,30]],["mangahost1.com",30],["mangahostbr.net",30],["mangahostbr.com",30],["elmundo.es",31],["safepc.online",35],["solopc.net",35],["player.hentaistube.com",36],["playnewserie.xyz",37],["vizer.vip",38],["tiohentai.xyz",39],["otakustv.com",[40,41]],["pornolandia.xxx",42],["hentaiporno.xxx",43],["megadescarga.net",[44,45,46,47]],["fakings.com",48]]);

const entitiesMap = new Map([["anitube",22]]);

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

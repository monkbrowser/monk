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

(function uBOL_setConstant() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"Object.prototype.changeVisible\",\"noopFunc\"]","[\"ADV_BLOCKED\",\"false\"]","[\"Clicks._test_meta_referer\",\"null\"]","[\"JSON.parse\",\"noopFunc\"]","[\"Object.prototype.AdvObject\",\"noopFunc\"]","[\"Object.prototype.AdvertisementManager\",\"undefined\"]","[\"Object.prototype.IS_CHECK_REGISTRATION\",\"false\"]","[\"Object.prototype.MediaReady\",\"noopFunc\"]","[\"Object.prototype.PLAYED\",\"null\"]","[\"Object.prototype.adUsageStorageVars\",\"undefined\"]","[\"Object.prototype.adblockSettings\",\"undefined\"]","[\"Object.prototype.advert\",\"null\"]","[\"Object.prototype.advertObject\",\"null\"]","[\"Object.prototype.afg\",\"true\"]","[\"Object.prototype.autoPlay\",\"false\"]","[\"Object.prototype.autoPlay\",\"null\"]","[\"Object.prototype.autoPopups\",\"undefined\"]","[\"Object.prototype.autoplay\",\"false\"]","[\"Object.prototype.autoplay\",\"null\"]","[\"Object.prototype.autostart\",\"noopFunc\"]","[\"Object.prototype.compactMode\",\"true\"]","[\"Object.prototype.createBannerItem\",\"null\"]","[\"Object.prototype.detectAdb\",\"noopFunc\"]","[\"Object.prototype.detectAdblock\",\"noopFunc\"]","[\"Object.prototype.disableAutoplay\",\"true\"]","[\"Object.prototype.disablePaste\",\"false\"]","[\"Object.prototype.disableSeek\",\"noopFunc\"]","[\"Object.prototype.disableSelection\",\"noopFunc\"]","[\"Object.prototype.getAutoplay\",\"noopFunc\"]","[\"Object.prototype.isNoAds\",\"{}\"]","[\"Object.prototype.livetv-state\",\"true\"]","[\"Object.prototype.manualAutoplay_\",\"null\"]","[\"Object.prototype.minPlayingVisibleHeight\",\"noopFunc\"]","[\"Object.prototype.onIntersected\",\"noopFunc\"]","[\"Object.prototype.openstatCb\",\"undefined\"]","[\"Object.prototype.playVideo\",\"noopFunc\"]","[\"Object.prototype.sendCHParams\",\"noopFunc\"]","[\"Object.prototype.utm_campaign\",\"undefined\"]","[\"Object.prototype.utm_source\",\"undefined\"]","[\"Object.prototype.videoAd\",\"noopFunc\"]","[\"String.fromCharCode\",\"trueFunc\"]","[\"accept18\",\"true\"]","[\"adBlock\",\"false\"]","[\"adblock\",\"true\"]","[\"app.book.external\",\"null\"]","[\"cadb\",\"false\"]","[\"clicks\",\"2\"]","[\"g_GazetaNoExchange\",\"true\"]","[\"home.export.complex-feed\",\"undefined\"]","[\"isAdFree\",\"noopFunc\"]","[\"localStorage.localstorageGameData\",\"''\"]","[\"main_air_closed\",\"true\"]","[\"noAdsAtAll\",\"{}\"]","[\"pl.getParams.isPlay\",\"null\"]","[\"player.options.scroll\",\"false\"]","[\"playerOptions.behaviour.autoPlay\",\"false\"]","[\"sectionConfig.adBlock\",\"null\"]","[\"timeEnd\",\"1\"]","[\"top100Counter\",\"false\"]","[\"window.EUMP.plugins.antiblock\",\"noopFunc\"]","[\"window.ab\",\"false\"]","[\"Object.prototype.preroll\",\"undefined\"]","[\"biads.initCli\",\"undefined\"]","[\"NO_ADV\",\"1\"]","[\"Object.prototype.ENABLE_SMOKESCREEN\",\"undefined\"]","[\"Object.prototype._Mimic\",\"undefined\"]","[\"Object.prototype.adblock\",\"null\"]","[\"Object.prototype.autoPlayParams\",\"false\"]","[\"Object.prototype.autoplayScrollHandler\",\"noopFunc\"]","[\"Object.prototype.getAds\",\"undefined\"]","[\"Object.prototype.mimic\",\"undefined\"]","[\"Object.prototype.onLinkClick\",\"noopFunc\"]","[\"Object.prototype.onLinkMouseDown\",\"noopFunc\"]","[\"Object.prototype.runMimic\",\"noopFunc\"]","[\"Object.prototype.useMimic\",\"noopFunc\"]","[\"document.title\",\"null\"]","[\"mr.mimic\",\"undefined\"]","[\"Object.prototype.AdvertisingManager\",\"noopFunc\"]"];

const hostnamesMap = new Map([["116.ru",0],["14.ru",0],["161.ru",0],["164.ru",0],["178.ru",0],["26.ru",0],["29.ru",0],["35.ru",0],["43.ru",0],["45.ru",0],["48.ru",0],["51.ru",0],["53.ru",0],["56.ru",0],["59.ru",0],["60.ru",0],["62.ru",0],["63.ru",0],["68.ru",0],["71.ru",0],["72.ru",0],["74.ru",0],["76.ru",0],["86.ru",0],["89.ru",0],["93.ru",0],["chita.ru",0],["e1.ru",0],["ircity.ru",0],["mgorsk.ru",0],["msk1.ru",0],["ngs.ru",0],["ngs22.ru",0],["ngs24.ru",0],["ngs42.ru",0],["ngs55.ru",0],["ngs70.ru",0],["nn.ru",0],["proizhevsk.ru",0],["provoronezh.ru",0],["sochi1.ru",0],["sterlitamak1.ru",0],["tolyatty.ru",0],["ufa1.ru",0],["v1.ru",0],["www.fontanka.ru",0],["peers.tv",1],["www.ukr.net",2],["animelend.info",3],["ivi.ru",[4,12]],["ictv.ua",5],["inter.ua",5],["k1.ua",5],["novy.tv",5],["ntn.ua",5],["starlight.digital",5],["stb.ua",5],["teleportal.ua",5],["player.vgtrk.com",6],["tv-gubernia.ru",[7,51]],["xsport.ua",8],["music.yandex.by",9],["music.yandex.kz",9],["music.yandex.ru",9],["music.yandex.uz",9],["api-video.khl.ru",10],["razlozhi.ru",[11,45]],["igroutka.ru",13],["cdnvideo.ru",14],["eda.ru",14],["mania.gcdn.co",14],["vp.rambler.ru",[14,32]],["www.rambler.ru",14],["afisha.ru",15],["partnerkin.com",16],["iz.ru",17],["bonus-tv.ru",18],["eagleplatform.com",[18,54]],["embed.dugout.com",19],["7days.ru",0],["doctorpiter.ru",0],["dom.mail.ru",0],["kp.kg",0],["kp.kz",0],["kp.md",0],["kp.ru",0],["lady.mail.ru",0],["mk.ru",0],["ohotniki.ru",0],["radiokp.ru",0],["spletnik.ru",0],["sportkp.ru",0],["wday.ru",0],["woman.ru",0],["tass.ru",20],["ati.su",21],["russia-tv.online",22],["examenpdd.com",23],["embed.twitch.tv",24],["player.twitch.tv",24],["www.mos.ru",25],["1tv.ru",[26,59]],["kinokong.pro",27],["dzen.ru",28],["play.tv3.lt",29],["play.tv3.lv",29],["tv3play.skaties.lv",29],["rbc.ru",30],["sportrbc.ru",30],["tenews.org.ua",31],["rg.ru",[33,34]],["3dnews.kz",35],["3dnews.ru",35],["vm.ru",35],["gismeteo.by",36],["gismeteo.kz",36],["gismeteo.lt",36],["gismeteo.lv",36],["gismeteo.md",36],["gismeteo.ru",36],["gismeteo.ua",36],["meteofor.com.ua",36],["forbes.ru",[37,38]],["frontend.vh.yandex.ru",39],["widgets.kinopoisk.ru",39],["yastatic.net",39],["free-tor.info",40],["korsars.info",40],["vo-dela.su",41],["hentai-share.one",42],["anidub.vip",43],["anidubonline.com",43],["loveanime.live",43],["gdz-putina.fun",44],["gdz.ninja",44],["gdz.ru",44],["gdzotputina.club",44],["gdzputina.net",44],["megaresheba.com",44],["megaresheba.ru",44],["resheba.me",44],["spishi.fun",44],["zoobrilka.net",44],["audioportal.su",46],["gazeta.ru",[47,49]],["ya.ru",48],["playground.ru",50],["vk.com",52],["vk.ru",52],["player.smotrim.ru",53],["kinescope.io",55],["apollo.lv",56],["tvnet.lv",56],["softportal.com",57],["rambler.ru",58],["remont-aud.net",60],["okminigames.mail.ru",63],["e.mail.ru",[64,71,72]],["octavius.mail.ru",[64,71,72]],["otvet.mail.ru",65],["mail.ru",[66,70,75,76]],["player-smotri.mail.ru",67],["ok.ru",[68,69]],["sportmail.ru",[70,74]],["my.mail.ru",73],["news.mail.ru",74],["pogoda.mail.ru",74],["mail.ukr.net",77]]);

const entitiesMap = new Map([["hdrezka",61],["rezka",61],["mult-porno",62],["sex-studentki",62],["cosplay-porn",62]]);

const exceptionsMap = new Map([["1yar.tv",[18]],["3igames.mail.ru",[66,75,76]],["auto.mail.ru",[66,75,76]],["biz.mail.ru",[66,75,76]],["bonus.mail.ru",[66,75,76]],["calendar.mail.ru",[66,75,76]],["calls.mail.ru",[66,70,75,76]],["cloud.mail.ru",[66,75,76]],["deti.mail.ru",[66,75,76]],["dobro.mail.ru",[66,75,76]],["e.mail.ru",[66,70,75,76]],["esports.mail.ru",[66,75,76]],["games.mail.ru",[66,75,76]],["gibdd.mail.ru",[66,75,76]],["go.mail.ru",[66,75,76]],["health.mail.ru",[66,75,76]],["help.mail.ru",[66,75,76]],["hi-tech.mail.ru",[66,75,76]],["horo.mail.ru",[66,75,76]],["kino.mail.ru",[66,75,76]],["lady.mail.ru",[66,75,76]],["love.mail.ru",[66,75,76]],["mailblog.mail.ru",[66,75,76]],["mcs.mail.ru",[66,75,76]],["minigames.mail.ru",[66,75,76]],["my.mail.ru",[66,70,75,76]],["news.mail.ru",[66,75,76]],["octavius.mail.ru",[66,70,75,76]],["okminigames.mail.ru",[66,75,76]],["otvet.mail.ru",[66,75,76]],["pets.mail.ru",[66,75,76]],["player-smotri.mail.ru",[66,75,76]],["pogoda.mail.ru",[66,75,76]],["top.mail.ru",[66,75,76]],["touch.mail.ru",[66,70,75,76]],["tv.mail.ru",[66,75,76]]]);

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

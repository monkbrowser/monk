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

// ruleset: jpn-1

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_noSetTimeoutIf() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"/adsbygoogle|\\\\.innerHTML/\"]","[\"getComputedStyle\"]","[\"oAdChk\"]","[\"stopAd\"]","[\"_0x\"]","[\"/location\\\\.href|document\\\\./\"]","[\"getElementsByTagName\"]","[\"objDef.resolve\",\"3000\"]","[\"_0x\",\"3000\"]","[\"_0x\",\"2000\"]","[\"getAdCookie\"]","[\"floatingAd\"]","[\"affId\",\"2000\"]"];

const hostnamesMap = new Map([["gamemod.blog.fc2.com",0],["puzzle-ch.com",1],["o-dan.net",2],["dropbooks.net",3],["musenboya.com",5],["intaa.net",6],["crefan.jp",7],["fp1-siken.com",[8,9]],["fp2-siken.com",[8,9]],["fp3-siken.com",[8,9]],["ap-siken.com",[8,9]],["db-siken.com",[8,9]],["fe-siken.com",[8,9]],["itpassportsiken.com",[8,9]],["nw-siken.com",[8,9]],["pm-siken.com",[8,9]],["sc-siken.com",[8,9]],["sg-siken.com",[8,9]],["yavtube.com",10],["openworldnews.net",11],["animesoku.com",11],["vipnews.jp",11],["ldblog.jp",11],["livedoor.blog",11],["2chblog.jp",11],["oumaga-times.com",11],["all-nationz.com",11],["ebitsu.net",11],["fiveslot777.com",11],["jisaka.com",11],["kijyomatome.com",11],["konoyubitomare.jp",11],["livedoor.biz",11],["momoclonews.com",11],["norisoku.com",11],["pachinkopachisro.com",11],["vtubernews.jp",11],["blog.jp",11],["giants-news.com",11],["blog.livedoor.jp",11],["doorblog.jp",11],["sexpixbox.com",12]]);

const entitiesMap = new Map([["manga1001",4]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = patternToRegex(needle);
    window.setTimeout = new Proxy(window.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setTimeout("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
            }
            return target.apply(thisArg, args);
        },
        get(target, prop, receiver) {
            if ( prop === 'toString' ) {
                return target.toString.bind(target);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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
    try { noSetTimeoutIf(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

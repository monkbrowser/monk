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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_replaceNodeText() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"script\",\"('display'\\\\,'block')\",\"('display'\\\\,'none')\"]","[\"script\",\"\\\"isAdBlockerEnabled\\\":true\",\"\\\"isAdBlockerEnabled\\\":false\"]","[\"script\",\"/protect_block.*?\\\\,/\"]","[\"script\",\"(isAdblock)\",\"(false)\"]","[\"script\",\"/.*adConfig.*frequency_period.*/\",\"(async () => {const a=location.href;if(!a.includes(\\\"/download?link=\\\"))return;const b=new URL(a)\\\\,c=b.searchParams.get(\\\"link\\\");try{location.assign(`${location.protocol}//${c}`)}catch(a){}} )();\"]","[\"script\",\"/function gtag\\\\(\\\\)\\\\{.*\\\\}/\",\"window.innerWidth = document.documentElement.clientWidth + 320\"]","[\"script\",\"/^window\\\\.location\\\\.href.*\\\\'$/\"]","[\"script\",\"/devtoolsDetector\\\\.launch\\\\(\\\\)\\\\;/\"]","[\"script\",\"/\\\\\\\"homad\\\\\\\"\\\\,/\"]","[\"script\",\"/\\\\\\\"homad\\\\\\\":\\\\{\\\\\\\"state\\\\\\\":\\\\\\\"enabled\\\\\\\"\\\\}/\",\"\\\"homad\\\":{\\\"state\\\":\\\"disabled\\\"}\"]","[\"script\",\"/\\\\$\\\\(\\\\S+:\\\\(/\",\"(\",\"condition\",\"adblock\"]","[\"script\",\"fadeIn()\",\"empty()\",\"condition\",\"adsbygoogle\"]","[\"script\",\"/function gtag\\\\(\\\\)\\\\{.*\\\\}/\",\"var links;try{document.body.appendChild(document.createElement('div')).innerHTML='<iframe id=\\\"x\\\" style=\\\"display:none\\\"></iframe>';for(const a in window){if(!(a in window.frames[window.frames.length-1])&&typeof window[a]==='string'){links=btoa(atob(window[a]))==window[a]?JSON.parse(atob(window[a])):window[a]}}document.body.removeChild($$('#x')[0].parentNode)}catch(e){}document.querySelectorAll('a').forEach(node=>{for(let i=0;i<node.attributes.length;i++){var value=node.attributes[i].value;if(typeof links==='object'&&links[value]){const values=Object.values(links[value]);node.href=values[0]+'://'+values[1]+values[2];continue}try{value=btoa(atob(value))==value?atob(value):value}catch(e){}try{value=typeof JSON.parse(value)==='object'?JSON.parse(value):value}catch(e){}if(typeof value==='object'){value=value.scheme+\\\"://\\\"+value.host+value.path+'?'+value.query}if(value.includes('//dl')||(node.href.includes('#')&&value.includes('://'))){node.href=value}else if(node.href.includes('#')){node.href=''}}});\"]"];

const hostnamesMap = new Map([["plagiarismchecker.co",[0,11]],["games.dailymail.co.uk",1],["bussyhunter.com",2],["codingnepalweb.com",3],["jpvhub.com",4],["photopea.com",5],["gyanitheme.com",6],["hipsonyc.com",6],["idoitmyself.xyz",7],["giga.de",8],["kino.de",8],["t-online.de",9],["megaup.net",10],["soft98.ir",12]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([["forum.soft98.ir",[12]]]);

/******************************************************************************/

function replaceNodeText(
    nodeName,
    pattern,
    replacement,
    ...extraArgs
) {
    replaceNodeTextCore(nodeName, pattern, replacement, ...extraArgs);
}

function replaceNodeTextCore(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const reNodeName = patternToRegex(nodeName, 'i');
    const rePattern = patternToRegex(pattern, 'gms');
    const extraArgs = getExtraArgs(Array.from(arguments), 3);
    const shouldLog = scriptletGlobals.has('canDebug') && extraArgs.log || 0;
    const reCondition = patternToRegex(extraArgs.condition || '', 'gms');
    const safe = safeSelf();
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn: quitting "${pattern}" => "${replacement}"`);
        }
    };
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        if ( safe.RegExp_test.call(reCondition, before) === false ) { return true; }
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = after;
        if ( shouldLog !== 0 ) {
            safe.uboLog('replace-node-text-core.fn before:\n', before);
            safe.uboLog('replace-node-text-core.fn after:\n', after);
        }
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        if ( shouldLog !== 0 ) {
            safe.uboLog(`replace-node-text-core.fn ${count} nodes present before installing mutation observer`);
        }
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
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
    try { replaceNodeText(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

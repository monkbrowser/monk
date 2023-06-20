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

(function uBOL_abortOnStackTrace() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"Math\",\"onerror\"]","[\"Math.random\",\"injectedScript\"]","[\"Math.random\",\"/injectedScript.*inlineScript/\"]","[\"Math.random\",\"/(?=.*onerror)(?=^(?!.*(https)))/\"]","[\"open\",\"setPopUnder\"]","[\"document.createElement\",\"_0x\"]","[\"String.prototype.charCodeAt\",\"ai_\"]","[\"document.querySelectorAll\",\"/onload inlineScript|onload https/\"]","[\"onload\",\"inlineScript\"]","[\"document.createElement\",\"addZone\"]","[\"Math.random\",\"stackDepth:4\"]","[\"Math.random\",\"inlineScript\"]","[\"Math\",\"inlineScript\"]","[\"document.cookie\",\"https\"]","[\"Math\",\"/(?=^(?!.*(api|jquery|inlineScript|form|Progress)))/\"]","[\"String.fromCharCode\",\"stackDepth:3\"]","[\"Math.round\",\"inlineScript\"]","[\"adblock\"]","[\"document.createElement\",\"inlineScript\"]","[\"document.getElementById\",\"onLoadEvent\"]","[\"Object\",\"inlineScript\"]","[\"Object\",\"mark\"]","[\"Object\",\"/gdpr.*inlineScript/\"]","[\"document.addEventListener\",\"blocker\"]","[\"String.prototype.charCodeAt\",\"$\"]","[\"console.log\",\"stackDepth:2\"]","[\"String.prototype.charCodeAt\",\"https\"]","[\"encodeURIComponent\",\"inlineScript\"]","[\"$\",\"/(?=^(?!.*(https)))/\"]","[\"$ado\",\"ado\"]","[\"document.createElement\",\"app.js\"]","[\"Math\",\"showModal\"]","[\"EventTarget.prototype.addEventListener\",\"stackDepth:3\"]","[\"Math.random\",\"t.pt\"]","[\"String.prototype.charCodeAt\",\"_0x\"]","[\"Math\",\"onreadystatechange\"]","[\"Math.random\",\"/\\\\st\\\\.[a-zA-Z]*\\\\s/\"]","[\"Object\",\"/(?=^(?!.*(https)))/\"]","[\"Math.random\",\"/\\\\st\\\\.[a-zA-Z]*\\\\sinlineScript/\"]","[\"XMLHttpRequest\",\"rocket\"]","[\"XMLHttpRequest\",\"/inlineScript|stackDepth:1/\"]","[\"XMLHttpRequest\",\"inlineScript\"]","[\"Object.prototype.hasOwnProperty\",\"/(?=^(?!.*(Array|Object|facebook|google)))/\"]","[\"Math.random\"]","[\"jQuery\",\"ai_adb\"]","[\"JSON.parse\",\"computed\"]","[\"XMLHttpRequest\",\"onreadystatechange\"]","[\"localStorage\",\"inlineScript\"]","[\"_pop\",\"_init\"]","[\"Math.floor\",\"/computed|\\\\$\\\\./\"]","[\"Math.floor\"]","[\"Math.floor\",\"randStr\"]","[\"Math.round\",\"onload\"]","[\"document.getElementById\",\"inlineScript\"]","[\"$\",\":1:1\"]","[\"Math\",\"ai_\"]","[\"document.createElement\",\"make_rand_div\"]","[\"_pop\"]","[\"localStorage\",\"stackDepth:1\"]","[\"Math.floor\",\"_0x\"]","[\"foreverJQ\",\"/document.createElement|stackDepth:2/\"]","[\"Math\"]","[\"Math.random\",\"computed\"]","[\"$\",\"inlineScript\"]","[\"Math\",\"https\"]","[\"Element.prototype.matches\",\"litespeed\"]","[\"HTMLSelectElement\",\"Object\"]","[\"fetch\",\"inlineScript\"]","[\"console\",\"onload\"]","[\"document.head.appendChild\",\"/stackDepth:1.*inlineScript/\",\"2\"]","[\"document.getElementById\",\"disable\"]","[\"XMLHttpRequest\",\"injectedScript\"]","[\"Math\",\"_0x\"]","[\"onload\",\"/app.js\"]","[\"document.createElement\",\"create_ad\"]","[\"document.createElement\",\"/^(?!.*(jquery|setDocument|inlineScript|gstatic|google|root|cgi).*)/\"]","[\"document.querySelectorAll\",\"show\"]","[\"document.createElement\",\"/(?=^(?!.*(https)))/\"]","[\"document.createElement\",\"/(?=^(?!.*(http)))/\"]","[\"Object\",\"webpack\"]","[\"String.prototype.charCodeAt\",\"/(?=^(?!.*(https|Object)))/\"]","[\"atob\",\"inlineScript\"]","[\"Date.now\",\"afScript\"]","[\"document.querySelectorAll\",\"/(?=^(?!.*(https|Parse|Image)))/\"]","[\"document.body.appendChild\"]","[\"$\",\"openAdsModal\"]","[\"btoa\",\"/https|stackDepth:3/\"]","[\"document.createElement\",\"Admiral\"]","[\"document.createElement\",\"notify\"]","[\"document.addEventListener\",\"litespeed\"]","[\"jQuery\",\"window.onload\"]","[\"document.querySelectorAll\",\"/(?=^(?!.*(https|injectedScript)))/\"]","[\"document.getElementById\",\"fairAdblock\"]","[\"Math\",\"base64\"]","[\"document.querySelector\",\"showModal\"]","[\"setTimeout\",\"dontask\"]","[\"setTimeout\",\"adsBlocked\"]","[\"Object.getPrototypeOf\",\"plugins\"]","[\"document.createElement\",\"adsBlocked\"]","[\"Error\",\"/stackDepth:1\\\\s/\"]","[\"localStorage\",\"window.onload\"]","[\"btoa\",\"send\"]","[\"Math.floor\",\"injectedScript\"]","[\"document.cookie\"]","[\"Math.sqrt\",\"update\"]","[\"History\",\"/(^(?!.*(Function|HTMLDocument).*))/\"]","[\"$\",\"/(?=.*_)/\"]"];

const hostnamesMap = new Map([["dcdirtylaundry.com",0],["ipatriot.com",0],["newser.com",0],["politicalcowboy.com",0],["aupetitparieur.com",1],["allthingsvegas.com",1],["100percentfedup.com",1],["aidersonprochain.com",1],["beforeitsnews.com",1],["concomber.com",1],["conservativebrief.com",1],["conservativefiringline.com",1],["dailylol.com",1],["funnyand.com",1],["letocard.fr",1],["mamieastuce.com",1],["meilleurpronostic.fr",1],["patriotnationpress.com",1],["toptenz.net",1],["vitamiiin.com",1],["writerscafe.org",1],["populist.press",1],["dailytruthreport.com",1],["livinggospeldaily.com",1],["first-names-meanings.com",1],["welovetrump.com",1],["thehayride.com",1],["thelibertydaily.com",1],["thepoke.co.uk",1],["thepolitistick.com",1],["theblacksphere.net",1],["shark-tank.com",1],["naturalblaze.com",1],["greatamericanrepublic.com",1],["dailysurge.com",1],["truthlion.com",1],["flagandcross.com",1],["westword.com",1],["republicbrief.com",1],["freedomfirstnetwork.com",1],["phoenixnewtimes.com",1],["clashdaily.com",1],["madworldnews.com",1],["reviveusa.com",1],["sonsoflibertymedia.com",1],["videogamesblogger.com",1],["topminceur.fr",1],["lovezin.fr",1],["protrumpnews.com",1],["thepalmierireport.com",1],["kresy.pl",1],["thepatriotjournal.com",1],["gellerreport.com",1],["thegatewaypundit.com",1],["wltreport.com",1],["miaminewtimes.com",1],["politicalsignal.com",1],["rightwingnews.com",1],["bigleaguepolitics.com",1],["comicallyincorrect.com",1],["baomay01.com",1],["telexplorer.com.ar",2],["designbump.com",3],["thedesigninspiration.com",3],["beta.imagefap.com",4],["animesuge.to",5],["iptvbin.com",6],["gaypornmasters.com",6],["gaypornwave.com",6],["scubidu.eu",6],["amyscans.com",6],["thesukan.net",6],["jootc.com",6],["gaydelicious.com",6],["dramahd.me",6],["exbulletin.com",6],["game-owl.com",6],["javnow.net",6],["world4.eu",6],["atakanyavuz.com",6],["gadgetguideonline.com",6],["therootdroid.com",6],["lazytranslations.com",6],["icttipsandtricks.nl",6],["mettablog.com",6],["webdeyazilim.com",6],["lilymanga.com",6],["freebulksmsonline.com",6],["buydekhke.com",6],["isekaisubs.web.id",6],["javhoho.com",6],["udoyoshi.com",6],["adrianoluis.net",6],["altevolkstrachten.de",6],["animecast.net",6],["armyranger.com",6],["articletz.com",6],["boxylucha.com",6],["chibchat.com",6],["descargasmix.xyz",6],["duniailkom.com",6],["enciclopediaonline.com",6],["entano.jp",6],["eyalo.com",6],["fosslovers.com",6],["fotopixel.es",6],["hairstylesthatwork.com",6],["hello-e1.com",6],["ichberlin.com",6],["ireez.com",6],["keepkoding.com",6],["latribunadeautomocion.es",6],["linemarlin.com",6],["lumpiastudio.com",6],["miaandme.org",6],["mobility.com.ng",6],["mygardening411.com",6],["newstvonline.com",6],["organismes.org",6],["papagiovannipaoloii.altervista.org",6],["playlists.rocks",6],["relatosdesexo.xxx",6],["rencah.com",6],["riverdesdelatribuna.com.ar",6],["sarkarinaukry.com",6],["seamanmemories.com",6],["socialmediaverve.com",6],["theorie-musik.de",6],["topperpoint.com",6],["travel-the-states.com",6],["vozz.vn",6],["ilifehacks.com",6],["gamingsym.in",6],["bestsimsmods.com",6],["riotbits.com",6],["burakgoc.com",6],["pawastreams.live",6],["systopedia.com",6],["googledrivelinks.com",6],["apkmirror.com",7],["lacuevadeguns.com",8],["pussyspace.com",9],["pussyspace.net",9],["gamcore.com",10],["69games.xxx",[10,11]],["hentaisea.com",10],["porcore.com",11],["chicksonright.com",11],["moneyversed.com",11],["mlsbd.shop",11],["hentaispark.com",11],["coloredmanga.com",11],["pcgamez-download.com",12],["fifaultimateteam.it",12],["novinky.cz",12],["songspk2.info",12],["zootube1.com",13],["uploadbank.com",14],["camwhorescloud.com",16],["plagiarismdetector.net",17],["gametop.com",19],["animecurse.cz",20],["getintopcd.com",20],["artribune.com",21],["welt.de",22],["elamigosedition.com",23],["torrentgalaxy.to",24],["laksa19.github.io",25],["mynewsmedia.co",26],["dragontranslation.com",26],["yt5s.com",26],["programmiedovetrovarli.it",27],["biopills.net",27],["myuploadedpremium.de",28],["freewebcart.com",31],["voe.sx",32],["housecardsummerbutton.com",32],["bigclatterhomesguideservice.com",32],["uptodatefinishconference.com",32],["uptodatefinishconferenceroom.com",32],["tinycat-voe-fashion.com",32],["rawmanga.top",35],["cablegratis.online",36],["kmo.to",36],["onifile.com",36],["oxanime.com",36],["pewgame.com",36],["piraproxy.app",36],["sexphimhd.net",36],["stape.fun",36],["updatesmovie.xyz",36],["voirseries.io",36],["criptologico.com",37],["foreverwallpapers.com",37],["hotstar.news",37],["mcrypto.club",37],["olympicstreams.me",37],["tnmusic.in",37],["webcric.com",37],["webseriesclub.com",37],["yourtehzeeb.com",37],["shahiid-anime.net",37],["adfoc.us",38],["bitfly.io",38],["taxielcima.live",39],["mangareader.site",42],["unblocked.name",43],["nyaa.unblocked.id",43],["vibehubs.com",44],["egynow.cam",45],["traveldesearch.com",46],["thethothub.com",47],["anonymz.com",48],["sabishare.com",49],["naijaray.com.ng",50],["deutschsex.mobi",51],["1milf.com",51],["influencersgonewild.com",52],["rechub.tv",53],["naturalnews.com",54],["freeiphone.fr",55],["pcbeta.com",56],["notformembersonly.com",57],["donpelis.com",58],["1cloudfile.com",59],["4everproxy.com",60],["dirproxy.com",61],["fapguru.com",63],["pornpapa.com",63],["videojav.com",63],["toxicwap.us",64],["xozilla.xxx",66],["downloadfreecourse.com",67],["publicflashing.me",68],["delfi.lv",69],["exey.app",70],["vumoo.vip",71],["boombj.com",72],["stream.bunkr.ru",72],["jav.re",73],["coromon.wiki.gg",74],["dropmms.com",75],["magicgameworld.com",76],["sexemix.com",77],["links4u.co",[78,79]],["edoujin.net",80],["uhdgames.xyz",81],["alexsports.click",82],["pahaplayers.click",82],["imageupscaler.com",83],["picyield.com",84],["snaptik.app",85],["manhwalist.com",86],["qtoptens.com",87],["nilesoft.org",88],["smgplaza.com",89],["yesmangas1.com",90],["emperorscan.com",91],["telephone-soudan.com",91],["snbc13.com",92],["layardrama21.xyz",93],["comedyshow.to",94],["sexvideos.host",95],["portalizpro.com",96],["corrector.app",97],["dailytechinfo.me",98],["cgaa.org",99],["streamporn.co.uk",100],["tweakers.net",101],["fjlaboratories.com",102],["stoic.ai",102],["nikita.tk",103],["deviantart.com",104],["cadenadial.com",105],["telsu.fi",106]]);

const entitiesMap = new Map([["1337x",5],["pasend",6],["cliver",12],["thefmovies",12],["hdvid",15],["123moviess",18],["isaimini",20],["sms24",[29,30]],["shorttey",33],["wawacity",34],["adblockstreamtape",36],["adblockstrtape",36],["adblockstrtech",36],["extralinks",36],["filmypur",36],["nuroflix",36],["pelis28",36],["pelisplusgo",36],["pelisplusxd",36],["repelisgoo",36],["repelisgooo",36],["repelisgt",36],["repelisxd",36],["stapadblockuser",36],["strcloud",36],["streamadblockplus",36],["streamtapeadblockuser",36],["streamta",36],["streamtape",36],["streamtapeadblock",36],["strtape",36],["strtapeadblock",36],["strtapeadblocker",36],["strtpe",36],["theproxy",36],["tvply",36],["vidlox",36],["watchfree",36],["buffstreams",37],["dl-protect",37],["filmyworld",37],["moviesda1",37],["moviesda",37],["sockshare1",37],["songspk",37],["speedostream",[37,45]],["t20cric",37],["zone-telechargement",37],["ouo",38],["pelisplus",38],["pelisplus2",38],["moviespapa",40],["kuttymovies",41],["thothub",47],["uproxy2",50],["mp3juices",62],["gotxx",65],["mmsbee",65],["movierulzhd",78]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function abortOnStackTrace(
    chain = '',
    needle = '',
    logLevel = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    const safe = safeSelf();
    const reNeedle = patternToRegex(needle);
    const exceptionToken = getExceptionToken();
    const ErrorCtor = self.Error;
    const mustAbort = function(err) {
        let docURL = self.location.href;
        const pos = docURL.indexOf('#');
        if ( pos !== -1 ) {
            docURL = docURL.slice(0, pos);
        }
        // Normalize stack trace
        const reLine = /(.*?@)?(\S+)(:\d+):\d+\)?$/;
        const lines = [];
        for ( let line of err.stack.split(/[\n\r]+/) ) {
            if ( line.includes(exceptionToken) ) { continue; }
            line = line.trim();
            const match = safe.RegExp_exec.call(reLine, line);
            if ( match === null ) { continue; }
            let url = match[2];
            if ( url.startsWith('(') ) { url = url.slice(1); }
            if ( url === docURL ) {
                url = 'inlineScript';
            } else if ( url.startsWith('<anonymous>') ) {
                url = 'injectedScript';
            }
            let fn = match[1] !== undefined
                ? match[1].slice(0, -1)
                : line.slice(0, match.index).trim();
            if ( fn.startsWith('at') ) { fn = fn.slice(2).trim(); }
            let rowcol = match[3];
            lines.push(' ' + `${fn} ${url}${rowcol}:1`.trim());
        }
        lines[0] = `stackDepth:${lines.length-1}`;
        const stack = lines.join('\t');
        const r = safe.RegExp_test.call(reNeedle, stack);
        if (
            logLevel === '1' ||
            logLevel === '2' && r ||
            logLevel === '3' && !r
        ) {
            safe.uboLog(stack.replace(/\t/g, '\n'));
        }
        return r;
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            let v = owner[chain];
            Object.defineProperty(owner, chain, {
                get: function() {
                    if ( mustAbort(new ErrorCtor(exceptionToken)) ) {
                        throw new ReferenceError(exceptionToken);
                    }
                    return v;
                },
                set: function(a) {
                    if ( mustAbort(new ErrorCtor(exceptionToken)) ) {
                        throw new ReferenceError(exceptionToken);
                    }
                    v = a;
                },
            });
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
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

function patternToRegex(pattern, flags = undefined) {
    if ( pattern === '' ) { return /^/; }
    const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
    if ( match !== null ) {
        return new RegExp(match[1], match[2] || flags);
    }
    return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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
    try { abortOnStackTrace(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

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

(function uBOL_nanoSetTimeoutBooster() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"counter\",\"\",\"0.02\"]","[\"window.location.href\",\"*\",\"0.02\"]","[\"counter\",\"*\",\"0.02\"]","[\"download_loading\",\"*\",\"0.02\"]","[\"autoload-wait\",\"*\",\"0.02\"]","[\"content\",\"*\",\"0.02\"]","[\"/HideTimerID|clsname/\",\"*\",\"0.02\"]","[\"countdowntimer\",\"*\",\"0.02\"]","[\"updateClock\",\"\",\"0.02\"]","[\"seconds\",\"*\",\"0.02\"]","[\"myTimer\",\"*\",\"0.02\"]","[\"goLink(\",\"3000\"]","[\"get-link\",\"*\",\"0.02\"]","[\"getlink\",\"*\",\"0.02\"]","[\"download\",\"*\",\"0.02\"]","[\"/Please wait|myTime--/\",\"*\",\"0.02\"]","[\"updateClock\",\"*\",\"0.02\"]","[\"/_0x|gotoo/\",\"*\",\"0.02\"]","[\"status.innerHTML\",\"*\",\"0.02\"]","[\"document[_0x\",\"*\",\"0.02\"]","[\"countDown\",\"\",\"0.02\"]","[\"#counter\",\"\",\"0.02\"]","[\"count\",\"\",\"0.02\"]","[\"#download-loading\",\"*\",\"0.02\"]","[\"Tick\",\"\",\"0.02\"]","[\"submit\",\"5000\",\"0.02\"]","[\"wpsafe\",\"*\",\"0.02\"]","[\"_0x\",\"*\",\"0.02\"]","[\"redirect\",\"4000\",\"0.02\"]","[\"tick\",\"1000\"]","[\"grecaptcha\",\"*\",\"0.02\"]","[\"run()\",\"\",\"0.02\"]","[\"#proceed\",\"*\",\"0.02\"]","[\"timer\",\"1000\",\"0.02\"]","[\"/waiting|\\\\.classList\\\\.remove|gotoo/\",\"*\",\"0.02\"]","[\"seconds\",\"\",\"0.02\"]","[\"countdown()\",\"\",\"0.02\"]","[\"TheLink\",\"\",\"0.02\"]","[\"st2\",\"\",\"0.02\"]","[\"startTimer\",\"*\",\"0.02\"]","[\"goVideoJS\",\"*\",\"0.02\"]","[\"Please wait\",\"*\",\"0.02\"]","[\"showText\",\"*\",\"0.02\"]","[\"checkclick\",\"*\",\"0.02\"]","[\"/gotoo|pop-button|stickyadin/\",\"*\",\"0.02\"]","[\"#download_ad_addon\",\"10000\",\"0.02\"]","[\"$('.skip-btn').\",\"*\",\"0.02\"]","[\"download_file\",\"\",\"0.02\"]","[\"waitting_download\",\"\",\"0.02\"]","[\"CountBack\",\"990\",\"0.02\"]","[\"timeUpdater\",\"\",\"0.02\"]","[\"btn\",\"3000\",\"0.02\"]","[\"clsname\",\"5000\",\"0.02\"]","[\"#download\",\"10000\",\"0.02\"]","[\"#download\",\"11000\",\"0.02\"]","[\"/get-link\",\"5000\",\"0.02\"]","[\"fade\",\"5000\",\"0.02\"]","[\"timer_end\",\"20000\",\"0.02\"]","[\"disabled\",\"\",\"0.02\"]","[\"Please Wait\",\"\",\"0.02\"]","[\"gotoo\",\"22000\",\"0.02\"]","[\"gotoo\",\"17000\",\"0.02\"]","[\"download link\",\"\",\"0.02\"]","[\"-=0x1\",\"\",\"0.02\"]","[\"link\",\"1100\",\"0.02\"]","[\"tick\",\"1000\",\"0.02\"]","[\"countdown\",\"1400\",\"0.02\"]","[\"updateinfo\",\"1000\",\"0.02\"]","[\"count--\",\"1000\",\"0.02\"]","[\"window.location.href\",\"10000\",\"0.02\"]","[\"params.redirect\",\"5000\",\"0.02\"]","[\"timers\",\"\",\"0.02\"]","[\"timers\",\"4000\",\"0.02\"]","[\"doRedirect\",\"3000\",\"0.02\"]","[\"timer--\",\"\",\"0.02\"]","[\"timers\",\"1500\",\"0.02\"]","[\"var _0x\",\"\",\"0.02\"]","[\".eg-manually-get\",\"7000\",\"0.02\"]","[\"downloadbtn\",\"\",\"0.02\"]","[\"link_button\",\"\",\"0.02\"]","[\"#get_btn\",\"\",\"0.02\"]","[\"counter\",\"2000\",\"0.02\"]","[\"adFreePopup\",\"15000\",\"0.02\"]","[\"go_url\",\"15000\",\"0.3\"]","[\"window.location.href=t\",\"clearTimeout\",\"10000\"]","[\"adpop-content-left\",\"\",\"0.02\"]","[\"#ad .timer\",\"\",\"0.02\"]","[\"setSeconds\",\"\",\"0.02\"]","[\"updateReloj\",\"\",\"0.02\"]","[\"countdown\",\"\",\"0.02\"]","[\"dlcntdwn\",\"\",\"0.02\"]","[\"tick()\",\"\",\"0.02\"]","[\"startCountdown\",\"\",\"0.02\"]","[\"contador\",\"\",\"0.02\"]","[\"/action-downloadFile?\"]","[\"#freebtn\",\"\",\"0.02\"]","[\"download()\"]"];

const hostnamesMap = new Map([["tapewithadblock.org",0],["adblockstrtape.link",0],["adblockstrtech.link",0],["stape.fun",0],["strcloud.link",0],["moviessoul.com",0],["iggtech.com",1],["ipamod.com",1],["apkmody.fun",3],["apkmody.io",3],["vsthemes.org",4],["comohoy.com",5],["indilinks.xyz",6],["blogtechh.com",7],["coins-town.com",8],["upapk.io",9],["bakenor.com",10],["prod.danawa.com",11],["blogmado.com",12],["vavada5com.com",13],["financerites.in",13],["financerites.com",13],["vocalley.com",13],["howifx.com",13],["enit.in",13],["skincarie.com",13],["imperialstudy.com",13],["apkmaza.co",14],["bakeput.com",15],["bakemain.com",15],["bakeleft.com",15],["link-descarga.site",16],["kinemaster.cc",17],["zertalious.xyz",18],["hashhackers.com",19],["katdrive.net",19],["newsongs.co.in",19],["course-downloader.com",20],["123lnk.xyz",20],["universalfreecourse.com",20],["freenulledworld.com",20],["downloadfreecourse.com",20],["aapks.com",20],["pvpcorme.com",20],["dosya.co",20],["ishort.xyz",20],["fmoviesdl.com",21],["solotakus-tv.ml",21],["uncensored-hentai.com",21],["curimovie.com",21],["malzero.xyz",22],["modyolo.com",23],["uploadmaza.com",24],["uptomega.me",24],["dlfiles.online",24],["hubfiles.ws",24],["romsget.io",25],["romsgames.net",25],["mcrypto.club",26],["spantechie.com",27],["imgadult.com",28],["imgdrive.net",28],["imgtaxi.com",28],["imgwallet.com",28],["uploadrar.com",29],["steampiay.cc",30],["pouvideo.cc",30],["pomvideo.cc",30],["top1iq.com",31],["downfile.site",32],["memangbau.com",32],["trangchu.news",32],["techacode.com",32],["azmath.info",32],["freetp.org",33],["online-fix.me",33],["technoashwath.com",34],["uploadflix.org",35],["uploadbaz.me",35],["downloadr.in",36],["freetraderdownload.com.br",36],["appofmirror.com",36],["egyshare.cc",37],["samfirms.com",39],["4shared.com",40],["themehits.com",42],["atlai.club",43],["techymedies.com",44],["noltrt.com",45],["getthot.com",46],["videezy.com",47],["fdocuments.in",48],["tgsup.group",49],["kutub3lpdf.com",49],["movie4k.dev",50],["itscybertech.com",51],["newzflix.xyz",52],["moviesfi.net",[53,54]],["shareappscrack.com",55],["policiesforyou.com",56],["gamemodding.com",57],["mixdrop.sx",58],["streamon.to",59],["moddedguru.com",[60,61]],["upvideo.to",62],["ninjastream.to",63],["techoow.com",64],["sama-share.com",65],["zeefiles.download",65],["apkdone.com",66],["jptorrent.org",67],["pinsystem.co.uk",68],["gamefront.com",69],["render-state.to",70],["respuestadetarea.com",71],["asistente-de-estudio.com",71],["edurespuestas.com",72],["c.newsnow.co.uk",73],["pentafaucet.com",74],["getitall.top",74],["ihomeworkhelper.com",75],["hdfull.lv",76],["emulatorgames.net",77],["desiupload.co",78],["bdupload.asia",78],["indishare.org",78],["onlinefreecourse.net",78],["uploadking.net",78],["w4files.ws",79],["easylinks.in",80],["novafusion.pl",81],["surfline.com",82],["catcut.net",83],["apkshki.com",84],["pngitem.com",85],["world-sms.org",86],["pulsemens.com",87],["verteleseriesonline.com",88],["hentaisd.tv",88],["memoriadatv.com",89],["filehorse.com",90],["filerio.in",91],["worldofmods.com",91],["subdowns.com",92],["tudogamesbr.com",93],["videouroki.net",94],["katfile.com",95],["coolrom.com.au",96],["freeroms.com",96]]);

const entitiesMap = new Map([["shavetape",0],["adblockstreamtape",0],["streamtape",0],["flixhub",2],["premiumebooks",38],["mixdrop",41]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function nanoSetTimeoutBooster(
    needleArg = '',
    delayArg = '',
    boostArg = ''
) {
    if ( typeof needleArg !== 'string' ) { return; }
    const reNeedle = patternToRegex(needleArg);
    let delay = delayArg !== '*' ? parseInt(delayArg, 10) : -1;
    if ( isNaN(delay) || isFinite(delay) === false ) { delay = 1000; }
    let boost = parseFloat(boostArg);
    boost = isNaN(boost) === false && isFinite(boost)
        ? Math.min(Math.max(boost, 0.02), 50)
        : 0.05;
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const [ a, b ] = args;
            if (
                (delay === -1 || b === delay) &&
                reNeedle.test(a.toString())
            ) {
                args[1] = b * boost;
            }
            return target.apply(thisArg, args);
        }
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
    try { nanoSetTimeoutBooster(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

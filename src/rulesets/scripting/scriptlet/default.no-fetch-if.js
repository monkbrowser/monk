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

(function uBOL_noFetchIf() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"ads\"]","[\"/^/\"]","[\"player-feedback\"]","[\"openx\"]","[\"method:HEAD\"]","[\"googlesyndication\"]","[\"googlesyndication\",\"method:HEAD\"]","[\"adsbygoogle\"]","[\"damoh.ani-stream.com\"]","[\"/google|\\\\/ad.+\\\\.js/\"]","[\"/googlesyndication|adpushup|adrecover/\"]","[\"/googlesyndication|inklinkor/\"]","[\"zomap.de\"]","[\"adsafeprotected\"]","[\"google\"]","[\"cloudfront\"]","[\"googletagmanager\"]","[\"/adtrue\\\\.com|eningspon\\\\.com|freychang\\\\.fun|orquideassp\\\\.com|popunder/\"]","[\"popunder\"]","[\"adsbygoogle.js\"]","[\"doubleclick\"]","[\"manager\"]","[\"moonicorn.network\"]","[\"ad\"]","[\"/ads\"]","[\"tvid.in/log\"]","[\"cloudfront.net/?\"]","[\"xhr0\"]","[\"analytics\"]","[\"wtg-ads\"]","[\"cloud\"]","[\"/ads|doubleclick/\"]","[\"dqst.pl\"]","[\"/googlesyndication|uniconsent/\"]","[\"googlesyndication.com\"]","[\"wpadmngr\"]","[\"vlitag\"]","[\"imasdk\"]","[\"adoto\"]","[\"tpc.googlesyndication.com\"]","[\"syndication\"]","[\"/freychang|passback|popunder|tag/\"]","[\"google-analytics\"]","[\"ima\"]","[\"/adoto|googlesyndication/\"]","[\"ad-delivery\"]","[\"/adoto|\\\\/ads\\\\/js/\"]","[\"url:/^https:\\\\/\\\\/www\\\\.reddit\\\\.com$/ method:post\"]","[\"body:browser\"]","[\"body:/[\\\\w\\\\W]{700}/\"]","[\"method:/post|posT|poSt|poST|pOst|pOsT|pOSt|pOST|Post|PosT|PoSt|PoST|POst|POsT|POSt|POST/\"]","[\"marmalade\"]","[\"url:ipapi.co\"]","[\"api\"]"];

const hostnamesMap = new Map([["allmusic.com",0],["investing.com",0],["mylivewallpapers.com",0],["softfully.com",0],["sekilastekno.com",0],["key-hub.eu",0],["discoveryplus.in",0],["news-world24.com",0],["calculator-online.net",0],["tutorial.siberuang.com",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["dotabuff.com",0],["forum.cstalking.tv",0],["mcqmall.com",0],["nguontv.org",0],["apksafe.in",0],["witcherhour.com",0],["clamor.pl",0],["one-tech.xyz",0],["ozulscans.com",0],["i-polls.com",0],["insurancevela.com",0],["plagiarismchecker.co",[0,10]],["noor-book.com",0],["viraluttarakhand.in",0],["wrzesnia.info.pl",0],["elahmad.com",0],["compromath.com",0],["sumoweb.to",0],["haloursynow.pl",0],["satkurier.pl",0],["skidrowreloaded.com",1],["filmisub.com",1],["pinoyfaucet.com",1],["player.glomex.com",2],["htmlgames.com",3],["mac2sell.net",4],["1001tracklists.com",4],["gamebrew.org",4],["rechub.tv",4],["game3rb.com",4],["sixsave.com",4],["highload.to",4],["bowfile.com",[4,26]],["dealsfinders.blog",4],["iphonechecker.herokuapp.com",4],["coloringpage.eu",4],["conocimientoshackers.com",4],["juegosdetiempolibre.org",4],["karaokegratis.com.ar",4],["mammaebambini.it",4],["riazor.org",4],["rinconpsicologia.com",4],["sempredirebanzai.it",4],["vectogravic.com",4],["androidacy.com",4],["freetohell.com",4],["faucetcrypto.com",5],["mynewsmedia.co",5],["revadvert.com",5],["toolss.net",5],["romadd.com",5],["disheye.com",5],["blog-forall.com",5],["homeairquality.org",[5,16]],["techtrim.tech",5],["arhplyrics.in",5],["cryptopaid.net",5],["conghuongtu.net",5],["raky.in",5],["askpaccosi.com",5],["crypto4tun.com",5],["jpoplist.us",5],["quizack.com",5],["moddingzone.in",5],["rajsayt.xyz",5],["jaunpurmusic.info",5],["apkandroidhub.in",5],["babymodz.com",5],["deezloaded.com",5],["mad.gplpalace.one",5],["studyis.xyz",5],["chillx.top",5],["worldappsstore.xyz",5],["prepostseo.com",5],["dulichkhanhhoa.net",5],["noithatmyphu.vn",5],["bitefaucet.com",5],["iptvjournal.com",5],["dramaworldhd.co",5],["tudaydeals.com",5],["choiceappstore.xyz",5],["inbbotlist.com",5],["freepreset.net",5],["cryptoblog24.info",5],["amritadrino.com",5],["wikitraveltips.com",5],["getintoway.com",5],["crdroid.net",5],["zerion.cc",5],["beelink.pro",5],["hax.co.id",5],["woiden.id",5],["pviewer.site",5],["theusaposts.com",5],["hackr.io",5],["esopress.com",5],["welovecrypto.xyz",5],["paketmu.com",5],["coins-town.com",5],["watchx.top",5],["bankvacency.com",5],["technicalatg.com",5],["bitcosite.com",5],["bitzite.com",5],["mixrootmods.com",5],["globlenews.in",5],["programmingeeksclub.com",5],["now.gg",5],["now.us",5],["moto.it",5],["wellness4live.com",5],["rekidai-info.github.io",5],["los40.com",5],["muyinteresante.es",6],["leechpremium.link",7],["camcam.cc",7],["png.is",7],["nohat.cc",7],["kpopsea.com",7],["isi7.net",7],["hyipstats.net",7],["palixi.net",7],["howdy.id",7],["fastssh.com",7],["sshkit.com",7],["freecoursesonline.me",7],["pinloker.com",7],["ani-stream.com",8],["duplichecker.com",[9,10]],["plagiarismdetector.net",10],["searchenginereports.net",10],["smallseotools.com",10],["oko.sh",11],["tii.la",11],["joyn.de",12],["tf1.fr",13],["exe.app",14],["eio.io",14],["ufacw.com",14],["figurehunter.net",14],["workink.click",15],["djxmaza.in",17],["thecubexguide.com",17],["camarchive.tv",18],["hindustantimes.com",19],["altechen.com",20],["bitlinks.pw",20],["cashearn.cc",20],["journaldemontreal.com",20],["tvanouvelles.ca",20],["boxingstreams100.com",20],["mlbstreams100.com",20],["mmastreams-100.tv",20],["nbastreams-100.tv",20],["soccerstreams-100.tv",20],["vods.tv",20],["independent.co.uk",20],["linkpoi.me",21],["platform.adex.network",22],["mcrypto.club",23],["coinsparty.com",23],["weszlo.com",23],["simplebits.io",24],["timesnowhindi.com",25],["timesnowmarathi.com",25],["timesofindia.com",25],["tinyurl.is",27],["wyze.com",28],["mmorpg.org.pl",29],["speedrun.com",30],["dongknows.com",31],["forsal.pl",32],["photopea.com",33],["2the.space",34],["allcryptoz.net",35],["crewbase.net",35],["crewus.net",35],["shinbhu.net",35],["shinchu.net",35],["thumb8.net",35],["thumb9.net",35],["topcryptoz.net",35],["uniqueten.net",35],["ultraten.net",35],["mdn.lol",35],["freeshib.biz",36],["deutschekanale.com",37],["multifaucet.club",38],["soranews24.com",39],["computerpedia.in",40],["smartkhabrinews.com",41],["freepik-downloader.com",42],["freepic-downloader.com",42],["ortograf.pl",43],["mixrootmod.com",44],["explorecams.com",45],["btcbitco.in",46],["btcsatoshi.net",46],["cempakajaya.com",46],["crypto4yu.com",46],["gainl.ink",46],["readbitcoin.org",46],["wiour.com",46],["reddit.com",47],["search.brave.com",48],["blog.skk.moe",49],["skk.moe",50],["pimylifeup.com",51],["seazon.fr",52],["html5.gamedistribution.com",53]]);

const entitiesMap = new Map([["pobre",0],["zone-telechargement",1],["dropgalaxy",17]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noFetchIf(
    arg1 = '',
) {
    if ( typeof arg1 !== 'string' ) { return; }
    const needles = [];
    for ( const condition of arg1.split(/\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, re: patternToRegex(value) });
    }
    const log = needles.length === 0 ? console.log.bind(console) : undefined;
    self.fetch = new Proxy(self.fetch, {
        apply: function(target, thisArg, args) {
            let proceed = true;
            try {
                let details;
                if ( args[0] instanceof self.Request ) {
                    details = args[0];
                } else {
                    details = Object.assign({ url: args[0] }, args[1]);
                }
                const props = new Map();
                for ( const prop in details ) {
                    let v = details[prop];
                    if ( typeof v !== 'string' ) {
                        try { v = JSON.stringify(v); }
                        catch(ex) { }
                    }
                    if ( typeof v !== 'string' ) { continue; }
                    props.set(prop, v);
                }
                if ( log !== undefined ) {
                    const out = Array.from(props)
                                     .map(a => `${a[0]}:${a[1]}`)
                                     .join(' ');
                    log(`uBO: fetch(${out})`);
                }
                proceed = needles.length === 0;
                for ( const { key, re } of needles ) {
                    if (
                        props.has(key) === false ||
                        re.test(props.get(key)) === false
                    ) {
                        proceed = true;
                        break;
                    }
                }
            } catch(ex) {
            }
            return proceed
                ? Reflect.apply(target, thisArg, args)
                : Promise.resolve(new Response());
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
    try { noFetchIf(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

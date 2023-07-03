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

(function uBOL_nanoSetIntervalBooster() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[]","[\"\",\"1200\",\"0\"]","[\"generalTimeLeft\",\"*\",\"0.02\"]","[\"myTimer\",\"1500\"]","[\"countdown\",\"2000\"]","[\"downloadTimer\"]","[\"\",\"\",\"0\"]","[\"counter\",\"2000\"]","[\"\",\"1800\"]","[\"yuidea-\",\"*\"]","[\"timeLeft\"]","[\"time\"]","[\"time\",\"2500\"]","[\"clearInterval\",\"*\"]","[\"seconds\"]","[\"\",\"\",\"0.02\"]","[\"time.html\",\"1000\"]","[\"inner\"]","[\"circle_animation\"]","[\"timer\",\"1000\",\"0.6\"]","[\"countdown\"]","[\"web_counter\"]","[\"video_counter\"]","[\"/SplashScreen|BannerAd/\"]","[\"i--\"]","[\"\",\"*\",\"0\"]","[\"curAd\"]","[\"js-btn-skip\",\"1000\"]","[\"clearInterval\"]","[\"timer\",\"*\"]","[\"timer\"]","[\"gotolink\"]","[\"show_download_links\"]","[\"\",\"800\"]","[\"counter\",\"*\"]","[\"countDown\"]","[\"runDownload\"]","[\"\",\"100\",\"0\"]","[\"timer\",\"1500\"]","[\"\",\"1500\"]","[\"\",\"\",\"0.3\"]","[\"sec--\"]","[\"#timer\"]","[\"timer\",\"1100\"]","[\"time\",\"\",\"0\"]","[\"counter\"]","[\"secs\"]","[\"download\"]","[\"_0x\"]","[\"timer.remove\"]","[\"downloadButton\"]","[\"timePassed\"]","[\"timeleft\"]","[\"counter--\"]","[\"(i-1)\"]","[\"skipOptions\"]","[\"countDown\",\"1150\",\"0.5\"]","[\"btn-success\"]","[\"timercounter\"]","[\"count\",\"*\"]","[\"temp\"]","[\"sec\"]","[\"game\"]","[\"counter\",\"\",\"0.02\"]","[\"timePassed\",\"1300\"]","[\"timer\",\"1800\"]","[\"download_delay\"]","[\"countc\"]","[\"distance\"]","[\"count\"]","[\"contador\"]","[\"display\"]","[\"timer\",\"*\",\"0.02\"]","[\"second\"]","[\"updatePercentage\",\"100\",\"0.02\"]","[\"current()\"]","[\"l\",\"\",\"0\"]","[\"timeSec\",\"*\"]","[\"/verify_text|isCompleted/\",\"*\"]","[\"countdown\",\"*\",\"0.02\"]","[\"time\",\"\",\"0.02\"]","[\"wait\"]","[\"downloadToken\"]","[\"updateProgress\",\"*\"]","[\"current-=1\"]","[\"skipAdSeconds\",\"\",\"0.02\"]"];

const hostnamesMap = new Map([["shrink-service.it",0],["mage.si",0],["kanqite.com",0],["al.ly",0],["bbf.lt",0],["cpmlink.net",0],["cut-urls.com",0],["iiv.pl",0],["iziwinmoney.info",0],["shink.me",0],["ur.ly",0],["url.gem-flash.com",0],["zeiz.me",0],["1ink.cc",0],["azlink.xyz",0],["likn.xyz",0],["soft112.com",0],["short-url.link",0],["4download.net",0],["s.sseluxx.com",0],["onifile.com",0],["coolmathgames.com",0],["link-to.net",[0,20,21,22]],["telepisodes.org",0],["onle.co",0],["fcc.lc",0],["freeupload.info",0],["fstore.biz",0],["uploadfree.info",0],["deltabit.co",0],["puzzles.msn.com",0],["games.dailymail.co.uk",0],["shon.xyz",0],["keisekaikuy.blogspot.com",0],["opensubtitles.org",0],["linkvertise.com",0],["sfile.mobi",0],["pairom.com",0],["upfile.us",0],["game-kentang.blogspot.com",0],["shortgoo.blogspot.com",0],["indavideo.hu",0],["sfirmware.com",0],["claim4.fun",0],["mobilelegends.shop",0],["ockles.com",0],["urlpay.net",0],["underhentai.net",0],["customercareal.com",0],["faupto.com",0],["freelitecoin.vip",0],["suanoticia.online",0],["linkconfig.com",0],["lg-firmwares.com",0],["mysflink.blogspot.com",0],["runmods.com",0],["anomize.xyz",0],["bondibeachau.com",0],["konstantinova.net",0],["kangkimin.com",0],["iklandb.com",0],["onepiecex.xyz",0],["thingiverse.com",0],["ufreegames.com",0],["saungfirmware.id",0],["aylink.co",0],["gitizle.vip",0],["shtms.co",0],["kpopstan.com",0],["bdlink.pw",0],["fairyanime.com",0],["assamservice.com",0],["speedynews.xyz",[0,74]],["7misr4day.com",0],["sama-pro.com",0],["otomi-games.com",0],["coinunit.ashortstory.in",0],["seowebnews.com",0],["curseforge.com",0],["gamalk-sehetk.com",0],["healdad.com",0],["mobitaak.com",0],["arhplyrics.in",0],["techmart4u.in",0],["telenord.it",0],["raky.in",0],["desiflixindia.com",0],["insurance.iptvsetupguide.com",0],["javguru.top",0],["diglink.blogspot.com",0],["games.word.tips",0],["vkprime.com",0],["i-polls.com",0],["freecoursesonline.me",0],["yesdownloader.com",0],["games.metv.com",0],["arkadium.com",0],["wallpaperaccess.com",0],["deportealdia.live",1],["noticiasesports.live",1],["noweconomy.live",1],["puzzles.standard.co.uk",2],["puzzles.independent.co.uk",2],["puzzles.bestforpuzzles.com",2],["arkadiumarena.com",2],["games.charlotteobserver.com",2],["games.startribune.com",2],["freepdf-books.com",3],["themeslide.com",4],["jpopsingles.eu",5],["shortenbuddy.com",5],["megadescarga.net",6],["megadescargas.net",6],["lnk.news",6],["lnk.parts",6],["forexlap.com",6],["forexmab.com",6],["forexwaw.club",6],["forex-articles.com",6],["fx4vip.com",6],["fssquad.com",6],["easylinkref.com",6],["thememypc.net",7],["sanoybonito.club",7],["dreamcheeky.com",[7,34]],["fidlarmusic.com",[7,34]],["publicananker.com",[7,34]],["rezence.com",[7,34]],["rodjulian.com",[7,34]],["mikl4forex.com",7],["gawbne.com",7],["forex-golds.com",7],["forex-trnd.com",[7,30]],["link.tl",8],["gamelopte.com",9],["goto.com.np",10],["vrcmods.com",10],["bitefaucet.com",10],["dramaworldhd.co",10],["edummm.xyz",10],["consoleroms.com",10],["romspedia.com",10],["shortlinks.tech",10],["icutlink.com",11],["android-apk.org",11],["zegtrends.com",12],["simsdom.com",13],["fautsy.com",14],["multifaucet.org",14],["coinlyhub.com",14],["i-bits.io",14],["claimbits.io",14],["dogeatm.com",14],["mundotec.pro",14],["legionjuegos.org",15],["legionpeliculas.org",15],["legionprogramas.org",15],["so1.asia",15],["recipesdelite.com",17],["lewdzone.com",18],["elil.cc",19],["direct-link.net",[20,21,22]],["direkt-wissen.com",[20,21,22]],["py.md",20],["mohammedkhc.com",20],["ipalibrary.me",20],["gamearter.com",23],["onlyhgames.com",24],["ayobelajarbareng.com",25],["semawur.com",25],["yoshare.net",25],["techmody.io",25],["ez4mods.com",25],["series-d.com",26],["doofree88.com",27],["cheatcloud.cc",28],["cheater.ninja",28],["cheatermad.com",28],["cheatsquad.gg",28],["premid.app",28],["mynewsmedia.co",29],["revadvert.com",29],["imgair.net",30],["imgblaze.net",30],["imgfrost.net",30],["pixsera.net",30],["vestimage.site",30],["imgwia.buzz",30],["imgkaka.xyz",30],["imgux.buzz",30],["imgewe.buzz",30],["imguebr.buzz",30],["imgbew.buzz",30],["imgxxxx.buzz",30],["imgeza.buzz",30],["imgzzzz.buzz",30],["imgxhfr.buzz",30],["imgqwt.buzz",30],["imgtwq.buzz",30],["imgbjryy.buzz",30],["imgjetr.buzz",30],["imgxelz.buzz",30],["imgytreq.buzz",30],["mrlzqoe.buzz",30],["utinwpqqui.buzz",30],["pyotinle.buzz",30],["velnibug.buzz",30],["optiye.buzz",30],["imgbeaw.buzz",30],["imgnfg.buzz",30],["imguqkt.buzz",30],["imgxhgh.buzz",30],["imgwelz.buzz",30],["pixnbvj.buzz",30],["imgxkhm.buzz",30],["imagepuitr.buzz",30],["imagent.buzz",30],["imgjtuq.buzz",30],["imgkixx.buzz",30],["im1.buzz",30],["imgkux.buzz",30],["imgpiluka.website",30],["imgxhtue.website",30],["imgpuloki.online",30],["imgmilu.store",30],["picliume.store",30],["pixmela.online",30],["imgpukrr.site",30],["picuekr.site",30],["pixotor.cfd",30],["imgmgh.site",30],["imgnefl.site",30],["imglekw.site",30],["imgsdi.site",30],["imgneor.store",30],["imgsdi.store",30],["imgpukxxr.site",30],["imgsdi.website",30],["imgsxo.site",30],["imgxto.store",30],["imgutkr.store",30],["imghhr.online",30],["imglaiw.store",30],["imgotw.store",30],["imgpai.online",30],["imgqyrew.store",30],["imgutkr.online",30],["imgvue.online",30],["imgxgf.store",30],["imgxqy.online",30],["imgbibam.online",30],["imgngf.online",30],["imgqaz.online",30],["imgulur.online",30],["imgurj.online",30],["imgurt.online",30],["imgwtz.online",30],["imgwxr.online",30],["imgwzr.online",30],["imgyre.online",30],["imgbak.store",30],["imgbek.store",30],["picler.store",30],["piclerx.store",30],["piclerz.store",30],["pixlev.store",30],["pixmax.store",30],["pixmex.store",30],["imgbaex.store",30],["imgbah.online",30],["imgbaie.online",30],["imgbango.store",30],["imgbier.store",30],["imgbimn.store",30],["imgbqw.store",30],["imgbuba.online",30],["imgbwe.store",30],["imgbxs.online",30],["imgcao.store",30],["imgnwe.online",30],["imgqge.store",30],["imgqxb.online",30],["imgteq.online",30],["imgtex.online",30],["imgtuta.online",30],["imgwqr.online",30],["imgwww.store",30],["imgxza.store",30],["imgezx.sbs",30],["imgbcxsb.store",30],["imgbcxs.store",30],["imgbake.cfd",30],["nightfallnews.com",30],["cararegistrasi.com",30],["ipa-apps.me",30],["theicongenerator.com",30],["zentum.club",30],["flightsim.to",30],["imslp.org",30],["michaelemad.com",30],["world-trips.net",30],["financeflix.in",30],["technoflip.in",30],["chooyomi.com",30],["freebrightsoft.com",30],["takez.co",30],["go.freetrx.fun",30],["imgmffg.sbs",30],["imgmffgtr.sbs",30],["imgnbg.sbs",30],["imgngc.sbs",30],["imgnmh.cfd",30],["imgqte.sbs",30],["imguthes.sbs",30],["imgwag.cfd",30],["imgwang.cfd",30],["apps2app.com",31],["apkmb.com",32],["moalm-qudwa.blogspot.com",33],["aemenstore.com",34],["aloass.com",34],["alobyt.com",34],["alogum.com",34],["alohdd.com",34],["anhdep24.com",34],["byboe.com",34],["cazzette.com",34],["hookeaudio.com",34],["jncojeans.com",34],["kiemlua.com",34],["kingsleynyc.com",34],["lucidcam.com",34],["nguyenvanbao.com",34],["nousdecor.com",34],["pennbookcenter.com",34],["restorbio.com",34],["staaker.com",34],["uebnews.online",34],["thegoneapp.com",34],["techus.website",34],["ptjobsz.xyz",34],["tech24us.com",34],["samapkstore.com",35],["5ggyan.com",35],["hipsonyc.com",35],["nulleb.com",36],["janusnotes.com",37],["absolutesmmpanel.com",38],["myhiddentech.com",38],["mhma12.tech",38],["egao.in",39],["emulatorgames.net",40],["doctor-groups.com",41],["luckydice.net",41],["crypto-faucet.xyz",41],["short.mcmcryptos.xyz",41],["cashearn.cc",42],["subscene.vip",42],["yifysub.net",42],["ohyeah1080.site",43],["menjelajahi.com",44],["thaitrieuvi.live",45],["forexeen.us",45],["health-and.me",45],["filessrc.com",45],["srcimdb.com",45],["droidmirror.com",45],["infokik.com",45],["itscybertech.com",45],["arealgamer.org",45],["unityassetcollection.com",46],["romadd.com",47],["rethmic.com",48],["romhustler.org",49],["filmyhitlink.xyz",50],["allwpworld.com",52],["forex-gold.net",52],["trzpro.com",53],["techhelpbd.com",53],["zedge.net",54],["send-anywhere.com",55],["upstore.net",56],["maxurlz.com",57],["rincondelsazon.com",58],["tattoosbeauty.com",58],["disheye.com",59],["computerpedia.in",59],["mp3juices.icu",60],["watchdoge.xyz",61],["games.miamiherald.com",62],["bingotingo.com",63],["thizissam.in",63],["proviralhost.com",64],["urbharat.xyz",64],["techyreviewx.com",65],["jojo-themes.net",66],["privatemoviez.fun",67],["redirect.dafontvn.com",68],["cue-vana.com",69],["crdroid.net",69],["rlxtech.tech",69],["privatemoviez.best",69],["descargatepelis.com",70],["edufileshare.com",71],["wowroms.com",73],["play.aidungeon.io",75],["whatsappmods.net",76],["vocalley.com",77],["hashhackers.com",78],["katdrive.net",78],["newsongs.co.in",78],["adshnk.com",79],["blogmado.com",80],["pinloker.com",81],["sekilastekno.com",81],["fikper.com",82],["tralhasvarias.blogspot.com",83],["busuu.com",84],["novelgames.com",85]]);

const entitiesMap = new Map([["123link",0],["platinmods",0],["eg4link",0],["idlelivelink",0],["igram",0],["lin-ks",0],["xberuang",0],["topflix",0],["leechall",0],["bde4",0],["lootlinks",0],["acortalo",6],["acortar",6],["filemoon",14],["dutchycorp",16],["bluemediafiles",24],["pixlev",30],["cinemakottaga",51],["technicalatg",72]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function nanoSetIntervalBooster(
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
    self.setInterval = new Proxy(self.setInterval, {
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
    try { nanoSetIntervalBooster(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

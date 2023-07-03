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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

(function uBOL_addEventListenerDefuser() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"DOMContentLoaded\",\"admiral\"]","[\"load\",\"Dislike intrusive ads\"]","[\"load\",\"adblock_whitelist\"]","[\"DOMContentLoaded\",\"replaceAdsWithFallbackImages\"]","[\"np.detect\"]","[\"load\",\".offsetHeight == 0\"]","[\"load\",\"adBlock\"]","[\"/load|error/\",\".head.removeChild(\"]","[\"click\",\"popundr\"]","[\"click\",\"interstitial\"]","[\"mouseleave\",\"scribd_ad\"]","[\"mouseleave\"]","[\"popstate\",\"addEventProcessor\"]","[\"scroll\",\"eventHandle.elem\"]","[\"wheel\"]","[\"scroll\",\"documentElement.scrollTop\"]","[\"scroll\",\"_onscroll\"]","[\"mouseout\",\"#modalSair\"]","[\"scroll\",\"showPopup\"]","[\"scroll\",\".open()\"]","[\"mouseout\",\"event.dispatch.apply\"]","[\"ww-open-overlay\",\"scrollTop\"]","[\"load\",\"setVideoTop\"]","[\"scroll\",\"t.attemptLoad\"]","[\"load\",\"event.dispatch.apply\"]","[\"contextmenu\",\"preventDefault\"]","[\"/^(contextmenu|copy)$/\"]","[\"blur\"]","[\"copy\"]","[\"contextmenu\"]","[\"/^(?:contextmenu|copy|selectstart)$/\"]","[\"/^(?:contextmenu|copy)$/\",\"preventDefault\"]","[\"/^(?:contextmenu|keydown)$/\"]","[\"mouseout\"]","[\"scroll\"]","[\"DOMContentLoaded\",\".js-popup-adblock\"]","[\"keydown\"]","[\"/^(contextmenu|keydown)$/\"]","[\"/^(?:contextmenu|copy|keydown)$/\"]","[\"mouseout\",\"pop\"]","[\"/^(?:keyup|keydown)$/\"]","[\"keydown\",\"disable_in_input\"]","[\"keydown\",\"preventDefault\"]","[\"/contextmenu|keydown|keyup|copy/\"]","[\"copy\",\"getSelection\"]","[\"\",\"t.preventDefault\"]","[\"copy\",\"replaceCopiedText\"]","[\"/^(contextmenu|copy|dragstart|selectstart)$/\"]","[\"\",\"ads\"]","[\"/contextmenu|selectstart|copy/\"]","[\"/selectstart|copy/\"]","[\"\",\"activeKeys\"]","[\"/contextmenu|copy|keydown/\"]","[\"/contextmenu|select|copy/\"]","[\"contextmenu\",\"a\"]","[\"/^(mouseout|mouseleave)$/\"]","[\"/contextmenu|selectstart/\"]","[\"dragstart|keydown/\"]","[\"/contextmenu|keydown|dragstart/\"]","[\"\",\"_0x\"]","[\"copy\",\"preventDefault\"]","[\"\",\"adtoniq\"]","[\"/^(?:contextmenu|copy|keydown|mousedown)$/\"]","[\"/contextmenu|keydown/\"]","[\"/keydown|keyup/\"]","[\"devtoolschange\"]","[\"/contextmenu|copy/\"]","[\"\",\"mdp\"]","[\"/blur|mousedown|mouseenter|mouseleave/\"]","[\"/contextmenu|cut|copy|paste/\"]","[\"/contextmenu|mousedown/\"]","[\"/contextmenu|copy|selectstart/\"]","[\"\",\"0x\"]","[\"/^(?:contextmenu|dragstart|selectstart)$/\"]","[\"/^(?:contextmenu|copy)$/\"]","[\"/dragstart|keyup|keydown/\"]","[\"/keyup|keydown/\",\"wpcc\"]","[\"/contextmenu|cut|copy|keydown/\"]","[\"\",\"undefined\"]","[\"/contextmenu|selectstart|copy|dragstart/\"]","[\"/copy|dragstart/\"]","[\"/copy|contextmenu/\"]","[\"error\"]","[\"dragstart\"]","[\"\",\"AdB\"]","[\"selectionchange\",\"quill.emitter\"]","[\"/contextmenu|selectstart|select|copy|dragstart/\"]","[\"load\",\"adLazy\"]","[\"copy\",\"jQuery!==\\\"undefined\\\"\"]","[\"copy\",\"[native code]\"]","[\"/selectionchange|mousedown/\",\"[native code]\"]","[\"selectstart\"]","[\"/^(?:copy|paste)$/\",\"undefined\"]","[\"/copy|keydown/\"]","[\"/copy|cut|selectstart/\"]","[\"/keydown|keyup/\",\"keyCode\"]","[\"keydown\",\"disabledEvent\"]","[\"\",\"Key\"]","[\"/copy|cut|paste|selectstart/\"]","[\"/contextmenu|dragstart|keydown/\",\"event.dispatch.apply\"]","[\"beforepaste\"]","[\"\",\"keyCode\"]","[\"DOMContentLoaded\",\"rprw\"]","[\"\",\"key\"]","[\"\",\"ctrlKey\"]","[\"contextmenu\",\"event.triggered\"]","[\"copy\",\"pagelink\"]","[\"/keydown|mousedown/\"]","[\"copy\",\"Source\"]","[\"\",\"login\"]","[\"/contextmenu|copy|drag|dragstart/\"]","[\"/contextmenu|keydown|keypress|copy/\"]","[\"\",\"blockFuckingEverything\"]","[\"mouseout\",\"openLayer\"]","[\"/contextmenu|keydown/\",\"preventDefault\"]","[\"mousedown\",\"dispatch\"]","[\"/contextmenu|mousedown/\",\"return\\\"undefined\\\"\"]","[\"DOMContentLoaded\",\"ready\"]","[\"keydown\",\"disabledKeys\"]","[\"DOMContentLoaded\",\"\\\"load\\\"\"]","[\"contextmenu\",\"_0x\"]","[\"keydown\",\"keyCode\"]"];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["timeanddate.com",[1,16]],["slideshare.net",[2,10]],["warcraftlogs.com",3],["nwdb.info",4],["explorecams.com",4],["tiermaker.com",4],["freeforumzone.com",5],["megogo.sport",6],["megogo.ru",6],["ynet.co.il",7],["infobae.com",7],["abcnyheter.no",7],["sme.sk",7],["yourdictionary.com",7],["foxnews.com",7],["fulltimehdfilmizle.com",8],["boyfriendtv.com",9],["milenio.com",[11,28]],["jakiwniosek.pl",11],["hikakaku.com",12],["wacul-ai.com",13],["qodeinteractive.com",14],["digitalvidya.com",14],["bbc.co.uk",15],["imovelguide.com.br",17],["facebook.com",18],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",18],["cnyfertility.com",19],["da-direkt.de",20],["westwing.de",21],["tv.golfnetwork.co.jp",22],["bijutsutecho.com",23],["try-it.jp",24],["themeslide.com",[25,50,51,67]],["maxstream.video",25],["wpb.shueisha.co.jp",25],["vedantu.com",25],["zsti.zsti.civ.pl",25],["miraculous.to",[25,40]],["simpulumlamerop.com",[25,96]],["urochsunloath.com",[25,96]],["monorhinouscassaba.com",[25,96]],["counterclockwisejacky.com",[25,96]],["35volitantplimsoles5.com",[25,96]],["scatch176duplicities.com",[25,96]],["antecoxalbobbing1010.com",[25,96]],["boonlessbestselling244.com",[25,96]],["cyamidpulverulence530.com",[25,96]],["guidon40hyporadius9.com",[25,96]],["449unceremoniousnasoseptal.com",[25,96]],["19turanosephantasia.com",[25,96]],["30sensualizeexpression.com",[25,96]],["321naturelikefurfuroid.com",[25,96]],["745mingiestblissfully.com",[25,96]],["availedsmallest.com",[25,96]],["greaseball6eventual20.com",[25,96]],["toxitabellaeatrebates306.com",[25,96]],["20demidistance9elongations.com",[25,96]],["audaciousdefaulthouse.com",[25,96]],["fittingcentermondaysunday.com",[25,96]],["fraudclatterflyingcar.com",[25,96]],["launchreliantcleaverriver.com",[25,96]],["matriculant401merited.com",[25,96]],["realfinanceblogcenter.com",[25,96]],["reputationsheriffkennethsand.com",[25,96]],["telyn610zoanthropy.com",[25,96]],["tubelessceliolymph.com",[25,96]],["tummulerviolableness.com",[25,96]],["un-block-voe.net",[25,96]],["v-o-e-unblock.com",[25,96]],["voe-un-block.com",[25,96]],["voeun-block.net",[25,96]],["voeunbl0ck.com",[25,96]],["voeunblck.com",[25,96]],["voeunblk.com",[25,96]],["voeunblock.com",[25,96]],["voeunblock1.com",[25,96]],["voeunblock2.com",[25,96]],["voeunblock3.com",[25,96]],["audiotools.pro",25],["magesy.blog",25],["magesypro.pro",25],["audioztools.com",25],["www.ntv.co.jp",25],["faptiti.com",25],["wormate.io",25],["selfstudys.com",25],["adslink.pw",25],["jpopsingles.eu",25],["vinstartheme.com",[25,118]],["leakedzone.com",[25,121]],["s0urce.io",26],["filefox.cc",27],["uol.com.br",28],["gazetadopovo.com.br",28],["gazetaonline.com.br",28],["indiatimes.com",28],["odiario.com",28],["otempo.com.br",28],["estadao.com.br",28],["bacaan.id",28],["ofuxico.com.br",28],["pentruea.com",28],["ciberduvidas.iscte-iul.pt",28],["globo.com",28],["citas.in",28],["blitzrechner.de",28],["emailfake.com",28],["lyrical-nonsense.com",28],["mediafax.ro",28],["economica.net",28],["polsatnews.pl",28],["novagente.pt",28],["arlinadzgn.com",28],["time.geekbang.org",[28,90]],["nowcoder.com",28],["libertatea.ro",28],["erinsakura.com",28],["yuque.com",28],["deepl.com",28],["digi24.ro",28],["onna.kr",28],["ziare.com",28],["agrointel.ro",28],["skyozora.com",28],["veneto.info",28],["peliculas24.me",29],["roztoczanskipn.pl",29],["economictimes.indiatimes.com",[29,33]],["dzwignice.info",29],["script-stack.com",[29,67]],["mio.to",29],["husseinezzat.com",[29,36]],["taxo-acc.pl",29],["portalwrc.pl",29],["lublin.eu",29],["onlystream.tv",29],["dddance.party",29],["kapiert.de",29],["hitcena.pl",29],["tv-asahi.co.jp",29],["digitalfernsehen.de",29],["suzylu.co.uk",29],["music.apple.com",29],["skidrowcodex.net",29],["vsco.co",29],["nationalgeographic.com",29],["festival-cannes.com",29],["strcloud.in",29],["ufret.jp",29],["thenekodark.com",29],["artesacro.org",29],["poli-vsp.ru",29],["polyvsp.ru",29],["ananweb.jp",29],["daimangajiten.com",29],["digital.lasegunda.com",29],["hibiki-radio.jp",29],["garyfeinbergphotography.com",29],["clubulbebelusilor.ro",29],["gplinks.co",29],["ifdreamscametrue.com",29],["marksandspencer.com",29],["stowarzyszenie-impuls.eu",29],["viveretenerife.com",29],["oferty.dsautomobiles.pl",29],["wzamrani.com",29],["citroen.pl",29],["peugeot.pl",29],["wirtualnyspac3r.pl",29],["sporizle1.pw",29],["antena3.com",29],["lasexta.com",29],["pashplus.jp",29],["upvideo.to",29],["kpopsea.com",29],["cnki.net",29],["wpchen.net",29],["hongxiu.com",29],["readnovel.com",29],["uihtm.com",29],["uslsoftware.com",29],["rule34hentai.net",29],["cloudemb.com",29],["news24.jp",29],["gaminplay.com",29],["njjzxl.net",29],["voe.sx",[29,95]],["voe-unblock.com",[29,95]],["scrolller.com",29],["cocomanga.com",29],["nusantararom.org",[29,101]],["virpe.cc",29],["pobre.tv",[29,101]],["ukrainashop.com",29],["celtadigital.com",29],["matzoo.pl",29],["asia2tv.cn",29],["labs.j-novel.club",29],["turbo1.co",29],["futbollatam.com",29],["read.amazon.com",29],["box-manga.com",29],["the-masters-voice.com",29],["hemas.pl",29],["accgroup.vn",29],["btvnovinite.bg",29],["allcryptoz.net",29],["crewbase.net",29],["crewus.net",29],["shinbhu.net",29],["shinchu.net",29],["thumb8.net",29],["thumb9.net",29],["topcryptoz.net",29],["uniqueten.net",29],["ultraten.net",29],["cloudcomputingtopics.net",29],["bianity.net",29],["coinsparty.com",29],["postype.com",29],["lofter.com",[29,109]],["hentaihaven.xxx",29],["espn.com",29],["4media.com",29],["przegladpiaseczynski.pl",29],["freewaysintl.com",29],["cool-etv.net",29],["j91.asia",29],["knshow.com",30],["jusbrasil.com.br",31],["promobit.com.br",33],["techjunkie.com",33],["zerohedge.com",33],["1mg.com",33],["khou.com",33],["artsy.net",34],["boards.net",34],["freeforums.net",34],["proboards.com",34],["tastycookery.com",35],["ieltsliz.com",36],["jootc.com",36],["hikarinoakari.com",36],["operatorsekolahdbn.com",36],["wawlist.com",36],["animeshouse.net",37],["free-mp3-download.net",37],["tepat.id",37],["techsupportall.com",38],["lugarcerto.com.br",39],["satcesc.com",40],["animatedshows.to",40],["statelibrary.us",41],["bigulnews.tv",43],["news.chosun.com",44],["androidweblog.com",45],["cronista.com",46],["fcportables.com",47],["venea.net",48],["uta-net.com",49],["downloadtutorials.net",[49,67]],["blog.naver.com",49],["myschool-eng.com",52],["orangespotlight.com",53],["th-world.com",[53,72]],["itvn.pl",54],["itvnextra.pl",54],["kuchniaplus.pl",54],["miniminiplus.pl",54],["player.pl",54],["ttv.pl",54],["tvn.pl",54],["tvn24.pl",54],["tvn24bis.pl",54],["tvn7.pl",54],["tvnfabula.pl",54],["tvnstyle.pl",54],["tvnturbo.pl",54],["x-link.pl",54],["x-news.pl",54],["kickante.com.br",11],["thestar.com.my",11],["corriereadriatico.it",11],["scribd.com",55],["thehouseofportable.com",56],["ntvspor.net",56],["book.zhulang.com",56],["tadu.com",56],["selfstudyhistory.com",57],["lokercirebon.com",58],["avdelphi.com",59],["alphapolis.co.jp",60],["blog.csdn.net",60],["juejin.cn",60],["sweetslyrics.com",60],["thegatewaypundit.com",61],["thegearhunt.com",62],["jfdb.jp",63],["loginhit.com.ng",63],["charbelnemnom.com",63],["bphimmoi.net",63],["goodhub.xyz",63],["getwsodo.com",64],["edailybuzz.com",66],["zhihu.com",66],["qidian.com",66],["invado.pl",66],["webnovel.com",66],["bajecnavareska.sk",67],["lunas.pro",67],["onlinefreecourse.net",67],["pisr.org",67],["uplod.net",67],["thewpclub.net",67],["thememazing.com",67],["themebanks.com",67],["mesquitaonline.com",67],["skandynawiainfo.pl",67],["onlinecoursebay.com",67],["magnet-novels.com",68],["dreamsfriend.com",69],["trakteer.id",70],["699pic.com",70],["kutub3lpdf.com",71],["sklep-agroland.pl",73],["polagriparts.pl",74],["nordkorea-info.de",75],["geotips.net",76],["hardcoregames.ca",77],["lataifas.ro",78],["toppremiumpro.com",79],["wattpad.com",80],["starbene.it",81],["fauxid.com",82],["androidtvbox.eu",83],["nicematin.com",84],["bilibili.com",85],["yamibo.com",86],["fimfiction.net",87],["moegirl.org.cn",88],["bbs.mihoyo.com",89],["jianshu.com",89],["leetcode-cn.com",89],["peekme.cc",91],["ihbarweb.org.tr",92],["baixedetudo.net.br",93],["gardenia.net",94],["wpking.in",97],["hollywoodmask.com",98],["mbalib.com",98],["wenku.baidu.com",99],["mooc.chaoxing.com",100],["www-daftarharga.blogspot.com",101],["realpython.com",102],["linkmate.xyz",103],["cristelageorgescu.ro",104],["novelpia.com",105],["privivkainfo.ru",106],["frameboxxindore.com",106],["descargatepelis.com",107],["vercalendario.info",108],["poipiku.com",110],["postcourier.com.pg",111],["gmx.co.uk",113],["gmx.com",113],["likey.me",114],["wallpaperaccess.com",115],["shortform.com",116],["joysound.com",117],["colors.sonicthehedgehog.com",119],["senpa.io",120]]);

const entitiesMap = new Map([["wstream",25],["voe-unblock",[25,96]],["pobre",[25,112]],["mangaku",29],["dood",29],["streamtape",29],["asiatv",29],["descarga-animex",32],["tabonitobrasil",42],["anisubindo",42],["bmovies",65]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const extraArgs = getExtraArgs(Array.from(arguments), 2);
    const safe = safeSelf();
    const reType = patternToRegex(type);
    const rePattern = patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { addEventListenerDefuser(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

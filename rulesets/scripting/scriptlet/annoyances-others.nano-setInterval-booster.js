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

(function uBOL_nanoSetIntervalBooster() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"count\",\"*\",\"0.02\"]","[\"counter\",\"*\",\"0.02\"]","[\"download\",\"*\",\"0.02\"]","[\"timer\",\"\",\"0.02\"]","[\"timeLeft\",\"*\",\"0.02\"]","[\"timeLeft\",\"\",\"0.02\"]","[\"/_0x|wpsafe-/\",\"*\",\"0.02\"]","[\"Download\",\"*\",\"0.02\"]","[\"counter--\",\"*\",\"0.02\"]","[\"count--\",\"*\",\"0.02\"]","[\"time\",\"*\",\"0.02\"]","[\"p--\",\"\",\"0.02\"]","[\"current()\",\"*\",\"0.02\"]","[\"wpsafe-\",\"*\",\"0.02\"]","[\"disabled\",\"*\",\"0.02\"]","[\"timePassed\",\"*\",\"0.02\"]","[\"countdown\",\"*\",\"0.02\"]","[\"/Seconds|download/\",\"*\",\"0.02\"]","[\"download_progress\",\"*\",\"0.02\"]","[\"count\",\"1600\",\"0.02\"]","[\"downloadButton\",\"*\",\"0.02\"]","[\"waitTime\",\"*\",\"0.02\"]","[\"timer\",\"*\",\"0.02\"]","[\"timeSec--\",\"*\",\"0.02\"]","[\"_0x\",\"*\",\"0.02\"]","[\"/innerHTML|count/\",\"*\",\"0.02\"]","[\"wpsafe-generate\",\"*\",\"0.02\"]","[\"document.hidden\",\"*\",\"0.02\"]","[\"#mdtimer\",\"\",\"0.02\"]","[\"updatePercentage\",\"*\",\"0.02\"]","[\"timePassed\",\"\",\"0.02\"]","[\"DOWNLOAD\",\"*\",\"0.02\"]","[\"Number\",\"\",\"0.02\"]","[\"/counter|wait/\",\"*\",\"0.02\"]","[\"get-link\",\"*\",\"0.02\"]","[\"cont\",\"*\",\"0.02\"]","[\"\",\"dataType:_\",\"1000\",\"0.02\"]","[\"/wpsafe|count/\",\"*\",\"0.02\"]","[\"downloadToken\",\"*\",\"0.02\"]","[\"/timeLeft|wpsafe-/\",\"*\",\"0.02\"]","[\"cnDownloadBtn\",\"*\",\"0.02\"]","[\"download_link\",\"*\",\"0.02\"]","[\"secondsleft\",\"*\",\"0.02\"]","[\"countdown\",\"\",\"0.02\"]","[\"yuidea-\",\"*\",\"0.02\"]","[\"timer--\",\"*\",\"0.02\"]","[\"success\",\"\",\"0.02\"]","[\"/verify_text|isCompleted/\",\"*\",\"0.02\"]","[\"#timer\",\"\",\"0.02\"]","[\"countdownwrapper\",\"\",\"0.02\"]","[\"timeleft\",\"*\",\"0.02\"]","[\"contador\",\"*\",\"0.02\"]","[\"Your Link\",\"\",\"0.02\"]","[\"count\",\"\",\"0.02\"]","[\"/download|Please/\",\"\",\"0.02\"]","[\"downloadButton\",\"\",\"0.02\"]","[\"window.location.href= atob(\",\"1000\",\"0.02\"]","[\".show_download_links\",\"\",\"0.02\"]","[\"download-btn\",\"\",\"0.02\"]","[\"updatePercentage\",\"100\",\"0.02\"]","[\"decodeURIComponent(link)\",\"\",\"0.02\"]","[\"/count-|-wait/\",\"*\",\"0.02\"]","[\"waktu--\",\"\",\"0.02\"]","[\".download\",\"\",\"0.02\"]","[\"/base-timer-label|waktu--/\",\"\",\"0.02\"]","[\"curCount\",\"\",\"0.02\"]","[\"Please wait\",\"\",\"0.02\"]","[\"mdtimer\",\"\",\"0.02\"]","[\"gotolink\",\"*\",\"0.02\"]","[\"seconds--\",\"*\",\"0.02\"]","[\"claim_button\",\"*\",\"0.02\"]","[\"/Please Wait|Generating Links/\",\"*\",\"0.02\"]","[\"#second\",\"\",\"0.02\"]","[\"#countdown\",\"\",\"0.02\"]","[\"progressbar\",\"30\",\"0.02\"]","[\"#upbtn\",\"\",\"0.02\"]","[\"skip-btn\",\"*\",\"0.02\"]","[\"tp-\",\"*\",\"0.02\"]","[\"downloadTimer\",\"\",\"0.02\"]","[\"/Please Wait|Go to download/\",\"\",\"0.02\"]","[\"counter\",\"\",\"0.02\"]","[\"/counter--|downloadButton/\",\"\",\"0.02\"]","[\"location\",\"\",\"0.02\"]","[\"counter--\",\"\",\"0.02\"]","[\"pleasewait\",\"\",\"0.02\"]","[\"bb_download_delay\",\"\",\"0.02\"]","[\"0x\",\"\",\"0.02\"]","[\"timeCount\",\"*\",\"0.2\"]","[\"counter\",\"2000\",\"0.02\"]","[\"downloadLinkButton\",\"*\",\"0.02\"]","[\"startChecking\",\"*\",\"0.02\"]","[\"timer\",\"1000\",\"0.02\"]","[\"timeleft\",\"\",\"0.02\"]","[\"show_download_links\",\"\",\"0.02\"]","[\"REDIRECTING\",\"*\",\"0.02\"]","[\"ct\",\"1000\",\"0.02\"]","[\"sec--\",\"\",\"0.02\"]","[\"count--\",\"\",\"0.02\"]","[\"sec\",\"\",\"0.02\"]","[\"wpsafe-\",\"\",\"0.02\"]","[\"wpsafe-\",\"2000\",\"0.02\"]","[\"wpsafe-\",\"1500\",\"0.02\"]","[\"get-link\",\"\",\"0.02\"]","[\"download\",\"2000\",\"0.02\"]","[\"timer\",\"1500\",\"0.02\"]","[\"timer\",\"2000\",\"0.02\"]","[\"Link\",\"550\",\"0.02\"]","[\"#proceed\",\"\",\"0.02\"]","[\"counter\",\"1800\",\"0.02\"]","[\"downloadButton\",\"1500\",\"0.02\"]","[\"sp-count-down\",\"\",\"0.02\"]","[\"gotolink\",\"\",\"0.02\"]","[\"btngetlink\",\"30\",\"0.02\"]","[\"btn\",\"\",\"0.02\"]","[\"/show_download_links|downloadTimer/\",\"\",\"0.02\"]","[\"timeinterval\",\"\",\"0.02\"]","[\"countDown\",\"1150\",\"0.5\"]","[\"makingdifferenttimer\",\"50\",\"0.02\"]","[\"Link()\",\"\",\"0.02\"]","[\"time\",\"\",\"0.02\"]","[\"time\",\"2500\",\"0.02\"]","[\"freeRemind\",\"\",\"0.02\"]","[\"contador\",\"\",\"0.02\"]","[\"contador--\",\"\",\"0.02\"]","[\"counter--\",\"1300\",\"0.02\"]","[\"seconds\",\"\",\"0.02\"]","[\"downloadButton\",\"1000\",\"0.02\"]","[\"counter\",\"1000\",\"0.02\"]","[\"wpsafe-generate\",\"\",\"0.02\"]","[\"timerText\",\"\",\"0.02\"]","[\"#counter\",\"\",\"0.02\"]","[\"counter\",\"1500\",\"0.02\"]","[\"download-count-down\",\"\",\"0.02\"]","[\"runTimer\",\"\",\"0.02\"]","[\"[0x\",\"\",\"0.02\"]","[\"#download\",\"\",\"0.02\"]","[\"percentVal\",\"30\",\"0.02\"]","[\"wpsafe-generate\",\"1000\",\"0.02\"]","[\"wpsafe\",\"\",\"0.02\"]","[\"timer\",\"1000\",\"0.6\"]","[\"\",\"1000\",\"0.05\"]","[\"second--\",\"\",\"0.02\"]","[\"#bt\",\"\",\"0.02\"]","[\"counter--\",\"100\",\"0.02\"]","[\"#Download-Card\",\"\",\"0.02\"]","[\".stop()\",\"\",\"0.02\"]","[\"counter\",\"1000\",\"0.5\"]","[\"Link will appear\",\"510\",\"0.02\"]","[\"Link will appear\",\"1010\",\"0.02\"]","[\"countdown\",\"2000\",\"0.02\"]","[\"sayimiBaslat\",\"\",\"0.02\"]","[\"wpsafe-link\",\"2000\",\"0.02\"]","[\"#eg-timer\",\"\",\"0.3\"]","[\"#CountDown\",\"\",\"0.02\"]","[\"dllink\",\"\",\"0.02\"]","[\"time--\",\"\",\"0.02\"]","[\"stop()\",\"\",\"0.02\"]","[\"second\",\"1000\",\"0.02\"]","[\"wait_seconds\",\"\",\"0.02\"]","[\"download-countdown\",\"\",\"0.02\"]","[\"current_progress\",\"2000\",\"0.02\"]","[\"display()\",\"\",\"0.02\"]","[\"get_link\",\"\",\"0.02\"]","[\"goToLink\",\"2200\",\"0.02\"]","[\".countdown\",\"2000\",\"0.02\"]","[\"urll\",\"800\",\"0.02\"]","[\"Downloading\",\"\",\"0.02\"]","[\"linkDL\",\"\",\"0.02\"]","[\"downloadButton\",\"2400\",\"0.02\"]","[\"#pleasewait\",\"\",\"0.02\"]","[\".fcounter span\",\"\",\"0.02\"]","[\"real-link\",\"\",\"0.02\"]","[\".wpapks-download-link-wrapper\",\"\",\"0.02\"]","[\"(i-1)\",\"\",\"0.02\"]","[\"fcounter\",\"\",\"0.02\"]","[\"show_ag\",\"\",\"0.02\"]","[\"timer\",\"700\",\"0.02\"]","[\"clock()\",\"1000\",\"0.02\"]","[\".countdown\",\"\",\"0.02\"]","[\"secondsLeft\",\"\",\"0.02\"]","[\"timeLeft--\",\"\",\"0.02\"]","[\"/_0x[\\\\s\\\\S]*?decodeURIComponent/\",\"\",\"0.02\"]","[\"count-\",\"\",\"0.02\"]","[\"#download-popup\",\"\",\"0.02\"]","[\".timer\",\"\",\"0.02\"]","[\"#download_menu\",\"\",\"0.02\"]","[\"r--\",\"\",\"0.02\"]","[\"showDownloadButton\",\"\",\"0.02\"]","[\"download_link\",\"\",\"0.02\"]","[\"onLoop\",\"\",\"0.02\"]","[\"timer.remove\",\"\",\"0.02\"]","[\"download\",\"\",\"0.02\"]","[\"i--\",\"\",\"0.02\"]"];

const hostnamesMap = new Map([["finclub.in",0],["financeyogi.net",0],["trangchu.news",0],["downfile.site",0],["player.pelisgratishd.io",0],["doibihar.org",0],["educationgyani.com",0],["ffworld.xyz",0],["gawbne.com",0],["forex-trnd.com",[0,28]],["forex-golds.com",0],["novelsapps.com",1],["codesnse.com",1],["speedtorrent.ru",1],["listas.pro",1],["forexit.io",1],["healthy4pepole.com",[1,78,80]],["sitecuatui.xyz",1],["haonguyen.top",1],["androjungle.com",2],["getmodsapk.com",2],["go.freetrx.fun",3],["wpking.in",3],["yifysubtitles.me",3],["michaelemad.com",3],["shtms.co",3],["gitizle.vip",3],["ay.live",3],["techrfour.com",3],["theicongenerator.com",3],["multilinkfz.xyz",3],["yindex.xyz",3],["unityassetcollection.com",3],["earningradar.com",3],["findi.pro",3],["uzunversiyon.xyz",3],["direkizle.xyz",3],["tamindir.mobi",3],["aylink.co",3],["moretvtime.com",3],["urlpay.net",3],["claim4.fun",3],["mixrootmods.com",4],["consoleroms.com",4],["romspedia.com",4],["edummm.xyz",4],["shortlinks.tech",5],["dramaworldhd.co",5],["bitefaucet.com",5],["filmypoints.in",[6,13]],["vinstartheme.com",7],["instamod.net",7],["jenismac.com",8],["unityassets4free.com",8],["spacebin.site",8],["freemodapks.com",8],["player.repelis24.rs",9],["makimbo.xyz",10],["dyp.li",11],["linku.to",12],["oneslidephotography.com",13],["apasih.my.id",13],["financekami.com",13],["bico8.com",13],["techyinfo.in",13],["smallinfo.in",13],["techymedies.com",13],["disheye.com",13],["ufacw.com",13],["googledrivelinks.com",13],["technicalatg.com",[13,22]],["ftuapps.dev",13],["dl.tech-story.net",13],["themorningtribune.com",13],["veganho.co",13],["veganal.co",13],["mosqam.com",13],["bimo-cash.readi.online",13],["blog.textpage.xyz",13],["claimlite.club",13],["bitcomarket.net",13],["1apple.xyz",13],["mcrypto.club",[13,128]],["gamepure.in",13],["mad.goiety.com",13],["veganab.co",13],["apkmaven.io",13],["gaminplay.com",[13,44,101]],["choiceappstore.xyz",13],["pn.cgchotbox.com",13],["worldappsstore.xyz",13],["gifans.com",13],["iptvjournal.com",13],["kienthucrangmieng.com",13],["coin-free.com",13],["moddingzone.in",13],["insurance-space.xyz",13],["blognews.in",13],["noithatmyphu.vn",13],["dulichkhanhhoa.net",13],["therootdroid.com",13],["7apple.net",13],["arhplyrics.in",13],["netfile.cc",13],["jardima.com",13],["courseforfree.com",13],["tutorial.siberuang.com",13],["segurosdevida.site",13],["surl.li",14],["bankvacency.com",15],["indilinks.xyz",16],["discordbotlist.com",16],["maxsilo.in",17],["starfiles.co",18],["nguyenvanbao.com",19],["androidecuatoriano.xyz",20],["sinonimos.de",21],["atlai.club",21],["blogtechh.com",23],["vavada5com.com",23],["financerites.in",23],["financerites.com",23],["vocalley.com",23],["howifx.com",23],["enit.in",23],["skincarie.com",23],["imperialstudy.com",23],["diudemy.com",24],["techboyz.xyz",24],["adslink.pw",24],["mdn.lol",25],["amritadrino.com",26],["3dzip.org",27],["3rabsnews.com",28],["mobileprice.site",28],["bestmobilenew.com",28],["linkjust1.com",28],["vidtome.stream",28],["ta2deem7arbya.com",[29,67]],["eda-ah.com",[29,67]],["modzilla.in",30],["garutpos.com",30],["vrcmods.com",30],["garutexpress.id",30],["getfreecourses.co",31],["dosya.hizliresim.com",32],["vebma.com",33],["pinloker.com",33],["sekilastekno.com",33],["blogmado.com",34],["suaurl.com",35],["webhostingpost.com",36],["wikitraveltips.com",37],["naukrilelo.in",37],["fikper.com",38],["freecoursesonline.me",39],["codingnepalweb.com",[40,124]],["misirtune.blogspot.com",41],["userload.co",42],["dizimini.com",43],["mohammedkhc.com",43],["trendyoum.com",43],["dl.indexmovies.xyz",43],["cheatsquad.gg",43],["mcpedl.com",43],["filese.me",43],["linkslo.com",43],["c1ne.co",43],["pearos.xyz",43],["moddedguru.com",43],["py.md",43],["abhaydigitalmarketer.com",43],["bestshort.xyz",43],["underhentai.net",43],["moaplos.com",43],["nullslide.com",43],["mage.si",43],["embed.m3u-cdn.live",43],["embed.tvcdn.live",43],["mastercoria.com",43],["gamelopte.com",44],["insurglobal.xyz",44],["sevenjournals.com",44],["digworm.io",45],["br0wsers.com",[46,175]],["hashhackers.com",47],["katdrive.net",47],["newsongs.co.in",47],["altblogger.net",48],["cashearn.cc",48],["subscene.vip",48],["safelink.omglyrics.com",48],["4download.net",48],["acortar.info",48],["kotp1000000.xyz",48],["blog.donia-tech.net",48],["anomize.xyz",48],["boardgamesonline.net",48],["freeudemycourse.com",49],["modshost.net",50],["coincity.in",50],["djxmaza.in",50],["examtadka.com",50],["proviralhost.com",50],["urbharat.xyz",50],["codenova-center.web.app",51],["minecraftalpha.net",52],["aeromods.app",53],["whatsaero.com",53],["pahe.win",53],["financeflix.in",53],["technoflip.in",53],["studyranks.in",53],["flightsim.to",53],["hikarinoakari.com",53],["hikarinoakariost.info",53],["recipesdelite.com",54],["edumaz.com",55],["blisseyhusband.in",55],["bingotingo.com",55],["compressware.in",55],["geektopia.info",55],["freecoursewebsite.com",55],["dosyayukle.biz",55],["freetutorialsus.com",55],["apkmos.com",55],["sfile.mobi",55],["notipostingt.com",56],["cmacked.com",57],["movieflixpro.com",57],["gocmod.com",58],["speedynews.xyz",59],["xmod.in",59],["tecmundo.net",59],["crazyblog.in",[59,99,100]],["studyuo.com",[59,99,100]],["sbkaise.in",59],["janusnotes.com",59],["anime-sanka.com",60],["kiemlua.com",[61,88,131]],["world-trips.net",[61,92]],["newforex.online",[61,88]],["pes-patches.com",62],["data.morsodifame.com",62],["ifile.cc",62],["filemoon.sx",63],["truongblogger.top",64],["koyi.pub",65],["thizissam.in",[66,83]],["alphaantileak.net",66],["o-pro.online",67],["mazen-ve.com",67],["animeuploader.com",67],["konstantinova.net",67],["ontools.net",68],["teknopaid.xyz",68],["asdfiles.com",69],["11bit.co.in",70],["spantechie.com",71],["paste1s.com",72],["note1s.com",72],["easylinkref.com",72],["redirect.dafontvn.com",[73,74]],["samapkstore.com",[73,74]],["andronews18.blogspot.com",[73,74]],["ph.tpaste.net",[73,74]],["sdetectives.id",73],["apps2app.com",73],["pro-bangla.com",73],["cheatermad.com",75],["streamcheck.link",76],["tinyurl.so",76],["tinyurl.is",76],["usanewstoday.club",77],["earnme.club",77],["top1iq.com",78],["sama-pro.com",78],["7misr4day.com",[78,96]],["coursefreedl.com",78],["apkmaza.net",78],["jpopsingles.eu",78],["gplinks.co",78],["mobiget.net",78],["newzflair.com",79],["newzmagic.com",79],["adlice.com",80],["yalla-shoot-now.us",80],["forexeen.us",80],["health-and.me",80],["wondervelocity.com",80],["bluetechno.net",80],["world2our.com",80],["mobi2c.com",[80,88]],["mywatchseries.fun",80],["telepisodes.org",80],["kingtalks.net",80],["maxurlz.com",80],["allcryptoz.net",80],["topcryptoz.net",80],["thaitrieuvi.live",80],["freewebcart.com",80],["safe.kangkimin.com",80],["maxservicesi.com",80],["techhelpbd.com",81],["egyfalcons.com",82],["filessrc.com",83],["srcimdb.com",83],["udemycourses.me",83],["eu.tapchipi.com",83],["short.ctvb1.info",83],["citychilli.com",83],["psdly.com",83],["desitvshows.xyz",83],["katmoviehd4.com",83],["download.modsofapk.com",83],["infopedia24.com",83],["linkdecode.com",83],["short-ly.co",84],["upshrink.com",84],["jojo-themes.net",85],["diglink.blogspot.com",86],["th-world.com",86],["za.gl",87],["za.uy",87],["rezence.com",88],["techmody.io",[88,108]],["yoshare.net",88],["mikl4forex.com",[88,131]],["publicananker.com",[88,131]],["aemenstore.com",88],["cazzette.com",88],["truebrandy.com",88],["hookeaudio.com",88],["restorbio.com",88],["medcpu.com",88],["alocd.com",88],["forex-gold.net",[88,92]],["kingsleynyc.com",88],["lucidcam.com",88],["staaker.com",88],["byboe.com",88],["thegoneapp.com",88],["nousdecor.com",88],["alobuu.com",[88,131]],["rodjulian.com",[88,131]],["aloass.com",[88,131]],["taisv.com",[88,131]],["aloguy.com",[88,131]],["alohdd.com",[88,131]],["alogum.com",[88,131]],["alobyt.com",[88,131]],["aloboi.com",[88,131]],["uebnews.online",[88,131]],["aloegg.com",[88,131]],["alofps.com",[88,131]],["pennbookcenter.com",[88,131]],["samfirms.com",89],["appsmodz.com",90],["cararegistrasi.com",91],["healdad.com",92],["gamalk-sehetk.com",92],["hamsterss.website",93],["romadd.com",93],["apkmb.com",93],["boobychristmas.com",94],["ethereumfaucet.info",95],["tutcourse.com",96],["luckydice.net",96],["coinsearns.com",96],["forexrw7.com",96],["fx-22.com",96],["forexmab.com",96],["forexwaw.club",96],["forex-articles.com",96],["linkjust.com",96],["forexlap.com",96],["gdfreak.xyz",96],["doctor-groups.com",96],["crypto-faucet.xyz",96],["mik4mob.com",96],["iklandb.com",96],["urapk.com",96],["dogemate.com",[96,142]],["shorteet.com",96],["earnbits.xyz",96],["bitearns.com",96],["girls-like.me",97],["sonixgvn.net",97],["apkcell.net",97],["runmods.com",97],["watchdoge.xyz",98],["informatikamu.id",[99,100]],["technicalatg.xyz",[99,100]],["taregna.com",[99,100]],["toolss.net",[99,100]],["tutsgalaxy.net",[99,100]],["otomi-games.com",[100,137]],["yifysub.net",102],["cdmstudy.site",103],["insurance.recipesdelite.com",103],["allbuzzin.com",[104,105]],["file.bospedia.com",106],["toptap.website",107],["adnit-tri.tk",107],["boomx5.com",107],["howtofree.org",109],["rethmic.com",110],["majidzhacker.com",[111,112]],["itscybertech.com",113],["shareappscrack.com",114],["oiipdf.com",115],["upstore.net",116],["subs4series.com",117],["gamingforecast.com",118],["icutlink.com",119],["android-apk.org",119],["semawur.com",119],["zegtrends.com",120],["littlebyte.net",121],["megadescargas.net",122],["blyts.net",122],["lawebdelprogramador.com",123],["win10.vn",125],["wildfaucets.ml",125],["faucet.cryptourl.net",125],["dogeatm.com",125],["claimbits.io",125],["i-bits.io",125],["diamondfaucet.space",125],["gobits.io",125],["russiacoin.xyz",125],["starsfaucet.com",125],["lionltcfaucet.xyz",125],["faucet.shorterall.com",125],["yellowfaucet.ovh",125],["bollypluse.in",126],["freecourseslab.com",127],["freetutorialseu.com",127],["informaxonline.com",[128,151]],["tipslearn.com",128],["androidnougatapk.com",128],["siberuang.com",128],["waaboom.com",128],["healthymaster.xyz",128],["bkksnews.xyz",128],["faucetcrypto.com",129],["techoow.com",130],["mynewsmedia.in",131],["mynewshub.co",131],["techbigs.com",132],["kiktu.com",133],["technicalegy.com",134],["wallpaperaccess.com",135],["uniqueten.net",138],["ultraten.net",138],["elil.cc",139],["game-kentang.blogspot.com",140],["upfile.us",140],["mad4wheels.com",141],["moviesdaweb.blogspot.com",143],["dlsharefile.com",144],["eco-area.com",145],["bittools.net",146],["safelink.rezkozpatch.xyz",[147,148]],["onlinecoursebay.com",149],["kazanclilink.com",150],["emulatorgames.net",152],["iptv4best.com",153],["leechall.com",154],["kpopstan.com",155],["ouo.io",156],["cpmlink.net",156],["short-url.link",157],["findicons.com",158],["nulleb.com",159],["bfas237blog.info",160],["dr-farfar.net",161],["saungfirmware.id",162],["goossh.com",163],["onlinefreecourse.net",164],["site.dz4win.com",165],["thingiverse.com",166],["linkerload.com",167],["ockles.com",167],["ljutkeunvpn.blogspot.com",167],["mobilelegends.shop",167],["linksaya.com",168],["phpscripttr.com",169],["essek.gen.tr",169],["indir.turkceyama.net",169],["clicads.fr",169],["mazakony.net",169],["5mod-file.ru",170],["genlink.cc",171],["apkprofree.com",172],["zedge.net",173],["hakdisk.ru",174],["diskapk.ru",174],["softwaresde.com",175],["tr.link",176],["dooood.com",178],["dood.yt",178],["dood.re",178],["dood.wf",178],["dood.la",178],["dood.pm",178],["dood.so",178],["dood.to",178],["dood.watch",178],["dood.ws",178],["nightfallnews.com",179],["retrostic.com",180],["shiroyasha.me",181],["bolicheintercambios.net",182],["lg-firmwares.com",183],["sfirmware.com",183],["imgngc.sbs",184],["imgezx.sbs",184],["imgxza.store",184],["imgwqr.online",184],["imagehaha.com",184],["imgpukrr.site",184],["imagent.buzz",184],["imagepuitr.buzz",184],["imgblaze.net",184],["imgkorle.buzz",184],["imgkaka.xyz",184],["pixsera.net",184],["imgfrost.net",184],["imgair.net",184],["wallpaperplay.com",185],["lnk.parts",186],["lnk.news",186],["sammobile.com",187],["bomurl.com",188],["go.geghost.com",189],["romhustler.org",190],["a2zupload.com",191],["dl.pcgamestorrents.org",192],["get-url.com",192]]);

const entitiesMap = new Map([["lootlinks",53],["ibomma",67],["animesanka",136],["akwam",177],["bluemediafile",192],["bluemediafiles",192]]);

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

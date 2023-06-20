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

(function uBOL_abortOnPropertyWrite() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"_pop\"]","[\"SZAdBlockDetection\"]","[\"_sp_\"]","[\"yafaIt\"]","[\"adblockActive\"]","[\"Fingerprint2\"]","[\"popUrl\"]","[\"checkRealLoad\"]","[\"Fingerprent2\"]","[\"adcashMacros\"]","[\"popupAdCall\"]","[\"showAdBlockerOverlay\"]","[\"AdBlockDetectorWorkaround\"]","[\"open\"]","[\"openLity\"]","[\"ad_abblock_ad\"]","[\"cticodes\"]","[\"imgadbpops\"]","[\"__aaZoneid\"]","[\"smrtSB\"]","[\"smrtSP\"]","[\"IS_ADBLOCK\"]","[\"__NA\"]","[\"ads_priv\"]","[\"ab_detected\"]","[\"t4PP\"]","[\"sc_adv_out\"]","[\"pURL\"]","[\"__htapop\"]","[\"atOptions\"]","[\"popzone\"]","[\"encodeURIComponent\"]","[\"stagedPopUnder\"]","[\"closeMyAd\"]","[\"tiPopAction\"]","[\"ExoLoader\"]","[\"decodeURIComponent\"]","[\"afStorage\"]","[\"u_cfg\"]","[\"adv_pre_duration\"]","[\"adv_post_duration\"]","[\"hidekeep\"]","[\"ShowAdbblock\"]","[\"lifeOnwer\"]","[\"EPeventFire\"]","[\"adBlockDetected\"]","[\"adsurgeNode\"]","[\"segs_pop\"]","[\"$getWin\"]","[\"xhr.prototype.realSend\"]","[\"popUpUrl\"]","[\"btoa\"]","[\"adBlckActive\"]","[\"detectAdblk\"]","[\"adsHeight\"]","[\"adsBlocked\"]","[\"SubmitDownload1\"]","[\"getIfc\"]","[\"adBlockRunning\"]","[\"mz_str\"]","[\"I833\"]","[\"Aloader\"]","[\"bindall\"]","[\"SpecialUp\"]","[\"KillAdBlock\"]","[\"checkAdBlocker\"]","[\"deployads\"]","[\"close_screen\"]","[\"mockingbird\"]","[\"checkAds\"]","[\"XF\"]","[\"check\"]","[\"tabUnder\"]","[\"decodeURI\"]","[\"downloadJSAtOnload\"]","[\"ReactAds\"]","[\"phtData\"]","[\"killAdBlock\"]","[\"adBlocker\"]","[\"Ha\"]","[\"spot\"]","[\"arrayAd2\"]","[\"importFAB\"]","[\"block_detected\"]","[\"document.getElementsByClassName\"]","[\"ABD\"]","[\"mfbDetect\"]","[\"ab_cl\"]","[\"app_vars.force_disable_adblock\"]","[\"ai_adb_overlay\"]","[\"showMsgAb\"]","[\"wutimeBotPattern\"]","[\"popup_ads\"]","[\"adblockerpopup\"]","[\"adblockCheck\"]","[\"cancelAdBlocker\"]","[\"ExoSupport\"]","[\"disableItToContinue\"]","[\"mobilePop\"]","[\"base64_decode\"]","[\"mdp_deblocker\"]","[\"afScript\"]","[\"installBtnvar\"]","[\"showModal\"]","[\"console.log\"]","[\"Script_Manager\"]","[\"daCheckManager\"]","[\"AdBlockerDetected\"]","[\"backgroundBanner\"]","[\"displayCache\"]","[\"DoodPop\"]","[\"tmnramp\"]","[\"ai_front\"]","[\"onpopstate\"]","[\"__C\"]","[\"HTMLElement.prototype.insertAdjacentHTML\"]","[\"onload\"]","[\"gothamBatAdblock\"]","[\"puShown\"]","[\"checkAdBlock\"]","[\"b2a\"]","[\"_chjeuHenj\"]","[\"bullads\"]","[\"detector_launch\"]","[\"pbjs\"]","[\"adBlocked\"]","[\"p$00a\"]","[\"c325\"]","[\"akadb\"]","[\"checkAdsBlocked\"]","[\"DOMAssistant\"]","[\"rotator\"]","[\"AaDetector\"]","[\"NREUM\"]","[\"detectAdblocker\"]","[\"document.ready\"]","[\"ADMITAD\"]","[\"CoinNebula\"]"];

const hostnamesMap = new Map([["skidrowreloaded.com",0],["rule34hentai.net",0],["igfap.com",0],["imgkings.com",0],["watchparksandrecreation.net",0],["ultrahorny.com",0],["mp4upload.com",[0,9]],["srt.am",0],["clik.pw",0],["mangoporn.net",[0,27]],["mitly.us",[0,9,29]],["anime-loads.org",0],["linkrex.net",[0,28]],["123moviesg.com",0],["cpmlink.net",0],["adictosalatele.com",0],["pics4you.net",0],["porndish.com",0],["linclik.com",0],["hindimean.com",0],["daddyhd.com",[0,38]],["jpopsingles.eu",0],["clasico.tv",0],["peliculas1mega.com",[0,46]],["imx.to",0],["peliculasmx.net",[0,47]],["shrt10.com",[0,9]],["megapastes.com",0],["nzbstars.com",0],["fembed.com",0],["likn.xyz",[0,5]],["topvideosgay.com",0],["extremotvplay.com",0],["pirlotvonline.org",0],["payskip.org",[0,29]],["javhay.net",0],["gaypornmasters.com",0],["cutpaid.com",0],["hitomi.la",0],["4horlover.com",0],["camgirlfap.com",0],["leechpremium.link",0],["tabooporns.com",0],["skidrowfull.com",0],["scat.gold",0],["mega-mkv.com",0],["mkv-pastes.com",0],["fileone.tv",0],["mixdroop.bz",0],["short.es",0],["watchaccordingtojimonline.com",0],["watchdowntonabbeyonline.com",0],["watchelementaryonline.com",0],["watcheronline.net",0],["watchgleeonline.com",0],["watchlostonline.net",0],["watchmonkonline.com",0],["watchprettylittleliarsonline.com",0],["watchrulesofengagementonline.com",0],["watchthekingofqueens.com",0],["watchthemiddleonline.com",0],["everydayporn.co",0],["milfzr.com",0],["aniwatcher.com",0],["videostreaming.rocks",0],["onifile.com",0],["latinomegahd.net",0],["compucalitv.com",0],["compupaste.com",0],["paste3.org",0],["starlive.xyz",0],["enstreams.xyz",0],["sportstream.tv",0],["gamovideo.com",0],["elil.cc",0],["sportea.online",0],["watchkobestreams.info",0],["ovagames.com",0],["slink.bid",0],["crisanimex.com",0],["blizzboygames.net",0],["blizzpaste.com",0],["zpaste.net",0],["zplayer.live",0],["earnwithshortlink.com",0],["faucethero.com",0],["imgdawgknuttz.com",[0,29]],["pandafiles.com",0],["hqcelebcorner.net",0],["upbam.org",0],["upbaam.com",0],["deltabit.co",0],["acefile.co",[0,92]],["kimochi.info",0],["ucptt.com",0],["supertelevisionhd.com",0],["birdurls.com",0],["javporn.best",0],["wstream.to",0],["shahiid-anime.net",0],["avseesee.com",0],["get-to.link",0],["adsh.cc",0],["thekingavatar.com",0],["vidorg.net",0],["oloadporn.com",0],["camchickscaps.com",[0,89]],["soccer24hd.com",0],["onlystream.tv",0],["animeshouse.net",0],["givemereddit.stream",0],["mangahere.onl",0],["streamanimetv.net",0],["blog-peliculas.com",0],["owllink.net",0],["upstream.to",0],["btcleets.xyz",[0,45]],["hexupload.net",[0,5]],["xanimeporn.com",0],["wickedspot.org",0],["limontorrents.com",0],["gomo.to",0],["sokobj.com",0],["smplace.com",0],["kurina.vip",0],["tfp.is",0],["snahp.it",0],["underhentai.net",0],["satoshi-win.xyz",0],["dogemate.com",0],["newtorrentgame.com",0],["shurt.pw",[0,9]],["legendas.dev",0],["smoner.com",0],["javcl.com",0],["rifurl.com",0],["javtiful.com",0],["javjunkies.com",0],["bitlinks.pw",0],["skidrowcpy.com",0],["adblockplustape.com",0],["tapewithadblock.org",0],["rojitadirecta.blogspot.com",0],["videosporngay.net",0],["freepornhdonlinegay.com",[0,73]],["freeomovie.to",0],["85videos.com",0],["popimed.com",0],["gaydelicious.com",0],["hhkungfu.tv",0],["vstplugs.com",0],["animeblkom.net",0],["konstantinova.net",0],["1bit.space",0],["1bitspace.com",0],["iklandb.com",0],["koreanaddict.net",0],["animefire.net",0],["thepiratebay0.org",0],["wordcounter.icu",0],["blkom.com",0],["cashurl.in",[0,29]],["softairbay.com",0],["jackstreams.com",0],["hoodsite.com",0],["hdstreamss.club",0],["xxgasm.com",0],["xsober.com",0],["illink.net",0],["hentaialtadefinizione.it",0],["hentaiplus.co",0],["motonews.club",0],["yadixv.com",0],["greatanimation.it",0],["vvc.vc",0],["janusnotes.com",0],["gamesrepacks.com",0],["hentais.tube",0],["hentaitube.online",0],["evoload.io",0],["ashort1a.xyz",[0,29]],["2shrt.com",0],["kaplog.com",0],["thevideos.ga",0],["egyanime.com",0],["genpassword.top",[0,9]],["srts.me",0],["cuturl.in",[0,29]],["short88.com",0],["movi.pk",0],["givemeredditstreams.com",0],["cashearn.cc",[0,38]],["kutmoney.com",[0,9]],["verdragonball.online",0],["datawav.club",0],["cablegratis.online",0],["filmovi.ws",0],["ovamusic.com",0],["haho.moe",0],["xxvideoss.org",0],["123movies4u.site",0],["anroll.net",0],["bajarjuegospcgratis.com",0],["balkanportal.net",0],["bestporncomix.com",0],["celebrity-leaks.net",0],["comicsmanics.com",0],["desivdo.com",0],["directupload.net",0],["doctormalay.com",0],["dvdfullestrenos.com",0],["ebookhunter.net",0],["ekasiwap.com",0],["electro-torrent.pl",0],["femdom-joi.com",0],["film1k.com",0],["filmesonlinex.org",0],["gambarbogel.xyz",0],["gaysex69.net",0],["hentaistream.co",0],["hollymoviehd.cc",0],["hubgifs.info",0],["javhd.win",0],["javhun.com",0],["jorpetz.com",0],["kinemania.tv",0],["lightdlmovies.blogspot.com",0],["masahub.com",0],["myonvideo.com",0],["nuoga.eu",0],["olarixas.xyz",0],["palimas.org",0],["pirateiro.com",0],["pornez.net",0],["pornhd720p.com",0],["pornobr.ninja",0],["pornofaps.com",0],["pornorip.biz",0],["pornotorrent.com.br",0],["putlocker5movies.org",0],["sakurafile.com",0],["sexofilm.co",0],["tensei-shitara-slime-datta-ken.com",0],["thebussybandit.com",0],["torrage.info",0],["video.az",0],["vikv.net",0],["viveseries.com",0],["vstorrent.org",0],["watchjavidol.com",0],["webcamrips.com",0],["yifytv.top",0],["youdbox.net",0],["yourdailypornvideos.ws",0],["highlanderhelp.com",0],["suicidepics.com",0],["myyouporn.com",0],["shortlinkpay.com",[0,9]],["mundowuxia.com",0],["tumanga.net",0],["embedstream.me",0],["nolive.me",0],["worldcupstream.pm",0],["ccurl.net",0],["links.worldfree4u-lol.online",0],["ebookbb.com",0],["scnlog.me",0],["anidl.org",0],["forex-trnd.com",0],["incestflix.com",0],["videowood.tv",[0,9]],["hwnaturkya.com",0],["filmymaza.blogspot.com",0],["uploadmaza.com",0],["hatsukimanga.com",0],["hentaitk.net",0],["olympicstreams.me",0],["gtlink.co",0],["hiperdex.com",0],["mcmfaucets.xyz",0],["sextgem.com",0],["xxxwebdlxxx.top",0],["gledajcrtace.xyz",0],["adz7short.space",0],["hxfile.co",0],["bestgirlsexy.com",0],["theicongenerator.com",0],["tvglobe.me",0],["torproxy.cyou",0],["unblockweb.me",0],["oncast.xyz",0],["hitprn.com",0],["password69.com",0],["freebunker.com",0],["javsex.to",0],["picdollar.com",0],["mediapemersatubangsa.com",0],["javhoho.com",0],["85tube.com",0],["short.mcmcryptos.xyz",0],["justfullporn.org",0],["olympusscanlation.com",0],["swzz.xyz",0],["egyshare.cc",0],["dofusports.xyz",0],["bestnhl.com",0],["charexempire.com",0],["live7v.com",0],["olweb.tv",0],["tv247.us",0],["messitv.net",[0,29]],["mlsbd.shop",0],["dragontranslation.com",0],["plugintorrent.com",0],["scatfap.com",0],["tutele.sx",0],["itdmusics.com",0],["itopmusic.org",0],["animelek.me",0],["coin-free.com",0],["2embedplayer.net",0],["yeshd.net",0],["pornstreams.co",0],["tvs-widget.com",0],["141jav.com",0],["560pmovie.com",0],["ahdafnews.blogspot.com",0],["androidadult.com",0],["animestotais.xyz",0],["animeyt.es",0],["aotonline.org",0],["askim-bg.com",0],["avcrempie.com",0],["belowporn.com",0],["bobsvagene.club",0],["coolcast2.com",0],["cuevana3.fan",0],["cumception.com",0],["curvaweb.com",0],["daughtertraining.com",0],["estrenosdoramas.net",0],["everia.club",0],["fapptime.com",0],["filmesonlinexhd.biz",0],["filmovitica.com",0],["flyfaucet.com",0],["gamesmountain.com",0],["hesgoal.tv",0],["hornylips.com",0],["javf.net",0],["javleak.com",0],["jiofiles.org",0],["jp-films.com",0],["jpop80ss3.blogspot.com",0],["kantotinyo.com",0],["legendei.net",0],["mangaboat.com",0],["mangagenki.me",0],["masaporn.xyz",0],["megapornpics.com",0],["meusanimes.net",0],["mimaletamusical.blogspot.com",0],["moredesi.com",0],["movieswbb.com",0],["nerdiess.com",0],["novelssites.com",0],["nsfwr34.com",0],["nu6i-bg-net.com",0],["ohjav.com",0],["on9.stream",0],["onepiece-mangaonline.com",0],["onlyfullporn.video",0],["originporn.com",0],["pickteenz.com",0],["pornoflux.com",0],["porntn.com",0],["portugues-fcr.blogspot.com",0],["poseyoung.com",0],["ragnaru.net",0],["read-onepiece.net",0],["rockdilla.com",0],["rojadirectatvenvivo.com",0],["serijefilmovi.com",0],["sexcomics.me",0],["sexdicted.com",0],["sexgay18.com",0],["sgpics.net",0],["shemale6.com",0],["silverpic.com",0],["socceron.name",0],["teamos.xyz",0],["teen-wave.com",0],["tgo-tv.co",0],["thaihotmodels.com",0],["theblueclit.com",0],["thelastdisaster.vip",0],["themoviezflix.co.in",0],["themoviesverse.co",0],["thesexcloud.com",0],["tightsexteens.com",0],["tvseries.video",0],["vidz7.com",0],["w-hentai.com",0],["wecast.to",0],["witanime.best",0],["xfantasy.su",0],["xn--xvideos-espaol-1nb.com",0],["yayanimes.net",0],["youjax.com",0],["ytstv.me",0],["ytstvmovies.xyz",0],["yodbox.com",0],["stream25.xyz",0],["virpe.cc",0],["pastemytxt.com",0],["hispasexy.org",0],["allstreaming.online",0],["crunchyscan.fr",0],["streambee.to",0],["streamers.watch",0],["bdnewszh.com",0],["novamovie.net",0],["masahub.net",0],["allplayer.tk",0],["hindimovies.to",0],["bitsearch.to",0],["vfxmed.com",0],["streamoupload.xyz",0],["animesonehd.xyz",0],["depvailon.com",[0,121]],["shadowrangers.live",0],["xxxxvideo.uno",0],["movgotv.net",0],["linksfy.co",0],["tojav.net",0],["freeomovie.co.in",0],["amateurblog.tv",0],["fashionblog.tv",0],["latinblog.tv",0],["silverblog.tv",0],["tokyoblog.tv",0],["xblog.tv",0],["hentaiworld.tv",0],["streamgo.to",0],["vikistream.com",0],["pornstarsyfamosas.es",0],["subtitles.cam",0],["adclickersbot.com",0],["uniqueten.net",0],["ultraten.net",0],["proxyninja.org",0],["moviewatch.com.pk",[0,29]],["xxx18.uno",0],["extrafreetv.com",0],["gocast2.com",0],["watchtvchh.xyz",0],["actusports.eu",0],["pxxbay.com",0],["wwwsct.com",0],["adslink.pw",0],["animehditalia.it",0],["footyhunter3.xyz",0],["zerion.cc",0],["uhdgames.xyz",0],["streamservicehd.click",0],["papahd.club",0],["papahd1.xyz",0],["eplayer.click",0],["tonnestreamz.xyz",0],["asenshu.com",0],["pahaplayers.click",0],["rapload.org",0],["koora-online.live",0],["pornxbit.com",0],["pornxday.com",0],["nozomi.la",[0,18]],["tutelehd3.xyz",0],["ihdstreams.xyz",0],["onlinesaprevodom.net",0],["manga-oni.com",0],["nflstreams.me",0],["eyeshot.live",0],["ak47sports.com",0],["crackstreamshd.click",[0,38]],["footyhunter.lol",0],["gameshdlive.xyz",0],["tvpclive.com",[0,38]],["volokit2.com",0],["worldstreams.click",[0,38]],["onionstream.live",0],["sportbar.live",0],["nicesss.com",0],["iwatchtheoffice.com",0],["ytstvmovies.co",0],["smallencode.me",0],["123moviehub.org",0],["w123moviesfree.net",0],["millionscast.com",0],["jimdofree.com",0],["xpornium.net",0],["kunmanga.com",0],["4archive.org",0],["deepgoretube.site",0],["streamvid.net",0],["manhwahentai.me",0],["streamkiste.tv",0],["safego.cc",0],["turbovid.me",0],["nopay.info",[0,132]],["eroxxx.us",0],["linkebr.com",0],["nukedfans.com",0],["sueddeutsche.de",1],["autobytel.com",2],["cesoirtv.com",2],["gamesradar.com",2],["huffingtonpost.co.uk",2],["huffingtonpost.com",2],["moviefone.com",2],["playboy.de",2],["car.com",2],["codeproject.com",2],["familyhandyman.com",2],["goldderby.com",2],["headlinepolitics.com",2],["html.net",2],["indiewire.com",2],["marmiton.org",2],["mymotherlode.com",2],["nypost.com",2],["realgm.com",2],["tvline.com",2],["wwd.com",2],["bordertelegraph.com",2],["bournemouthecho.co.uk",2],["dailyecho.co.uk",2],["dorsetecho.co.uk",2],["eveningtimes.co.uk",2],["guardian-series.co.uk",2],["heraldscotland.com",2],["iwcp.co.uk",2],["lancashiretelegraph.co.uk",2],["oxfordmail.co.uk",2],["salisburyjournal.co.uk",2],["theargus.co.uk",2],["thetelegraphandargus.co.uk",2],["yorkpress.co.uk",2],["wunderground.com",2],["lapresse.ca",2],["eurogamer.net",3],["rockpapershotgun.com",3],["vg247.com",3],["auto-motor-und-sport.de",4],["caravaning.de",4],["womenshealth.de",4],["dfiles.eu",5],["downsub.com",5],["j.gs",5],["macserial.com",5],["microify.com",5],["minecraft-forum.net",5],["opensubtitles.org",5],["solidfiles.com",5],["thepiratebay.org",5],["uptobox.com",5],["zippyshare.com",5],["shink.me",5],["pic-upload.de",5],["oke.io",5],["dz4link.com",5],["imgclick.net",5],["downloadpirate.com",5],["download.ipeenk.com",[5,45]],["spycock.com",5],["ausfile.com",[5,56]],["xrivonet.info",5],["sawlive.tv",5],["intoupload.net",5],["serverf4.org",5],["stfly.me",[5,72]],["pngit.live",5],["oko.sh",5],["solarmovie.to",5],["tusfiles.com",5],["clk.ink",[5,45]],["uploadas.com",5],["shon.xyz",5],["loan2host.com",5],["tii.ai",5],["iir.ai",5],["file4.net",5],["souqsky.net",5],["miraculous.to",5],["pornovore.fr",6],["xstory-fr.com",7],["diasfem.com",9],["embedsito.com",9],["feurl.com",9],["gaobook.review",9],["luxubu.review",9],["mavlecteur.com",9],["mavplayer.xyz",9],["openplayer.net",9],["playfinder.xyz",9],["playvid.host",9],["rubicstreaming.com",9],["xstreamcdn.com",9],["ebook3000.com",9],["longfiles.com",9],["freemiumaccounts.net",9],["wigistream.to",9],["ytanime.tv",9],["glotorrents.fr-proxy.com",[9,73]],["stream4free.live",9],["daily.bhaskar.com",10],["whosampled.com",11],["blackspigot.com",12],["xiaopan.co",12],["parents.at",12],["rmdown.com",13],["xopenload.me",13],["xtapes.to",13],["at.wetter.com",14],["powerthesaurus.org",15],["imgadult.com",[16,17]],["imgdrive.net",[16,17]],["imgtaxi.com",[16,17]],["imgwallet.com",[16,17]],["javstream.com",18],["nudostar.com",18],["slutmesh.net",18],["azel.info",18],["clip-sex.biz",18],["justpicsplease.com",18],["lucagrassetti.com",18],["mangarow.org",18],["mihand.ir",18],["nudecelebsimages.com",18],["overwatchporn.xxx",18],["pornium.net",18],["syosetu.me",18],["watchmygf.biz",18],["xnxxw.net",18],["xxxymovies.com",18],["yurineko.net",18],["tokyomotion.com",18],["apurogol.net",[19,20]],["megawarez.org",19],["televisionlibre.net",19],["legionpeliculas.org",[19,20]],["legionprogramas.org",[19,20]],["pastepvp.org",19],["programasvirtualespc.net",19],["awdescargas.com",19],["descarga.xyz",[19,29]],["hdpornt.com",22],["4tube.com",23],["pornerbros.com",23],["uflash.tv",23],["mp3cut.net",24],["mcfucker.com",25],["taroot-rangi.com",26],["realgfporn.com",28],["alotporn.com",28],["shorterall.com",29],["supergoku.com",29],["ukrainesmodels.com",29],["sexuhot.com",29],["moviewatchonline.com.pk",29],["ytms.one",29],["pornstash.in",29],["empflix.com",30],["freeviewmovies.com",31],["badjojo.com",31],["boysfood.com",31],["pornhost.com",31],["sextingforum.net",32],["befap.com",34],["cumlouder.com",35],["chyoa.com",35],["asianxxxvideo.net",35],["holavid.com",36],["tasma.ru",36],["nikaraw.com",[37,38]],["calidadcine.net",37],["leaknud.com",37],["freelivetvon.com",38],["cnnamador.com",[39,40]],["arlinadzgn.com",41],["idntheme.com",41],["problogbooster.com",41],["pronpic.org",42],["op.gg",43],["eporner.com",44],["theralphretort.com",45],["tfc.tv",45],["seselah.com",45],["bollywoodshaadis.com",45],["practicequiz.com",45],["reportscam.com",45],["wapkiz.com",45],["pianokafe.com",45],["apritos.com",45],["bsierad.com",45],["diminimalis.com",45],["downloadbatch.com",45],["eksporimpor.com",45],["jadijuara.com",45],["kicaunews.com",45],["palapanews.com",45],["ridvanmau.com",45],["teknohot.com",45],["unduh31.net",45],["yeutienganh.com",45],["aalah.me",45],["academiadelmotor.es",45],["aiailah.com",45],["almursi.com",45],["altebwsneno.blogspot.com",45],["ambonkita.com",45],["androidspill.com",45],["aplus.my.id",45],["arrisalah-jakarta.com",45],["babyjimaditya.com",45],["bbyhaber.com",45],["beritabangka.com",45],["beritasulteng.com",45],["bestsellerforaday.com",45],["bintangplus.com",45],["bitco.world",45],["br.nacaodamusica.com",45],["bracontece.com.br",45],["dicariguru.com",45],["fairforexbrokers.com",45],["foguinhogames.net",45],["formasyonhaber.net",45],["fullvoyeur.com",45],["healbot.dpm15.net",45],["igli4.com",45],["indofirmware.site",45],["hagalil.com",45],["javjack.com",45],["latribunadelpaisvasco.com",45],["line-stickers.com",45],["luxurydreamhomes.net",45],["m5g.it",45],["miltonfriedmancores.org",45],["minutolivre.com",45],["oportaln10.com.br",45],["pedroinnecco.com",45],["philippinenmagazin.de",45],["piazzagallura.org",45],["pornflixhd.com",45],["safehomefarm.com",45],["synoniemboek.com",45],["techacrobat.com",45],["elizabeth-mitchell.org",45],["naszraciborz.pl",45],["mongri.net",45],["1004lucifer.blogspot.com",45],["svapo.it",45],["papalah.com",45],["starcoins.ws",45],["queenfaucet.website",[45,88]],["pipocamoderna.com.br",45],["space.tribuntekno.com",45],["lampungway.com",45],["coinhub.pw",45],["notiziemusica.it",45],["tecnotutoshd.net",45],["geo.fr",48],["cbc.ca",49],["igg-games.com",51],["tchatche.com",52],["studopedia.org",53],["zigforums.com",55],["hotpornfile.org",57],["donnaglamour.it",58],["pelisplus.online",59],["pornvideospass.com",[61,62]],["xnxx-sexfilme.com",63],["svipvids.com",64],["afolog.com",64],["aleksandranajda.com",64],["algowins.com",64],["amarendrasingh.com",64],["azotech.com.br",64],["guidedefinitive.altervista.org",64],["robber.altervista.org",64],["zadgranica.com",64],["jnovels.com",64],["chd4.com",65],["forum.cstalking.tv",65],["namemc.com",66],["hawtcelebs.com",67],["canadianunderwriter.ca",68],["creativebusybee.com",69],["varmatin.com",69],["syracusefan.com",70],["ohorse.com",71],["gsm1x.xyz",74],["softwarecrackguru.com",74],["hotgameplus.com",74],["mrdeepfakes.com",[75,76]],["donk69.com",76],["hotdreamsxxx.com",76],["pornxt.com",76],["puzzlefry.com",77],["theglobeandmail.com",78],["mtlblog.com",79],["narcity.com",79],["thepiratebay10.org",80],["jizzbunker.com",80],["xxxdan.com",80],["linksht.com",81],["gazetedamga.com.tr",82],["moonquill.com",84],["macrotrends.net",85],["investmentwatchblog.com",85],["myfreeblack.com",86],["mysostech.com",89],["medihelp.life",89],["msguides.com",89],["filesharing.io",90],["dreamdth.com",91],["beautypackaging.com",93],["puhutv.com",94],["oranhightech.com",95],["allporncomic.com",96],["srek.net",97],["m.viptube.com",98],["kingsofteens.com",99],["godmods.com",100],["mexa.sh",101],["eg-akw.com",101],["khsm.io",101],["xn--mgba7fjn.cc",101],["winit.heatworld.com",103],["checkz.net",104],["hentaihaven.xxx",105],["hanime.xxx",105],["shop123.com.tw",106],["mynewsmedia.co",107],["boyfriendtv.com",108],["tubev.sex",109],["hinjakuhonyaku.com",112],["wristreview.com",112],["hentaifreak.org",113],["animeplanet.cc",114],["th-cam.com",115],["trshow.info",115],["jocooks.com",115],["hboav.com",116],["conservativeus.com",117],["setfilmizle.tv",118],["dogeatm.com",118],["rechub.tv",119],["ubuntudde.com",120],["gload.to",122],["agrarwetter.net",123],["sportbible.com",124],["newscon.org",124],["archpaper.com",125],["moviesonlinefree.net",126],["pornkai.com",127],["tubesafari.com",127],["megaflash.xyz",128],["coins-town.com",129],["diendancauduong.com",[130,131]],["thetimes.co.uk",133],["true-gaming.net",134],["frogogo.ru",136]]);

const entitiesMap = new Map([["1337x",0],["vidlox",0],["yourbittorrent",0],["torlock",0],["9anime",0],["f1stream",0],["fbstream",0],["mlbstream",0],["motogpstream",0],["nbastream",0],["nflstream",0],["nhlstream",0],["plylive",0],["plyvdo",0],["rugbystreams",0],["socceronline",0],["tennisstreams",0],["tvply",0],["ufcstream",0],["vipleague",0],["xmoviesforyou",0],["mkvcage",0],["pahe",0],["psarips",[0,5]],["yts",0],["ouo",0],["watch-series",0],["watchseries",0],["linkshorts",0],["imgsen",0],["imgsto",0],["streamcdn",0],["daddylive",[0,37]],["divxtotal",0],["divxtotal1",0],["pelisplus",[0,9,19,20]],["strikeout",0],["plyjam",0],["vipbox",0],["grantorrent",[0,5]],["2ddl",0],["peliculas24",[0,19]],["rojadirectaenvivo",0],["torrentz2eu",0],["movies123",0],["piratebay",0],["elixx",[0,60]],["file4go",0],["starmusiq",0],["mirrorace",0],["viprow",0],["asianclub",0],["javmost",0],["mixdrop",0],["123movieshub",0],["movie8k",0],["thepiratebay",[0,80]],["mangovideo",0],["300mbfilms",0],["movierulzlink",0],["newmovierulz",0],["zooqle",0],["atomohd",0],["atomixhq",[0,9]],["pctfenix",[0,9]],["pctnew",[0,9]],["shortearn",0],["keepvid",0],["canalesportivo",0],["desiremovies",0],["uploadbuzz",0],["5movies",0],["fmovie",0],["xclusivejams",0],["tmearn",0],["leechall",0],["sports24",0],["beinmatch",0],["shorten",0],["projectfreetv",0],["safetxt",0],["clicknupload",0],["linkviet",0],["remaxhd",0],["animesvision",0],["miniurl",0],["frkmusic",0],["dood",[0,110]],["dooood",[0,110]],["thisav",0],["rnbxclusive0",0],["rnbxclusive1",0],["rnbxclusive",0],["skymovieshd",0],["adblockeronstape",0],["adblockstreamtape",0],["adblockstrtape",0],["adblockstrtech",0],["shavetape",0],["stapadblockuser",0],["stape",0],["stapewithadblock",0],["strcloud",0],["streamadblocker",0],["streamadblockplus",0],["streamta",0],["streamtape",0],["streamtapeadblockuser",0],["strtape",0],["strtapeadblock",0],["strtapeadblocker",0],["strtapewithadblock",0],["strtpe",0],["khatrimazafull",0],["aniplay",0],["animesanka",0],["racaty",[0,5]],["animepahe",[0,114]],["crackstreams",0],["shortzzy",0],["rojadirecta",[0,20,33]],["shorttey",[0,9]],["filmyzilla",0],["estrenosflix",[0,9]],["estrenosflux",[0,9]],["estrenosgo",[0,9]],["proxybit",0],["3hiidude",0],["hiidudemoviez",0],["vexmoviex",0],["adcorto",[0,29]],["moviessources",0],["streamsport",0],["tormalayalam",[0,9]],["vidclouds",0],["animixplay",0],["moviesmeta",0],["streamhub",[0,18]],["123movieshd",0],["findav",0],["findporn",0],["keralahd",0],["toonanime",0],["123moviesme",0],["moviezwaphd",0],["7hitmovies",0],["vipboxtv",0],["buffstreams",0],["movieplex",0],["mrunblock",0],["swatchseries",0],["unblocknow",0],["ask4movie",0],["keeplinks",0],["1tamilmv",0],["usagoals",0],["ytmp3eu",0],["1stream",0],["gotxx",0],["flixmaza",0],["g3g",0],["9xmovie",0],["flizmovies",0],["hdmoviesfair",0],["hdmoviesflix",[0,126]],["moviesverse",0],["shahid4uu",0],["themoviesflix",0],["u4m",0],["softarchive",0],["123-movies",0],["4stream",0],["dvdplay",0],["yts-subs",0],["rintor",0],["alexsports",0],["enjoy4k",0],["nocensor",0],["adblockeronstreamtape",0],["sports-stream",0],["2umovies",0],["aagmaal",0],["bhaai",0],["mmsbee",0],["daddylivehd",[0,38]],["tutelehd",0],["adblocktape",0],["moviesflix",0],["alexsportz",0],["alexsportss",0],["onmovies",5],["pirateproxy",5],["steamplay",[5,9,137]],["streamp1ay",[5,8,9]],["kimcartoon",5],["adshort",5],["flashx",5],["imgdew",5],["imgmaze",5],["imgoutlet",5],["imgtown",5],["imgview",5],["adsrt",5],["mp3guild",5],["mp3clan",5],["xmovies8",5],["pouvideo",[5,8,9]],["povvideo",[5,8,9]],["povvldeo",5],["povw1deo",[5,8,9]],["povwideo",[5,8,9]],["powv1deo",[5,8,9]],["powvibeo",[5,8,9]],["powvideo",[5,8,9]],["powvldeo",[5,8,9]],["grantorrent1",5],["ddlvalley",5],["inkapelis",[5,19,20]],["pnd",5],["imgrock",5],["file-upload",5],["hdvid",[5,19,29]],["onvid",[5,19]],["ovid",[5,19]],["vidhd",[5,19]],["crohasit",5],["streamingworld",5],["putlocker9",5],["kstreaming",5],["pingit",5],["yggtorrent",5],["movie123",5],["putlocker",[9,13]],["pelisplushd",9],["pelix",[9,19,20]],["fembed",9],["mavplay",9],["videobb",9],["bfstrms",9],["elitetorrent",9],["cine-calidad",9],["extratorrents",9],["sxyprn",18],["klmanga",18],["manga1001",18],["mangaraw",18],["mangarawjp",18],["hqq",[19,20]],["aquipelis",[19,20]],["anime-extremo",19],["cliver",19],["ciberdvd",19],["pelisgratis",19],["newpelis",[19,20]],["voirfilms",19],["pelisplay",[19,20]],["cinetux",19],["thevidhd",19],["allcalidad",19],["rojadirectatv",20],["tarjetarojatvonline",[20,33]],["tube8",21],["perfectgirls",23],["perfektdamen",23],["bitporno",29],["dbupload",31],["movies-300mb",31],["1movies",36],["foumovies",36],["downloadming",36],["extramovies",[37,38]],["extratorrent",37],["torrentstatus",37],["yts2",37],["y2mate",37],["livetvon",38],["yoututosjeff",45],["androidaba",45],["vidcloud",45],["descarga-animex",45],["telecharger-igli4",45],["mexa",[45,102]],["cuevana3",50],["vinaurl",54],["myegy",73],["mtsproducoes",83],["notebookcheck",87],["akwam",101],["tomshardware",111],["hotscopes",118],["writedroid",128],["manga1000",135]]);

const exceptionsMap = new Map([["pingit.com",[5]],["pingit.me",[5]]]);

/******************************************************************************/

function abortOnPropertyWrite(
    prop = ''
) {
    if ( typeof prop !== 'string' ) { return; }
    if ( prop === '' ) { return; }
    const exceptionToken = getExceptionToken();
    let owner = window;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        owner = owner[prop.slice(0, pos)];
        if ( owner instanceof Object === false ) { return; }
        prop = prop.slice(pos + 1);
    }
    delete owner[prop];
    Object.defineProperty(owner, prop, {
        set: function() {
            throw new ReferenceError(exceptionToken);
        }
    });
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
    try { abortOnPropertyWrite(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

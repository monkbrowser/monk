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

(function uBOL_noEvalIf() {

/******************************************************************************/

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = ["[\"replace\"]","[\"ExoLoader\"]","[\"adsBlocked\"]","[\"ppu\"]","[\"/chp_?ad/\"]","[\"chp_ad\"]","[\"tmohentai\"]","[\"debugger\"]","[\"fab\"]","[\"show\"]","[\"ads\"]","[\"AdBlock\"]","[\"popUnderStage\"]","[\"fab_alert\"]","[\"adsbygoogle\"]","[\"_0x\"]","[\"deblocker\"]","[\"adb\"]","[\"interactionCount\"]","[\"String.fromCharCode\"]","[\"redURL\"]","[\"fairAdblock\"]","[\"isFairAdBlocker\"]"];

const hostnamesMap = new Map([["orgyxxxhub.com",0],["flash-firmware.blogspot.com",0],["taodung.com",0],["mangaesp.co",0],["3movs.com",1],["jpopsingles.eu",2],["afronudes.com",2],["allcelebspics.com",2],["alttyab.net",2],["anonym-ads.xyz",2],["arkadmin.fr",2],["bacasitus.com",2],["barranquillaestereo.com",2],["bazaarwedding.com",2],["blogbhaiya.com",2],["brasilsimulatormods.com",2],["cambrevenements.com",2],["cartoonstvonline.com",2],["codecap.org",2],["comparili.net",2],["deephub.cyou",2],["descargasalinstante.com",2],["diaobe.net",2],["filegajah.com",2],["flicksnchill.com",2],["franceprefecture.fr",2],["freecricket.net",2],["gcpainters.com",2],["germanvibes.org",2],["getmaths.co.uk",2],["gewinnspiele-markt.com",2],["hamzag.com",2],["hannibalfm.net",2],["hornyconfessions.com",2],["ilcamminodiluce.it",2],["joguinhosgratis.com",2],["joziporn.com",2],["katoikos.world",2],["kozyrom.com",2],["kumiste.com",2],["mbc2.live",2],["mctechsolutions.in",2],["measam.com",2],["medibok.se",2],["mirrorpoi.com",2],["mirrorpoi.my.id",2],["moroccantea.uk",2],["mortaltech.com",2],["multivideodownloader.com",2],["nauci-engleski.com",2],["nauci-njemacki.com",2],["nekopoi.my.id",2],["nuketree.com",2],["nullpro.tech",2],["pa1n.xyz",2],["playertv.net",2],["pornhubtrending.net",2],["premiumthemes.shop",2],["programsolve.com",2],["radio-deejay.com",2],["ranaaclanhungary.com",2],["rasoi.me",2],["riprendiamocicatania.com",2],["shmapp.ca",2],["shorthttp.online",2],["sub2unlocker.com",2],["romviet.com",[2,4]],["saygrupmekanik.com",2],["skillmineopportunities.com",2],["teczpert.com",2],["totalsportek.app",2],["tromcap.com",2],["tv0800.com",2],["tv3monde.com",2],["uiiumovies.net",2],["ustrendynews.com",2],["vidoza.xyz",2],["watchnow.fun",2],["weashare.com",2],["xvideostrending.org",2],["ymknow.xyz",2],["zimabadko.com",2],["azoranov.com",2],["androjungle.com",2],["zegtrends.com",4],["bloggingguidance.com",4],["onroid.com",4],["110tutorials.com",4],["193.233.161.221",4],["247beatz.ng",4],["27-sidefire-blog.com",4],["3fnews.com",4],["4horlover.com",4],["4spaces.org",4],["519.best",4],["51sec.org",4],["60fps.xyz",4],["80-talet.se",4],["9ketsuki.info",4],["advertafrica.net",4],["africue.com",4],["aghasolution.com",4],["aiyumangascanlation.com",4],["alanyapower.com",4],["albania.co.il",4],["albinofamily.com",4],["allcalidad.app",4],["allcivilstandard.com",4],["almofed.com",4],["amnaymag.com",4],["amritadrino.com",4],["andani.net",4],["androidadult.com",4],["angolopsicologia.com",4],["anime4mega.net",4],["anime4mega-descargas.net",4],["anime7.download",4],["anime-torrent.com",4],["animetwixtor.com",4],["anmup.com.np",4],["anodee.com",4],["anonyviet.com",4],["aoseugosto.com",4],["apostoliclive.com",4],["aprenderquechua.com",4],["arabstd.com",4],["articlebase.pk",4],["articlemela.xyz",4],["articlespost.xyz",4],["asiansexdiarys.com",4],["askcerebrum.com",4],["askushowto.com",4],["aspirapolveremigliori.it",4],["astroages.com",4],["atgstudy.com",4],["atlantisscan.com",4],["atozmovies.xyz",4],["audiotrip.org",4],["auroraconeyisland.xyz",4],["automat.systems",4],["ayatoon.com",4],["azamericasat.net",4],["azdly.com",4],["azlyrics.online",4],["azores.co.il",4],["azrom.net",4],["backyardpapa.com",4],["balkanteka.net",4],["bandstand.ph",4],["batman.city",4],["bcanotesnepal.com",4],["bcsnoticias.mx",4],["bdokan.com",4],["bdstarshop.com",4],["beaddiagrams.com",4],["beisbolinvernal.com",4],["bengalxpress.in",4],["bestcrack.xyz",4],["bettingexchange.it",4],["bibliotecadecorte.com",4],["bibliotecahermetica.com.br",4],["bidersnotu.com",4],["bif24.pl",4],["biftutech.com",4],["bigdata-social.com",4],["bishalghale.com.np",4],["bitlikutu.com",4],["bittukitech.in",4],["blog.motionisland.com",4],["blogk.com",4],["bluecoreinside.com",4],["bogowieslowianscy.pl",4],["bookandcource.co",4],["bookpraiser.com",4],["botinnifit.com",4],["boxofficebusiness.in",4],["branditechture.agency",4],["brian70.tw",4],["bright-b.com",4],["brightpets.org",4],["brulosophy.com",4],["brushednickel.biz",4],["bsmaurya.com",4],["bugswave.com",4],["byswiizen.fr",4],["cafenau.com",4],["calvyn.com",4],["camnang24h.net",4],["canadanouvelles.com",4],["canaltdt.es",4],["captionpost.com",4],["carryflix.icu",4],["celebritablog.com",4],["cembarut.com.tr",4],["certificateland.com",4],["chachocool.com",4],["championpeoples.com",4],["change-ta-vie-coaching.com",4],["charpatra.com",4],["check-imei.info",4],["chieflyoffer.com",4],["chineseanime.org",4],["christiantrendy.com",4],["cimbusinessevents.com.au",4],["cinema-sketch.com",4],["cizzyscripts.com",4],["claveweb.shop",4],["claydscap.com",4],["clockskin.us",4],["cloud9obits.com",4],["cocorip.net",4],["code-source.net",4],["codeandkey.com",4],["codeastro.com",4],["codewebit.top",4],["comeletspray.com",4],["comoinstalar.me",4],["compota-soft.work",4],["conoscereilrischioclinico.it",4],["consigliatodanoi.it",4],["constructionplacement.org",4],["cola16.app",4],["correction-livre-scolaire.fr",4],["crackthemes.com",4],["crackwatch.eu",4],["craigretailers.co.uk",4],["crazydeals.live",4],["crazyashwin.com",4],["creebhills.com",4],["cryptomanga.online",4],["cryptonor.xyz",4],["cryptonworld.space",4],["culture-informatique.net",4],["cyprus.co.il",4],["daemon-hentai.com",4],["daij1n.info",4],["dailytechupdates.in",4],["davidsonbuilders.com",4],["dabangbastar.com",4],["deathonnews.com",4],["delvein.tech",4],["demonyslowianskie.pl",4],["depressionhurts.us",4],["descargaranimes.com",4],["descargaseriestv.com",4],["design4months.com",4],["desirenovel.com",4],["desktopsolution.org",4],["destinationsjourney.com",4],["dev-dark-blog.pantheonsite.io",4],["devopslanka.com",4],["dewfuneralhomenews.com",4],["dhankasamaj.com",4],["diamondfansub.com",4],["diencobacninh.com",4],["digitalseoninja.com",4],["dignityobituary.com",4],["diplomaexamcorner.com",4],["diskizone.com",4],["diversanews.com",4],["djsofchhattisgarh.in",4],["dominican-republic.co.il",4],["downloadbatch.me",4],["downloader.is",4],["downloadtanku.org",4],["easytodoit.com",4],["ecommercewebsite.store",4],["eczpastpapers.net",4],["editions-actu.org",4],["editorsadda.com",4],["edjerba.com",4],["egram.com.ng",4],["elcriticodelatele.com",4],["elcultura.pl",4],["embraceinnerchaos.com",4],["emperorscan.com",4],["encuentratutarea.com",4],["eng-news.com",4],["english-topics.com",4],["entenpost.com",4],["epicpdf.com",4],["epsilonakdemy.com",4],["eramuslim.com",4],["erreguete.gal",4],["ervik.as",4],["esportsmonk.com",4],["et-invest.de",4],["ethiopia.co.il",4],["evlenmekisteyenbayanlar.net",4],["exam-results.in",4],["expertskeys.com",4],["f1gplive.xyz",4],["faaduindia.com",4],["fapfapgames.com",4],["fapkingsxxx.com",4],["farolilloteam.es",4],["fattelodasolo.it",4],["fchopin.net",4],["felicetommasino.com",4],["femisoku.net",4],["fessesdenfer.com",4],["fhedits.in",4],["fhmemorial.com",4],["finalnews24.com",4],["financeyogi.net",4],["financid.com",4],["finclub.in",4],["findheman.com",4],["findnewjobz.com",4],["fitnessscenz.com",4],["fitnesshealtharticles.com",4],["flashssh.net",4],["flexamens.com",4],["flowsnet.com",4],["fmhublog.xyz",4],["forex-yours.com",4],["francaisfacile.net",4],["freefiremaxofficial.com",4],["freefireupdate.com",4],["freegetcoins.com",4],["freelancerartistry.com",4],["freemovies-download.com",4],["freetohell.com",4],["freetubetv.net",4],["freewoodworking.ca",4],["fresherbaba.com",4],["freshersgold.com",4],["frpgods.com",4],["fumettologica.it",4],["funeral-memorial.com",4],["funeralhomeblog.com",4],["funeralmemorialnews.com",4],["gabrielcoding.com",4],["gadgetxplore.com",4],["gadgetspidy.com",4],["gamefi-mag.com",4],["gamers-haven.org",4],["gamerxyt.com",4],["gamevcore.com",4],["gaminglariat.com",4],["gamingsearchjournal.com",4],["ganzoscan.com",4],["gazetazachodnia.eu",4],["gcsaonline.com",4],["gdrivemovies.xyz",4],["gemiadamlari.org",4],["gesund-vital.online",4],["getsuicidegirlsfree.com",4],["gisvacancy.com",4],["gkbooks.in",4],["gksansar.com",4],["globelempire.com",4],["gogueducation.com",4],["golf-consul.com",4],["goodriviu.com",4],["gotocam.net",4],["gpltheme.co",4],["grasta.net",4],["greasygaming.com",4],["greattopten.com",4],["groovyfreestuff.com",4],["gsmfreezone.com",4],["gtavi.pl",4],["gwiazdatalkie.com",4],["hadakanonude.com",4],["hankyjet.xyz",4],["harbigol.com",4],["haveyaseenjapan.com",4],["hdhub4one.pics",4],["healthbeautybee.com",4],["healthfatal.com",4],["hechos.net",4],["heutewelt.com",4],["hindishri.com",4],["historichorizons.com",4],["hockeyfantasytools.com",4],["hojii.net",4],["hookupnovel.com",4],["hopsion-consulting.com",4],["hotspringsofbc.ca",4],["hungarianhardstyle.hu",4],["hypelifemagazine.com",4],["ideatechy.com",4],["idesign.wiki",4],["idevfast.com",4],["idpvn.com",4],["iggtech.com",4],["ignoustudhelp.in",4],["ikarianews.gr",4],["ilbassoadige.it",4],["ilbolerodiravel.org",4],["inertz.org",4],["infulo.com",4],["inra.bg",4],["insidememorial.com",4],["insider-gaming.com",4],["intelligence-console.com",4],["interculturalita.it",4],["inulledthemes.com",4],["inventionsdaily.com",4],["iptvxtreamcodes.com",4],["isabihowto.com.ng",4],["italiadascoprire.net",4],["itopmusic.com",4],["itopmusicx.com",4],["itz-fast.com",4],["jackofalltradesmasterofsome.com",4],["jaktsidan.se",4],["japannihon.com",4],["javhdworld.com",4],["javluna1.com",4],["jeccasbbq.com",4],["jk-market.com",4],["jkhentai.co",4],["jobslampung.net",4],["jungyun.net",4],["juninhoscripts.com.br",4],["juventusfc.hu",4],["kacikcelebrytow.com",4],["kana-mari-shokudo.com",4],["kanaeblog.net",4],["karaoke4download.com",4],["kawaguchimaeda.com",4],["kdramasurdu.net",4],["kenkou-maintenance.com",4],["kenta2222.com",4],["keroseed.com",4],["kickcharm.com",4],["kinisuru.com",4],["kllproject.lv",4],["know-how-tree.com",4],["kobitacocktail.com",4],["kodewebsite.com",4],["kokosovoulje.com",4],["kupiiline.com",4],["kurobatch.com",4],["labstory.in",4],["ladypopularblog.com",4],["lamorgues.com",4],["lapagan.org",4],["lapaginadealberto.com",4],["lascelebrite.com",4],["latinlucha.es",4],["law101.org.za",4],["learnedclub.com",4],["learnodo-newtonic.com",4],["learnospot.com",4],["learnslovak.online",4],["lebois-racing.com",4],["leechyscripts.net",4],["legendaryrttextures.com",4],["letrasgratis.com.ar",4],["levismodding.co.uk",4],["lglbmm.com",4],["lheritierblog.com",4],["linkskibe.com",4],["linkvoom.com",4],["linux-talks.com",4],["linuxexplain.com",4],["lionsfan.net",4],["literarysomnia.com",4],["littlepandatranslations.com",4],["livefootballempire.com",4],["lk21org.com",4],["loanpapa.in",4],["logofootball.net",4],["lordfix.xyz",4],["lotus-tours.com.hk",4],["lshistoria.com",4],["ltpcalculator.in",4],["luchaonline.com",4],["luckymood777.com",4],["mamtamusic.in",4],["mangcapquangvnpt.com",4],["mantrazscan.com",4],["marketedgeofficial.com",4],["marketing-business-revenus-internet.fr",4],["marketrevolution.eu",4],["mastakongo.info",4],["matshortener.xyz",4],["mediascelebres.com",4],["medytour.com",4],["meteoregioneabruzzo.it",4],["mhscans.com",4],["michiganrugcleaning.cleaning",4],["midis.com.ar",4],["millihabercim.com",4],["minddesignclub.org",4],["minecraftwild.com",4],["minhasdelicias.com",4],["mitaku.net",4],["mmorpgplay.com.br",4],["mockupcity.com",4],["modyster.com",4],["monaco.co.il",4],["morinaga-office.net",4],["mosttechs.com",4],["motofan-r.com",4],["movieping.com",4],["mscdroidlabs.es",4],["mtech4you.com",4],["multimovies.tech",4],["mundovideoshd.com",4],["murtonroofing.com",4],["musicforchoir.com",4],["musictip.net",4],["mxcity.mx",4],["mxpacgroup.com",4],["my-ford-focus.de",4],["myglamwish.com",4],["mylivewallpapers.com",4],["mypace.sasapurin.com",4],["myunity.dev",4],["myviptuto.com",4],["nagpurupdates.com",4],["naijagists.com",4],["najboljicajevi.com",4],["nameart.in",4],["nartag.com",4],["naturalmentesalute.org",4],["naturomicsworld.com",4],["naveedplace.com",4],["navinsamachar.com",4],["neifredomar.com",4],["nemumemo.com",4],["nepaljobvacancy.com",4],["neservicee.com",4],["netsentertainment.net",4],["neuna.net",4],["newbookmarkingsite.com",4],["newfreelancespot.com",4],["news-geinou100.com",4],["newsobituary.com",4],["newstechone.com",4],["nghetruyenma.net",4],["nin10news.com",4],["nicetube.one",4],["niteshyadav.in",4],["noanyi.com",4],["noblessetranslations.com",4],["nodenspace.com",4],["notesformsc.org",4],["noteshacker.com",4],["nswdownload.com",4],["nswrom.com",4],["ntucgm.com",4],["nukedfans.com",4],["nukedpacks.site",4],["nulledmug.com",4],["nyangames.altervista.org",4],["nylonstockingsex.net",4],["obituary-deathnews.com",4],["obituaryupdates.com",4],["odekake-spots.com",4],["officialpanda.com",4],["ofwork.net",4],["omeuemprego.online",4],["omusubi-56rin.com",4],["onestringlab.com",4],["onlinetechsamadhan.com",4],["onlyhgames.com",4],["onneddy.com",4],["onyxfeed.com",4],["opiniones-empresas.com",4],["oracleerpappsguide.com",4],["orenoraresne.com",4],["orunk.com",4],["otakuliah.com",4],["oteknologi.com",4],["ovnihoje.com",4],["oyundunyasi.net",4],["pabryyt.one",4],["pandaatlanta.com",4],["papafoot.click",4],["papahd.club",4],["parisporn.org",4],["parking-map.info",4],["pasokau.com",4],["pdfstandards.net",4],["pepar.net",4],["personefamose.it",4],["petitestef.com",4],["pflege-info.net",4],["phonefirmware.com",4],["phoenix-manga.com",4],["piratemods.com",4],["piximfix.com",4],["plantatreenow.com",4],["plc4free.com",4],["plutoscripts.xyz",4],["poapan.xyz",4],["pogga.org",4],["porlalibreportal.com",4],["portaldoaz.org",4],["portaldosreceptores.org",4],["postblog.xyz",4],["praveeneditz.com",4],["premierftp.com",4],["pressemedie.dk",4],["pressurewasherpumpdiagram.com",4],["pricemint.in",4],["proapkdown.com",4],["progamer.co.in",4],["projuktirkotha.com",4],["promiblogs.de",4],["promimedien.com",4],["psicotestuned.info",4],["psychology-spot.com",4],["publicidadtulua.com",4],["pupuweb.com",4],["putlog.net",4],["quatvn.club",4],["questionprimordiale.fr",4],["quicktelecast.com",4],["radiantsong.com",4],["ralli.ee",4],["ranjeet.best",4],["raulmalea.ro",4],["rbscripts.net",4],["rctechsworld.in",4],["readfast.in",4],["realfreelancer.com",4],["recipenp.com",4],["redbubbletools.com",4],["renierassociatigroup.com",4],["reportbangla.com",4],["reprezentacija.rs",4],["retire49.com",4],["rightdark-scan.com",4],["rinconpsicologia.com",4],["rocdacier.com",4],["rollingwheel.xyz",4],["romaierioggi.it",4],["rubyskitchenrecipes.uk",4],["rumanicandle.online",4],["rv-ecommerce.com",4],["rwong.net",4],["ryanmoore.marketing",4],["ryansharich.com",4],["s1os.icu",4],["s4msecurity.com",4],["s920221683.online.de",4],["sabishiidesu.com",4],["saekita.com",4],["samanarthishabd.in",4],["samrudhiglobal.com",4],["satcesc.com",4],["schildempire.com",4],["scholarshiplist.org",4],["scontianastro.com",4],["scrap-blog.com",4],["seogroup.bookmarking.info",4],["server-tutorials.net",4],["serverxfans.com",4],["shadagetech.com",4],["shittokuadult.net",4],["shogaisha-shuro.com",4],["shogaisha-techo.com",4],["shorttrick.in",4],["shrinkus.tk",4],["siirtolayhaber.com",4],["sim-kichi.monster",4],["sivackidrum.net",4],["skardu.pk",4],["slawoslaw.pl",4],["slowianietworza.pl",4],["soccermlbstream.xyz",4],["sociallyindian.com",4],["softcobra.com",4],["softrop.com",4],["sohohindi.com",4],["sp500-up.com",4],["spacestation-online.com",4],["spardhanews.com",4],["speak-english.net",4],["speculationis.com",4],["spinoff.link",4],["stahnivideo.cz",4],["starsgtech.in",4],["startupjobsportal.com",4],["stireazilei.eu",4],["streamseeds24.com",4],["strefa.biz",4],["studybullet.com",4],["sundberg.ws",4],["super-ethanol.com",4],["swietaslowianskie.pl",4],["sysguides.com",4],["ta3arof.net",4],["taisha-diet.com",4],["talentstareducation.com",4],["tamilanzone.com",4],["tamilhit.tech",4],["tamilnaadi.com",4],["tbazzar.com",4],["teamkong.tk",4],["teamupinternational.com",4],["techdriod.com",4],["techkeshri.com",4],["technewsrooms.com",4],["technicalviral.com",4],["technorozen.com",4],["techoreview.com",4],["techprakash.com",4],["techstwo.com",4],["techyhigher.com",4],["tecnoscann.com",4],["tehnotone.com",4],["telephone-soudan.com",4],["teluguhitsandflops.com",4],["tenbaiquest.com",4],["the-loop.xyz",4],["thebigblogs.com",4],["thecannalysts.blog",4],["theinternettaughtme.com",4],["thejoblives.com",4],["theliveupdate.com",4],["thenewsglobe.net",4],["thewambugu.com",4],["throwsmallstone.com",4],["today-obits.com",4],["todays-obits.com",4],["toeflgratis.com",4],["toorco.com",4],["top10trends.net",4],["topsworldnews.com",4],["toptenknowledge.com",4],["tr3fit.xyz",4],["trekkingequipments.co.in",4],["trendflatt.com",4],["trendohunts.com",4],["trgtkls.org",4],["tunabagel.net",4],["turkeymenus.com",4],["turkishseriestv.net",4],["tutorialesdecalidad.com",4],["tutorialsduniya.com",4],["uciteljica.net",4],["udemyking.com",4],["uiuxsource.com",4],["unityassets4free.com",4],["uozzart.com",4],["usahealthandlifestyle.com",4],["ustimz.com",4],["ustvgo.live",4],["utechtimes.com",4],["uur-tech.net",4],["vamsivfx.com",4],["vanderheide.online",4],["vibezhub.com.ng",4],["villettt.kitchen",4],["vitadacelebrita.com",4],["vmorecloud.com",4],["voidtruth.com",4],["vrides.nl",4],["vstplugin.net",4],["webacademix.com",4],["webhostingoffer.org",4],["webrash.com",4],["whats-new.cyou",4],["wheelofgold.com",4],["wholenotism.com",4],["worldgyan18.com",4],["worldtop2.com",4],["worldwidestandard.net",4],["wp.solar",4],["xmoviepro.xyz",4],["yakyufan-asobiba.com",4],["yawm.online",4],["ycongnghe.com",4],["yestech.xyz",4],["youlife24.com",4],["youpit.xyz",4],["youpits.xyz",4],["your-local-pest-control.com",4],["yourdesignmagazine.com",4],["yuatools.com",4],["yurudori.com",4],["znanemediablog.com",4],["azmath.info",5],["downfile.site",5],["downphanmem.com",5],["expertvn.com",5],["memangbau.com",5],["scratch247.info",5],["trangchu.news",5],["adultcomixxx.com",5],["tmohentai.com",6],["hentaihaven.xxx",7],["aeonax.com",7],["telemporio4.blogspot.com",7],["embed.streamx.me",7],["techoreels.com",7],["givemeredditstreams.com",7],["masihbelajar.com",8],["maccanismi.it",9],["gamesrepacks.com",9],["cybermania.ws",9],["techhelpbd.com",9],["broflix.club",9],["drakescans.com",9],["bingotingo.com",9],["karanpc.com",9],["pokemundo.com",9],["unofficialtwrp.com",9],["lewebde.com",9],["cazztv.xyz",9],["apkdelisi.net",9],["app.covemarkets.com",9],["phpscripttr.com",10],["game-2u.com",10],["toramemoblog.com",10],["hentaistream.com",12],["nudeselfiespics.com",12],["hentaivideos.net",12],["danc.uk",13],["booksrack.net",14],["cubehosting.me",15],["ergasiakanea.eu",16],["surfsees.com",16],["bitzite.com",16],["conghuongtu.net",16],["tuxnews.it",16],["downloadlyir.com",16],["ipamod.com",16],["techacode.com",17],["sideplusleaks.com",17],["autosport.com",18],["motorsport.com",18],["cdn.gledaitv.live",19],["mgnetu.com",21],["pepperlive.info",21],["iptv-list.live",22],["unitystr.com",22]]);

const entitiesMap = new Map([["shrink",0],["papafoot",2],["file-upload",3],["24pdd",4],["audiotools",4],["autosport",4],["eventiavversinews",4],["flixhub",4],["freevstplugins",4],["haryanaalert",4],["itdmusic",4],["javboys",4],["magesypro",4],["mcrypto",4],["poplinks",4],["azsoft",5],["bfstrms",7],["crackstreams",7],["teluguflix",9],["katmoviefix",10],["pasteit",11],["shineads",20]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noEvalIf(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const reNeedle = patternToRegex(needle);
    window.eval = new Proxy(window.eval, {  // jshint ignore: line
        apply: function(target, thisArg, args) {
            const a = args[0];
            if ( reNeedle.test(a.toString()) ) { return; }
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
    try { noEvalIf(...JSON.parse(argsList[i])); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

})();

/******************************************************************************/

void 0;

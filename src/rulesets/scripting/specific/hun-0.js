/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[src*=\"/banner/\"]","[id*=\"float\"]","div:has(> .ai-attributes + script + ins)","#column-left-inner,\n[id*=\"HTML\"]","#HTML1,\n#HTML111,\n#HTML8,\n#LinkList94,\n#SC_TBlock_342633_Table,\n#header-blog","#HTML5","#article_end_popup,\n.banner.boxed","#rstbox_2","#a1,\n#a2","#onetrust-banner-sdk","#eu-cookie-law,\n#facebook-likebox-8,\n.wpcnt","[class*=\"advert\"]","#facebook-sharebar,\n#webaruhaz-ajanlo,\n.-contentTop,\n.a2blckLayer,\n.ctsGadx,\n.hashtags,\n.wrap,\nTD[id*=\"l_sponsor\"],\n[class*=\"adv_\"]","[class*=\"adtext\"]",".fb-exit-popup-container","#fanback","#permission-bar,\n.fu-container,\n.sample,\n[href*=\"hirdetes\"],\na[href*=\"adf.ly\"],\na[style=\"text-decoration:none;\"],\ntable[bgcolor=\"darkgray\"]",".content-list.content-body > .recommendation-holder,\n.content-text > .recommendation-holder,\n.left-column.col-md-8.col-sm-12 > .recommendation-holder,\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(1),\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(2),\n.top-column.col-xs-12 > .recommendation-holder,\ni > .recommendation-holder:nth-of-type(1),\ni > .recommendation-holder:nth-of-type(2)",".tqWLsnEEqeEw-bg,\n[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.85098); display: block;\"]","[style=\"background: rgb(255, 255, 255); max-width: 720px; z-index: 9999999; opacity: 1; visibility: visible;\"]","[data-zadtype=\"billboard\"],\ndiv.mobileArticleAds,\ndiv.right-rail:has(div.ad-wrapper),\nfigure:has(a[href*=\"ignshop.hu\"])","DIV[id*=\"banner\"]","[class*=\"banner\"]","[app=\"tibrr-cookie-consent\"],\n[class^=\"k\"][class*=\"-container\"][class*=\"-2\"][class$=\"-hide\"]",".bpkad","A[href^=\"http://goo.gl\"]","[class*=\"reklam\"]","[id*=\"reklam\"]","[id*=\"banner\"]","DIV[class*=\"etarget\"]","DIV[class*=\"banner\"]",".code-block:has(script + ins)","[class*=\"pea_cook\"]","[style=\"width:300px;height:250px;\"],\nscript[data-cfasync=\"false\"]","[class*=\"advertisement\"]","#text-3","[class^=\"ad-\"]","A[href*=\"=banner\"]","#kpopup","#sliding-popup","[id^=\"block-views-block-banners-\"]","#HTML9","[id*=\"etarget\"]","[class^=\"ads\"]","[id^=\"adchange\"]","#alsobox","#cookieinfo","DIV[id*=\"col_2\"]","[id*=\"advertisment\"]","#sutik","#text-4",".bannergroup","#_iph_cp_popup,\n#cookie-bar,\n#cookie-notice,\n#cookie-window,\n#cookiebar,\n#hirdetes,\n#hirdetesek,\n.cc-banner,\n.cc-banner-wrapper,\n.cc-window,\n.cc_banner,\n.cc_banner-wrapper,\n.cc_window,\n.hird,\n.hirdetes,\n.hirdetesek,\n.leet_product_banner_container","#cookie-law,\n.banner_middle",".ads_show_ad_title",".banner-wrapper",".banner-container","#overlay_readers_letter,\n#stickyHomePageRecommender,\n#webPushPopup,\n.a-hirstartRecommender,\n.m-donationBottomLine,\n.spklw-post-attr[data-type=\"ad\"],\n.widget-mini-article","#cookie_popup_container,\n#kummanto,\n.d1912cka,\n.d1912cza,\n.d2020kv,\n.d36-top,\n.donation,\n.ease-modal,\n.pr-box,\n.support-box,\n.text-center,\nDIV[class=\"b-image-highlight b-image-highlight-article\"],\n[class*=\"xmas\"],\n[id*=\"-banner-\"],\narticle:has(a[href*=\"hirdetes\"]),\ndiv.item:has(a[href*=\"hirdetes\"]),\ndiv.k4.g7.en.gs.gr.ek.dX > .k4.k0.g7.en.gs.gr.ek.dX","#text-5,\n#text-6","#galsoreklam,\n#oldalreklam,\n[href=\"https://777blog.hu/reklamblokkolo-kikapcsolasa/\"],\ndiv#rechtangle.widget:nth-of-type(5)",".AdW","#cookieconsent","#cookieBox,\n#cookieBox_bg,\n.whiteBox:has(.goAdverticum)","#cookies-alert,\n[class^=\"zone_\"]","#g0,\n.az-layer,\n.big_badge,\n.floating-help-wrapper","[class*=\"ads\"]","#ajanlo","div#mymodal:has(#form-popup)","#alapjarat_cikk_fekvo_1,\ndiv.header + .clearfix + .clearfix","#block-block-16,\n#block-block-22,\n#block-views-ajanlo-block,\n#sticky_footer",".ui-widget-overlay","[aria-describedby=\"cookies-dialog\"]","div.cikk_zona,\ndiv.rightside > iframe",".sidebar1 > div:first-child,\n[id^=\"hird_\"]",".mask,\n.showLink.reveal","[class*=\" adH\"]","#cookie-disclaimer,\n.brandbox",".tamogatoi,\n.wp-caption","#facebookPopUp,\n#facebookPopUpBackground,\n#szechenyi-container,\n.plus-wrapper","#_cikk_jobbhasab_2,\n#_cikk_jobbhasab_3,\n#_fooldali_header_alatti_banner,\n#_fooldali_header_banner,\n#_fooldali_jobbhasab_2,\n#_fooldali_jobbhasab_3,\n#custom_html-18,\n#custom_html-19,\n#custom_html-2,\n#custom_html-20,\n#custom_html-21,\n#custom_html-23,\n#custom_html-26,\n#custom_html-7,\n#custom_html-8","#custom_html-10","[class*=\"Advert\"]","[class*=\"etarget\"],\n[class*=\"szamlatabla\"]","[class*=\"hirdetes\"]","#CybotCookiebotDialog",".ads","#adds","p + center:has(iframe[data-src*=\"facebook\"]),\nscript + ins + h5",".cookie-notice-container","#article-2,\n#block-block-30,\n#block-block-60,\n.region-content-1-1 > div:last-child,\n.region-content-1-1 > div:nth-child(-1n+3),\n.region-content-1-3 > div:nth-child(-1n+2),\n.region-content-1-3 > div:nth-last-child(-1n+5),\n.view-banner-blokkok",".addd,\n.bannpos,\n[aria-label=\"cookieconsent\"],\ndiv:has(> .fb-like)","#cookie","#popupajanlo","#total,\n.minisite",".articleInArticleOfferer","main + .ok-prerender","iframe[src=\"https://tunderszepek.baon.hu/tunderszepek-banner\"]",".widget_media_image",".pea_cook_wrapper","[class*=\"adcikk\"]",".hidden-xs:has(> .lablec_alatt),\n.hidden-xs:has(> .weboldal_felett),\n.tapeta.fixed,\n[data-ai],\nblockquote","[id*=\"sponsor\"]","#karrier,\n.modal,\n.modal-dialog",".modal-backdrop","#footerLogos,\n#pe_confirm,\n#qc-cmp2-ui,\n#underArticleAdvertisement,\n[id*=\"-ad-\"][data-x=\"1\"],\n[id^=\"div-gpt-ad-\"] + [class$=\"widget\"],\n[style=\"width:100%;text-align: center; margin-bottom:15px;\"],\na[href*=\"gemius\"],\nbody > .extraContentSection:nth-of-type(-1n+3)","#articleOfferFlag","#pe_confirm_optin_6,\n#qc-cmp2-container",".leavingPopupLayer","#ad-cikk1,\n#ad-cikk2,\n#ad-fekvo1,\n#ad-fekvo2,\n#ad-jobb1,\n#ad-jobb2,\ndiv:has(> div[id^=\"div-gpt-ad-\"])","#pe_confirm_optin_1","#taft,\n.living-earth,\n.meropixel-hide,\n.share,\nDIV[class*=\"_ad\"],\nDIV[class*=\"adv\"],\nDIV[class*=\"blh-billboard-ad\"],\nDIV[id*=\"wAdBox\"],\n[class*=\"follow_promo_figure\"],\n[id*=\"cp_popup\"]","[class*=\"adbox\"]","[id*=\"Banner\"]","#fbox-background","#lightview1,\n[class*=\"popupBanner\"]","#cookie_policy,\n#lw_bg1,\ndiv[style^=\"height:\"]","#newASZFLayer","#onetrust-consent-sdk,\n.o-banner--hirdetes",".blockright,\n.google,\n.parom",".cookie__wrapper,\n.real-estate-wrapper,\n.subscription-box,\nA[href=\"/jatek\"],\nA[href=\"/nyarimagazin\"],\n[class*=\"__ad\"],\n[class*=\"adContainer\"],\na[target=\"_blank\"][class=\"videa-wrapper\"],\niframe[src*=\"koponyeg.hu\"]",".newsletter-box","#wpgtr_stickyads_textcss_container,\n.extpp-container,\n.otw-sidebar:has(a[href=\"https://bpiautosok.hu/tamogatonk-a-te-ceged-jelenj-meg-nalunk-a-youtube-on-es-a-bpiautosok-hu-n/\"]),\n.widget.widget_text:has(.adsbygoogle),\ncenter:has(> a[href=\"https://bpiautosok.hu/mediaajanlat\"]),\ncenter:has(> a[href=\"https://bpiautosok.hu/mediaajanlat\"]) + br,\ncenter:has(> font),\nfont + center","#onesignal-bell-container,\n#onesignal-slidedown-container","#custom_html-11,\n#custom_html-6,\n#media_image-17,\ndiv[style=\"margin-top:20px;\"]","#upprev_box","div.bpkad","#full-desktop,\n#full-mobile,\nheader + div[style^=\"margin:\"]","#cooker_container,\n.banner_main_page_wrapper","#cadre_alert_cookies,\n#pa-push-notification-subscription,\n#sp-right>.sp-column>.sp-module.hidden-mobile,\n.banneritem","[class^=\"adsense\"]",".advert,\n.occsz-banner","#stvipcontainer,\nDIV[class=\"box rightbox\"],\n[class^=\"vippol_\"]","#aHirek,\n#hir,\n#hir2,\n#linkek,\n#oldal,\nDIV[class*=\"hirdetes\"],\n[data-ce-measure-widget^=\"CTS Banner\"]","[id*=\"bannerzona\"]","#cookie-policy-content,\n#web-push-popup,\n.ad-article-comment,\n.ad-article-end,\n.ad-article-inside,\n.ad-article-inside-automatic,\n.ad-article-under-lead,\n.ad-content-top,\n.ad-header-after > *,\n.ad-header-after-article,\n.share-article","[class*=\"card_box_\"]","[class*=\"-adv\"]","#CookieAcceptLayer,\n#bdism1,\n#cikkajanlo,\n[class*=\"adv-\"]",".art-sidebar1,\n.art-sidebar2","#fadeandscale_background,\n#fadeandscale_wrapper",".enews-article-content .endless-shared-area",".sb-right > div:first-child","#cookie-law-info-bar","#banner_sav","#headerBanner,\n.col-md-4.blog-sidebar:nth-child(even),\n.slidingBanner,\n.tablet-advert,\n.totop,\n.widgetDefault",".billboard","#billboard,\n[class*=\"prbox\"],\n[id^=\"linkbox_article\"]",".region-header.region",".jquery-modal.blocker.current",".cikk-halfpage.t-article-container_sidebar > div:first-child,\n.menu-sponsor_link,\n.rovat-halfpage.t-rovat-container_sidebar > div:first-child,\n.tctk,\n[id*=\"szponzoracio\"],\niframe",".cikk-vegi-ajanlo-reklamok","[id*=\"hirdetes\"]","#interstitial",".adbd-layer","body > section:not(.site-header):not(#toreskar):last-of-type","[class=\"td-a-rec td-a-rec-id-content_top  tdi_62 td_block_template_1\"],\n[class=\"td-a-rec td-a-rec-id-header  tdi_53 td_block_template_1\"]","[id*=\"_ad\"]","[class*=\"ad_\"]","[id*=\"ad_\"]",".detailRightAds,\n.min700height-desktop,\n.rltd_container [id^=\"rltd-ad-\"],\n.row:has(> #onet-ad-top),\n[class*=\"ad-\"],\n[class^=\"ads \"],\n[id^=\"ad-\"],\n[style=\"min-height: 300px;\"],\na[title=\"Hirdetés\"],\ndiv.wrapAds,\ndiv.wrapRectangle:has(#ad-cikk)",".ibb-banner-decor","[id^=\"ad_\"]","div[class*=\"contentBanner\"],\ndiv[style=\"text-align: center; margin-bottom:10px; position: relative;\"]",".sgpb-popup-dialog-main-div-wrapper",".penci-wrap-gprd-law,\n.sgpb-popup-overlay",".rckaexclude",".super","div.cookieLayer,\ndiv.supportModal","IFRAME","#article-recommend-popup,\n.article-page + .b-section,\n.article-page > .b-section,\n.article-reaction-holder + .b-section,\n.cookie-popup,\n.overlay-popup,\n.pull-left .b-section,\n.share.jssocials + .b-section,\n.top-section + .b-section","[class*=\"_adv \"]",".popupunderlay,\n[class*=\"adPlace\"],\n[class^=\"goAdverticum\"]","[class*=\"adzone\"],\ndiv[id*=\"elementor-popup-modal-\"]","#catapult-cookie-bar","#darklayer,\n.views-field-nothing,\n[class*=\"_ad \"],\n[id*=\"_ad-\"]","#femina-shop-ajanlo-slider,\n.cikk-torzs [data-miniapp-id]:has(.femina-shop-ajanlo-slider-hirdetes),\n.cikk-torzs [data-miniapp-id]:has(.lapozgato-ajanlo),\n.doboz_harmados,\n.szelso-jobb > div:has(> a),\n[class*=\"kepeslinkes\"]","DIV[class*=\"reklam\"]","#felso_tavtarto,\n.fn9_separator,\n.rovatszponzor,\nDIV[class*=\"Etarget\"],\nDIV[class*=\"adbox\"],\nDIV[class*=\"cikk_kirakat\"],\nDIV[id^=\"sky_\"][id$=\"_side\"]",".crp_related,\ndiv[id^=\"forbesad\"],\np + [class*=\"-bekezdes-utan-\"]",".foot-logos.col-md,\n[href=\"https://www.barion.com/hu/vasarlok/arak-vasarloknak/\"],\na[href=\"http://consumer.huawei.com/hu/phones/mate10series/\"]","div:has(> [style*=\"calc\"])","#accept-container","[class*=\"banners\"],\n[href*=\"hirdetesek\"]",".etarget",".facebook-layer-box","#content-container > div > a:not([class*=\"MailListItem-\"]),\n[class*=\"magnum\"]","[class^=\"container-\"][class*=\"adZone\"]",".grey-popup-layer","#background_ad_top","#right > .xabrew300.box",".partners",".spleft,\n.spright","[class$=\"responsive-300px-600px\"],\na[onclick*=\"/muvelet/hozzaferes/kapcsolodas.php?id=\"],\nbody > style,\ndiv:has(> h4 + div[style*=\"calc\"])","#thanks > .hlist.nohead,\n.xabrecontainer,\na[onclick*=\"$.ajax\"],\ndiv#center:has(div > div > p > a[style=\"color: #b42223;\"]),\ndiv[class*=\"xabre-responsive\"]:not([class*=\"-980px-139px\"])",".roadblockcont",".act_hun,\n.adt_hun","[id^=\"ibb-\"][class*=\"banner\"]","#partnerek","[id^=\"zone\"]","#cookie-popup,\n#jqi-sub,\n#jqi-subfade,\n.jqi-sub,\n.jqi-subfade","#adryf,\n.rltdwidget,\n[href^=\"https://www.webminute.hu\"],\n[id*=\"aswift\"],\ndiv.reklam_jobbra,\ntd.txtcenter:has(> script + ins),\ntd[style=\"width: 10px;\"]:empty","#cookiekezeles","#banner","DIV[class*=\"Advert\"]","[class*=\"contentBanner\"]",".accept-cookies","div[id^=\"jqueryFloating\"]","#cookie_bar,\n#infobar","#banner2016kormanyhu,\n[id*=\"banner_1_29_\"]",".catch-click",".banner-widget-container",".mc-modal:has(iframe),\n[class^=\"moove-gdpr-\"],\n[id^=\"um-\"]:has(.fb-page.fb_iframe_widget)",".Ad,\n[id*=\"Ad_\"]",".Clear,\nDIV[id*=\"AdContainer\"]","#top > .p-0.container","#ajanlo_box_ah,\n#lightwindow_overlay","#player,\n#superbox",".szkozepkis","#kapubanner,\n[id*=\"_ads\"],\n[id^=\"cookieconsent\"]","[id*=\"hirdet\"]","#cookiewarnbar","#nyeremenyModal,\n[class=\"modal-backdrop fade show\"],\n[id*=\"popup\"],\ndiv.row:has(> div.ads)","[id*=\"interstitial\"]","DIV[id*=\"Banner\"]",".hover_bkgr_fricc:has(.facebookPopupCloseButton),\nDIV[id*=\"zone-wallbanner-header\"]","#gyuri1,\n#gyuri2","[class*=\"billboard\"]","#cookieAlertBox,\n.banner_container,\n.banner_widget,\n.frame:has(> span[style^=\"font-size: 11px;\"]),\n.sy-box","[class*=\"-ad-container\"]","P[class*=\"banner\"]","[id^=\"advert\"]","DIV[class=\"module noheading\"],\nEMBED","#tetszett","[data-adblockonly]","#cucc,\n#layerbanner","#custom_html-3","#euro-event,\n#league-selector + .row + .row:has(.banner),\n#sponsors,\n.gdpr-cookie-notice","[class*=\"_ad\"]","#lebegodoboz,\n#szupertorony,\n[id*=\"-reklam\"],\n[id*=\"fancybox\"],\n[id^=\"hirdetes_jobb\"] + div,\n[id^=\"hirdetes_jobb_2\"] + div + div,\n[id^=\"szuperbanner_\"]","[id^=\"hirdetes\"]","#webpushSelctorFormId,\n.adcaption,\n.advert-item,\n.article-jobline-sidebar-doboz,\n.article-menu.panelgap,\n.article-otherelements-container content,\n.articlebox.clear.sidebar-ajanlat,\n.block-ms-box2,\n.cimlap-ajanlat.elem-1180.cimlap-grid-elem,\n.hosting,\n.hvg_push,\n.jobline-palyakezdo-feed,\n.lh-calc.bm-caxlc-bo,\n.list-article + style + .panelgap,\n.selectWidget,\n.support-stripe,\n[class*=\"adtype-\"],\n[class=\"articleitem clear smallimage imgleft\"],\n[class=\"site-scarab-bottom open\"]","[class*=\"adsense\"]","[id*=\"-ad-\"]",".ad-poc-link,\n.parallax_bottom,\n.parallax_top","DIV[class*=\"ad_\"]","#announcement,\n#cikktoolbaradomany,\n#cookiealert,\n#sidebar > table,\n.cikkszovegaction,\n.cikkszovegakcio,\n.kommentadomany,\nDIV[id*=\"hirdetes\"],\nbody > div > a[target=\"_blank\"]","[class*=\"hird-\"],\n[class*=\"hird_\"],\na[data-bs-content*=\"(hirdetés)\"]","[class*=\" ad\"]",".topAdv",".shopline-box,\n.travelo-box","#ad_null_position,\n#also_bannerek,\n#bookline,\n#box_energiapedia,\n#box_eon,\n#box_info,\n#box_medicalonline,\n#closeWindow,\n#ctravelbox,\n#index_shopline,\n._iph_brk,\n.glr_advert,\n.infoStripe,\n.keretes-donate-doboz,\n.microsite_dummy,\n.nm_header,\n.nm_mini,\n.nm_mini__wrapper,\n.nm_sponsored__wrapper,\n.nm_supported,\n.nm_supported__wrapper,\n.nm_thanks,\n.nm_thanks__wrapper,\n.nm_widget__wrapper,\nDIV[class*=\"guestbox\"],\n[class=\"ajanlatok box scrollbox\"]",".cikk-vegi-ajanlo-reklamok-container,\n[class*=\"adblokk\"]","[class*=\"ad-container\"]","#ads","#ot2015,\n#rightcoltd,\n#site_header","#main div[class*=\"banner\"],\n#sidebar > div[class*=\"banner\"],\ndiv.read div[class*=\"banner\"]",".notification-popup","#_ao-cmp-ui,\n#sitemodal:has(.fb-button),\ndiv[data-qa=\"oil-Layer\"]","#bottompopup","#leftPoszter-section,\n#salePoszter,\n.home-section-banner,\n.u-hide\\@mobile.flag-wrapper--fill.flag-wrapper.grid-col-lg-1-4.grid-col-md-1-2.grid-col-1.article-list__item","div[class=\"tl-state-root tve-leads-ribbon tve-trigger-hide tve-tl-anim tve-leads-track-ribbon-1 tl-anim-slide_top tve-leads-triggered\"]","#cookie-law-info-again",".banner","#joylike,\n[class*=\"Adverticum\"],\n[class^=\"adIn\"],\n[class^=\"adPlace\"]","#cookie_container","[data*=\"banner\"]","#header","#cookieSpan,\ndiv.bottom_sticky_banner","#cookie-consent-dialog","#above_article_banner,\n#advertisements,\n#below_content_banner,\n#left_banners,\n#right_banners,\n#social,\n#wide_banners,\n.article_banner,\ndiv.subscribe_module,\ndiv[class=\"fb-like fb_iframe_widget\"]",".cookies-message-container","#cookieAcceptanceContainer","[id*=\"advert\"]","#nap_ajanlata,\n.tamogatott,\n.vippr,\nDIV[id*=\"billboard\"],\nDIV[id*=\"linkbox\"],\n[class*=\"banner-\"],\n[class*=\"offer prbox\"],\n[class*=\"pr--\"],\n[class^=\"pr-\"],\n[class^=\"prbox\"],\ndiv.endless-shared-area","#spu-103927,\n[class^=\"spu\"]","#vshu-box,\n.integralt_felso_zona,\n.recommendationzone,\n[id*=\"adsense\"]","div[class*=\"banner\"]","div:has(> a + h6)",".kapu,\n.mini_slider_div0","[class*=\"Banner\"]","div.accept-cookies","[name*=\"banner\"]",".adbg",".category > #prodstop1,\n.single-post > #prodstop1","#current_promotions_block,\n#skin-left,\n#skin-right,\n.box-general.clearfix,\n.discount.clearfix.nonLpk,\n.fullwidth.current_promotions_block","#beuszoAjanlo,\n#cikkalatti,\n#floating-recommendation,\n#mc-holder,\n#ovasar,\n#right-ecom,\n#top,\n.col-visible-xl.r-side.col-xl-4,\n.email-under-article,\n.frip-inline:has([data-module-name=\"inline-article\"]),\n.hird300,\n.kiskepes,\n.magnum,\n.spar,\n.szoveges,\n[data-module-name=\"hirlevel\"],\n[data-module-name=\"ingatlanbazar\"],\n[data-module-name=\"koponyeg\"],\n[data-module-name=\"videa\"],\n[size=\"300x600\"],\ndiv[class$=\"widget\"]","#pr-box,\n.newsletter-layer,\n.panorama-wrapper,\n.pr-item,\n[id^=\"szponz-\"],\ndiv.article-recommendation-zones","#ac","#accept-cookie","#page-top","div.lol:has(> a[onclick=\"getValue()\"]),\ndiv.widget:has(> div.textwidget > p > script)","[class*=\"adserver\"]","[class*=\"-ad\"]","#navi_btm + div,\nimg[src^=\"https://logout.hu/muvelet/hozzaferes/kapcsolodas.php\"]",".nobanner,\n[class^=\"banner_\"],\n[id^=\"banner_\"]","#exposeMask","#page_PopupContainer",".goAds,\n.visible-lg.container,\ndiv[class=\"container-full\"][style=\"background:#fff\"]:has(.topadv)","#eucookielaw,\n.ad-magnum,\n.ad-verticalfull,\n[class*=\"simpleads\"]","#block-block-12,\n#block-block-19,\ndiv.gdprBoxContainer,\ndiv.promo-bar","#newsletter-box,\n.modal[role=\"dialog\"],\ndiv[style*=\"fiskars\"],\nhtml body div#all div#mainbgbg div#mainbg>div[style^=\"width: 125px\"]","[class*=\"articleBanner\"]","#cboxOverlay,\n#colorbox","#cookie-msg","#floatingBox,\n.ui-floating-message,\n.wsp-wrap,\n[class*=\"tBanner\"]",".articles,\n.proposer,\n.read_vs",".cookie-bar,\n.mrc-bnr-plchldr,\n.popup-wrap,\n[class^=\"banner\"]",".sticky",".article-textlinkbox","#ad-image-big,\n#fadeandscale,\n#portfolioEzekIsErdekelhetnek,\n#recipeAndRelateds > h2.noprint,\n#sidebar_ads_box_2,\n.billboard-cikk,\n.hir-fekvo,\nDIV[class=\"billboard fr\"],\nDIV[class=\"fej-elso-sor cf\"],\nDIV[id*=\"-ad-\"],\n[class*=\"ads_box\"]",".allow-cookie-stripe","[class^=\"adv\"]","#app-advice,\n#app-commission,\n.x-marketing",".cim-reklam,\n.widget_text.widget.widget_custom_html",".om-holder","[class*=\"box ajanlo\"],\n[id*=\"ctnet\"]",".adbox","[align=\"center\"] > a[href*=\"banner\"],\n[class^=\"ui-dialog\"]","#mobilinstruments,\n#stickyfooter,\n.cikkajanlo,\n.totalcar,\n[id*=\"billboard\"],\na[href^=\"https://bit.ly/\"]","#custom_html-4,\n#primary-sidebar,\n.right","#sidebar",".banner-bottom,\n.ckwrap,\n.list-item.has-banner",".code-block:has(> div + ins.adsbygoogle + script)","#didyou,\n#wallpaper_left,\n#wallpaper_right,\n.bet365_connect,\n[class*=\"_szponzor_\"]","[class^=\"ad_\"]","[class*=\"adlabel\"],\n[class*=\"leftlogo\"],\n[id*=\"adserver\"]","div#show_news_box,\ndiv.cookie-message","#tab-widget",".m-fbPopup",".m-breakingLayer:has(a[href*=\"nlc.hu/balkonfanatik\"]),\n.m-pcPromoArticlePointsLayer,\n.m-pcPromoFooterLayer,\n.rubAd,\ndiv.m-articleStickySocial,\ndiv.m-breakingLayer","[data-placeholder-caption=\"hirdetés\"]",".noprint,\nDIV[class*=\"ad-container\"]","#cookie-consent",".colorbox-cookiepolicy","#datasheetNavHelp","#slidebox,\n.highlighted-banner","#detect + .wrapper","[class*=\"ad-warning\"],\n[class=\"ad-blocked\"],\n[class=\"p-t-10 ad-blocked\"]","#advert","#adZone,\n#inter,\n#inter-in,\n#origo_offers,\n#szoveges,\n.afc,\n.col-xl-8 + aside.col-xl-4.col-visible-xl,\n.lead-alatti,\n.mw-allow-notification-dialog,\n.origo-jatek-randi-bottom,\n.pr-blokk,\n.swiper-slide.z-slide,\nA[href*=\"xtb.hu\"],\nDIV[id*=\"magnum\"],\nIFRAME[id*=\"bookline\"],\n[class*=\"origoAjanlat\"],\n[class*=\"wsz_rotal\"],\n[id*=\"-hird\"],\n[id*=\"ajanlat_\"],\n[id*=\"hird-\"],\n[id^=\"edigital_\"],\na:has(> div[class*=\"adLabel\"]),\ndiv.mme-doboz,\ndiv[class$=\"widget\"][data-adblockonly=\"1\"],\nsection.spar","div.facebook-layer-box","[class^=\"ad\"]","#zone-halfpage,\n#zone-roaddblock,\n.centercol.sponsor","#zone-titleheader,\n.slidein.popup.closeablenotification.scripted,\n.zone[data-zoneid]","#cookieconsentbar,\n#subscribepopuppanelalign",".banner-content,\na[href*=\"banner_click\"]","#kutu","#recommend,\n.frame-center,\n[class^=\"f10\"],\n[class^=\"grbox\"]","[class^=\"ads-\"]",".justClassBanner","#cikkertesito-reg-form,\n.banner.clearfix,\n.inner","#pushpushgo-container,\n.ad-container,\n.ads-container,\n.adult-overelay,\n.ph-flexi-box-wrap,\n.ui-dialog[aria-describedby=\"newsletter-modal\"],\n.ui-widget-overlay.ui-front,\n[aria-describedby=\"dialog-welcome\"],\n[class*=\"adbreak\"],\n[class*=\"c_banner\"],\n[class*=\"placeholder\"],\n[class=\"ph ph-responsive-wrap\"],\n[data-analytics-value]","#popup",".articleMetadata,\n.container.css-table > div:not(.container),\n.edgebox-widget.show,\n.introjs-helperLayer,\n.introjs-overlay,\n.introjs-tooltip,\n.port-adbd,\n[class*=\"_spon\"],\n[class=\"advert fix-advert\"]","#BlockCikkajanlo,\n#mymodal2,\n.footer--partners,\nDIV[id*=\"adocean\"],\n[data-qa=\"oil-Layer\"],\n[data-qa=\"oil-full\"]",".lead_alatti_txt,\n.mfor_cikk_beuszo,\n.news-page > div[style*=\"background: #FFF900;\"]:first-child","#newsletter_footer,\n#twister-banner,\n.cookie-layer","#fb_like_modal",".popup","#top > div:first-child","[class*=\"banner \"],\n[id^=\"overlay\"]","[aria-describedby=\"newsletter-modal\"],\n[class*=\"adv--\"]","#wallpaper,\n.wallpaper-link","#psCookieNotification,\ndiv.ad-sm-text",".std0,\nIMG[src=\"images/hirdetes.gif\"]","#gdprCookieWrap,\n[class*=\"AdWrap\"],\n[id*=\"AdWrap\"]","#enableCookieDiv","[id*=\"ctnet_ad_\"],\ndiv[class*=\"ad \"]","#fhr-cookie-bar,\n#fragment,\n[class*=\"-ad-\"]","#text-9,\ndiv.sprtrvs-ad,\ndiv.tt-shortcode-1,\ndiv.tt-shortcode-2","#menusimple2 + div,\ndiv[style=\"width:100%;height:14px;text-align:left;font-size:9px;letter-spacing:3px;color:#5F5F5F;border-bottom:1px solid #CCC;margin: 10px 0 5px 0;\"],\nscript[async] + [data-widget-id]","#push-notification,\n.kezdo-kereso,\n[box-name=\"Hirdetés\"],\n[class*=\"Adv\"],\n[class*=\"peelgame\"],\n[class^=\"adact\"],\n[class^=\"adx_\"],\n[id*=\"Advert\"],\n[id*=\"peelgame\"],\ndiv.container.banner-container.left,\ndiv.container.banner-container.right,\ndiv.container.banner-container.wide > *","#google-display","[src*=\"hirdetes_\"]",".cikk-hir,\n[class*=\"googlebox\"],\ndiv[class*=\"adserver\"],\ndiv[id*=\"kirakat\"],\ndiv[id*=\"rightad\"]","[class=\"wp-container wp-top\"]","div.fb_shares",".modal_popup",".stream-item,\n[id^=\"stream-item-\"],\n[id^=\"tie-block\"]:has(.stream-title)",".rightContent + [style]","#cookie-policy-bar,\n#hatterkep,\n#rovatpromo,\n.adslabel,\n[class^=\"ads_\"],\n[class^=\"ads_\"] + .clear,\niframe[class*=\"my-fbrecommend\"]",".article_contiune_link","#ecom_pr,\n.ad-wrap-100,\n.jobb_300","#magnum","[class*=\"google-cikk\"]","[style=\"height: 250px\"]","#app-cookie-policy","div.banner",".kiemelttartalombox_feher","div[id*=\"hirdetes\"]",".border-top.p-4.bg-8.cookie-alert__inner",".spu-bg,\n.spu-box,\n[style=\"margin: 8px 0; clear: both;\"]",".skybanner","[id*=\"_bnr\"]",".sgpb-theme-3-overlay.sgpb-popup-overlay-1402.sgpb-popup-overlay,\nimg[class*=\"sgpb-\"]",".cross-site-programmatic-zones",".cikk-torzs-content-container > .kep_szeles.kep,\n.hasznaltautok-iframe-cikk-torzs,\n.header-tk-ajanlo,\n.joautok-iframe-cikk-torzs,\n.microsite,\n.szelso-jobb-lead_container,\n.totalkarWidget","[id*=\"adocean\"]",".ooono_promo","div.qc-cmp-ui-container",".adsense","#popunder_featured,\n.banner_box",".leftSide > .bnr,\n.rightSide > .bnr,\n.row:has(.mainTopBnr)","#blanket,\n#popUpDiv",".hird-cont",".banner-commercial,\n.reklamnagy",".page-rightside-advert,\ndiv[id*=\"advert-container\"]","[class*=\"szovegkozi\"],\n[id*=\"reklam_\"]",".adszoveg,\n[class*=\"ad_container\"],\n[class*=\"guestbox\"],\ndiv[class*=\"microsite\"],\ndiv[id*=\"microsite\"]","#backdrop,\n#best-cars-layer,\n#beta-message-invite,\n.centerHead,\n[class*=\"Etarget\"],\n[class*=\"Hirdetes\"],\n[class*=\"advert \"],\n[class*=\"szponzor\"]","[style^=\"bottom: 0px; left: 0px; position: fixed; width:\"],\ndiv[class*=\"-ad\"],\ndiv[class*=\"hird-\"],\ndiv[class*=\"hirdetes\"],\ndiv[class=\"fej_felett cf\"],\ndiv[id*=\"etarget\"]","#sitemessage",".top-video-container-banner","div[id*=\"Banner\"]","[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.901961); display: block;\"]",".no_banner",".footprint_cookie","[id*=\"_ajanlatunk_\"],\ndiv.floating_share","[id*=\"AdFrame\"]","[class=\"wc_content wc_contentwide\"],\n[id*=\"AdZone\"]","div.penci-wrap-gprd-law,\ndiv.sgpb-popup-dialog-main-div-theme-wrapper-1,\ndiv.sgpb-popup-overlay-42657,\ndiv.sgpb-popup-overlay-42658","[id*=\"sense-\"]",".adsListItem,\n.videoBanner",".logopic2 + .fll,\n.overlay,\n.pupopadbox,\n[class=\"cikkbanner hirdbox mh40 listafriss\"],\n[style=\"margin-left:auto;margin-right:auto;width:980px;text-align:center\"]",".d-none[style*=\"padding: 10px\"],\n.d-xl-none[style*=\"padding: 10px\"],\n.post_content_box_article_continue + .text-center,\n.post_content_box_sidebar","#sidebad,\n#spu-main,\n#text-html-widget-6,\n[class*=\"PostAd\"],\n[class=\"e3lan e3lan-top\"],\n[id*=\"-bg\"]",".Cookie--bottom,\ndiv[id^=\"ga_g\"]","[href^=\"https://rosszlanyok.hu/\"],\n[style]:has(.adslot_1)",".hover_bkgr_fricc","#RedUserNotification","[id*=\"facebox\"]","[id*=\"warning\"]",".post_content_box > .post_content_box_sidebar,\n.post_content_box_article_continue + div,\ndiv.d-xl-block[style*=\"padding: 10px\"],\ndiv.d-xl-none[style*=\"padding: 10px\"]","#zadost,\n.cookies",".wrapper>.slider",".widget.widget_text",".back","#x-pop","#article > section > div:not(.article_content)","#st-2,\n.cookie-consent,\ndiv[id*=\"banner\"]","#Promolecek,\n.header-1,\n[class*=\"Reklam\"],\ndiv[id*=\"Reklam\"],\ndiv[id*=\"anner\"]",".myftp-widget,\n[id^=\"fancybox-\"],\n[id^=\"myftp\"]"];

const hostnamesMap = new Map([["trollfesz.cc",[0,1]],["privatbankar.hu",[0,356]],["harmonikum.co",2],["freewaresoftwarenews.blogspot.com",3],["hir444.blogspot.com",[4,5]],["polusonline.com",[5,41]],["carstyling.com",6],["csajoknak.com",7],["dictzone.com",8],["eredmenyek.com",9],["gumiszoba.com",10],["hazipatika.com",[11,12,13,14]],["delmagyar.hu",[11,28,82,84,95,146,147]],["kisalfold.hu",[11,21,84,95,146,273,274]],["mindenkilapja.hu",11],["sg.hu",[11,365]],["mobilarena.hu",[13,181,182,191,193,194,317]],["24.hu",[14,56,57]],["hirkosar.com",15],["hosszupuskasub.com",[15,16]],["humormagazin.com",17],["hungliaonline.com",[18,19]],["vilagunk.hu",[19,415]],["hu.ign.com",20],["ingatlan.com",21],["data.hu",[21,144]],["harmonet.hu",[21,84,216]],["index.hu",[21,82,84,151,153,154,250,251,252,253,254]],["klubradio.hu",21],["portfolio.hu",[21,257,355]],["ingatlanmagazin.com",22],["revizoronline.com",[22,28]],["444.hu",[22,58]],["autopro.hu",[22,86,87]],["bitport.hu",[22,28,102]],["blogstar.hu",[22,115]],["builder.hu",22],["chat.hu",[22,28,84,132]],["cotcot.hu",[22,84,136]],["dimo.hu",22],["donna.hu",[22,28]],["epresso.hu",22],["eropolis.hu",22],["es.hu",[22,28,169]],["est.hu",[22,171]],["farm.hu",[22,28]],["femina.hu",[22,42,84,176]],["figyelo.hu",[22,112]],["firstman.hu",22],["fn.hu",[22,82,178]],["galamus.hu",22],["gondola.hu",[22,28,198]],["gportal.hu",22],["gyoricegregiszter.hu",22],["gyorplusz.hu",[22,143]],["hir6.hu",22],["hirstart.hu",[22,84]],["hrportal.hu",[22,71,235]],["ingatlanok.hu",22],["intima.hu",22],["jogiforum.hu",22],["kalohirek.hu",[22,28,265]],["kamaszpanasz.hu",[22,266,267]],["kapos.hu",22],["kaposvarmost.hu",22],["komment.hu",[22,28,84]],["lifemagazin.hu",[22,28,290]],["lovebox.hu",22],["magyarhirlap.hu",[22,28,191,299]],["mainap.hu",22],["mfor.hu",[22,309]],["mixonline.hu",22],["mmonline.hu",22],["mno.hu",[22,112,113,158,316]],["moly.hu",22],["napi.hu",[22,28,84,153,319]],["napiszar.hu",22],["nemzetisport.hu",[22,28,162,248,311,324,325]],["nice.hu",[22,327]],["noinetcafe.hu",22],["noplaza.hu",22],["novagyok.hu",[22,28]],["nyest.hu",[22,333]],["origo.hu",[22,28,36,84,112,199,204,287,288,289,339,340,341]],["partyponty.hu",[22,28]],["prim.hu",22],["retikul.hu",[22,364]],["ricsajok.hu",22],["rtlklub.hu",22],["samsungsport.hu",22],["sporthirado.hu",[22,28]],["szoftverbazis.hu",[22,288,383,384]],["tech.hu",[22,28]],["valasz.hu",22],["vidget.hu",22],["weborvos.hu",[22,238]],["wellnesscafe.hu",[22,113,420]],["kronika.ro",22],["sportoldal.ro",22],["szatmar.ro",[22,440]],["deres.tv",22],["karpathir.com",23],["kekfeny.com",24],["ketkes.com",25],["magyarszo.com",[26,27]],["puruttya.hu",26],["napinemszar.hu",[27,321]],["myvip.com",[28,29,30]],["pdafanclub.com",28],["bacsmegye.hu",[28,94]],["betegvagyok.hu",28],["bien.hu",[28,54,84,101]],["divany.hu",[28,84,150,151,152,153,154,155]],["duen.hu",28],["egeszsegkalauz.hu",[28,106,110,160,161]],["eletmod.hu",[28,42,84,166,167]],["eron.hu",28],["geeks.hu",28],["hajdupress.hu",[28,84,210]],["hg.hu",[28,223]],["hirposta.hu",28],["ipon.hu",[28,260]],["kezilabda.hu",28],["kiskegyed.hu",[28,66,106,108,161]],["kreativ.hu",[28,280,281]],["life.hu",[28,29,82,185,286,287,288,289]],["multiplay.hu",28],["pirulapatika.hu",28],["revizoronline.hu",28],["romnet.hu",[28,84,152]],["startlap.hu",[28,242,372]],["stylemagazin.hu",[28,376]],["trademagazin.hu",28],["velvet.hu",[28,84,153,154,250,253,254,398,409]],["demotivalo.net",28],["kakukk.ro",28],["blog.hu",[29,82,111,112,113]],["metazin.hu",29],["holtankoljak.hu",[30,232]],["kapcsolat.hu",30],["mandiner.hu",[30,84,104,224,301]],["nepszava.hu",[30,326]],["najlepsie-clanky.com",[31,32]],["5percblog.hu",[31,59]],["napiszar.com",33],["napiuzlet.com",34],["nemkutya.com",[35,36]],["hir-24.eu",35],["joy.hu",[36,264]],["netfirms.com",37],["paleomedicina.com",38],["pannonrtv.com",[39,40]],["elemzeskozpont.hu",39],["femcafe.hu",[39,84,137,175]],["svedasztal.com",[42,43]],["autonavigator.hu",[42,82,83,84,85]],["szervuszausztria.hu",[42,43]],["ecoline.hu",[43,157]],["teltlanyok.com",44],["5mp.eu",45],["autobazar.eu",46],["eudomain.eu",47],["netbulvar.eu",48],["tarhely.eu",49],["tenyek24.eu",50],["utajovobe.eu",51],["hu",52],["112press.hu",53],["168.hu",[54,55]],["player.hu",[54,352]],["hiros.hu",[56,228]],["777blog.hu",60],["888.hu",[61,62]],["ripost.hu",[62,121]],["ado.hu",63],["adoforum.hu",64],["adozona.hu",[65,66]],["eduline.hu",[66,82,157,158,159]],["agrarszektor.hu",[67,68]],["infostart.hu",[67,257,258]],["penzcentrum.hu",[67,348]],["alapjarat.hu",69],["alfahir.hu",70],["americantourister.hu",[71,72]],["raketa.hu",[71,362]],["androgeek.hu",73],["angol-magyar-szotar.hu",74],["aranyoldalak.hu",[75,76]],["telefonkonyv.hu",76],["arukereso.hu",77],["atlatszo.hu",78],["atv.hu",79],["automotor.hu",[80,81]],["budapestkornyeke.hu",[81,124,125,126,127]],["hasznaltauto.hu",[82,85,217]],["olcsobbat.hu",[82,152,335]],["borsa.hu",[84,119]],["cegbongeszo.hu",[84,113,130]],["civishir.hu",[84,134]],["hajokonyha.hu",84],["heol.hu",[84,95]],["hwsw.hu",[84,146,246]],["itmania.hu",[84,166]],["kitekinto.hu",[84,99,152]],["koponyeg.hu",[84,242,276,277]],["ma.hu",[84,166,167,282]],["motorrevu.hu",84],["noitema.hu",84],["onlinecegjegyzek.hu",84],["sonline.hu",[84,95,368]],["storyonline.hu",[84,375]],["szabadfold.hu",[84,377]],["szoljon.hu",[84,95,385]],["totalcar.hu",[84,154,155,250,252,254,396,397,398]],["travelo.hu",[84,341,400]],["vezess.hu",[84,113,329,410]],["offline.hu",[86,174]],["telekom.hu",[86,387]],["autosjog.hu",[88,89]],["helyitipp.hu",[89,220]],["napjainkportal.hu",[89,323]],["autoszektor.hu",90],["azonnali.hu",91],["babanet.hu",[92,93]],["szepsegbroker.hu",[92,353,380]],["bama.hu",95],["baon.hu",[95,97]],["beol.hu",[95,100]],["boon.hu",95],["duol.hu",95],["feol.hu",95],["haon.hu",[95,113,213,214]],["kemma.hu",95],["szon.hu",95],["teol.hu",95],["vaol.hu",95],["veol.hu",95],["zaol.hu",95],["bankmonitor.hu",96],["bebiztositva.hu",[98,99]],["bkv.hu",[103,104]],["blikk.hu",[105,106,107,108]],["glamour.hu",[106,107,108,161,197]],["blikkruzs.blikk.hu",[109,110]],["freemail.hu",[112,184,185,186]],["mon.hu",[113,213]],["blogspot.hu",114],["tudtade.blogstar.hu",116],["bonuszbrigad.hu",117],["bookline.hu",118],["borsonline.hu",[120,121]],["magyarnemzet.hu",[121,300]],["vg.hu",[121,411]],["bpiautosok.hu",[122,123]],["pestisracok.hu",[123,349]],["likenews.hu",[125,126]],["starity.hu",[125,371]],["kekvillogo.hu",[126,127]],["budapestpark.hu",128],["cartourmagazin.hu",129],["ceginformacio.hu",131],["citromail.hu",133],["computerworld.hu",135],["gamestar.hu",135],["pcworld.hu",135],["puliwood.hu",135],["csaladinet.hu",[137,138]],["csongradihirek.hu",139],["csupasport.hu",[140,141]],["mindmegette.hu",[140,310,311]],["cyberpress.hu",[142,143]],["itthonrolhaza.hu",[143,262]],["dehir.hu",145],["demokrata.hu",148],["dijnet.hu",149],["linkcenter.hu",[152,292]],["transindex.ro",[152,248,280,441]],["totalbike.hu",[154,155,396]],["e-cars.hu",156],["magyarnarancs.hu",157],["sportorvos.hu",[158,370]],["egeszsegtukor.hu",162],["vehir.hu",[162,325,408]],["elelmiszer.hu",163],["elemi.hu",[164,165]],["topark.hu",[164,395]],["epiteszforum.hu",168],["gyakorikerdesek.hu",[169,201,202]],["esport1.hu",170],["evamagazin.hu",172],["f1vilag.hu",[173,174]],["forbes.hu",[174,179]],["filmoldal.hu",177],["fototrend.hu",[180,181,182]],["gamepod.hu",[181,182,190,191,192,193,194]],["hardverapro.hu",[181,182,192,193,215]],["itcafe.hu",[181,182,191,192,193,194]],["prohardver.hu",[181,182,191,192,193,194,360]],["logout.hu",[182,191,192,193,194,294]],["fovarosi-hirhatar.hu",183],["zene.hu",184],["unilife.hu",[185,288]],["accounts.freemail.hu",187],["fressnapf.hu",188],["gamekapocs.hu",189],["gentleman.hu",195],["gepigeny.hu",196],["gphirek.hu",199],["grundoajandek.hu",200],["hoxa.hu",[202,234]],["gyaloglo.hu",[203,204]],["gyartastrend.hu",[205,206,207]],["pharmaonline.hu",[205,350]],["medicalonline.hu",[206,305]],["gyorihir.hu",208],["gyulaihirlap.hu",209],["hang.hu",[211,212]],["magyarhang.org",212],["hatarido-szamitas.hu",218],["haziallat.hu",219],["hestore.hu",221],["hetek.hu",222],["hirado.hu",[224,225]],["hircsarda.hu",226],["hirextra.hu",227],["indavideo.hu",[227,249]],["hirtv.hu",229],["hoc.hu",230],["hogyankell.hu",231],["hotdog.hu",233],["huaweiblog.hu",236],["mlzphoto.hu",[236,314]],["napidroid.hu",[236,320]],["hunbasket.hu",237],["kosarsport.hu",237],["hunhir.hu",238],["hupont.hu",[239,240]],["webbeteg.hu",[240,277,418]],["hvg.hu",[241,242,243]],["tutitippek.hu",242],["vilagszam.hu",[243,312]],["m.hvg.hu",244],["hvo.hu",245],["idokep.hu",247],["ilovebalaton.hu",248],["forum.index.hu",255],["infoajka.hu",256],["infobekescsaba.hu",256],["infocegled.hu",256],["infocelldomolk.hu",256],["infodebrecen.hu",256],["infodombovar.hu",256],["infodunaujvaros.hu",256],["infoesztergom.hu",256],["infofehervar.hu",256],["infogyor.hu",256],["infohodmezovasarhely.hu",256],["infokarcag.hu",256],["infokeszthely.hu",256],["infokiskunfelegyhaza.hu",256],["infomiskolc.hu",256],["infomovar.hu",256],["infonograd.hu",256],["infopapa.hu",256],["inforabakoz.hu",256],["infosarvar.hu",256],["infosporon.hu",256],["infoszentendre.hu",256],["infoszigetkoz.hu",256],["infoszombathely.hu",256],["infotamasi.hu",256],["infotatabanya.hu",256],["infoveszprem.hu",256],["infozalaegerszeg.hu",256],["internet-marketing.hu",259],["ite.hu",261],["ize.hu",263],["napiszex.hu",[263,322]],["sztarklikk.hu",263],["tvgo.hu",263],["ncore.pro",[263,438]],["mozinezo.hu",267],["muhelynet.hu",[267,296]],["kapu.hu",268],["kektura.hu",269],["keol.hu",270],["kfc.hu",271],["kh.hu",272],["gloria.tv",273],["kiszamolo.hu",275],["koroshircentrum.hu",278],["kossuth.hu",279],["marmalade.hu",280],["nol.hu",[280,332]],["turizmusonline.hu",280],["kulturpart.hu",282],["lakberendezes.hu",283],["leet.hu",284],["libri.hu",285],["ok.hu",289],["reblog.hu",289],["videa.hu",[289,412,413]],["lifestory.hu",291],["litera.hu",293],["superiorhirek.hu",293],["love.hu",295],["lumenet.hu",[296,297]],["mafab.hu",298],["manus.hu",302],["mavcsoport.hu",303],["sorozataddict.hu",303],["mediacenter.hu",304],["menetrendek.hu",306],["merce.hu",307],["meska.hu",308],["mitortent.hu",312],["vilagszammagazin.hu",312],["mkbnetbankar.hu",313],["mme.hu",315],["mozishop.hu",315],["mult-kor.hu",318],["nkmenergia.hu",328],["nlc.hu",[329,330]],["noizz.hu",331],["webforditas.hu",[333,419]],["obi.hu",334],["onroad.hu",336],["onvideo.hu",337],["oprend.hu",338],["feliratok.info",339],["otvenentul.hu",342],["hir.ma",[342,426]],["pcforum.hu",[343,344,345]],["prog.hu",[343,345,359]],["pcguru.hu",346],["pecsma.hu",347],["piacesprofit.hu",351],["politaktika.hu",353],["hu.jooble.org",[353,437]],["port.hu",354],["profession.hu",357],["profitline.hu",358],["propeller.hu",[359,361]],["site88.net",359],["rendszerigeny.hu",363],["sielok.hu",366],["simple.hu",367],["sorozatwiki.hu",369],["kereso.startlap.hu",373],["stop.hu",374],["szamoldki.hu",378],["szeged365.hu",379],["szeretlekmagyarorszag.hu",381],["szingliportal.hu",382],["sztaki.hu",384],["telefonguru.hu",386],["terhesferfi.hu",388],["termalfurdo.hu",389],["terminal.hu",390],["thaimatrac.hu",391],["titkokszigete.hu",392],["titkosrandi.hu",393],["tlap.hu",394],["traffihunter.hu",399],["turmixvilag.hu",401],["twn.hu",402],["ugytudjuk.hu",403],["usernet.hu",404],["valaszonline.hu",405],["vasarnap.hu",406],["vatera.hu",407],["videaloop.hu",413],["videoklinika.hu",414],["vs.hu",416],["wasabi.hu",417],["widescreen.hu",421],["wikiszotar.hu",422],["online.filmek-sorozatok.info",423],["kuruc.info",424],["zoldmano.info",425],["szekelyfold.ma",427],["filmvilag.me",428],["online-filmek.me",429],["androbit.net",430],["netii.net",431],["notonlyporn.net",432],["szineshir.net",433],["calculat.org",434],["feliratok.org",435],["hogyan.org",436],["maszol.ro",439],["nepszava.us",442]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
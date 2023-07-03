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

// ruleset: chn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#main_content > .grid-boxes-in:has(> iframe[src^=\\\"//adserver.juicyads.com/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#main_content > .grid-boxes-in:has(> iframe[src^=\\\"https://syndication.exosrv.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".ebookRight > div.tb_cell.mb10\",\"tasks\":[[\"has\",{\"selector\":\" > div.listcell > div.lc_head > h2\",\"tasks\":[[\"has-text\",\"课本赞助商\"]]}]]}"],["{\"selector\":\"#PAGE_AD_1\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".imgNewText\",\"tasks\":[[\"has\",{\"selector\":\" > footer > .info > .source\",\"tasks\":[[\"has-text\",\"/广告/\"]]}]]}","{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\" > div > p\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\" > h1\",\"tasks\":[[\"has-text\",\"推广\"]]}]]}"],["{\"selector\":\".riverSections-DS-EntryPoint1-1 > div[style^=\\\"display: grid;\\\"] > div[style^=\\\"grid-area:\\\"]:last-child > .card-DS-card1-1 > div[class^=\\\"nativeAd-DS-card\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"/贊助|推廣/\"]]}"],["{\"selector\":\".cube-list-recommend > div.cube-mod.cpc-card > div.cube-bd > div.cube-card > div.dh-cpcad-container\",\"tasks\":[[\"upward\",\"div.cube-mod.cpc-card\"]]}"],["{\"selector\":\".index-list-item\",\"tasks\":[[\"has\",{\"selector\":\".tip-time\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".tl_shadow\",\"tasks\":[[\"has\",{\"selector\":\" > .ti_item > .ti_infos > .label_text_tag\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".ex-card-common:has(.gg-icon)\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".van-slide > .item:has(.bypb-icon)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".container-fluid > .row > .item\",\"tasks\":[[\"has\",{\"selector\":\" > .card > .card-body > .lines > span.badge\",\"tasks\":[[\"has-text\",\"/^ad$/\"]]}]]}","{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"ad\"]]}]]}"],["{\"selector\":\".slide_doubleimg > .baiBox\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body > font\",\"tasks\":[[\"has-text\",\"function\"]]}"],["{\"selector\":\".readingList > ul > div\",\"tasks\":[[\"has\",{\"selector\":\" > li > span\",\"tasks\":[[\"has-text\",\"PR\"]]}]]}"],["{\"selector\":\".tabbable > div\",\"tasks\":[[\"has-text\",\"宝红\"]]}"],["{\"selector\":\"span\",\"tasks\":[[\"has\",{\"selector\":\" > p\",\"tasks\":[[\"has-text\",\"高速\"]]}]]}","{\"selector\":\"ul\",\"tasks\":[[\"has\",{\"selector\":\" > dd\",\"tasks\":[[\"has-text\",\"高速\"]]}]]}"],["{\"selector\":\".body > div.body-wrap\",\"tasks\":[[\"has\",{\"selector\":\" > div.mod-box > div.mod-title > h3\",\"tasks\":[[\"has-text\",\"友情链接\"]]}]]}"],["{\"selector\":\".SharePanel\",\"tasks\":[[\"has\",{\"selector\":\" > .SharePanel-content > .SharePanel-contentTitle\",\"tasks\":[[\"has-text\",\"福利\"]]}]]}"],["{\"selector\":\"li.s-item\",\"tasks\":[[\"has\",{\"selector\":\"span[role=\\\"text\\\"] > span\",\"tasks\":[[\"has-text\",\"助\"]]}]]}"],["{\"selector\":\"#sidebar__inner > #links-row-1 > .box.folder\",\"tasks\":[[\"has\",{\"selector\":\" > h4\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\" > div > .content-other > .content-type\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".cc5278_banner_ad\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"titleImg-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"source-\\\"]\",\"tasks\":[[\"has-text\",\"推广\"]]}]]}"],["{\"selector\":\"#rightPanel div[id^=\\\"page-\\\"] ~ div[class] > div > div[style^=\\\"display:\\\"] ins.adsbygoogle\",\"tasks\":[[\"upward\",\"div[style^=\\\"display:\\\"]\"]]}"],["{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".feed-shared-actor__description span\",\"tasks\":[[\"has-text\",\"/促銷內容|广告/\"]]}]]}","{\"selector\":\".core-rail > div > div[id^=\\\"ember\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".feed-shared-actor__sub-description span\",\"tasks\":[[\"has-text\",\"/促銷內容|广告/\"]]}]]}"],["{\"selector\":\"div[data-widget-area=\\\"sidebar\\\"] > div[class=\\\"panel panel-primary\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > div.panel-heading > h3\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".forum_Post_index\",\"tasks\":[[\"has\",{\"selector\":\"nobr\",\"tasks\":[[\"has-text\",\"18\"]]}]]}"],["{\"selector\":\".news_info > p\",\"tasks\":[[\"has\",{\"selector\":\" > strong\",\"tasks\":[[\"has-text\",\"双11红包活动推荐\"]]}]]}"],["{\"selector\":\"div[id^=\\\"aaaDiv\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\" margin10_\\\"] > div[data-reactid] > a[class^=\\\"clearfix box_\\\"][data-on=\\\"click\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > .right > [class^=\\\"category_\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}","{\"selector\":\"div[class^=\\\"leftSide_\\\"] > ._popIn_recommend + div[data-reactid]:last-child > h2\",\"tasks\":[[\"has-text\",\"NOWnews 推薦\"]]}"],["{\"selector\":\".swiper-wrapper > li.swiper-slide:has(> a[target=\\\"_blank\\\"]:not([href^=\\\"/\\\"]))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^((?!forum.php).)*$/\"],[\"spath\",\"#toptb ~ #wp > *:not(div):not(style):not(ul):not(script) + div[class][id]:has(div[style=\\\"display:none\\\"])\"]]}"],["{\"selector\":\".col-md-4 > div.row\",\"tasks\":[[\"has\",{\"selector\":\" > div.col > h5\",\"tasks\":[[\"has-text\",\"支持一下吧\"]]}]]}"],["{\"selector\":\".asset-content > p\",\"tasks\":[[\"has-text\",\"/二维|助教|0 元|报名费|原价/\"],[\"spath\",\" + p + p > img\"]]}","{\"selector\":\".asset-content > p\",\"tasks\":[[\"has-text\",\"/二维|助教|0 元|报名费|原价/\"],[\"spath\",\" + p > img\"]]}"],["{\"selector\":\".tpc_content\",\"tasks\":[[\"has\",{\"selector\":\" > b:nth-child(1n+40) > span > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]\",\"tasks\":[[\"has-text\",\"91TV\"]]}],[\"spath\",\" > :nth-child(-1n+45)\"]]}","{\"selector\":\".tpc_content\",\"tasks\":[[\"has\",{\"selector\":\" > b:nth-child(1n+50) > span > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]\",\"tasks\":[[\"has-text\",\"91TV\"]]}],[\"spath\",\" > :nth-child(-1n+55)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\" > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+150)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+155)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\" > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+160)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+170)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\" > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+180)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+188)\"]]}","{\"selector\":\"[class]\",\"tasks\":[[\"has\",{\"selector\":\" > a[onmouseover=\\\"this.style.background='#DEF5CD';\\\"]:nth-child(1n+190)\",\"tasks\":[[\"has-text\",\"/赌|娱|澳/\"]]}],[\"spath\",\" > :nth-child(-1n+195)\"]]}"],["{\"selector\":\".cell\",\"tasks\":[[\"has\",{\"selector\":\".txt\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".imgcell\",\"tasks\":[[\"has\",{\"selector\":\".txt\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\"div[class^=\\\"right-feedback\\\"]\",\"tasks\":[[\"has\",{\"selector\":\" > .list-step-title\",\"tasks\":[[\"has-text\",\"网游\"]]}]]}"],["{\"selector\":\".list16 > ul > li\",\"tasks\":[[\"has-text\",\"广告\"]]}"],["{\"selector\":\"#wrapper > #mainbar > .area:not(#story):not(#comments)\",\"tasks\":[[\"has\",{\"selector\":\" > h3 > a[href]\",\"tasks\":[[\"has-text\",\"商品推薦\"]]}]]}"],["{\"selector\":\"#Rightbar > .box > .inner > .sidebar_units:not(:has(+ strong))\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"#Rightbar > .box > .inner:has(> a[href]:only-child) + .sidebar_compliance > a[href=\\\"/advertise\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"#Rightbar > .box\",\"tasks\":[[\"has\",{\"selector\":\" > .inner > div > span\",\"tasks\":[[\"has-text\",\"Sponsored by\"]]}]]}","{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\" > .inner > div > span[style]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".card-wrap\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\" > .card-top > .s-fr\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".card-wrap\",\"tasks\":[[\"has\",{\"selector\":\" > .card-film > .card-head > .title\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".card-wrap\",\"tasks\":[[\"has\",{\"selector\":\" > .card-top > .s-fr\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\".wbpro-ad-tag\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\".wbpro-auth-tag > div\",\"tasks\":[[\"has-text\",\"热推\"]]}]]}","{\"selector\":\".vue-recycle-scroller__item-view\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"wbpro-icon-search\\\"]\",\"tasks\":[[\"has-text\",\"/商|上新|好物/\"]]}]]}","{\"selector\":\".wbpro-side-panel\",\"tasks\":[[\"has\",{\"selector\":\"span[class^=\\\"wbpro-icon-search\\\"]\",\"tasks\":[[\"has-text\",\"商\"]]}]]}"],["{\"selector\":\"div[id^=\\\"postmessage_\\\"] > div[align=\\\"center\\\"][style^=\\\"font-size:11px;\\\"] > font\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".js-stream-content\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"雅虎搜尋\"]]}]]}","{\"selector\":\".stream-item\",\"tasks\":[[\"has\",{\"selector\":\" > div > div > div > span\",\"tasks\":[[\"has-text\",\"即日熱搜\"]]}]]}"],["{\"selector\":\"#carousel-container > div[class^=\\\"D_\\\"] > div[class^=\\\"D_\\\"] > div[style^=\\\"width:\\\"]:has(a[aria-label^=\\\"licksang\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sidebar > ul\",\"tasks\":[[\"has\",{\"selector\":\" > h3\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}","{\"selector\":\".commentlist > li.row\",\"tasks\":[[\"has\",{\"selector\":\" > div > font\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".myui-panel-bg\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"广告\"]]}]]}"],["{\"selector\":\".widget_text > .inn-sidebar__widget\",\"tasks\":[[\"has\",{\"selector\":\" > .poi-panel__header > .poi-panel__header__title\",\"tasks\":[[\"has-text\",\"赞助商\"]]}]]}"],["{\"selector\":\".container-fluid > div.row\",\"tasks\":[[\"has\",{\"selector\":\" > div.item > div.card > div.card-body > div > span\",\"tasks\":[[\"has-text\",\"/^ad$/\"]]}]]}"],["{\"selector\":\".img-list > .img-item:has(> a[href*=\\\".ad_click\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"a.focus_title_inner[href*=\\\".ad_click\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#hellBoy > li[track-by=\\\"$index\\\"] > div[style] > .show-div\",\"tasks\":[[\"has\",{\"selector\":\" > .show-card > .update-play\",\"tasks\":[[\"has-text\",\"/^AD$/\"]]}]]}","{\"selector\":\".slider-group > .nut-swiper > .nut-swiper-inner > .nut-swiper-item\",\"tasks\":[[\"has\",{\"selector\":\" > .swiper-page > span\",\"tasks\":[[\"has-text\",\"/^AD/\"]]}]]}"],["{\"selector\":\"#sidebar > section.widget_text > div.textwidget > script[src^=\\\"//pagead2.googlesyndication.com/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"section[class*=\\\"widget_text\\\"] > .widget-wrap > .textwidget > div[class^=\\\"Zi_ad\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"div[data-index] > article\",\"tasks\":[[\"has-text\",\"贊助活動\"]]}"],["{\"selector\":\"article > aside.left > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\" > h4\",\"tasks\":[[\"has-text\",\"廣告\"]]}]]}"]];

const hostnamesMap = new Map([["getrelax.cc",0],["haoduoyun.cc",1],["bigpixel.cn",2],["lenovo.com.cn",3],["kostool.cn",4],["microsoftnews.msn.cn",5],["141jj.com",6],["hao.360.com",7],["news.baidu.com",8],["tieba.baidu.com",9],["bdimg.com",9],["tieba.com",9],["bilibili.com",10],["cartoon18.com",11],["military.china.com",12],["chuzuche8.com",13],["ck101.com",14],["copyfuture.com",15],["ddooo.com",16],["dilidili3.com",17],["douyu.com",18],["ebay.com",19],["fox-saying.com",20],["guilinlife.com",21],["hboav.com",22],["ifeng.com",23],["lihkg.com",24],["linkedin.com",25],["bbs.liyuans.com",26],["muchong.com",27],["news.mydrivers.com",28],["nfmovies.com",29],["nownews.com",30],["olevod.com",31],["pcbeta.com",32],["rouman5.com",33],["ruanyifeng.com",34],["rvlev.com",35],["t66y.com",35],["image.so.com",36],["sogou.com",37],["news.sohu.com",38],["www.sohu.com",38],["oops.udn.com",39],["v2ex.com",40],["weibo.com",41],["wholehk.com",42],["yahoo.com",43],["carousell.com.hk",44],["jandan.net",45],["nfstar.net",46],["hmoe.one",47],["pornbest.org",48],["nivod4.tv",49],["nivod5.tv",49],["m.nivod4.tv",50],["m.nivod5.tv",50],["ants.tw",51],["dacota.tw",52],["dcard.tw",53],["kukuo.tw",54],["sharonlife.tw",55]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
class Tracker {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
}
exports.Tracker = Tracker;

},{}],3:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./Tracker"), exports);

},{"./Source":1,"./Tracker":2}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./base"), exports);
__exportStar(require("./models"), exports);

},{"./base":3,"./models":47}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],6:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],7:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],8:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],9:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],10:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],11:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],12:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],13:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],14:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],15:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],17:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],18:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],19:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],20:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],21:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],22:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],23:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Button"), exports);
__exportStar(require("./Form"), exports);
__exportStar(require("./Header"), exports);
__exportStar(require("./InputField"), exports);
__exportStar(require("./Label"), exports);
__exportStar(require("./Link"), exports);
__exportStar(require("./MultilineLabel"), exports);
__exportStar(require("./NavigationButton"), exports);
__exportStar(require("./OAuthButton"), exports);
__exportStar(require("./Section"), exports);
__exportStar(require("./Select"), exports);
__exportStar(require("./Switch"), exports);
__exportStar(require("./WebViewButton"), exports);
__exportStar(require("./FormRow"), exports);
__exportStar(require("./Stepper"), exports);

},{"./Button":8,"./Form":9,"./FormRow":10,"./Header":11,"./InputField":12,"./Label":13,"./Link":14,"./MultilineLabel":15,"./NavigationButton":16,"./OAuthButton":17,"./Section":18,"./Select":19,"./Stepper":20,"./Switch":21,"./WebViewButton":22}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCode = void 0;
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["UNKNOWN"] = "_unknown";
    LanguageCode["BENGALI"] = "bd";
    LanguageCode["BULGARIAN"] = "bg";
    LanguageCode["BRAZILIAN"] = "br";
    LanguageCode["CHINEESE"] = "cn";
    LanguageCode["CZECH"] = "cz";
    LanguageCode["GERMAN"] = "de";
    LanguageCode["DANISH"] = "dk";
    LanguageCode["ENGLISH"] = "gb";
    LanguageCode["SPANISH"] = "es";
    LanguageCode["FINNISH"] = "fi";
    LanguageCode["FRENCH"] = "fr";
    LanguageCode["WELSH"] = "gb";
    LanguageCode["GREEK"] = "gr";
    LanguageCode["CHINEESE_HONGKONG"] = "hk";
    LanguageCode["HUNGARIAN"] = "hu";
    LanguageCode["INDONESIAN"] = "id";
    LanguageCode["ISRELI"] = "il";
    LanguageCode["INDIAN"] = "in";
    LanguageCode["IRAN"] = "ir";
    LanguageCode["ITALIAN"] = "it";
    LanguageCode["JAPANESE"] = "jp";
    LanguageCode["KOREAN"] = "kr";
    LanguageCode["LITHUANIAN"] = "lt";
    LanguageCode["MONGOLIAN"] = "mn";
    LanguageCode["MEXIAN"] = "mx";
    LanguageCode["MALAY"] = "my";
    LanguageCode["DUTCH"] = "nl";
    LanguageCode["NORWEGIAN"] = "no";
    LanguageCode["PHILIPPINE"] = "ph";
    LanguageCode["POLISH"] = "pl";
    LanguageCode["PORTUGUESE"] = "pt";
    LanguageCode["ROMANIAN"] = "ro";
    LanguageCode["RUSSIAN"] = "ru";
    LanguageCode["SANSKRIT"] = "sa";
    LanguageCode["SAMI"] = "si";
    LanguageCode["THAI"] = "th";
    LanguageCode["TURKISH"] = "tr";
    LanguageCode["UKRAINIAN"] = "ua";
    LanguageCode["VIETNAMESE"] = "vn";
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaStatus = void 0;
var MangaStatus;
(function (MangaStatus) {
    MangaStatus[MangaStatus["ONGOING"] = 1] = "ONGOING";
    MangaStatus[MangaStatus["COMPLETED"] = 0] = "COMPLETED";
    MangaStatus[MangaStatus["UNKNOWN"] = 2] = "UNKNOWN";
    MangaStatus[MangaStatus["ABANDONED"] = 3] = "ABANDONED";
    MangaStatus[MangaStatus["HIATUS"] = 4] = "HIATUS";
})(MangaStatus = exports.MangaStatus || (exports.MangaStatus = {}));

},{}],27:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],28:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],29:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],30:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],31:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],32:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],33:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],34:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],35:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],36:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],37:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOperator = void 0;
var SearchOperator;
(function (SearchOperator) {
    SearchOperator["AND"] = "AND";
    SearchOperator["OR"] = "OR";
})(SearchOperator = exports.SearchOperator || (exports.SearchOperator = {}));

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = void 0;
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],40:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],41:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
/**
 * An enumerator which {@link SourceTags} uses to define the color of the tag rendered on the website.
 * Five types are available: blue, green, grey, yellow and red, the default one is blue.
 * Common colors are red for (Broken), yellow for (+18), grey for (Country-Proof)
 */
var TagType;
(function (TagType) {
    TagType["BLUE"] = "default";
    TagType["GREEN"] = "success";
    TagType["GREY"] = "info";
    TagType["YELLOW"] = "warning";
    TagType["RED"] = "danger";
})(TagType = exports.TagType || (exports.TagType = {}));

},{}],43:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],44:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],45:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],46:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],47:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Chapter"), exports);
__exportStar(require("./HomeSection"), exports);
__exportStar(require("./DynamicUI"), exports);
__exportStar(require("./ChapterDetails"), exports);
__exportStar(require("./Manga"), exports);
__exportStar(require("./MangaTile"), exports);
__exportStar(require("./RequestObject"), exports);
__exportStar(require("./SearchRequest"), exports);
__exportStar(require("./TagSection"), exports);
__exportStar(require("./SourceTag"), exports);
__exportStar(require("./Languages"), exports);
__exportStar(require("./Constants"), exports);
__exportStar(require("./MangaUpdate"), exports);
__exportStar(require("./PagedResults"), exports);
__exportStar(require("./ResponseObject"), exports);
__exportStar(require("./RequestManager"), exports);
__exportStar(require("./RequestHeaders"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./SourceStateManager"), exports);
__exportStar(require("./RequestInterceptor"), exports);
__exportStar(require("./TrackedManga"), exports);
__exportStar(require("./SourceManga"), exports);
__exportStar(require("./TrackedMangaChapterReadAction"), exports);
__exportStar(require("./TrackerActionQueue"), exports);
__exportStar(require("./SearchField"), exports);
__exportStar(require("./RawData"), exports);
__exportStar(require("./SearchFilter"), exports);

},{"./Chapter":5,"./ChapterDetails":6,"./Constants":7,"./DynamicUI":23,"./HomeSection":24,"./Languages":25,"./Manga":26,"./MangaTile":27,"./MangaUpdate":28,"./PagedResults":29,"./RawData":30,"./RequestHeaders":31,"./RequestInterceptor":32,"./RequestManager":33,"./RequestObject":34,"./ResponseObject":35,"./SearchField":36,"./SearchFilter":37,"./SearchRequest":38,"./SourceInfo":39,"./SourceManga":40,"./SourceStateManager":41,"./SourceTag":42,"./TagSection":43,"./TrackedManga":44,"./TrackedMangaChapterReadAction":45,"./TrackerActionQueue":46}],48:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComicExtra = exports.ComicExtraInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const Parser_1 = require("./Parser");
const COMICEXTRA_DOMAIN = 'https://www.comicextra.com';
exports.ComicExtraInfo = {
    version: '2.0.1',
    name: 'ComicExtra',
    description: 'Extension that pulls western comics from comicextra.com',
    author: 'GameFuzzy',
    authorWebsite: 'http://github.com/gamefuzzy',
    icon: 'icon.png',
    contentRating: paperback_extensions_common_1.ContentRating.MATURE,
    websiteBaseURL: COMICEXTRA_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: paperback_extensions_common_1.TagType.GREEN
        }
    ]
};
class ComicExtra extends paperback_extensions_common_1.Source {
    constructor() {
        super(...arguments);
        this.parser = new Parser_1.Parser();
        this.requestManager = createRequestManager({
            requestsPerSecond: 5,
            requestTimeout: 20000
        });
    }
    getMangaShareUrl(mangaId) {
        return `${COMICEXTRA_DOMAIN}/comic/${mangaId}`;
    }
    getMangaDetails(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/comic/${mangaId}`,
                method: 'GET'
            });
            const data = yield this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(data.data);
            return this.parser.parseMangaDetails($, mangaId);
        });
    }
    getChapters(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/comic/${mangaId}`,
                method: 'GET'
            });
            const data = yield this.requestManager.schedule(request, 1);
            let $ = this.cheerio.load(data.data);
            let chapters = [];
            let pagesLeft = $('a', $('.general-nav')).toArray().length;
            pagesLeft = pagesLeft == 0 ? 1 : pagesLeft;
            while (pagesLeft > 0) {
                const pageRequest = createRequestObject({
                    url: `${COMICEXTRA_DOMAIN}/comic/${mangaId}/${pagesLeft}`,
                    method: 'GET'
                });
                const pageData = yield this.requestManager.schedule(pageRequest, 1);
                $ = this.cheerio.load(pageData.data);
                chapters = chapters.concat(this.parser.parseChapterList($, mangaId));
                pagesLeft--;
            }
            return this.parser.sortChapters(chapters);
        });
    }
    getChapterDetails(mangaId, chapterId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/${mangaId}/${chapterId}/full`,
                method: 'GET',
            });
            let data = yield this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(data.data);
            const unFilteredPages = this.parser.parseChapterDetails($);
            const pages = [];
            const fallback = 'https://cdn.discordapp.com/attachments/549267639881695289/801836271407726632/fallback.png';
            // Fallback if empty
            if (unFilteredPages.length < 1) {
                pages.push(fallback);
            }
            else {
                // Filter out 404 status codes
                request = createRequestObject({
                    url: `${unFilteredPages[0]}`,
                    method: 'HEAD',
                });
                // Try/catch is because the testing framework throws an error on 404
                try {
                    data = yield this.requestManager.schedule(request, 1);
                    if (data.status == 404) {
                        pages.push(fallback);
                    }
                    else {
                        for (const page of unFilteredPages) {
                            pages.push(page);
                        }
                    }
                }
                catch (_a) {
                    pages.push(fallback);
                }
            }
            return createChapterDetails({
                id: chapterId,
                mangaId: mangaId,
                pages: pages,
                longStrip: false
            });
        });
    }
    filterUpdatedManga(mangaUpdatesFoundCallback, time, ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let loadNextPage = true;
            let currPageNum = 1;
            while (loadNextPage) {
                const request = createRequestObject({
                    url: `${COMICEXTRA_DOMAIN}/comic-updates/${String(currPageNum)}`,
                    method: 'GET'
                });
                const data = yield this.requestManager.schedule(request, 1);
                const $ = this.cheerio.load(data.data);
                const updatedComics = this.parser.filterUpdatedManga($, time, ids);
                loadNextPage = updatedComics.loadNextPage;
                if (loadNextPage) {
                    currPageNum++;
                }
                if (updatedComics.updates.length > 0) {
                    mangaUpdatesFoundCallback(createMangaUpdates({
                        ids: updatedComics.updates
                    }));
                }
            }
        });
    }
    getSearchResults(query, metadata) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const page = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.page) !== null && _a !== void 0 ? _a : 1;
            const request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/comic-search`,
                method: 'GET',
                param: `?key=${encodeURIComponent((_b = query.title) !== null && _b !== void 0 ? _b : '')}&page=${page}`
            });
            const data = yield this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(data.data);
            const manga = this.parser.parseSearchResults($);
            let mData = undefined;
            if (!this.parser.isLastPage($)) {
                mData = { page: (page + 1) };
            }
            return createPagedResults({
                results: manga,
                metadata: mData
            });
        });
    }
    getHomePageSections(sectionCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            // Let the app know what the homesections are without filling in the data
            const popularSection = createHomeSection({ id: '2', title: 'POPULAR COMICS', view_more: true });
            const recentSection = createHomeSection({ id: '1', title: 'RECENTLY ADDED COMICS', view_more: true });
            const newTitlesSection = createHomeSection({ id: '0', title: 'LATEST COMICS', view_more: true });
            sectionCallback(popularSection);
            sectionCallback(recentSection);
            sectionCallback(newTitlesSection);
            // Make the request and fill out available titles
            let request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/popular-comic`,
                method: 'GET'
            });
            const popularData = yield this.requestManager.schedule(request, 1);
            let $ = this.cheerio.load(popularData.data);
            popularSection.items = this.parser.parseHomePageSection($);
            sectionCallback(popularSection);
            request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/recent-comic`,
                method: 'GET'
            });
            const recentData = yield this.requestManager.schedule(request, 1);
            $ = this.cheerio.load(recentData.data);
            recentSection.items = this.parser.parseHomePageSection($);
            sectionCallback(recentSection);
            request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}/new-comic`,
                method: 'GET'
            });
            const newData = yield this.requestManager.schedule(request, 1);
            $ = this.cheerio.load(newData.data);
            newTitlesSection.items = this.parser.parseHomePageSection($);
            sectionCallback(newTitlesSection);
        });
    }
    getViewMoreItems(homepageSectionId, metadata) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let webPage = '';
            const page = (_a = metadata === null || metadata === void 0 ? void 0 : metadata.page) !== null && _a !== void 0 ? _a : 1;
            switch (homepageSectionId) {
                case '0': {
                    webPage = `/new-comic/${page}`;
                    break;
                }
                case '1': {
                    webPage = `/recent-comic/${page}`;
                    break;
                }
                case '2': {
                    webPage = `/popular-comic/${page}`;
                    break;
                }
                default:
                    return Promise.resolve(createPagedResults({ results: [] }));
            }
            const request = createRequestObject({
                url: `${COMICEXTRA_DOMAIN}${webPage}`,
                method: 'GET'
            });
            const data = yield this.requestManager.schedule(request, 1);
            const $ = this.cheerio.load(data.data);
            const manga = this.parser.parseHomePageSection($);
            let mData;
            if (!this.parser.isLastPage($)) {
                mData = { page: (page + 1) };
            }
            else {
                mData = undefined; // There are no more pages to continue on to, do not provide page metadata
            }
            return createPagedResults({
                results: manga,
                metadata: mData
            });
        });
    }
}
exports.ComicExtra = ComicExtra;

},{"./Parser":49,"paperback-extensions-common":4}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
const COMICEXTRA_DOMAIN = 'https://www.comicextra.com';
class Parser {
    parseMangaDetails($, mangaId) {
        var _a, _b, _c, _d;
        const titles = [$('.title-1', $('.mobile-hide')).text().trimLeft()];
        const image = $('img', $('.movie-l-img')).attr('src');
        const summary = $('#film-content', $('#film-content-wrapper')).text().trim();
        const relatedIds = [];
        for (const obj of $('.list-top-item').toArray()) {
            relatedIds.push(((_a = $('a', $(obj)).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(`${COMICEXTRA_DOMAIN}/comic/`, '').trim()) || '');
        }
        let status = paperback_extensions_common_1.MangaStatus.ONGOING, author, released;
        const rating = 0;
        let tagArray0 = [];
        let i = 0;
        for (const item of $('.movie-dd', $('.movie-dl')).toArray()) {
            switch (i) {
                case 0: {
                    // Comic Status
                    if ($('a', $(item)).text().toLowerCase().includes('ongoing')) {
                        status = paperback_extensions_common_1.MangaStatus.ONGOING;
                    }
                    else {
                        status = paperback_extensions_common_1.MangaStatus.COMPLETED;
                    }
                    i++;
                    continue;
                }
                case 1: {
                    // Alt Titles
                    if ($(item).text().toLowerCase().trim() == '-') {
                        i++;
                        continue;
                    }
                    titles.push($(item).text().trim());
                    i++;
                    continue;
                }
                case 2: {
                    // Date of release
                    released = (_b = ($(item).text().trim())) !== null && _b !== void 0 ? _b : undefined;
                    i++;
                    continue;
                }
                case 3: {
                    // Author
                    author = (_c = ($(item).text().trim())) !== null && _c !== void 0 ? _c : undefined;
                    i++;
                    continue;
                }
                case 4: {
                    // Genres
                    for (const obj of $('a', $(item)).toArray()) {
                        const id = (_d = $(obj).attr('href')) === null || _d === void 0 ? void 0 : _d.replace(`${COMICEXTRA_DOMAIN}/`, '').trim();
                        const label = $(obj).text().trim();
                        if (typeof id === 'undefined' || typeof label === 'undefined')
                            continue;
                        tagArray0 = [...tagArray0, createTag({ id: id, label: label })];
                    }
                    i++;
                    continue;
                }
            }
            i = 0;
        }
        const tagSections = [createTagSection({ id: '0', label: 'genres', tags: tagArray0 })];
        return createManga({
            id: mangaId,
            rating: rating,
            titles: titles,
            image: image !== null && image !== void 0 ? image : '',
            status: status,
            author: this.decodeHTMLEntity(author !== null && author !== void 0 ? author : ''),
            tags: tagSections,
            desc: this.decodeHTMLEntity(summary !== null && summary !== void 0 ? summary : ''),
            lastUpdate: released,
            relatedIds: relatedIds
        });
    }
    parseChapterList($, mangaId) {
        var _a;
        const chapters = [];
        for (const obj of $('tr', $('#list')).toArray()) {
            const chapterId = (_a = $('a', $(obj)).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(`${COMICEXTRA_DOMAIN}/${mangaId}/`, '');
            let chapNum = chapterId === null || chapterId === void 0 ? void 0 : chapterId.replace('chapter-', '').trim();
            if (isNaN(Number(chapNum))) {
                chapNum = `0.${chapNum === null || chapNum === void 0 ? void 0 : chapNum.replace(/^\D+/g, '')}`;
                if (isNaN(Number(chapNum))) {
                    chapNum = '0';
                }
            }
            const chapName = $('a', $(obj)).text();
            const time = $($('td', $(obj)).toArray()[1]).text();
            if (typeof chapterId === 'undefined')
                continue;
            chapters.push(createChapter({
                id: chapterId,
                mangaId: mangaId,
                chapNum: Number(chapNum),
                langCode: paperback_extensions_common_1.LanguageCode.ENGLISH,
                name: this.decodeHTMLEntity(chapName),
                time: new Date(time)
            }));
        }
        return chapters;
    }
    sortChapters(chapters) {
        const sortedChapters = [];
        chapters.forEach((c) => {
            var _a;
            if (((_a = sortedChapters[sortedChapters.indexOf(c)]) === null || _a === void 0 ? void 0 : _a.id) !== (c === null || c === void 0 ? void 0 : c.id)) {
                sortedChapters.push(c);
            }
        });
        sortedChapters.sort((a, b) => (a.id > b.id) ? 1 : -1);
        return sortedChapters;
    }
    parseChapterDetails($) {
        const pages = [];
        // Get all of the pages
        for (const obj of $('img', $('.chapter-container')).toArray()) {
            const page = $(obj).attr('src');
            if (typeof page === 'undefined')
                continue;
            pages.push(page);
        }
        return pages;
    }
    filterUpdatedManga($, time, ids) {
        var _a, _b, _c;
        const foundIds = [];
        let passedReferenceTime = false;
        for (const item of $('.hlb-t').toArray()) {
            const id = (_c = (_b = ((_a = $('a', item).first().attr('href')) !== null && _a !== void 0 ? _a : '')) === null || _b === void 0 ? void 0 : _b.replace(`${COMICEXTRA_DOMAIN}/comic/`, '').trim()) !== null && _c !== void 0 ? _c : '';
            let mangaTime = new Date(time);
            if ($('.date', item).first().text().trim().toLowerCase() === 'yesterday') {
                mangaTime = new Date(Date.now());
                mangaTime.setDate(new Date(Date.now()).getDate() - 1);
            }
            else {
                mangaTime = new Date($('.date', item).first().text());
            }
            passedReferenceTime = mangaTime <= time;
            if (!passedReferenceTime) {
                if (ids.includes(id)) {
                    foundIds.push(id);
                }
            }
            else
                break;
        }
        if (!passedReferenceTime) {
            return { updates: foundIds, loadNextPage: true };
        }
        else {
            return { updates: foundIds, loadNextPage: false };
        }
    }
    parseSearchResults($) {
        var _a;
        const mangaTiles = [];
        const collectedIds = [];
        for (const obj of $('.cartoon-box').toArray()) {
            const id = (_a = $('a', $(obj)).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(`${COMICEXTRA_DOMAIN}/comic/`, '');
            const titleText = this.decodeHTMLEntity($('h3', $(obj)).text());
            const image = $('img', $(obj)).attr('src');
            if (titleText == 'Not found')
                continue; // If a search result has no data, the only cartoon-box object has "Not Found" as title. Ignore.
            if (typeof id === 'undefined' || typeof image === 'undefined')
                continue;
            if (!collectedIds.includes(id)) {
                mangaTiles.push(createMangaTile({
                    id: id,
                    title: createIconText({ text: titleText }),
                    image: image
                }));
                collectedIds.push(id);
            }
        }
        return mangaTiles;
    }
    parseHomePageSection($) {
        var _a;
        const tiles = [];
        const collectedIds = [];
        for (const obj of $('.cartoon-box').toArray()) {
            const id = (_a = $('a', $(obj)).attr('href')) === null || _a === void 0 ? void 0 : _a.replace(`${COMICEXTRA_DOMAIN}/comic/`, '');
            const titleText = this.decodeHTMLEntity($('h3', $(obj)).text().trim());
            const image = $('img', $(obj)).attr('src');
            if (typeof id === 'undefined' || typeof image === 'undefined')
                continue;
            if (!collectedIds.includes(id)) {
                tiles.push(createMangaTile({
                    id: id,
                    title: createIconText({ text: titleText }),
                    image: image
                }));
                collectedIds.push(id);
            }
        }
        return tiles;
    }
    isLastPage($) {
        for (const obj of $('a', $('.general-nav')).toArray()) {
            if ($(obj).text().trim().toLowerCase() == 'next') {
                return false;
            }
        }
        return true;
    }
    decodeHTMLEntity(str) {
        return str.replace(/&#(\d+);/g, (_match, dec) => {
            return String.fromCharCode(dec);
        });
    }
}
exports.Parser = Parser;

},{"paperback-extensions-common":4}]},{},[48])(48)
});

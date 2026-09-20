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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepository = void 0;
var prisma_js_1 = require("../../config/prisma.js");
var TagRepository = /** @class */ (function () {
    function TagRepository() {
    }
    /**
     * Find multiple tags by slug
     */
    TagRepository.prototype.findBySlugs = function (slugs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (slugs.length === 0)
                    return [2 /*return*/, []];
                return [2 /*return*/, prisma_js_1.default.tag.findMany({
                        where: {
                            slug: {
                                in: slugs,
                            },
                        },
                    })];
            });
        });
    };
    /**
     * Bulk create tags
     */
    TagRepository.prototype.createMany = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (data.length === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, prisma_js_1.default.tag.createMany({
                                data: data,
                                skipDuplicates: true,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Fetch all tags of an article
     */
    TagRepository.prototype.findByArticle = function (articleId) {
        return __awaiter(this, void 0, void 0, function () {
            var articleTags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_js_1.default.articleTag.findMany({
                            where: {
                                articleId: articleId,
                            },
                            include: {
                                tag: true,
                            },
                        })];
                    case 1:
                        articleTags = _a.sent();
                        return [2 /*return*/, articleTags.map(function (at) { return at.tag; })];
                }
            });
        });
    };
    /**
     * Remove all tags from an article
     */
    TagRepository.prototype.removeByArticle = function (articleId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_js_1.default.articleTag.deleteMany({
                            where: {
                                articleId: articleId,
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Upsert article tags in only 3 DB queries
     */
    TagRepository.prototype.upsertArticleTags = function (articleId, tags) {
        return __awaiter(this, void 0, void 0, function () {
            var uniqueTags, existingTags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (tags.length === 0)
                            return [2 /*return*/];
                        uniqueTags = Array.from(new Map(tags.map(function (tag) { return [tag.slug, tag]; })).values());
                        // Create missing tags
                        return [4 /*yield*/, prisma_js_1.default.tag.createMany({
                                data: uniqueTags,
                                skipDuplicates: true,
                            })];
                    case 1:
                        // Create missing tags
                        _a.sent();
                        return [4 /*yield*/, prisma_js_1.default.tag.findMany({
                                where: {
                                    slug: {
                                        in: uniqueTags.map(function (t) { return t.slug; }),
                                    },
                                },
                                select: {
                                    id: true,
                                },
                            })];
                    case 2:
                        existingTags = _a.sent();
                        // Create article-tag mappings
                        return [4 /*yield*/, prisma_js_1.default.articleTag.createMany({
                                data: existingTags.map(function (tag) { return ({
                                    articleId: articleId,
                                    tagId: tag.id,
                                }); }),
                                skipDuplicates: true,
                            })];
                    case 3:
                        // Create article-tag mappings
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TagRepository;
}());
exports.TagRepository = TagRepository;

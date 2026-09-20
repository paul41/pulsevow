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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
var slugify_1 = require("slugify");
var client_1 = require("@prisma/client");
var tag_repository_js_1 = require("./tag.repository.js");
var TagService = /** @class */ (function () {
    function TagService(tagRepository) {
        if (tagRepository === void 0) { tagRepository = new tag_repository_js_1.TagRepository(); }
        this.tagRepository = tagRepository;
    }
    TagService.prototype.extractTags = function (article) {
        var _a;
        var tags = new Map();
        var addTag = function (name, type, slug) {
            if (!(name === null || name === void 0 ? void 0 : name.trim()))
                return;
            var normalizedSlug = (slug === null || slug === void 0 ? void 0 : slug.trim()) ||
                (0, slugify_1.default)(name, {
                    lower: true,
                    strict: true,
                });
            tags.set(normalizedSlug, {
                name: name.trim(),
                slug: normalizedSlug,
                type: type,
            });
        };
        addTag(article.categorySlug, client_1.TagType.TOPIC, article.categorySlug);
        // Author
        addTag(article.author, client_1.TagType.PERSON);
        // Language
        addTag(article.language, client_1.TagType.TOPIC);
        // Normalized tags
        (_a = article.tags) === null || _a === void 0 ? void 0 : _a.forEach(function (tag) {
            return addTag(tag.toString(), client_1.TagType.TOPIC);
        });
        return __spreadArray([], tags.values(), true);
    };
    TagService.prototype.saveArticleTags = function (articleId, article) {
        return __awaiter(this, void 0, void 0, function () {
            var tags;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tags = this.extractTags(article);
                        if (tags.length === 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.tagRepository.upsertArticleTags(articleId, tags)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TagService;
}());
exports.TagService = TagService;
//use lazy loading in react routes

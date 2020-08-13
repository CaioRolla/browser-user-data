"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var platform = __importStar(require("platform"));
var extractConnectedSocialMedias = function () { return __awaiter(_this, void 0, void 0, function () {
    var networlPromises, connectedNetworksNames;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                networlPromises = data_1.networks.map(function (network) {
                    var imgEl = document.createElement('img');
                    imgEl.src = network.url;
                    return new Promise(function (resolve, reject) {
                        imgEl.onload = function () {
                            resolve(network.name);
                        };
                        imgEl.onerror = function () {
                            resolve(null);
                        };
                    });
                });
                return [4 /*yield*/, Promise.all(networlPromises)];
            case 1:
                connectedNetworksNames = _a.sent();
                return [2 /*return*/, connectedNetworksNames.filter(function (networkName) { return !!networkName; })];
        }
    });
}); };
var extractLocation = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (navigator.geolocation) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        // const { latitude, longitude } = position.coords;
                        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`)
                        //   .then(response => resolve(response.json()));
                        resolve({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                    }, reject);
                })];
        }
        return [2 /*return*/];
    });
}); };
var extractReferrer = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, document.referrer];
    });
}); };
var extractPlatform = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                name: platform.name,
                version: platform.version,
                layout: platform.layout,
                os: platform.os ? {
                    architecture: platform.os.architecture,
                    family: platform.os.family,
                    version: platform.os.version
                } : undefined,
                description: platform.description,
                product: platform.product,
                manufacturer: platform.manufacturer
            }];
    });
}); };
var extractHardwareInfo = function () { return __awaiter(_this, void 0, void 0, function () {
    function getUnmaskedInfo(gl) {
        var unMaskedInfo = {
            renderer: '',
            vendor: ''
        };
        var dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (!!dbgRenderInfo) {
            unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
            // unMaskedInfo.display = gl.getParameter(dbgRenderInfo.UNMAKES);
        }
        return unMaskedInfo;
    }
    var canvas, gl, anyNavigator, battery, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                canvas = document.createElement('canvas');
                gl = canvas.getContext('experimental-webgl');
                anyNavigator = navigator;
                if (!anyNavigator['getBattery']) return [3 /*break*/, 2];
                return [4 /*yield*/, anyNavigator.getBattery()];
            case 1:
                _a = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                _a = null;
                _b.label = 3;
            case 3:
                battery = _a;
                return [2 /*return*/, {
                        vendor: getUnmaskedInfo(gl).vendor,
                        renderer: getUnmaskedInfo(gl).renderer,
                        screenWidth: screen.width,
                        screenHeight: screen.height,
                        battery: battery ? {
                            level: battery.level,
                            charging: battery.charging
                        } : undefined
                    }];
        }
    });
}); };
exports.extractData = function (config) {
    if (config === void 0) { config = {
        extractLocation: true
    }; }
    return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = {};
                    return [4 /*yield*/, extractConnectedSocialMedias()];
                case 1:
                    _a.connectedSocialMedias = _c.sent();
                    if (!config.extractLocation) return [3 /*break*/, 3];
                    return [4 /*yield*/, extractLocation().catch(function () { return undefined; })];
                case 2:
                    _b = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _b = undefined;
                    _c.label = 4;
                case 4:
                    _a.location = _b;
                    return [4 /*yield*/, extractReferrer()];
                case 5:
                    _a.referrer = _c.sent();
                    return [4 /*yield*/, extractPlatform()];
                case 6:
                    _a.platform = _c.sent();
                    return [4 /*yield*/, extractHardwareInfo()];
                case 7: return [2 /*return*/, (_a.hardware = _c.sent(),
                        _a)];
            }
        });
    });
};

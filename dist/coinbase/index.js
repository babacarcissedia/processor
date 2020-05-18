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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Index = (function () {
    function Index(options) {
        var apiKey = options.apiKey, apiVersion = options.apiVersion;
        this.apiKey = apiKey;
        this.apiVersion = apiVersion;
    }
    Index.prototype.listCharges = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: 'https://api.commerce.coinbase.com/charges',
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.showCharge = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/charges/" + id,
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_2 = _a.sent();
                        reject(error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.createCharge = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: 'https://api.commerce.coinbase.com/charges',
                                method: 'POST',
                                data: payload,
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_3 = _a.sent();
                        reject(error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.updateCharge = function (id, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: 'https://api.commerce.coinbase.com/charges',
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_4 = _a.sent();
                        reject(error_4);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.cancelCharge = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/charges/" + id + "/cancel",
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_5 = _a.sent();
                        reject(error_5);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.resolveCharge = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/charges/" + id + "/resolve",
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_6 = _a.sent();
                        reject(error_6);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.listCheckouts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/checkouts",
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_7 = _a.sent();
                        reject(error_7);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.showCheckout = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/checkouts/" + id,
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_8 = _a.sent();
                        reject(error_8);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.createCheckout = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/checkouts",
                                method: 'POST',
                                data: payload,
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_9 = _a.sent();
                        reject(error_9);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.updateCheckout = function (id, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/checkouts/" + id,
                                method: 'PUT',
                                data: payload,
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_10 = _a.sent();
                        reject(error_10);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.deleteCheckout = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/checkouts/" + id,
                                method: 'DELETE',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_11 = _a.sent();
                        reject(error_11);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.listEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/charges/events",
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_12 = _a.sent();
                        reject(error_12);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    Index.prototype.showEvent = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var response, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1.default({
                                url: "https://api.commerce.coinbase.com/charges/events/" + id,
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'X-CC-Api-Key': this.apiKey,
                                    'X-CC-Version': this.apiVersion
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        resolve(response.data);
                        return [3, 3];
                    case 2:
                        error_13 = _a.sent();
                        reject(error_13);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    return Index;
}());
exports.default = Index;
//# sourceMappingURL=index.js.map
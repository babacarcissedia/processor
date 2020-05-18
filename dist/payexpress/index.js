"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var crypto_1 = __importDefault(require("crypto"));
var SHA256Encrypt = function (password) {
    var sha256 = crypto_1.default.createHash('sha256');
    sha256.update(password);
    return sha256.digest('hex');
};
var PayExpress = (function () {
    function PayExpress(options) {
        this.options = Object.assign({}, options);
    }
    PayExpress.prototype.requestPayment = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'POST',
                url: 'https://payexpresse.com/api/payment/request-payment',
                headers: {
                    'content-type': 'application/json',
                    API_KEY: _this.options.apiKey,
                    API_SECRET: _this.options.apiSecret
                },
                data: payload
            })
                .then(function (response) { return resolve(response.data); })
                .catch(function (error) { return reject(error); });
        });
    };
    PayExpress.prototype.ipn = function (bodyPayload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var type_event = bodyPayload.type_event, ref_command = bodyPayload.ref_command, item_name = bodyPayload.item_name, item_price = bodyPayload.item_price, devise = bodyPayload.devise, command_name = bodyPayload.command_name, env = bodyPayload.env, token = bodyPayload.token, api_key_sha256 = bodyPayload.api_key_sha256, api_secret_sha256 = bodyPayload.api_secret_sha256;
            var custom_field = JSON.parse(bodyPayload.custom_field);
            if (SHA256Encrypt(_this.options.apiSecret) !== api_secret_sha256
                || SHA256Encrypt(_this.options.apiKey) !== api_key_sha256) {
                return reject(new Error('This is not from PayExpress'));
            }
            resolve(__assign(__assign({}, bodyPayload), { custom_field: custom_field }));
        });
    };
    return PayExpress;
}());
exports.default = PayExpress;
//# sourceMappingURL=index.js.map
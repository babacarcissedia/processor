"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COINBASE_API_VERSION = exports.COINBASE_API_KEY = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.COINBASE_API_KEY = String(process.env.COINBASE_API_KEY || '');
exports.COINBASE_API_VERSION = String(process.env.COINBASE_API_VERSION || '');
//# sourceMappingURL=config.js.map
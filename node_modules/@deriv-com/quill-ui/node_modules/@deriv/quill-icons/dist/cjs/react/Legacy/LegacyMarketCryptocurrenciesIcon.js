"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyMarketCryptocurrenciesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyMarketCryptocurrenciesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#9474af7580b9f54dce8a067aa53aa1c6__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M10.75 0v2.666a6 6 0 0 1 1.782 1.402l.61.703-2.14 2.14-.701-.836a3 3 0 1 0 0 3.85l.701-.837 2.14 2.14-.61.704a6 6 0 0 1-1.782 1.402V16h-2.5v-2.005a6 6 0 0 1-.5 0V16h-2.5v-2.666A6 6 0 0 1 2 8a6 6 0 0 1 3.25-5.334V0h2.5v2.005a6 6 0 0 1 .5 0V0zm-2 3.056a5 5 0 0 0-2 .101V1h-.5v2.315a5 5 0 0 0-.5 9.152 5 5 0 0 0 .5.218V15h.5v-2.158a5 5 0 0 0 1.5.152 5 5 0 0 0 1-.152V15h.5v-2.315a5 5 0 0 0 2.027-1.408l-.71-.71A3.983 3.983 0 0 1 7.935 12a4 4 0 1 1 3.132-6.566l.71-.71A5 5 0 0 0 9.75 3.315V1h-.5v2.158a5 5 0 0 0-.5-.102', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9474af7580b9f54dce8a067aa53aa1c6__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyMarketCryptocurrenciesIcon = LegacyMarketCryptocurrenciesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyMarketCryptocurrenciesIcon);
exports.default = ForwardRef;

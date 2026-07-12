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
exports.MarketStocksAmericanInternationalGroupIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksAmericanInternationalGroupIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#dc724bd5a41c3729b42f6e5e834e5b57__a)' },
        React.createElement("path", { fill: '#1BA3DD', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', d: 'M21.715 16.142h3v.233c.012.477-.051.953-.187 1.41-.135.392-.35.752-.63 1.058a3.37 3.37 0 0 1-2.588 1.102 3.6 3.6 0 0 1-2.617-1.065 3.605 3.605 0 0 1 0-5.182 3.75 3.75 0 0 1 2.7-1.08 3.75 3.75 0 0 1 1.59.337 4.6 4.6 0 0 1 1.417 1.08l-.787.75a2.66 2.66 0 0 0-2.183-1.155 2.62 2.62 0 0 0-1.935.75 2.52 2.52 0 0 0-.788 1.905 2.48 2.48 0 0 0 .878 1.95c.48.446 1.108.697 1.762.705a2.25 2.25 0 0 0 1.463-.525 1.9 1.9 0 0 0 .75-1.282h-1.845z' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M6.617 19.818 10 12.76h.428l3.262 7.057h-1.207l-.75-1.717h-3.12l-.81 1.717zm4.666-2.716-1.08-2.4h-.038l-1.133 2.4z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', d: 'M14.845 19.818h1.102V12.76h-1.102z' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M28 22.57H4V10h24zm-.997-11.603H4.998v10.635h22.005z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dc724bd5a41c3729b42f6e5e834e5b57__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksAmericanInternationalGroupIcon = MarketStocksAmericanInternationalGroupIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksAmericanInternationalGroupIcon);
exports.default = ForwardRef;

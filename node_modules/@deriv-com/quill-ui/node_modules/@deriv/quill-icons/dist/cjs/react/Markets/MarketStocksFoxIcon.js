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
exports.MarketStocksFoxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksFoxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#ad10e0a47775e93dced3aff6a6d8949b__a)' },
        React.createElement("path", { fill: '#3681DA', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', d: 'M6.915 13.657V15h2.84v2.809h-2.84v3.327H4V10.833h6.197l.199 2.824z' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M18.719 12.417q1.45 1.48 1.45 3.575 0 2.11-1.45 3.59-1.451 1.48-3.5 1.48-2.065 0-3.516-1.48-1.45-1.48-1.45-3.59 0-2.094 1.45-3.575 1.451-1.48 3.516-1.481 2.049 0 3.5 1.48m-4.338 5.639q0 .345.254.598.255.255.613.255a.8.8 0 0 0 .606-.255.83.83 0 0 0 .247-.598v-4.173a.85.85 0 0 0-.247-.614.81.81 0 0 0-.606-.254.84.84 0 0 0-.613.254.84.84 0 0 0-.254.614z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', d: 'm23.253 18.557 1.465 2.61H28l-3.114-5.373 2.824-4.961h-3.19l-1.221 2.229-1.206-2.229h-3.297l2.885 4.991-3.053 5.343h3.206z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ad10e0a47775e93dced3aff6a6d8949b__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksFoxIcon = MarketStocksFoxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksFoxIcon);
exports.default = ForwardRef;
